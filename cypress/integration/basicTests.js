/// <reference types="cypress"/>

//run basic tests on stylistic segmentation

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://segment.dicta.org.il/')
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