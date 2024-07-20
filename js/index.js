var banners = ["./img/zoro2.jpg", "./img/One Piece.jpeg"]

var bannerAtual = 0

function trocaBanner(){
    bannerAtual = (bannerAtual + 1) % 2
    document.querySelector('.destaque img').src = banners[bannerAtual]
}
setInterval(trocaBanner, 3000)

const AudioP = document.querySelector('#audioPlayer')
const InputRange = document.querySelector('#input-range')
const ButtonPlay = document.querySelector('#play')

InputRange.addEventListener("input", () => { AudioP.volume = InputRange.value;})

ButtonPlay.addEventListener("click", () => {
    AudioP.Play()
})