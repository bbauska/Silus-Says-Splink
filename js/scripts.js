/* /js/scripts.js in github Silus-Counter making silus-counter-4.bauska.org */
/* Jan 1, 2026 = xx,000 */
let counter = 0;
/* zz,000 Jan 1, 2026
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
