from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Product, Category


def product_name_exists(form, field):
    # Checking if product name exists
    name = field.data
    product = Product.query.filter(Product.name == name).first()
    if product:
        raise ValidationError('Product name is already in use.')


categories = Category.query.all()


class AddProductForm(FlaskForm):
    category_id = SelectField('Category', choices=[(category["id"], category["name"]) for category in categories['categories']], validators=[
        DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    image_url = StringField("Image Url", validators=[DataRequired()])
    price = FloatField("Price", validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
