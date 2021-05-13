import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { bgPage } from './views/bulgarian.js';
import { enPage } from './views/english.js';
import { romPage } from './views/romanian.js';

showLanguges();

const main = document.querySelector('main');

page('/bulgarianPage', decorator, bgPage);
page('/englishPage', decorator, enPage);
page('/romanianPage', decorator, romPage);

page.start();

function decorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}

function showLanguges() {
    const languageBtn = document.querySelector('.dropBTN');
    languageBtn.addEventListener('mouseover', onClick);
    
    function onClick() {

        const div = document.querySelector('.dropdown-content');
        let isVisible = div.style.display == 'block';
        div.style.display = isVisible ? 'none' : 'block';
    }
}
