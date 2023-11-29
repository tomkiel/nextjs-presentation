from importlib import import_module
import toml
import pathlib
from dotenv import dotenv_values
import os


class Settings():
    def __init__(self):
        self.quart_app = str(os.environ["QUART_APP"]).replace(
            "/app:create_app", "")
        self.app_path = f"{str(pathlib.Path().resolve())}/{self.quart_app}"
        self.app_name = str(self.quart_app).split('/')[-1]
        self.env = self.__load_environment()
        self.extensions = self.__load_extensions()

    def __load_environment(self):
        """
        Load environment variables from .env file
        """
        if (os.path.isfile(self.app_path + "/../../.env")):
            return {
                **dotenv_values(self.app_path + "/../../.env")
            }
        else:
            return "{}"

    def __load_extensions(self):
        """
        Loads all extensions from the extensions folder
        """
        return toml.load(f'{self.app_path}/config/app.toml')['EXTENSIONS']


def load_extensions(app):
    """
    Load extensions from file
    """
    settings = Settings()
    extensions = settings.extensions
    for extension in extensions:
        # Split data in form `extension.path:factory_function`
        module_name, factory = extension.split(":")
        # Dynamically import extension module.
        ext = import_module(settings.app_name + "." + module_name)
        # Invoke factory passing app.
        getattr(ext, factory)(app)


def load_database():
    """
    Load the database settings
    """
    settings = Settings().env

    db_connection = settings["DB_CONNECTION"]
    db_username = settings["POSTGRES_USER"]
    db_password = settings["POSTGRES_PASSWORD"]
    db_host = settings["DB_HOST"]
    db_port = settings["DB_PORT"]
    db_name = settings["POSTGRES_DB"]
    return f"{db_connection}://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}"
