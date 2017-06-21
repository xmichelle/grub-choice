/* global restaurants */
/* global $ */
/* eslint-disable no-unused-vars */
var $restaurantList = document.querySelector('#restaurants')
var $modalContainer = document.querySelector('.modal.container')
var $dropdownTypeContainer = document.querySelector('#type')

function displayRestaurants(restaurants, $container) {
  for (var i = 0; i < restaurants.length; i++) {
    var currentRestaurant = restaurants[i]
    if (restaurants[i].recommended === true) {
      var $restaurant = renderRestaurant(currentRestaurant)
      $container.appendChild($restaurant)
    }
  }
}

displayRestaurants(restaurants, $restaurantList)

var $cardContainer = document.querySelector('.ui.container')

function findRestaurant(id, restaurants) {
  for (var i = 0; i < restaurants.length; i++) {
    if (id === restaurants[i].id) {
      return restaurants[i]
    }
  }
}

$cardContainer.addEventListener('click', function (event) {
  var target = event.target.dataset.id
  var $restaurant = findRestaurant(target, restaurants)
  var $modal = renderModal($restaurant)
  $('.ui.modal').remove()
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

function renderDropdownType(type) {
  var $container = document.createElement('div')

  var $menu = document.createElement('div')
  var $item = document.createElement('div')
  var $image = document.createElement('img')

  $container.classList.add('ui', 'fluid', 'selection', 'dropdown')

  $menu.classList.add('menu')
  $item.classList.add('item')
  $image.classList.add('ui', 'mini', 'avatar', 'image')
  $image.setAttribute('src', type.image)

  var $imageText = document.createTextNode(type.name)

  $image.appendChild($imageText)
  $item.appendChild($image)
  $menu.appendChild($item)
  $container.appendChild($menu)

  return $container
}

// Quick Bite, American, Asian, Vegetarian, Italian, Salad, Desserts

// Add popup for the type and price

// $('.ui.dropdown')
//  .dropdown()
