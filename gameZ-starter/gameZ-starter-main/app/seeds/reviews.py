from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        user_id=1, product_id=1, title="Best Game Ever", content="No really, it's the best.")
    review2 = Review(
        user_id=1, product_id=1, title="Worst Game Ever", content="No really, it's the worst.")
    review3 = Review(
        user_id=1, product_id=2, title="Todd Howard is a Troll", content="How many times is he going to sell this game?")

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
