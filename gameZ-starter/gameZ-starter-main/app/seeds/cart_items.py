from app.models import db, CartItem


# Adds a demo user, you can add other users here if you want
def seed_cart_items():
    item = CartItem(
        shopping_cart_id=1, product_id=1, quantity=1)

    db.session.add(item)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart_items():
    db.session.execute('TRUNCATE cart_items RESTART IDENTITY CASCADE;')
    db.session.commit()
