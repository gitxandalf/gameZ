from flask import Blueprint, request
from flask_login import login_required
from sqlalchemy.orm import joinedload, defaultload
from app.models import ShoppingCart, CartItem, db

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

@shopping_cart_routes.route('/add_cart_item', methods=['POST'])
@login_required
def add_item():
  item = request.json
  cart_item = CartItem(
    shopping_cart_id = item['shopping_cart_id'],
    product_id = item['product_id'],
    quantity = item['quantity']
  )

  db.session.add(cart_item)
  db.session.commit()
  return cart_item.to_dict()

@shopping_cart_routes.route('/delete_cart_item', methods=['DELETE'])
@login_required
def delete_item():
  cart_item_id = request.json
  item = db.session.query(CartItem).get(cart_item_id['cart_item_id'])
  db.session.delete(item)
  db.session.commit()
  return {
    'shopping_cart_id': item.shopping_cart_id
  }

@shopping_cart_routes.route('/edit_cart_item', methods=['PUT'])
@login_required
def edit_item():
    data = request.json
    print(data)
    cart_item = db.session.query(CartItem).get(data['cart_item_id'])
    cart_item.quantity = data['quantity']
    db.session.commit()
    return {'shopping_cart_id': cart_item.shopping_cart_id}
