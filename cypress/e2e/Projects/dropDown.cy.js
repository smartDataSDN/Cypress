describe("Test Suite", () => {
    /*
    before(() => {
        cy.visit('/free-demo.html')
    }) */

    it("Drop Down with Select tag", () => {
        cy.visit(Cypress.env("baseUrl"));
        cy.get("#zcf_address_country")
            .select('Algeria')
            .should('have.value', "Algeria")
    })


   /*  it.only("Drop Down without Select tag", () => {
        cy.visit(Cypress.env("baseUrl1"));
        //cy.get("#deliverymethod_1").should("not.be.checked");
        //cy.get("#deliverymethod_1").check().should('be.checked');
        
        //Approach-1
        //cy.get("#select2-billing_country-container").click();
        //cy.dropDown("#select2-billing_country-results >li", "#select2-billing_country-container", 'Italy');
        //cy.dropDown('Italy');


        //Approach -2
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text', "Italy");
    }) */

    it("Auto Suggest dropdown", () => {
        cy.visit(Cypress.env("baseUrl2"));
        cy.get("#searchInput").type("Delhi");
        cy.contains(".suggestion-title","Delhi Sultanate").click();
        cy.get('.mw-page-title-main').should("contain", "Delhi Sultanate");
        
    })



    it.only("Dropdown without select tag and but dropdown values in hidden", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get('ul.oxd-main-menu> li:nth-child(3)>a >span').click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Leave");
        cy.wait(2000);
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click();
        cy.dropDown("div[role='listbox'] span", "div[class='oxd-form-row'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)", "Administration");

    })
})