from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    title = db.Column(db.String(50), nullable=False)
    content = db.Column(db.Text, nullable=False)
    product = db.relationship(
        "Product", back_populates="review", cascade="all")
    user = db.relationship(
        "User", back_populates="review", cascade="all")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
        }
