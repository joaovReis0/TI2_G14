/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />
/**
 * @type {{[key: string]: import(".").LeituraCurso}} //tipo, objeto,todos as propriedades dele string = [key: string]: string tipo dela tambem é uma string
 */
const cursos = {
  1: {
    titulo: 'Ciencia da Computação',
    avaliacao: 4,
    imagem: 'assets/img/cienciadacomputacao.jpeg',
    remuneracao: 'R$ 3000,00',
    empregados: '500 milhões',
    textoprincipal: [
      'O profissional formado em Ciência da Computação atua basicamente na elaboração de programas de informática.',
      'Um bacharel em Ciência da Computação cria desde ferramentas simples, como um aplicativo financeiro para lançar despesas pessoais, até programas complexos de gerenciamento de produção ou de processamento de informações.',
      'Um cientista da computação, como é chamado o profissional formado em Ciência da Computação, pode ser contratado para trabalhar em uma equipe de desenvolvedores, criando software de acordo com a necessidade dos clientes. Também pode atuar no departamento de Pesquisa e Desenvolvimento (P&D)de uma empresa.',
    ],
    tituloramificacao: `Além de atuar como desenvolvedor ou programador, o cientista da computação pode trabalhar como:`,
    ramificacao: [
      {
        titulo: `Arquiteto de Software - `,
        texto: `É responsável por elaborar documentos e alguns modelos que especificam os requisitos para o desenvolvimento de um software.`,
      },
      {
        titulo: `Analista de Sistemas - `,
        texto: `Modela os sistemas e a infraestrutura que o software precisa para funcionar.`,
      },
      {
        titulo: `Gerente de TI - `,
        texto: `Gerencia os projetos de software, coordenando equipes e planejando o desenvolvimento de sistemas.`,
      },
      {
        titulo: `Docência ou Pesquisa - `,
        texto: `Trabalha como professor em instituições de ensino ou desenvolve pesquisas tecnológicas.`,
      },
    ],
    titulo3: `Qual é o perfil do profissional formado em Ciência da Computação:`,
    subtexto: `O curso de Ciência da Computação, também chamado de Ciências da Computação, possui muitas disciplinas de Matemática e boa parte da estrutura curricular é composta por disciplinas destinadas ao aprendizado das linguagens de programação mais utilizadas.`,
    caracteristica: ['Matemática', 'Trabalho em Equipe', 'Computação'],
  },
  2: {
    titulo: 'Física Computacional',
    avaliacao: 5,
    imagem: 'assets/img/galaxies.jpeg',
    remuneracao: 'R$ 6670,00',
    empregados: '500 mil',
    textoprincipal: [
      'A Física Computacional tem como principal tarefa conseguir resolver situações que não é possível através dos estudos teóricos. Como é o caso da descoberta de sequências matemáticas, que não podem ser resolvidas por meio das equações matemáticas.',
      'O uso do computador tem possibilitado entender, aprofundar e desenvolver alternativas eficientes para fenômenos que estão além da controle humano como é caso das tempestades.',
      'É através dessa tecnologia que a ciência tem evoluído, principalmente na exploração de fenômenos considerados extremos, como é o caso das colisões de partículas subatômicas. É por meio desse conhecimento que são desenvolvidos os chamados supercomputadores.',
    ],
    tituloramificacao: `A área de Física Computacional abre portas para muitas ramificações inportantes para atualidade como:`,
    ramificacao: [
      {
        titulo: `Previsão do tempo - `,
        texto: `Prever o tempo envolve o estudo de conceitos geográficos, físicos e aplicação de uma série de cálculos matemáticos contendo análises combinatórias e estatística.`,
      },
      {
        titulo: `Astrofísica - `,
        texto: `A astrofísica é uma das ramificações mais conhecidas da Física Computacional. É por meio dela que é possível estimar/calcular a distância entre os planetas, a velocidade de qualquer corpo celeste e a mecânica dos movimentos em geral que rege as constelações e o universo.`,
      },
      {
        titulo: `Nanotecnologia - `,
        texto: `A nanotecnologia é uma ciência que envolve a manipulação da matéria (com o objetivo de criar novos materiais) a nível atômico.`,
      },
      {
        titulo: `Fusão nuclear - `,
        texto: `O processo de unificação de dois ou mais núcleos atômicos (fusão nuclear) é um recurso utilizado pela Física moderna para a obtenção de energia em escalas gigantescas.`,
      },
    ],
    titulo3: `Qual é o perfil do profissional formado em Física Computacional:`,
    subtexto: `O curso de Física Computacional possui muitas disciplinas de Matemática, estatística e boa parte da estrutura curricular é relacionada a linguagens de programação e supercomputadores.`,
    caracteristica: [
      'Matemática',
      'Trabalho em Equipe',
      'Computação',
      'Estatística',
      'Física',
    ],
  },
}
const urlParams = new URLSearchParams(window.location.search)
let busca = urlParams.get('id')
const curso = cursos[busca]
$(() => {
  if (!cursos[busca]) {
    if (urlParams.get('curso')){
      $('#titulo').text(`Não há nenhum conteudo sobre ${urlParams.get('curso')}`)
    }
    else {
      $('#barraazul').hide();
      
      $('#titulo').text(`Pagina não encontrada`)
    }
  }
  $('#titulo').text(`Curso de ${curso.titulo}`)
  $('#banner').text(`${curso.remuneracao}`)
  document.getElementById('banner').innerHTML = `<img src="${curso.imagem}">`
  $('#remuneracao').text(`${curso.remuneracao}`)
  $('#empregados').text(`${curso.empregados}`)
  $('#titulo2').text(`Como é a carreira em ${curso.titulo}`)
  $('#empregados').text(`${curso.empregados}`)
  $('#titulo-ramificacoes').text(`${curso.tituloramificacao}`)
  $('#titulo-perfil').text(`${curso.titulo3}`)
  $('#texto-perfil').text(`${curso.subtexto}`)
  var li = curso.textoprincipal
  var li2 = curso.ramificacao
  var li3 = curso.caracteristica
  var cursosList = ' '
  for (i = 0; i < Math.trunc(curso.avaliacao) + 1; i++) {
    if (i == Math.trunc(curso.avaliacao)) {
      if (
        curso.avaliacao - Math.trunc(curso.avaliacao) >= 0.3 &&
        curso.avaliacao - Math.trunc(curso.avaliacao) <= 0.7
      ) {
        cursosList += `<span class="fa fa-star-half checked"></span>`
      }
    } else {
      cursosList += `<span class="fa fa-star checked"></span>`
    }
  }
  document.getElementById('estrelas').innerHTML = cursosList
  cursosList = ' '
  if (li.length != null) {
    for (i = 0; i < li.length; i++) {
      //if ((busca.toLowerCase()).match((curso[i].textoprincipal).toLowerCase())) {
      cursosList += `<p>${curso.textoprincipal[i]}</p>`
      //}
    }
    document.getElementById('lista-texto-cursos').innerHTML = cursosList
  }
  cursosList = ' '
  for (i = 0; i < li2.length; i++) {
    cursosList += `<div class="col-12 fundo baixo">
                          <p><b>${curso.ramificacao[i].titulo}</b>${curso.ramificacao[i].texto}</p>
                          <p><p>
                        </div>`
    //cursosList2 +=`<p><b>${curso.ramificacao[i].titulo}</b>${curso.ramificacao[i].texto}</p>`;
  }
  document.getElementById('ramificacoes').innerHTML = cursosList
  cursosList = ' '
  for (i = 0; i < li3.length; i++) {
    cursosList += `<div class="col-12 col-md-3 col-lg-2 col-xl-2 fundop ">
        <p><b>${curso.caracteristica[i]}</b></p>
    </div>`
    //cursosList2 +=`<p><b>${curso.ramificacao[i].titulo}</b>${curso.ramificacao[i].texto}</p>`;
  }
  document.getElementById('categoria').innerHTML = cursosList
})
