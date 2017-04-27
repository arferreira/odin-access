import { OdinAccessPage } from './app.po';

describe('odin-access App', () => {
  let page: OdinAccessPage;

  beforeEach(() => {
    page = new OdinAccessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
