from app.models import db, ShoppingCart


# Adds a demo user, you can add other users here if you want
def seed_shopping_carts():
    shopping_cart = ShoppingCart(
        user_id=1, checked_out=False)
    shopping_cart2 = ShoppingCart(
        user_id=1, checked_out=True)
    shopping_cart3 = ShoppingCart(
        user_id=1, checked_out=True)
    shopping_cart4 = ShoppingCart(
        user_id=2, checked_out=False)

    db.session.add(shopping_cart)
    db.session.add(shopping_cart2)
    db.session.add(shopping_cart3)
    db.session.add(shopping_cart4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_shopping_carts():
    db.session.execute('TRUNCATE shopping_carts RESTART IDENTITY CASCADE;')
    db.session.commit()
