function linkFn($scope, $element, $attrs) {
  const nodes = $scope.$eval($attrs.nodes);
  const links = $scope.$eval($attrs.links);
  $scope.force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .charge(-30)
    .gravity(0.05)
    .linkStrength(0.2)
    .linkDistance(260)
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
