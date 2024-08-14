const mongoose = require('mongoose');
const Product = require('../model/product');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Delete all products in the database
Product.deleteMany();

const seedProducts = [
  {
    name: 'Coca Cola',
    price: 100,
    description: 'Description for product 1',
    imageUrl: '/images/coke.png',
  },
  {
    name: 'Chilli Lays',
    price: 150,
    description: 'Description for product 2',
    imageUrl: '/images/lays.jpg',
  },
  {
    name: 'Orange Lays',
    price: 175,
    description: 'Description for product 2',
    imageUrl: '/images/ornglays.png',
  },
  {
    name: 'Pepsi',
    price: 125,
    description: 'Description for product 2',
    imageUrl: '/images/pepsi.jpg',
  },
];

const addProduct = async (product) => {
  const existingProduct = await Product.findOne({ name: product.name });
  if (!existingProduct) {
    const newProduct = new Product(product);
    await newProduct.save();
    console.log(`Product added: ${product.name}`);
  } else {
    console.log(`Product already exists: ${product.name}`);
  }
};

Promise.all(seedProducts.map(addProduct))
  .then(() => console.log('All products added'))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());