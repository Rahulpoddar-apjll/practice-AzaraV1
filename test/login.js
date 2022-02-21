const LoginPage = require('../pages/loginPage')
const Dashboard=require("../pages/dashboard")

describe ("Login", function() {
    it("SignInButton", async function(){
        await browser.url("https://dev.azara.jllt.com/");
        await browser.pause(2000);
        await LoginPage.signInBut.click();
        await browser.pause(2000);
    })

    it("Enter UserName", async function(){
        await LoginPage.emailAddress.setValue("rahul.poddar@ap.jll.com");
        await browser.pause(2000);
        await LoginPage.nextButton.click();
        await browser.pause(2000);
    })

    it("Enter JLL Username and Password", async function(){
        await LoginPage.jllUser.setValue("rahul.poddar@ap.jll.com")
        await LoginPage.passwordBox.setValue("welcome2JLL!")
        await browser.pause(2000);
        await LoginPage.loginInBut.click();
        await browser.pause(2000);
        await LoginPage.securityQues.setValue("banana");
        await LoginPage.nextBut.click();
        await browser.pause(4000);
    })

    it("Get into Favourites", async()=>{
        await Dashboard.favourites.click();
        await browser.pause(3000);
    })

    it ("Add Dashboard", async()=>{
        await Dashboard.addDash.click();
        await browser.pause(3000);
        await Dashboard.checkBox('Portfolio Summary').click();
        await browser.pause(4000);
        await Dashboard.submit.scrollIntoView();
        await Dashboard.submit.click();
        await browser.pause(4000);
    })

    it ("Assertion of Dashboard", async()=>{
        const findDash=await $('//div[contains(text(),"Portfolio Summary")]');
        findDash.waitForDisplayed();
        expectChai(await findDash.isDisplayed()).to.equal(true);
    })

    it ("UnFav the Dash", async()=>{
        await Dashboard.addDash.click();
        await browser.pause(3000);
        await Dashboard.checkBox('Portfolio Summary').click();
        await browser.pause(4000);
        await Dashboard.submit.scrollIntoView();
        await Dashboard.submit.click();
        await browser.pause(4000);
    })
})