import puppeteer from 'puppeteer';

describe('e2e sample test', () => {
  test('login is successfull', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1200,
        height: 1000
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('[data-test-id="loginComponent"]');
    await page.type('[data-test-id="nicknameInput"]', 'test');
    await page.click('[data-test-id="submit"]');

    browser.close();
  }, 16000);
});
