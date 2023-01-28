describe("common alert actions", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("/Popup-Alerts/index.html");
  });

  it("accepts and dismisses alerts", async () => {
    // locate elements
    const buttonA = await $("#button1");
    const buttonB = await $("#button4");
    const confirmBox = await $("#confirm-alert-text");

    // trigger an alert
    await buttonA.click();

    // alertTextA - store alert text
    const alertTextA = await browser.getAlertText();

    // verify text is correct
    expect(alertTextA).toContain("I am an alert box!");

    // acceptAlert - accept the alert
    await browser.acceptAlert();

    // trigger a different alert
    await buttonB.click();

    // getAlertText - store alert text
    const alertTextB = await browser.getAlertText();

    // verify text is correct
    expect(alertTextB).toContain("Press a button!");

    // accept the alert
    await browser.acceptAlert();

    // store confirmation text
    const confirmText = await confirmBox.getText();

    // verify text is correct
    expect(confirmText).toEqual("You pressed OK!");

    // trigger the alert again
    await buttonB.click();

    // dismissAlert - dismiss the alert
    await browser.dismissAlert();

    // store confirmation text
    const confirmTextB = await confirmBox.getText();

    // verify text is correct
    expect(confirmTextB).toEqual("You pressed Cancel!");

    // await browser.debug();
  });
});
