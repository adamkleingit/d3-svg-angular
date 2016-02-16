class arcController {
  // @ngInject
  constructor($log, $element) {
    console.log(parseFloat(this.radius));
    this.d = d3.svg.arc()
      .outerRadius(parseFloat(this.radius))
      .innerRadius(parseFloat(this.radius) - parseFloat(this.thickness))
      .startAngle(parseFloat(this.startAngle) * Math.PI)
      .endAngle(parseFloat(this.endAngle) * Math.PI)();
  }
}

export function arc() {
  return {
    restrict: 'E',
    templateNamespace: 'svg',
    replace: true,
    scope: {
      radius: '@',
      thickness: '@',
      startAngle: '@',
      endAngle: '@'
    },
    templateUrl: '/components/arc/arc.html',
    controller: arcController,
    controllerAs: 'arc',
    bindToController: true
  };
}
