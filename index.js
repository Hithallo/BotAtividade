const puppeteer = require('puppeteer');
const { installMouseHelper } = require('../BotAtividade/install-mouse-helper');

(async () => {
    const sleep = async(milliseconds) => { 
        const date = Date.now(); 
        let currentDate = null; 
        do { 
            currentDate = Date.now(); 
            } 
        while (currentDate - date < milliseconds); 
    } 

    const browser = await puppeteer.launch({headless:false, defaultViewport: { width: 1360, height: 768 }, args: ['--start-fullscreen'], isLandscape: true});
    const page = await browser.newPage();
    await installMouseHelper(page); 
    await Promise.all([ 
        page.goto('https://test.chatbot.reload.co/quiz_bot_tester'), 
        page.waitForNavigation({ waitUntil: 'networkidle2' }), 
        page.waitForSelector('[alt=Vamos') ]); 
        await page.waitForSelector('[class="sc-fzoyAV ksfGFn"]'); 
        await page.click('[class="sc-fzoyAV ksfGFn"]'); //Inicia Quiz
    
        await page.waitForSelector('[class="sc-pJurq cTjcEC"]'); 
        await page.click('[class="sc-pJurq cTjcEC"]'); //Aceita termos

        await page.waitForSelector('[class="sc-pJUVA gaqhQz"]'); 
        sleep(1000) 
        await page.mouse.click(427,354); //Clica em Performance
        await page.mouse.click(253,378); //Clica em Vitalidade
        await page.mouse.click(1203,362); //Clica em Digestão
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        await page.waitForSelector('[class="sc-qYsuA kGvpfs"]'); //Clica no Sexo
        await page.click('[class="sc-qYsuA kGvpfs"]'); 

        await page.waitForSelector('[value="Madre de Deus, Bahia, Brazil"]'); 
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo
            
        sleep(1000); 
        await page.mouse.click(569,330); //Digita idade
        await page.mouse.click(791,427); 
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        sleep(1000); 
        await page.mouse.click(466,390); //Qualquer altura
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo


})();