import { renderReactApp } from "../react";

export class HomeCtrl {
  name = "AngularJS";

  // I don't remember how to properly use AngularJS element references.
  // Using Vanilla JS to append the DOM element from React,
  // but feel free to use a directive or proper element binding/substitution.
  constructor($scope) {
    const reactRoot = document.getElementById("react-app");

    const onChangeName = (name) => {
      this.name = name;
      // from React to AngularJS
      $scope.$apply();
    };

    // first render
    const reactApp = renderReactApp({
      name: this.name,
      onChangeName,
    });

    // attach DOM element that React controls
    reactRoot.appendChild(reactApp);

    // from AngularJS to React
    $scope.$watch("$ctrl.name", (name) => {
      renderReactApp({ name, onChangeName });
    });
  }
}
