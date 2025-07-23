describe('Web Browser Accesss', () => {
    before(async() => {
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    });

    it('Access external link and verify content in the browser', async()=> {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Like us on Facebook"]').click();

        //get the current context
        //console.log(await driver.getContext());

        //get all the contexts
        //pause before checking
        await driver.pause(2000);
        await driver.getContexts();

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome');

        //assertion
        const fb_url = driver.getUrl();
        await expect(fb_url).toContain('https://www.facebook.com/ColorNote')

    });
})