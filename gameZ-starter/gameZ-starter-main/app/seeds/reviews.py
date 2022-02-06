from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review = Review(
        user_id=1, product_id=1, title="Best Game Ever", content="No really, it's the best.")

    db.session.add(review)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
