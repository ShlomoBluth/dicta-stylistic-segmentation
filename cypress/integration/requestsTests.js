/// <reference types="cypress"/>

//run tests on requests from stylistic segmentation run

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
//sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

  sizes.forEach((sizeValue,sizeKey) => {


    describe('requestsTests '+urlKey+' '+sizeKey,()=>{

    
      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
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
      //     delaySeconds:60*1
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
      //     delaySeconds:60*1
      //   })
      // })
    
      // it('Error message for UploadFile response with a delay of 5 minutes when clicking the run button'+
      // ' of segment page in english mode',()=>{
      //   cy.stylisticSegmentationRequest({
      //     url:'UploadFile',
      //     language:'English',
      //     message:'Oops. Something went wrong Please try again later',
      //     delaySeconds:60*1
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
    
      // it('Error message for GetTextLargeAndSmall response with a delay of 5 minutes when clicking the run button'+
      // ' of segment page in english mode',()=>{
      //   cy.stylisticSegmentationRequest({
      //     url:'GetTextLargeAndSmall',
      //     language:'English',
      //     message:'Oops. Something went wrong Please try again later',
      //     delaySeconds:60*5
      //   })
      // })
    
    
      
      // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of segment page'+
      // 'in hebrew mode',()=>{
      //   cy.stylisticSegmentationRequest({
      //     url:'GetTextLargeAndSmall',
      //     language:'Hebrew',
      //     status:500,
      //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      //   })
      // })
    
      // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of segment page'+
      // 'in english mode',()=>{
      //   cy.stylisticSegmentationRequest({
      //     url:'GetTextLargeAndSmall',
      //     language:'English',
      //     status:500,
      //     message:'Oops. Something went wrong Please try again later'
      //   })
      // })
    
      // it('Error message for segment response with a delay of 1 minutes when clicking the run button'+
      // ' of segment page in hebrew mode',()=>{
      //   cy.stylisticSegmentationRequest({
      //     url:'segment',
      //     language:'Hebrew',
      //     message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
      //     delaySeconds:60*2
      //   })
      // })

    
  
      it('Error message for segment response with a delay of 1 minutes when clicking the run button'+
      ' of segment page in english mode',()=>{
        cy.stylisticSegmentationRequest({
          url:'segment',
          language:'English',
          message:'Oops. Something went wrong Please try again later',
          delaySeconds:60*2
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
})


