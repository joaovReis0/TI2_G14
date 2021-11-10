/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />

/**
 *
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * @returns
 */
const clamp = (number, min = 0, max = Infinity) => {
  return Math.max(min, Math.min(number, max))
}

/**
 * @type {import(".").Curso[]}
 */
const cursos = [
  {
    avaliacao: 1,
    categorias: [{ nome: 'Ciências Sociais' }],
    nome: 'Administração',
    peso: {
      arte: 0,
      humanas: 3,
      economia: 3,
      saude: 0,
      legal: 3,
      lideranca: 5,
      matematica: 1,
      ciencia: 0,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 4.5,
    categorias: [{ nome: 'Arte' }],
    nome: 'Artes Visuais',
    peso: {
      arte: 5,
      humanas: 1,
      economia: 1,
      saude: 0,
      legal: 1,
      lideranca: 2,
      matematica: 0,
      ciencia: 0,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Ciência da Computação',
    peso: {
      arte: 1,
      humanas: 0,
      economia: 2,
      saude: 0,
      legal: 1,
      lideranca: 2,
      matematica: 3,
      ciencia: 4,
      tecnologia: 5,
    },
  },
  {
    avaliacao: 4,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Ciências Contábeis',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 5,
      saude: 0,
      legal: 3,
      lideranca: 2,
      matematica: 3,
      ciencia: 1,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2.5,
    categorias: [{ nome: 'Arte' }],
    nome: 'Design',
    peso: {
      arte: 5,
      humanas: 0,
      economia: 1,
      saude: 0,
      legal: 1,
      lideranca: 2,
      matematica: 0,
      ciencia: 1,
      tecnologia: 3,
    },
  },
  {
    avaliacao: 3,
    categorias: [{ nome: 'Ciências Sociais' }],
    nome: 'Direito',
    peso: {
      arte: 0,
      humanas: 3,
      economia: 3,
      saude: 0,
      legal: 5,
      lideranca: 2,
      matematica: 1,
      ciencia: 1,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 5,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Engenharia Aeroespacial',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 1,
      matematica: 4,
      ciencia: 4,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2,
    categorias: [{ nome: 'Engenharia' }],
    nome: 'Engenharia Biomédica',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 4,
      legal: 0,
      lideranca: 0,
      matematica: 1,
      ciencia: 3,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2,
    categorias: [{ nome: 'Ciências Humanas' }],
    nome: 'Filosofia',
    peso: {
      arte: 0,
      humanas: 5,
      economia: 1,
      saude: 0,
      legal: 2,
      lideranca: 1,
      matematica: 0,
      ciencia: 0,
      tecnologia: 0,
    },
  },
  {
    avaliacao: 4.5,
    categorias: [{ nome: 'Ciências da Natureza' }],
    nome: 'Física',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 5,
      ciencia: 5,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 5,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Física Computacional',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 4,
      ciencia: 4,
      tecnologia: 5,
    },
  },
  {
    avaliacao: 1,
    categorias: [{ nome: 'Ciências Humanas' }],
    nome: 'História',
    peso: {
      arte: 0,
      humanas: 5,
      economia: 1,
      saude: 0,
      legal: 2,
      lideranca: 1,
      matematica: 0,
      ciencia: 0,
      tecnologia: 0,
    },
  },
  {
    avaliacao: 4,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Matemática',
    peso: {
      arte: 0,
      humanas: 1,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 5,
      ciencia: 1,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 3.5,
    categorias: [{ nome: 'Ciências Biológicas' }],
    nome: 'Medicina Veterinária',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 4,
      legal: 0,
      lideranca: 0,
      matematica: 1,
      ciencia: 3,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 3.5,
    categorias: [{ nome: 'Arte' }],
    nome: 'Música',
    peso: {
      arte: 5,
      humanas: 1,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 0,
      ciencia: 0,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 3,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Redes de Computadores',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 1,
      saude: 0,
      legal: 0,
      lideranca: 1,
      matematica: 2,
      ciencia: 2,
      tecnologia: 4,
    },
  },
  {
    avaliacao: 3,
    categorias: [{ nome: 'Ciências da Natureza' }],
    nome: 'Química',
    peso: {
      arte: 0,
      humanas: 1,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 2,
      ciencia: 4,
      tecnologia: 2,
    },
  },
]

class Teste {
  /**
   * @type {JQuery<HTMLElement>}
   */
  btnComecarTeste
  /**
   * @type {JQuery<HTMLElement>}
   */
  btnProximo
  /**
   * @type {JQuery<HTMLElement>}
   */
  lblPerguntaIndex
  /**
   * @type {JQuery<HTMLElement>}
   */
  lblPerguntaTitulo
  /**
   * @type {JQuery<HTMLElement>}
   */
  lblPerguntaDescricao
  /**
   * @type {JQuery<HTMLElement>}
   */
  menuInicial
  /**
   * @type {JQuery<HTMLElement>}
   */
  menuFinal
  /**
   * @type {JQuery<HTMLElement>}
   */
  menuPerguntas
  /**
   * @type {JQuery<HTMLElement>}
   */
  resultadoWrapper
  /**
   * @type {number}
   */
  perguntaIndex = 0
  /**
   * @type {JQuery<HTMLElement>}
   */
  spinner
  /**
   * @type {import(".").Pergunta[]}
   */
  perguntas = [
    {
      titulo: 'Quais coisas mais gosta de fazer?',
      descricao: 'Marque ao menos 1 item',
      wrapper: null,
      escolhas: {},
      alternativas: [
        {
          nome: 'Ajudar pessoas',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 5,
            tecnologia: 0,
          },
        },
        {
          nome: 'Fazer contas',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 5,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Ler livros',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Pesquisar curiosidades',
          peso: {
            arte: 0,
            ciencia: 5,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Criar coisas',
          peso: {
            arte: 3,
            ciencia: 3,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 3,
          },
        },
        {
          nome: 'Liderar grupos',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 5,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
      ],
    },
    {
      titulo: 'De quais matérias mais gosta?',
      descricao: 'Marque ao menos 1 item',
      wrapper: null,
      escolhas: {},
      alternativas: [
        {
          nome: 'Matemática',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 5,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Física',
          peso: {
            arte: 0,
            ciencia: 5,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 5,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Química',
          peso: {
            arte: 0,
            ciencia: 5,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Biologia',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 5,
            tecnologia: 0,
          },
        },
        {
          nome: 'Geografia',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'História',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Sociologia',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Gramática',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Literatura',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Linguas Estrangeiras',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Filosofia',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 5,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Informática',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 5,
          },
        },
        {
          nome: 'Artes',
          peso: {
            arte: 5,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
      ],
    },
    {
      titulo: 'Com quais habilidades você se identifica?',
      descricao: 'Marque ao menos 1 item',
      wrapper: null,
      escolhas: {},
      alternativas: [
        {
          nome: 'Comunicação',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 3,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Capacidade de liderança',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 5,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Persuasão',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 3,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Aptidão artística',
          peso: {
            arte: 5,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Criar coisas',
          peso: {
            arte: 3,
            ciencia: 3,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 3,
          },
        },
        {
          nome: 'Capacidade para empreender',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 5,
            humanas: 0,
            legal: 0,
            lideranca: 3,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Afinidade com tecnologia',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 5,
          },
        },
        {
          nome: 'Organização',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 3,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Criatividade',
          peso: {
            arte: 3,
            ciencia: 3,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 3,
          },
        },
        {
          nome: 'Trabalho em equipe',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Proatividade',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 0,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
        {
          nome: 'Facilidade para ensinar',
          peso: {
            arte: 0,
            ciencia: 0,
            economia: 0,
            humanas: 3,
            legal: 0,
            lideranca: 0,
            matematica: 0,
            saude: 0,
            tecnologia: 0,
          },
        },
      ],
    },
  ]

  constructor() {
    console.log('teste constructor')

    this.spinner = $('#spinner')
    this.menuInicial = $('#menu-inicial')
    this.menuFinal = $('#menu-final')
    this.menuPerguntas = $('#menu-perguntas')
    this.perguntas[0].wrapper = $('#pergunta-1-wrapper')
    this.perguntas[1].wrapper = $('#pergunta-2-wrapper')
    this.perguntas[2].wrapper = $('#pergunta-3-wrapper')
    this.resultadoWrapper = $('#resultado-wrapper')
    this.lblPerguntaIndex = $('#lbl-pergunta-index')
    this.lblPerguntaTitulo = $('#lbl-pergunta-titulo')
    this.lblPerguntaDescricao = $('#lbl-pergunta-descricao')
    this.btnProximo = $('#btn-proximo').on('click', () => void this.proximo())
    this.btnComecarTeste = $('#btn-comecar-teste').on(
      'click',
      () => void this.iniciar()
    )

    this.update()
  }

  iniciar() {
    console.log('teste iniciar')

    this.menuInicial.fadeOut(() => {
      this.menuInicial.remove()
      this.spinner.fadeIn(() => {
        this.spinner.delay(600).fadeOut(() => {})
        setTimeout(() => {
          this.menuPerguntas.addClass('d-flex')
        }, 1000)
      })
    })

    this.perguntas.forEach(
      (v, k) =>
        void v.wrapper.find('div.card').on('click', (e) => {
          const el = $(e.currentTarget)
          const selecionado = el.data('selected') === 'true'
          const index = el.data('index')
          this.perguntas[k].escolhas[index] = !selecionado
          el.toggleClass('border-primary', !selecionado).data(
            'selected',
            selecionado ? 'false' : 'true'
          )
          this.btnProximo.prop(
            'disabled',
            Object.values(this.perguntas[k].escolhas).filter((f) => f === true)
              .length < 1
          )
        })
    )
  }

  update() {
    console.log('teste update')

    this.lblPerguntaTitulo.text(this.perguntas[this.perguntaIndex].titulo)
    this.lblPerguntaDescricao.text(this.perguntas[this.perguntaIndex].descricao)
    this.lblPerguntaIndex.text(
      `Pergunta ${this.perguntaIndex + 1}/${this.perguntas.length}`
    )
  }

  proximo() {
    console.log('teste proximo')

    this.btnProximo.prop('disabled', true)

    switch (this.perguntaIndex) {
      case 0:
        this.perguntas[0].wrapper.fadeOut(() => {
          this.perguntas[0].wrapper.remove()
          this.perguntas[1].wrapper.removeClass('d-none').addClass('d-flex')
        })
        break
      case 1:
        this.perguntas[1].wrapper.fadeOut(() => {
          this.perguntas[1].wrapper.remove()
          this.perguntas[2].wrapper.removeClass('d-none').addClass('d-flex')
        })
        break
      case 2:
        this.menuPerguntas.fadeOut(() => {
          this.perguntas[2].wrapper.remove()
          this.menuPerguntas.remove()
          setTimeout(() => {
            this.spinner.fadeIn()
            setTimeout(() => {
              this.spinner.fadeOut(() => {
                this.menuFinal
                  .removeClass('d-none')
                  .addClass('d-flex')
                  .fadeIn(() => {
                    setTimeout(() => {
                      const recomendacoes = this.calcular()
                      this.resultadoWrapper
                        .append(
                          ...recomendacoes.map((v, k) => {
                            const porcentagem = `${Math.round(
                              v.recomendacao * 100
                            )}`
                            return $(`
                              <div class="card shadow-sm mb-3 result-card" data-index="${k}" style="display: none;">
                                <div class="card-body d-flex pb-2">
                                  <span class="mdi mdi-school mr-4"></span>
                                  <div class="flex-grow-1 pr-3">
                                    <h6 class="text-left">${v.nome}</h6>
                                    <div class="progress">
                                      <div class="progress-bar bg-info" role="progressbar" style="width: ${porcentagem}%" aria-valuenow="${porcentagem}"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-right float-right pt-0 text-muted">${porcentagem}%</small>
                                  </div>
                                </div>
                              </div>
                            `)
                          })
                        )
                        .addClass('h-100')
                      $('.fade-in').fadeIn()
                      $('.result-card').fadeIn(3000)
                    }, 1000)
                  })
              })
            }, 1200)
          }, 100)
        })
        break
    }

    this.perguntaIndex += this.perguntaIndex < this.perguntas.length - 1 ? 1 : 0

    this.update()
    this.scrollToTop()
  }

  calcular() {
    console.log('teste calcular')

    const pontos = this.perguntas
      .map((v) =>
        Object.entries(v.escolhas)
          .filter(([, v2]) => v2 === true)
          .map(([k2]) => v.alternativas[parseInt(k2)].peso)
      )
      .flat()
      .reduce((a, b) => ({
        arte: a.arte + b.arte,
        ciencia: a.ciencia + b.ciencia,
        economia: a.economia + b.economia,
        humanas: a.humanas + b.humanas,
        legal: a.legal + b.legal,
        lideranca: a.lideranca + b.lideranca,
        matematica: a.matematica + b.matematica,
        saude: a.saude + b.saude,
        tecnologia: a.tecnologia + b.tecnologia,
      }))

    const maior = Math.max(...Object.values(pontos))

    /**
     * @type {import(".").Peso}
     */
    const pesoFinal = {
      arte: (pontos.arte / maior) * 5,
      ciencia: (pontos.ciencia / maior) * 5,
      economia: (pontos.economia / maior) * 5,
      humanas: (pontos.humanas / maior) * 5,
      legal: (pontos.legal / maior) * 5,
      lideranca: (pontos.lideranca / maior) * 5,
      matematica: (pontos.matematica / maior) * 5,
      saude: (pontos.saude / maior) * 5,
      tecnologia: (pontos.tecnologia / maior) * 5,
    }

    const recomendacoes = cursos
      .map((v) => {
        const peso = v.peso
        /**
         * @type {import(".").Peso}
         */
        const diferencaMap = {
          arte: clamp(pesoFinal.arte - peso.arte),
          ciencia: clamp(pesoFinal.ciencia - peso.ciencia),
          economia: clamp(pesoFinal.economia - peso.economia),
          humanas: clamp(pesoFinal.humanas - peso.humanas),
          legal: clamp(pesoFinal.legal - peso.legal),
          lideranca: clamp(pesoFinal.lideranca - peso.lideranca),
          matematica: clamp(pesoFinal.matematica - peso.matematica),
          saude: clamp(pesoFinal.saude - peso.saude),
          tecnologia: clamp(pesoFinal.tecnologia - peso.tecnologia),
        }

        /**
         * @type {import(".").Curso & { diferenca: number }}
         */
        const curso = {
          ...v,
          diferenca: Object.values(diferencaMap).reduce((a, b) => a + b),
        }
        return curso
      })
      .sort((a, b) => a.diferenca - b.diferenca)

    const maximo = Math.max(...recomendacoes.map((v) => v.diferenca))

    return recomendacoes.map((v) => ({
      ...v,
      recomendacao: 1 - v.diferenca / maximo,
    }))
  }

  scrollToTop() {
    document.getElementById('teste-vocacional').scrollIntoView()
  }

  log() {
    console.log('teste log')

    console.log(this)
  }
}

$(() => {
  const teste = new Teste()
  teste.log()
})
