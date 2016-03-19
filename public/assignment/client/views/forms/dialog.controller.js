/**
 * Created by ronnygeo on 3/19/16.
 */
(function (){
    angular.module('FormBuilderApp')
        .controller('DialogController', DialogController);

    DialogController.$inject = ['$scope', 'info', 'model', 'FieldService', '$uibModalInstance', '$filter'];

    function DialogController($scope, info, model, FieldService, $uibModalInstance, $filter){
        $scope.info = info;
        initialInfo = angular.copy(info);
//        $scope.model = model;
//        console.log(info.options);

        if(info.type =='checkboxes' ||info.type =='radios'||info.type =='options'||info.type =='OPTIONS'||info.type =='RADIOS'||info.type =='CHECKBOXES'){
            var data = "";
            for (var i of info.options) {
                data += i.label+":"+i.value+"\n";
            }
            // console.log(data);
            $scope.info.optionsData = data;
        }

        // console.log(info);
        // console.log($scope.optionsData);
        $scope.update = update;
        $scope.cancel = cancel;

        function update(){
            console.log("Update Options.");
            $uibModalInstance.close($scope.info.optionsData);
        }
        
        function cancel() {
            $scope.info =angular.copy(initialInfo);
            $uibModalInstance.dismiss('cancel');
        }
    }

})();