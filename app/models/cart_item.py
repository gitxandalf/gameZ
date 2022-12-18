from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class CartItem(db.Model):
    __tablename__ = 'cart_items'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    shopping_cart_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("shopping_carts.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("products.id")))
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)

    shopping_cart = db.relationship(
        "ShoppingCart", back_populates="cart_items",)
    product = db.relationship(
        "Product", back_populates="cart_item",)

    def to_dict(self):
        return {
            'id': self.id,
            'quantity': self.quantity,
            'shopping_cart_id': self.shopping_cart_id,
            'product': self.product.to_dict()
        }

    # @property
    # def quantity(self):
    #     return self.quantity

    # @quantity.setter
    # def quantity(self, value):
    #     self.quantity = value
