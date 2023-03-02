// AMBIL PARALAX EFFECT
const bulanMatahari = document.querySelector('#BaM')
const layerNotAwan = document.querySelectorAll('.background .notAwan')
const layerAwan = document.querySelectorAll('.background .awan')
const dropdown = document.querySelector('#dropdown')
const dropV = document.querySelector('#D-value')
const html = document.querySelector('html')
// AMBIL PARALAX EFFECT SELESAI

// AMBIL NAVBAR MULAI
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('.Nav-value')
const aNavbar = document.querySelectorAll('.a-navbar')
// AMBIL NAVBAR SELSAI

// CARD EDUKASI 
const kiri = document.querySelector('#kiri')
const kanan = document.querySelector('#kanan')


// NAVBAR

menuToggle.addEventListener ('click', function() {
    nav.classList.toggle('slide')
})

aNavbar.forEach((aNavbar) => {
    aNavbar.addEventListener('click', function() {
        nav.classList.remove('slide')
    })
})
// NAVBAR SELESAI

dropdown.addEventListener('mouseover', ()=> {
    dropdown.classList.toggle('down')
})
dropdown.addEventListener('mouseout', ()=> {
    dropdown.classList.toggle('down')
})

// muncul card 

const cardKanan = document.querySelector('.popup-box-1')
const cardTengah = document.querySelector('.popup-box-2')
const cardKiri = document.querySelector('.popup-box-3')
const gambarKiri = document.querySelector('.gambar-kiri')
const gambarKanan =document.querySelector('.gambar-kanan')
const gambarTengah = document.querySelector('.gambar-tengah')
const tutup1 = document.querySelector('.close-1')
const tutup2 = document.querySelector('.close-2')
const tutup3 = document.querySelector('.close-3')
const kedip = document.querySelectorAll('.kedip')

console.log(kedip)

gambarKanan.addEventListener('click', () => {
    cardKanan.classList.toggle('muncul') 
    cardTengah.style.display = 'none'
    cardKanan.style.display = 'flex'
    cardKiri.style.display = 'none'
    tutup1.addEventListener('click', () => {
        cardKanan.classList.remove('muncul')
        cardTengah.style.display = 'flex'
        cardKanan.style.display='none'

    })
})
gambarTengah.addEventListener('click', () => {
    cardTengah.classList.toggle('muncul') 
    cardKanan.style.display = 'none'
    cardTengah.style.display ='flex'
    cardKiri.style.display = 'none'
    tutup2.addEventListener('click', () => {
        cardTengah.classList.remove('muncul')
        cardKanan.style.display = 'flex'
        cardTengah.style.display = 'none'

    })
})

gambarKiri.addEventListener('click', () => {
    console.log(gambarKiri)
    cardKiri.classList.toggle('muncul') 
    cardKiri.style.display = 'flex'
    cardKanan.style.display = 'none'
    cardTengah.style.display = 'none'
    tutup3.addEventListener('click', () => {
        cardKiri.classList.remove('muncul')
    })
})

kedip.forEach(k => {
    k.addEventListener('click', () => {
        gambarKiri.classList.remove('kedip')
        gambarTengah.classList.remove('kedip')
        gambarKanan.classList.remove('kedip')
    })
})


window.addEventListener('scroll',() => {
        let paralaxValue = window.scrollY;
        paralEffect(paralaxValue)
    })
    
    
    const paralEffect = (value) => {
        bulanMatahari.style.transform = `translateY(${(value/3)}px)`;
        layerAwan[0].style.transform = `translatex(${0-(value/2)}px)`;
        layerAwan[1].style.transform = `translatex(${value/1.5}px)`;
        layerAwan[2].style.transform = `translatex(${value/2.6}px)`;
        layerAwan[5].style.transform = `translatex(${0-(value/2.6)}px)`;
        layerAwan[4].style.transform = `translatex(${0-(value/1.3)}px)`;
        layerAwan[5].style.transform = `translatex(${(value/2)}px)`;
        layerNotAwan[1].style.transform = `translateY(${(value/5)}px)`
    }


let init = false;

if(window.innerWidth < 500){
    init = true;
    gsap.to('.latar', {duration:10, delay:0, text:'Trash Go adalah sebuah gerakan inisiatif untuk memilah,mengumpulkan serta mengelola sampah. Kami mengundang seluruh lapisan masyarakat agar berpartisipasi bersama kami untuk membuat dampak lingkungan dan sosial yang positif di Indonesia.'})

}

window.onscroll = function(){
    if(document.getElementsByClassName("container-latar-belakang")[0].getBoundingClientRect().top < 60){
        if(!init){
        init = true;
        gsap.to('.latar', {duration:15, delay:0, text:'Trash Go adalah sebuah gerakan inisiatif untuk memilah,mengumpulkan serta mengelola sampah. Kami mengundang seluruh lapisan masyarakat agar berpartisipasi bersama kami untuk membuat dampak lingkungan dan sosial yang positif di Indonesia.'})
        }
    }
}

// footer
document.getElementById("year").innerHTML = new Date().getFullYear();