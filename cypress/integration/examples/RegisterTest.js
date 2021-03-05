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

    it('Register and Login', function()
    {
        const reg = new RegisterRecord()
        reg.VisitPage()  
        //User Register      
        for(var JSONlist = 1; JSONlist <= 5; JSONlist++)
        {
            reg.ClickRegister()
            var firstName = this.data[0][JSONlist.toString()][0]
            var lastName = this.data[0][JSONlist.toString()][1]
            var email = this.data[0][JSONlist.toString()][2]
            var password = this.data[0][JSONlist.toString()][3]
            var confirmPassword = this.data[0][JSONlist.toString()][4]
            reg.FillData(firstName, lastName, email, password, confirmPassword)
            reg.ClickRegisterButton()
            reg.RegistrationMessage()
            reg.Logout()            
        }  
        // User Login
        for(var loginUser = 1; loginUser = 5; loginUser++)
        {
            var email = this.data[0][loginUser.toString()][2]
            var password = this.data[0][loginUser.toString()][3]
            reg.Login(email, password) 
            reg.Logout()
        }             
    })    
})