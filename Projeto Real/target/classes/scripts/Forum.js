var defaultThreads = [
{
    id:1,
    title: "Primera Postagem",
    author: "Qvocação",
    date: Date.now(),
    content: "Essa é a primeira postagem do fórum de nosso site!",
    comments: [
        {
            author: "Qvocação",
            date: Date.now(),
            content: "Esse é o primeiro comentário do fórum do nosso site. :)" 
        },
        {
            author: "Anônimo",
            date: Date.now(),
            content: "Estou ansionso para utilizar essa ferramenta!",
            rating: 0
        }
    ]
},
{
    id: 2,
    title: "Sobre o fórum",
    author: "Anônimo",
    date: Date.now(),
    content: "Achei muito bacana a iniciativa da Qvocação de iniciar um forum de discussões dentro desta plataforma que tem me ajudado bastante!",
    comments: [
        {
            author: "Qvocação",
            date: Date.now(),
            content: "A equipe da Qvocação agradece pelo seu feedback e o entusiasmo com relação a nossa nova plataforma. Obrigado e esperamos te ajudar na suas escolhas profissionais!",
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
