const db = require('APP/db')

const seedArray = [
  [{
    title: 'Puppy Print',
    imgUrl: '/images/dogs/dog-1.jpg',
    price: 12.99,
    description: 'A majestic and interesting pup',
    size: '12" x 16"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 10,
  }, 'dog'],
  [{
    title: 'Puppy Print',
    imgUrl: '/images/dogs/dog-2.jpg',
    price: 24.99,
    description: 'Cute pug puppy with a beanie',
    size: '12" x 12"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 4,
  }, 'dog'],
  [{
    title: 'Pup Print',
    imgUrl: '/images/dogs/dog-3.jpg',
    price: 30.99,
    description: 'A majestic and interesting pup',
    size: '24" x 32"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 6,
  }, 'dog'],
  [{
    title: 'PupPY Print',
    imgUrl: '/images/dogs/dog-4.jpg',
    price: 13.99,
    description: 'THIS IS A DOG',
    size: '12" x 16"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 2,
  }, 'dog'],
  [{
    title: 'Sassy Kitten Print',
    imgUrl: '/images/cats/cat-1.jpg',
    price: 20.99,
    description: 'An upset persian kitten stares into infinity',
    size: '14" x 12"',
    tags: ['angry', 'grumpy', 'kitten', 'furball'],
    inventory: 25,
  }, 'cat'],
  [{
    title: 'Little Kitten Print',
    imgUrl: '/images/cats/cat-2.jpg',
    price: 4.25,
    description: 'An upset persian kitten stares into infinity',
    size: '6" x 8"',
    tags: ['funny', 'cute', 'kitten', 'furball'],
    inventory: 7,
  }, 'cat'],
  [{
    title: 'Hungry Hamster',
    imgUrl: '/images/rodents/rodent-2.jpg',
    price: 14.56,
    description: 'A fearsome beast',
    size: '9" x 6"',
    tags: ['super', 'hero', 'hedgehog', 'spiky'],
    inventory: 3,
  }, 'rodent'],
  [{
    title: 'Henry Hedgehog',
    imgUrl: '/images/rodents/rodent-4.jpg',
    price: 25.56,
    description: 'Do not cross him',
    size: '12" x 16"',
    tags: ['super', 'hero', 'hedgehog', 'spiky'],
    inventory: 15,
  }, 'rodent'],
]


const seedProducts = () => db.Promise.map(seedArray, singleItem => {
  return db.model('products').create(singleItem[0])
  .then(product => {
    return db.model('categories').findOne({
      where: {
        name: singleItem[1]
      }
    })
    .then(foundCategory => {
      return product.addCategory(foundCategory.id)
    })
  })
});

  module.exports = {
    seedProducts,
    productsNum: seedArray.length
  };