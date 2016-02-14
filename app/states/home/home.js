import d3 from 'd3';

export class HomeController {

  // @ngInject
  constructor() {
    this.scale = 1;
    this.pan = {
      x: 0,
      y: 0
    };
    this.friends = [
      {
        id: 1,
        x: 50,
        y: 120
      },
      {
        id: 2,
        x: 160,
        y: 280
      },
      {
        id: 3,
        x: 320,
        y: 130
      },
      {
        id: 4,
        x: 225,
        y: 45
      },
      {
        id: 5,
        x: 120,
        y: 300
      },
      {
        id: 6,
        x: 95,
        y: 140
      },
      {
        id: 7,
        x: 264,
        y: 80
      },
      {
        id: 8,
        x: 220,
        y: 335
      },
      {
        id: 9,
        x: 125,
        y: 55
      },
      {
        id: 10,
        x: 140,
        y: 360
      }
    ];
  }

}
