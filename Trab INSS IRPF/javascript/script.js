function resultado() {
    //declaração de variáveis
    var nome = document.querySelector('#nom').value
    var numD = parseFloat(document.querySelector('#numd').value)
    var salBruto = parseFloat(document.querySelector('#salar').value)
    var inss = ""
    var porcentagemInss = ""
    var irpf = ""
    var porcentagemIrpf = ""
    var salAnual = salBruto * 12
    var salLiq = ""

    //criação das linhas
    var tb = document.querySelector('#tb')
    var qtd = tb.rows.length
    //teste se foram digitados valores dentro dos inputs
    if(isNaN(salBruto) == false && isNaN(numD) == false) {
        var novaLinha = tb.insertRow(qtd)
    } else {
        alert('Verifique os dados e tente novamente')
    }
    
    //declarando as células que serão acrescentadas
    var cellNome = novaLinha.insertCell(0)
    var cellNumDep = novaLinha.insertCell(1)
    var cellSalBruto = novaLinha.insertCell(2)
    var cellPorcInss = novaLinha.insertCell(3)
    var cellDescInss = novaLinha.insertCell(4)
    var cellPorcIrpf = novaLinha.insertCell(5)
    var cellDescIrpf = novaLinha.insertCell(6)
    var cellSalLiq = novaLinha.insertCell(7)

    //cálculos INSS
    if (salBruto <= 1100.01) {
        inss = salBruto * 0.075
        porcentagemInss = '7.5%' 
    } else if (salBruto <= 2203.49) {
        inss = (salBruto - 1100.01) * 0.09 + 82.5
        porcentagemInss = '9%'
    } else if (salBruto <= 3305.22) {
        inss = (salBruto - 2203.49) * 0.12 + 181.81
        porcentagemInss = '12%'
    } else if (salBruto <= 6433.57) {
        inss = (salBruto - 3305.22) * 0.14 + 314.02
        porcentagemInss = '14%'
    } else {
        inss = 0
        porcentagemInss = '0%'
    }

    //cáluclos IRPF
    if (salAnual <= 22847.76) {
        irpf = 0
        porcentagemIrpf = '0%'
    } else if (salAnual <= 33919.80) {
        irpf = salAnual * 0.075
        porcentagemIrpf = '7.5%'
    } else if (salAnual <= 45012.60) {
        irpf = salAnual * 0.15
        porcentagemIrpf = '15%'
    } else if (salAnual <= 55976.16) {
        irpf = salAnual * 0.225
        porcentagemIrpf = '22.5%'
    } else {
        irpf = salAnual * 0.275
        porcentagemIrpf = '27.5%'
    }

    //cálculo salário líquido
    irpf = irpf / 12
    salLiq = salBruto - irpf - inss

    //criação das células do resultado
    cellNome.innerHTML = nome
    cellNumDep.innerHTML = numD
    cellSalBruto.innerHTML = 'R$' + salBruto.toFixed(2)
    cellPorcInss.innerHTML = porcentagemInss
    cellDescInss.innerHTML = 'R$' + inss.toFixed(2)
    cellPorcIrpf.innerHTML = porcentagemIrpf
    cellDescIrpf.innerHTML = 'R$' + irpf.toFixed(2)
    cellSalLiq.innerHTML = 'R$' + salLiq.toFixed(2)
}