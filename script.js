const Citys = {
            "Capital": [[2400, 4999, 3], [5000, 7199, 3.50], [7200, 8399, 4], [8400, 11999, 5], [12000, 17999, 10], [18000, 23999, 25], [24000, 35999, 35], [36000, 47999,  60], [48000, Infinity, 100]],
            "Grande":  [[2400, 3999, 3], [4000, 5999, 3.50], [6000, 8399, 4], [8400, 11999, 5], [12000, 17999, 15], [18000, 23999, 25], [24000, 35999, 70], [36000, Infinity, 100]],
            "Média":   [[2400, 2999, 3], [3000, 4999, 4], [5000, 9599, 5], [9600, 14399, 10], [14400, 17999, 20], [18000, 23999, 60], [24000, 35999, 60], [36000, Infinity, 100]],
            "Pequena": [[1200, 1999, 2], [2000, 2399, 2.50], [2400, 3599, 3], [3600, 5999, 7], [6000, 9599, 10], [9600, 11999, 12], [12000, 23999, 35], [24000, Infinity, 50]],  
            "Micro":   [[600, 1199, 2],[1200, 1799, 3], [1800, 2999, 4], [3000, 4999, 6], [5000, Infinity, 8]]/**/
         };
const Multiplier = {
            "Multiplicador":   [[-Infinity, -0.99, 0.5], [0, 39.99, 0.75], [40, 44.99, 1], [45, 49.99, 1.25], [50, 69.99, 1.5], [70, 79.99, 2], [80, 89.99, 2.2], [90, 114.99, 2.3], [115, 149.99, 2.5], [150, 299.99, 2.7], [300, Infinity, 3]]
         };
let information = [];

        var button = document.querySelectorAll('.button');
        var command_trigger_add = document.querySelector('#command-trigger-add');
        var command_trigger_commission = document.querySelector('#command-trigger-commission');
        button.forEach(click => { //
            click.addEventListener("click", () => {
                button.forEach(btn => btn.classList.remove("button-click"));
                click.classList.add("button-click");
                typeCity = click.value; //
            });
        });
        
        command_trigger_add.addEventListener("click", () =>{
            command_trigger_add.style.backgroundColor = '#00ff55';
            command_trigger_add.style.color = '#000000'
            command_trigger_add.style.outline = '2px solid black';

            const litragem = Number((document.querySelector('#litragem').value));
            const lucratividade = Number((document.querySelector('#lucratividade').value)).toFixed(2);

            if (typeCity == "Micro" && litragem < 600 || typeCity == "Pequena" && litragem < 1200 || typeCity == "Média" && litragem < 2400 || typeCity == "Grande" && litragem < 2400 || typeCity == "Capital" && litragem < 2400) {
                alert("||ERRO|| Preencha todos os campos corretamente.")
                command_trigger_add.style.backgroundColor = '#FF0309';
                command_trigger_add.style.color = '#FFFFFF';
            } else{

                let faixa = Citys[typeCity].find(f => litragem >= f[0] && litragem <= f[1]);
                let comissao_litro = faixa ? faixa[2] : 0;

                let faixa_mutiplicadora = Multiplier["Multiplicador"].find(m => lucratividade >= m[0] && lucratividade <= m[1]);
                let comissao_multiplicador = (faixa_mutiplicadora ? faixa_mutiplicadora[2] : 1);

                let comissao = comissao_litro * comissao_multiplicador;

                /*if(lucratividade < 0){
                    lucratividade.backgroundColor = 'rgba(255, 0, 0, 0.25)';
                }else if(0 <= lucratividade <= 39.99){
                    lucratividade.backgroundColor = 'rgba(251, 255, 0, 0.25)';
                }else{
                    lucratividade.backgroundColor = 'rgba(68, 255, 0, 0.25)';
                }*/
                
                const tabela = document.querySelector("#tabelaEntradas tbody");
                tabela.innerHTML += `
                    <tr>
                        <td>
                            <textarea></textarea>
                        </td>
                        <td>${typeCity}</td>
                        <td>${litragem} litros</td>
                        <td>${comissao_litro.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</td>
                        <td>x${comissao_multiplicador}</td>
                        <td>${comissao.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</td>
                    </tr>`;
                information.push({comissao});
            }  
        });
        command_trigger_commission.addEventListener("click", () =>{
            command_trigger_commission.style.backgroundColor = '#5482ff';
            command_trigger_commission.style.outline = '2px solid black';
                
            const total_commition = information.reduce((acc, e) => acc + e.comissao, 0);
            document.querySelector("#total_commition").textContent = "Comissão Total: R$ " + total_commition.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
            
        });

/*let vi = window.document.querySelector('input#vina');
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
                    /*Aportes Mensais*//*
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
                    /*Aportes Mensais*//*
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
*/