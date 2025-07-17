class AddNotePage {

    //Getter function
    get skipBtn() {
        return  $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    //Getter function
    get addNoteText() {
        return $('//*[@text="Add note"]');
    }

    //Getter function
    get textOption() {
        return $('//*[@text="Text"]');
    }

    //Getter function
    get textEditing(){
        return $('//*[@text="Editing"]');
    }

    //Getter function
    get noteHeading(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    //Getter function
    get noteBody(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    //Getter function
    get editNoteBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    //Getter function
    get viewNoteText(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    //Getter function
    get noteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    //Getter function
    get moreIcon(){
        return $('~More');
    }

    //Getter function
    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    //Getter function
    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    //Getter function
    get trashIcon(){
        return $('//*[@text="Trash Can"]');
    }

    //Helper function
    async saveNote() {
        await driver.back();
        await driver.back();
    }


}

export default new AddNotePage(); //export the class so other class access
//export default new AddNotePage() --ES6 new way