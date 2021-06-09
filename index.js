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
        sleep(500)
        await page.mouse.click(156,378); //Clica em Vitalidade
        sleep(500)
        await page.mouse.click(1203,362); //Clica em Digestão
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        await page.waitForSelector('[class="sc-qYsuA kGvpfs"]'); //Clica no Sexo
        await page.click('[class="sc-qYsuA kGvpfs"]'); 

        await page.waitForSelector('[value="Madre de Deus, Bahia, Brazil"]'); 
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo
            
        sleep(1000)
        await page.mouse.click(569,330); //Digita idade
        await page.mouse.click(791,427); 
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        sleep(1000)
        await page.mouse.click(466,390); //Qualquer altura
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        sleep(1000)
        await page.mouse.click(675,250); //Clica em Mantém Constante

        await page.waitForSelector('[class="sc-pHIdM FLUZt"]');
        sleep(1000)
        await page.mouse.click(494,378); //Clica em raramente

        await page.waitForSelector('[class="sc-qWgaf hUwOjB"]');
        sleep(1000)
        await page.mouse.click(611,234); //Clica em Não

        await page.waitForSelector('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]');
        sleep(1000)
        await page.mouse.click(683,575); //Passa pelo peso
        sleep(500)
        await page.mouse.click(683,575); //Passa pelo cardio
        sleep(500)
        await page.mouse.click(683,575); //Passa pelo sprint
        sleep(500)
        await page.mouse.click(683,575); //Passa pelo alongamento

        sleep(2000)
        await page.mouse.click(682,517); //Clica em 8 horas de sono
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        await page.waitForSelector('[class="sc-oUbqx duufyi"]');
        sleep(1000)
        await page.mouse.click(490,395); //Clica em satisfeito

        await page.waitForSelector('[class="sc-oUoif gsebta isNextButton"]');
        sleep(1000) 
        await page.click('[class="sc-oUoif gsebta isNextButton"]'); //Passa para o proximo

        await page.waitForSelector('[class="sc-ptBBy kpuSv"]'); 
        sleep(1000)
        await page.mouse.click(596,509); //passa por problemas relacionados a sono
        sleep(500)
        await page.mouse.click(596,509);
        sleep(500)
        await page.mouse.click(596,509);
        sleep(500)
        await page.mouse.click(596,509);
        sleep(500)
        await page.mouse.click(596,509);

        await page.waitForSelector('[class="sc-pHIdM FLUZt"]');
        sleep(1000)
        await page.mouse.click(773,382); // clica em esta bem

        await page.waitForSelector('[class="sc-pHIdM FLUZt"]');
        sleep(1000)
        await page.mouse.click(780,354); //clica em ok

        await page.waitForSelector('[class="sc-pTTZH jbrDtF"]');
        sleep(1000)
        await page.mouse.click(600,563); //clica em não
        sleep(500)
        await page.mouse.click(600,563); //clica em não
        sleep(500)
        await page.mouse.click(600,563); //clica em não
        sleep(500)
        await page.mouse.click(600,563); //clica em não
        
        await page.waitForSelector('[class="sc-pTTZH jbrDtF"]');
        sleep(1000)
        await page.mouse.click(598,561); //clica em não

        await page.waitForSelector('[class="sc-qYhdC dmpRVY"]');
        sleep(1000)
        await page.mouse.click(600,503); //clica em não
        
})();