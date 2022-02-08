from flask import Blueprint
from flask_login import current_user, login_required
from sqlalchemy.orm import joinedload, defaultload
from app.models import ShoppingCart, CartItem

shopping_cart_routes = Blueprint('shopping_carts', __name__)

@shopping_cart_routes.route('/')
@login_required
def shopping_carts():
  shopping_carts = ShoppingCart.query.all()
  return {'shopping_carts': [shopping_cart.to_dict() for shopping_cart in shopping_carts]}

@shopping_cart_routes.route('/<int:id>')
@login_required
def shopping_cart(id):
  shopping_cart = ShoppingCart.query.get(id)
  cart_items = CartItem.query.filter(shopping_cart.id == CartItem.shopping_cart_id)
  return {
    'shopping_cart': shopping_cart.to_dict(),
    'cart_items': [cart_item.to_dict() for cart_item in cart_items]}
