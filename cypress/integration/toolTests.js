/// <reference types="cypress"/>

//run basic tests on stylistic segmentation

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
//sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })
            
            it('stylistic segmentation run in hebrew mode',()=>{
                cy.setLanguageMode('Hebrew')
                cy.stylisticSegmentationRun()
                cy.testResults()
            })
        
            it('stylistic segmentation run in english mode',()=>{
                cy.setLanguageMode('English')
                cy.stylisticSegmentationRun()
                cy.testResults()
            })
        
        })
    })

})

