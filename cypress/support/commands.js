import 'cypress-wait-until';

Cypress.Commands.add('setLanguageMode',(language)=>{
  cy.get('body').then(elem => {
    let languageMode
    if(language=='Hebrew'){
      languageMode='he'
    }else if(language=='English'){
      languageMode=''
    }
    let classAttr
    if(elem.attr("class").substring(elem.attr("class").length-2,
    elem.attr("class").length)=='he'){
      classAttr='he'
    }else{
      classAttr=''  
    }
    if(classAttr!=languageMode)
    {
      cy.get('a').contains(/^English$|^עברית$/g).click();
    }
    if(languageMode=='he'){
      cy.get('a').contains(/^English$/).should('exist')
    } else{
      cy.get('a').contains(/^עברית$/).should('exist')
    }
  }) 
})  


Cypress.Commands.add('stylisticSegmentationRequest',({url,language,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', '**/'+url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },).as('url')
  cy.setLanguageMode(language)
  cy.get('div[id="browse-text"]').children('button').click()
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('div[class="sidebar-item text-muted"]').siblings().first().within(()=>{
    cy.get('input').click({force: true})
  })
  if(url=='GetTextLargeAndSmall'){
    if(delaySeconds>0){
      cy.get('div[class*="spinner"]',{timeout:delaySeconds*1000}).should('not.exist')
    }
    if(message.length>0){
      cy.contains(message).should('exist')
    }
  }else{
    cy.get('div[class*="spinner"]',{timeout:10*60*1000}).should('not.exist')
    cy.get('button').contains(/החל|Apply/g).click({force: true})
    if(delaySeconds>0){
      cy.get('div[class*="spinner"]',{timeout:delaySeconds*1000}).should('not.exist')
    }else{
      cy.get('div[class*="spinner"]').should('not.exist')
    }
    if(message.length>0){
       cy.contains(message).should('exist')
    }
  }

})