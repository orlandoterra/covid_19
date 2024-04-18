let btnAnswers = document.querySelector('.question-wrapper .answers');
let cardAnswer = document.querySelector('.card.answer');
let divReset = document.querySelector('.card.answer .reset');

btnAnswers.addEventListener('click', function(e){
	e.preventDefault();
	var userAnswer = e.target.getAttribute("data-answer").toLowerCase();
	document.querySelector('.question-wrapper').classList.remove('active');
	cardAnswer.classList.add('active');
	
	switch(userAnswer) {
  case "a":
    updateAnswer(false, "Coronavírus (CID10) é uma família de vírus que causam infecções respiratórias. Geralmente, são doenças respiratórias leves a moderadas, semelhantes a um resfriado comum. O novo agente do coronavírus, com que estamos lidando agora, foi notificado no dia 31 de dezembro de 2019, após casos registrados na China. E pela semelhança genética com o coronavírus da SARS de 2003, recebeu o nome SARS-CoV-2.  SARS vem do inglês “Severe Acute Respiratory Syndrome” e CoV se refere ao CoronaVírus. Fonte OPAS");
    break;
  case "b":
    updateAnswer(true, "O SARS-CoV-2( Severe Acute Respiratory Syndrome) é um tipo de coronavírus (CoV) que ficou conhecido por causar a doença COVID-19 que tem nos atingido. ");     
    break;
  case "c":
    updateAnswer(false, "MERS = Em abril de 2012, foi isolado outro coronavírus, distinto daquele que causou a SARS-CoV no começo da década passada. O novo coronavírus era desconhecido como agente de doença humana até sua identificação, inicialmente na Arábia Saudita e, posteriormente, em outros países do Oriente Médio, na Europa e na África. Todos os casos identificados fora da Península Arábica tinham histórico de viagem ou contato com viajantes procedentes de países do Oriente Médio – Arábia Saudita, Catar, Emirados Árabes Unidos e Jordânia. Pela localização dos casos, a doença passou a ser designada como Síndrome Respiratória do Oriente Médio e difundida pelo mundo através da sigla MERS, do inglês “Middle East Respiratory Syndrome”, sendo este vírus nomeado coronavírus associado à MERS (MERSCoV). Fonte Ministerio da Saúde");
    break;
  default:
    updateAnswer(false, "Resposta incorreta ou nenhuma resposta selecionada");
	} 
});
divReset.addEventListener('click', function(e){
	e.preventDefault();
	cardAnswer.querySelector(".header").innerHTML = "";
	cardAnswer.querySelector(".answer").innerHTML = "";
	cardAnswer.classList.remove('active');
	cardAnswer.classList.remove('false');
	cardAnswer.classList.remove('true');
  divReset.innerHTML = "";
	document.querySelector('.question-wrapper.card').classList.add('active');
})

function updateAnswer(status, bodyMsg){
  if(status === false){
    cardAnswer.classList.add('false');
    cardAnswer.querySelector('.header').append("Ops! Não é essa a resposta correta.");
    var response = document.createElement("p");
    var responseText = document.createTextNode(bodyMsg);
    var btnReset = document.createElement("a");
    btnReset.setAttribute('href', '#');
    var btnResetText = document.createTextNode("Refazer");
    btnReset.appendChild(btnResetText);
    divReset.appendChild(btnReset);
    response.appendChild(responseText);
    cardAnswer.querySelector('.answer').appendChild(response);
  }else{
    cardAnswer.classList.add('true');
    cardAnswer.querySelector('.header').append("Você acertou! Sua Resposta: COVID-19");
    var response = document.createElement("p");
    var responseText = document.createTextNode(bodyMsg);
    var congrats = document.createElement("h1");
    var congratsText = document.createTextNode("Parabéns!");
    congrats.appendChild(congratsText);
    response.appendChild(responseText);
    cardAnswer.querySelector('.answer').appendChild(response);
    divReset.innerHTML = "";
    divReset.appendChild(congrats);
  }
}