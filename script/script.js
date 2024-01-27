let textoDoInput = getId('texto__input')
let botaoCriptografar = getId('crip')
let botaoDescriptografar = getId('descrip')
let notFound = getId('result__text')
let ecriptedText = getId('result__encripted')
let texte = getId('text__e')
let copyBtn = getId('copy')
let textoEncriptografado
let textoDesincriptografado

// ^^^^ Variaveis ^^^^
// vvvv Functions vvvv

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

function getId(elementId) {
    return document.getElementById(elementId)
}

// vvvv Botão vvvv

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

copyBtn.addEventListener('click', () => {
    let texto = String(texte.innerHTML)
    navigator.clipboard.writeText(texto)
})