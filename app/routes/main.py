from flask import Blueprint

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return 'Welcome to SonicSolace!'

@main_bp.route('/about')
def about():
    return 'About SonicSolace'
