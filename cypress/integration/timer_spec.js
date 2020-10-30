

describe("toggle",function(){
    it("timer",function(){
      
        cy.visit("./index.html")
        cy.get("#play").click()
        cy.get("#print").then((val)=>{
            console.log(val.text());
        })
        cy.get("#pause").click()
         
        
        
      
     
    })
})