from flask.cli import AppGroup
from .users import seed_users, undo_users
from .cart_items import seed_cart_items, undo_cart_items
from .categories import seed_categories, undo_categories
from .products import seed_products, undo_products
from .reviews import seed_reviews, undo_reviews
from .shopping_carts import seed_shopping_carts, undo_shopping_carts

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_products()
    seed_reviews()
    seed_shopping_carts()
    seed_cart_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_products()
    undo_reviews()
    undo_shopping_carts()
    undo_cart_items()
    # Add other undo functions here
