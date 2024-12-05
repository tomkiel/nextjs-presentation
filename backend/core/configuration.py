from importlib import import_module
from pathlib import Path
from dotenv import dotenv_values
import toml
import os


class Settings:
    def __init__(self):
        self.quart_app = os.getenv("QUART_APP", "app:create_app")
        self.app_name = self._set_app_name()
        self.env = self._load_environment()
        self.extensions = self._load_extensions()

    def _set_app_name(self):
        """Determine the app name using the QUART_APP variable."""
        splited_path = self.quart_app.split("app:create_app")
        if len(splited_path) > 1:
            return splited_path[0].strip("/")
        return Path().resolve().name

    def _load_environment(self):
        """
        Load environment variables from system or .env file.
        System variables take precedence over .env values.
        """
        # Load from system environment
        required_keys = [
            "DB_CONNECTION",
            "POSTGRES_USER",
            "POSTGRES_PASSWORD",
            "DB_HOST",
            "DB_PORT",
            "POSTGRES_DB",
        ]
        env = {key: os.getenv(key) for key in required_keys}

        # If any key is missing, load from .env file
        if None in env.values():
            env_path = Path(self.app_name).parent / ".env"
            if env_path.is_file():
                env.update(dotenv_values(env_path))
            else:
                raise FileNotFoundError(
                    ".env file not found and environment variables are incomplete."
                )

        return env

    def _load_extensions(self):
        """Load extensions defined in the TOML configuration file."""
        config_path = Path(self.app_name) / "config" / "app.toml"
        if config_path.is_file():
            return toml.load(config_path).get("EXTENSIONS", [])
        raise FileNotFoundError(f"Configuration file not found: {config_path}")


def load_extensions(app):
    """
    Dynamically load and initialize extensions defined in the configurations.

    Args:
        app: The Quart application instance.
    """
    settings = Settings()
    for extension in settings.extensions:
        try:
            module_name, factory = extension.split(":")
            ext = import_module(f"{settings.app_name}.{module_name}")
            getattr(ext, factory)(app)
        except Exception as e:
            raise ImportError(f"Failed to load extension '{extension}': {e}")


def load_database():
    """
    Construct the database connection string.

    Returns:
        A string representing the database connection URL.
    """
    env = Settings().env
    try:
        return (
            f"{env['DB_CONNECTION']}://{env['POSTGRES_USER']}:"
            f"{env['POSTGRES_PASSWORD']}@{env['DB_HOST']}:"
            f"{env['DB_PORT']}/{env['POSTGRES_DB']}"
        )
    except KeyError as e:
        raise KeyError(f"Missing database configuration key: {e}")
