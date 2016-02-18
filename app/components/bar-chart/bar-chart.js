import { barChartData } from 'data';

class barChartController {
  constructor() {
    this.data = barChartData;

    // dimensions:
    this.width = 450;
    this.height = 450;
    this.margin = {top: 20, right: 20, bottom: 30, left: 40};
    this.innerWidth = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;

    // define x-scale
    this.xScale = d3.scale.ordinal()
        .rangeRoundBands([0, this.innerWidth], .1)
        .domain(this.data.map((d) => d.month ));

    // define y-scale
    this.yScale = d3.scale.linear()
        .range([this.innerHeight, 0])
        .domain(d3.extent(this.data.map((d) => d.value )));
  }
}

export function barChart() {
  return {
    restrict: 'E',
    templateUrl: '/components/bar-chart/bar-chart.html',
    controller: barChartController,
    controllerAs: 'barChart'
  };
}
