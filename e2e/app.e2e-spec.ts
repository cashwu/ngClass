import { NgClassPage } from './app.po';

describe('ng-class App', function() {
  let page: NgClassPage;

  beforeEach(() => {
    page = new NgClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
