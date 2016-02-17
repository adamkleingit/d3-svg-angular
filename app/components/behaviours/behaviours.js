class behavioursController {
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
        source: this.friends[0],
        target: this.friends[1]
      },
      {
        id: 2,
        source: this.friends[0],
        target: this.friends[2]
      },
      {
        id: 3,
        source: this.friends[1],
        target: this.friends[3]
      },
      {
        id: 4,
        source: this.friends[1],
        target: this.friends[9]
      },
      {
        id: 5,
        source: this.friends[4],
        target: this.friends[5]
      },
      {
        id: 6,
        source: this.friends[4],
        target: this.friends[6]
      },
      {
        id: 7,
        source: this.friends[4],
        target: this.friends[7]
      },
      {
        id: 8,
        source: this.friends[6],
        target: this.friends[8]
      },
      {
        id: 9,
        source: this.friends[7],
        target: this.friends[9]
      }
    ];
  }
}

export function behaviours() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/behaviours/behaviours.html',
    controller: behavioursController,
    controllerAs: 'behaviours',
    bindToController: true
  };
}
