// ==UserScript==
// @name         s0urce.io-redbinary-theme-vscriptz
// @namespace    http://tampermonkey.net/
// @version      1.0.9
// @description  Modify s0urce.io to have a Red Binary Theme.
// @author       VScriptz
// @match        https://s0urce.io/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // Add custom CSS to modify background image and element styles
    GM_addStyle(`
        /* Define custom CSS variables */
        :root {
            --color-terminal: #A50000;
            --color-midgreen: #A50000;
        }

        /* Modify background image */
        body {
            background-image: url(https://imgur.com/skoEB66.png) !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            background-position: center !important;
        }

        /* Modify styles for elements with class .green.svelte-ec9kqa */
        .green.svelte-ec9kqa {
            background: linear-gradient(200deg, #A50000 0%, #A50000 100%) !important;
            border: 1px solid #A50000 !important;
        }

        /* Modify border color for elements with class .window-selected.svelte-1hjm43z */
        .window-selected.svelte-1hjm43z {
            border-color: #A50000 !important;
        }

        /* Modify border style for elements with class .window.svelte-1hjm43z */
        .window.svelte-1hjm43z {
            border: 2px solid #A50000 !important;
        }

        /* Modify height of specific div */
        div[ondragover="return true"][draggable="true"][style="position: relative; width: 154.8px; height: 86px; font-size: 16px; float: left;"] {
            height: 86px !important;
        }
    `);

    // Update Spotify playlist iframe src using JavaScript
    setInterval(() => {
        const iframe = document.querySelector('.window-content.svelte-1hjm43z iframe');
        if (iframe && iframe.src !== "https://open.spotify.com/embed/playlist/4nngjhtJEKEnZSdP8yW8PZ?utm_source=generator&theme=0") {
            iframe.src = "https://open.spotify.com/embed/playlist/4nngjhtJEKEnZSdP8yW8PZ?utm_source=generator&theme=0";
        }
    }, 1000); // Check every 1 second
})();
