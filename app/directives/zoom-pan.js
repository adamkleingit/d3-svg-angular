// zoomPan.js
import d3 from 'd3';
import _ from 'lodash';

const MIN_ZOOM = 0.2;
const MAX_ZOOM = 5;
const DIGEST_INTERVAL = 17;

function linkFn($scope, $element) {
  const zoom = d3.behavior.zoom()
    .scaleExtent([MIN_ZOOM, MAX_ZOOM])
    .on('zoom', onZoom);

  const throttleDigest = _.throttle($scope.$apply.bind($scope), DIGEST_INTERVAL);

  function onZoom() {
    $scope.pan = { x: d3.event.translate[0], y: d3.event.translate[1] };
    $scope.scale = d3.event.scale;

    throttleDigest();
  }

  d3.select($element[0])
    .call(zoom);
}

export function zoomPan() {
  return {
    restrict: 'A',
    link: linkFn,
    scope: {
      scale: '=',
      pan: '='
    }
  };
}
