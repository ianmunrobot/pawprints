const db = require('APP/db')

const seedArray = [
  [{
    title: 'Beach Puppy Print',
    imgUrl: '/images/dogs/dog-1.jpg',
    price: 12.99,
    description: 'A majestic and interesting pup',
    size: '12" x 16"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 10,
  }, 'dog'],
  [{
    title: 'Puppy Mug print',
    imgUrl: '/images/dogs/dog-3.jpg',
    price: 30.99,
    description: 'A majestic and interesting pup',
    size: '24" x 32"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 6,
  }, 'dog'],
  [{
    title: 'Yawn Cat Print',
    imgUrl: '/images/cats/cat-3.jpg',
    price: 125.24,
    description: 'Even cats are bored by cats, what can we say?',
    size: '6" x 8"',
    tags: ['cat', 'sleepy', 'boring', 'kitten'],
    inventory: 7,
  }, 'cat'],
  [{
    title: 'Golden Puppy Print',
    imgUrl: '/images/dogs/dog-4.jpg',
    price: 13.99,
    description: 'THIS IS A DOG. BUY ITS PICTURE',
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
    title: 'Rabid Rabbit Rodeo',
    imgUrl: '/images/rodents/rodent-4.jpg',
    price: 25.56,
    description: `This rabbit is eating grass. But don't get bit by it!`,
    size: '12" x 16"',
    tags: ['rabid', 'sickly', 'bunny'],
    inventory: 15,
  }, 'rodent'],
  [{
    title: 'Little Kitten Print',
    imgUrl: '/images/cats/cat-2.jpg',
    price: 4.25,
    description: 'A beautiful image of a cat, all yours for an affordable price!',
    size: '6" x 8"',
    tags: ['funny', 'cute', 'kitten', 'furball'],
    inventory: 7,
  }, 'cat'],
  [{
    title: 'Cute Puppy Print',
    imgUrl: '/images/dogs/dog-2.jpg',
    price: 24.99,
    description: 'Cute pug puppy with a beanie',
    size: '12" x 12"',
    tags: ['cute', 'dog', 'puppy'],
    inventory: 4,
  }, 'dog'],
  [{
    title: 'Cat up a tree',
    imgUrl: '/images/cats/cat-4.jpg',
    price: 13.25,
    description: 'All we can say is good luck!',
    size: '6" x 8"',
    tags: ['cat', 'tree', 'stuck', 'kitten'],
    inventory: 2,
  }, 'cat'],
  [{
    title: 'Hungry Hamster',
    imgUrl: '/images/rodents/rodent-2.jpg',
    price: 14.56,
    description: 'A fearsome beast enjoying a fine meal',
    size: '9" x 6"',
    tags: ['hamster', 'hungry', 'pet', 'rodent'],
    inventory: 3,
  }, 'rodent'],
  [{
    title: 'Henry Hedgehog',
    imgUrl: '/images/rodents/rodent-4.jpg',
    price: 25.56,
    description: 'Do not cross him. He will cut you.',
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