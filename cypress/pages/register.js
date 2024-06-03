class Home{
    get signin() {
        return cy.get("a.login")
    }

    get create() {
        return cy.get("#SubmitCreate")
    }

    get email() {
        return cy.get("#email_create")
    }

    get email2 () {
        return cy.get("#email")
    }

    get register() {
        return cy.get("#submitAccount > span")
    }

    get firstName() {
        return cy.get("#customer_firstname")
    }

    get lastName() {
        return cy.get("#customer_lastname")
    }

    get passwd() {
        return cy.get("#passwd")
    }

    get birthday() {
        return cy.get("#days")
    }

    clickOnSignin() {
        this.signin.click()
    }

    clickOnCreate() {
        this.create.click()
    }
    
    clearEmail() {
        this.email.clear()
    }

    clearFirstname() {
        this.firstName.clear()
    }

    clearLastname() {
        this.lastName.clear()
    }

    clearEmail2() {
        this.email2.clear()
    }

    clearPasswd() {
        this.passwd.clear()
    }

    typeEmail(textValue) {
        this.email.type(textValue)
    }

    typeEmail2(textValue) {
        this.email2.type(textValue)
    }

    typeFirstname(textValue) {
        this.firstName.type(textValue)
    }

    typeLastname(textValue) {
        this.lastName.type(textValue)
    }

    typePasswd(textValue) {
        this.passwd.type(textValue)
    }

    selectBirthday() {
        this.birthday.select(9)
    }

    clickOnRegister() {
        this.register.click()
    }
}

export default new Home()