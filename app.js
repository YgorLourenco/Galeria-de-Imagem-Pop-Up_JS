const fullImg = document.querySelector('.full-img')
const smallImg = document.querySelectorAll('.gallery img')
const modal = document.querySelector('.modal')

// Função para percorrer cada imagem, que ao clicar adiciona a classe 'open' a classe 'modal' e 'fullimg' pra ativa-los quando clicar
smallImg.forEach(function(img) {
    img.addEventListener('click', function(){
        modal.classList.add('open')
        fullImg.classList.add('open')
    // Mudança de imagem de forma dinamica
    // getAttribute pega o valor de classe ou outra variavel
    // .src muda o source da tag
    const originalQuality = img.getAttribute('alt')
    fullImg.src = `img/full/${originalQuality}.jpg`
    })
})
// Qualquer lugar que vc clicar e tiver uma classe 'modal', remover a classe 'open'
modal.addEventListener('click', function(e){
    if (e.target.classList.contains('modal')){
        modal.classList.remove('open')
        fullImg.classList.remove('open')
    }
})