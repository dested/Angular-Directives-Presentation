'use strict';

/* Controllers */

angular.module('AngularDirectives.controllers', []).
    controller('HomeCtrl', [function () {

    }]).
    controller('CheckBoxListCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.collection = ['Shoes', 'Hats', 'Cars', 'Bikes', 'Dogs', 'Cats'];
        $scope.model.items = [];

    }]).
    controller('ForNextCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.firstName = 'Joe';
        $scope.model.lastName = 'Shmoe';
        $scope.model.age = '15';
        $scope.model.job = 'Fry Cook';

    }]).
    controller('MaxLengthCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.singleLine = 'Shoes';
        $scope.model.multiLine = 'Hats';

    }]).
    controller('FocusCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.shouldFocusShoes = false;
        $scope.model.shoes = 'Shoes';


        $scope.model.focusShoes = function () {
            $scope.model.shouldFocusShoes = true;
        };

    }]).
    controller('EllipsesCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.content = 'Shoes';
    }]).
    controller('PopOpenSectionCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.sectionInfo = { CurrentUrl: 'http://Shoes.org/' };
    }]).
    controller('ImageUploadCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.imageLoaded = function(loadedImage) {
            $scope.model.imageContent = loadedImage;
        };
    }]).
    controller('FileDropUploadCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.imageLoaded = function (loadedImage) {
            $scope.model.imageContent = loadedImage;
        };
    }]).
    controller('GridCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.showGrid = false;
        $scope.model.scale = { x: 15, y: 15 };
        $scope.model.toggleGrid = function() {
            $scope.model.showGrid = !$scope.model.showGrid;
        };

    }]).
    controller('DraggableCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.content = 'Content';
        $scope.content = 'More Content';

    }]).
    controller('FancyListCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.items = ['Shoes', 'Hats', 'Cars', 'Bikes', 'Dogs', 'Cats'];
        $scope.model.bind = null;
    }]).
    controller('FloatingWindowCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.modalVisible = true;
        $scope.model.roomName = 'Shoes';
        $scope.model.createRoom=function() {
            alert($scope.model.roomName);
            $scope.model.modalVisible = false;
        };
        $scope.model .windowClosed= function() {
            alert('closed');
        };
    }]);

