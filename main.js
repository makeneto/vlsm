function calculateSubnetMask() {
    var ligados, desligados, hosts, resto;
    const ip = document.getElementById('ip').value;
    let pcs = parseInt(document.getElementById('pcs').value);

    function validateIP(ip) {
        const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipPattern.test(ip);
    }

    if (ip == '' && isNaN(pcs)){
        mascara.innerHTML = '<p class="erro">Por favor, Preencha os campos☝🏽.</p>';
        document.querySelector('.striped').innerHTML = '';
        document.getElementById('numPcs').innerHTML = '';
        document.getElementById('qtdPcs').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('numHosts').innerHTML = '';
        document.getElementById('hosts').innerHTML = '';
        document.getElementById('numDisper').innerHTML = '';
        document.getElementById('disper').innerHTML = '';
    }

    else if (ip == ''){
        mascara.innerHTML = '<p class="erro">Por favor, Introduza o endereço IP☝🏽.</p>';
        document.querySelector('.striped').innerHTML = '';
        document.getElementById('numPcs').innerHTML = '';
        document.getElementById('qtdPcs').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('numHosts').innerHTML = '';
        document.getElementById('hosts').innerHTML = '';
        document.getElementById('numDisper').innerHTML = '';
        document.getElementById('disper').innerHTML = '';
    }
    else if (!validateIP(ip)) {
        mascara.innerHTML = '<p class="erro">⚠️Endereço IP inválido!</p>';
        document.querySelector('.striped').innerHTML = '';
        document.getElementById('numPcs').innerHTML = '';
        document.getElementById('qtdPcs').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('numHosts').innerHTML = '';
        document.getElementById('hosts').innerHTML = '';
        document.getElementById('numDisper').innerHTML = '';
        document.getElementById('disper').innerHTML = '';
    }

    else if(isNaN(pcs)){
        mascara.innerHTML = '<p class="erro">Por favor, Introduza o Número de PCs☝🏽.</p>';
        document.querySelector('.striped').innerHTML = '';
        document.getElementById('numPcs').innerHTML = '';
        document.getElementById('qtdPcs').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('numHosts').innerHTML = '';
        document.getElementById('hosts').innerHTML = '';
        document.getElementById('numDisper').innerHTML = '';
        document.getElementById('disper').innerHTML = '';
    }

    else if (pcs < 2 || pcs > 126) {
        mascara.innerHTML = '<p class="erro">⚠️Coloque um número de PCs válido e dentro do intervalo de 2 a 126.</p>';
        document.querySelector('.striped').innerHTML = '';
        document.getElementById('numPcs').innerHTML = '';
        document.getElementById('qtdPcs').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('numHosts').innerHTML = '';
        document.getElementById('hosts').innerHTML = '';
        document.getElementById('numDisper').innerHTML = '';
        document.getElementById('disper').innerHTML = '';
    }

    else {
        if (pcs == 2) {
            ligados = 4 + 8 + 16 + 32 + 64 + 128;
            desligados = 2;
            prefixo = 30;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 4) {
            ligados = 8 + 16 + 32 + 64 + 128;
            desligados = 3;
            prefixo = 29;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }

        else if (pcs == 8 || pcs == 15) {
            ligados = 16 + 32 + 64 + 128;
            desligados = 4;
            prefixo = 28;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 16) {
            ligados = 32 + 64 + 128;
            desligados = 5;
            prefixo = 27;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 32) {
            ligados = 64 + 128;
            desligados = 6;
            prefixo = 26;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 64) {
            ligados = 128;
            desligados = 7;
            prefixo = 25;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 126) {
            ligados = 128;
            prefixo = 25;
            desligados = 7;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';

            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }

        //--------------- End--------------//

        //--------------Normal----------------//

        else if (pcs < 128 && pcs > 64) {
            ligados = 128;
            desligados = 7;
            prefixo = 25;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs < 64 && pcs > 32) {
            ligados = 64 + 128;
            desligados = 6;
            prefixo = 26;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs < 32 && pcs > 16) {
            ligados = 32 + 64 + 128;
            desligados = 5;
            prefixo = 27;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs < 16 && pcs > 8) {
            ligados = 16 + 32 + 64 + 128;
            desligados = 4;
            prefixo = 28;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs < 8 && pcs > 4) {
            ligados = 8 + 16 + 32 + 64 + 128;
            desligados = 3;
            prefixo = 29;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs < 4 && pcs > 2) {
            ligados = 4 + 8 + 16 + 32 + 64 + 128;
            desligados = 2;
            prefixo = 30;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs < 2 && pcs > 1) {
            ligados = 2 + 4 + 8 + 16 + 32 + 64 + 128;
            desligados = 1;
            prefixo = 31;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }

        //-----------Impar(3, 7, 15, 31, 63)----------//

        if (pcs == 3) {
            ligados = 8 + 16 + 32 + 64 + 128;
            desligados = 3;
            prefixo = 29;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 7) {
            ligados = 16 + 32 + 64 + 128;
            desligados = 4;
            prefixo = 28;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 15) {
            ligados = 32 + 64 + 128;
            desligados = 5;
            prefixo = 27;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 31) {
            ligados = 64 + 128;
            desligados = 6;
            prefixo = 26;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
        else if (pcs == 63) {
            ligados = 128;
            desligados = 7;
            prefixo = 25;
            hosts = (Math.pow(2, desligados) - 2);
            resto = hosts - pcs;
            disperdicio = Number(resto);
            const textResultado = document.querySelector('.striped');

            textResultado.style.display = 'flex';
            document.getElementById('numPcs').innerHTML = 'Número de PCs';
            document.getElementById('qtdPcs').innerHTML = pcs;
            document.getElementById('mascara').innerHTML = 'Máscara de Sub-rede';
            document.getElementById('result').innerHTML = `255.255.255.${ligados}/${prefixo}`;
            document.getElementById('numHosts').innerHTML = 'Número de Hosts';
            document.getElementById('hosts').innerHTML = hosts;
            document.getElementById('numDisper').innerHTML = 'Disperdício';
            document.getElementById('disper').innerHTML = disperdicio;
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

window.addEventListener("offline", (event) => {
    const estado = document.getElementById('card');
    const calculator = document.querySelector('.wrapper');
    calculator.style.display = 'none';

    console.log("Sem Internet");   
    console.log(event);
    
    estado.style.display = 'block';
})

window.addEventListener("online", (event) => {
    const estado = document.getElementById('card');
    const calculator = document.querySelector('.wrapper');
    calculator.style.display = 'block';

    console.log("Com Internet");   
    console.log(event);
    
    estado.style.display = 'none';
})

function clearFields() {
    document.getElementById('ip').value = '';
    document.getElementById('pcs').value = '';
    document.querySelector('.striped').innerHTML = '';
    document.getElementById('numPcs').innerHTML = '';
    document.getElementById('qtdPcs').innerHTML = '';
    document.getElementById('mascara').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('numHosts').innerHTML = '';
    document.getElementById('hosts').innerHTML = '';
    document.getElementById('numDisper').innerHTML = '';
    document.getElementById('disper').innerHTML = '';
}
