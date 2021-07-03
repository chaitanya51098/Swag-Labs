const Page = require("./page");

class Shop extends Page{
    
   async openBrowser() 
     {
        await browser.url('/');
        await browser.maximizeWindow();
    }

    get username() { return $('//input[@id="user-name"]'); }
    get password() { return $('//input[@id="password"]'); }
    get submit() { return $('//input[@type="submit"]'); }
    get inventoryheader() { return $('//span[@class="title"]'); }
    get addtocart() { return $('//button[@id="add-to-cart-sauce-labs-backpack"]'); }
    get clickcarticon() { return $('//a[@class="shopping_cart_link"]'); }
    get cartheader() { return $('//span[@class="title"]'); }
    get clickcheckout() {return $('//button[@data-test="checkout"]'); }
    get checkoutheader() { return $('//span[@class="title"]'); }
    get firstname() { return $('//input[@id="first-name"]'); }
    get lastname() { return $('//input[@id="last-name"]'); }
    get postalcode() { return $('//input[@id="postal-code"]'); }
    get clickcontinue() { return $('//input[@name="continue"]'); }
    get finishpageheader() { return $('//span[@class="title"]'); }
    get clickfinish() { return $('//button[@id="finish"]'); }
    get thankyouheader() { return $('//h2[@class="complete-header"]'); }

    async logintopage(uname,pwd){
        (await this.username).waitForDisplayed(2000);
        await (await this.username).setValue(uname);
        await (await this.password).waitForExist(2000);
        await (await this.password).setValue(pwd);
        await (await this.submit).waitForClickable(2000);
        await (await this.submit).click();
        
    }
    async inventorypage(){
        await (await this.addtocart).waitForClickable(2000);
        await (await this.addtocart).click();
        await (await this.clickcarticon).waitForClickable(2000);
        await (await this.clickcarticon).click();
        
    }
    async cartpage(){
        await (await this.clickcheckout).waitForClickable(2000);
        await (await this.clickcheckout).click();

    }
    async checkoutpage(fname,lname,pcode) {
        await (await this.firstname).setValue(fname);
        await (await this.lastname).setValue(lname);
        await (await this.postalcode).setValue(pcode);
        await (await this.clickcontinue).waitForClickable(2000);
        await (await this.clickcontinue).click();
    }
    async finishpage(){
        await (await this.clickfinish).waitForClickable(2000);
        await (await this.clickfinish).click();

    }

}
module.exports=new Shop();