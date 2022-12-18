from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("products.id")))
    title = db.Column(db.String(50), nullable=False)
    content = db.Column(db.Text, nullable=False)
    product = db.relationship(
        "Product", back_populates="review")
    user = db.relationship(
        "User", back_populates="review")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'title': self.title,
            'content': self.content,
        }
