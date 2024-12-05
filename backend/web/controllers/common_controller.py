from flask import jsonify


def header_main_menu():
    """
    Retrieves the main menu structure for the website.

    This function returns a JSON-like dictionary representing the menu structure
    for the website's header. It includes various menu items, each with an ID, URL,
    title, order, and optionally, subitems for nested menus (like the 'Sale' menu item).

    Returns:
        dict: A dictionary containing the main menu items with their details.
    """
    return {
        "menu_items": [
            {"id": 1, "url": "#", "title": "Men", "order": 3},
            {"id": 2, "url": "#", "title": "New", "order": 1},
            {"id": 3, "url": "#", "title": "Women", "order": 2},
            {"id": 4, "url": "#", "title": "Kids", "order": 4},
            {
                "id": 5, "url": "#", "title": "Sale", "order": 5, "subitems": [
                    {"id": 1, "url": "#", "title": "Men", "order": 3},
                    {"id": 2, "url": "#", "title": "New", "order": 1},
                    {"id": 3, "url": "#", "title": "Women", "order": 2},
                    {"id": 4, "url": "#", "title": "Kids", "order": 4}
                ]
            },
            {"id": 6, "url": "#", "title": "Blog", "order": 6}
        ]
    }
