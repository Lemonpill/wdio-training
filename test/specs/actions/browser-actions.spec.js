describe("performing actions on a browser", () => {
  beforeEach(async () => {
    // maximize window
    await browser.maximizeWindow();
  });

  it("creates and destroys a new tab", async () => {
    // 2nd url: https://www.automationteststore.com/

    // fetch url
    await browser.url("/");

    // verify webpage title
    await expect(browser).toHaveUrlContaining("webdriveruniversity");

    // newWindow - create a new tab with specified url
    await browser.newWindow("https://www.automationteststore.com/");

    // verify webpage title
    await expect(browser).toHaveUrlContaining("automationteststore");

    // explicitly wait for 3s
    await browser.pause(3000);

    // switchWindow - switch back via url matching
    await browser.switchWindow("webdriveruniversity");

    // explicitly wait for 3s
    await browser.pause(3000);

    // closeWindow - closes current browser tab
    await browser.closeWindow();

    // pause for debugging
    // await browser.debug();
  });
});
