
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
        //cy.get("h1[class='page-heading center']").screenshot('heading')
        cy.clikLink("ReTurn To Courier");
        cy.wait(3000);
        //cy.get("div >h1[class='page-heading']").should("have.text", "Currently Checked In");
        //cy.get("div:nth-child(1) > h1:nth-child(5)").scrollIntoView({ duration: 4000 });
        //cy.get("div:nth-child(1) > h1:nth-child(5)").should('have.text', "Currently Checked In");

    })
})