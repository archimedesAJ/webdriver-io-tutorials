describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async() => {
        //access activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        await driver.pause(30000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it ('Working with Alert Dialog', async() => {
        //access activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        //click on first dialog
        await $('~OK Cancel dialog with a message').click();

        //Get alert text
        console.log('ALERT TEXT --->', await driver.getAlertText());

        //Accept Alert
        // await driver.acceptAlert();

        //Dismiss Alert
        // await driver.dismissAlert();

        //click on the OK button
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        //Assertion - alert box is no longer visible
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();
    })


    it('Vertical scrolling', async () => {
        await $('~App').click();

        await $('~Activity').click();

        //scroll to the end (not stable, if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')


        //scroll text into view
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

    })

    it('Horizontal scrolling', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");


        //horizontal scrolling (scroll forward)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //horizontal scrolling (scroll backward)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');


        //scroll text into view
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

    })

    it.only('Exercise', async() => {
        await $('~Views').click();

        await $('~Date Widgets').click();

        await $('~1. Dialog').click();

        const current_date = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

        console.log('The current date is', current_date);

        await $('~change the date').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await $('//*[@text="10"]').click();

        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        const latest_date = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        
        console.log('The latest date is', latest_date);

        await expect(current_date).not.toEqual(latest_date);

    })
})