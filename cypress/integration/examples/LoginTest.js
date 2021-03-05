import RegisterRecord from './PageObject/Register'
import LoginUser from './PageObject/Login'

describe('Register',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })
    const lgn = new LoginUser()
    const reg = new RegisterRecord()
    it('LoginFromRegisteredUser',function()
    {       
        // User Login
        reg.VisitPage()
        for(var i = 1; i <= 5; i++)
        {
            var email = this.data[0][i.toString()][2]
            var password = this.data[0][i.toString()][3]
            lgn.Login(email, password) 
            reg.Logout()
        }     
    })
})