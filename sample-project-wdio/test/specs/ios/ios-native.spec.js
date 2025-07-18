describe('IOS Find Element', () => {
    it('Find element by accessibility id', async() =>{
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    });

    it('Find element by tagname', async() =>{
        //single element [class name or tag name are usually unique]
        //from appium inspector, it is type attribute
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const ele of textEls ){
            console.log(await ele.getText());
        }
    });

    it('Find element by xpath', async() =>{

        //xpath - (//tagname[@attribute=value])
        
        //await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        //await $('//XCUIElementTypeStaticText[@label="Simple"]').click();


        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    });

    it('Find element by class chain', async() =>{
        // const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]'
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    });

    it('Find element by predicate string', async() =>{
        // const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]'
        const alertText = 'label == "Alert Views"'
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    });

    it.only ('Exercise: Enter text in the search field', async() =>{
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("I love this course!");
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");
        
        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");
    });
})