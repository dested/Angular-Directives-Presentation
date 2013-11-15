'use strict';


// Declare app level module which depends on filters, and services
angular.module('AngularDirectives', [
  'ngRoute',
  'AngularDirectives.filters',
  'AngularDirectives.services',
  'AngularDirectives.directives',
  'AngularDirectives.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'HomeCtrl' });
    $routeProvider.when('/checkboxlist', { templateUrl: 'partials/checkboxlist.html', controller: 'CheckBoxListCtrl' });
    $routeProvider.when('/fornext', { templateUrl: 'partials/fornext.html', controller: 'ForNextCtrl' });
    $routeProvider.when('/maxlength', { templateUrl: 'partials/maxlength.html', controller: 'MaxLengthCtrl' });
    $routeProvider.when('/focus', { templateUrl: 'partials/focus.html', controller: 'FocusCtrl' });
    $routeProvider.when('/ellipses', { templateUrl: 'partials/ellipses.html', controller: 'EllipsesCtrl' });
    $routeProvider.when('/popopensection', { templateUrl: 'partials/popOpenSection.html', controller: 'PopOpenSectionCtrl' });
    $routeProvider.when('/imageupload', { templateUrl: 'partials/imageUpload.html', controller: 'ImageUploadCtrl' });
    $routeProvider.when('/filedropupload', { templateUrl: 'partials/fileDropUpload.html', controller: 'FileDropUploadCtrl' });
    $routeProvider.when('/grid', { templateUrl: 'partials/grid.html', controller: 'GridCtrl' });
    $routeProvider.when('/draggable', { templateUrl: 'partials/draggable.html', controller: 'DraggableCtrl' });
    $routeProvider.when('/fancylist', { templateUrl: 'partials/fancylist.html', controller: 'FancyListCtrl' });
    $routeProvider.when('/floatingwindow', { templateUrl: 'partials/floatingwindow.html', controller: 'FloatingWindowCtrl' });
  $routeProvider.otherwise({ redirectTo: '/home' });
}]);
