// Code goes here

var myApp = angular.module("app", []);

myApp.controller('mainCtrl', function($scope) {

  $scope.user1 = {
      name: "Ciril Sebastian",
      address: {
        house: "Kalarickal",
        street: "Kadappattor P.O",
        city: "Pala",
        state: "Kerala",
        pincode: "686574"
      },
      friends: [
        'Kiran',
        'Arun',
        'Syam'
      ],
      contactDetails: {
        email: "ciril123@gmail.com",
        mobile: "9895722411"
      },
      rank : "",
      level: 0
    },
  $scope.user2 = {
      name: "Sam Alex",
      address: {
        house: "No. 69, Allipoo",
        street: "Prasanthi Nagar",
        city: "Kochi",
        state: "Kerala",
        pincode: "682024"
      },
      friends: [
        'Arjun',
        'Mary',
        'Ciril'
      ],
      contactDetails: {
        email: "sam123@gmail.com",
        mobile: "9895787871"
      },
      rank : "",
      level: 1
    }

});

myApp.directive('stateDisplay', function() {
  return {
    link: function(scope, el, attrs) {
      scope.$watch(attrs['stateDisplay'], function(newVal) {
        switch (newVal) {
          case 0:
            el.css('background-color', 'white');
            break;
          case 1:
            el.css('background-color', 'lightyellow');
            break;
          case 2:
            el.css('background-color', 'lightgray');
            break;
        }
      });
    }
  }
});

myApp.directive('userInfoCard', function() {

  return {
    templateUrl: "userinfocard.html",
    restrict: "E",
    scope: {
      user: "=",
      initialCollapsed: "@collapsed"
    },

    controller: function($scope) {
        $scope.collapsed = ($scope.initialCollapsed === 'true'),

        $scope.collapse = function() {
          $scope.collapsed = !$scope.collapsed;
        },
        $scope.confirmRemove = function(friend) {
          var index = $scope.user.friends.indexOf(friend);
          if (index > -1) {
            $scope.user.friends.splice(index, 1);
          }
        },
        $scope.nextState = function() {
          $scope.user.level++;
          $scope.user.level = $scope.user.level % 3;
        },
        
        $scope.knightMe = function(user) {
          alert('user');
          user.rank = "knight";
        }
    }
  }
});

myApp.directive('removeFriend', function() {
  return {
    restrict: 'E',
    templateUrl: "removeFriend.html",
    scope: {
      notifyParent: "&method"
    },
    controller: function($scope) {
      $scope.removing = false,
        $scope.startRemoving = function() {
          $scope.removing = true;
        },
        $scope.cancelRemove = function() {
          $scope.removing = false;
        },
        $scope.removeFriend = function() {
          $scope.notifyParent();
        }

    }
  }
});

myApp.directive('address', function() {

  return {
    templateUrl: "address.html",
    restrict: "E",
    scope: true,

    controller: function($scope) {
      $scope.collapsed = true,

        $scope.collapseAddress = function() {
          $scope.collapsed = true;
        },
        $scope.expandAddress = function() {
          $scope.collapsed = false;
        }
    }
  }
});