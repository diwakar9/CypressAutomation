import RegisterRecord from './PageObject/Register'

describe('Register',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    const reg = new RegisterRecord()
    it('RegisterUser', function()
    {        
        reg.VisitPage()  
        //User Register      
        for(var i = 1; i <= 5; i++)
        {
            reg.ClickRegister()
            var firstName = this.data[0][i.toString()][0]
            var lastName = this.data[0][i.toString()][1]
            var email = this.data[0][i.toString()][2]
            var password = this.data[0][i.toString()][3]
            var confirmPassword = this.data[0][i.toString()][4]
            reg.FillData(firstName, lastName, email, password, confirmPassword)
            reg.ClickRegisterButton()
            reg.RegistrationMessage()
            reg.Logout()            
        }                        
    })    
})