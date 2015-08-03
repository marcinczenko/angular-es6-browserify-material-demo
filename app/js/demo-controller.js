export default /* @ngInject */ function($scope, $timeout, $mdSidenav, $mdComponentRegistry, $log) {
    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle()
                          .then(function(){
                            $log.debug("toggle LEFT is done");
                          });
    };
}
