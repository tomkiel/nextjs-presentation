# Define variables for the project
QUART_APP := backend/app:create_app
MIGRATIONS_DIR := backend/resources/db/migrations
export QUART_APP

# Backend Installation
# Install the recommended Python version, create a virtual environment, and install backend dependencies
backend-install:
	@echo "-> Installing and enabling Python 3.10 for this project using pyenv."
	@pyenv install 3.10 --skip-existing
	@pyenv local 3.10
	@python3 -m venv .venv
	@echo "-> Installing backend dependencies."
	@.venv/bin/python -m pip install -r backend/requirements.txt

# Start the backend server using Quart
backend-start:
	@echo "-> Starting the Quart backend server."
	@.venv/bin/quart run

# Frontend Installation
# Install frontend dependencies using npm
frontend-install:
	@echo "-> Installing frontend dependencies."
	@npm --prefix frontend install

# Start the frontend development server using npm
frontend-start:
	@echo "-> Starting the frontend development server."
	@npm --prefix frontend run dev

# Database Container Management
# Start the database container using Docker or Podman
database-start:
	@echo "-> Starting the database container using Docker/Podman."
	$(docker compose -f docker/database/docker-compose.yml up -d)

# Create a new database migration file
db-migration:
	@echo "-> Creating a new migration file."
	@if [ -z "$(NAME)" ]; then \
		echo -e "Error! Please provide a name for the migration: \nExample: make db-migration NAME=\"migration_name\""; \
		exit 1; \
	else \
		MIGRATION_FILE_NAME=$(MIGRATIONS_DIR)/$$(date --utc +%Y%m%d_%H%M%SZ)_create_$(NAME).sql; \
		echo "CREATE TABLE \"$(NAME)\" ();" > $$MIGRATION_FILE_NAME; \
		echo "-> Migration file created: $$MIGRATION_FILE_NAME"; \
	fi

# Run database migrations
db-migrate:
	@echo "-> Running database migrations."
	@echo "-> IMPORTANT: This feature is experimental and may require adjustments."
	@if [ -z "$(DATABASE_URL)" ]; then \
		echo "Error: Please provide the DATABASE_URL environment variable."; \
		exit 1; \
	elif [ ! -d "$(MIGRATIONS_DIR)" ]; then \
		echo "Error: Migrations directory '$(MIGRATIONS_DIR)' does not exist."; \
		exit 1; \
	else \
		echo "Applying migrations from $(MIGRATIONS_DIR) to the database."; \
		for file in $(MIGRATIONS_DIR)/*.sql; do \
			FILE_NAME=$$(basename $$file); \
			echo "Running migration: $$FILE_NAME"; \
			podman cp $$file nextjs-tutorial-database:/tmp/; \
			podman exec -it nextjs-tutorial-database psql $$DATABASE_URL -f /tmp/$$FILE_NAME || { echo "Error applying migration $$file"; exit 1; }; \
		done; \
		echo "All migrations applied successfully."; \
	fi

# Run the proxy server (e.g., for reverse proxy with Nginx)
proxy-start:
	@echo "-> Running the proxy server (Nginx)."
	$(docker compose -f docker/nginx/docker-compose.yml up -d)

# Start the server using Hypercorn with 4 worker processes
hypercorn-start:
	@echo "-> Starting the server using Hypercorn with 4 workers."
	@.venv/bin/hypercorn -w 4 backend.wsgi:app

# Clean up Python cache and virtual environment
clean:
	@echo "-> Cleaning up Python cache and virtual environment."
	@find ./ -name '__pycache__' -exec rm -rf {} \;
	@rm -rf .cache
	@rm -rf .venv
	@rm -rf frontend/.node_modules

# Print help for available Makefile targets
help:
	@echo "Makefile commands:"
	@echo "  backend-install   - Install backend dependencies and set up Python environment"
	@echo "  backend-start     - Start the backend server (Quart)"
	@echo "  frontend-install  - Install frontend dependencies"
	@echo "  frontend-start    - Start the frontend development server"
	@echo "  database-start    - Start the database container"
	@echo "  db-migration      - Create a new migration file"
	@echo "  db-migrate        - Run database migrations"
	@echo "  proxy-start         - Run the proxy server (e.g., Nginx)"
	@echo "  hypercorn-start   - Start the server using Hypercorn"
	@echo "  clean             - Clean up Python cache and virtual environment"
