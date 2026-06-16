import json

casos = [
    {
        "caso_clinico": "Um paciente de 50 anos, hipertenso e diabético, chega ao pronto-socorro referindo dor retroesternal de forte intensidade, iniciada há 3 horas, associada a sudorese. Ao exame físico, observa-se taquipneia, com PA 150/90 mmHg e FC 98 bpm. O eletrocardiograma demonstra infradesnivelamento do segmento ST e troponinas encontram-se elevadas.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Ritmo tríplice com presença de quarta bulha (B4).",
        "fisiopatologia": "Infarto Agudo do Miocárdio sem Supradesnivelamento de ST (IAMSSST). A isquemia miocárdica aguda leva à disfunção diastólica, tornando a parede ventricular menos complacente (mais rígida), o que exige maior força de contração do átrio no final da diástole."
    },
    {
        "caso_clinico": "Um paciente de 62 anos, com histórico de hipertensão e dislipidemia, comparece à consulta ambulatorial queixando-se de dor torácica. Relata desconforto opressivo localizado na região retroesternal (sinal de Levine), desencadeado invariavelmente por esforços físicos moderados, como caminhadas rápidas. Refere que a dor cessa totalmente após 5 minutos de repouso ou após a administração de nitrato sublingual. O paciente enfatiza que o padrão, a intensidade e a frequência desses episódios permanecem inalterados nos últimos quatro meses. Nega dor em repouso ou episódios de longa duração.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Ausculta geralmente normal fora da crise. Durante as crises, pode apresentar quarta bulha (B4) ou sopro sistólico de insuficiência mitral temporário.",
        "fisiopatologia": "Angina Estável (Doença Arterial Coronariana Crônica). Há uma isquemia miocárdica transitória provocada pelo desbalanço entre oferta e demanda de oxigênio induzido pelo esforço, em virtude de uma placa aterosclerótica obstrutiva."
    },
    {
        "caso_clinico": "Homem, 65 anos, refere dispneia progressiva aos esforços nos últimos três meses, evoluindo para ortopneia e dispneia paroxística noturna na última semana. Relata antecedente de infarto agudo do miocárdio prévio. Exame físico: FR 24 irpm, PA 110x70 mmHg. Palpação: Ictus cordis difuso, medindo 4 polpas digitais, rebaixado para o 6º espaço intercostal e desviado para a linha axilar anterior.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Ritmo cardíaco em três tempos com presença de terceira bulha (B3), configurando ritmo de galope.",
        "fisiopatologia": "Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFER). Sobrecarga crônica de volume e disfunção sistólica induzem a dilatação excessiva do ventrículo esquerdo; a B3 é causada pelo impacto súbito de sangue em um ventrículo flácido na fase de enchimento rápido."
    },
    {
        "caso_clinico": "Um paciente do sexo masculino, 58 anos, hipertenso e diabético, dá entrada na Unidade de Pronto Atendimento com queixa de dor retroesternal, iniciada há cerca de 40 minutos enquanto descansava, em aperto, de forte intensidade, sinal de Levine, com irradiação para a mandíbula e acompanhada de sudorese fria. O eletrocardiograma (ECG) realizado em 10 minutos não evidenciou alterações de supradesnivelamento do segmento ST.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Aparecimento agudo de quarta bulha (B4), também chamada de galope atrial.",
        "fisiopatologia": "Síndrome Coronariana Aguda sem Supradesnivelamento de ST (SCA-SSST). A instabilidade repentina de uma placa aterosclerótica provoca redução severa e aguda do fluxo coronariano no repouso, causando disfunção diastólica reversível ou isquemia."
    },
    {
        "caso_clinico": "Paciente de 35 anos, atendido no pronto-socorro com dor torácica retroesternal, em pontada, de início agudo há 12 horas. Refere piora importante ao deitar-se em decúbito dorsal e ao inspirar profundamente, com alívio significativo ao inclinar-se para a frente.",
        "foco_ausculta": "Foco mesocárdico e borda esternal inferior esquerda",
        "som_ausculta": "Atrito pericárdico (ruído áspero, do tipo 'atrito de couro').",
        "fisiopatologia": "Pericardite Aguda. Processo inflamatório dos folhetos visceral e parietal do pericárdio. Devido ao exsudato inflamatório, os folhetos perdem sua lubrificação fisiológica, atritando-se durantes os movimentos cardíacos de sístole e diástole."
    },
    {
        "caso_clinico": "Você está avaliando dois pacientes em um cenário ambulatorial de cardiologia: Paciente 1: Apresenta quadro sintomatológico de insuficiência cardíaca ventricular esquerda, crônica, com sinais de sobrecarga de volume e presença de bloqueio de ramo esquerdo (BRE) ao eletrocardiograma. Paciente 2: Apresenta quadro sintomatológico de disfunção ventricular direita crônica, com sinais de sobrecarga de pressão e bloqueio de ramo direito (BRD) ao eletrocardiograma.",
        "foco_ausculta": "Foco pulmonar",
        "som_ausculta": "Paciente 1: Desdobramento paradoxal da B2. Paciente 2: Desdobramento amplo da B2.",
        "fisiopatologia": "Bloqueios de Ramo (Distúrbio de Condução). O BRE atrasa a despolarização e contração do VE, fazendo com que a valva aórtica se feche após a pulmonar. O BRD atrasa a contração e o esvaziamento do VD, aumentando a distância de tempo entre o fechamento aórtico normal e o pulmonar tardio."
    },
    {
        "caso_clinico": "Homem, 62 anos, com diagnóstico de hipertensão arterial sistêmica grave e de longa data, sem adesão adequada ao tratamento farmacológico, comparece para avaliação cardiológica de rotina.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Ritmo tríplice pela presença de quarta bulha (B4).",
        "fisiopatologia": "Cardiopatia Hipertensiva. A hipertrofia concêntrica do ventrículo esquerdo (HVE) se desenvolve como mecanismo adaptativo à alta pressão contínua sistêmica, causando aumento da espessura da parede, tornando-a menos complacente e gerando resistência ao enchimento atrial."
    },
    {
        "caso_clinico": "Homem, 65 anos, hipertenso de longa data com adesão irregular ao tratamento, dá entrada no pronto atendimento apresentando quadro de dor torácica súbita, lancinante e de intensidade máxima desde o seu início. O paciente descreve a sensação como se algo estivesse 'rasgando' em seu peito, com irradiação direta para a região interescapular. Apresenta-se sudoreico, pálido e com fácies de angústia.",
        "foco_ausculta": "Foco aórtico e foco aórtico acessório",
        "som_ausculta": "Sopro diastólico aspirante de padrão decrescendo (indicando insuficiência aórtica aguda).",
        "fisiopatologia": "Dissecção Aguda da Aorta. Uma ruptura súbita da camada íntima da aorta propicia a entrada de fluxo sanguíneo na camada média sob alta pressão. O prolongamento da dissecção em direção à raiz da aorta dilata o anel valvar ou destrói a suspensão valvar, causando insuficiência."
    },
    {
        "caso_clinico": "Paciente feminina, 38 anos, referiu dispneia aos esforços progressiva iniciada há 6 meses. Ao exame físico, o médico observou o ictus cordis medindo 2 polpas digitais no 5º espaço intercostal na linha hemiclavicular esquerda.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Hiperfonese de B1, estalido de abertura após B2, e ruflar diastólico com reforço pré-sistólico.",
        "fisiopatologia": "Estenose Mitral Reumática. Sequela crônica da febre reumática, em que ocorre fusão das comissuras valvares e calcificação dos folhetos. O orifício atrioventricular torna-se reduzido, causando grande dificuldade no enchimento do ventrículo esquerdo durante a diástole."
    },
    {
        "caso_clinico": "Um paciente do sexo masculino, 22 anos, nadador de alto rendimento, realiza consulta de rotina para avaliação pré-participação esportiva. Ele é assintomático, apresentando frequência cardíaca de 54 bpm e pressão arterial de 110/70 mmHg. Ao exame físico, o ictus cordis é palpável no 5º espaço intercostal, na linha hemiclavicular, sendo normopropulsivo e desacompanhado de impulsões precordiais anormais ou sinais de congestão venosa sistêmica.",
        "foco_ausculta": "Foco mitral",
        "som_ausculta": "Presença de terceira bulha (B3) fisiológica.",
        "fisiopatologia": "Coração de Atleta (Adaptação Fisiológica). O treinamento de alta intensidade promove hipertrofia excêntrica fisiológica e aumento de complacência ventricular. O rápido enchimento de um ventrículo muito saudável, combinado com a bradicardia vagal compensatória, origina o som."
    },
    {
        "caso_clinico": "Mulher, 68 anos, tabagista de longa data (carga tabágica de 50 anos-maço) e com queixa de dispneia crônica, procura o pronto atendimento devido a edema de membros inferiores. Ao exame físico, observa-se turgência jugular a 45º. A palpação do precórdio evidencia um impulso sistólico nítido na região subxifoide e entre o 3º e 5º espaços intercostais esquerdos na linha paraesternal. Exames complementares confirmam a presença de elevação da pressão na artéria pulmonar. O ictus cordis encontra-se palpável no local habitual e sem alterações.",
        "foco_ausculta": "Foco pulmonar e borda esternal inferior esquerda (foco tricúspide)",
        "som_ausculta": "Hiperfonese do componente pulmonar de B2 (P2) e possível sopro holosistólico de insuficiência tricúspide secundária.",
        "fisiopatologia": "Cor Pulmonale (IC Direita por Doença Pulmonar). A bronquite obstrutiva ou enfisema geram hipóxia crônica, que induz vasoespasmo da vasculatura pulmonar (hipertensão pulmonar corriqueira na DPOC). Isso provoca hipertrofia e eventual falência do ventrículo direito."
    }
]

js_content = f"const casosClinicos = {json.dumps(casos, indent=4, ensure_ascii=False)};\n\nexport default casosClinicos;\n"

with open("casos.js", "w", encoding="utf-8") as f:
    f.write(js_content)
    
print("File generated.")
