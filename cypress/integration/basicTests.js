/// <reference types="cypress"/>

//run basic tests on stylistic segmentation

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://segment.dicta.org.il/')
    })

    
    it('stylistic segmentation run in hebrew mode',()=>{
        cy.setLanguageMode('Hebrew')
        cy.stylisticSegmentationRun()
        cy.get('.v-clip').should('exist')
        cy.get('.v-clip',{timeout:2*60*1000}).should('not.exist')
        cy.get('[class*="representative"] >:nth-child(2) > :nth-child(4) > small').should('contain','כתיב')
        cy.get('[class*="representative"] >:nth-child(3) > :nth-child(3) > small').should('contain','דרב')
    })

    it('stylistic segmentation run in english mode',()=>{
        cy.setLanguageMode('English')
        cy.stylisticSegmentationRun()
        cy.get('.v-clip').should('exist')
        cy.get('.v-clip',{timeout:2*60*1000}).should('not.exist')
        cy.get('[class*="representative"] >:nth-child(2) > :nth-child(4) > small').should('contain','כתיב')
        cy.get('[class*="representative"] >:nth-child(3) > :nth-child(3) > small').should('contain','דרב')
    })
})