import mainPage from "../pageObject/mainPage"
import resultPage from '../pageObject/resultPage'

describe('Tests GitHub User Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Verify GitHub Search Interface', function() {
    const search_page = new mainPage()

    search_page.elements.icon_github().should('be.visible')
    search_page.elements.icon_title().should('contain', 'github-search')
    search_page.elements.search_title().should('contain', 'Search for a user')
    search_page.elements.input_user().should('be.visible')
    search_page.elements.bt_search().should('be.visible')
    search_page.elements.baseboard_title().should('contain', 'made with 💜 by hedênica')
  })

  it('Successful User Search', function() {
    const search_page = new mainPage();
    const result = new resultPage();

    search_page.inputUser('teste')
    search_page.clickSearch()
    result.elements.successTxt().should('contain', 'Look who we found')
    result.elements.name_result().should('contain', 'Name')
    result.elements.respo_result().should('contain', 'Repositories')
    result.elements.list_result().should('contain', 'teste')
  })

  it('User Search with no repository', function() {
    const search_page = new mainPage();
    const result = new resultPage();

    search_page.inputUser('tststststststststs')
    search_page.clickSearch()
    result.elements.successTxt().should('contain', 'Look who we found')
    result.elements.name_result().should('contain', 'Name')
    result.elements.respo_result().should('contain', 'Repositories')
    result.elements.list_result().should('contain', '')
    result.returnPage()
    search_page.elements.search_title().should('contain', 'Search for a user')
  })

  it('User not found on GitHub', function() {
    const search_page = new mainPage();
    const result = new resultPage();

    search_page.inputUser('daniellelopes182')
    search_page.clickSearch()
    result.elements.error_msg().should('contain', 'Ops, something went wrong')
    result.returnPage()
    search_page.elements.search_title().should('contain', 'Search for a user')
  })

  it('Empty User Search', function() {
    const search_page = new mainPage();
    
    search_page.elements.bt_search().should('be.disabled')
  })

  it('Search User with Two Characters', function() {
    const search_page = new mainPage();

    search_page.inputUser('tes')
    search_page.elements.bt_search().should('be.disabled')
  })

  it('Search User with only numbers', function() {
    const search_page = new mainPage();
    const result = new resultPage();

    search_page.inputUser('12345')
    search_page.clickSearch()
    result.elements.successTxt().should('contain', 'Look who we found')
    result.elements.name_result().should('contain', 'Name')
    result.elements.respo_result().should('contain', 'Repositories')
    result.elements.list_result().should('contain', '12345')
  })

  it('Search User with Special Character', function() {
    const search_page = new mainPage();
    const result = new resultPage();

    search_page.inputUser('@@@@')
    search_page.clickSearch()
    result.elements.error_msg().should('contain', 'Ops, something went wrong')
    result.returnPage()
    search_page.elements.search_title().should('contain', 'Search for a user')
  })

  it('User Search with HTML Code', function() {
    const search_page = new mainPage();
    const result = new resultPage();

    search_page.inputUser('<html>')
    search_page.clickSearch()
    result.elements.error_msg().should('contain', 'Ops, something went wrong')
    result.returnPage()
    search_page.elements.search_title().should('contain', 'Search for a user')
  })
})