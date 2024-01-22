QUART_APP := backend/app:create_app
export QUART_APP

virtualenv:
	@python3 -m venv .venv

dev-dependencies:
	@echo "Installing dependencies for dev environment"
	@.venv/bin/python -m pip install -r server/requirements.txt
	@npm --prefix frontend -i

run-database:
	@docker compose -f docker/database/docker-compose.yml up -d

run-proxy:
	@docker compose -f docker/nginx/docker-compose.yml up

run-backend:
	@.venv/bin/quart run

run-hypercorn:
	@.venv/bin/hypercorn -w 4 backend.wsgi:app

run-frontend:
	@npm --prefix frontend run dev

run-dev: run-frontend 

clean:
	@find ./ -name '*.pyc' -exec rm -f {} \;
	@find ./ -name '__pycache__' -exec rm -rf {} \;
	@find ./ -name 'Thumbs.db' -exec rm -f {} \;
	@find ./ -name '*~' -exec rm -f {} \;
	@rm -rf .cache
	@rm -rf .pytest_cache
	@rm -rf .mypy_cache
	@rm -rf build
	@rm -rf dist
	@rm -rf *.egg-info
	@rm -rf htmlcov
	@rm -rf .tox/
	@rm -rf docs/_build
