import {$, $$, driver, expect} from '@wdio/globals';

describe('IOS Native Features', () =>{
    it('Working with alert box', async() => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        //click ok
        // await $('~OK').click();

        //Get the text of the alert 
        console.log(await driver.getAlertText());

        //accept/dismiss alert
        // await driver.dismissAlert();
        await driver.acceptAlert();

        //assertion
        await expect($('~OK')).not.toExist();
    });

    it.skip ('Working with scrollable element', async() => {

        //easiest
        await driver.execute('mobile: scroll', {direction: "down"});  //direction down
        await driver.execute('mobile: scroll', {direction: "up"}); //direction up

        //complex scenario
        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');

        await $('~Picker View').click()
        await driver.execute('mobile: scroll', {element: redPicker.elementId ,direction: "down"});
        await driver.execute('mobile: scroll', {element: bluePicker.elementId ,direction: "up"});

       
    });


    it.skip('Working with picker view', async() => {

        //easiest
        //await driver.execute('mobile: scroll', {direction: "down"});  //direction down
        //await driver.execute('mobile: scroll', {direction: "up"}); //direction up

        //complex scenario - most preferred in such scenario
        const redPicker = $('~Red color component value');
        const bluePicker = $('~Blue color component value');
        const greenPicker = $('~Green color component value');

        await $('~Picker View').click()
        await redPicker.addValue('125');
        await bluePicker.addValue('125');
        await greenPicker.addValue('0');

    });

    
})