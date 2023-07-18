//import Login  from "../PageObjects/Login.js"
import Login from "../PageObjects/Login.js"
describe("Login Page ways", () => {
    /*  it("Normal Approach", () => {
         cy.visit("https://opensource-demo.orangehrmlive.com")
         cy.get("input[name='username']").type("Admin");
         cy.get("input[name='password']").type("admin123");
         cy.get("[type='submit']").click();
         cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text', "Dashboard");
     }) */

    /* it("Page Object Approach", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        //let login = new Login();
        log.getEmail("Admin");
        log.getPassword("admin123");
        log.pageSubmit();
        log.verifyText();
        
    }) */
    it("Page Object Approach with fixture file", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.fixture('credentials').then((data) => {
            let login = new Login();
            login.getEmail(data.username);
            login.getPassword(data.password);
            login.pageSubmit();
            login.verifyText();
        })
    })
})