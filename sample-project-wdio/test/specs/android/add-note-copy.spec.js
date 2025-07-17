import addNoteScreen from "../../pageobjects/android/add-note.screen";

describe('Add Note', () => {
    it('Skip Tutorials', async() =>{
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    })

    it('add a note, save changes & verify note', async() =>{
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();

        await expect(addNoteScreen.textEditing).toBeDisplayed();
        
        //add note title
        await addNoteScreen.noteHeading.setValue("Fav Anime List");

        //add note body
        await addNoteScreen.noteBody.setValue("Naruto\nOnePiece\nAOT");

        //click back --save the changes
        await addNoteScreen.saveNote();

        //assertion
        await expect(addNoteScreen.editNoteBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNoteText).toHaveText("Naruto\nOnePiece\nAOT");

    })


     it.skip('delete a note and check the note in trash can', async() =>{
        const note = await addNoteScreen.noteTitle.getText();
        
        //Click on the note
        await addNoteScreen.noteTitle.click();

        //click on more icon
        await addNoteScreen.moreIcon.click();

        //click on delete 
        await addNoteScreen.deleteBtn.click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await addNoteScreen.navIcon.click();

        //click on trash can item
        await addNoteScreen.trashIcon.click();

        //assertion
        const trashCanItem = await noteTitle.getText();
        await expect(trashCanItem).toEqual(note)
    })
})