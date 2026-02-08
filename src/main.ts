import './style.css'
import { setTimer } from './components/timer/timer';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <nav class="flex justify-end w-full">
      <div class="text-xl rounded p-1 px-2 border bg-neutral-700" id="time-timer"></div>
    </nav>
  </header>
  <main>

  </main>
`;

const timerHtmlElement = document.querySelector('#time-timer')
if(timerHtmlElement) setTimer(timerHtmlElement);