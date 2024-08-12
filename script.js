let vi = window.document.querySelector('input#vina');
let vm = window.document.querySelector('input#vmna');
let tj = window.document.querySelector('input#tjna');
let pna = window.document.querySelector('input#pna');
let one = window.document.querySelector('article#sone');
var start = window.document.querySelector('input#star');
start.addEventListener('click', clic);
function clic() {
        one.innerHTML = ''
        var o = document.createElement('p');
        o.innerHTML = 
        `
        <span id="vf">
            Valor Final: 
                <strong>
                    ${((Number(vi.value)*((1+(Number(tj.value)/100))**Number(pna.value)))+
                    /*Aportes Mensais*/
                    ((Number(vm.value)*(((1+(Number(tj.value)/100))**Number(pna.value))-1))/(Number(tj.value)/100))
                    ).toFixed(2).replace('.',',')}$
                </strong><br>
        </span>
        <span id="ti">
            Valor investido: 
                <strong>
                    ${((Number(vi.value)+(Number(vm.value)*Number(pna.value)))).toFixed(2).replace('.',',')}$
                </strong><br>
        </span>
        <span id="tj">
            Total em Juros: 
                <strong>
                    ${
                    (((Number(vi.value)*((1+(Number(tj.value)/100))**Number(pna.value)))+
                    /*Aportes Mensais*/
                    ((Number(vm.value)*(((1+(Number(tj.value)/100))**Number(pna.value))-1))/(Number(tj.value)/100))
                    )-((Number(vi.value)+(Number(vm.value)*Number(pna.value))))).toFixed(2).replace('.',',')}
                </strong><br>
        </span>
        `
        one.appendChild(o)
}
let an = window.document.querySelector('input#ano');
var cha = window.document.querySelector('input#cal');
let concl = window.document.querySelector('aside#con');
cha.addEventListener('click', cli);
function cli() {
    concl.innerHTML = ''
    var c = document.createElement('p');
    c.innerHTML = 
        `${Number(an.value)*12}`
    concl.appendChild(c)
}