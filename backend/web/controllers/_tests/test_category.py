import pytest
from quart import Quart, jsonify
from unittest.mock import MagicMock
from backend.database.repositories import product_category_repository
from backend.web.controllers.category_controller import index, featured_categories

# Setup a Quart app for testing
@pytest.fixture
def app():
    app = Quart(__name__)

    # Register the routes for testing
    app.add_url_rule('/categories', 'index', index)
    app.add_url_rule('/categories/featured', 'featured_categories', featured_categories)

    yield app

@pytest.fixture
def client(app):
    return app.test_client()

# Mock the product_category_repository.get_all() method for the tests
@pytest.fixture
def mock_get_all():
    with MagicMock() as mock:
        # Mock the get_all function to return mock data
        product_category_repository.get_all = mock
        yield mock

# Test for the /categories route
@pytest.mark.asyncio
async def test_index(client, mock_get_all):
    # Test case when categories are available
    mock_get_all.return_value = [{"id": 1, "name": "Electronics"}, {"id": 2, "name": "Clothing"}]
    
    response = await client.get('/categories')
    data = await response.get_json()

    assert response.status_code == 200
    assert "categories" in data
    assert len(data["categories"]) == 2
    assert data["categories"][0]["name"] == "Electronics"
    assert data["categories"][1]["name"] == "Clothing"
    
    # Test case when no categories are available
    mock_get_all.return_value = None
    
    response = await client.get('/categories')
    data = await response.get_json()
    
    assert response.status_code == 200
    assert "categories" in data
    assert data["categories"] is None

# Test for the /categories/featured route
@pytest.mark.asyncio
async def test_featured_categories(client):
    response = await client.get('/categories/featured')
    data = await response.get_json()

    assert response.status_code == 200
    assert "description" in data
    assert data["description"] == "The featured product categories"
    assert "categories" in data
    assert data["categories"] == {}
