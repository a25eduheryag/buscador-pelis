const URLpelis = "http://www.omdbapi.com/?i=tt3896198&apikey=82e4d9a4&"

export async function cercar(text) {
    const url = `${URLpelis}s=${text}`
    const resposta = await fetch(url)
    const dades = await resposta.json()
    console.log(dades)
    return dades.Search
}