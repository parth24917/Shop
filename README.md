# E-commerce Product Listing Page

## Objective
This project demonstrates the creation of a simple e-commerce product listing page using the MERN stack (MongoDB, Express, React, Node.js). It showcases the candidate's ability to work with both frontend and backend technologies, as well as an understanding of basic e-commerce concepts.

## Getting Started

### Prerequisites
- *Node.js* (v14.x or later)
- *MongoDB* (Use MongoDB Atlas or local MongoDB installation)
- *Git* (for cloning the repository)

### Running the Application Locally

1. *Clone the repository: git clone https://github.com/your-username/product-api.git:*
2. *Install dependencies: npm install*
3. *Create a .env file in the root directory and add your MongoDB URL: MONGODB_URL=mongodb://localhost:27017/product-api*
4. Start the server: node server.js
5. To add products to the database, run seed.js file by using node seed.js
6. For displaying the frontend of the website, go to root directory and type npm start.
7. Open a web browser and navigate to http://localhost:5000/api/products to see the list of products
    

## Code Structure
*The code is organized into the following folders:*
1. Models - Contains schema of products in product.js file.
2. Server- Comprises of backend of the webpage
3. Public - Contains images and logos to be used in webpage
4. Src - Src folder consists of main files for the web application to run like app.js, index.js
   
## Challenges Faced
1. I faced an unusual errror: unexpected token??= so I check with the node_module files, then I came to know I am not using the latest node version which cant handle ??= operator used in node_modules.
2. Connecting with database was giving bad authentication error, so I verified connection string only to know that I havent removed "<>" from my password causing this error.
3. While seeding products in database, I noticed that it was creating duplicate entries for all products, so i used deletemany() function to clear all of the previous data and not Include any duplicate entries.

## Further Improvememts
1. Implement authentication and authorization to secure the API.
2. Add more routes for creating, updating, and deleting products.
3. Add shopping cart functionality
4. Use a more robust error handling mechanism, such as logging errors to a file or sending error notifications.
5. Deploy the application to a cloud platform, such as Heroku or AWS, for scalability and reliability.
