from .db import db


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    name = db.Column(db.String(50), nullable=False, unique=True)
    image_url = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    user = db.relationship(
        "User", back_populates="product", cascade="all")
    category = db.relationship(
        "Category", back_populates="product", cascade="all")
    review = db.relationship(
        "Review", back_populates="product", cascade="all, delete-orphan")
    cart_item = db.relationship(
        "CartItem", back_populates="product", cascade="all, delete-orphan")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'category_id': self.category_id,
            'name': self.name,
            'image_url': self.image_url,
            'price': self.price,
            'description': self.description
        }
