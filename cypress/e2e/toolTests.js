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

            it('stylistic segmentation Corpus run in hebrew mode',()=>{
                cy.setLanguageMode({language:'Hebrew'})
                cy.stylisticSegmentationCorpusRun()
                cy.testResults()
            })

            it('stylistic segmentation Corpus run in english mode',()=>{
                cy.setLanguageMode({language:'English'})
                cy.stylisticSegmentationCorpusRun()
                cy.testResults()
            })
            
            // it('stylistic segmentation import textrun in hebrew mode',()=>{
            //     cy.setLanguageMode({language:'Hebrew'})
            //     cy.stylisticSegmentationImportTextRun()
            //     cy.testResults()
            // })
        
            // it('stylistic segmentation import text run in english mode',()=>{
            //     cy.setLanguageMode({language:'English'})
            //     cy.stylisticSegmentationImportTextRun()
            //     cy.testResults()
            // })
        
        })
    })

})

