/* eslint-disable no-undef */
var $restaurantList = document.querySelector('#restaurants')

function displayRestaurants(restaurants, $container) {
  for (var i = 0; i < restaurants.length; i++) {
    var currentRestaurant = restaurants[i]
    if (restaurants[i].recommended === true) {
      var $restaurant = renderRestaurant(currentRestaurant)
      $container.appendChild($restaurant)
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
  var $description = document.createElement('div')

  var $extraContainer = document.createElement('div')
  var $address = document.createElement('span')
  var $addressIcon = document.createElement('i')
  var $addressText = document.createTextNode(restaurant.address)
  var $phone = document.createElement('span')
  var $phoneIcon = document.createElement('i')
  var $phoneText = document.createTextNode(restaurant.telephone)

  // add link to 'read more' in 2nd issue

  $container.classList.add('card')
  $imageContainer.classList.add('image')
  $contentContainer.classList.add('content')
  $name.classList.add('header')
  $metaContainer.classList.add('meta')
  $description.classList.add('description')
  $extraContainer.classList.add('extra', 'content')
  $address.classList.add('left', 'floated')
  $addressIcon.classList.add('building', 'outline', 'icon')
  $phone.classList.add('left', 'floated')
  $phoneIcon.classList.add('call', 'square', 'icon')

  $image.setAttribute('src', restaurant.image)
  $name.textContent = restaurant.name
  $type.textContent = restaurant.type
  $price.textContent = restaurant.price
  $description.textContent = restaurant.description

  $imageContainer.appendChild($image)
  $container.appendChild($imageContainer)

  $contentContainer.appendChild($name)
  $metaContainer.appendChild($type)
  $metaContainer.appendChild($price)
  $contentContainer.appendChild($metaContainer)
  $contentContainer.appendChild($description)
  $container.appendChild($contentContainer)

  $address.appendChild($addressIcon)
  $address.appendChild($addressText)
  $phone.appendChild($phoneIcon)
  $phone.appendChild($phoneText)
  $extraContainer.appendChild($address)
  $extraContainer.appendChild($phone)
  $container.appendChild($extraContainer)

  return $container
}

displayRestaurants(restaurants, $restaurantList)
