import { module } from "angular";
import { HomeCtrl } from "./home.controller";

// this is the "interface" of the module, just its name.
// we could not export anything, but this encourages good use of ES modules.
export const homeModule = "home";

// AngularJS is weird, global modules and stuff.
// when this file is imported this "side-effect" executes.
module(homeModule, [])
  .config($stateProvider =>
    $stateProvider.state("home", {
      url: "",
      controller: "HomeCtrl",
      controllerAs: "$ctrl",
      templateUrl: "home/home.html"
    })
  )
  .controller("HomeCtrl", HomeCtrl);
