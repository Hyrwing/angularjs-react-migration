import "@uirouter/angularjs";
import { bootstrap, module } from "angular";

import { homeModule } from "./home";
import "./style.css";

const myAppsName = "my-angularjs-app";

module(myAppsName, ["ui.router", homeModule]);

bootstrap(document.getElementById("angularjs-app"), [myAppsName]);
