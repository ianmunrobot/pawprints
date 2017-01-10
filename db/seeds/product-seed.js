const db = require('APP/db')

const seedProducts = () => db.Promise.map([
  {
    title: 'Siberian Husky Print',
    imgUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-2.jpg',
    price: 12.99,
    description: 'A majestic and interesting pup',
    size: '12" x 16"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 10,
    category: ['dog'],
  },
  {
    title: 'Pug Puppy Print',
    imgUrl: 'https://snowyswan.com/wp-content/uploads/pug-puppy-life.jpg',
    price: 24.99,
    description: 'Cute pug puppy with a beanie',
    size: '12" x 12"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 4,
    category: ['dog'],
  },
  {
    title: 'Siberian Husky Print',
    imgUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-2.jpg',
    price: 30.99,
    description: 'A majestic and interesting pup',
    size: '24" x 32"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 6,
    category: ['dog'],
  },
  {
    title: 'Sassy Kitten Print',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/10/9e/e6/109ee6cb5a669a3152180b754e203c69.jpg',
    price: 20.99,
    description: 'An upset persian kitten stares into infinity',
    size: '14" x 12"',
    tags: ['angry', 'grumpy', 'kitten', 'furball'],
    inventory: 25,
    category: ['cat'],
  },
  {
    title: 'Sonic the Hedgehog',
    imgUrl: 'http://comicsalliance.com/files/2010/11/hedgehogwithboots.jpg',
    price: 14.56,
    description: 'An upset persian kitten stares into infinity',
    size: '9" x 6"',
    tags: ['super', 'hero', 'hedgehog', 'spiky'],
    inventory: 3,
    category: ['rodent'],
  },

], product=> db.model('product').create(product));

  module.exports = seedProducts;