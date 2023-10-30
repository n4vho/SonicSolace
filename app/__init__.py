from flask import Flask
import os
from flask import session
from config import MASTER_URL
from app.routes.main import main_bp

def create_app():
    app = Flask(__name__)

    # blueprint registration
    app.register_blueprint(main_bp)
        
    return app