class Dashboard {
    get favourites() {return $('//div[contains(text(),"Favorites")]')}
    get addDash() {return $('//span[contains(text(),"Add dashboards")]')}
    get submit() {return $('//span[contains(text(),"Submit")]')}

    checkBox(DashName) {
        return $(`//div[contains(text(),'${DashName}')]/parent::div/child::span`)
    }

    // get checkParent() {
    //     return $('//div[@class="jss547"]')
    // }

    // checkBox(Dash) {
    //     return this.checkParent.$(`//div[contains(text(),"${Dash}")]/parent::div/child::span`)
    // }
}

module.exports=new Dashboard();