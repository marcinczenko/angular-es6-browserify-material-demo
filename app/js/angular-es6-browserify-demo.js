import 'angular/angular.js';
import DemoController from './demo-controller.js';
import LeftController from './left-controller.js';
import '../stylesheets/index.css';
import angularMaterial from 'angular-material';

let demoModule = angular.module('angular-es6-browserify-demo',[
    angularMaterial
]);
    
demoModule.controller('DemoController', /*@ngInject*/ DemoController);
demoModule.controller('LeftController', /*@ngInject*/ LeftController);

export default demoModule;
