/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var $restaurantList = document.querySelector('#restaurants')
var $modalContainer = document.querySelector('.modal.container')

function displayRestaurants(restaurants, $container) {
  for (var i = 0; i < restaurants.length; i++) {
    var currentRestaurant = restaurants[i]
    if (restaurants[i].recommended === true) {
      var $restaurant = renderRestaurant(currentRestaurant)
      $container.appendChild($restaurant)
    }
  }
}

// function displayModal(restaurants)
// add header underline hover feature
// if click listener; data-id = restaurant.id; display that modal page with correct id
// var $modalContainer = document.querySelector('.modal.container')
// $modalContainer.appendChild($container)

var $cardContainer = document.querySelector('.ui.container')

function findRestaurant(id, restaurants) {
  for (var i = 0; i < restaurants.length; i++) {
    if (id === restaurants[i].id) {
      return restaurants[i]
    }
  }
}

// id is going to represent the id that we want to match with the id of our list of restaurants

$cardContainer.addEventListener('click', function (event) {
  var target = event.target
  var restaurant = findRestaurant(target.dataset.id, restaurants)
  var $modal = renderModal(restaurant)
  $modalContainer.appendChild($modal)
  $('.ui.modal')
    .modal('show')
})

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
  $name.setAttribute('data-id', restaurant.id)
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

function renderModal(restaurant) {
  var $container = document.createElement('div')
  var $closeIcon = document.createElement('i')
  var $nameHeader = document.createElement('div')

  var $imageContentContainer = document.createElement('div')
  var $imageContainer = document.createElement('div')
  var $image = document.createElement('img')
  var $descriptionContainer = document.createElement('div')
  var $menuHeader = document.createElement('div')
  var $menu = document.createElement('ul')

  $container.classList.add('ui', 'modal')
  $closeIcon.classList.add('close', 'icon')
  $nameHeader.classList.add('header')

  $imageContentContainer.classList.add('image', 'content')
  $imageContainer.classList.add('ui', 'medium', 'image')
  $image.setAttribute('src', restaurant.image)
  $descriptionContainer.classList.add('description')
  $menuHeader.classList.add('ui', 'header')

  $nameHeader.textContent = restaurant.name

  $menuHeader.textContent = 'Suggested Menu Items'

  var menuItem = restaurant.menu.split(',')
  for (var i = 0; i < menuItem.length; i++) {
    var $menuItem = document.createElement('li')
    $menuItem.textContent = menuItem[i]
    $menu.appendChild($menuItem)
  }

  $container.appendChild($closeIcon)
  $container.appendChild($nameHeader)

  $descriptionContainer.appendChild($menuHeader)
  $descriptionContainer.appendChild($menu)
  $imageContainer.appendChild($image)
  $imageContentContainer.appendChild($imageContainer)
  $imageContentContainer.appendChild($descriptionContainer)
  $container.appendChild($imageContentContainer)

  return $container
}

/* $('.ui.modal')
  .modal('show') */

// Use fade up module/transition from Semantic for more info page to appear
// Add page dimmer (maybe blurring dimmer?) also
// Maybe just use a modal window? (Standard modal)

// Step 1: Create renderModal function
// Step 2: Create eventlistener function
// Step 3: Make sure to implement hover underline feature for restaurant name

// Add popup for the type and price
