

describe("toggle",function(){
    it("initial setup",function(){
      
        cy.visit("./index.html")
        cy.get("#play").click()
        cy.get("#print")
        cy.get("#pause").click()
     
    })
})


describe("toggle",function(){
    it("timer",function(){
       cy.clock()
        cy.visit("./index.html")
        cy.get("#play").click()
        var i;
     
        cy.tick(2000)
        cy.get("#print").then((time)=>{
          
           i=time.text()
           cy.get("#print").contains(i)
           
         
           
        })
        cy.get("#pause").click()
        cy.get("#print").contains(0)
        cy.get("#play").click()  
          
     
    })
})
