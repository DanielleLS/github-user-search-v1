class resultPage { 
    elements = { 
       successTxt: ()  => cy.get('._title_7hzna_18'),
       name_result: () => cy.get(':nth-child(1) > b' ),
       respo_result: () => cy.get(':nth-child(2) > b'),
       bt_return: () => cy.get('button[type="button"]'),
       list_result: () => cy.get('._repoList_7hzna_44'),
       error_msg: () => cy.get('._errorMessage_7hzna_86')
    }

    returnPage() { 
        this.elements.bt_return().click();
    }
}

export default resultPage;