from flask import Blueprint
from sqlalchemy import func
from app.models import Product, Category

search_routes = Blueprint('search', __name__)

@search_routes.route('/categories/<search_query>')
def category_search(search_query):
    products = Product.query.join(Category).filter(func.lower(Category.name).like(f'%{search_query.lower()}%') == func.lower(search_query).like(f'%{search_query.lower()}%'))
    return {'products': [product.to_dict() for product in products]}

@search_routes.route('/products/<search_query>')
def product_search(search_query):
    products = Product.query.filter(func.lower(Product.name).like(f'%{search_query.lower()}%'))
    return {'products': [product.to_dict() for product in products]}

# for future use in case we implement user detail page
# @search_routes.route('/users/<search_query>')
# def user_search(search_query):
#     users = User.query.filter(func.lower(User.username) == func.lower(search_query) or func.lower(User.username).like(f'%{search_query.lower()}%'))
#     return {'users': [user.to_dict() for user in users]}
