class RegisterRecord
{
    VisitPage()
    {
        cy.visit('http://demo.nopcommerce.com/')        
    }

    ClickRegister()
    {
        cy.get('.ico-register').click()                       
    }

    FillData(firstName, lastName, email, password, confirmPassword)
    {
        cy.get('input[id=gender-male]').click()
        cy.get('#FirstName').type(firstName)
        cy.get('#LastName').type(lastName)
        cy.get('#Email').type(email)
        cy.get('#Password').type(password)
        cy.get('#ConfirmPassword').type(confirmPassword)   
        return this   
    }

    ClickRegisterButton()
    {
        cy.get('#register-button').click()
    }

    RegistrationMessage()
    {
        cy.get('div[class=result]').should('have.text', 'Your registration completed');              
    }    

    Logout()
    {
        cy.get('.ico-logout').click()
        cy.get('.ico-login').should('be.visible')
    }
}
export default RegisterRecord