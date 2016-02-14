import d3 from 'd3';
import _ from 'lodash';

function linkFn($scope, $element) {
  const svgElement = d3.select($element[0]);
  const zoom = d3.behavior.zoom()
    .scaleExtent([0.2, 5]).on("zoom", onZoom);

  const throttleDigest = _.throttle((x, y, scale) => {
    $scope.pan = { x, y };
    $scope.scale = scale;
  }, 17);

  function onZoom() {

    if (d3.event.sourceEvent.button !== 0) {
      return;
    }

    // bound to top right (0, 0)
    let tx = Math.min(d3.event.translate[0], 0);
    let ty = Math.min(d3.event.translate[1], 0);
    zoom.translate([tx, ty]);

    throttleDigest(tx, ty, d3.event.scale);
  }

  svgElement.call(zoom).on("dblclick.zoom", null);
}

export function d3ZoomPan() {
  return {
    restrict: 'A',
    link: linkFn
  };
}
