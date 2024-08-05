import 'cypress-wait-until';
import 'cypress-file-upload';

// Cypress.Commands.add('setLanguageMode',(language)=>{
//   cy.get('body').then(elem => {
//     let languageMode
//     if(language=='Hebrew'){
//       languageMode='he'
//     }else if(language=='English'){
//       languageMode=''
//     }
//     let classAttr
//     if(elem.attr("class").substring(elem.attr("class").length-2,
//     elem.attr("class").length)=='he'){
//       classAttr='he'
//     }else{
//       classAttr=''  
//     }
//     if(classAttr!=languageMode)
//     {
//       cy.get('a').contains(/^English$|^עברית$/g).click();
//     }
//     if(languageMode=='he'){
//       cy.get('a').contains(/^English$/).should('exist')
//     } else{
//       cy.get('a').contains(/^עברית$/).should('exist')
//     }
//   }) 
// })  

Cypress.Commands.add('testMessage',({message='',delaySeconds=0})=>{
  if(message.length>0){
    if(delaySeconds>0){
      cy.contains(message,{timeout:delaySeconds*1000}).should('exist')
    }else{
      cy.contains(message,{timeout:30000}).should('exist')
    }
  }
})

Cypress.Commands.add('stylisticSegmentationCorpusRun',()=>{
  cy.get('#browse-text > .btn').click({force:true})
  cy.get(':nth-child(2) > .btn > .fas').click({force:true})
  cy.get(':nth-child(2) > .btn > .fas').click({force:true})
  cy.wait(1000)
  cy.get(':nth-child(2) > .custom-control > .custom-control-label ').click({force:true})
  cy.get('#__BVID__16___BV_modal_footer_ > .btn-primary').click({force:true})
})

Cypress.Commands.add('stylisticSegmentationImportTextRun',()=>{
  cy.get('#__BVID__12__BV_toggle_ ').click()
  cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  cy.get('#browse-file > button > input').attachFile('Genesis.txt')
  .trigger('change')
  cy.contains('Genesis.txt').should('exist')
})

Cypress.Commands.add('testResults',()=>{
  cy.get('.v-clip').should('exist')
  cy.get('.v-clip',{timeout:5*60*1000}).should('not.exist')
  cy.get('[class*="representative"] >:nth-child(2) > :nth-child(4) > small').should('contain','נֹחַ')
  cy.get('[class*="representative"] >:nth-child(3) > :nth-child(3) > small').should('contain','לִּי/לִי/לִֿי')
})


Cypress.Commands.add('stylisticSegmentationRequest',({url,language,status=200,message='',delaySeconds=0})=>{
  // cy.intercept('POST', '**', {
  //   statusCode: 200
  // },)
  cy.intercept('POST', '**/'+url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.setLanguageMode({language:language})
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.stylisticSegmentationImportTextRun().then(()=>{
    cy.testMessage({
      message:message,
      delaySeconds:delaySeconds
    })
  
  })
})
