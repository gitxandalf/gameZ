# [GameZ](https://gamez-aa.herokuapp.com/)

• is an [Etsy](https://etsy.com/) clone made by [Alexander Gangemi](https://www.linkedin.com/in/alexander-gangemi/), [Eric Cortez](https://www.linkedin.com/in/eric-cortez-0101/), [Jesse Brooks](https://www.linkedin.com/in/jesse-brooks-8a6718229/) and [Suhayl Khan](https://www.linkedin.com/in/suhayl-khan-48601a193/) for the purpose of course work in [App Academy](https://www.appacademy.io/) and for use as an addition to their professional portfolios. All content is for private, non-commerical, non-profit use.

• On this site, users can currently sign up, log in (with or without a demo user) and create, read, update and destroy product listings, product reviews and shopping cart items. Users can also utilize the site-wide search bar.

## Technologies Used:

Javascript | Python | Node.js | NPM | Flask | SQLAlchemy | Alembic | Git | HTML / JSX | CSS | React | Redux | Heroku

## Development Image of Home Page
### We, the creators, do not own nor claim ownership of any listed product images, product names or product descriptions. All listed prices are null as there is no way to provide or accept payment on the site.
![This is an image](https://i.imgur.com/xRXYUr1.png)

## In order to run this application...

### Either:

#### A. Go to [GameZ](https://gamez-aa.herokuapp.com/) in your browser

### OR

#### B: Clone / Download this repo and...

## Installation 

To install GameZ on your local machine please clone the project repository. 

1 )  `git clone https://github.com/Eric-Cortez/gameZ.git`

2 ) cd into gameZ 
    `cd gameZ/`

3 )  Install dependencies
     
     `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`

4 )  Create a .env file based on the example with proper settings for your development environment

5 )  Setup your PostgreSQL user, password, database, and make sure it matches your .env file


  
6 ) To setup the backend application...
   
   enter the pipenv shell, migrate your database, seed your database, and run the flask application 
     

  •  `pipenv shell` to enter the pipenv shell 

  •  `flask db upgrade`

  •  `flask seed all`

  •  `flask run` while in the shell and within the backend (edcGear/) directory under localhost:5000
  
7 ) To run the frontend react application...

  •  Change into the frontend directory `cd react-app/`

  •  Run `npm install` to install all dependencies from the package.json within the frontend directory 
  
  •  `npm start` within the frontend directory(gameZ/react-app/) under localhost:3000


## Future Features:

• Order Histories

## Technical Implementation:

### Before starting to code:

• As with any significant undertaking, planning is a crucial step ***especially when we were given one week to complete this project with four full features ( being products, reviews, shopping cart and search.)*** We, as a team, had to consider how closely we were going to clone Etsy, how we wanted the website to flow from page to page, where and how we would implement functionality and how we planned to style each page.

### Particular Challenges:

#### Alexander Gangemi:
• What I found to be the most difficult was integrating a Python based backend into a React / JavaScript frontend and troubleshooting the connection throughout development. I overcame this hurdle with practice, teamwork, and determination.

• A simple example of this is this snippet from our backend `api` > `routes` > `category_routes.py` module that was tied to the frontend module in the Redux store at `category.js`:



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

• Challenge: While implementing the error handling on the edit product form I encountered a challenge as all products must have a unique name. My goal was 
  to alert users that a game name already existed; while allowing them to make changes to their current user and be able to revert those changes. 
  Therefore, I created a function to check for unique names against names that existed in the database and also checking the matching name against the product id. 


• Highlight: Working with JavaScript (frontend) and Python (backend) for the first time was also challenging at first. But, while working as a team we quickly became conformable 
  with implementing the functionality and troubleshooting. 

• Below is a code from the edit product component.   

```

    useEffect(() => {
        const errors = [];
        const uniqueName = (currName, products) => {
            for (let i = 0; i < products.length; i++) {
                    let currProduct = products[i]
                if (currProduct.name === name) {
                    if (currProduct.id === +productId){
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }

         additional code...
        //Unique error handel
        if (name && uniqueName(name, products)) errors.push("Game name already exists")
        additional code...

    }, [categoryId, name, imageUrl, price, description, products, productId])

```

#### Jesse Brooks:
• I found implementing the shopping cart was a more difficult task than what I originally imagined. The goal was to provide the same state across our entire application so that the shopping cart preview could be accessed on any page of the site. Our first implementation ended up being mostly refactored due to significant challenges in accessing redux store state.

• The search feature was fun to implement, we didn't create a redux store for anything related to the search feature but that is something I would change if I were to refactor this in the future. We ended up having to create a controlled input for the search value in our main App.js file so we could pass search, and setSearch as a prop to the rest of the components. Without doing this, not all pages would clear the search bar if you made a search and then navigated to another page.

#### Suhayl Khan:

• I found that building a working and dynamic shopping cart was much harder than I originally thought. A big part of this challenge was finding a way to display all of the shopping cart's contents on a single page in addition to being able to edit/remove a cart item dynamically. 

• What I learned from our various attempts and eventual success was that creating a well-built Redux store is essential to the success of a dynamic feature, such as a shopping cart. After a lot of back-and-forth between the Redux store and `ShoppingCart` component, the following `ShoppingCart` store is what worked best for us:

    shoppingCart:
        current_shopping_cart:
            cart_items:
                [/* list of cartItem objects */]
            checked_out
            id
            user_id

## Fair Use Disclaimer:
Our site contains product images, product names and product descriptions (all sourced from [Humble Bundle](https://www.humblebundle.com/)) that are not authorized for use by their respective owners. This site constitutes a fair-use of any copyrighted material as provided for in [section 107 of the US copyright law](https://codes.findlaw.com/us/title-17-copyrights/17-usc-sect-107.html). "GameZ" by Alexander Gangemi, Eric Cortez, Jesse Brooks and Suhayl Khan is an educational project made by students who enjoy video games and are inspired by them.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> - permitting non-commerical sharing with attribution.
