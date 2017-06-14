var restaurants = [
  { id: 0, name: 'Le Diplomate Cafe', type: 'Quick Bite', price: '$', distance: 5, address: '4237 Campus Dr. Ste B 161 Irvine, CA 92612', telephone: '(949) 854-5161', recommended: true },
  { id: 1, name: 'Mick\'s Karma Bar', type: 'Quick Bite', price: '$', distance: 4, address: '2010 Main St. Ste 165 Irvine, CA 92614', telephone: '(949) 851-6316', recommended: false },
  { id: 2, name: 'HiroNori Craft Ramen', type: 'Asian', price: '$$', distance: 10, address: '2222 Michelson Dr. Ste 234 Irvine, CA 92612', telephone: '(949) 536-5800', recommended: false },
  { id: 3, name: 'Dada Shabu Shabu Buffet', type: 'Asian', price: '$$', distance: 6, address: '4960 Irvine Blvd Irvine, CA 92620', telephone: '(714) 544-9300', recommended: true },
  { id: 4, name: 'Wow Bento', type: 'Asian', price: '$', distance: 3, address: '10 McLaren Irvine, CA 92618', telephone: '(949) 699-0808', recommended: false },
  { id: 5, name: 'Burntzilla', type: 'American', price: '$', distance: 1, address: '14413 Culver Dr. Irvine, CA 92606', telephone: '(949) 392-5995', recommended: true },
  { id: 6, name: 'The Kroft', type: 'American', price: '$$', distance: 7, address: '2493 Park Ave Tustin, CA 92782', telephone: '(657) 900-8451', recommended: false },
  { id: 7, name: 'Butterleaf', type: 'Vegetarian', price: '$$', distance: 2, address: '2222 Michelson Dr. Irvine, CA 92612', telephone: '(949) 932-0420', recommended: false },
  { id: 8, name: 'CUCINA enoteca Irvine', type: 'Italian', price: '$$', distance: 3, address: '532 Spectrum Center Dr. Irvine, CA 92618', telephone: '949-861-2222', recommended: false },
  { id: 9, name: 'Tender Greens', type: 'Salad', price: '$$', distance: 7, address: '530 Spectrum Center Dr. Irvine, CA 92618', telephone: '(949) 679-9135', recommended: false },
  { id: 10, name: 'Cream Pan', type: 'Desserts', price: '$', distance: 1, address: '602 El Camino Real Tustin, CA 92780', telephone: '(714) 665-8239', recommended: false }
]

var $business = document.querySelector('.restaurants')

function renderRecomRestaurant(recom) {
  for (var i = 0; i < recom.length; i++) {
    var currentRestaurant = recom[i]
    if (recom[i].recommended === true) {
      var $restaurant = renderRestaurant(currentRestaurant)
      $business.appendChild($restaurant)
    // return currentRestaurant
    // console.log(currentRestaurant)
    }
  }
}

function renderRestaurant(restaurant) {
  var $container = document.createElement('div')
  var $name = document.createElement('h3')
  var $type = document.createElement('p')
  var $price = document.createElement('p')

  $name.textContent = restaurant.name
  $type.textContent = restaurant.type
  $price.textContent = restaurant.price

  $name.classList.add('name')

  $container.appendChild($name)
  $container.appendChild($type)
  $container.appendChild($price)

  return $container
}

renderRecomRestaurant(restaurants)

// console.log(renderRecomRestaurant(restaurants))
