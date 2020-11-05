import { module } from "angular";
import AboutCtrl from "./about.controller";

// this is the "interface" of the module, just its name.
// we could not export anything, but this encourages good use of ES modules.
export const aboutModule = "about";

// AngularJS is weird, global modules and stuff.
// when this file is imported this "side-effect" executes.
module(aboutModule, [])
  .config(($stateProvider) =>
    $stateProvider.state("about", {
      url: "/about",
      template: import("./about.html"),
      controllerAs: '$ctrl',
      controller: 'AboutCtrl'
    })).controller('AboutCtrl', AboutCtrl);
