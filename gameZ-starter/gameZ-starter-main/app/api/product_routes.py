from flask import Blueprint, request
from flask_login import login_required
from app.models import Product, Review, Category, db
from app.forms import AddProductForm


product_routes = Blueprint(
    'products', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@product_routes.route('/')
def products():
    # GET Route for all products regardless of category
    # At top of page, should be a NavLink to Categories (page listing each category)
    # Once NavLink for a cartain Category is clicked, user would be routed to products_by_category(id)
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}


@product_routes.route('/<int:id>')
def product(id):
    # GET Route for all data for a specified product
    product = Product.query.get(id)
    reviews = Review.query.filter(Review.product_id == id).all()
    return {'product': product.to_dict(), 'reviews': [review.to_dict() for review in reviews]}


@product_routes.route('/add-product', methods=['POST'])
@login_required
def post_product():
    data = request.json
    form = AddProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        product = Product(
            user_id=data["user_id"],
            category_id=data["category_id"],
            name=form.data['name'],
            image_url=form.data['image_url'],
            price=form.data['price'],
            description=form.data['description']
        )
        db.session.add(product)
        db.session.commit()
        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
