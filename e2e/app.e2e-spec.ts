import { AppPage } from './app.po';

describe('horton-works App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display HortonWorks', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HortonWorks');
  });
});
