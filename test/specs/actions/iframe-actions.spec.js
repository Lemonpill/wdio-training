describe("handling iframe interactions", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("/IFrame/index.html");
  });

  it("opens a page inside an iframe", async () => {
    const frame = await $("#frame");

    // switchToFrame - switching to an iframe
    await browser.switchToFrame(frame);

    // locate a button inside the iframe
    const frameOurProducts = await $('//a[text()="Contact Us"]');

    // click the button
    await frameOurProducts.click();

    // switchToParentFrame - switches to the parent frame
    await browser.switchToParentFrame();

    // await browser.debug();
  });
});
