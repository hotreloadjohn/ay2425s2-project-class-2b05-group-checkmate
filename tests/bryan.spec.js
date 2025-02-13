const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});
// Drag and drop tests
test('Bryan: Drag and Drop: Invalid Category', async ({ page }) => {
    await page.goto('http://localhost:3000/html/login.html');
    await page.getByLabel('Username').fill('hiarjun');
    await page.getByLabel('Password').fill('123');
  



  
    await page.getByRole('button', { name: 'Login' }).click();
  
    const draggableTask = page.locator('div.task[draggable="true"][data-id="1"]');
    const targetList = page.locator('div.task-list#featured-list');
  
    await draggableTask.dragTo(targetList);
  });
  
  test('Bryan: Drag and Drop: Valid Category', async ({ page }) => {
    await page.goto('http://localhost:3000/html/login.html');
    await page.getByLabel('Username').fill('hiarjun');
    await page.getByLabel('Password').fill('123');
  
    page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
  
    await page.getByRole('button', { name: 'Login' }).click();
  
    const draggableTask = page.locator('div.task[draggable="true"][data-id="1"]');
    const targetList1 = page.locator('div.task-list#bookmarks-list');
    await draggableTask.dragTo(targetList1);
  
    const targetList2 = page.locator('div.task-list#hotAndTrending-list');
    await draggableTask.dragTo(targetList2);
  });