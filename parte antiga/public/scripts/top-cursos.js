/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />

/**
 * @type {import(".").TopCurso[]}
 */
const cursos = [
  {
    avaliacao: 4,
    categorias: ['Computação', 'Matemática', 'Trabalho em Equipe'],
    descricao:
      'Um cientista da computação, como é chamado o profissional formado em Ciência da Computação, pode ser contratado para trabalhar em uma equipe de desenvolvedores, criando software de acordo com a necessidade dos clientes. Também pode atuar no departamento de Pesquisa e Desenvolvimento (P&D)de uma empresa.',
    imagem: 'assets/img/cc top cursos.jpg',
    titulo: 'Ciência da Computação',
    comentarios: 13,
    remuneracao: 3000,
    id: 1,
  },
  {
    avaliacao: 5,
    categorias: ['Física', 'Programação'],
    descricao:
      'O profissional formado em Física Computacional possui uma visão mista da Física e da Computação e pode atuar na solução de problemas que necessitem de conhecimento nas duas áreas.',
    imagem: 'assets/img/mc top cursos.jpg',
    titulo: 'Física Computacional',
    comentarios: 15,
    remuneracao: 6670,
    id: 2,
  },
  {
    avaliacao: 4.5,
    categorias: ['Direito', 'Advocacia'],
    descricao:
      'O profissional formado no curso de Direito podem optar por seguir a carreira jurídica ou se tornar advogado. As duas opções oferecem diversas profissões e caminhos a seguir. Para atuar como advogado, o bacharel em Direito precisa realizar o Exame da OAB (Ordem dos Advogados do Brasil). Somente após ser aprovado nesta prova é que o profissional recebe o registro na OAB e pode exercer a profissão.',
    imagem: 'assets/img/direito top cursos.jpg',
    titulo: 'Direito',
    comentarios: 28,
    remuneracao: 4542,
    id: 3,
  },
  {
    avaliacao: 5,
    categorias: ['Medicina', 'Área de Saúde'],
    descricao:
      'O médico é o profissional que busca diagnosticar, tratar e curar pessoas doentes. Ele pode ser generalista, ou seja, atender todos os tipos de encaminhamentos da área da saúde, ou especializado em alguma atividade ou função específica. Para atender seus pacientes, o médico pode indicar tratamentos a base de remédios, realizar procedimentos cirúrgicos e solicitar exames de saúde para melhor diagnóstico ou acompanhamento da evolução do paciente.',
    imagem: 'assets/img/med top cursos.jpg',
    titulo: 'Medicina',
    comentarios: 51,
    remuneracao: 4000,
    id: 4,
  },
  {
    avaliacao: 3,
    categorias: ['Matemática', 'Programação'],
    descricao:
      'O profissional formado em Engenharia da Computação é capaz de projetar e construir hardware e software.',
    imagem: 'assets/img/ec top cursos.jpg',
    titulo: 'Engenharia da Computação',
    comentarios: 20,
    remuneracao: 3700,
    id: 5,
  },
  {
    avaliacao: 2,
    categorias: ['Matemática'],
    descricao:
      'O profissional formado em ciências contábeis desenvolve atividades variadas tanto no setor público quanto na esfera privada.',
    imagem: 'assets/img/ccon top cursos.jpg',
    titulo: 'Ciências Contábeis',
    comentarios: 37,
    remuneracao: 3100,
    id: 6,
  },
  {
    avaliacao: 4,
    categorias: ['Matemática'],
    descricao:
      'O bacharel em engenharia aeronáutica é, essencialmente, um conhecedor da produção industrial de aeronaves e dos processos agregados à sua operação.',
    imagem: 'assets/img/ea top cursos.jpg',
    titulo: 'Engenharia Aeronáutica',
    comentarios: 21,
    remuneracao: 6000,
    id: 7,
  },
  {
    avaliacao: 4,
    categorias: ['Matemática'],
    descricao:
      'O engenheiro aeroespacial projeta sistemas e conjuntos mecânicos, componentes, ferramentas e materiais, especificando limites de referência para cálculo.',
    imagem: 'assets/img/eae top cursos.jpg',
    titulo: 'Engenharia Aeroespacial',
    comentarios: 8,
    remuneracao: 6700,
    id: 8,
  },
  {
    avaliacao: 1,
    categorias: ['Matemática', 'Design'],
    descricao:
      'O designer gráfico está habilitado para desenvolver projetos gráficos de comunicação visual, como panfletos, cartões de visita, elaboração de web sites e mais.',
    imagem: 'assets/img/dg top cursos.jpg',
    titulo: 'Design Gráfico',
    comentarios: 29,
    remuneracao: 2700,
    id: 9,
  },
]

