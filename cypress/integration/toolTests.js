/// <reference types="cypress"/>

//run basic tests on stylistic segmentation

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

    describe('toolTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
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

