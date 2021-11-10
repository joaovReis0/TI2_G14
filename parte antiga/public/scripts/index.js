/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />
/**
 * @type {{[key: string]: import(".").TelaIicial}} //tipo, objeto,todos as propriedades dele string = [key: string]: string tipo dela tambem é uma string
 */
const cursos = {
    1: {
        id: 2,
        titulo: 'Física Computacional',
        avaliacao: 5,
        quantramificacao: 4,
        remuneracao: 6670,

    },
    2: {
        id: 3,
        titulo: 'Direito',
        avaliacao: 4.5,
        quantramificacao: 14,
        remuneracao: 4542,
    },
    3: {
        id: 1,
        titulo: 'Ciencia da Computação',
        avaliacao: 4,
        quantramificacao: 4,
        remuneracao: 3000,
    },
}
$(() => {

    var cursosList = ' '
    var cursosList2 = ' '
    cursosList += `<div class="row tituloAval">
                        <h1>Melhores Avaliações</h1>
                   </div>`
    cursosList2 += `<div class="row tituloAval">
                        <h1>Melhores Remunerações</h1>
                   </div>`
    for (j = 1; j <= 3; j++) {
        const curso = cursos[j]

        var estrela = ' '
        var ramifica = ' '

        for (i = 0; i < Math.trunc(curso.avaliacao) + 1; i++) {
            if (i == Math.trunc(curso.avaliacao)) {
                if (
                    curso.avaliacao - Math.trunc(curso.avaliacao) >= 0.3 &&
                    curso.avaliacao - Math.trunc(curso.avaliacao) <= 0.7
                ) {
                    estrela += `<span class="fa fa-star-half checked"></span>`
                }
            } else {
                estrela += `<span class="fa fa-star checked"></span>`
            }
        }
        if (curso.quantramificacao > 0) {
            ramifica = ` ${curso.quantramificacao} - Ramificações`
        } else {
            ramifica = ` Sem Ramificações`
        }
        cursosList += `
                <div class="row aval ciencia" onclick="location = 'leituraCurso.html?id=${curso.id}'">
                    <div class="col-12 col-md-4 col-xl-4 nomeDoCurso">
                        <p>
                            ${curso.titulo}
                        </p>
                    </div>
                    <div class="col-12 col-md-1 col-lg-1 col-xl-1 traçoEntre">
                        <p>
                            -
                        </p>
                    </div>
                    <div class="col-12 col-md-3 col-xl-3 ramificacoes">
                        <p>
                            ${ramifica}
                        </p>
                    </div>
                    <div class="col-12 col-md-1 col-lg-1 col-xl-1 traçoEntre">
                        <p>
                            -
                        </p>
                    </div>
                    <div class="col-12 col-md-3 col-xl-3 rating">
                        ${estrela}
                    </div>
                </div>`

        cursosList2 += ` 
        
                    <div class="row aval ciencia" onclick="location = 'leituraCurso.html?id=${curso.id}'">
                        <div class="col-12 col-md-4 col-xl-4 nomeDoCurso">
                            <p>
                                ${curso.titulo}
                            </p>
                        </div>
                        <div class="col-12 col-md-1 col-lg-1 col-xl-1 traçoEntre">
                            <p>
                                -
                            </p>
                        </div>
                        <div class="col-12 col-md-3 col-xl-3 ramificacoes">
                            <p>
                                ${ramifica}
                            </p>
                        </div>
                        <div class="col-12 col-md-1 col-lg-1 col-xl-1 traçoEntre">
                            <p>
                                -
                            </p>
                        </div>
                        <div class="col-12 col-md-3 col-xl-3 rating">
                            <p>
                                Média: R$${curso.remuneracao},00
                            </p>
                        </div>
                    </div>`
    }

    document.getElementById('ava').innerHTML = cursosList
    document.getElementById('remu').innerHTML = cursosList2

})
