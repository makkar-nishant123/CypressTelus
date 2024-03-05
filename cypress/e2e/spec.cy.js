require('@cypress/xpath');

describe('template spec', () => {
  it('Validate Phrase Search Results.', () => {
    const searchphrase = "Internet"
    cy.visit('https://telus.com')
    cy.get("#close-cookies-notice-banner").click()
    cy.xpath(".//*[@aria-label='Navigation Menu']").click()
    cy.xpath("(.//*[@placeholder='Search TELUS.com'])[2]").type(searchphrase) //Search phrase.
    cy.xpath("(.//*[@data-test='searchResultItem']/a)[8]").contains(searchphrase)
    
    cy.xpath("(.//*[@data-test='searchResultItem']/a)[8]").then($value => {
      const searchphraseresult = $value.text()
      cy.wrap(searchphraseresult).as('wrapValue')
      cy.xpath("(.//*[@data-test='searchResultItem']/a)[8]").click()
      cy.xpath(".//*[contains(text(),'Search results for')]").contains(searchphraseresult)
     
  })
  let x =  Math.floor(Math.random() * 10)
  cy.xpath("(.//*[contains(@class, \"styles__ListItem-sc\")]/a)[" + x + "]").click()

  })
})