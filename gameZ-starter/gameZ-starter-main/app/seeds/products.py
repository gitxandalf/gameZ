from app.models import db, Product


# Adds a demo user, you can add other users here if you want
def seed_products():
    game1 = Product(
        user_id=1, category_id=1,  name='Bloodborne', image_url='https://cdn.wccftech.com/wp-content/uploads/2015/03/Bloodborne.png', price=20.00, description='A fun and wholesome game for the whole family.')
    game2 = Product(
        user_id=1, category_id=1,  name='Skyrim', image_url='https://images.wikia.com/fallout/images/0/0e/The-Elder-Scrolls-V-Skyrim-1-.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game3 = Product(
        user_id=1, category_id=1,  name='Dragon\'s Dogma', image_url='https://assets2.ignimgs.com/2015/09/08/dragons-dogma-dark-arisen-buttonjpg-9f7bdf.jpg', price=20.00, description='A fun and wholesome game for the whole family.')

    db.session.add(game1)
    db.session.add(game2)
    db.session.add(game3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
