import '../css/global.css';
import '../scss/global.scss';

import _config from '../../_config.cjs';

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title');
  // const main = document.querySelector('#main');
  title.textContent = _config.title;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/service-worker.js');
      console.log('SW registered');
    } catch (registrationError) {
      console.log('SW registration failed:', registrationError);
    }
  });
}
