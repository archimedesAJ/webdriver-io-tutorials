import addNoteScreen from "../../pageobjects/android/add-note.screen";

describe('Add Note', ()=>{
    before(async () => {
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    });

    beforeEach(() => {
        console.log('BEFORE EACH HOOK!!') //useful when you do something before each of your tests
    });

    after(() => {
        console.log('AFTER HOOK'); //useful for tear down / clean up or delete after before action. mostly executed once
    
    });

    afterEach(() => {
        console.log('AFTER EACH HOOK') //useful when you want to do something after each test
    });

    // it('add a note, save changes & verify note', async() =>{
    //         await addNoteScreen.addNoteText.click();
    //         await addNoteScreen.textOption.click();
    
    //         await expect(addNoteScreen.textEditing).toBeDisplayed();
            
    //         //add note title
    //         await addNoteScreen.noteHeading.setValue("Fav Anime List");
    
    //         //add note body
    //         await addNoteScreen.noteBody.setValue("Naruto\nOnePiece\nAOT");
    
    //         //click back --save the changes
    //         await addNoteScreen.saveNote();
    
    //         //assertion
    //         await expect(addNoteScreen.editNoteBtn).toBeDisplayed();
    //         await expect(addNoteScreen.viewNoteText).toHaveText("Naruto\nOnePiece\nAOT");
    
    // });

    it('test 1', () =>{

    });

    it('test 2', () =>{

    });

    it('test 3', () =>{

    });




    



})