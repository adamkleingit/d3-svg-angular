import {friends, links} from 'data';
class layoutsController {
  // @ngInject
  constructor() {
    this.scale = 1;
    this.pan = {
      x: 0,
      y: 0
    };
    this.friends = friends;
    this.links = links;
  }
}

export function layouts() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/layouts/layouts.html',
    controller: layoutsController,
    controllerAs: 'layouts',
    bindToController: true
  };
}
