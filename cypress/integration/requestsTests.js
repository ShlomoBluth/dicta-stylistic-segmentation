/// <reference types="cypress"/>

//run tests on requests from stylistic segmentation run

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

  describe('requestsTests',()=>{

    
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
  
  
    // it('Error message for Login response with a delay of 5 minutes when clicking the run button'+
    // ' of segment page in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'Login',
    //     language:'Hebrew',
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
    //     delaySeconds:60*5
    //   })
    // })
  
    // it('Error message for Login response with a delay of 5 minutes when clicking the run button'+
    // ' of segment page in english mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'Login',
    //     language:'English',
    //     message:'Oops. Something went wrong Please try again later',
    //     delaySeconds:60*5
    //   })
    // })
  
  
    
    // it('Error message for Login response with status code 500 when clicking the run button of segment page'+
    // 'in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'Login',
    //     language:'Hebrew',
    //     status:500,
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    //   })
    // })
  
    // it('Error message for Login response with status code 500 when clicking the run button of segment page'+
    // 'in english mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'Login',
    //     language:'English',
    //     status:500,
    //     message:'Oops. Something went wrong Please try again later'
    //   })
    // })
  
  
  
    // it('Error message for UploadFile response with a delay of 5 minutes when clicking the run button'+
    // ' of segment page in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'UploadFile',
    //     language:'Hebrew',
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
    //     delaySeconds:60*5
    //   })
    // })
  
    // it('Error message for UploadFile response with a delay of 5 minutes when clicking the run button'+
    // ' of segment page in english mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'UploadFile',
    //     language:'English',
    //     message:'Oops. Something went wrong Please try again later',
    //     delaySeconds:60*5
    //   })
    // })
  
  
    
    // it('Error message for UploadFile response with status code 500 when clicking the run button of segment page'+
    // 'in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'UploadFile',
    //     language:'Hebrew',
    //     status:500,
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    //   })
    // })
  
    // it('Error message for UploadFile response with status code 500 when clicking the run button of segment page'+
    // 'in english mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'UploadFile',
    //     language:'English',
    //     status:500,
    //     message:'Oops. Something went wrong Please try again later'
    //   })
    // })
  
  
    // it('Error message for GetTextLargeAndSmall response with a delay of 5 minutes when clicking the run button'+
    // ' of segment page in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'GetTextLargeAndSmall',
    //     language:'Hebrew',
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
    //     delaySeconds:60*5
    //   })
    // })
  
    it('Error message for GetTextLargeAndSmall response with a delay of 5 minutes when clicking the run button'+
    ' of segment page in english mode',()=>{
      cy.stylisticSegmentationRequest({
        url:'GetTextLargeAndSmall',
        language:'English',
        message:'Oops. Something went wrong Please try again later',
        delaySeconds:60*5
      })
    })
  
  
    
    // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of segment page'+
    // 'in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'GetTextLargeAndSmall',
    //     language:'Hebrew',
    //     status:500,
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    //   })
    // })
  
    it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of segment page'+
    'in english mode',()=>{
      cy.stylisticSegmentationRequest({
        url:'GetTextLargeAndSmall',
        language:'English',
        status:500,
        message:'Oops. Something went wrong Please try again later'
      })
    })
  
    // it('Error message for segment response with a delay of 4 minutes when clicking the run button'+
    // ' of segment page in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'segment',
    //     language:'Hebrew',
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
    //     delaySeconds:60*6
    //   })
    // })
  
    it('Error message for segment response with a delay of 4 minutes when clicking the run button'+
    ' of segment page in english mode',()=>{
      cy.stylisticSegmentationRequest({
        url:'segment',
        language:'English',
        message:'Oops. Something went wrong Please try again later',
        delaySeconds:60*4
      })
    })
  
    
    // it('Error message for segment response with status code 500 when clicking the run button of segment page'+
    // 'in hebrew mode',()=>{
    //   cy.stylisticSegmentationRequest({
    //     url:'segment',
    //     language:'Hebrew',
    //     status:500,
    //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    //   })
    // })
  
    it('Error message for segment response with status code 500 when clicking the run button of segment page'+
    'in english mode',()=>{
      cy.stylisticSegmentationRequest({
        url:'segment',
        language:'English',
        status:500,
        message:'Oops. Something went wrong Please try again later'
      })
    })
      
  })

})


