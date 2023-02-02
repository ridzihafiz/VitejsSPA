import PageErr from './src/views/404';
import About from './src/views/About';
import Gallery from './src/views/Gallery';
import Home from './src/views/Home';
import './style.css';

let app = document.getElementById('app');

let page = document.location.pathname;
/* 
app.innerHTML = `
  <div class="container">
    <h1>Hi Rid this is SPA </h1>
    <h3> ${page.replace('/', '')} </h3>
  </div>
`; */

switch (page) {
  case '/':
    app.innerHTML = Home();
    break;

  case '/about':
    app.innerHTML = About();
    break;

  case '/gallery':
    app.innerHTML = Gallery();
    break;

  default:
    app.innerHTML = PageErr();
}
