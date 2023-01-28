describe("examples of wait comands in wdio", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("/Ajax-Loader/index.html");
  });

  it("pause", async () => {
    // locate element
    const cta = await $("//span[@id='button1']/p[.='CLICK ME!']");

    // explicitly wait 8s
    // await browser.pause(8000);

    // click button
    await cta.click();

    // explicitly wait 1.5s
    // await browser.pause(1500);
  });

  it("waitForClickable", async () => {
    // locate element
    const cta = await $("#button1");

    // wait until clickable
    await cta.waitForClickable();

    // click button
    await cta.click();

    // explicitly wait 1.5s
    // await browser.pause(1500);
  });

  it("waitForDisplayed", async () => {
    // locate element
    const cta = await $("#button1");

    // wait until displayed
    await cta.waitForDisplayed();

    // click button
    await cta.click();

    // explicitly wait 1.5s
    // await browser.pause(1500);
  });

  it("waitForExist", async () => {
    // locate element
    const cta = await $("#button1");

    // wait until displayed
    await cta.waitForExist();

    // explicitly wait 1.5s
    // await browser.pause(1500);
  });

  it("waitUntil", async () => {
    // open url
    await browser.url("/Accordion/index.html");

    // locate element
    const loadingStatus = await $("#text-appear-box");

    // wait until specified text is shown
    await loadingStatus.waitUntil(
      async function () {
        return (await this.getText()) === "LOADING COMPLETE.";
      },
      { timeout: 20000, timeoutMsg: "timed out" }
    );
  });
});
