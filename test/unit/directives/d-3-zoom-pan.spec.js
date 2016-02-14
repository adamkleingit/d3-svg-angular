describe('d3ZoomPan Directive', () => {
  let element, $scope, createDirective;

  beforeEach(angular.mock.module('D3SvgAngular.directives'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createDirective = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<d-3-zoom-pan></d-3-zoom-pan>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createDirective({});
    expect(true).toBeTruthy();
  });
});
