const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  console.log('Navigating to the homepage...');
  await page.goto('http://localhost:3000');
});

// Referral system tests
test('Testing for failure: Account created after 5 hours denial', async ({ page }) => {
  console.log('Starting test: Account created after 5 hours denial');
  await page.goto('http://localhost:3000/html/login.html');
  console.log('Navigated to login page');

  await page.getByLabel('Username').fill('hiarjun');
  await page.getByLabel('Password').fill('123');
  console.log('Filled in username and password');

  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked the login button');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Referral' }).click();
  console.log('Navigated to the referral page');

  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message()).toContain('You cannot use the referral system after 5 hours of account creation!');
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Enter' }).click();
  console.log('Clicked the Enter button on the referral page');
});

test('Testing for success: Valid referral link entry', async ({ page }) => {
  console.log('Starting test: Valid referral link entry');
  await page.goto('http://localhost:3000/html/login.html');
  console.log('Navigated to login page');

  await page.getByLabel('Username').fill('ws');
  await page.getByLabel('Password').fill('123');
  console.log('Filled in username and password');

  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked the login button');

  await page.getByRole('link', { name: 'Referral' }).click();
  console.log('Navigated to the referral page');

  await page.locator('#receivedReferralLink').fill('https://www.fintech.com/referral/t1a19kg8b');
  console.log('Filled in the referral link');

  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message()).toContain('Referral link entered successfully!');
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Enter' }).click();
  console.log('Clicked the Enter button on the referral page');
});

test('Testing for success: Redeeming 5 rewards with sufficient money', async ({ page }) => {
  console.log('Starting test: Redeeming 5 rewards with sufficient money');
  await page.goto('http://localhost:3000/html/login.html');
  console.log('Navigated to login page');

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('rewardtest');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('321');
  console.log('Filled in username and password');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked the login button');

  await page.getByRole('link', { name: 'Rewards' }).click();
  console.log('Navigated to the rewards page');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $50000' }).click();
  console.log('Clicked Redeem for $50000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $25000' }).click();
  console.log('Clicked Redeem for $25000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $10000' }).first().click();
  console.log('Clicked Redeem for $10000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $20000' }).first().click();
  console.log('Clicked Redeem for $20000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
});

test('Testing for failure: Not enough money to redeem rewards', async ({ page }) => {
  console.log('Starting test: Not enough money to redeem rewards');
  await page.goto('http://localhost:3000/html/login.html');
  console.log('Navigated to login page');

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('nomoneytest');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('321');
  console.log('Filled in username and password');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked the login button');

  await page.getByRole('link', { name: 'Rewards' }).click();
  console.log('Navigated to the rewards page');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $50000' }).click();
  console.log('Clicked Redeem for $50000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $15000' }).first().click();
  console.log('Clicked Redeem for $15000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $20000' }).nth(1).click();
  console.log('Clicked Redeem for $20000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'View My Reward History' }).click();
  console.log('Clicked View My Reward History');
});

test('Testing for success: Spin the wheel and redeeming more rewards', async ({ page }) => {
  console.log('Starting test: Spin the wheel and redeeming more rewards');
  await page.goto('http://localhost:3000/html/login.html');
  console.log('Navigated to login page');

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('rewardtest');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('321');
  console.log('Filled in username and password');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked the login button');

  await page.getByRole('link', { name: 'Rewards' }).click();
  console.log('Navigated to the rewards page');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $20000' }).nth(2).click();
  console.log('Clicked Redeem for $20000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $15000' }).nth(1).click();
  console.log('Clicked Redeem for $15000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $10000' }).nth(1).click();
  console.log('Clicked Redeem for $10000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $20000' }).nth(1).click();
  console.log('Clicked Redeem for $20000');

  await page.getByRole('button', { name: 'Spin for $' }).click();
  console.log('Clicked Spin for $');
});

test('Testing for failure: No money to spin the wheel and redeem reward', async ({ page }) => {
  console.log('Starting test: No money to spin the wheel and redeem reward');
  await page.goto('http://localhost:3000/html/login.html');
  console.log('Navigated to login page');

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('nomoneytest');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('321');
  console.log('Filled in username and password');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked the login button');

  await page.getByRole('link', { name: 'Rewards' }).click();
  console.log('Navigated to the rewards page');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $50000' }).click();
  console.log('Clicked Redeem for $50000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Redeem for $25000' }).click();
  console.log('Clicked Redeem for $25000');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Spin for $' }).click();
  console.log('Clicked Spin for $');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'View My Reward History' }).click();
  console.log('Clicked View My Reward History');
});