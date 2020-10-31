
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
        cy.tick(2000);
        cy.get("#pause").click();
        cy.get("#print").then((val1)=>{
           let v = val1.text();
           cy.get("#play").click()
           cy.tick(1050);
           cy.get("#print").then((val2)=>{
               console.log(v,val2.text());
               expect(parseInt(v) < parseInt(val2.text())).to.equal(true);
           });
            
              
          
          
     
    })
})
