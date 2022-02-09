
from turtle import title
from flask import Blueprint, request
from flask_login import login_required
from app.models import Review, db
from app.forms import AddReviewFrom, EditReviewFrom


review_routes = Blueprint(
    'reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# GET ALL REVIEWS
@review_routes.route('/')
def reviews():
    # GET Route for all reviews
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}

# POST A REVIEW 
@review_routes.route('/add-review', methods=['POST'])
@login_required
def post_review():
    data = request.json
    form = AddReviewFrom()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review(
            user_id=data["user_id"],
            product_id=data["product_id"],
            title=form.data['title'],
            content=form.data['content'],
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



# EDIT REVIEW 
@review_routes.route('/<int:reviewId>/edit-review', methods=['PUT'])
@login_required
def edit_product(reviewId):
    data = request.json
    form = EditReviewFrom()

    form['csrf_token'].data = request.cookies['csrf_token']

    currentReview = Review.query.get(reviewId)

    if form.validate_on_submit() and currentReview:

        currentReview.user_id = data["user_id"]
        currentReview.product_id = data["product_id"]
        currentReview.title = form.data['title']
        currentReview.content = form.data['content']

        db.session.commit()
        return currentReview.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401




# STARTED DELETE ROUTE 
@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    currentReview = Review.query.get(id)
    
    db.session.delete(currentReview)
    db.session.commit()
    return {}
