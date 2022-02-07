from .db import db


class ShoppingCart(db.Model):
    __tablename__ = 'shopping_carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    checked_out = db.Column(db.Boolean, nullable=False, default=False)
    user = db.relationship(
        "User", back_populates="shopping_cart", cascade="all")
    cart_item = db.relationship(
        "CartItem", back_populates="shopping_cart", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'checked_out': self.checked_out
        }


# SELECT user_id, checked_out, cart_items.product_id
# FROM shopping_carts
# INNERJOIN cart_items ON shopping_carts.id = cart_items.shopping_cart_id
