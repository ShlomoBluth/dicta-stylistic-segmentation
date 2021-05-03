/// <reference types="cypress"/>

//run basic tests on stylistic segmentation

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
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

