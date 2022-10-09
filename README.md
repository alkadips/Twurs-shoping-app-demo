NextJS basics like setting up project, navigating between pages and data fetching.
Tailwind CSS framework to build responsive website using custom theme, animation.
ReactJS including decomposing components, context API and hooks.
Next Auth package to authenticate admin users.
MongoDB and Mongoose to save and retrieve data like products and users.
payment process is in-progess.
On the homepage click on the Twurs showing all the product card info.
Onlick of the product select product and navigate on it to the add checkout page.
Select the product and show the count as per the selection on the shopping cart icon.
On the shopping page, we can remove the product if we don't need it.
and onselect the dropdown menu applying the filter as per the product type.
And onclick of the dashboard showing admin cms page info like ,number of products ,users and so on.


1) Create Next js App

2) Publish to Github

3) Create Website Layout
 a) create layout component
 b) add header
 c) add main section
 d) add footer
 e) add tailwind classes

4) List Products
 a) add data.js
 b) add images
 c) render products 

5) Create Product Details
 a) create product page
 b) create 3 columns
 c) show image in first column
 d) show product info in second column
 e) show add to cart action on third column
 f) add styles

6) Handle Add To Cart
 a) define react context
 b) define cart items state
 c) create addd to cart action
 d) add reducer
 e) create store provider
 f) handle add to cart button

7) Create Cart Page
 a) create cart.js
 b) use context to get cart items
 c) list items in cart items
 d) redirect to cart screen after add to cart

8) Update Quantity In The Cart
 a) add select box for quantity
 b) handle select box change

9) Save Cart Items
 a) install js-cookie package
 b) save and retreive cart items in cookies

10) Create Login Form
 a) install react hook form
 b) create input boxes
 c) add login button

11) Connect To MongoDB
 a) install mongoose
 b) install mongodb or use mongodb atlas
 c) save connection url in .env file
 d) create db utils file
 e) create sample users

12) Create Login API
 a) install next-auth
 b) create nextauth.js
 c) implement signin
 d) use signin in login form

13) Add User Menu 
 a) check user authentication
 b) install headlessui
 c) show user menu

14) Seed sample products
 a) create product model in mongoose
 b) insert sample products to mongodb

15) Load Products MongoDB
 a) load products in home page from mongodb
 b) load products in product page from mongodb
 c) use product api to check count in stock in add to cart

16) Create Register Screen
 a) add signup api
 b) create register page
 c) call api on form submit

17) Update User Profile
 a) create profile screen
 b) show user info
 c) handle update user info-----This is in progess

18) Create Admin Dashboard
 a) Create Admin Menu
 b) create dashboard screen
 c)Implement admin summary api

19) List Products For Admin
 a) create products page
 b) create products api
 c) use api in page

20) Create Product Edit Page
 a) create edit page
 b) create api for product
 c) show product data in form

21) Upload Product Image
 a) create cloudinary account
 b) get cloudinary keys
 c) create upload api
 d) upload files in edit page----in progress

22) Create And Delete Products
 a) add create product button
 b) build new product api
 c) add handler for delete
 d) implement delete api

23) List Users For Admin
 a) create users page
 b) create users api
 c) use api in page