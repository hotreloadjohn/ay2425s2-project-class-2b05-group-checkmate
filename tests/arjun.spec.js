/////////////////////////////////////////////////////////////////////////////////////////////
// BUY Stock: VALID Credentials
/////////////////////////////////////////////////////////////////////////////////////////////
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('BUY stock : Valid Credentials', () => {

  test('BUY test : Valid Credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/html/login.html');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('123ava');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Investment' }).click();
  await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
  await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
  await page.getByRole('button', { name: 'Get Stock Details' }).click();
  await page.getByPlaceholder('Enter quantity').click();
  await page.getByPlaceholder('Enter quantity').fill('10');
  await page.getByRole('button', { name: 'Buy', exact: true }).click();
  });
  

    // test('BUY test : Valid Credentials', async ({ page }) => {
    //   await page.goto('https://checkmatefinance-bpbzdsdme8eze7cs.southeastasia-01.azurewebsites.net/html/login.html');
    //   await page.getByPlaceholder('Enter username').click();
    //   await page.getByPlaceholder('Enter username').fill('hiarjun');
    //   await page.getByPlaceholder('Enter password').click();
    //   await page.getByPlaceholder('Enter password').fill('123');
    //   await page.getByRole('button', { name: 'Login' }).click();
    
    //   await page.getByRole('link', { name: 'Investment' }).click();
    //   await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
    //   await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
    //   await page.getByRole('combobox').selectOption('monthly');
    //   await page.getByRole('button', { name: 'Get Stock Details' }).click();
    
    //   await page.getByPlaceholder('Enter quantity').click();
    //   await page.getByPlaceholder('Enter quantity').fill('10');
    
    //   // Dialog handling setup for multiple dialogs
    //   const dialogMessages = [];
    //   page.on('dialog', async dialog => {
    //     dialogMessages.push(dialog.message());
    //     await dialog.dismiss(); 
    //   });
    
    //   await page.getByRole('button', { name: 'Buy' }).click();
    
    //   // Wait for dialogs to be captured
    //   await page.waitForTimeout(1000); // Adjust based on application behavior
    
    // });
    
    })
    
    
    
    
    
    
    
    
    // // /////////////////////////////////////////////////////////////////////////////////////////////
    // // // SELL Stock: VALID Credentials
    // // /////////////////////////////////////////////////////////////////////////////////////////////
    
     test.describe('SELL stock : Valid Credentials', () => {
    
    // test('SELL stock : Valid Credentials', async ({ page }) => {
    //   await page.goto('https://checkmatefinance-bpbzdsdme8eze7cs.southeastasia-01.azurewebsites.net/html/login.html');
    //   await page.getByPlaceholder('Enter username').click();
    //   await page.getByPlaceholder('Enter username').fill('hiarjun');
    //   await page.getByPlaceholder('Enter password').click();
    //   await page.getByPlaceholder('Enter password').fill('123');
    //   await page.getByRole('button', { name: 'Login' }).click();
    
    //   await page.getByRole('link', { name: 'Investment' }).click();
    //   await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
    //   await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
    //   await page.getByRole('combobox').selectOption('monthly');
    //   await page.getByRole('button', { name: 'Get Stock Details' }).click();
    
    //   await page.getByPlaceholder('Enter quantity').click();
    //   await page.getByPlaceholder('Enter quantity').fill('10');
    
    //   // Dialog handling setup for multiple dialogs
    //   const dialogMessages = [];
    //   page.on('dialog', async dialog => {
    //     dialogMessages.push(dialog.message()); 
    //     await dialog.dismiss(); 
    //   });
    
    //   await page.getByRole('button', { name: 'Sell' }).click();
    
    //   // Add buffer time for dialog processing
    //   await page.waitForTimeout(1000); 
    
    // });


    test('SELL stock : Valid Credentials', async ({ page }) => {
      await page.goto('http://localhost:3000/html/login.html');
      await page.getByLabel('Username').click();
      await page.getByLabel('Username').fill('123ava');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('123');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.getByRole('link', { name: 'Investment' }).click();
      await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
      await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
      await page.getByRole('button', { name: 'Get Stock Details' }).click();
      await page.getByPlaceholder('Enter quantity').click();
      await page.getByPlaceholder('Enter quantity').fill('10');
      await page.getByRole('button', { name: 'Sell', exact: true }).click();
    });

     })
    
    
    
    
    
    // /////////////////////////////////////////////////////////////////////////////////////////////
    // // BUY Stock: INVALID Credentials (not enough money)
    // /////////////////////////////////////////////////////////////////////////////////////////////
    
     test.describe('BUY stock : Invalid Credentials', () => {
    
      // test('BUY test : InValid Credentials', async ({ page }) => {
      //   await page.goto('https://checkmatefinance-bpbzdsdme8eze7cs.southeastasia-01.azurewebsites.net/html/login.html');
      //   await page.getByPlaceholder('Enter username').click();
      //   await page.getByPlaceholder('Enter username').fill('hiarjun');
      //   await page.getByPlaceholder('Enter password').click();
      //   await page.getByPlaceholder('Enter password').fill('123');
      //   await page.getByRole('button', { name: 'Login' }).click();
    
      //   await page.getByRole('link', { name: 'Investment' }).click();
      //   await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
      //   await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
      //   await page.getByRole('combobox').selectOption('monthly');
      //   await page.getByRole('button', { name: 'Get Stock Details' }).click();
    
      //   await page.getByPlaceholder('Enter quantity').click();
      //   await page.getByPlaceholder('Enter quantity').fill('1000000');
        
      //   // Dialog handling setup for multiple dialogs
      //   const dialogMessages = [];
      //   page.on('dialog', async dialog => {
      //     dialogMessages.push(dialog.message()); 
      //     await dialog.dismiss(); 
      //   });
    
      //   await page.getByRole('button', { name: 'Buy' }).click();
    
      //   // Wait for the dialogs to process (if needed)
      //   await page.waitForTimeout(1000); 
    
      // });

      test('BUY test : InValid Credentials', async ({ page }) => {
        await page.goto('http://localhost:3000/html/login.html');
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').fill('123ava');
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill('123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'Investment' }).click();
        await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
        await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
        await page.getByRole('button', { name: 'Get Stock Details' }).click();
        await page.getByPlaceholder('Enter quantity').click();
        await page.getByPlaceholder('Enter quantity').fill('100000');
        await page.getByRole('button', { name: 'Buy', exact: true }).click();
      });
    
     })
    
    
    
    
    
    // /////////////////////////////////////////////////////////////////////////////////////////////
    // // SELL Stock: INVALID Credentials (not enough stock)
    // /////////////////////////////////////////////////////////////////////////////////////////////
    
    // test.describe('SELL stock : Invalid Credentials', () => {
    
      // test('SELL stock : Invalid Credentials', async ({ page }) => {
      //   await page.goto('https://checkmatefinance-bpbzdsdme8eze7cs.southeastasia-01.azurewebsites.net/html/login.html');
      //   await page.getByPlaceholder('Enter username').click();
      //   await page.getByPlaceholder('Enter username').fill('hiarjun');
      //   await page.getByPlaceholder('Enter password').click();
      //   await page.getByPlaceholder('Enter password').fill('123');
      //   await page.getByRole('button', { name: 'Login' }).click();
    
      //   await page.getByRole('link', { name: 'Investment' }).click();
      //   await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
      //   await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
      //   await page.getByRole('combobox').selectOption('monthly');
      //   await page.getByRole('button', { name: 'Get Stock Details' }).click();
    
      //   await page.getByPlaceholder('Enter quantity').click();
      //   await page.getByPlaceholder('Enter quantity').fill('100000000');
        
      //   // Dialog handling setup for multiple dialogs
      //   const dialogMessages = [];
      //   page.on('dialog', async dialog => {
      //     dialogMessages.push(dialog.message()); 
      //     await dialog.dismiss(); 
      //   });
    
      //   await page.getByRole('button', { name: 'Sell' }).click();
    
      //   // Add a buffer to ensure all dialogs are captured
      //   await page.waitForTimeout(1000); // Adjust if necessary
    
      // });


      // /////////////////////////////////////////////////////////////////////////////////////////////
// // SELL Stock: INVALID Credentials (not enough stock)
// /////////////////////////////////////////////////////////////////////////////////////////////

test.describe('SELL stock : Invalid Credentials', () => {
  test('SELL stock : Invalid Credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/html/login.html');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('123ava');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Investment' }).click();
    await page.getByPlaceholder('AAPL, TSLA, MSFT').click();
    await page.getByPlaceholder('AAPL, TSLA, MSFT').fill('AAPL');
    await page.getByRole('button', { name: 'Get Stock Details' }).click();
    await page.getByPlaceholder('Enter quantity').click();
    await page.getByPlaceholder('Enter quantity').fill('10000');

    // Dialog handling setup for multiple dialogs
    // const dialogMessages = [];
    // page.on('dialog', async dialog => {
    //   dialogMessages.push(dialog.message());
    //   await dialog.dismiss();
    // });

    await page.getByRole('button', { name: 'Sell', exact: true }).click();

    // // Wait for dialogs to be captured
    // await page.waitForTimeout(1000); // Adjust if necessary

    // // Assert that the expected dialog message is present
    // expect(dialogMessages).toContain('Failed to complete trade: Insufficient stock quantity to sell');
  });
});

