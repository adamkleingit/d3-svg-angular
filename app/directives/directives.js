import { forceLayout } from './force-layout';
import { draggable } from './draggable';
import { zoomPan } from './zoom-pan';
import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('D3SvgAngular.directives', [])
  .directive('ifEnv', ifEnv)
  .directive('zoomPan', zoomPan)
  .directive('draggable', draggable)
  .directive('forceLayout', forceLayout);
