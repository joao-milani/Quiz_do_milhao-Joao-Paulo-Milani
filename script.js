const bancoPerguntas = [
  {"categoria": "Português", "pergunta": "Em qual alternativa o uso da palavra “por que” está correto, considerando uma pergunta direta?", "alternativas": ["Não entendi por que você saiu mais cedo.", "Você saiu cedo porque?", "O porquê você saiu cedo?", "Não entendi por quê motivo saiu."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Uma loja oferece 15% de desconto em um produto de R$ 240. Qual será o preço pago após o desconto?", "alternativas": ["R$ 204, pois o desconto corresponde a R$ 36.", "R$ 216, pois o desconto corresponde a R$ 24.", "R$ 200, pois o desconto corresponde a R$ 40.", "R$ 225, pois o desconto corresponde a R$ 15."], "correta": 0},
  {"categoria": "História", "pergunta": "A Independência do Brasil, proclamada em 1822, significou principalmente:", "alternativas": ["A ruptura política com Portugal, embora várias estruturas sociais tenham permanecido.", "O fim imediato da escravidão e a distribuição de terras a toda a população.", "A implantação de uma república democrática com voto universal.", "A saída de todos os portugueses e o fim das relações comerciais com a Europa."], "correta": 0},
  {"categoria": "Geografia", "pergunta": "Qual característica explica melhor a enorme extensão territorial da Rússia?", "alternativas": ["Seu território se estende por partes da Europa e da Ásia, atravessando muitos fusos horários.", "O país ocupa todas as ilhas do oceano Pacífico e do oceano Atlântico.", "A Rússia é formada exclusivamente por territórios localizados ao sul do Equador.", "Sua área inclui a maior parte do continente africano."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Por que as mitocôndrias são frequentemente chamadas de “usinas de energia” das células?", "alternativas": ["Porque participam da respiração celular e produzem grande parte do ATP utilizado pela célula.", "Porque armazenam toda a informação genética do organismo e controlam a divisão celular.", "Porque fabricam proteínas diretamente a partir da luz solar.", "Porque impedem a entrada de qualquer substância na célula."], "correta": 0},
  {"categoria": "Química", "pergunta": "A água é representada pela fórmula H₂O. O que essa fórmula indica?", "alternativas": ["Cada molécula possui dois átomos de hidrogênio e um átomo de oxigênio.", "Cada molécula possui dois átomos de oxigênio e um de hidrogênio.", "A água é formada por hidrogênio e oxigênio em partes iguais de átomos.", "Cada molécula possui dois átomos de hidrogênio e dois de oxigênio."], "correta": 0},
  {"categoria": "Física", "pergunta": "No Sistema Internacional de Unidades, qual unidade é utilizada para medir a intensidade de uma força?", "alternativas": ["Newton (N), unidade equivalente a kg·m/s².", "Joule (J), unidade utilizada para medir exclusivamente a temperatura.", "Watt (W), unidade que mede diretamente a massa de um objeto.", "Pascal (Pa), unidade usada para medir a quantidade de matéria."], "correta": 0},
  {"categoria": "Inglês", "pergunta": "Em inglês, a palavra “although” é usada para introduzir uma ideia de:", "alternativas": ["Concessão ou contraste, com sentido semelhante a “embora”.", "Finalidade, com sentido semelhante a “para que”.", "Causa, com sentido semelhante a “porque”.", "Tempo futuro, com sentido semelhante a “amanhã”."], "correta": 0},
  {"categoria": "Literatura", "pergunta": "Em “Dom Casmurro”, de Machado de Assis, qual elemento torna a narrativa especialmente ambígua?", "alternativas": ["O narrador Bentinho conta os acontecimentos a partir de sua própria perspectiva, que pode ser parcial.", "A história é narrada por um observador que conhece igualmente todos os pensamentos.", "A obra apresenta apenas documentos históricos sem opiniões pessoais.", "O narrador confirma todas as suspeitas com provas independentes e incontestáveis."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Um terreno retangular mede 12 metros de comprimento e 8 metros de largura. Qual é sua área total?", "alternativas": ["96 m², obtidos multiplicando comprimento por largura.", "40 m², obtidos somando comprimento e largura.", "20 m², obtidos dividindo comprimento pela largura.", "192 m², obtidos dobrando o produto das medidas."], "correta": 0},
  {"categoria": "História", "pergunta": "A Proclamação da República no Brasil, em 1889, resultou na substituição:", "alternativas": ["Da monarquia por um regime republicano, em um movimento liderado por militares e apoiado por setores civis.", "Da república por uma monarquia constitucional comandada por Dom Pedro II.", "Do governo federal por uma administração colonial portuguesa.", "Do trabalho assalariado pela restauração oficial da escravidão."], "correta": 0},
  {"categoria": "Geografia", "pergunta": "Qual é a função geográfica da Linha do Equador?", "alternativas": ["É uma linha imaginária de latitude 0° que divide a Terra em hemisférios Norte e Sul.", "É o meridiano de longitude 0° que separa os hemisférios Oriental e Ocidental.", "É uma fronteira política que separa todos os países tropicais.", "É uma linha que marca o limite entre a crosta terrestre e o manto."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Durante a fotossíntese, qual é o papel do dióxido de carbono absorvido pelas plantas?", "alternativas": ["Fornecer átomos de carbono que serão utilizados na produção de moléculas orgânicas, como açúcares.", "Substituir a água e funcionar como única fonte de energia para a planta.", "Ser transformado diretamente em nitrogênio para formar proteínas.", "Impedir que a clorofila absorva energia luminosa."], "correta": 0},
  {"categoria": "Química", "pergunta": "O ouro possui símbolo químico Au. De onde vem esse símbolo?", "alternativas": ["Do termo latino “aurum”, utilizado para designar o ouro.", "Da abreviação portuguesa formada pelas primeiras letras da palavra ouro.", "Do nome de um cientista chamado Augusto.", "Da fórmula química do oxigênio combinado com urânio."], "correta": 0},
  {"categoria": "Física", "pergunta": "Um veículo percorre 150 quilômetros em 3 horas, mantendo velocidade média constante. Qual é essa velocidade média?", "alternativas": ["50 km/h, pois a distância percorrida é dividida pelo tempo gasto.", "45 km/h, pois o tempo deve ser multiplicado pela distância.", "153 km/h, pois distância e tempo devem ser somados.", "30 km/h, pois a distância deve ser dividida pelo quadrado do tempo."], "correta": 0},
  {"categoria": "Português", "pergunta": "Na frase “A estudante dedicada concluiu a atividade”, qual palavra exerce a função de adjetivo?", "alternativas": ["“Dedicada”, pois caracteriza o substantivo “estudante”.", "“Estudante”, pois indica uma ação realizada no passado.", "“Concluiu”, pois caracteriza uma pessoa ou objeto.", "“Atividade”, pois expressa uma circunstância de modo."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Uma turma tem 40 estudantes e 30% deles participam de um clube de leitura. Quantos estudantes participam do clube?", "alternativas": ["12 estudantes, pois 30% de 40 é igual a 12.", "10 estudantes, pois 30% corresponde sempre a 10 alunos.", "14 estudantes, pois se somam 30 e 40 e divide-se por 5.", "30 estudantes, pois a porcentagem indica o número exato de participantes."], "correta": 0},
  {"categoria": "Sociologia", "pergunta": "Em uma democracia representativa, como ocorre normalmente a participação política dos cidadãos?", "alternativas": ["Os cidadãos elegem representantes e também podem participar por debates, organizações e outras formas legais.", "A população transfere permanentemente todos os seus direitos a uma única pessoa.", "As decisões políticas ficam restritas a integrantes das Forças Armadas.", "As eleições são dispensadas porque representantes assumem sem consulta pública."], "correta": 0},
  {"categoria": "Filosofia", "pergunta": "A frase “Só sei que nada sei”, associada a Sócrates, expressa principalmente:", "alternativas": ["O reconhecimento dos limites do próprio conhecimento e a disposição para questionar e investigar.", "A ideia de que estudar é inútil e que nenhuma afirmação pode ser discutida.", "A defesa de que apenas os governantes podem alcançar qualquer conhecimento.", "A certeza de que todas as opiniões possuem exatamente a mesma validade."], "correta": 0},
  {"categoria": "Artes", "pergunta": "Qual é a importância histórica dos painéis “Guerra e Paz”, de Cândido Portinari?", "alternativas": ["Eles representam os horrores da guerra e a esperança da paz em grandes painéis destinados à sede da ONU.", "Eles retratam exclusivamente paisagens rurais brasileiras sem relação com temas sociais.", "Eles foram criados para decorar o interior de uma pirâmide do Egito Antigo.", "Eles defendem a guerra como solução permanente para conflitos entre países."], "correta": 0},
  {"categoria": "Química", "pergunta": "Em uma escala de pH usual, uma solução com pH 3 é classificada como:", "alternativas": ["Ácida, pois apresenta pH inferior a 7.", "Neutra, pois todo valor numérico de pH representa neutralidade.", "Básica, pois apresenta pH inferior ao da água pura.", "Metálica, pois o pH identifica diretamente a presença de metais."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Quantos cromossomos existem normalmente no núcleo de uma célula somática humana diploide?", "alternativas": ["46 cromossomos, organizados em 23 pares.", "23 cromossomos, organizados em 46 pares.", "44 cromossomos, além de dois núcleos independentes.", "48 cromossomos, organizados em 24 pares."], "correta": 0},
  {"categoria": "Geografia", "pergunta": "Curitiba é a capital de qual unidade federativa brasileira?", "alternativas": ["Paraná, estado localizado na Região Sul do Brasil.", "Santa Catarina, estado cuja capital é Florianópolis.", "Rio Grande do Sul, estado cuja capital é Porto Alegre.", "São Paulo, estado cuja capital é a cidade de São Paulo."], "correta": 0},
  {"categoria": "História", "pergunta": "Por que a Revolução Industrial começou na Inglaterra no século XVIII?", "alternativas": ["A combinação de capital, recursos minerais, mudanças agrícolas, mercado consumidor e disponibilidade de mão de obra favoreceu a industrialização.", "Porque a Inglaterra não possuía comércio marítimo e precisou produzir tudo isoladamente.", "Porque a industrialização foi proibida nos demais países europeus durante todo o século.", "Porque a população inglesa abandonou as cidades e passou a viver exclusivamente da agricultura."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Em um triângulo retângulo, os catetos medem 3 cm e 4 cm. Quanto mede a hipotenusa?", "alternativas": ["5 cm, conforme o teorema de Pitágoras: 3² + 4² = 5².", "6 cm, pois a hipotenusa é sempre a soma dos catetos.", "7 cm, pois basta somar os comprimentos dos dois catetos.", "12 cm, pois a hipotenusa é o produto dos catetos."], "correta": 0},
  {"categoria": "Física", "pergunta": "Qual é a unidade de energia no Sistema Internacional e em qual situação ela pode ser usada?", "alternativas": ["Joule (J), usado para expressar, por exemplo, o trabalho realizado por uma força.", "Watt (W), unidade que mede a energia total armazenada sem considerar o tempo.", "Newton (N), unidade usada para medir diretamente a temperatura de um corpo.", "Ampere (A), unidade que expressa a distância percorrida por um objeto."], "correta": 0},
  {"categoria": "Inglês", "pergunta": "Qual alternativa apresenta corretamente o passado simples do verbo irregular “go”?", "alternativas": ["“Went”, como em “They went to school yesterday”.", "“Goed”, como em “They goed to school yesterday”.", "“Gone”, usado como passado simples em todas as frases afirmativas.", "“Going”, forma usada exclusivamente para indicar uma ação concluída no passado."], "correta": 0},
  {"categoria": "Português", "pergunta": "Na frase “A cidade acordou antes do sol”, qual figura de linguagem aparece?", "alternativas": ["Personificação, pois uma ação humana é atribuída à cidade.", "Hipérbole, pois há necessariamente um exagero numérico.", "Onomatopeia, pois a frase reproduz um som.", "Eufemismo, pois substitui uma expressão desagradável por outra mais suave."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Qual é a principal função do sistema circulatório no corpo humano?", "alternativas": ["Transportar sangue, levando oxigênio e nutrientes aos tecidos e ajudando a remover resíduos.", "Realizar a digestão química dos alimentos no interior do estômago.", "Produzir todos os hormônios e controlar exclusivamente os sentidos.", "Permitir a entrada de ar nos pulmões por meio das vias respiratórias."], "correta": 0},
  {"categoria": "Geografia", "pergunta": "Qual oceano banha a maior parte do litoral brasileiro?", "alternativas": ["Oceano Atlântico, situado a leste do território brasileiro.", "Oceano Pacífico, que banha diretamente toda a costa oriental do Brasil.", "Oceano Índico, localizado entre o Brasil e a África.", "Oceano Ártico, que se estende até a costa sul-americana."], "correta": 0},
  {"categoria": "História", "pergunta": "Quem foi Deodoro da Fonseca no contexto da história brasileira?", "alternativas": ["O marechal que liderou o movimento militar que proclamou a República em 1889 e se tornou o primeiro presidente.", "O imperador que declarou a Independência do Brasil em 1822.", "O líder abolicionista que assinou a Lei Áurea em nome da princesa Isabel.", "O presidente responsável pela construção de Brasília na década de 1950."], "correta": 0},
  {"categoria": "Química", "pergunta": "Qual partícula subatômica apresenta carga elétrica negativa?", "alternativas": ["O elétron, que possui carga negativa e ocupa regiões ao redor do núcleo atômico.", "O próton, que possui carga negativa e fica fora do núcleo.", "O nêutron, que apresenta carga positiva e determina o número atômico.", "O núcleo, que é uma partícula única sem prótons nem nêutrons."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Qual é a soma dos ângulos internos de qualquer triângulo plano na geometria euclidiana?", "alternativas": ["180°, independentemente dos comprimentos dos lados ou do formato do triângulo.", "90°, desde que os três lados tenham comprimentos diferentes.", "270°, pois cada ângulo interno mede no mínimo 90°.", "360°, porque a soma é igual à de qualquer quadrilátero."], "correta": 0},
  {"categoria": "Filosofia", "pergunta": "Na obra “A República”, Platão discute, entre outros temas, a justiça e a organização da cidade. Qual ideia está associada ao diálogo?", "alternativas": ["A reflexão sobre uma cidade justa e sobre o papel da educação na formação dos cidadãos.", "A defesa de que a justiça consiste sempre em obedecer ao mais forte, sem questionamento.", "A proposta de abolir toda forma de conhecimento e de debate político.", "A descrição de uma democracia moderna baseada no sufrágio universal contemporâneo."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Qual é a principal diferença entre mitose e meiose?", "alternativas": ["A mitose geralmente gera duas células geneticamente semelhantes; a meiose gera células com metade do número de cromossomos.", "A mitose forma apenas gametas, enquanto a meiose produz células somáticas idênticas.", "A mitose reduz pela metade os cromossomos em todas as divisões; a meiose duplica o número cromossômico.", "Ambas sempre produzem quatro células idênticas com o mesmo número de cromossomos da célula inicial."], "correta": 0},
  {"categoria": "Física", "pergunta": "Um objeto em movimento possui energia cinética. De que fatores essa energia depende?", "alternativas": ["Da massa do objeto e do quadrado de sua velocidade, conforme Ec = mv²/2.", "Apenas da altura do objeto em relação ao chão, independentemente da velocidade.", "Somente da temperatura do ambiente em que o objeto se encontra.", "Da pressão atmosférica e do volume do objeto, sem relação com seu movimento."], "correta": 0},
  {"categoria": "Literatura", "pergunta": "Qual característica é frequentemente associada ao Romantismo brasileiro do século XIX?", "alternativas": ["A valorização dos sentimentos, da subjetividade e, em certas fases, da identidade nacional e da natureza.", "A defesa exclusiva da objetividade científica e da linguagem impessoal.", "A rejeição de qualquer emoção e a imitação rigorosa da arte greco-romana.", "A utilização obrigatória de temas industriais e de linguagem matemática."], "correta": 0},
  {"categoria": "Geografia", "pergunta": "Qual característica ajuda a explicar a biodiversidade da Amazônia?", "alternativas": ["O clima predominantemente quente e úmido, a grande disponibilidade de água e a variedade de habitats.", "A ausência quase total de chuvas e a predominância de temperaturas abaixo de zero.", "A presença exclusiva de vegetação rasteira adaptada à falta de água.", "O isolamento completo de todos os rios e ecossistemas entre si."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Uma equação do primeiro grau é dada por 3x + 5 = 20. Qual é o valor de x?", "alternativas": ["x = 5, pois 3x = 15 e, dividindo por 3, obtém-se 5.", "x = 15, pois basta subtrair 5 de 20 e ignorar o coeficiente 3.", "x = 25, pois os dois números devem ser somados.", "x = 3, pois o coeficiente de x é sempre a solução."], "correta": 0},
  {"categoria": "História", "pergunta": "Qual foi o significado jurídico da Lei Áurea, assinada em 13 de maio de 1888?", "alternativas": ["Ela aboliu legalmente a escravidão no Brasil, mas não garantiu, por si só, políticas de inclusão social aos libertos.", "Ela concedeu imediatamente terras, moradia e emprego a todas as pessoas libertas.", "Ela proclamou a República e encerrou o período imperial brasileiro.", "Ela instituiu a escravidão como forma oficial de trabalho assalariado."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Por que o oxigênio é importante para muitas células humanas?", "alternativas": ["Ele participa da respiração celular aeróbica, processo que permite produzir grande quantidade de ATP.", "Ele é a principal molécula usada para armazenar informações genéticas no DNA.", "Ele substitui todos os nutrientes e fornece energia sem reações químicas.", "Ele impede a circulação sanguínea e bloqueia a produção de ATP."], "correta": 0},
  {"categoria": "Português", "pergunta": "Em um texto argumentativo, qual é a função principal da tese?", "alternativas": ["Apresentar o posicionamento central que será defendido por meio de argumentos ao longo do texto.", "Reunir apenas exemplos sem indicar o ponto de vista do autor.", "Encerrar o texto com uma frase sem relação com o tema.", "Substituir todos os argumentos por uma pergunta retórica."], "correta": 0},
  {"categoria": "Sociologia", "pergunta": "Como a desigualdade social pode afetar o acesso à educação e à saúde?", "alternativas": ["Pode criar diferenças nas oportunidades e na qualidade dos serviços disponíveis conforme renda e condições sociais.", "Garante que todas as pessoas recebam serviços idênticos, independentemente de sua renda.", "Afeta somente as preferências pessoais, sem relação com instituições ou políticas públicas.", "Elimina automaticamente diferenças regionais e econômicas entre os cidadãos."], "correta": 0},
  {"categoria": "Física", "pergunta": "Qual instrumento é utilizado para medir a temperatura de um corpo ou ambiente?", "alternativas": ["Termômetro, que utiliza uma escala de temperatura, como Celsius ou Kelvin.", "Barômetro, que mede a pressão atmosférica.", "Dinamômetro, que mede força.", "Amperímetro, que mede corrente elétrica."], "correta": 0},
  {"categoria": "Biologia", "pergunta": "Qual é a função principal da hemoglobina presente nos glóbulos vermelhos?", "alternativas": ["Ligar-se ao oxigênio de forma reversível e contribuir para seu transporte pelo sangue.", "Produzir anticorpos para combater diretamente todos os vírus.", "Digerir proteínas no intestino delgado.", "Transmitir impulsos elétricos entre neurônios."], "correta": 0},
  {"categoria": "Matemática", "pergunta": "Uma fração representa 2/5 de um total. Qual é sua forma percentual?", "alternativas": ["40%, pois 2 dividido por 5 é 0,4, equivalente a 40%.", "20%, pois basta transformar o denominador em porcentagem.", "25%, pois toda fração própria equivale a um quarto.", "50%, pois o numerador é menor que o denominador."], "correta": 0},
  {"categoria": "Artes", "pergunta": "Por que o grafite é considerado uma forma importante de arte urbana?", "alternativas": ["Porque utiliza espaços públicos para comunicar ideias, identidades e críticas sociais, dialogando com a cidade.", "Porque só pode ser produzido em telas expostas dentro de museus privados.", "Porque não apresenta escolhas estéticas nem qualquer intenção comunicativa.", "Porque é uma técnica exclusiva de pintura religiosa medieval."], "correta": 0},
  {"categoria": "Geografia", "pergunta": "Por que a África é reconhecida como o continente com o maior número de países soberanos?", "alternativas": ["Porque reúne mais de cinquenta Estados independentes, embora a contagem possa variar conforme o critério adotado.", "Porque todos os países do continente pertencem politicamente à União Europeia.", "Porque o continente é dividido apenas em quatro grandes países.", "Porque cada ilha africana é obrigatoriamente considerada um país independente."], "correta": 0},
  {"categoria": "Filosofia", "pergunta": "Qual foi uma ideia central do Iluminismo europeu dos séculos XVII e XVIII?", "alternativas": ["Valorizar a razão, a investigação e a crítica ao poder absoluto, influenciando debates sobre direitos e governo.", "Defender que o conhecimento científico deveria ser proibido por contrariar a tradição.", "Sustentar que os monarcas não deveriam obedecer a nenhuma lei ou limite.", "Rejeitar a educação e a circulação de ideias entre diferentes grupos sociais."], "correta": 0},
  {"categoria": "Conhecimentos gerais", "pergunta": "Um hexágono é um polígono com quantos lados e vértices?", "alternativas": ["Seis lados e seis vértices, pois cada lado se encontra com os lados vizinhos em um vértice.", "Cinco lados e seis vértices, pois um dos lados não forma ângulo.", "Sete lados e sete vértices, pois o prefixo “hexa” indica sete.", "Oito lados e quatro vértices, pois os lados são contados em pares."], "correta": 0}
];

// Cada partida usa 10 perguntas diferentes, escolhidas aleatoriamente.
// A seleção é distribuída por faixas de dificuldade para aumentar o desafio a cada etapa.
let perguntas = [];
const TOTAL_PERGUNTAS_PARTIDA = 10;
const VALOR_PERGUNTA = 100000;

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function pontuarDificuldade(q) {
  const texto = `${q.pergunta} ${q.alternativas.join(' ')}`.toLowerCase();
  let pontos = texto.length / 90;
  const indicadores = [
    [/porcentagem|%|raiz quadrada|equação|(?:^|\W)x(?:$|\W)|ângulos internos|valor de|calcule|quanto é .*\//, 2.2],
    [/revolução|iluminismo|metáfora|fotossíntese|cromossomos|sistema internacional|democracia|desigualdade|romantismo|partícula|energia/, 1.2],
    [/qual é|quem foi|quem escreveu|qual .* símbolo|o que significa|quantos lados/, -0.4]
  ];
  for (const [regex, valor] of indicadores) if (regex.test(texto)) pontos += valor;
  if (q.categoria === 'Matemática' || q.categoria === 'Física' || q.categoria === 'Química') pontos += 0.6;
  return pontos;
}

function prepararPartida() {
  const ordenadas = [...bancoPerguntas].sort((a, b) => pontuarDificuldade(a) - pontuarDificuldade(b));
  const grupos = Array.from({ length: TOTAL_PERGUNTAS_PARTIDA }, () => []);
  ordenadas.forEach((pergunta, indice) => {
    const nivel = Math.min(TOTAL_PERGUNTAS_PARTIDA - 1, Math.floor(indice * TOTAL_PERGUNTAS_PARTIDA / ordenadas.length));
    grupos[nivel].push(pergunta);
  });
  perguntas = grupos.map((grupo, indice) => {
    const escolhida = embaralhar(grupo)[0];
    return { ...escolhida, alternativas: [...escolhida.alternativas], nivelDificuldade: indice + 1 };
  });
}

const PREMIO_MAXIMO = 1000000;
const CHAVE_RANKING = "quizMilhaoRanking";

const telaInicial = document.getElementById("tela-inicial");
const formularioEntrada = document.getElementById("form-entrada");
const nomeInput = document.getElementById("nome-usuario");
const painelE = document.getElementById("painel");
const resultadoE = document.getElementById("resultado");
const podioE = document.getElementById("podio");
const podioLista = document.getElementById("podio-lista");
const nomeAtualE = document.getElementById("nome-atual");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const categoriaE = document.getElementById("categoria");
const barraProgressoE = document.getElementById("barra-progresso");
const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const dobrarBtn = document.getElementById("dobrar");
const pularBtn = document.getElementById("pular");
const eliminarBtn = document.getElementById("eliminar");
const desistirBtn = document.getElementById("desistir");
const proximaBtn = document.getElementById("proxima");

let nomeUsuario = "";
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;
let jogoFinalizado = false;
let dobrarAtivo = false;
let resultadoRegistrado = false;
let dataResultadoAtual = null;
let recursos = { dobrar: true, pular: true, eliminar: true };


// Música ambiente suave gerada no navegador (sem arquivos externos).
let contextoMusical = null;
let osciladoresMusicais = [];
let temporizadorMusical = null;
let musicaLigada = false;
let notaMusical = 0;
const sequenciaCalma = [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 349.23];

function tocarNotaAmbiente(frequencia, quando, duracao, volume = 0.025) {
  const osc = contextoMusical.createOscillator();
  const ganho = contextoMusical.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(frequencia, quando);
  ganho.gain.setValueAtTime(0.0001, quando);
  ganho.gain.exponentialRampToValueAtTime(volume, quando + 0.35);
  ganho.gain.setValueAtTime(volume, quando + duracao * 0.65);
  ganho.gain.exponentialRampToValueAtTime(0.0001, quando + duracao);
  osc.connect(ganho);
  ganho.connect(contextoMusical.destination);
  osc.start(quando);
  osc.stop(quando + duracao + 0.05);
  osciladoresMusicais.push(osc);
  osc.onended = () => { osciladoresMusicais = osciladoresMusicais.filter(item => item !== osc); };
}

function iniciarMusica() {
  const botao = document.getElementById("alternar-musica");
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    mensagemE.textContent = "Seu navegador não permite reproduzir a música ambiente.";
    return;
  }
  if (!contextoMusical) contextoMusical = new AudioContext();
  contextoMusical.resume();
  if (musicaLigada) return;
  musicaLigada = true;
  botao.textContent = "♫ Música: ligada";
  botao.classList.add("ativo");
  botao.setAttribute("aria-pressed", "true");
  const tocarProxima = () => {
    if (!musicaLigada || !contextoMusical) return;
    const agora = contextoMusical.currentTime + 0.08;
    const frequencia = sequenciaCalma[notaMusical % sequenciaCalma.length];
    tocarNotaAmbiente(frequencia, agora, 2.7, 0.018);
    if (notaMusical % 4 === 0) tocarNotaAmbiente(frequencia / 2, agora, 3.4, 0.009);
    notaMusical++;
  };
  tocarProxima();
  temporizadorMusical = window.setInterval(tocarProxima, 1800);
}

function pararMusica() {
  musicaLigada = false;
  if (temporizadorMusical) window.clearInterval(temporizadorMusical);
  temporizadorMusical = null;
  const botao = document.getElementById("alternar-musica");
  botao.textContent = "♫ Música: ligar";
  botao.classList.remove("ativo");
  botao.setAttribute("aria-pressed", "false");
}

// Efeitos sonoros de resposta: notas curtas e distintas para acerto e erro.
function tocarSom(tipo) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!contextoMusical) contextoMusical = new AudioContext();
    if (contextoMusical.state === "suspended") contextoMusical.resume();

    const agora = contextoMusical.currentTime + 0.02;
    const notas = tipo === "correto"
      ? [{ frequencia: 660, tempo: 0 }, { frequencia: 880, tempo: 0.13 }]
      : [{ frequencia: 330, tempo: 0 }, { frequencia: 220, tempo: 0.16 }];

    notas.forEach(nota => {
      const oscilador = contextoMusical.createOscillator();
      const ganho = contextoMusical.createGain();
      oscilador.type = tipo === "correto" ? "sine" : "triangle";
      oscilador.frequency.setValueAtTime(nota.frequencia, agora + nota.tempo);
      ganho.gain.setValueAtTime(0.0001, agora + nota.tempo);
      ganho.gain.exponentialRampToValueAtTime(0.16, agora + nota.tempo + 0.025);
      ganho.gain.exponentialRampToValueAtTime(0.0001, agora + nota.tempo + 0.24);
      oscilador.connect(ganho);
      ganho.connect(contextoMusical.destination);
      oscilador.start(agora + nota.tempo);
      oscilador.stop(agora + nota.tempo + 0.26);
    });
  } catch (erro) {
    // O jogo continua normalmente caso o navegador bloqueie o áudio.
  }
}

function formatarDinheiro(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function atualizarPremio() {
  premioE.textContent = formatarDinheiro(premioAtual);
}

function obterRanking() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_RANKING) || "[]");
    if (!Array.isArray(dados)) return [];
    return dados.filter(item =>
      item && typeof item.nome === "string" &&
      Number.isFinite(item.premio) && Number.isFinite(item.data)
    );
  } catch (erro) {
    return [];
  }
}

function salvarResultado() {
  if (resultadoRegistrado || !nomeUsuario) return;
  resultadoRegistrado = true;
  dataResultadoAtual = Date.now();
  const ranking = obterRanking();
  ranking.push({ nome: nomeUsuario, premio: premioAtual, data: dataResultadoAtual });
  ranking.sort((a, b) => b.premio - a.premio || a.data - b.data);
  try {
    localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking.slice(0, 100)));
  } catch (erro) {
    mensagemE.textContent = "Não foi possível salvar o ranking neste navegador.";
  }
}

function mostrarPodio() {
  painelE.hidden = true;
  telaInicial.hidden = true;
  resultadoE.hidden = true;
  podioE.hidden = false;
  podioLista.replaceChildren();

  const ranking = obterRanking().sort((a, b) => b.premio - a.premio || a.data - b.data).slice(0, 3);
  if (ranking.length === 0) {
    const aviso = document.createElement("p");
    aviso.textContent = "Ainda não existem resultados. Seja o primeiro a jogar!";
    podioLista.appendChild(aviso);
    return;
  }

  const medalhas = ["🥇", "🥈", "🥉"];
  const classes = ["primeiro", "segundo", "terceiro"];
  ranking.forEach((jogador, indice) => {
    const item = document.createElement("div");
    item.className = `podio-item ${classes[indice]}`;
    const medalha = document.createElement("span");
    medalha.className = "podio-medalha";
    medalha.textContent = medalhas[indice];
    const info = document.createElement("div");
    info.className = "podio-info";
    const nome = document.createElement("div");
    nome.className = "podio-nome";
    nome.textContent = `${indice + 1}º lugar — ${jogador.nome}`;
    const valor = document.createElement("div");
    valor.className = "podio-valor";
    valor.textContent = formatarDinheiro(jogador.premio);
    info.append(nome, valor);
    item.append(medalha, info);
    podioLista.appendChild(item);
  });
}

function atualizarBotoesAjuda() {
  dobrarBtn.disabled = !recursos.dobrar;
  pularBtn.disabled = !recursos.pular;
  eliminarBtn.disabled = !recursos.eliminar;
}

function carregarPergunta() {
  if (perguntaAtual >= perguntas.length) {
    premioAtual = Math.min(premioAtual, PREMIO_MAXIMO);
    finalizarJogo("vitoria");
    return;
  }

  respondeu = false;
  const atual = perguntas[perguntaAtual];
  // Embaralha as alternativas a cada exibição, mantendo a resposta correta associada ao texto.
  const opcoesEmbaralhadas = embaralhar(
    atual.alternativas.map((texto, indiceOriginal) => ({ texto, correta: indiceOriginal === atual.correta }))
  );
  atual.alternativas = opcoesEmbaralhadas.map(opcao => opcao.texto);
  atual.correta = opcoesEmbaralhadas.findIndex(opcao => opcao.correta);

  numeroPerguntaE.textContent = `Pergunta ${perguntaAtual + 1} de ${TOTAL_PERGUNTAS_PARTIDA}`;
  categoriaE.textContent = `${atual.categoria} • Dificuldade ${atual.nivelDificuldade}/10`;
  perguntaE.textContent = atual.pergunta;
  mensagemE.textContent = "";
  proximaBtn.hidden = true;
  alternativasE.replaceChildren();
  barraProgressoE.style.width = `${(perguntaAtual / perguntas.length) * 100}%`;
  atualizarPremio();
  atualizarBotoesAjuda();

  atual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "alternativa";
    botao.innerHTML = `<span class="letra">${String.fromCharCode(65 + indice)}.</span>`;
    const texto = document.createElement("span");
    texto.textContent = alternativa;
    botao.appendChild(texto);
    botao.addEventListener("click", () => verificarResposta(indice, botao));
    alternativasE.appendChild(botao);
  });
}

function verificarResposta(indice, botaoSelecionado) {
  if (respondeu || jogoFinalizado) return;
  respondeu = true;
  const atual = perguntas[perguntaAtual];
  const botoes = [...alternativasE.querySelectorAll(".alternativa")];
  botoes.forEach(botao => botao.disabled = true);

  if (indice === atual.correta) {
    tocarSom("correto");
    botoes[indice].classList.add("correta");
    const ganhoBase = VALOR_PERGUNTA * (dobrarAtivo ? 2 : 1);
    const ganho = Math.min(ganhoBase, PREMIO_MAXIMO - premioAtual);
    premioAtual = Math.min(PREMIO_MAXIMO, premioAtual + Math.max(0, ganho));
    dobrarAtivo = false;
    atualizarPremio();
    mensagemE.textContent = `✅ Resposta correta! Você ganhou ${formatarDinheiro(Math.max(0, ganho))}.`;
    barraProgressoE.style.width = `${((perguntaAtual + 1) / perguntas.length) * 100}%`;
    proximaBtn.hidden = false;
    proximaBtn.textContent = perguntaAtual === perguntas.length - 1 ? "Ver resultado 🏆" : "Próxima pergunta ➜";
  } else {
    tocarSom("incorreto");
    botoes[indice].classList.add("errada");
    botoes[atual.correta].classList.add("correta");
    dobrarAtivo = false;
    mensagemE.textContent = `❌ Resposta incorreta. A resposta certa era: ${atual.alternativas[atual.correta]}.`;
    window.setTimeout(() => finalizarJogo("erro"), 1300);
  }
}

function finalizarJogo(motivo) {
  if (jogoFinalizado) return;
  jogoFinalizado = true;
  salvarResultado();
  painelE.hidden = true;
  telaInicial.hidden = true;
  podioE.hidden = true;
  resultadoE.hidden = false;

  const titulo = document.getElementById("titulo-resultado");
  const texto = document.getElementById("texto-resultado");
  document.getElementById("premio-final").textContent = formatarDinheiro(premioAtual);
  document.getElementById("jogador-final").textContent = `Jogador: ${nomeUsuario}`;

  const ranking = obterRanking().sort((a, b) => b.premio - a.premio || a.data - b.data);
  const posicao = ranking.findIndex(j => j.nome === nomeUsuario && j.premio === premioAtual && j.data === dataResultadoAtual);
  document.getElementById("colocacao-final").textContent =
    posicao >= 0 ? `Sua posição no ranking: ${posicao + 1}º lugar` : "Resultado finalizado!";

  if (motivo === "vitoria") {
    titulo.textContent = "🏆 MILIONÁRIO!";
    texto.textContent = `Incrível, ${nomeUsuario}! Você completou todas as perguntas!`;
  } else if (motivo === "desistencia") {
    titulo.textContent = "💖 Boa estratégia!";
    texto.textContent = `${nomeUsuario}, você decidiu parar e manter o prêmio acumulado.`;
  } else if (premioAtual >= 500000) {
    titulo.textContent = "🌟 Excelente desempenho!";
    texto.textContent = `${nomeUsuario}, você chegou muito longe e conquistou um grande prêmio!`;
  } else if (premioAtual > 0) {
    titulo.textContent = "👏 Bom trabalho!";
    texto.textContent = `${nomeUsuario}, continue treinando para chegar ainda mais longe!`;
  } else {
    titulo.textContent = "💗 Não desanime!";
    texto.textContent = `${nomeUsuario}, tente novamente para conquistar uma pontuação maior.`;
  }
}

function reiniciarPartida() {
  prepararPartida();
  perguntaAtual = 0;
  premioAtual = 0;
  respondeu = false;
  jogoFinalizado = false;
  dobrarAtivo = false;
  resultadoRegistrado = false;
  dataResultadoAtual = null;
  recursos = { dobrar: true, pular: true, eliminar: true };
  nomeAtualE.textContent = nomeUsuario;
  resultadoE.hidden = true;
  podioE.hidden = true;
  telaInicial.hidden = true;
  painelE.hidden = false;
  carregarPergunta();
}

formularioEntrada.addEventListener("submit", event => {
  event.preventDefault();
  const nome = nomeInput.value.trim();
  if (!nome) {
    nomeInput.focus();
    return;
  }
  nomeUsuario = nome;
  prepararPartida();
  nomeAtualE.textContent = nomeUsuario;
  perguntaAtual = 0;
  premioAtual = 0;
  respondeu = false;
  jogoFinalizado = false;
  dobrarAtivo = false;
  resultadoRegistrado = false;
  dataResultadoAtual = null;
  recursos = { dobrar: true, pular: true, eliminar: true };
  telaInicial.hidden = true;
  podioE.hidden = true;
  resultadoE.hidden = true;
  painelE.hidden = false;
  carregarPergunta();
});

dobrarBtn.addEventListener("click", () => {
  if (!recursos.dobrar || respondeu || jogoFinalizado) return;
  recursos.dobrar = false;
  dobrarAtivo = true;
  mensagemE.textContent = "💰 Ativado! O prêmio da próxima resposta correta será dobrado.";
  atualizarBotoesAjuda();
});

pularBtn.addEventListener("click", () => {
  if (!recursos.pular || respondeu || jogoFinalizado) return;
  recursos.pular = false;
  dobrarAtivo = false;
  mensagemE.textContent = "⏭️ Pergunta pulada. Você não ganha prêmio nesta pergunta.";
  respondeu = true;
  atualizarBotoesAjuda();
  proximaBtn.hidden = false;
  proximaBtn.textContent = perguntaAtual === perguntas.length - 1 ? "Ver resultado 🏆" : "Próxima pergunta ➜";
  [...alternativasE.querySelectorAll(".alternativa")].forEach(botao => botao.disabled = true);
});

eliminarBtn.addEventListener("click", () => {
  if (!recursos.eliminar || respondeu || jogoFinalizado) return;
  recursos.eliminar = false;
  const atual = perguntas[perguntaAtual];
  const erradas = [...alternativasE.querySelectorAll(".alternativa")]
    .map((botao, indice) => ({ botao, indice }))
    .filter(item => item.indice !== atual.correta);
  // Sorteia duas alternativas incorretas para remover.
  for (let i = erradas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [erradas[i], erradas[j]] = [erradas[j], erradas[i]];
  }
  erradas.slice(0, 2).forEach(item => {
    item.botao.disabled = true;
    item.botao.classList.add("eliminada");
  });
  mensagemE.textContent = "✂️ Duas alternativas incorretas foram eliminadas.";
  atualizarBotoesAjuda();
});

desistirBtn.addEventListener("click", () => {
  if (!jogoFinalizado) finalizarJogo("desistencia");
});

proximaBtn.addEventListener("click", () => {
  if (jogoFinalizado) return;
  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) finalizarJogo("vitoria");
  else carregarPergunta();
});

document.getElementById("reiniciar").addEventListener("click", reiniciarPartida);
document.getElementById("ver-podio").addEventListener("click", mostrarPodio);
document.getElementById("ver-podio-final").addEventListener("click", mostrarPodio);
document.getElementById("voltar-inicio").addEventListener("click", () => {
  podioE.hidden = true;
  if (nomeUsuario && jogoFinalizado) resultadoE.hidden = false;
  else telaInicial.hidden = false;
});
document.getElementById("inicio-final").addEventListener("click", () => {
  resultadoE.hidden = true;
  podioE.hidden = true;
  painelE.hidden = true;
  telaInicial.hidden = false;
});

document.getElementById("alternar-tema").addEventListener("click", event => {
  document.body.classList.toggle("tema-escuro");
  event.currentTarget.textContent = document.body.classList.contains("tema-escuro") ? "☀️" : "🌙";
});

document.getElementById("alternar-musica").addEventListener("click", () => {
  if (musicaLigada) pararMusica();
  else iniciarMusica();
});

// Tenta iniciar a trilha quando a pessoa começa a jogar; navegadores exigem interação.
formularioEntrada.addEventListener("submit", () => {
  if (!musicaLigada) iniciarMusica();
}, { once: true });

// O jogo começa na tela de entrada: não carregue uma pergunta automaticamente.
painelE.hidden = true;
resultadoE.hidden = true;
podioE.hidden = true;
telaInicial.hidden = false;
