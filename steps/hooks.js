const { After, AfterStep, Before, Status } = require("@cucumber/cucumber");

let page;
let context;
let browser;

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false, args: ["--start-maximized"] });
        context = await browser.newContext({ viewport: null });
        page = await context.newPage();
    } catch (error) {
        throw new Error(`Unable to load page ${error}`);
    }

    return page;
});

AfterStep(async function (scenario) {
    const options = {
        path: `reports/screenshots/${scenario.pickle.name}.png`,
        fullPage: true
    }

    if (scenario.result.status === Status.FAILED) {
        this.attach(await page.screenshot(options), 'image/png');
    }
})

After(async function () {
    await browser.close();
});

export { page, browser, context }