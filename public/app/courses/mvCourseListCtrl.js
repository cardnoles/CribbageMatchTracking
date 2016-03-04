angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses) {
  $scope.courses = mvCachedCourses.query();

});
