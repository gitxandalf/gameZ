from app.models import db, Category


# Adds a demo user, you can add other users here if you want
def seed_categories():
    category1 = Category(
        name="RPG", description="Role Playing Games")
    category2 = Category(
        name="FPS", description="First Person Shooters")

    db.session.add(category1)
    db.session.add(category2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
