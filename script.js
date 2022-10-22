const quizData = [
    {
        question: "Resolva a equação: x / 6 + x / 3 = 18 - x / 4 ",
        a: "26",
        b: "25",
        c: "24",
        d: "23",
        correct: "b",
    },

    {
        question: "Indique a alternativa que preenche adequadamente as lacunas da frase: ___ anos que o homem se pergunta: se não ___ medos, como ___ esperanças?",
        a: "Faz, houvesse, existiriam",
        b: "Fazem, houvesse, existiriam",
        c: "Faz, houvesse, existiria",
        d: "Fazem, houvessem, existiriam",
        correct: "a",
    },
    {
        question: "Numa pilha eletroquímica sempre ocorre:",
        a: "Passagem de elétrons, no circuito externo, do cátodo para o ânodo.",
        b: "Uma reação de neutralização.",
        c: "Movimentação de elétrons no interior da solução eletrolítica.",
        d: "Uma reação de oxirredução.",
        correct: "d",
    },
    {
        question: "Sobre o Realismo, assinale a afirmativa correta:",
        a: "O romance é visto como distração e não como meio de crítica às instituições sociais decadentes.",
        b: "Os escritores realistas procuram ser pessoais e objetivos.",
        c: "O romance sertanejo ou regionalista originou-se no Realismo.",
        d: "O Realismo constitui uma oposição ao idealismo romântico.",
        correct: "d",
    },
    {
        question: "Qual desses artistas é do impressionismo?",
        a: "Tarsila do Amaral",
        b: "Monet",
        c: "Van Gogh",
        d: "Aleijadinho",
        correct: "b",
    },
    {
        question: "No cruzamento de dois indivíduos híbridos Aa, espera-se obter",
        a: "indivíduos AA e aa, na proporção de 1 : 1, respectivamente.",
        b: "apenas indivíduos Aa.",
        c: "indivíduos AA, Aa e aa, na proporção de 1 : 2 : 1, respectivamente.",
        d: "indivíduos AA e aa, na proporção de 3 : 1, respectivamente.",
        correct: "c",
    },
    {
        question: "Marque a alternativa correta a respeito da Terceira lei de Newton.",
        a: "A força normal é a reação da força peso.",
        b: "Ação e reação são pares de forças com sentidos iguais e direções opostas.",
        c: "A força de ação é sempre maior que a reação.",
        d: "Toda ação corresponde a uma reação de mesma intensidade, mas sentido oposto.",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()
alert('Para finalizar esse quiz você deve acertar todas as questões!')

function loadQuiz() {

    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
       
     
    }
})