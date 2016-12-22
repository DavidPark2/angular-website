(function() {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ItemListService", ItemListService)

function ToBuyController() {
  var buy = this
}

function AlreadyBoughtController() {
  var bought = this
}

function ItemListService() {
  var service = this

  // List of shopping items
  var buyItems = []
  var boughtItems = []

  // Adding items to array
  service.addBuyItem = function(itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    }
    buyItems.push(item)
  }

  service.addBoughtItem = function(itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    }
    boughtItems.push(item)
  }

  // Removing items from array
  service.removeBuyItem = function(itemIndex) {
    buyItems.splice(itemIndex, 1)
  }

  service.removeBoughtItem = function(itemIndex) {
    boughtItems.splice(itemIndex, 1)
  }

  // Serve array of items
  service.getBuyItem = function() {
    return buyItems
  }

  service.getBoughtItems = function() {
    return boughtItems
  }
}

})()
