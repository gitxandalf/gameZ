from flask import Blueprint
from app.models import Category, Product

category_routes = Blueprint(
    'categories', __name__)


@category_routes.route('/')
def categories():
    # Route to GET all available Categories
    categories = Category.query.all()
    print("CATEGORIES", categories)
    return {'categories': [category.to_dict() for category in categories]}


@category_routes.route('/<int:id>/products')
def products_by_category(id):
    # GET Route for all data for all products under a certain Category
    category = Category.query.get(id)
    products = Product.query.filter(Product.category_id == id).all()
    return {'category': category.to_dict(), 'products': [product.to_dict() for product in products]}
