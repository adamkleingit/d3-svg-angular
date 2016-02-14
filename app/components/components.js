import { smiley } from './smiley/smiley';
import { arc } from './arc/arc';
import angular from 'angular';

export default angular.module('D3SvgAngular.components', [])
  .directive('arc', arc)
  .directive('smiley', smiley);
