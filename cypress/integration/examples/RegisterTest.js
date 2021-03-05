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

    it('Register Name', function()
    {
        const reg = new RegisterRecord()
        reg.VisitPage()        
        for(var i = 1; i <= 5; i++)
        {
            reg.ClickRegister()
            var firstName = JSON.parse(this.data.i[1])
            var lastName = JSON.parse(this.data.i[1])
            var email = JSON.parse(this.data.i[2])
            var password = JSON.parse(this.data.i[3])
            var confirmPassword = JSON.parse(this.data.i[4])
            reg.FillData(firstName, lastName, email, password, confirmPassword)
            reg.ClickRegisterButton()
            reg.RegistrationMessage()
            reg.Logout()            
        }        
    })    
})