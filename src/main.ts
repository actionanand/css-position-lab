import htmlContent from './position.html?raw';
import './style.css'

document.querySelector<HTMLDivElement>('.parent')!.innerHTML = htmlContent;

// document.querySelector('.parent').innerHTML = `
//   <div>
//     raw html content
//   </div>
// `
