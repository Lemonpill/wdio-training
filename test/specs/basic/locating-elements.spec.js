describe("locating elements in DOM", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();

    // open url
    await browser.url("https://selectors.webdriveruniversity.com/");
  });

  it("$ - locate single element", async () => {
    // explicitly wait
    // await browser.pause(3000);

    // click nav > portfolio
    await $("//a[@href='#portfolio']").click();

    // explicitly wait
    // await browser.pause(3000);

    await $("[data-target='#portfolioModal1']").click();

    // explicitly wait
    // await browser.pause(3000);
  });

  it("$$ - locate multiple elements", async () => {
    const tableHeaders = await $$("//table//th");

    let headers = [];
    for (const h of tableHeaders) {
      headers.push(await h.getText());
    }
  });
});
