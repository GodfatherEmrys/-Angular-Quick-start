import { AngularQuickStartPage } from './app.po';

describe('angular-quick-start App', () => {
  let page: AngularQuickStartPage;

  beforeEach(() => {
    page = new AngularQuickStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
