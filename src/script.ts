//função define tipos para url e method
function fazerRequisicao (url: string, method: 'GET' | 'POST') {

}

//tipagem protege de erros
type ResquestDetails = {
    url: string,
    method: 'GET' | 'POST'
}

//adição da tipagem à variável
let requisicao:ResquestDetails = {
    url: "https://www.google.com",
    method: 'GET'
}

//execução sem apresentar erros
fazerRequisicao(requisicao.url, requisicao.method);