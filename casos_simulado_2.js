const casosSimulado2 = [
    {
        id: 1,
        titulo: "Caso 1 (Estenose Aórtica)",
        caso_clinico: "Homem, 75 anos, trazido ao pronto-socorro após episódio de síncope enquanto caminhava. Refere que, nos últimos seis meses, vem apresentando dor opressiva retroesternal aos esforços (angina) e dispneia progressiva. Ao exame físico, o pulso arterial é de baixa amplitude e ascensão lenta (parvus et tardus). PA: 110/85 mmHg. O médico descreve um sopro audível na base do coração. Ao solicitar que o paciente faça força contínua fechando as mãos (manobra de handgrip), o sopro diminui de intensidade. Ao solicitar a manobra de Valsalva, o sopro também diminui. No entanto, ao pedir que o paciente fique de cócoras (agachamento), o sopro se torna mais intenso.",
        foco_ausculta: "Foco Aórtico (2º espaço intercostal direito, margem esternal).",
        som_ausculta: "Sopro mesossistólico de ejeção, de média frequência, com timbre rude/áspero e formato em \"diamante\" (crescendo-decrescendo). Apresenta forte irradiação para a fúrcula esternal e para as artérias carótidas. Pode cursar com diminuição ou desdobramento paradoxal de B2 (fechamento aórtico atrasado).",
        fisiopatologia: "Estenose Aórtica (calcífica senil). A valva espessada gera um fluxo turbulento sistólico. O handgrip (aumento da pós-carga/resistência vascular periférica) diminui o gradiente de pressão pela valva, reduzindo o sopro. O agachamento (aumento brusco do retorno venoso) aumenta o volume ejetado e a turbulência, intensificando o ruído."
    },
    {
        id: 2,
        titulo: "Caso 2 (Insuficiência Aórtica)",
        caso_clinico: "Homem, 45 anos, procura atendimento por dispneia aos esforços e sensação de \"batimentos fortes no peito\" (palpitações), especialmente ao deitar-se. Ao exame físico, observa-se PA divergente (160/50 mmHg). O pulso arterial é amplo e de colapso rápido (pulso de Corrigan ou \"martelo d'água\"). Nota-se leve oscilação da cabeça em sincronia com o pulso (Sinal de Musset). O médico posiciona o paciente sentado, inclinado para a frente e solicita que ele expire todo o ar e segure (apneia pós-expiratória), momento em que o sopro se torna muito nítido. O sopro se intensifica com a manobra de handgrip.",
        foco_ausculta: "Foco Aórtico Acessório / Foco de Erb (3º ou 4º espaço intercostal esquerdo, junto ao esterno).",
        som_ausculta: "Sopro protodiastólico aspirativo, decrescente e de alta frequência (melhor audível com o diafragma do estetoscópio). A ausculta na expiração aproxima a base do coração da parede torácica, facilitando a percepção.",
        fisiopatologia: "Insuficiência Aórtica. Ocorre refluxo de sangue da aorta para o VE na diástole devido à incompetência valvar. O handgrip eleva a resistência vascular sistêmica (pós-carga), forçando ainda mais sangue a refluir (regurgitar) para dentro do ventrículo, o que torna o sopro mais intenso e prolongado."
    },
    {
        id: 3,
        titulo: "Caso 3 (Estenose Mitral)",
        caso_clinico: "Mulher, 42 anos, relata dispneia aos moderados esforços. Refere história de amigdalites de repetição com febre na infância. Ao exame físico, observa-se cianose labial e rubor nas regiões malares (fácies mitral). O examinador posiciona a paciente em decúbito lateral esquerdo (posição de Pachon) e utiliza a campânula do estetoscópio. O sopro auscultado não se altera durante a inspiração profunda (Sinal de Rivero-Carvallo negativo) e diminui de intensidade com a manobra de handgrip.",
        foco_ausculta: "Foco Mitral (ápice cardíaco, 5º espaço intercostal esquerdo, linha hemiclavicular).",
        som_ausculta: "Hiperfonese de B1 (fechamento abrupto das cúspides endurecidas), seguida de um estalido de abertura e um sopro mesodiastólico de baixa frequência (ruflar), que termina com um reforço pré-sistólico (causado pela contração atrial empurrando o sangue final contra a valva estreita).",
        fisiopatologia: "Estenose Mitral (Reumática). A campânula e a posição de Pachon são ideais para ruídos de baixa frequência do ápice. O Sinal de Rivero-Carvallo negativo comprova que o defeito é do coração esquerdo (pois se aumentasse na inspiração, indicaria estenose tricúspide). O handgrip reduz o sopro, pois ao aumentar a pós-carga, reduz a velocidade do fluxo anterógrado."
    },
    {
        id: 4,
        titulo: "Caso 4 (Insuficiência Mitral)",
        caso_clinico: "Homem, 60 anos, assintomático cardiovascular até 1 ano atrás, quando iniciou quadro de fadiga e dispneia aos esforços. O ictus cordis é palpável e globoso no 6º EIC esquerdo, indicando dilatação. Durante a ausculta, nota-se um sopro que oblitera o som de B1. O examinador nota que o sopro se intensifica acentuadamente ao realizar a manobra de handgrip e diminui durante a fase de esforço da manobra de Valsalva (aumento da pressão intratorácica).",
        foco_ausculta: "Foco Mitral (ápice cardíaco).",
        som_ausculta: "Sopro holossistólico (pansistólico) em plateau, de alta frequência (timbre de \"jato de vapor\"), com forte irradiação para a axila esquerda. É comum a presença de terceira bulha (B3), indicando falência e sobrecarga grave de volume no ventrículo esquerdo.",
        fisiopatologia: "Insuficiência Mitral. O refluxo ocorre do VE para o Átrio Esquerdo durante toda a sístole (por isso holossistólico e constante/plateau). O handgrip intensifica o sopro porque o aumento da resistência na aorta (pós-carga) faz com que seja \"mais fácil\" para o sangue refluir pela valva mitral incompetente. Já a Valsalva diminui o retorno venoso (pré-carga), reduzindo o volume de sangue no coração e, consequentemente, diminuindo o sopro."
    },
    {
        id: 5,
        titulo: "Caso 5 (Diferencial - Atrito Pleural)",
        caso_clinico: "Mulher, 28 anos, procura o pronto-socorro com tosse seca e febre baixa há 3 dias. Hoje, iniciou quadro de dor torácica na base do hemitórax direito. A dor piora absurdamente ao respirar fundo (inspirar), fazendo-a adotar um padrão respiratório curto. O médico ausculta um som áspero no tórax, semelhante a \"duas lixas roçando\". O som ocorre tanto na sístole quanto na diástole cardíaca, porém desaparece completamente quando a paciente é instruída a prender a respiração (apneia).",
        foco_ausculta: "Bases pulmonares e parede lateral do hemitórax (Ausculta Pulmonar).",
        som_ausculta: "Ruído adventício contínuo ou intermitente, de caráter áspero e raspante, sincronizado com os movimentos respiratórios (fases de inspiração e expiração).",
        fisiopatologia: "Pleurite / Atrito Pleural. A inflamação das pleuras parietal e visceral faz com que elas atritem durante a expansão torácica, causando dor ventilatório-dependente. O \"teste da apneia\" é a manobra clínica fundamental: se fosse um atrito pericárdico (pericardite), o ruído continuaria sendo ouvido no ritmo dos batimentos cardíacos, mesmo com a paciente sem respirar. Como o som some, confirma-se a origem pleural."
    }
];

