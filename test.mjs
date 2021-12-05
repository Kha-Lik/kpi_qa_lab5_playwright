import { test, expect } from '@playwright/test';

test('test', async({ page }) => {

    // Go to https://www.demoblaze.com/
    await page.goto('https://www.demoblaze.com/');

    // Click a:has-text("Log in")
    await page.click('a:has-text("Log in")');

    // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
    await page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');

    // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
    await page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'khalik');

    // Press Tab
    await page.press('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'Tab');

    // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
    await page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', 'Qqqq111!');

    // Click button:has-text("Log in")
    await Promise.all([
        page.waitForNavigation( /*{ url: 'https://www.demoblaze.com/' }*/ ),
        page.click('button:has-text("Log in")')
    ]);

    // Click text=Iphone 6 32gb
    await page.click('text=Iphone 6 32gb');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=5');

    // Click text=Add to cart
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.click('text=Add to cart');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=5#');

    // Click text=Home (current)
    await page.click('text=Home (current)');
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    // Click text=Sony vaio i7
    await page.click('text=Sony vaio i7');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=9');

    // Click text=Add to cart
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.click('text=Add to cart');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=9#');

    // Click text=Cart
    await page.click('text=Cart');
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');

    // Click button:has-text("Place Order")
    await page.click('button:has-text("Place Order")');

    // Click text=Total: 1580 Name: Country: City: Credit card: Month: Year: >> input[type="text"]
    await page.click('text=Total: 1580 Name: Country: City: Credit card: Month: Year: >> input[type="text"]');

    // Fill text=Total: 1580 Name: Country: City: Credit card: Month: Year: >> input[type="text"]
    await page.fill('text=Total: 1580 Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'name');

    // Press Tab
    await page.press('text=Total: 1580 Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'Tab');

    // Fill #country
    await page.fill('#country', 'cntry');

    // Press Tab
    await page.press('#country', 'Tab');

    // Fill #city
    await page.fill('#city', 'cty');

    // Press Tab
    await page.press('#city', 'Tab');

    // Fill #card
    await page.fill('#card', '1234567890000000');

    // Click #month
    await page.click('#month');

    // Fill #month
    await page.fill('#month', '06');

    // Click #year
    await page.click('#year');

    // Fill #year
    await page.fill('#year', '24');

    // Click text=Purchase
    await page.click('text=Purchase');

    // Click text=OK
    await page.click('text=OK');
});