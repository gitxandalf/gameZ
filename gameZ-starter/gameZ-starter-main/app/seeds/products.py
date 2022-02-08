from app.models import db, Product


# Adds a demo user, you can add other users here if you want
def seed_products():
    game1 = Product(
        user_id=1, category_id=1,  name='Skyrim', image_url='https://images.wikia.com/fallout/images/0/0e/The-Elder-Scrolls-V-Skyrim-1-.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game2 = Product(
        user_id=1, category_id=1,  name='Dragon\'s Dogma', image_url='https://assets2.ignimgs.com/2015/09/08/dragons-dogma-dark-arisen-buttonjpg-9f7bdf.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game3 = Product(
        user_id=1, category_id=2,  name='Counter Strike: Global Offensive', image_url='https://global-img.gamergen.com/cs-go-counter-strike-global-offensive-cover-jaquette_0280031B00789937.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game4 = Product(
        user_id=1, category_id=2,  name='Call of Duty: Modern Warfare 2', image_url='https://www.mobygames.com/images/covers/l/653895-call-of-duty-modern-warfare-2-campaign-remastered-xbox-one-front-cover.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game5 = Product(
        user_id=1, category_id=3,  name='Castlevania', image_url='https://www.mobygames.com/images/covers/l/41554-castlevania-nes-front-cover.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game6 = Product(
        user_id=1, category_id=3,  name='Metroid', image_url='https://www.mobygames.com/images/covers/l/16091-metroid-nes-front-cover.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game7 = Product(
        user_id=2, category_id=4,  name='Amnesia: The Dark Descent', image_url='https://www.mobygames.com/images/covers/l/289473-amnesia-the-dark-descent-linux-front-cover.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game8 = Product(
        user_id=2, category_id=4,  name='Bloodborne', image_url='https://cdn.wccftech.com/wp-content/uploads/2015/03/Bloodborne.png', price=20.00, description='A fun and wholesome game for the whole family.')
    game9 = Product(
        user_id=2, category_id=5,  name='Animal Crossing: New Horizons', image_url='https://www.presse-citron.net/app/uploads/2020/03/animal-crossing-new-horizons-switch-cover.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game10 = Product(
        user_id=2, category_id=5,  name='Goat Simulator', image_url='https://images.pushsquare.com/games/ps4/goat_simulator/cover_large.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game11 = Product(
        user_id=2, category_id=6,  name='Street Fighter', image_url='https://www.mobygames.com/images/covers/l/219246-street-fighter-dos-front-cover.jpg', price=20.00, description='A fun and wholesome game for the whole family.')
    game12 = Product(
        user_id=2, category_id=6,  name='Soul Calibur', image_url='https://2.bp.blogspot.com/-oSJQTj304ug/U9ti_K8uPDI/AAAAAAAAEGY/fMOQKDn5iJc/s1600/dc1818c40641497112b64bbd79b094dc.jpg', price=20.00, description='A fun and wholesome game for the whole family.')

    db.session.add(game1)
    db.session.add(game2)
    db.session.add(game3)
    db.session.add(game4)
    db.session.add(game5)
    db.session.add(game6)
    db.session.add(game7)
    db.session.add(game8)
    db.session.add(game9)
    db.session.add(game10)
    db.session.add(game11)
    db.session.add(game12)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
