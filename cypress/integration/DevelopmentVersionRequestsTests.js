// /// <reference types="cypress"/>

// //run tests on requests from stylistic segmentation run

// describe('requestsTests',()=>{

    
//     beforeEach(() => {
//       cy.visit('https://segment.dicta.org.il/')
//     })
  
  
//     // it('Error message for GetTextLargeAndSmall response with a delay of 3 minutes when clicking the run button'+
//     // ' of segment page in hebrew mode',()=>{
//     //   cy.stylisticSegmentationRequest({
//     //     url:'GetTextLargeAndSmall',
//     //     language:'Hebrew',
//     //     message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
//     //     delaySeconds:60*3
//     //   })
//     // })
  
//     // it('Error message for GetTextLargeAndSmall response with a delay of 3 minutes when clicking the run button'+
//     // ' of segment page in english mode',()=>{
//     //   cy.stylisticSegmentationRequest({
//     //     url:'GetTextLargeAndSmall',
//     //     language:'English',
//     //     message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
//     //     delaySeconds:60*3
//     //   })
//     // })
  
    
//     // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of segment page'+
//     // 'in hebrew mode',()=>{
//     //   cy.stylisticSegmentationRequest({
//     //     url:'GetTextLargeAndSmall',
//     //     language:'Hebrew',
//     //     status:500,
//     //     message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
//     //   })
//     // })
  
//     // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of segment page'+
//     // 'in english mode',()=>{
//     //   cy.stylisticSegmentationRequest({
//     //     url:'GetTextLargeAndSmall',
//     //     language:'English',
//     //     status:500,
//     //     message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
//     //   })
//     // })
  
//     it('Error message for segment response with a delay of 4 minutes when clicking the run button'+
//     ' of segment page in hebrew mode',()=>{
//       cy.stylisticSegmentationRequest({
//         url:'segment',
//         language:'Hebrew',
//         message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
//         delaySeconds:60*6
//       })
//     })
  
//     it('Error message for segment response with a delay of 4 minutes when clicking the run button'+
//     ' of segment page in english mode',()=>{
//       cy.stylisticSegmentationRequest({
//         url:'segment',
//         language:'English',
//         message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
//         delaySeconds:60*4
//       })
//     })
  
    
//     it('Error message for segment response with status code 500 when clicking the run button of segment page'+
//     'in hebrew mode',()=>{
//       cy.stylisticSegmentationRequest({
//         url:'segment',
//         language:'Hebrew',
//         status:500,
//         message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
//       })
//     })
  
//     it('Error message for segment response with status code 500 when clicking the run button of segment page'+
//     'in english mode',()=>{
//       cy.stylisticSegmentationRequest({
//         url:'segment',
//         language:'English',
//         status:500,
//         message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
//       })
//     })
      
//   })