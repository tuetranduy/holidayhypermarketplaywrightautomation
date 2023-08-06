export const BasePage = class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async openUrl(appUrl) {
        await this.page.goto(config.use[appUrl], { waitUntil: "domcontentloaded" });
    }

    async enterTxt(element, text) {
        await this.page.waitForSelector(element);
        await this.page.fill(element, text);
    }

    async type(element, text) {
        await this.page.waitForSelector(element);
        await this.page.type(element, text, { delay: 250 })
    }

    async clickOnElement(element) {
        await this.page.waitForSelector(element);
        await this.page.click(element);
    }

    async getText(element) {
        await this.page.waitForSelector(element);
        return this.page.textContent(element)
    }

    async hoverOnElementByLocator(element) {
        await this.page.waitForSelector(element);
        await this.page.hover(element)
    }
}