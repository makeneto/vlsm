function calcular(){
    var ligados, prefixo, desligados, hosts, resto;

    var pcs = prompt("Digite o número de Pcs: ");
    pcs = Number(pcs);
    document.getElementById("npc").innerText = pcs;

    if (pcs >= 128) {
        ligados = 128;
        prefixo = 25;
        desligados = 7;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 128 && pcs > 64) {
        ligados = 128;
        desligados = 7;
        prefixo = 25;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 64 && pcs > 32) {
        ligados = 64 + 128;
        desligados = 6;
        prefixo = 26;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 32 && pcs > 16) {
        ligados = 32 + 64 + 128;
        desligados = 5;
        prefixo = 27;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 16 && pcs > 8) {
        ligados = 16 + 32 + 64 + 128;
        desligados = 4;
        prefixo = 28;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 8 && pcs > 4) {
        ligados = 8 + 16 + 32 + 64 + 128;
        desligados = 3;
        prefixo = 29;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 4 && pcs > 2) {
        ligados = 4 + 8 + 16 + 32 + 64 + 128;
        desligados = 2;
        prefixo = 30;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
    else if (pcs < 2 && pcs > 1) {
        ligados = 2 + 4 + 8 + 16 + 32 + 64 + 128;
        desligados = 1;
        prefixo = 31;
        hosts = (Math.pow(2, desligados) - 2);
        resto = hosts - pcs;
        disperdicio = Number(resto);
        document.getElementById("ligados").innerText = ligados;
        document.getElementById("pref").innerText = prefixo;
        document.getElementById("hosts").innerText = hosts;
        document.getElementById("disper").innerText = disperdicio;
    }
}