describe('Android Elements Tests', ()=> {
    it ('Find element by accessbility id', async () => {
        //find element by accessibility id
        const appOption = $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it ('Find element by class name', async () => {
        //find element by class name
        const className = $('android.widget.TextView');

        //click on element
        //await appOption.click();

        //assertion
        await expect(className).toHaveText("API Demos");
    })

    it('Find element by xpath', async () => {
        //find element by Xpath name
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

         //find element by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();
    })

    it('Find elements by UIAutomator', async () => {
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    })

    it ('Finding multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content', 'Graphics',
            'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'
        ]
        const actualList = []
        //find multiple elements
        const textList = await $$('android.widget.TextView');

        //loop through
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        //assert the list
        await expect(actualList).toEqual(expectedList);
    })

    it.only('Working with text input field', async() => {
        //click on the views
        await $('~Views').click();

        //click on the Auto complete
        await $('~Auto Complete').click();

        //click on the 1. Screen Top
        await $('~1. Screen Top').click();

        //enter the country name
        const country_input = $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
        await country_input.setValue('Canada');

        await expect(country_input).toHaveText('Canada')

        //click on the Give me Focus
        // await $('~Give me Focus').click();

        await driver.pause(5000);
    })
});