import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo = () => browser.get(browser.baseUrl);
  getTitleText = () => element(by.css('app-root .navbar-brand')).getText();
  getCategoryText = () => element(by.css('app-root legend')).getText();
  searchField = (searchQuery: string) => element(by.css('.form-control')).sendKeys(searchQuery);
  searchBtn = () => element(by.css('#search-btn')).click();
  gifsList = () => element.all(by.css('.gifs-row'))
}
