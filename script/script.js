let textoDoInput = document.getElementById('texto__input')
let botaoCriptografar = document.getElementById('crip')
let botaoDescriptografar = document.getElementById('descrip')
let notFound = document.getElementById('result__text')
let ecriptedText = document.getElementById('result__encripted')
let texte = document.getElementById('text__e')
let copyBtn = document.getElementById('copy')
let textoEncriptografado
let textoDesincriptografado


function criptografar(texto) {
    let textoEncriptografado = texto.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')
    return textoEncriptografado;
}

function descriptografar(texto) {
    let textoDesincriptografado = texto.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')
    return textoDesincriptografado
}

botaoDescriptografar.addEventListener('click', () => {
    textoDesincriptografado = descriptografar(textoDoInput.value)

    if (textoDoInput.value !== '') {
        notFound.classList.add('desaparecer-n')
        ecriptedText.classList.remove('desaparecer-e')
        texte.innerHTML = textoDesincriptografado
    } else if (textoDoInput.value === '') {
        notFound.classList.remove('desaparecer-n')
        ecriptedText.classList.add('desaparecer-e')
    }


})

botaoCriptografar.addEventListener('click', () => {
    textoEncriptografado = criptografar(textoDoInput.value)

    if (textoDoInput.value !== '') {
        notFound.classList.add('desaparecer-n')
        ecriptedText.classList.remove('desaparecer-e')
        texte.innerHTML = textoEncriptografado
    } else if (textoDoInput.value === '') {
        notFound.classList.remove('desaparecer-n')
        ecriptedText.classList.add('desaparecer-e')
    }


})

copyBtn.addEventListener('click', ()=>{
    let texto = String(texte.innerHTML)
    navigator.clipboard.writeText(texto)
})
