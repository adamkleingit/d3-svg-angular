import { d3ZoomPan } from './d-3-zoom-pan';
import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('D3SvgAngular.directives', [])
  .directive('ifEnv', ifEnv)
  .directive('d3ZoomPan', d3ZoomPan);
