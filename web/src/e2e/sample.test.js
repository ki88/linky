import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 250
  });
  page = await browser.newPage();
});

describe('e2e sample test', () => {
  test('login is successfull', async () => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('[data-test-id="loginComponent"]');
    await page.type('[data-test-id="nicknameInput"]', 'test');
    await page.click('[data-test-id="submit"]');
    await page.waitForSelector('[data-test-id="dashboardComponent"]');
  }, 16000);
});

afterAll(() => {
  browser.close();
});
