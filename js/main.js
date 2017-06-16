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
  var $addressCity = document.createElement('p')
  var $addressIcon = document.createElement('i')
  var $phone = document.createElement('span')
  var $phoneIcon = document.createElement('i')

  // add link to 'read more' in 2nd issue

  $container.classList.add('card')
  $imageContainer.classList.add('image')

  $contentContainer.classList.add('content')
  $name.classList.add('header')
  $metaContainer.classList.add('meta')
  $description.classList.add('description')

  $extraContainer.classList.add('extra', 'content')
  $addressIcon.classList.add('building', 'outline', 'icon')
  $phone.classList.add('left', 'floated')
  $phoneIcon.classList.add('call', 'square', 'icon')

  $image.setAttribute('src', restaurant.image)
  $name.textContent = restaurant.name
  $type.textContent = restaurant.type
  $price.textContent = restaurant.price
  $description.textContent = restaurant.description

  var $addressText = document.createTextNode(restaurant.address)
  $address.setAttribute('id', 'address')
  var $addressCityText = document.createTextNode(restaurant.addressCity)
  $addressCity.setAttribute('id', 'city')
  var $phoneText = document.createTextNode(restaurant.telephone)
  $phone.setAttribute('id', 'phone')

  $imageContainer.appendChild($image)
  $container.appendChild($imageContainer)

  $contentContainer.appendChild($name)
  $metaContainer.appendChild($type)
  $metaContainer.appendChild($price)
  $contentContainer.appendChild($metaContainer)
  $contentContainer.appendChild($description)
  $container.appendChild($contentContainer)

  $extraContainer.appendChild($addressIcon)
  $address.appendChild($addressText)
  $addressCity.appendChild($addressCityText)
  $phone.appendChild($phoneText)
  $extraContainer.appendChild($address)
  $extraContainer.appendChild($addressCity)
  $extraContainer.appendChild($phoneIcon)
  $extraContainer.appendChild($phone)
  $container.appendChild($extraContainer)

  return $container
}

displayRestaurants(restaurants, $restaurantList)
