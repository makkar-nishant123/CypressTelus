require('@cypress/xpath');

describe('template spec', () => {
  it('Validate Phrase Search Results.', () => {
    const searchphrase = "Internet" //Defining search phrase here.
    
    cy.visit('https://telus.com') //Visit telus.com
    cy.wait(2000)
    
    cy.get("#close-cookies-notice-banner").click() //Accept Cookies
    
    cy.xpath(".//*[@aria-label='Navigation Menu']").click() // Select Navigation Menu.
    
    cy.xpath("(.//*[@placeholder='Search TELUS.com'])[2]").type(searchphrase) //Search your phrase.
    
    // Make sure your third element contains your search phrase.
    cy.xpath("(.//*[@data-test='searchResultItem']/a)[8]").contains(searchphrase) 
    
    //Get search result text and click on it.
    cy.xpath("(.//*[@data-test='searchResultItem']/a)[8]").then($value => {
      const searchphraseresult = $value.text()
      cy.wrap(searchphraseresult).as('wrapValue')

      //Search result text must match your selected value.
      cy.xpath("(.//*[@data-test='searchResultItem']/a)[8]").click()
      cy.xpath(".//*[contains(text(),'Search results for')]").contains(searchphraseresult)
     
  })

  //Make sure you have more than 6 results.
  cy.xpath(".//*[contains(@class, \"styles__ListItem-sc\")]/a").its('length').should('be.gte', 6)

  //Generate a random number and click random search result.
  let x =  Math.floor(Math.random() * 10)
  cy.xpath("(.//*[contains(@class, \"styles__ListItem-sc\")]/a)[" + x + "]").click()

  })
})
