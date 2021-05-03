import 'cypress-wait-until';
import 'cypress-file-upload';

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

Cypress.Commands.add('testMessage',({message='',delaySeconds=0})=>{
  if(message.length>0){
    if(delaySeconds>0){
      cy.contains(message,{timeout:delaySeconds*1000}).should('exist')
    }else{
      cy.contains(message).should('exist')
    }
  }
})

Cypress.Commands.add('stylisticSegmentationRun',()=>{
  cy.get('#__BVID__12__BV_toggle_ ').click()
  cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  cy.get('[type=file]').attachFile('חולין.txt').trigger('change', {force: true});
  cy.contains('חולין.txt').should('exist')
})

Cypress.Commands.add('testResults',()=>{
  cy.get('.v-clip').should('exist')
  cy.get('.v-clip',{timeout:2*60*1000}).should('not.exist')
  cy.get('[class*="representative"] >:nth-child(2) > :nth-child(4) > small').should('contain','כתיב')
  cy.get('[class*="representative"] >:nth-child(3) > :nth-child(3) > small').should('contain','דרב')
})


Cypress.Commands.add('stylisticSegmentationRequest',({url,language,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', '**', {
    statusCode: 200
  },)
  cy.intercept('POST', '**/'+url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.setLanguageMode(language)
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.stylisticSegmentationRun().then(()=>{
    cy.testMessage({
      message:message,
      delaySeconds:delaySeconds
    })
  
  })
})