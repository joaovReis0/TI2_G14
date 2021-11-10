/// <reference path="../vendor/jquery-3.5.1.js" />

export type Categoria = {
  nome: string
}

export type Curso = {
  avaliacao: number
  categorias: Categoria[]
  nome: string
  peso: Peso
}

export type Peso = {
  arte: number
  ciencia: number
  economia: number
  humanas: number
  legal: number
  lideranca: number
  matematica: number
  saude: number
  tecnologia: number
}

export type Pergunta = {
  descricao: string
  escolhas: { [key: string]: string } //indica um objeto onde a chave é string
  alternativas: Alternativa[]
  titulo: string
  wrapper: JQuery<HTMLElement>
}

export type Alternativa = {
  nome: string
  peso: Peso
}

export type LeituraCurso = {
  titulo: string
  imagem: string
  avaliacao: number
  remuneracao: string
  empregados: string
  textoprincipal: string[]
  tituloramificacao?: string
  ramificacao?: { titulo: string; texto: string }[]
  titulo3: string
  subtexto: string
  caracteristica: string[]
}
export type TelaIicial = {
  id: number
  titulo: string
  avaliacao: number
  quantramificacao: number
  remuneracao: number
}
export type Contato = {
  nome: string
  email: string
  mensagem: string
}

export type TopCurso = {
  avaliacao: number
  categorias: string[]
  comentarios: number
  descricao: string
  id: number
  imagem: string
  remuneracao: string
  titulo: string
}
