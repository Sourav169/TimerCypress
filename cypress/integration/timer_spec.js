describe("toggle",function(){
    it("timer",function(){
        cy.visit("./index.html")
        cy.get("#toggle")
        cy.get("#print")
    })
})