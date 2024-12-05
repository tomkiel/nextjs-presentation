from backend.app import create_app

# Create the Quart application instance using the factory function
app = create_app()

if __name__ == "__main__":
    # Run the app only if this script is executed directly
    app.run()
