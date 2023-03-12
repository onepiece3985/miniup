let btIkpa = document.querySelector(".simulasi-ikpa")


btIkpa.addEventListener("click", function(){
    console.log(event.target)
    document.querySelector(".simulasi-value").classList.add("visible")
    document.querySelector(".nilaigup-value").classList.add("hidden")
    document.querySelector(".submit-ikpa").classList.add("visible")
    btIkpa.classList.add("hidden")
    alert("Tentukan tanggal dan nilai GUP")
    
})