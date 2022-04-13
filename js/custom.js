var app = angular.module("myApp", []);
  app.controller("myCtrl", function($scope) {

  $scope.customer_information = function(){
    $scope.isHome = true;
    $scope.customer = true;
  }
  $scope.back = function(){
    $scope.isHome = false;
    $scope.customer = false;
  }
  $scope.collection = function(){
    $scope.isHome = true;
    $scope.cust = true;
  }
  $scope.geri = function(){
    $scope.cust = false;
    $scope.isHome = false;
  }
  $scope.payment = function(){
    $scope.cust = false;
    $scope.payment_table = true;
  }
  $scope.backblack = function(){
    $scope.payment_table = false;
    $scope.cust = true;
  }
  $(function(){
    $(document).ready(function(){
        $('.js-example-basic-single').select2();
    });
    $('.car-box').on('click', function() {
       $(this).children('.card-footer').slideToggle('slow');
    });
  });


});
