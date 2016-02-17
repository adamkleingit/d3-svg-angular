class barChartController {
  constructor() {
    this.data = [
      { x: "A", value: "0.08167"},
      { x: "B", value: "0.01492"},
      { x: "C", value: "0.02782"},
      { x: "D", value: "0.04253"},
      { x: "E", value: "0.12702"},
      { x: "F", value: "0.02288"},
      { x: "G", value: "0.02015"},
      { x: "H", value: "0.06094"},
      { x: "I", value: "0.06966"},
      { x: "J", value: "0.00153"},
      { x: "K", value: "0.00772"},
      { x: "L", value: "0.04025"},
      { x: "M", value: "0.02406"},
      { x: "N", value: "0.06749"},
      { x: "O", value: "0.07507"},
      { x: "P", value: "0.01929"},
      { x: "Q", value: "0.00095"},
      { x: "R", value: "0.05987"},
      { x: "S", value: "0.06327"},
      { x: "T", value: "0.09056"},
      { x: "U", value: "0.02758"},
      { x: "V", value: "0.00978"},
      { x: "W", value: "0.02360"},
      { x: "X", value: "0.00150"},
      { x: "Y", value: "0.01974"},
      { x: "Z", value: "0.00074"}
    ];

    this.width = 450;
    this.height = 450;

    this.margin = {top: 20, right: 20, bottom: 30, left: 40};
    this.innerWidth = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;

    this.x = d3.scale.ordinal()
        .rangeRoundBands([0, this.innerWidth], .1);
    this.x.domain(this.data.map(function(d) { return d.x; }));

    this.y = d3.scale.linear()
        .range([this.innerHeight, 0]);

    this.y.domain([0, d3.max(this.data, function(d) { return d.value; })]);
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
