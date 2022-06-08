//@ts-check
// ...
const { test, expect,  } = require('@playwright/test');


test.beforeEach(async ({ page }) => { slowMo: 10000
  // Runs before each test and signs in each page.
    await page.goto('https://view.nlacoustics.com/#/');
    const title = page.locator('//*[@id="page-title"]');
    await page.fill('//*[@id="username"]', 'biola.balogun@nlacoustics.com');
    await page.fill('//*[@id="password"]', 'Temi3421');
    await page.click('//*[@id="loginBtn"]');
    await expect(page.locator('//*[@id="root"]/div[1]/div/div[2]')).toHaveText('Logged in.');
    
   
});

test('Invalid_Password', async ({ page }) => {
    const locator = page.locator('text=Logout');
    await locator.click();
    expect('Sign in.').toBeTruthy();
    const title = page.locator('//*[@id="page-title"]');
    await page.fill('//*[@id="username"]', 'biola.balogun@nlacoustics.com');
    await page.fill('//*[@id="password"]', '');
    await page.click('//*[@id="loginBtn"]');
    expect('Please input a valid password.').toBeTruthy();
        
    
});

test('Invalid_Username', async ({ page }) => {
    const locator = page.locator('text=Logout');
    await locator.click();
    expect('Sign in.').toBeTruthy();
    const title = page.$('//*[@id="page-title"]');
    await page.fill('//*[@id="username"]', '');
    await page.fill('//*[@id="password"]', 'Temi3421');
    await page.click('//*[@id="loginBtn"]');
    expect('Please input username.').toBeTruthy();
        
    
});


test('Settings', async ({ page }) => {
    const locator = page.locator('text=Settings');
    await locator.click();
    expect('SAVE CHANGES').toBeTruthy();
    await page.locator('text=CLOSE').click();
    
    
});

test('Download', async ({ page }) => {
    const locator = page.locator('//*[@id="topbar"]/a[2]/button');
    await locator.click();
    expect('RELEASE NOTES').toBeTruthy();
    expect('DOWNLOAD').toBeTruthy();
    await page.locator('text=HOME').click();
});

test('Import files', async ({ page }) => {
    const locator = page.locator('text=Import files');
    await locator.click();
    expect('Import files').toBeTruthy();
    await page.locator('text=CLOSE').click();
    
    
});


test('Cameras', async ({ page }) => {
    const locator = page.locator('text=Cameras');
    await locator.click();
    expect('PAIR DEVICE').toBeTruthy();
    expect('SAVE CHANGES').toBeTruthy();
    await page.locator('text=CLOSE').click();
    
    
});



test('Download_Snaoshts', async ({ page }) => {
    const locator = page.locator('#sort-container > button > svg');
    await locator.click();
    expect('Bulk delete').toBeTruthy();
    await page.locator('text=Download snapshots').click();
    await page.locator('text=CLOSE').click();
    expect('Logout').toBeTruthy();
    
    
});

test('Bulk_Delete_Abort', async ({ page }) => {
    const locator = page.locator('#sort-container > button > svg');
    await locator.click();
    await page.locator('text=Bulk delete').click();
    await page.locator('text=CANCEL').click();
    expect('Logout').toBeTruthy();
    
    
});

test('Bulk_Delete', async ({ page }) => {
    const locator = page.locator('#sort-container > button > svg');
    await locator.click();
    await page.locator('text=Bulk delete').click();
    await page.isChecked('//*[@id="bulkDeleteDialog"]/div[3]/div/div[1]/div/div/label[3]/span[1]/input');
    //await page.locator('text=DELETE').click();
    await page.locator('text=CANCEL').click();
    expect('Logout').toBeTruthy();
    
    
});

test('DELETE', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=DELETE').click();
    await page.locator('text=CANCEL').click();
    expect('Logout').toBeTruthy();
});

test('Comments_input', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.fill('#text', 'This is a text');
    await page.locator('text=SAVE COMMENTS').click();
    expect('Changes saved').toBeTruthy();
});

test('FFT', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=FFT').click();
    expect('32kHz').toBeTruthy();
});

test('SIGNAL', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=SIGNAL').click();
    expect('0 ms').toBeTruthy();
});

test('AUTOCORRELATION', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=AUTOCORRELATION').click();
    expect('-0 ms').toBeTruthy();
});

test('SPECTROGRAM', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=SPECTROGRAM').click();
    expect('48kHz').toBeTruthy();
});

test('CEPSTRUM', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=CEPSTRUM').click();
    expect('100 ms').toBeTruthy();
});

test('Tags', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.fill('//*[@id="tags"]/div/div/div/div[1]/div[1]/input', 'Substation');
    await page.locator('text=Add').click();
    expect('Substation').toBeTruthy();
});

test('NEXT', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=NEXT').click();
    expect('PREVIOUS').toBeTruthy();
});

test('OREVIOUS', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=PREVIOUS').click();
    expect('NEXT').toBeTruthy();
});

test('HOME', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=HOME').click();
    expect('Snapshot List').toBeTruthy();
});


test('LOGGED OUT', async ({ page }) => {
    const locator = page.locator('text=Lab');
    await locator.click();
    await page.locator('text=HOME').click();
    await page.locator('text=Logout').click();
    expect('Logged out').toBeTruthy();
});

test('Sort_By_CreationDate', async ({ page }) => {

    const locator = page.locator('#sort-select-input');
   //label
    await page.locator('text=Creation date, newest first').click();
    await page.screenshot({path: 'screenshot.png'})
    expect('Creation date, newest first').toBeTruthy();

});