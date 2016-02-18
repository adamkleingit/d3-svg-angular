function linkFn($scope, $element, $attrs) {
  const nodes = $scope.$eval($attrs.nodes);
  const links = $scope.$eval($attrs.links);
  $scope.force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .charge(-60)
    .gravity(0.05)
    .linkStrength(0.1)
    .linkDistance(160)
    .size([450,450])      
    .start();

  $scope.force.on("tick", () => {
    $scope.$digest();
  });
}

export function forceLayout() {
  return {
    restrict: 'A',
    link: linkFn
  };
}
