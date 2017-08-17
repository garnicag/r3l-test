import { R3lTestPage } from './app.po';

describe('r3l-test App', () => {
  let page: R3lTestPage;

  beforeEach(() => {
    page = new R3lTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
