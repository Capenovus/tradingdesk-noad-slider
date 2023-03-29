// ==UserScript==
// @name         [tradingdesk] Remove AD Slider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tradingdesk.finanzen.net/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=finanzen.net
// @grant        unsafeWindow
// ==/UserScript==

function waitForElm(selector) {
    return new Promise(resolve => {
        var d = unsafeWindow.document;
        if (d.querySelector(selector)) {
            return resolve(d.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (d.querySelector(selector)) {
                resolve(d.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(d.body, {
            childList: true,
            subtree: true
        });
    });
}

function my_func()
{
    try
    {
        waitForElm('.slide-aside').then((e) => {
            e.innerHTML = '';
        });
    }
    catch (zError)
    {
        console.log(zError);
    }
}

window.addEventListener ("load", my_func, false);