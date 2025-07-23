describe('Add Note', () => {

    before(async() => {
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toBeDisplayed();
        }

    );
    // it('Skip Tutorials', async() =>{
    //     await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

    //     await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toBeDisplayed();
    // })

    it('add a note, save changes & verify note', async() =>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        
        //add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List");

        //add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Naruto\nOnePiece\nAOT");

        //click back --save the changes
        await driver.back();
        await driver.back();

        //assertion
        //await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        //await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");

    })


     it.skip('delete a note and check the note in trash can', async() =>{
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        
        //Click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on more icon
        await $('~More').click();

        //click on delete 
        await $('//*[@text="Delete"]').click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click on trash can item
        await $('//*[@text="Trash Can"]').click();

        //assertion
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        await expect(trashCanItem).toEqual(note)
    })
})