class TopCursos {
  /**
   * @type {JQuery<HTMLElement>}
   */
  #content

  /**
   * @type {'av' | 'rem' | 'com' | 'emp' | 'emp2'}
   */
  static ordem
  /**
   * @type {number}
   */
  static pagina
  /**
   * @type {number}
   */
  static quantidade = 4

  constructor() {
    const urlParams = new URLSearchParams(window.location.search)
    /**
     * @type {'av' | 'rem' | 'com' | 'emp' | 'emp2'}
     */
    TopCursos.ordem = urlParams.get('o')
    TopCursos.pagina = parseInt(urlParams.get('p') || '1') ?? 1
    if (TopCursos.pagina === 1)
      $('#prev').toggleClass('disabled', true).prop('onclick', null)
    if (TopCursos.pagina === 3)
      $('#next').toggleClass('disabled', true).prop('onclick', null)
    this.#content = $('#content')
  }

  clear() {
    this.#content.html('')
  }

  /**
   * @param {number} avaliacao
   * @returns {string}
   */
  #rating(avaliacao) {
    return new Array(5)
      .fill(1)
      .map((v, k) => {
        console.log(avaliacao, k)
        if (avaliacao - 1 >= k)
          return `<span class="fa fa-star checked"></span>`
        if (avaliacao - 1 >= k - 0.5)
          return `<span class="fa fa-star-half checked"></span>`
      })
      .join('')
  }

  /**
   * @param {string[]} categorias
   * @returns {string}
   */
  #categories(categorias) {
    return categorias
      .map((v) => `<span class="badge badge-pill badge-info">${v}</span>`)
      .join('')
  }

  render() {
    this.#content.append(
      cursos
        .sort((a, b) => {
          switch (TopCursos.ordem) {
            case 'rem':
              return b.remuneracao - a.remuneracao
            case 'com':
              return b.comentarios - a.comentarios
            case 'av':
              return b.avaliacao - a.avaliacao
            default:
              return 1
          }
        })
        .slice(
          TopCursos.quantidade * (TopCursos.pagina - 1),
          TopCursos.quantidade * TopCursos.pagina
        )
        .map((v, k) => {
          return $(`
            <div class="row curso">
              <div class="row dentroCurso titulo">
                <div class="dentroTitulo">
                  <h2><i class="fas fa-award"></i> Top ${
                    TopCursos.quantidade * (TopCursos.pagina - 1) + k + 1
                  }</h2>
                </div>
              </div>
              <div class="row dentroCurso">
                <div class="col-12 col-xl-3 cursoImgDiv mb-2">
                  <a href="/leituraCurso.html?id=${v.id}">
                    <img src="${
                      v.imagem
                    }" class="cursoImg w-100 rounded" style="object-fit: cover;">
                  </a>
                </div>
                <div class="col-12 col-xl-9 cursoTexto">
                  <div class="row rakingEtitulo">
                    <h3>${v.titulo}</h3>
                    <div class="starRating">
                      ${this.#rating(v.avaliacao)}
                    </div>
                  </div>
                  <p>
                    ${v.descricao}
                    <br>
                    <br>
                    ${this.#categories(v.categorias)}
                  </p>
                  <div class='d-flex align-items-center'>
                    <span class='mdi mdi-comment pt-1 pr-2'></span>
                    <small>${v.comentarios}</small>
                    <span class='mdi mdi-currency-usd pt-1 pr-2 pl-2'></span>
                    <small>R$ ${v.remuneracao},00</small>
                  </div>
                </div>
              </div>
              <hr>
            </div>
          `)
        })
    )
  }
}

/**
 *
 * @param {'prev' | 'next' | number} payload
 */
const paginate = (payload) => {
  if (typeof payload === 'string') {
    location = `?o=${TopCursos.ordem ?? 'av'}&p=${
      TopCursos.pagina + (payload === 'next' ? 1 : -1)
    }#content`
  } else {
    location = `?o=${TopCursos.ordem}&p=${payload}#content`
  }
}

$(() => {
  const topCursos = new TopCursos()
  topCursos.clear()
  topCursos.render()
})
