import { axis } from './axis/axis';
import { layouts } from './layouts/layouts';
import { behaviours } from './behaviours/behaviours';
import { barChart } from './bar-chart/bar-chart';
import { smiley } from './smiley/smiley';
import { arc } from './arc/arc';
import angular from 'angular';

export default angular.module('D3SvgAngular.components', [])
  .directive('arc', arc)
  .directive('smiley', smiley)
  .directive('barChart', barChart)
  .directive('behaviours', behaviours)
  .directive('layouts', layouts)
  .directive('axis', axis);
