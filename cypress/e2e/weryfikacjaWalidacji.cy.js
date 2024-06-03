/// <reference types="cypress" />

import base from "../pages/base";
import home from "../pages/register";
import { wrongEmail } from "../fixtures/type.json"
import { correctEmail } from "../fixtures/type.json"
import { wrongText } from "../fixtures/type.json"
import { longText } from "../fixtures/type.json"
import { longEmail } from "../fixtures/type.json"

describe("weryfikacja walidacji formularza rejestracji", () => {
    it("Weryfikacja walidacji pola eamil adress", () => {
        base.openHomePage();
        home.clickOnSignin();
        home.clickOnCreate();
        home.typeEmail(wrongEmail)
        cy.get("#create_account_error").should("be.visible").and("include.text", "Invalid email address")        
    })
   
    it("Weryfikacja walidacji dalszej części formularza rejestracji", () => {
        home.clearEmail();
        home.typeEmail(correctEmail)
        home.clickOnCreate();
        cy.url().should("include", "controller=authentication&back=my-account#account-creation")
        home.clickOnRegister()
        cy.get("#center_column > div").should("be.visible")
    })
   
    it("Weryfikacja walidacji pola First name", () => {
        home.typeFirstname(longText)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "firstname is too long. Maximum length: 32")
        home.clearFirstname()
        home.typeFirstname(wrongText)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "firstname is invalid.")
     }) 
  
    it("Weryfikacja walidacji pola Last name", () => {
        home.typeLastname(longText)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "lastname is too long. Maximum length: 32")
        home.clearLastname()
        home.typeLastname(wrongText)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "lastname is invalid.")
    }) 
  
    it("Weryfikacja walidacji pola Email", () => {
        home.clearEmail2()
        home.typeEmail2(longEmail)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "email is too long. Maximum length: 128")
        home.clearEmail2()
        home.typeEmail2(wrongEmail)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "email is invalid.")
    }) 
  
    it("Weryfikacja walidacji pola Password", () => {
        home.typePasswd(longText)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "passwd is too long. Maximum length: 32")
        home.clearPasswd()
        home.typePasswd(wrongText)
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "passwd is invalid.")
    }) 

    it("Weryfikacja walidacji pola Date of Birth", () => {
        home.selectBirthday()
        home.clickOnRegister()
        cy.get("#center_column > div").should("include.text", "Invalid date of birth")
    }) 
})