class OpenCart {
    textUsername = "#input-username";
    textPassword = "#input-password";
    clickLogin = "button[type='submit']";
    alert = "button[class='btn-close']";
    menuTab = "#menu-customer >a";
    childTab = "#menu-customer>ul>li:first-child";

    /* getUsername = username => {
         cy.get(this.textUsername).type(username);
    } */

    /* getPassword(password) {
        cy.get(this.textPassword).type(password);
    } */
    getUsername = () => {
        return this.textUsername
    }

    getPassword() {
        return this.textPassword
    }

    pageSubmit() {
        cy.get(this.clickLogin).click();
    }

    closeAlert() {
        cy.get(this.alert).click();
    }

    clickMenuTab() {
        cy.get(this.menuTab).click();
    }

    clickChilTab() {
        cy.get(this.childTab).click();
    }

}

export default OpenCart; 