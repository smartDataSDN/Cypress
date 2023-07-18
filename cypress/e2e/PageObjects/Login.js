class Login {
    textUserName = "input[name='username']";
    textPassword = "input[name='password']";
    btnSubmit = "[type='submit']";
    lblMsg = "//h6[normalize-space()='Dashboard']"

   
    getEmail(username) {
        cy.get(this.textUserName).type(username);
    }

    getPassword(password) {
        cy.get(this.textPassword).type(password);
    }

    pageSubmit() {
        cy.get(this.btnSubmit).click();
    }

    verifyText() {
        cy.xpath(this.lblMsg).should('have.text', "Dashboard");
    }


}

export default Login; 