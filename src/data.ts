import { Pillar, AgeCategory, QuizQuestion, AppAnalysis, FreeResource, BlogPost, Testimonial } from './types.ts';

export const PILLARS: Pillar[] = [
  {
    id: 1,
    title: 'Consciência Digital',
    description: 'Entender a fundo o funcionamento das redes sociais, a economia da atenção e como os algoritmos são projetados para capturar a mente de crianças.',
    longDescription: 'Capacitamos pais com conhecimento claro sobre os bastidores do Vale do Silício. Ao compreender as técnicas neurocientíficas de dopamina e engajamento constante, você poderá orientar seus filhos com uma nova perspectiva educativa, sem sermões chatos e com base em fatos científicos.',
    imageUrl: '/src/assets/images/pillar_consciousness_1781138159254.png'
  },
  {
    id: 2,
    title: 'Limites Saudáveis',
    description: 'Criar regras claras e acordos de convivência doméstica que regulem o tempo de tela de maneira pacífica e inquestionável.',
    longDescription: 'Ir além do clássico "desliga esse celular". Desenvolvemos rotinas estruturadas, regras claras de desligamento noturno e técnicas de transição de tela que reduzem conflitos domésticos em até 90%. Transformamos limites em hábitos saudáveis autônomos.',
    imageUrl: '/src/assets/images/pillar_limits_1781138175078.png'
  },
  {
    id: 3,
    title: 'Segurança Online',
    description: 'Configurar todas as barreiras tecnológicas possíveis — filtros DNS, controles parentais, monitoramento e bloqueadores.',
    longDescription: 'Tecnologia se responde com inteligência e tecnologia. Fornecemos tutoriais detalhados de configuração em nível de roteador, iOS, Android, consoles e Smart TVs. Seu lar protegido contra pornografia involuntária, predadores sexuais e desafios de internet bizarros.',
    imageUrl: '/src/assets/images/pillar_router_secure_1781138544643.png'
  },
  {
    id: 4,
    title: 'Educação Tecnológica',
    description: 'Ensinar sobre privacidade, pegada digital, riscos da inteligência artificial e como usar a tecnologia de forma produtiva.',
    longDescription: 'Não somos ludistas. A tecnologia é uma ferramenta fantástica de criação. Ensinamos seu filho a usar a internet para aprender habilidades do futuro (programação, design, pesquisa séria) ao invés de atuar apenas como um consumidor hiperestimulado de conteúdos fúteis.',
    imageUrl: '/src/assets/images/pillar_education_1781138205704.png'
  },
  {
    id: 5,
    title: 'Reconexão Familiar',
    description: 'Substituir o tédio digital por atividades reais, gerando proximidade emocional e valorizando a vida fora do ecossistema das telas.',
    longDescription: 'Vencer a batalha contra a tela exige alternativas envolventes. Criamos dinâmicas de conversas profundas, noites de jogos, rituais familiares offline obrigatórios e passeios na natureza que resgatam o olho no olho e trazem paz de volta ao jantar familiar.',
    imageUrl: '/src/assets/images/pillar_reconnect_park_1781138528671.png'
  }
];

