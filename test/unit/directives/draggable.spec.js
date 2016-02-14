describe('draggable Directive', () => {
  let element, $scope, createDirective;

  beforeEach(angular.mock.module('D3SvgAngular.directives'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createDirective = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<draggable></draggable>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createDirective({});
    expect(true).toBeTruthy();
  });
});
