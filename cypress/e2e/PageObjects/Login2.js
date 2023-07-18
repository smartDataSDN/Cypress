/* let textUserName = "input[name='username']";
let textPassword = "input[name='password']";
let btnSubmit = "[type='submit']";
let lblMsg = "//h6[normalize-space()='Dashboard']" */

/* 
let getEmail = (username) => {
    cy.get(textUserName).type(username);
}

let getPassword = (password) => {
    cy.get(textPassword).type(password);
}

let pageSubmit = () => {
    cy.get(btnSubmit).click();
}

let verifyText = () => {
    cy.xpath(lblMsg).should('have.text', "Dashboard");
}


export default {
    getEmail,
    getPassword,
    pageSubmit,
    verifyText
};
 */


let getEmail = (textUserName, username) => {
    cy.get(textUserName).type(username);
}

let getPassword = (textPassword,password) => {
    cy.get(textPassword).type(password);
}

let pageSubmit = (btnSubmit) => {
    cy.get(btnSubmit).click();
}

let verifyText = (lblMsg) => {
    cy.xpath(lblMsg).should('have.text', "Dashboard");
}


export default {
    getEmail,
    getPassword,
    pageSubmit,
    verifyText
};