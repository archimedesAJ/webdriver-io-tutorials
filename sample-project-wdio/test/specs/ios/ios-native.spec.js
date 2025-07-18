describe('IOS Native Features', () =>{
    it('Working with alert box', async() => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        //click ok
        await $('~OK').click();

        //accept/dismiss alert
        await driver.dismissAlert();
        await driver.acceptAlert();

        //assertion
        await expect($('~OK')).not.toExist();
    });

    
})