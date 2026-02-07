import './style.css'
import { setTimer } from './time';

let moneyCount = 0;
const cigarettePerDay = 8;
const packetPrice = 13.5;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="text-8xl" id="timer"></div>
`;

const timerHtmlElement = document.querySelector('#timer')
if(timerHtmlElement) setTimer(timerHtmlElement);