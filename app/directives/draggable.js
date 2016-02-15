function linkFn($scope, $element, attrs) {
  const item = $scope.$eval(attrs.draggable);
  const throttleDigest = _.throttle($scope.$apply.bind($scope), 17);

  const drag = d3.behavior.drag()
    .on('drag', onDrag)
    .on('dragstart', onDragstart);

  function onDrag() {
    item.x += d3.event.dx;
    item.y += d3.event.dy;
    throttleDigest();
  }

  function onDragstart() {
    d3.event.sourceEvent.stopPropagation();
  }

  d3.select($element[0]).call(drag);
}

export function draggable() {
  return {
    restrict: 'A',
    link: linkFn
  };
}

