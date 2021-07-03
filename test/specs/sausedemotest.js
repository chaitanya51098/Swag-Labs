const { TITLE, INVENTORY_PAGE_HEADER, CART_PAGE_HEADER, CHECKOUT_PAGE_HEADER, FINISH_PAGE_HEADER, SUCCESS_MSG } = require('../constants/constant');
const shop=require('../pageobjects/shop')
const data=require('../resources/testdata.json')
describe('open sause demo page', () => {

    it('should verify the page title then login', async() => {

       await shop.openBrowser();
       await expect(browser).toHaveTitle(TITLE);
       const credentials=data.logindetails;
        shop.logintopage(credentials.validusername,credentials.validpassword);
        
    });

    it('should verify header on inventory page and add to cart', async() => {
        await expect(shop.inventoryheader).toHaveTextContaining(INVENTORY_PAGE_HEADER);
        await shop.inventorypage();    
    });

    it('should verify header on cart page and click on checkout', async() => {
        await expect(shop.cartheader).toHaveTextContaining(CART_PAGE_HEADER);
        await shop.cartpage();
    
    });

    it('should verify header on checkout page fill details and click on continue', async() => {
        await expect(shop.checkoutheader).toHaveTextContaining(CHECKOUT_PAGE_HEADER);
        const checkoutdetails=data.checkoutinfo;
        await shop.checkoutpage(checkoutdetails.firstname,checkoutdetails.lastname,checkoutdetails.postalcode);
        
    });

    it('should verify header on check out overview page and click on finish', async() => {

        await expect(shop.finishpageheader).toHaveTextContaining(FINISH_PAGE_HEADER);
        await shop.finishpage();
        await expect(shop.thankyouheader).toHaveTextContaining(SUCCESS_MSG); 

    });
});