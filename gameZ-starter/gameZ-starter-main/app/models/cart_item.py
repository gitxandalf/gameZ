from .db import db
from datetime import datetime



class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    shopping_cart_id = db.Column(
        db.Integer, db.ForeignKey("shopping_carts.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())

    shopping_cart = db.relationship(
        "ShoppingCart", back_populates="cart_item",)
    product = db.relationship(
        "Product", back_populates="cart_item",)

    def to_dict(self):
        return {
            'id': self.id,
            'quantity': self.quantity,
            'shopping_cart_id': self.shopping_cart_id,
            'product_id': self.product_id
        }

    # @property
    # def quantity(self):
    #     return self.quantity

    # @quantity.setter
    # def quantity(self, value):
    #     self.quantity = value
