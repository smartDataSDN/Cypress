describe("Test Suite", () => {
    beforeEach(() => {
        //cy.visit(Cypress.env("baseUrl3"))
    })


    /* it('Alert', () => {
        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:alert", (t)=> {
            expect(t).to.equal("I am a JS Alert");
        })

        cy.get("#result").should("have.text", "You successfully clicked an alert");
    })
 */
    /* it('confirm Alert', () => {
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })
        cy.on("window:confirm", () =>false)

        cy.get("#result").should("have.text", "You clicked: Cancel");
    }) */

    /* it('Prompt Alert', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('This is a test text')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: This is a test text')
    }) */
    //Approach-1
    /* it("Autjenticated Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password:"admin"
            }
        });
        cy.contains("Congratulations! You must have the proper credentials.")
        
    }) */
    
    //Approach-2
   /*  it("Autjenticated Alert", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.contains("Congratulations! You must have the proper credentials.")

    }) */

    /* it("Child Tab", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example>a").invoke("removeAttr", "target").click();
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
        cy.go('back');
        cy.url().should("include", "https://the-internet.herokuapp.com/windows")
   }) */ 

    it("second approach Child Tab", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example>a").then((e)=>{
            let url = e.prop('href')
            cy.visit(url);
        })
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
   }) 
})