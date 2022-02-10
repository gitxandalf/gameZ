from .db import db


class ShoppingCart(db.Model):
    __tablename__ = 'shopping_carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    checked_out = db.Column(db.Boolean, nullable=False, default=False)
    user = db.relationship(
        "User", back_populates="shopping_cart", cascade="all")
    cart_items = db.relationship(
        "CartItem", back_populates="shopping_cart", order_by="CartItem.created_at", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'checked_out': self.checked_out,
            'cart_items': [cart_item.to_dict() for cart_item in self.cart_items],
            'user_id': self.user_id
        }
