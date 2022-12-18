from .db import db, environment, SCHEMA, add_prefix_for_prod


class Product(db.Model):
    __tablename__ = 'products'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")))
    category_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")))
    name = db.Column(db.String(50), nullable=False, unique=True)
    image_url = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    user = db.relationship(
        "User", back_populates="product")
    category = db.relationship(
        "Category", back_populates="product")
    review = db.relationship(
        "Review", back_populates="product", cascade="delete-orphan")
    cart_item = db.relationship(
        "CartItem", back_populates="product")

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
