import AllureReporter from "@wdio/allure-reporter";

describe("submitting main form from /contact-us page", () => {
  // https://webdriveruniversity.com/Contact-Us/contactus.html

  beforeEach(async () => {
    // maximize window
    browser.maximizeWindow();

    // open url
    await browser.url("/Contact-Us/contactus.html");
  });

  it("submits the form with all required data", async () => {
    // addFeature - adding a feature
    AllureReporter.addFeature("valid submission of contact-us form");

    // addDescription - adding a description
    AllureReporter.addDescription(
      "validate the page functionality by submitting a valid form"
    );

    // addSeverity - assign severity to a test case
    AllureReporter.addSeverity("critical");

    // fill in first name
    const firstName = await $('//*[@name="first_name"]');
    await firstName.setValue("000000000000000000000000000000000000");

    // fill in last name
    const lastName = await $('//*[@name="last_name"]');
    await lastName.setValue("111111111111111111111111111111111111");

    // fill in email
    const email = await $('//*[@name="email"]');
    await email.setValue("test001@mailinator.com");

    // fill in comments
    const comments = await $('//*[@name="message"]');
    await comments.setValue("333333333333333333333333333333333333");

    // submit form
    const submit = await $('//input[@value="SUBMIT"]');

    // pause browser for debugging (timeout in conf)
    // await browser.debug()

    await submit.click();

    // verify submitted
    const afterText = $("#contact_reply > h1");
    await expect(afterText).toHaveText("Thank You for your Message!");

    // debug using json
    // console.log(`***** found element: ${JSON.stringify(await afterText)}`)
  });

  it("submits the form with all required data (jest)", async () => {
    // addFeature - adding a feature
    AllureReporter.addFeature("valid submission of contact-us form (jest)");

    // addDescription - adding a description
    AllureReporter.addDescription(
      "validate the page functionality by submitting a valid form (jest)"
    );

    // addSeverity - assign severity to a test case
    AllureReporter.addSeverity("critical");

    // fill in first name
    const firstName = await $('//*[@name="first_name"]');
    await firstName.setValue("000000000000000000000000000000000000");

    // fill in last name
    const lastName = await $('//*[@name="last_name"]');
    await lastName.setValue("111111111111111111111111111111111111");

    // fill in email
    const email = await $('//*[@name="email"]');
    await email.setValue("test001@mailinator.com");

    // fill in comments
    const comments = await $('//*[@name="message"]');
    await comments.setValue("333333333333333333333333333333333333");

    // submit form
    const submit = await $('//input[@value="SUBMIT"]');
    await submit.click();

    // verify submitted
    const afterText = await $("#contact_reply > h1").getText();

    // jest assertion
    expect(afterText).toEqual("Thank You for your Message!00000");
  });

  it("attempts to submit without an email address", async () => {
    // addFeature - adding a feature
    AllureReporter.addFeature("invalid submission of contact-us form");

    // addDescription - adding a description
    AllureReporter.addDescription(
      "validate the page doesn't allow submission with missing email"
    );

    // fill in first name
    const firstName = await $('//*[@name="first_name"]');
    await firstName.setValue("000000000000000000000000000000000000");

    // fill in last name
    const lastName = await $('//*[@name="last_name"]');
    await lastName.setValue("111111111111111111111111111111111111");

    // fill in comments
    const comments = await $('//*[@name="message"]');
    await comments.setValue("333333333333333333333333333333333333");

    // submit form
    const submit = await $('//input[@value="SUBMIT"]');
    await submit.click();

    // verify error page
    const afterText = $("body");
    await expect(afterText).toHaveTextContaining(
      "Error: all fields are required"
    );
  });
});
