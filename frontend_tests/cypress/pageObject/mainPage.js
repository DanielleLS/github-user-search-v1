class mainPage { 
    elements = { 
        icon_github: () => cy.get('img[alt="github-icon"]'),
        icon_title: () => cy.get('._title_1kib8_23'),
        search_title: () => cy.get('._title_5o35q_14'),
        input_user: () => cy.get('input[name="username"]'),
        bt_search: () => cy.get('button[type="button"]'),
        baseboard_title: () => cy.get('._title_1ymcw_14')
    }

    inputUser(username) { 
        this.elements.input_user().clear();
        this.elements.input_user().type(username);
    }

    clickSearch() { 
        this.elements.bt_search().click();
    }
}

export default mainPage;