from .db import db


class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    shopping_cart_id = db.Column(
        db.Integer, db.ForeignKey("shopping_carts.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    quantity = db.Column(db.Integer, nullable=False)
    shopping_cart = db.relationship(
        "ShoppingCart", back_populates="cart_item", cascade="all")
    product = db.relationship(
        "Product", back_populates="cart_item", cascade="all")

    def to_dict(self):
        return {
            'id': self.id,
            'quantity': self.quantity
        }
