// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var insertAfterImpact = function (newNode, referenceNode) {
  try {
    //code goes here
    console.log('start');
    if (referenceNode.nextSibling) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      console.log('insertBefore');
    } else {
      referenceNode.parentNode.appendChild(newNode);
      console.log('append');
    }
    console.log('end');
  } catch (err) {
    console.warn(err.message);
    //ErrorLogTrace('insertAfterImpact', err.message);
  }
};
var cloneParent = document.getElementById('IMP14');
let sBk = cloneParent.querySelector('#cke_bm_162S');
let eBk = cloneParent.querySelector('#cke_bm_162E');
let Is_S_Bk = Array.from(cloneParent.childNodes).indexOf(sBk);
let Is_E_Bk = Array.from(cloneParent.childNodes).indexOf(eBk);
console.log(Is_S_Bk, Is_E_Bk);
console.log(eBk.parentElement.classList);

if (Is_E_Bk == -1 && eBk.parentElement.parentElement == cloneParent) {
  console.log(true);
  insertAfterImpact(eBk,eBk.parentElement)
}
