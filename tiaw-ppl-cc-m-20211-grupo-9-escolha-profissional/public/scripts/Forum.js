var defaultThreads = [
{
    id:1,
    title: "Primera Postagem",
    author: "Profissa",
    date: Date.now(),
    content: "Essa é a primeira postagem do fórum de nosso site!",
    comments: [
        {
            author: "Profissa",
            date: Date.now(),
            content: "Esse é o primeiro comentário do fórum do nosso site. :)" 
        },
        {
            author: "Pedro Henrique Paschoal",
            date: Date.now(),
            content: "Estou ansionso para utilizar essa ferramenta!",
            rating: 0
        }
    ]
},
{
    id: 2,
    title: "Sobre o fórum",
    author: "Gabriel Terra",
    date: Date.now(),
    content: "Achei muito bacana a iniciativa da Profissa de iniciar um forum de discussões dentro desta plataforma que tem me ajudado bastante!",
    comments: [
        {
            author: "Profissa",
            date: Date.now(),
            content: "A equipe da Profissa agradece pelo seu feedback e o entusiasmo com relação a nossa nova plataforma. Obrigado e esperamos te ajudar na suas escolhas profissionais Gabriel!",
            rating: 0
        }
    ]
}
]

var threads = defaultThreads
if(localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
likebtn.addEventListener('click',()=>{
    input.value = parseInt(input1.value) + 1;
})

dislikebtn.addEventListener('click',()=>{
    input2.value = parseInt(input2.value) + 1;
})
