import { render } from './pages/piggy-bank';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app');

const renderByRoute = (route: String, element: HTMLDivElement) => {
  switch(route) {
    case "/":
      return render(element);
    default:
      return render(element);
  }
}

const getRoute = () => {
  return window.location.pathname;
}

if(app) {
  renderByRoute(getRoute(), app);
}