from app.models import db, CartItem
from datetime import datetime
from random import random
import math

def randomDate():
    randHour = int(math.floor(24 * random()))
    randMin = int(math.floor(60 * random()))
    randSec = int(math.floor(60 * random()))
    date = datetime.utcnow()
    newDate = date.replace(hour=randHour, minute=randMin, second=randSec, day=8)
    return newDate


# Adds a demo user, you can add other users here if you want
def seed_cart_items():
    item = CartItem(
        shopping_cart_id=1, product_id=1, quantity=1, created_at=randomDate())
    item2 = CartItem(
        shopping_cart_id=1, product_id=2, quantity=2, created_at=randomDate())

    db.session.add(item)
    db.session.add(item2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart_items():
    db.session.execute('TRUNCATE cart_items RESTART IDENTITY CASCADE;')
    db.session.commit()
