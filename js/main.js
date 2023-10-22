function calcInterestAndTax(amount, rate, days) {
    const interest = amount * rate * days / 100 / 365
    const gtax = interest * 15.315 / 100
    const ltax = interest * 5 / 100

    return [interest, gtax, ltax]
}

async function OnClick(e) {
    const amount0 = document.getElementById("amount").value
    const amount = Math.floor(amount0 * 100) /100
    const rate = document.getElementById("rate").value
    const days = document.getElementById("days").value

    const [interest, gtax, ltax] = calcInterestAndTax(amount, rate, days).map(e => Math.floor(e*100)/100)

    document.getElementById("out-int").innerHTML = interest
    document.getElementById("out-gtax").innerHTML = gtax
    document.getElementById("out-ltax").innerHTML = ltax
}

async function Onload(e) {
    document.getElementById("calc").addEventListener("click", OnClick)
}

window.addEventListener("load", Onload)

