/* eslint-disable no-undef */
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
  var $image = document.createElement('img')

  $name.textContent = restaurant.name
  $type.textContent = restaurant.type
  $price.textContent = restaurant.price

  $image.setAttribute('src', restaurant.image)
  $name.classList.add('name')

  $container.appendChild($name)
  $container.appendChild($type)
  $container.appendChild($price)
  $container.appendChild($image)

  return $container
}

renderRecomRestaurant(restaurants)

// console.log(renderRecomRestaurant(restaurants))
