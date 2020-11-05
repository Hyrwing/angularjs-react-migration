import "@uirouter/angularjs";

import { angular, bootstrap, module } from "angular";

import { homeModule } from "./angular/home";
import { aboutModule } from './angular/about';
import "./style.css";

const myAppsName = "my-angularjs-app";

module(myAppsName, ["ui.router", homeModule, aboutModule]);

bootstrap(document.getElementById("angularjs-app"), [myAppsName]);
