import htmlContentPos from './position.html?raw';
import './position.css'

import htmlContentSicky from './sticky.html?raw';
import './sticky.css'

import htmlContentStack from './stacking.html?raw';
import './stacking.css'

document.querySelector<HTMLDivElement>('#sticky')!.innerHTML = htmlContentSicky;
document.querySelector<HTMLDivElement>('#position')!.innerHTML = htmlContentPos;
document.querySelector<HTMLDivElement>('#stacking')!.innerHTML = htmlContentStack;

// document.querySelector('#app').innerHTML = `
//   <div>
//     raw html content
//   </div>
// `
