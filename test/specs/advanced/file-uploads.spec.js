describe("uploading a file", () => {
  it("uploads an example file", async () => {
    await browser.maximizeWindow();
    await browser.url("/File-Upload/index.html");

    // locate upload element
    const upload = await $("#myFile");

    // add file location to element value
    await upload.addValue(`${process.cwd()}\\data\\example.txt`);

    // locate submit button
    const submit = await $("#submit-buttonA");

    // click submit button
    await submit.click();

    // pause for debug
    // await browser.debug();
  });
});
