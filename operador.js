function somar() {
    var tn1 = window.document.getElementById("ad1")
    var tn2 = window.document.getElementById("ad2")
    var res = window.document.getElementById("res1")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = (n1 + n2)
    res1.innerHTML = `O resultado da soma entre ${n1} e ${n2} é igual a: ${s}`
}
function subtrair(){
    var tn3 = window.document.getElementById("sb3")
    var tn4 = window.document.getElementById("sb4")
    var res = window.document.getElementById("res2")
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var su = (n3 - n4)
    res2.innerHTML = `A subtração entre ${n3} e ${n4} é igual a: ${su}`
}
function dividir() {
    var tn5 = window.document.getElementById("dv5")
    var tn6 = window.document.getElementById("dv6")
    var res = window.document.getElementById("res3")
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var d = (n5 / n6)
    res3.innerHTML = `A divisão entre ${n5} e ${n6} é igual a: ${d}`

}
function multiplicar() {
    var tn7 = window.document.getElementById("mt7")
    var tn8 = window.document.getElementById("mt8")
    var res = window.document.getElementById("res4")
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var m = (n7 * n8)
    res4.innerHTML = `A multiplicação entre ${n7} e ${n8} é igual a: ${m}`
}