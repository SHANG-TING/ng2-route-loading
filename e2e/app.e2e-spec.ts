import { RouteLoadingPage } from './app.po';

describe('route-loading App', () => {
  let page: RouteLoadingPage;

  beforeEach(() => {
    page = new RouteLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
