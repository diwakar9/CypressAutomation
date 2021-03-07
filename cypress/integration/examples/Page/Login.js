class LoginUser
{
    Login(email, password)
    {
        cy.get('.ico-login').click()
        cy.get('#Email').type(email)
        cy.get('#Password').type(password)
        cy.get('.login-button').click()
        cy.get('.ico-logout').should('be.visible')
        return this
    }
}
export default LoginUser