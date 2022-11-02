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
        await page.setDefaultNavigationTimeout(20000) 
        
        await page.goto('http://example.com/')
        //await page.waitForXPath('//h1')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length)
        
        expect(title).to.be.a('string', 'Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string', 'Example Domain')
        expect(count).to.equal(2)
        
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.waitForSelector('#searchTerm')
        await page.type('#searchTerm', 'Hello World')
        await page.keyboard.press('Enter', {delay: 10})
        await page.waitFor(5000)

        /*await page.goto('http://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Almaz', {delay: 0 })
        await page.click('#tried-test-cafe', {clickCount: 1 })
        await page.select('#preferred-interface', 'JavaScript API')
        const message = 'Привет Мир'
        await page.type('#comments', message)
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')
        await page.waitFor(5000)*/
        //await page.goBack()
        //await page.goForward()
        //await page.reload()
        //await page.waitFor(3000)
        //await page.waitForSelector('h1')
        await browser.close()
    })
})
