var bulanKe = new Date().getMonth() + 1

let today = new Date().getFullYear() + '-' + bulanKe.toString().padStart(2, "0") + '-' + new Date().getDate().toString().padStart(2, "0")





const namaBulan = ["","Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
const jumlahTanggal = ["",31,28,31,30,31,30,31,31,30,31,30,31]
const hariAwal = ["",1,4,4,7,2,5,7,3,6,1,4,6]

var dummydate = document.querySelector(".date.dummy");
var dates = document.querySelector(".dates");

function loadDummyDate() {
    dates.innerHTML = "<div class='date dummy'</div>"
}

function loadBulan() {

    dummydate = document.querySelector(".date.dummy");

    document.querySelector(".month-title").innerHTML = namaBulan[bulanKe]

    for (let i = 1; i <= hariAwal[bulanKe]-1; i++) {
        dummydate.insertAdjacentHTML ("beforebegin",`<div class='date dummy'</div>`);
    }

    for (let i = 1; i <= jumlahTanggal[bulanKe]; i++) {
        dummydate.insertAdjacentHTML ("beforebegin",`<div class='date 2023-${bulanKe.toString().padStart(2, "0")}-${i.toString().padStart(2, "0")}'>` + i + "</div>");
    }

    // document.querySelector(".d"+today).classList.add("today")

}

loadDummyDate()
loadBulan()
document.getElementsByClassName("date 2023-03-30")[0].classList.add("deadline")




document.querySelector(".next").addEventListener("click", function(){
    bulanKe++;
    console.log(bulanKe);
    loadDummyDate();
    loadBulan();
    // document.querySelector(".d2023-03-24").classList.add("deadline")
})

document.querySelector(".prev").addEventListener("click", function(){
    bulanKe--;
    console.log(bulanKe);
    loadDummyDate();
    loadBulan();
    // document.querySelector(".d2023-03-24").classList.add("deadline")
})


dates.addEventListener("click", function(){
    if (document.querySelector('.dates .clicked')){
        document.querySelector('.dates .clicked').classList.remove('clicked')
    }
    let clicked = event.target.classList.value
    console.log(clicked)
    document.getElementsByClassName(clicked)[0].classList.add("clicked")

})


