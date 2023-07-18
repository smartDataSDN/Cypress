
describe("My Test", () => {

    beforeEach(() => {
        cy.visit("http://staging-agent.hubbed.com.au/sign_in")
    })

    it("Check Title", () => {
        cy.title().should("eq", "Hubbed")
        
    })


    it("Validate URL", () => {
        cy.url().should("contain", "http://staging-agent.hubbed.com.au")

    })

    it("Login steps", () => {
        cy.get("#ember403-input").type("Testingloc@yopmail.com");
        cy.xpath("//input[@type='password']").type("Test@1234");
        cy.get("#login-btn").type('{enter}');
    })
})