const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('My first Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 10,
            devtools: false,
               })
        const page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(10000) 
        await page.goto('https://www.instagram.com/')
        await page.waitForSelector('[type="text"]')
        await page.type('[type="text"]',"...",{"delay":100})
        await page.type('[type="password"]',"...",{"delay":100})
        await page.click('[type="submit"]')
        await page.waitFor(5000)
        await page.goto('https://www.instagram.com/p/CKybPy4nu7A/')
        await page.waitForSelector('[aria-label="Добавьте комментарий..."]')
        await page.type('[aria-label="Добавьте комментарий..."]', 'Привет Мир',{"delay":100})
        await page.keyboard.press('Enter',{"delay":10})
        await browser.close()
    })
})
