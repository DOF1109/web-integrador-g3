addEventListener("load", () => {
    const btnArielIbarbalz = document.getElementById("btn-ariel-ibarbalz")
    const btnJuanPaez = document.getElementById("btn-juan-paez")
    const btnDanielFrias = document.getElementById("btn-daniel-frias")
    const btnAbelLimachi = document.getElementById("btn-abel-limachi")
    const btnJuanCartasegna = document.getElementById("btn-juan-cartasegna")

    btnArielIbarbalz.addEventListener("click", () => {
        location.href = "/pages/ariel-ibarbalz.html"
    })

    btnJuanPaez.addEventListener("click", () => {
        location.href = "/pages/juan-paez.html"
    })

    btnDanielFrias.addEventListener("click", () => {
        location.href = "/pages/daniel-frias.html"
    })

    btnAbelLimachi.addEventListener("click", () => {
        location.href = "/pages/abel-limachi.html"
    })

    btnJuanCartasegna.addEventListener("click", () => {
        location.href = "/pages/juan-cartasegna.html"
    })
})