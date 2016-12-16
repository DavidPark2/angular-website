(function () {
'use strict';

// instructions
// 1. In textbox, user can list items separated by commas
// 2. When button click, if items is =< 3, message under textbox will say, "Enjoy!"
//    ii. if > 3, message under textbox will say "Too Much!"
//    TIP! use split method
//    iii. It empty, message uder textbox will say "Please enter data first"
//    TIP! ng-model trims your data automatically
//    TIP! only one message should show at the same time

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = ""
  $scope.lunchMessage = ""
  $scope.cssStyling = ""

  $scope.fullnessMessage = function () {
    var fullnessMeasure = convertStringToArray($scope.lunchList)
    var stylingTheCss = colorAndBorder(fullnessMeasure)

    $scope.lunchMessage = fullnessMeasure
    $scope.cssStyling = stylingTheCss
  }

  var convertStringToArray = function(string) {
    var arrayed = string.split(' ')

    if (arrayed.length === 1 && string === '') {
      return "Please enter data first"
    } else if (arrayed.length > 0 && arrayed.length <= 3) {
      return "Enjoy!"
    } else {
      return "Too Much!"
    }
  }

  var colorAndBorder = function(data) {
    if (data === "Please enter data first") {
      return "noData"
    } else {
      return "hasData"
    }
  }
}
})()
