class LoginPage {
    get signInBut() {return $('//span[contains(text(),"Sign in")]')}
    get emailAddress() {return $('#idp-discovery-username')}
    get nextButton() {return $('#idp-discovery-submit')}
    get passwordBox() {return $('#txtPassword')}
    get jllUser() {return $('#txtUser')}
    get loginInBut() {return $('#loginButton')}
    get securityQues() {return $('.password-with-toggle')}
    get nextBut() {return $('.button-primary')}
}
module.exports = new LoginPage();