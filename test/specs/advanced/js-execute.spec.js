describe("inject javascript into a webpage", () => {
  it("executes a specified javascript block on a webpage", async () => {
    await browser.maximizeWindow();
    await browser.url("/Hidden-Elements/index.html");

    // execute - executing js code
    await browser.execute(() => {
      // make button visible
      return document.getElementById("not-displayed").setAttribute("id", "");
    });

    await browser.execute(() => {
      // change background color
      return (document.body.style.backgroundColor = "white");
    });

    // pause for debug
    // await browser.debug();
  });
});
