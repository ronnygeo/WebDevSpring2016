/**
 * Created by ronnygeo on 3/19/16.
 */
(function (){
    angular.module('FormBuilderApp')
        .controller('DialogController', DialogController);

    DialogController.$inject = ['info', '$uibModalInstance'];

    function DialogController(info, $uibModalInstance) {
        var vm = this;
        infoCopy = angular.copy(info);
        vm.info = infoCopy;

        if(info.type =='checkboxes' ||info.type =='radios'||info.type =='options'||info.type =='OPTIONS'||info.type =='RADIOS'||info.type =='CHECKBOXES'){
            var data = "";
            for (var i of info.options) {
                data += i.label+":"+i.value+"\n";
            }
            // console.log(data);
            vm.info.optionsData = data;
        }

        // console.log(info);
        // console.log(vm.optionsData);
        vm.update = update;
        vm.cancel = cancel;

        function update(){
            // console.log("Update Options.");
            angular.copy(vm.info, info);
            $uibModalInstance.close(vm.info.optionsData);
        }
        
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }

})();