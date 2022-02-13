# GameZ

• is an [Etsy](https://etsy.com/) clone made by [Alexander Gangemi](https://www.linkedin.com/in/alexander-gangemi/), [Eric Cortez](https://www.linkedin.com/in/eric-cortez-0101/), [Jesse Brooks](https://www.linkedin.com/in/jesse-brooks-8a6718229/) and [Suhayl Khan](https://www.linkedin.com/in/suhayl-khan-48601a193/) for the purpose of course work in [App Academy](https://www.appacademy.io/) and for use as an addition to their professional portfolios. All content is for private, non-commerical, non-profit use.

• On this site, users can currently sign up, log in (with or without a demo user) and create, read, update and destroy products, product reviews and shopping cart items. Users can also utilize the site-wide search bar.

## Technologies Used:

Javascript | Python | Node.js | NPM | Flask | SQLAlchemy | Alembic | Git | HTML / JSX | CSS | React | Redux | Heroku

## Development Image of Categories Page
### We, the creators, do not own nor claim ownership of any listed product images.
![This is an image](https://i.imgur.com/tXDbMTs.png)

## In order to run this application...

### Either:

#### A. Go to [GameZ](https://gamez-aa.herokuapp.com/) in your browser 

### OR 

#### B: Clone / Download this repo and...

•  `npm install` dependencies from the package.json within the frontend directory 

• `pip install` dependencies from the Pipfile within the backend directory

•  `flask run` within the backend directory under localhost:5000

•  `npm start` within the frontend directory under localhost:3000

## Future Features:

• Order Histories

## Technical Implementation:

### Before starting to code:

• As with any significant undertaking, planning is a crucial step ***especially when we were given one week to complete this project with four full features ( being products, reviews, shopping cart and search.)*** We, as a team, had to consider how closely we were going to clone Etsy, how we wanted the website to flow from page to page, where and how we would implement functionality and how we planned to style each page.

### Particular Challenges:

#### Alexander Gangemi:
• What I found to be the most difficult was integrating a Python bases backend into a React / JavaScript frontend and troubleshooting the connection throughout development.

• A simple example of this is this snippet from our backend `category_routes.py` module that was tied to the frontend module in the Redux store at `category.js`:



    from flask import Blueprint
    from app.models import Category, Product

    category_routes = Blueprint(
        'categories', __name__)


    @category_routes.route('/')
    def categories():
        # Route to GET all available Categories
        categories = Category.query.all()
        return {'categories': [category.to_dict() for category in categories]}


    @category_routes.route('/<int:id>/products')
    def products_by_category(id):
        # GET Route for all data for all products under a certain Category
        category = Category.query.get(id)
        products = Product.query.filter(Product.category_id == id).all()
        return {'category': category.to_dict(), 'products': [product.to_dict() for product in products]}


#### Eric Cortez:

#### Jesse Brooks:

#### Suhayl Khan:

## Fair Use Disclaimer:
Our site contains product images that are not authorized for use by their respective owners. This site constitutes a fair-use of any copyrighted material as provided for in [section 107 of the US copyright law](https://codes.findlaw.com/us/title-17-copyrights/17-usc-sect-107.html). "GameZ" by Alexander Gangemi, Eric Cortez, Jesse Brooks and Suhayl Khan is an educational project made by students who enjoy video games and are inspired by them.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> - permitting non-commerical sharing with attribution.
