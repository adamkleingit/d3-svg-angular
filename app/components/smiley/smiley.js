class SmileyController {
  startAngle() {
    return this.happiness ? 1 - parseFloat(this.happiness) : 0.7;
  }
  endAngle() {
    return this.happiness ? 1 + parseFloat(this.happiness) : 1.3;
  }
}

export function smiley() {
  return {
    restrict: 'E',
    templateNamespace: 'svg',
    replace: true,
    templateUrl: '/components/smiley/smiley.html',
    scope: {
      happiness: '=?'
    },
    controller: SmileyController,
    controllerAs: 'smiley',
    bindToController: true
  };
}
