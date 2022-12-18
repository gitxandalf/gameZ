
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField, TextAreaField
from wtforms.validators import DataRequired, ValidationError



class EditReviewFrom(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    content = TextAreaField('Content', validators=[DataRequired()])
