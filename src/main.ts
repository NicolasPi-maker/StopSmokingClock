import './style.css'
import { setTimer } from './components/timer/timer';
import { setCigarretteCount, setMoneyCount, setTimeSavedCount } from './components/stats/moneyCount';
import moneyPig from '../public/money-pig.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <nav class="flex justify-end w-full">
      <div class="text-xl rounded p-1 px-2 border bg-neutral-700" id="time-timer"></div>
    </nav>
  </header>
  <main class="p-4 justify-centerflex">
    <div class="flex flex-col items-center">
      <h2 id="money-count" class="gravitas-one-regular text-6xl transition-color duration-500"></h2>
      <div class="flex gap-4 justify-center opacity-75"> 
        <span><h3 id="cigarrette-count" class="flex items-center text-lg gap-2"></h3></span>
        |
        <span><h3 id="timesaved-count" class="flex items-center text-lg gap-2"></h3></span>
      </div>
       <img src="${moneyPig}" alt="pink money pig with a gold coin overhead" width="200px" heigth="200px" />
    </div>
  </main>
`;

const timerHtmlElement = document.querySelector('#time-timer');
const moneyCountHtmlElement = document.querySelector('#money-count');
const cigarretteCountHtmlElement = document.querySelector('#cigarrette-count');
const timeSavedHtmlElement = document.querySelector('#timesaved-count');

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
