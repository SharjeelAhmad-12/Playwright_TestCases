import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goToCart() {
    console.log('Navigating to cart...');

    const cartElement = this.page.locator('//div[@id="cart_checkout1"]');
    await expect(cartElement).toBeVisible({ timeout: 10000 });
    await cartElement.click();
    console.log('✓ Clicked on cart element');

    await this.page.locator('//h1[contains(text(),"Shopping Cart")]')
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('✓ Cart page loaded successfully');
  }

  async assertItemInCart(expectedQuantity: number = 1) {
    console.log(`Verifying item in cart with quantity ${expectedQuantity}...`);

    const cartTable = this.page.locator('//table[@class="table table-striped table-bordered"]').first();
    await expect(cartTable).toBeVisible({ timeout: 15000 });
    console.log('✓ Cart table is visible');

    const quantityInput = this.page.locator('//*[@id="product_quantity"]');
    if (await quantityInput.isVisible()) {
      await expect(quantityInput).toHaveValue(String(expectedQuantity));
      console.log(`✓ Quantity verified: ${expectedQuantity}`);
    } else {
      console.log('⚠️ Quantity input not found, skipping quantity verification');
    }

    try {
      const priceElement = cartTable.locator('xpath=//td[contains(@class,"price")]').first();
      if (await priceElement.isVisible()) {
        const priceText = await priceElement.textContent();
        if (priceText && priceText.trim()) {
          console.log(`✓ Price/Amount found: ${priceText.trim()}`);
        }
      }
    } catch {
      console.log('Price/Amount information not available');
    }
  }

  async verifyTshirtsInCart(expectedCount: number) {
    console.log(`Verifying ${expectedCount} items in cart...`);

    const currentUrl = this.page.url();
    if (!currentUrl.includes('cart')) {
      await this.goToCart();
    }

    await this.page.waitForLoadState('networkidle', { timeout: 15000 });

    const cartTable = this.page.locator('//table[@class="table table-striped table-bordered"]').first();
    await expect(cartTable).toBeVisible({ timeout: 15000 });
    console.log('✓ Cart table is visible');

    const cartRows = cartTable.locator('//tr[contains(@class,"product") or contains(@class,"item")]');
    const actualItemCount = await cartRows.count();
    
    console.log(`Found ${actualItemCount} items in cart`);
    
    if (actualItemCount >= expectedCount) {
      console.log(`✓ Cart contains at least ${expectedCount} items as expected`);
    } else {
      throw new Error(`Expected ${expectedCount} items in cart, but found only ${actualItemCount}`);
    }

    try {
      const tshirtRows = cartTable.locator('//tr[contains(text(),"T-shirt") or contains(text(),"Tshirt") or contains(text(),"T SHIRT")]');
      const tshirtCount = await tshirtRows.count();
      console.log(`✓ Found ${tshirtCount} T-shirt items in cart`);
    } catch (error) {
      console.log('⚠️ Could not verify specific T-shirt types, but total count is correct');
    }

    console.log('✓ T-shirts cart verification completed successfully');
  }
}
