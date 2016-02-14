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
        name: 'Joe',
        x: 50,
        y: 120
      },
      {
        id: 2,
        name: 'Jack',
        x: 160,
        y: 280
      },
      {
        id: 3,
        name: 'Matt',
        x: 320,
        y: 130
      },
      {
        id: 4,
        name: 'Jane',
        x: 225,
        y: 45
      },
      {
        id: 5,
        name: 'Jill',
        x: 120,
        y: 300
      },
      {
        id: 6,
        name: 'Dana',
        x: 95,
        y: 140
      },
      {
        id: 7,
        name: 'Kate',
        x: 264,
        y: 80
      },
      {
        id: 8,
        name: 'Ross',
        x: 220,
        y: 335
      },
      {
        id: 9,
        name: 'Tina',
        x: 125,
        y: 55
      },
      {
        id: 10,
        name: 'Paul',
        x: 140,
        y: 360
      }
    ];
    this.links = [
      {
        id: 1,
        friend1: this.friends[0],
        friend2: this.friends[1]
      },
      {
        id: 2,
        friend1: this.friends[0],
        friend2: this.friends[2]
      },
      {
        id: 3,
        friend1: this.friends[1],
        friend2: this.friends[3]
      },
      {
        id: 4,
        friend1: this.friends[1],
        friend2: this.friends[9]
      },
      {
        id: 5,
        friend1: this.friends[4],
        friend2: this.friends[5]
      },
      {
        id: 6,
        friend1: this.friends[4],
        friend2: this.friends[6]
      },
      {
        id: 7,
        friend1: this.friends[4],
        friend2: this.friends[7]
      },
      {
        id: 8,
        friend1: this.friends[6],
        friend2: this.friends[8]
      },
      {
        id: 9,
        friend1: this.friends[7],
        friend2: this.friends[9]
      }
    ];
  }

}
