(function() {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ItemListService", ItemListService)

ToBuyController.$inject = ["ItemListService"]
function ToBuyController(ItemListService) {
  var buy = this
  buy.buyMessage = false

  buy.buyList = ItemListService.getBuyItem()

  buy.removeBuyItem = function(itemIndex) {
    ItemListService.buyToBoughtList(itemIndex)

    if (ItemListService.getBuyItem().length === 0) {
      buy.buyMessage = !buy.buyMessage
    }
  }
}

AlreadyBoughtController.$inject = ["ItemListService"]
function AlreadyBoughtController(ItemListService) {
  var bought = this
  bought.boughtMessage = true

  console.log($watch.ItemListService.getBoughtList().length)

  bought.boughtList = ItemListService.getBoughtList()
}

function ItemListService() {
  var service = this

  // List of shopping items
  var buyItems = [
                   {
                     name: "cookies",
                     quantity: 10
                   },
                   {
                     name: "chips",
                     quantity: 8
                   },
                   {
                     name: "Pepsi",
                     quantity: 4
                   },
                   {
                     name: "bread",
                     quantity: 5
                   },
                   {
                     name: "coffee",
                     quantity: 11
                   }
                 ]
  var boughtItems = []

  service.buyToBoughtList = function(itemIndex) {
    boughtItems.push(buyItems[itemIndex])
    buyItems.splice(itemIndex, 1)
  }

  service.getBuyItem = function() {
    return buyItems
  }

  service.getBoughtList = function() {
    return boughtItems
  }
}

})()
