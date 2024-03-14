// ProductPage.ts
import { Page, Locator } from 'playwright';

export class ProductPage {
    private readonly page: Page;
    private readonly addToCartButton: Locator;
    private readonly cartIcon: Locator;
    private readonly productName: Locator;
    private readonly AddedProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('.inventory_item .inventory_item_description');
        this.addToCartButton = page.locator('.inventory_details_desc_container > button');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.AddedProduct = page.locator('[class="inventory_item_name"]');
    }

    public async clickAddToCart() {
        await this.addToCartButton.click();
    }

    public async isProductAdded(product: string) {
        const AddedProductCount = await this.AddedProduct.count();
        for (let i = 0; i < AddedProductCount; i++) {
            const prodName = await this.AddedProduct.nth(i).textContent();
            if (prodName === product) {
                return true;
            }
        }
        return false;
    }

    public async clickShoppingCart() {
        await this.cartIcon.click();
    }

    public async clickAddItemToCart(product: string) {
        const productListCount = await this.productName.count();
        for (let i = 0; i < productListCount; i++) {
            const productname=await this.productName.nth(i).locator('div a div').textContent();
            console.log(productname);
            if(productname===product){
                await this.productName.nth(i).locator('div a').click();
                break;
            }
        }
    }


}
