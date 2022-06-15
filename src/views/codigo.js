const input = document.querySelector('#txt')
const input1 = document.querySelector('#txt2')
const res = document.querySelector('#res')

function clicar() {
  const idade = input.value
  const nome = input1.value
  let resposta = ''

  if (idade >= 18 && idade <= 69) {
    resposta = `Olá, ${nome}, vocè tem ${idade} anos de idade, voto obrigatorio!`
  } else if (idade >= 16 && idade <= 17) {
    resposta = `Olá, ${nome}, vocè tem ${idade} anos, pode ate votar, mas não é obrigatorio.`
  } else if (idade >= 0 && idade <= 15) {
    resposta = `Olá ${nome}, vocè tem ${idade} anos, ainda não pode votar.`
  } else if (idade >= 70) {
    resposta = `Olá, senhor(a) ${nome}, você tem ${idade} anos, não tem mais a obrigatoriedade do voto, mas se quiser, pode votar.`
  } else {
    resposta = '[Erro]'
  }

  res.innerText = resposta
}
