import {friends, links} from 'data';
class behavioursController {
  // @ngInject
  constructor() {
    this.happiness = 0.05;
    this.scale = 1;
    this.pan = {
      x: 0,
      y: 0
    };
    this.friends = friends;
    this.links = links;
  }
}

export function behaviours() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/behaviours/behaviours.html',
    controller: behavioursController,
    controllerAs: 'behaviours',
    bindToController: true
  };
}
