import './style.css'
import { setTimer } from './components/timer/timer';
import { setCigarretteCount, setMoneyCount, setTimeSavedCount } from './components/stats/moneyCount';
import moneyPig from './assets/imgs/money-pig.png';
import coinSound from './assets/sounds/coin.mp3';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <nav class="flex justify-end w-full">
      <div class="text-xl rounded p-1 px-2 inset-shadow-sm inset-shadow-neutral-900 bg-neutral-700" id="time-timer"></div>
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
       <audio id="myAudio">
          <source src="${coinSound}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
    </div>
    <button id="audio-toggler" class="rounded-full flex place-items-center bg-neutral-400 shadow-2xl absolute bottom-0 right-0 m-2 text-neutral-800 p-2 border h-10 w-10"></button>
  </main>
`;

const timerHtmlElement = document.querySelector('#time-timer');
const moneyCountHtmlElement = document.querySelector('#money-count');
const cigarretteCountHtmlElement = document.querySelector('#cigarrette-count');
const timeSavedHtmlElement = document.querySelector('#timesaved-count');

export const coinSoundHtmlElement: HTMLAudioElement = document.getElementById("myAudio") as HTMLAudioElement;
const btnAudioToggler = document.querySelector('#audio-toggler') as HTMLButtonElement;

const setProperlySoundIcon = (isAllowed: Boolean) => {
  if(isAllowed) {
    btnAudioToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 25 24">
      <rect width="25" height="24" fill="none" />
      <path fill="currentColor" d="M3.78 2.22a.75.75 0 0 0-1.06 1.06l4.158 4.158l-.07.062H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.841c1.451 1.29 3.745.26 3.745-1.681v-3.35l7.47 7.47a.75.75 0 0 0 1.06-1.061zm8.47 10.59v4.85a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19l.348-.31zm0-6.47v2.321l1.5 1.5v-3.82c0-1.942-2.294-2.972-3.745-1.683l-.93.828l1.062 1.062l.865-.768a.75.75 0 0 1 1.248.56m3.249 5.57l1.291 1.291a3.52 3.52 0 0 0-.69-3.551a.75.75 0 0 0-1.115 1.003c.323.358.494.805.514 1.257m2.253 2.253l1.105 1.105c1.379-2.292 1.158-5.405-.664-7.434a.75.75 0 0 0-1.116 1.002c1.289 1.435 1.514 3.628.675 5.327" />
    </svg>`
  } else {
    btnAudioToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" />
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" />
    </svg>`
  }
}

export let playAudioIsAllowed = false;
if(btnAudioToggler) {
  setProperlySoundIcon(playAudioIsAllowed);
  btnAudioToggler.addEventListener('click', () => {
    playAudioIsAllowed = !playAudioIsAllowed;

    setProperlySoundIcon(playAudioIsAllowed);
  })
}

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
