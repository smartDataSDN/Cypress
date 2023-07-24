import OpenCart from "../PageObjects/openCart"

describe("Test Suite", () => {
    beforeEach('Login', () => {
        cy.visit(Cypress.env("baseUrl5"))
        let login = new OpenCart();
        cy.fixture('openCartLogin').then((data) => {
            //login.getUsername(data.username);
            //login.getPassword(data.password);

            cy.LoginPage(login.getUsername(), login.getPassword(), data.username, data.password);
            login.pageSubmit();
            login.closeAlert();
            login.clickMenuTab();
            login.clickChilTab();
        })

    })

    it("Check number of Row & colums", () => {
        cy.get("table[class='table table-bordered table-hover']> tbody>tr").should("have.length", 10);
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", 7);
    })

    it("Check cell data from specific Row & colums", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody tr:nth-child(5) >td:nth-child(3)").contains("demo234566@gmail.com");
    })

    it("Read all rows & columns data in the first page", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col, index, $cols) => {
                    cy.log($col.text())
                })
            })

        })
    })


    it.only("Pagination", () => {
        /* cy.get(".col-sm-6.text-end").then((e)=>{
            let pageText = e.text();//Showing 1 to 10 of 14207 (1421 Pages)
            let totalPages = pageText.substring(pageText.indexOf("(")+1, pageText.indexOf("Pages")-1);
            cy.log(totalPages);
        }) */
        let totalPages = 5;
        for (let p = 1; p < totalPages; p++) {
            if (totalPages > 1) {
                cy.get("ul[class='pagination']> li:nth-child("+p+")").click();
                cy.wait(2000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get('td:nth-child(3)').then((e) => {
                            if (e.text() =="ceo@wolfchip.com") {
                                expect(e.text()).to.equal("ceo@wolfchip.com")
                            }
                        })
                    })
                })
            }
        }
    })
})