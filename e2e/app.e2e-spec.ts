import { FCJMPEMPage } from './app.po';

describe('fcjmp-em App', function() {
  let page: FCJMPEMPage;

  beforeEach(() => {
    page = new FCJMPEMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