export const AGE_CATEGORIES: AgeCategory[] = [
  {
    id: '3-5',
    range: '3 a 5 anos',
    title: 'Primeira Infância',
    emoji: '🌱',
    imageUrl: '/src/assets/images/child_3_5_years_1781136357486.png',
    risks: [
      'Atraso no desenvolvimento da fala e coordenação motora.',
      'Dificuldades severas na regulação emocional (crises de choro excessivas).',
      'Sobrecarga sensorial produzida por transições rápidas e cores berrantes.',
      'Ausência de aprendizado prático e diminuição da curiosidade pelo mundo real.'
    ],
    recommendations: [
      'Se possível, mantenha o tempo de tela próximo de zero.',
      'Se utilizar, escolha mídias lentas (ex: desenhos com ritmo calmo e poucas transições, como Peppa Pig ou Daniel Tigre).',
      'Assista sempre de forma conjunta, participando ativamente e nomeando objetos para incentivar a fala.',
      'Substitua a tela por blocos de construir, modelagem e exploração ao ar livre.'
    ],
    screenTime: 'Máximo 1 hora por dia (sempre assistido de forma conjunta)',
    guideTitle: 'Guia de Navegação para a Primeira Infância',
    fullGuideText: 'Nesta fase, o cérebro da criança está em seu período de desenvolvimento mais plástico e acelerado. A exposição frequente a estimulantes visuais hiper-estimula o lobo frontal, criando uma falsa necessidade de hiperestimulação para manter a atenção. Concentre-se em brinquedos físicos e na comunicação oral direta.'
  },
  {
    id: '6-9',
    range: '6 a 9 anos',
    title: 'Anos Formativos',
    emoji: '✏️',
    imageUrl: '/src/assets/images/child_6_9_years_1781136369648.png',
    risks: [
      'Exposição acidental a conteúdos adultos, violentos ou pornográficos.',
      'Início da dependência de jogos online hipnotizantes baseados em recompensas constantes.',
      'Problemas posturais, fadiga ocular e redução drástica do tempo brincando fora.',
      'Dificuldade em desenvolver empatia através do relacionamento presencial.'
    ],
    recommendations: [
      'Zero dispositivos pessoais (smartphones ou tablets próprios).',
      'Consumo estrito em telas de uso comunitário (como a TV da sala comum de casa).',
      'Introdução prática de regras firmes de tempo, utilizando alarmes visuais.',
      'Começar a conversar abertamente sobre "o papel das empresas que fazem os aplicativos" de modo didático.'
    ],
    screenTime: 'Máximo 1 a 1,5 hora por dia (em dias letivos prefira 0h)',
    guideTitle: 'Diretrizes Digitais para Anos Formativos',
    fullGuideText: 'Enquanto as crianças começam a socializar mais na escola, a pressão dos pares para ter acesso a telas aumentará. Estabelecer o acordo de que aparelhos pertencem à casa (e não à criança) protege o desenvolvimento cognitivo e cria as fronteiras corretas sobre privacidade geral e propriedade de eletrônicos.'
  },
  {
    id: '10-13',
    range: '10 a 13 anos',
    title: 'Pré-Adolescência',
    emoji: '🎒',
    imageUrl: '/src/assets/images/teen_10_13_years_1781136377650.png',
    risks: [
      'Cyberbullying de colegas de classe ou grupos virtuais de amigos.',
      'Primeiro contato com pornografia explícita e ansiedade decorrente da comparação corporal.',
      'Uso de redes sociais de forma clandestina (violando regras de idade de 13 anos).',
      'Vício em chats fechados e jogos de mundo aberto com interações de estranhos.'
    ],
    recommendations: [
      'Se for absolutamente necessário um telefone, prefira um dumbphone (modelo básico sem redes sociais).',
      'Utilize sistemas agressivos de controle parental no celular (ex: app Family Link ou Apple Screen Time).',
      'Crie a regra inegociável de que eletrônicos carregam de noite fora do quarto (na cozinha/sala).',
      'Estimule esportes e hobbys tangíveis para criar identidade longe da esfera virtual.'
    ],
    screenTime: '1,5 a 2 horas por dia (apenas após obrigações de casa e escolares)',
    guideTitle: 'Manual de Sobrevivência na Pré-Adolescência',
    fullGuideText: 'Esta fase é marcada por intensas transformações hormonais e a busca de pertencimento social. As redes sociais atuam como amplificadores de ansiedade social e depressão infantil. A orientação ativa e o canal de diálogo livre de punições imediatas são fundamentais para que eles relatem problemas a você.'
  },
  {
    id: '14-17',
    range: '14 a 17 anos',
    title: 'Adolescência',
    emoji: '🚀',
    imageUrl: '/src/assets/images/teen_17_years_single_1781137752740.png',
    risks: [
      'Alimentação de algoritmos de scroll infinito provocando severas crises de dopamina e insônia.',
      'Assédio por parte de adultos ou circulação de fotos íntimas autogeradas (sextortion).',
      'Idealização de vidas falsas de influenciadores levando a distorção de autoimagem.',
      'Perda de foco profunda para estudos, leitura ativa e reflexão silenciosa.'
    ],
    recommendations: [
      'Contrato de uso do celular formalizado e assinado em conjunto (veja área de recursos).',
      'Auditorias aleatórias acordadas previamente, sem invadir de forma agressiva, mas como acompanhamento médico.',
      'Dias familiares 100% desconectados uma vez por semana ou final de semana quinzenal.',
      'Conversas sérias sobre pegada digital, algoritmos, desinformação política e vício quimiossocial.'
    ],
    screenTime: 'Máximo 2 a 3 horas por dia (foco em gerenciar o próprio bem-estar de forma autônoma)',
    guideTitle: 'Contrato Digital para Adolescentes',
    fullGuideText: 'O objetivo final desta faixa etária não é o controle estrito e punitivo, mas a transferência gradual da responsabilidade e o treinamento da auto-regulação. Ensine seu adolescente a monitorar seu tempo de tela, fazer pausas voluntárias e identificar gatilhos mentais de redes sociais de forma madura.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: 'Qual é o comportamento do seu filho ao ter que desligar o celular ou sair das telas?',
    options: [
      { text: 'Desliga tranquilamente para fazer outras atividades.', score: 3 },
      { text: 'Pede um pouco mais de tempo, mas aceita sem grandes dramas.', score: 2 },
      { text: 'Reage com extrema irritabilidade, gritos, choro ou agressividade.', score: 0 }
    ]
  },
  {
    id: 2,
    text: 'A sua casa possui espaços ou momentos totalmente livres de aparelhos digitais (ex: mesa de jantar, banheiros, rituais)?',
    options: [
      { text: 'Sim, na mesa de jantar e em rituais diários ninguém usa celular.', score: 3 },
      { text: 'Tentamos evitar, mas frequentemente as pessoas olham as telas de canto de olho.', score: 1 },
      { text: 'Não, o celular é usado em qualquer lugar e a qualquer hora por toda a família.', score: 0 }
    ]
  },
  {
    id: 3,
    text: 'Onde seu filho costuma recarregar o smartphone durante a noite?',
    options: [
      { text: 'Em uma tomada comum fora do quarto (como cozinha ou sala).', score: 3 },
      { text: 'No quarto, mas longe da cama ou desligado.', score: 1 },
      { text: 'Do lado do travesseiro, na cabeceira ou diretamente embaixo do lençol.', score: 0 }
    ]
  },
  {
    id: 4,
    text: 'Você tem as senhas ou uma ferramenta de controle parental ativa instalada nos dispositivos do seu filho?',
    options: [
      { text: 'Sim, controlo ativamente as instalações, filtros de pesquisa e horários.', score: 3 },
      { text: 'Instalei uma vez, mas não sei bem se está funcionando ou configurado agora.', score: 1 },
      { text: 'Não utilizo controle parental e não sei as senhas de acesso do meu filho.', score: 0 }
    ]
  },
  {
    id: 5,
    text: 'Qual o tempo médio diário acumulado que seu filho passa em redes sociais ou jogos virtuais?',
    options: [
      { text: 'Menos de 1 hora e meia por dia.', score: 3 },
      { text: 'Entre 2 e 4 horas por dia.', score: 1 },
      { text: 'Mais de 4 horas diárias ou o dia quase todo fora as aulas.', score: 0 }
    ]
  },
  {
    id: 6,
    text: 'Como está o rendimento escolar, prática de esportes e hábitos de leitura do seu filho atualmente?',
    options: [
      { text: 'Muito bom. Consegue manter hobbies fora do celular sem dificuldades.', score: 3 },
      { text: 'Razoável, mas demonstra menor paciência para leituras longas e tarefas físicas.', score: 1 },
      { text: 'Abaixo do esperado. Abandonou hobbies reais em prol de estimulação digital permanente.', score: 0 }
    ]
  },
  {
    id: 7,
    text: 'Você conhece todos os "amigos" virtuais e as comunidades online que seu filho frequenta?',
    options: [
      { text: 'Sim, costumamos falar abertamente sobre com quem ele joga ou conversa no chat.', score: 3 },
      { text: 'Conheço alguns nicks, mas a maioria são apenas contatos de jogos online desconhecidos.', score: 1 },
      { text: 'Não tenho a menor ideia de quem são ou o que falam nesses aplicativos.', score: 0 }
    ]
  },
  {
    id: 8,
    text: 'Você já flagrou seu filho utilizando telas escondido de madrugada sob o cobertor ou após a hora combinada de dormir?',
    options: [
      { text: 'Nunca presenciei isso, os horários de sono são respeitados com firmeza.', score: 3 },
      { text: 'Raramente, mas já precisei confiscar aparelhos em um ou dois momentos específicos.', score: 1 },
      { text: 'Com frequência constante. O sono dele está comprometido pelo uso sigiloso do telefone.', score: 0 }
    ]
  },
  {
    id: 9,
    text: 'Como pai ou responsável, seu comportamento com telas serve como um bom exemplo saudável para as crianças?',
    options: [
      { text: 'Sim, evito usar o celular excessivamente ao chegar em casa e dou foco total a eles.', score: 3 },
      { text: 'Mais ou menos. Às vezes me pego rolando feed na presença deles por vício de trabalho.', score: 1 },
      { text: 'Sou culpado. Passo quase tanto tempo nas telas quanto eles, até durante conversas.', score: 0 }
    ]
  },
  {
    id: 10,
    text: 'Seu filho já teve contato direto ou demonstrou sintomas de cyberbullying, pornografia ou desafios bizarros da internet?',
    options: [
      { text: 'Não, trabalhamos preventivamente e o ambiente dele está seguro.', score: 3 },
      { text: 'Desconfio que ele já viu alguma coisa, mas não sei como abordar o assunto.', score: 1 },
      { text: 'Infelizmente sim. Já lidamos com episódios difíceis ou comportamentos estranhos na rede.', score: 0 }
    ]
  }
];

