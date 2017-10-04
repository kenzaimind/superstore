import { SuperstorePage } from './app.po';

describe('superstore App', function() {
  let page: SuperstorePage;

  beforeEach(() => {
    page = new SuperstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
