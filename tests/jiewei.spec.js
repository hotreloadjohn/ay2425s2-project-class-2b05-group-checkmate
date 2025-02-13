// import { test, expect } from '@playwright/test';

// // Generate a unique username and email for each test
// const randomNum = Math.floor(Math.random() * 100000); // Random number to ensure uniqueness
// const username = `testUser${randomNum}`;
// const email = `testUser${randomNum}@gmail.com`;

// test.setTimeout(60000); // Extend timeout to 60 seconds

// test.beforeEach(async ({ page }) => {
//  await page.goto('http://localhost:3000');
// });

// test('User registration and login flow (bypassing CAPTCHA)', async ({ page }) => {
//  // Click on "Login" and then "Register"
//  await page.goto('https://checkmatefinance-bpbzdsdme8eze7cs.southeastasia-01.azurewebsites.net/html/login.html');
//  await page.getByRole('link', { name: 'Register' }).click();

//  // Fill in registration details
//  await page.getByPlaceholder('Enter username').fill(username);
//  await page.getByPlaceholder('Enter email').fill(email);
//  await page.getByPlaceholder('Enter password', { exact: true }).fill('Test@123');
//  await page.getByPlaceholder('Re-enter password').fill('Test@123');

//  // Submit the registration form
//  await page.getByRole('button', { name: 'Sign Up' }).click();

//  // 🚀 **Check if registration was successful**
//  const registrationSuccess = await page.locator('text=Registration successful').isVisible();
//  if (!registrationSuccess) {
//    console.log(`❌ Registration failed for ${username} (${email}). Capturing screenshot...`);
//    await page.screenshot({ path: 'registration_failed.png', fullPage: true });
//    throw new Error("Registration failed. Check registration_failed.png");
//  }

//  // Wait for login page to load
//  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible({ timeout: 60000 });

//  // Fill in login details
//  await page.getByLabel('Username').fill(username);
//  await page.getByLabel('Password').fill('Test@123');
//  // **Bypass CAPTCHA in test mode**
//  await page.evaluate(() => {
//    document.querySelector('#captchaInput').value = 'TEST_BYPASS';
//  });
//  // Click login button
//  await page.getByRole('button', { name: 'Login' }).click();
//  // 🚀 **Debugging: Check for Login Success**
//  const loginSuccess = await page.locator('text=Login successful').isVisible();
//  if (!loginSuccess) {
//    console.log(`❌ Login failed for ${username}. Capturing screenshot...`);
//    await page.screenshot({ path: 'login_failed.png', fullPage: true });
//    throw new Error("Login failed. Check login_failed.png");
//  }

// // Wait for home page after login
//  await page.waitForURL('http://localhost:3000/home', { timeout: 60000 });

//  // Verify logout button exists
//  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

//  // Click logout
//  await page.getByRole('link', { name: 'Logout' }).click();
//  // Ensure user is redirected back to login page
// await page.waitForURL('http://localhost:3000/login', { timeout: 60000 });
// });