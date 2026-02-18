import { setTimer } from '../components/timer/timer';
import { setCigarretteCount, setMoneyCount, setTimeSavedCount, updateMoneyCount } from '../components/stats/moneyCount';
import { renderSoundButton, getCoinAudioPlayer, playSound } from '../components/sound/sound';
import goldCoin from "../assets/imgs/coin_32.png";

export const render = (root: HTMLDivElement) => {
  root.innerHTML = `
    <header>
        <nav class="flex items-center w-full">
            <div class="flex-1 text-2xl pixelify-sans flex items-center gap-1">
                <img src="${goldCoin}" alt="gold coin with a pixel art style who shine on top left" />
                <p id="session-count">0</p>
            </div>
            <div class="text-xl rounded p-1 px-2 inset-shadow-sm inset-shadow-neutral-900 bg-neutral-700" id="time-timer"></div>
        </nav>
    </header>
    <main class="flex h-full jusitfy-center items-center">
        <div class="flex flex-col items-center w-full">
        <h2 id="money-count" class="gravitas-one-regular text-6xl transition-color duration-500"></h2>
        <div class="flex gap-4 justify-center opacity-75"> 
            <span>
            <h3 id="cigarrette-count" class="flex items-center text-lg gap-2">
            </h3>
            </span>
            |
            <span>
            <h3 id="timesaved-count" class="flex items-center text-lg gap-2">
            </h3>
            </span>
        </div>
        <div class="piggy-container"></div>
        </div>
    </main>
    `;
    renderSoundButton(root)
    return bindEvents(root);
}

const bindEvents = (root: HTMLDivElement) => {
    const timerHtmlElement = root.querySelector('#time-timer');
    const moneyCountHtmlElement = root.querySelector('#money-count');
    const cigarretteCountHtmlElement = root.querySelector('#cigarrette-count');
    const timeSavedHtmlElement = root.querySelector('#timesaved-count');
    
    if(timerHtmlElement) {
        setTimer(timerHtmlElement)
    }
    
    if(moneyCountHtmlElement) {
        setMoneyCount(moneyCountHtmlElement);
    }
    
    if(cigarretteCountHtmlElement && timeSavedHtmlElement) {
      setCigarretteCount(cigarretteCountHtmlElement);
      setTimeSavedCount(timeSavedHtmlElement);
    }

    initMoneyUpdaterInterval(root)
}

let count = 0;
const initMoneyUpdaterInterval = (root: Element, interval = 1000 * 60 * 3) => {    
    setInterval(() => {
        const moneyCountHtmlElement = root.querySelector('#money-count');
        console.log(moneyCountHtmlElement)
        if(moneyCountHtmlElement) {
            updateMoneyCount(moneyCountHtmlElement);
        }
        
        const sessionCount = root.querySelector('#session-count');
        if(sessionCount) {
            count++
            sessionCount.innerHTML = `${count}`;
        }
    
        const coinAudioPlayer = getCoinAudioPlayer();
        if(coinAudioPlayer) {
            playSound(coinAudioPlayer)
        }
    }, interval)
}