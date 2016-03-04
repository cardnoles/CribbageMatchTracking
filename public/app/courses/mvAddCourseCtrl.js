angular.module('app').controller('mvAddCourseCtrl', function($scope, mvNotifier, $location, $http) {
  $scope.addcourse = function() {
    var newCourseData = {
      title: $scope.title,
      featured: $scope.featured,
      published: $scope.published,
      tags: $scope.tags
    };
    console.log(newCourseData);

    $http.post('/api/courses', newCourseData)
    .then(function() {
      mvNotifier.notify('Course created!');
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }
})
