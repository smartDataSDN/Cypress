describe("Suite", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl4"))
    })

   /*  it("frame", () => {
        let Iframe = cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap);
        Iframe.clear().type("Welcome", "{cmd+a}")
        cy.get("[aria-label='Bold']").click();
    }) */

    /* it("frame", () => {
        cy.Iframe("#mce_0_ifr").clear().type("Welcome", "{cmd+a}");
        cy.get("[aria-label='Bold']").click();
    }) */

    it("frame by using cypress-iframe plugin", () => {
        cy.frameLoaded("#mce_0_ifr") //Load the frame.
        cy.iframe("#mce_0_ifr").clear().type("Welcome").type("{cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })
    
})