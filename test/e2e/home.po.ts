import { Locator, Page, Response } from '@playwright/test';

export class Home {
    constructor(private _page: Page) {}

    public getHeadline(): Locator {
        return this._page.locator('cco-app h1');
    }

    public getSvgTitle(): Locator {
        return this._page.locator('cco-app svg title');
    }

    public navigateTo(): Promise<null | Response> {
        return this._page.goto('./');
    }
}
