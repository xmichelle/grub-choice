/* eslint-disable no-undef */
var $business = document.querySelector('#restaurants')

function renderRecomRestaurant(recom) {
  for (var i = 0; i < recom.length; i++) {
    var currentRestaurant = recom[i]
    if (recom[i].recommended === true) {
      var $restaurant = renderRestaurant(currentRestaurant)
      $business.appendChild($restaurant)
    }
  }
}

function renderRestaurant(restaurant) {
  var $container = document.createElement('div')

  var $imageContainer = document.createElement('div')
  var $image = document.createElement('img')

  var $contentContainer = document.createElement('div')
  var $name = document.createElement('div')
  var $metaContainer = document.createElement('div')
  var $type = document.createElement('a')
  var $price = document.createElement('a')
  // add div class description in 2nd issue
  // add link to 'read more' in 2nd issue

  $container.classList.add('card')
  $imageContainer.classList.add('image')
  $contentContainer.classList.add('content')
  $name.classList.add('header')
  $metaContainer.classList.add('meta')

  $image.setAttribute('src', restaurant.image)
  $name.textContent = restaurant.name
  $type.textContent = restaurant.type
  $price.textContent = restaurant.price

  $imageContainer.appendChild($image)
  $container.appendChild($imageContainer)

  $contentContainer.appendChild($name)
  $metaContainer.appendChild($type)
  $metaContainer.appendChild($price)
  $contentContainer.appendChild($metaContainer)
  $container.appendChild($contentContainer)

  return $container
}

renderRecomRestaurant(restaurants)

/*  var $name = document.createElement('h3')
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
*/
