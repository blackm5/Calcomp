let vi = window.document.querySelector('input#vina');
let vm = window.document.querySelector('input#vmna');
let tj = window.document.querySelector('input#tjna');
let pna = window.document.querySelector('input#pna');
let one = window.document.querySelector('article#sone');

var start = window.document.querySelector('input#star')
start.addEventListener('click', clic)
function clic() {
    
        one.innerHTML = ''
        var o = document.createElement('p');
        o.innerHTML = 
        `
            Valor Final: <strong>${((Number(vi.value)+(Number(vm.value)*/**/((((1+(Number(tj.value)/100))**Number(pna.value))-1)/(Number(tj.value)/100))*((1+(Number(tj.value)/100))**1)))).toFixed(2).replace('.',',')}$</strong><br>
            Valor investido: <strong>${((Number(vi.value)+(Number(vm.value)*Number(pna.value)))).toFixed(2).replace('.',',')}$</strong><br>
            Total em Juros: <strong>${((((Number(vi.value)+(Number(vm.value)*/**/((((1+(Number(tj.value)/100))**Number(pna.value))-1)/(Number(tj.value)/100))*((1+(Number(tj.value)/100))**1))))-(Number(vi.value)+(Number(vm.value)*Number(pna.value))))).toFixed(2).replace('.',',')}$</strong><br>
        `
        one.appendChild(o)
    
}