export const APP_ANALYSES: AppAnalysis[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'social',
    categoryLabel: 'Rede Social',
    logo: '🎵',
    recommendedAge: '15+ anos (Termos exigem 13+, mas o algoritmo é maduro)',
    riskLevel: 'high',
    riskScore: 10,
    description: 'Plataforma de compartilhamento de vídeos curtos projetada para sequestrar a atenção através de um dos algoritmos de recomendação mais hiper-otimizados do mundo.',
    dangers: [
      'Algoritmo de Rolamento Infinito viciante baseado em dopamina instantânea.',
      'Desafios virais perigosos (trends de asfixia, invasão, depredação).',
      'Exposição facilitada de menores a predadores através de DMs abertas.',
      'Hiper-sexualização de tendências de dança e comparação social nociva.'
    ],
    parentTips: [
      'Ative o recurso de Emparelhamento Familiar (Family Pairing) integrado no menu do app.',
      'Configure o modo Restrito para filtrar materiais de teor sexual ou traumático óbvios.',
      'Defina prazos de uso rígidos e bloqueie o download do app em segredo se necessário.',
      'Substitua o scroll passivo por atividades criativas ativas de lazer real.'
    ]
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'social',
    categoryLabel: 'Rede Social',
    logo: '📸',
    recommendedAge: '14+ anos',
    riskLevel: 'high',
    riskScore: 9,
    description: 'Rede focada em compartilhamento de fotos, Stories e Reels. Forte influência na autoimagem das crianças.',
    dangers: [
      'Geração de sérios problemas de ansiedade corporal e depressão decorrentes de filtros perfeitos.',
      'Recurso de Reels imitando a mecânica ultra-viciante do TikTok.',
      'Sextortion: quadrilhas extorquindo adolescentes após conseguirem fotos íntimas enviadas em DMs.',
      'Busca desenfreada por curtidas e validação estética virtual frequente.'
    ],
    parentTips: [
      'Sempre mude o perfil para a opção Privado para ocultar fotos de estranhos.',
      'Desative a visualização de contagem de curtidas para reduzir ansiedade de validação.',
      'Supervise a aba de mensagens diretas de forma muito próxima utilizando ferramentas de controle parental.',
      'Converse seriamente sobre como feeds de redes sociais são teatros editados e cheios de mentiras.'
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'streaming',
    categoryLabel: 'Streaming',
    logo: '📺',
    recommendedAge: '12+ anos (ou YT Kids para menores)',
    riskLevel: 'medium',
    riskScore: 6,
    description: 'Maior portal de vídeos do planeta. Embora educativo, possui buracos negros de conteúdos perturbadores sugeridos no autoplay.',
    dangers: [
      'Algoritmo de recomendação que induz ao consumo excessivo e descontrolado.',
      'Infiltração de conteúdos falsos ou paródias assustadoras no YouTube Kids (Elsagate).',
      'Canais de unboxing e influenciadores estimulando consumismo desenfreado de brinquedos caros.',
      'Seção de comentários frequentemente tóxica nas transmissões ao vivo.'
    ],
    parentTips: [
      'Desative permanentemente o Autoplay (Próximo Vídeo Automático) de todas as contas da casa.',
      'Crie a conta das crianças vinculada à sua gestão via Google Family Link.',
      'Para menores de 9 anos, utilize exclusivamente o YouTube Kids com seleção de canais aprovados por você.',
      'Selecione canais instrutivos de ciência, arte e culinária e assista em conjunto de preferência.'
    ]
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'comm',
    categoryLabel: 'Comunicação',
    logo: '💬',
    recommendedAge: '13+ anos',
    riskLevel: 'medium',
    riskScore: 5,
    description: 'Serviço de mensagens instantâneas mais utilizado no Brasil. Essencial para contatos, mas canal de vazamento de segurança.',
    dangers: [
      'Criação de grupos de classe escolares tóxicos sem a supervisão de nenhum adulto.',
      'Compartilhamento viral de fake news, links contaminados e mídias pornográficas de choque.',
      'Bullying silencioso através de exclusão sistemática de membros ou figurinhas ofensivas gratuitas.',
      'Ausência de moderação de conteúdo devido ao sistema de criptografia de ponta a ponta.'
    ],
    parentTips: [
      'Desative a permissão de "qualquer pessoa me adicionar a grupos" nas configurações de privacidade.',
      'Revise no histórico com que frequência e horários seu filho troca mensagens altas horas da noite.',
      'Ensine seu filho a reportar links suspeitos e falar com você se receber conteúdos desconfortáveis.',
      'Estabeleça regras para que o celular não seja levado à mesa de almoço e jantar.'
    ]
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'comm',
    categoryLabel: 'Comunicação / Chat',
    logo: '👾',
    recommendedAge: '16+ anos',
    riskLevel: 'high',
    riskScore: 9,
    description: 'Plataforma preferida de gamers para chats de voz e texto. Praticamente não possui moderação interna de servidores privados.',
    dangers: [
      'Servidores dedicados à automutilação, racismo, pirataria e doutrinação de adolescentes vulneráveis.',
      'Canais de chat de voz sem restrições com adultos anônimos.',
      'Facilidade extrema em compartilhar mídias impróprias ou arquivos executáveis maliciosos.',
      'Infiltração grave de criminosos fingindo ser crianças para cometer abuso sexual.'
    ],
    parentTips: [
      'Ative a configuração "Mantenha-me Seguro" do app para bloquear imagens inapropriadas de DMs.',
      'Não permita que seu filho participe de servidores públicos de pessoas desconhecidas fora da escola.',
      'Verifique as conexões de conta do Discord com outras plataformas para auditar jogos associados.',
      'Em caso de assédio bizarro ou convites escusos, guarde provas imediatas e faça um Boletim de Ocorrência.'
    ]
  },
  {
    id: 'roblox',
    name: 'Roblox',
    category: 'games',
    categoryLabel: 'Jogos',
    logo: '🧱',
    recommendedAge: '10+ anos (com restrições de chat ativas)',
    riskLevel: 'high',
    riskScore: 8,
    description: 'Plataforma massiva com milhares de jogos gerados por usuários. É uma verdadeira rede social interativa disfarçada de jogo.',
    dangers: [
      'Jogos ocultos de teor adulto impróprios (chamados "Roblox Condos" com simulações eróticas).',
      'Predadores utilizando o chat interno do jogo para pedir redes sociais ou contatos externos.',
      'Gasto excessivo e viciante com moedas digitais virtuais (Robux).',
      'Bullying virtual violento direcionado a jogadores que não possuem itens ou roupas caras no avatar.'
    ],
    parentTips: [
      'Utilize os controles integrados do Roblox para desativar discussões ou limitá-las a amigos.',
      'Configure um PIN de 4 dígitos para que seu filho não mude as configurações de restrição que você instalou.',
      'Monitore compras e bloqueie senhas de cartões de crédito em lojas de aplicativos conectadas.',
      'Sente do lado e jogue com seu filho de vez em quando para mapear quem ele está adicionando na rede.'
    ]
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    category: 'games',
    categoryLabel: 'Jogos',
    logo: '⛏️',
    recommendedAge: '8+ anos (ótimo em modo offline single-player)',
    riskLevel: 'low',
    riskScore: 3,
    description: 'Jogo de blocos maravilhoso que ajuda na lógica espacial e criatividade. Os riscos residem ao se conectar a servidores multiplayers abertos.',
    dangers: [
      'Linguagem imprópria e humilhações em chats de servidores públicos mundiais.',
      'Excesso de horas jogadas sem interrupções provocado pelo desejo de terminar grandes construções.',
      'Modificações não oficiais do jogo contendo malwares invasivos no computador.'
    ],
    parentTips: [
      'Dê preferência para o modo Single Player (um jogador único) ou servidores exclusivos para amigos da escola (Modo Realms privado).',
      'Defina alarmes de tela que avisam claramente que a hora de salvar a construção ecológica acabou.',
      'Instale mods de forma manual, garantindo que o download seja seguro e livre de infecções sistêmicas.'
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT / IA',
    category: 'ai',
    categoryLabel: 'Inteligência Artificial',
    logo: '🤖',
    recommendedAge: '13+ anos',
    riskLevel: 'medium',
    riskScore: 4,
    description: 'Assistente virtual de Inteligência Artificial. Ótima ferramenta para dúvidas escolares, mas pode atrofiá-la cognitivamente e criar cola mecânica.',
    dangers: [
      'Dependência acadêmica: fazer lições copiadas de forma cega sem ler ou reter nenhum assunto.',
      'Respostas tendenciosas, alucinações de fatos falsos ou respostas maduras se manipulado (jailbreak).',
      'Substituição de amigos reais por conversas solitárias e profundas com robôs virtuais inteligentes.'
    ],
    parentTips: [
      'Ensine que a IA é um assistente de brainstorming, e não um copiador oficial de deveres escolares.',
      'Audite as conversas e históricos de chat para acompanhar o tipo de questionamentos feitos pelo jovem.',
      'Incentive metodologias tradicionais de pesquisa acadêmica em livros físicos e fontes confiáveis.'
    ]
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'comm',
    categoryLabel: 'Comunicação / Chat',
    logo: '✈️',
    recommendedAge: '16+ anos',
    riskLevel: 'high',
    riskScore: 9,
    description: 'Mensageiro com imensos grupos públicos (até 200 mil pessoas) e canais sem nenhuma moderação. Repositório de mídias piratas e criminosas.',
    dangers: [
      'Canais públicos vendendo pornografia, armas, golpes virtuais, robôs de jogo de azar e drogas de forma escancarada.',
      'Fácil acesso a canais de vazamentos e assédio virtual maciço.',
      'Recurso "Pessoas Próximas" que permite localização exata do usuário por criminosos.',
      'Mensagens secretas com cronômetros de autodestruição que ocultam crimes de bullying de pais.'
    ],
    parentTips: [
      'O Telegram NÃO é recomendado para menores de 16 anos. Evite liberar o download no celular.',
      'Se usar, certifique-se de ocultar o número de telefone e desativar permanentemente a função "Pessoas Próximas".',
      'Desabilite chamadas de voz de contas desconhecidas no menu de segurança do aplicativo.',
      'Exija auditoria presencial familiar periódica para garantir que canais ilícitos não façam parte do app.'
    ]
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    category: 'social',
    categoryLabel: 'Rede Social',
    logo: '👻',
    recommendedAge: '14+ anos',
    riskLevel: 'high',
    riskScore: 8,
    description: 'Rede social baseada em mensagens efêmeras que somem depois de lidas. Cria uma falsa sensação de segurança para comportamentos arriscados.',
    dangers: [
      'Prática de envio de nudes (sexting) sob o pretexto otimista de que as fotos sumirão de vez após serem abertas.',
      'Notificações de prints de tela gerando chantagens cruas entre adolescentes.',
      'Snap Map: recurso de compartilhamento geográfico exato de onde o jovem está em tempo real no mapa.',
      'Gatilhos psicológicos de sequências de fotos ininterruptas (Snapstreaks) que forçam o uso diário compulsivo.'
    ],
    parentTips: [
      'Mude imediatamente o Snap Map para o "Modo Fantasma" (Ghost Mode) para esconder totalmente a localização real nas ruas.',
      'Monitore de perto os apps de segurança e as amizades cadastradas do adolescente.',
      'Discuta que nada enviado na internet desaparece realmente (capturas por outros aparelhos celulares são fáceis).',
      'Apoie momentos desconectados para descongestionar a ansiedade social de manter sequências virtuais vivas.'
    ]
  }
];

export const FREE_RESOURCES: FreeResource[] = [
  {
    id: 'controle',
    title: 'Guia Completo de Controle Parental',
    description: 'Instruções passo a passo ilustradas para blindar os roteadores, celulares iOS/Android, Smart TVs e videogames da sua residência contra pornografia e predadores.',
    fileName: 'metodo_pinguim_manual_controle_parental.pdf',
    type: 'Guia em PDF (42 páginas)',
    contentPreview: 'Este e-book prático foi desenhado para pais não-técnicos. Veja o passo a passo para: \n1. Configurar DNS familiar seguro (Cloudflare 1.1.1.3);\n2. Definir limites na App Store e Google Play;\n3. Ativar o Modo de Segurança com PIN administrativo nos roteadores das operadoras.'
  },
  {
    id: 'checklist',
    title: 'Checklist Digital Familiar Semanal',
    description: 'Uma lista visual de hábitos saudáveis diários e semanais para colar na geladeira e organizar os compromissos digitais e offline da família.',
    fileName: 'metodo_pinguim_checklist_da_geladeira.pdf',
    type: 'Checklist Prático para Imprimir',
    contentPreview: 'Acompanhe as metas das crianças toda semana:\n- Dever de casa e tarefas concluídas antes de telas?\n- 1 hora de exercícios físicos batida?\n- Celular carregado fora do quarto antes de dormir?\nCompartilhe as estrelas de conformidade!'
  },
  {
    id: 'contrato',
    title: 'Contrato de Uso do Celular para Adolescentes',
    description: 'Um termo de acordo com regras claras de convivência, limites acordados e consequências estipuladas. Assinado por pais e filhos.',
    fileName: 'metodo_pinguim_contrato_digital_familiar.pdf',
    type: 'Contrato Editável em PDF',
    contentPreview: 'Eu, [Nome do Filho], me comprometo a:\n1. Nunca camuflar o histórico de navegação;\n2. Manter o celular desligado após as 21h;\n3. Entregar as senhas de segurança aos meus pais sempre que solicitado para fins médicos.\nEu, [Nome do Pai/Mãe], me comprometo a guiar com respeito...'
  },
  {
    id: 'plano',
    title: 'Plano Familiar Sem Telas de Final de Semana',
    description: 'Um roteiro detalhado com 50 sugestões práticas de lazer real, passeios offline de baixíssimo custo e brincadeiras lúdicas para vencer o marasmo.',
    fileName: 'metodo_pinguim_roteiro_offline_familiar.pdf',
    type: 'Guia de Atividades com 50 Ideias',
    contentPreview: 'Crie conexão verdadeira de final de semana:\n- Caça ao tesouro doméstica temática;\n- Tarde de culinária (fazendo pizza do zero);\n- Acampamento na sala com lençóis;\n- Noite de jogos de tabuleiro antigos e divertidos.'
  },
  {
    id: 'ebook',
    title: 'Ebook: Segredos do Algoritmo e a Neurociência do Vício',
    description: 'Entenda os truques psicológicos criados pelas empresas das redes sociais para reter seu filho e como contorná-los com ciência.',
    fileName: 'metodo_pinguim_segredos_neurociencia.pdf',
    type: 'Mini Ebook Técnico e Humanizado',
    contentPreview: 'Aprenda sobre o loop de feedback de dopamina variável que alimenta o feed infinito. Como as cores saturadas, vídeos com áudios em alta velocidade e likes falsos ativam o centro de recompensa da criança, exigindo desintoxicação metódica.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Paula Vasconcellos',
    role: 'Mãe de Lucas (11 anos) e Beatriz (8 anos)',
    location: 'Belo Horizonte - MG',
    text: 'Minha casa era um campo de guerra na janta. Lucas reagia com raiva toda vez que pedíamos para desligar o jogo. Aplicar o Método Pinguim e usar o Contrato Familiar mudou completamente o clima de casa. Hoje o jantar é momento de risada e rituais sem telas. Sou infinitamente grata!',
    rating: 5,
    avatar: '/src/assets/images/avatar_mom_1_1781136525343.png'
  },
  {
    id: 2,
    name: 'Cláudio Mendes',
    role: 'Pai de Mariana (15 anos)',
    location: 'São Paulo - SP',
    text: 'Mariana passava mais de 7 horas no Instagram e TikTok. Estava sempre triste, ansiosa e o rendimento escolar caiu bastante. O manual de controle parental e o acompanhamento empático que o Método Pinguim ensina nos ajudaram a reverter isso. Ela agora dorme no horário certo e voltou a ler livros.',
    rating: 5,
    avatar: '/src/assets/images/avatar_dad_1_1781136536537.png'
  },
  {
    id: 3,
    name: 'Dra. Patrícia Helena Solano',
    role: 'Diretora do Colégio Horizonte Sul',
    location: 'Curitiba - PR',
    text: 'Contratamos a palestra do Método Pinguim para nossa escola e o engajamento foi espetacular! Eles trazem um assunto sério e alarmante de forma muito acolhedora e prática, sem radicalismo. Os pais saíram extremamente motivados e os professores notaram melhoria na atenção dos alunos.',
    rating: 5,
    avatar: '/src/assets/images/avatar_teacher_1_1781136546537.png'
  },
  {
    id: 4,
    name: 'Rodrigo Albuquerque',
    role: 'Pai de Theo (6 anos)',
    location: 'Salvador - BA',
    text: 'Ter um guia por idade claro foi vital. Consegui explicar para minha esposa e também para os avós o perigo da hiperestimulação visual em desenhos hiper-rápidos. Theo agora brinca muito mais ao ar livre e dorme a noite toda de forma tranquila.',
    rating: 5,
    avatar: '/src/assets/images/avatar_dad_2_1781136561327.png'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Por que o scroll das redes sociais foi projetado como caça-níqueis de cassinos?',
    excerpt: 'Descubra a neurociência por trás do feed infinito e como o loop dopaminérgico afeta as decisões e a estabilidade emocional de um adolescente.',
    content: 'Você já se perguntou por que é tão difícil largar o celular ao rolar o feed do Instagram ou TikTok? A resposta reside em uma técnica de psicologia comportamental chamada "reforço intermitente". \n\nCriado pelo psicólogo B.F. Skinner, o reforço intermitente prova que o cérebro procura recompensas com muito mais ansiedade quando elas são imprevisíveis. É exatamente a mesma mecânica de uma máquina caça-níqueis em Las Vegas: você puxa a alavanca (desliza o dedo para baixo) sem saber se receberá um prêmio (um vídeo engraçado, uma curtida ou uma notificação fantástica).\n\nPara o cérebro em formação de uma criança ou adolescente, essa descarga ininterrupta de dopamina molda o sistema de recompensa física. Eles começam a tolerar menos o tédio natural do cotidiano, gerando irritabilidade ao ter de retornar à realidade física. \n\nNo Método Pinguim, ensinamos que o primeiro passo para combater isso não é o castigo irado, mas sim criar "zonas de desintoxicação analógica" em casa, substituindo o marasmo virtual por recompensas afetivas autênticas.',
    category: 'Saúde Mental',
    author: 'Walace Freiman',
    date: '05 Jun 2026',
    readTime: '6 min de leitura',
    image: '/src/assets/images/blog_dopamine_slot_1781138863000.png'
  },
  {
    id: 'post-2',
    title: 'DNS Familiar: Bloqueie pornografia e vírus direto no roteador (Sem pagar nada)',
    excerpt: 'Um tutorial rápido e simplificado para pais não técnicos ativarem barreiras automáticas que barram acessos impróprios em todos os aparelhos da casa.',
    content: 'Muitos pais acreditam que precisam de softwares sofisticados e caros para proteger seus filhos contra conteúdos pornográficos involuntários. Mas a resposta pode ser muito mais simples e totalmente gratuita: configurar o DNS de proteção familiar direto no roteador do seu lar.\n\nO DNS (Domain Name System) funciona como as "páginas amarelas" da internet. Traduz o nome de um site para o endereço de IP correto da máquina. \n\nAo trocar o DNS padrão da sua operadora (Claro, Vivo, Starlink, etc.) por um DNS focado em proteção familiar (como o Cloudflare Family 1.1.1.3), o filtro descarta conexões impróprias automaticamente.\n\nPara fazer isso:\n1. Acesse o painel administrativo do seu roteador (geralmente digitando 192.168.1.1 ou 192.168.0.1 em seu navegador);\n2. Procure pelo campo "Configurações de WAN" ou "Servidor DNS";\n3. Insira o IP Primário: 1.1.1.3 e Secundário: 1.0.0.3;\n4. Salve e reinicie o aparelho.\n\nA partir desse momento, qualquer celular, Smart TV ou tablet conectado à rede Wi-Fi de casa que tentar acessar conteúdos de violência extrema ou pornografia receberá um erro de conexão inofensivo.',
    category: 'Segurança Digital',
    author: 'Equipe Técnica Pinguim',
    date: '28 Mai 2026',
    readTime: '8 min de leitura',
    image: '/src/assets/images/blog_router_dns_1781136580645.png'
  },
  {
    id: 'post-3',
    title: 'Roblox Condos: O que são os perigosos mapas secretos de teor adulto no jogo?',
    excerpt: 'Entenda os riscos reais ocultos nos jogos infantis virtuais mais comuns e quais medidas imediatas você precisa tomar para blindar a conta do seu filho.',
    content: 'O Roblox é amado por milhões de crianças brasileiras devido à liberdade criativa de entrar em mundos divertidos de simulação. Contudo, há uma subcorrente obscura chamada comercialmente de "Roblox Condos" que os pais precisam combater de imediato.\n\nEsses "Condos" são servidores criados temporariamente por usuários mal-intencionados que contêm interações explícitas de teor sexual, linguagens cruas e avatares sem roupas simulando atos sexuais de forma grosseira. Embora a equipe do Roblox derrube esses mundos em minutos graças aos seus algoritmos, novos servidores surgem constantemente no ar.\n\nAlém disso, predadores sexuais usam salas de jogos vazias para pedir o contato de Discord ou WhatsApp das crianças, migrando para redes longe da fraca vigilância do robô do game.\n\nComo agir:\n- Ative restrições de idade na conta e trave as configurações com uma senha PIN que só você conhece;\n- Desative ou restrinja o recebimento de mensagens privadas de contas que não sejam amigas confirmadas da escola;\n- Coloque o computador do jogo na área de convivência social da sua residência, de costas para a circulação para auditoria sutil.',
    category: 'Jogos Online',
    author: 'Walace Freiman',
    date: '15 Mai 2026',
    readTime: '7 min de leitura',
    image: '/src/assets/images/blog_gaming_alert_1781136589992.png'
  },
  {
    id: 'autismo-e-telas',
    title: 'Crianças Autistas e Telas: Quando o Conforto Vira Dependência?',
    excerpt: 'Para uma criança autista, a tela oferece um mundo previsível e sem sobressaltos sensoriais. Mas quando esse refúgio confortável se torna uma dependência prejudicial?',
    content: 'Para muitas crianças no espectro autista, o mundo físico pode ser esmagador. Ruídos imprevisíveis, luzes flutuantes e interações sociais complexas demandam um esforço cognitivo gigantesco. Nesse cenário, o tablet ou smartphone surge como o refúgio perfeito: um ambiente onde tudo é 100% previsível. O mesmo vídeo pode ser repetido infinitas vezes, o jogo segue regras matemáticas rígidas e não há cobranças por contato visual.\n\nContudo, esse conforto esconde uma armadilha silenciosa. O cérebro atípico, que já possui uma tendência natural ao hiperfoco e a comportamentos repetitivos, encontra nas telas um estímulo superalimentado de dopamina. O algoritmo entrega recompensas visuais imediatas com esforço zero. Com o tempo, a dependência desse refúgio digital atrofia as oportunidades de regulação emocional biológica e interação humana real.\n\nNo Método Pinguim, orientamos que o caminho nunca é a privação abrupta e punitiva, mas sim a transição gradual. O tablet não deve ser usado como um anestésico sensorial de forma contínua. Em vez disso, precisamos construir pontas de conexão no ambiente físico, offering alternativas táteis e previsibilidade visual na rotina doméstica.',
    category: 'Neurodiversidade',
    author: 'Walace Freiman',
    date: '11 Jun 2026',
    readTime: '7 min de leitura',
    image: '/src/assets/images/download.png'
  },
  {
    id: 'autismo-e-rotina',
    title: 'O Que Acontece Quando a Tela Substitui a Rotina?',
    excerpt: 'A falta de rotina estruturada gera ansiedade no cérebro infantil, que busca nas telas uma falsa estabilidade. Saiba como reverter esse ciclo com previsibilidade.',
    content: 'Crianças precisam de previsibilidade para se sentirem seguras. Sabendo o que vem a seguir — o banho, a refeição, a brincadeira, o sono — o cérebro relaxa e diminui a produção de cortisol, o hormônio do estresse. Quando a casa carece de uma rotina clara, a criança entra em estado de alerta constante.\n\nNessa desorganização diária, o dispositivo digital frequentemente assume o papel de "falso organizador". A tela anestesia o tédio e a ansiedade gerados pela falta de rumo doméstico. Em contrapartida, quando o aparelho é retirado, a colisão com a reality desestruturada provoca crises profundas de oposição.\n\nA verdadeira cura para o excesso de telas não está na tecnologia aplicada, mas sim na arquitetura da rotina familiar. Estabelecer um cronograma visual compreensível (com cartões ilustrados na geladeira), horários regulares de alimentação e sono, e rituais diários específicos devolve às crianças a segurança que elas buscavam nos pixels do celular.',
    category: 'Neurodiversidade',
    author: 'Equipe Técnica Pinguim',
    date: '10 Jun 2026',
    readTime: '6 min de leitura',
    image: '/src/assets/images/1.png'
  },
  {
    id: 'tempo-de-tela-autismo',
    title: 'Meu Filho Tem Crise Quando Tiro a Tela. O Que Fazer?',
    excerpt: 'Entenda a neurobiologia por trás das temidas crises de desconexão de telas e aprenda um roteiro prático e acolhedor de 4 passos para lidar com esse momento.',
    content: 'Se o seu filho grita, chora, bate portas ou se joga no chão quando você pede para guardar o tablet, saiba que essa não é apenas uma demonstração de pirraça voluntária. Do ponto de vista neurobiológico, ele está passando por uma crise de abstinência de dopamina.\n\nAo longo de horas no celular, o cérebro da criança recebe jatos ininterruptos de satisfação artificial. Quando o aparelho é desligado repentinamente, o nível desse neurotransmissor despenca para níveis abaixo do basal em segundos, gerando frustração profunda e dor física real. O lobo frontal imaturo não consegue processar essa queda abrupta, resultando na crise.\n\nPara mediar esse momento sem brigas, aplique a técnica do Método Pinguim:\n1. **Aviso Prévio Visual**: Nunca retire a tela de surpresa. Use temporizadores ou cronômetros visuais definidos juntos.\n2. **Ponte de Afeto**: Sente-se ao lado da criança 3 minutos antes do término, comente o que ela está assistindo e demonstre interesse. Isso ativa a transição cognitiva.\n3. **Transição de Alto Valor**: Forneça uma opção de atividade física ou tátil atraente logo após o desligamento (ex: ajudar a preparar um lanche, brincar com água).\n4. **Acolhimento da Frustração**: Valide o sentimento da criança ("Eu sei que é difícil desligar, eu também adoro esse jogo, mas agora é hora do nosso banho").',
    category: 'Neurodiversidade',
    author: 'Walace Freiman',
    date: '09 Jun 2026',
    readTime: '8 min de leitura',
    image: '/src/assets/images/download (1).png'
  },
  {
    id: 'autismo-e-sono',
    title: 'Autismo, Sono e Telas: Uma Relação Que Merece Atenção',
    excerpt: 'A luz azul emitida pelas telas inibe a melatonina e agrava os distúrbios de sono já comuns no autismo. Entenda como blindar as noites de descanso.',
    content: 'Crianças com transtorno do espectro autista frequentemente enfrentam desafios para iniciar ou manter o sono de modo consistente. Isso ocorre devido a peculiaridades biológicas na síntese de melatonina, o hormônio regulador do repouso. No entanto, o uso noturno de telas atua como um sabotador terminal desse mecanismo biológico já delicado.\n\nA luz azul emitida por telas de LED e LCD é interpretada pelo cérebro como radiação solar do meio-dia. Ela inibe imediatamente a glândula pineal, suprimindo qualquer produção natural de melatonina por até duas horas após o desligamento do dispositivo. Uma criança autista exposta a telas à noite terá um sono leve, fragmentado e muito agitado, o que sabota seu comportamento e aprendizado no dia seguinte.\n\nA regra de ouro do Método Pinguim para blindar o sono familiar:\n- **Toque de Recolher Digital**: Desligue todos os eletrônicos da casa pelo menos 90 minutos antes do horário de dormir.\n- **Iluminação Âmbar**: Substitua lâmpadas brancas frias nos quartos por iluminações amarelas e quentes.\n- **Rituais Analógicos**: Aposte em contação de histórias com livros físicos, massagem relaxante ou música instrumental suave.',
    category: 'Neurodiversidade',
    author: 'Equipe Médica Pinguim',
    date: '08 Jun 2026',
    readTime: '7 min de leitura',
    image: '/src/assets/images/download (3).png'
  },
  {
    id: 'conexao-familiar',
    title: 'A Mesa da Sua Casa Ainda Reúne ou Só Alimenta?',
    excerpt: 'Descubra a importância científica de resgatar as refeições offline para restaurar a comunicação e nutrir os vínculos afetivos em sua residência.',
    content: 'Antigamente, a mesa de jantar era o ponto de gravidade das famílias. Ali, histórias eram compartilhadas, angústias aliviadas e valores transmitidos. Hoje, em milhares de lares, esse space sagrado foi colonizado por telas. Cada membro da família apoia o celular ao lado do prato, imerso em mundos virtuais privados ou entretendo crianças pequenas com desenhos para que "comam mais rápido".\n\nEstudos pediátricos mostram que refeições desprovidas de telas e ricas em diálogo direto reduzem a incidência de deprissão na juventude, melhoram o vocabulário infantil e fortalecem os anticorpos emocionais das crianças.\n\nResgatar a mesa de jantar é o pilar de conexão familiar do Método Pinguim. Implemente o desafio do "Cesto das Telas": uma cesta charmosa na cozinha onde todos os smartphones da casa devem ser colocados silenciosamente antes do jantar ser servido. A mesa de jantar deve voltar a ser um local de fôlego, escuta e verdadeiro afeto offline.',
    category: 'Neurodiversidade',
    author: 'Walace Freiman',
    date: '07 Jun 2026',
    readTime: '6 min de leitura',
    image: '/src/assets/images/2.png'
  },
  {
    id: 'crianca-autista-e-celular',
    title: '10 Atividades Para Crianças Autistas Que Substituem as Telas',
    excerpt: 'Propostas práticas de regulação sensorial, desenvolvimento motor e brincadeiras físicas envolventes para substituir o uso passivo do digital.',
    content: 'Substituir o tablet de uma criança atípica exige oferecer atividades que correspondam à sua necessidade de organização sensorial e engajamento focado. Aqui estão 10 ideias divertidas e terapêuticas recomendadas pelo Método Pinguim para aplicar em sua residência:\n\n1. **Caixa de Areia Cinética ou Grãos**: Excelente para exploração sensorial reconfortante.\n2. **Escultura com Massinha de Modelar**: Exercita a força dos pequenos dedos e acalma a mente.\n3. **Brincar com Água**: Encher e esvaziar potinhos na pia estimula a física elementar e relaxa o sistema nervoso.\n4. **Pintura com Dedos e Tintas Guache**: Foco visual e expressão corporal livre de regras rígidas.\n5. **Pista de Obstáculos Doméstica**: Pular almofadas e passar por baixo de cadeiras ajuda na consciência espacial.\n6. **Quebra-Cabeças de Encaixe**: Atividade visual e lógica com começo, meio e fim claros.\n7. **Encaixe de Pecas Imantadas (Blocks)**: Permite construções tridimensionais repetíveis e altamente previsíveis.\n8. **Dança das Cores**: Colocar músicas calmas e brincar de balançar tecidos longos e coloridos no ar.\n9. **Argolas e Alvos de Linho**: Atividades de arremesso que melhoram a coordenação visomotora.\n10. **Caça ao Tesouro com Texturas**: Encontrar objetos ásperos, lisos ou macios pela casa em uma jornada divertida de descoberta.\n\nLembre-se: o objetivo não é manter a criança super-ocupada 100% do dia de modo neurótico, mas sim estimulá-la a tolerar as pausas naturais do mundo real com calma e conexões significativas.',
    category: 'Neurodiversidade',
    author: 'Walace Freiman',
    date: '06 Jun 2026',
    readTime: '8 min de leitura',
    image: '/src/assets/images/download (2).png'
  }
];
