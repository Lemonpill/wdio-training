describe("interacting with various element types", () => {
  beforeEach(async () => {
    // maximize window
    await browser.maximizeWindow();
  });

  it("interacts with input fields", async () => {
    // fetch url
    await browser.url("/Contact-Us/contactus.html");

    // locate relevant fields
    const firstName = $('[name="first_name"]');

    // addValue - appends specified text to an existing element value
    await firstName.addValue("addValue ");
    // await browser.pause(2000);
    await firstName.addValue("firstName");
    // await browser.pause(2000);

    // setValue - replaces the value of an element with specified text
    await firstName.setValue("setValue firstName");
    // await browser.pause(2000);

    // clearValue - clear element value
    await firstName.clearValue();
    // await browser.pause(2000);

    // pause for debugging
    // await browser.debug()
  });

  it("interacts with dropdown elements", async () => {
    // fetch url
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

    // locate relevant elements
    const dropdownOne = $("#dropdowm-menu-1");
    const dropdownTwo = $("#dropdowm-menu-2");
    const dropdownThree = $("#dropdowm-menu-3");

    // selectByAttribute - select dropdown option by an attribute
    await dropdownOne.selectByAttribute("value", "python");

    // assert to have selected the value
    expect(dropdownOne).toHaveValueContaining("python");

    // selectByIndex - select dropdown option by index
    await dropdownTwo.selectByIndex(1);

    // assert to have selected the value and ignore case
    expect(dropdownTwo).toHaveValueContaining("maven", { ignoreCase: true });

    // selectByVisibleText - select by a visible text
    await dropdownThree.selectByVisibleText("CSS");

    // assert to have selected the value and ignore case
    expect(dropdownThree).toHaveValueContaining("css", { ignoreCase: true });

    // pause for debugging
    // await browser.debug()
  });

  it("issues state commands", async () => {
    // fetch url
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

    // locate lettuce radio option
    const lettuceRadio = $('[value="lettuce"');

    // isDisplayed - capture the display state of the element
    const lettuceRadioDisplayed = await lettuceRadio.isDisplayed();

    // assert element is displayed
    expect(lettuceRadioDisplayed).toEqual(true);

    // isClickable - capture the clickability of element
    const lettuceRadioClickable = await lettuceRadio.isClickable();

    // assert element is clickable
    expect(lettuceRadioClickable).toEqual(true);

    // click the option
    await lettuceRadio.click();

    // locate lettuce radio option
    const cabbageRadio = $('[value="cabbage"');

    // isDisplayed - capture the display state of the element
    const cabbageRadioDisplayed = await cabbageRadio.isDisplayed();

    // assert element is displayed
    expect(cabbageRadioDisplayed).toEqual(true);

    // isEnabled - capture the enabled state of element
    const cabbageRadioEnabled = await cabbageRadio.isEnabled();

    // assert element is enabled
    expect(cabbageRadioEnabled).toEqual(false);

    // pause for debugging
    // await browser.debug()
  });

  it("performs actions on elements", async () => {
    // fetch url
    await browser.url("/Actions/index.html");

    // locate drag/drop elements
    const draggable = await $("#draggable");
    const droppable = await $("#droppable");

    // dragAndDrop - drag an element into droppable area
    await draggable.dragAndDrop(droppable);

    // locate double click button
    const doubleClick = await $("#double-click");

    // doubleClick - double click an element
    await doubleClick.doubleClick();

    // locate 'hover over me first' element
    const hoverFirst = await $('//button[text()="Hover Over Me First!"]');

    // moveTo - move cursor above an element
    await hoverFirst.moveTo();

    // locate 'Link 1' option
    const hoverFirstOption = await $('(//a[text()="Link 1"])[1]');

    // wait for the option to be clickable
    await hoverFirstOption.waitForClickable();

    // click the option
    await hoverFirstOption.click();

    // pause for debugging
    // await browser.debug();
  });
});
