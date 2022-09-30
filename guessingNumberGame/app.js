// DOM
var containerDom = document.querySelector(".container")
var iconDom = document.querySelector(".icon-group")
var formDom = document.querySelector("#form")
var kullaniciTahminDom = document.querySelector("#input")
var resultModel = document.querySelector(".result-model")
var result = document.querySelector(".result")
var againButton = document.querySelector(".buttonAgain")


// Events
formDom.addEventListener("submit", play)
againButton.addEventListener("click", tekrarOyna)


// Hak
var hak = 0

// Bilgisayar Değeri
function rastgele() {
    return Math.floor(Math.random() * 10)
}
var bilgisayar = rastgele()
console.log("Bilgisayarın Tuttugu Değer:", bilgisayar)

function tekrarOyna() {

    // Tekrar Oynamaya Yönelik Sıfırlama

    containerDom.classList.remove("non-active")
    resultModel.style.display = "none"

    hak = 0
    bilgisayar = rastgele()
    for (var i = 0; i < iconDom.children.length; i++) {
        iconDom.children[i].classList.remove("disabled")
    }

    // Konsoldaki İpucu
    console.log("Bilgisayarın Tuttugu Değer:", bilgisayar)
}



function play(event) {
    event.preventDefault()

    var kullaniciTahmin = kullaniciTahminDom.value

    if (kullaniciTahmin) {

        console.log(kullaniciTahmin)


        if (hak <= 2) {

            if (kullaniciTahmin == bilgisayar) {
                containerDom.classList.add("non-active")
                resultModel.style.display = "block"
                result.innerHTML = `Tebrikler! Kazandınız.`
            }
            else {
                // Yanlış Seçimde Çalışacak Kod; iconun rengini soluk yapıyoruz ve sayacı arttırıyoruz.
                iconDom.children[hak].classList.add("disabled")
                hak++
            }
        }

        else {
            // 3 Hakkıda kullanıp kazanamadığımız zaman çalıaşcak kod.
            containerDom.classList.add("non-active")
            resultModel.style.display = "block"
            result.innerHTML = `Tutturamadınız  :/`

        }
    }


    else {
        // İnput boş ise
        console.log("Boş Giriş")
    }
}