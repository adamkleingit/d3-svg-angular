function linkFn($scope, $element) {
  let axis = d3.svg.axis()
    .scale($scope.scale)
    .orient($scope.orient);

  if ($scope.ticks) {
    axis = axis.ticks(parseInt($scope.ticks), $scope.ticksFormat);
  }

  d3.select($element[0])
      .call(axis);
}

export function axis() {
  return {
    restrict: 'E',
    templateNamespace: 'svg',
    replace: true,
    scope: {
      scale: '=',
      orient: '@',
      ticks: '@',
      ticksFormat: '@'
    },
    templateUrl: '/components/axis/axis.html',
    link: linkFn
  };
}
