import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Giphy-test');
  });

  it('should display gif category name', () => {
    page.navigateTo();
    expect(page.getCategoryText()).toEqual('Trending');
  });

  it('should change gif category name', () => {
    page.navigateTo();
    expect(page.getCategoryText()).toEqual('Trending');
    page.searchField('bat');
    page.searchBtn();
    expect(page.getCategoryText()).toEqual('bat');
  });

  it('should correct display trending gifs', () => {
    page.navigateTo();
    expect(page.gifsList().count()).toBe(3);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
