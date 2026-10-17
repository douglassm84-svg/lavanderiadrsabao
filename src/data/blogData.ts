import { BlogPost, ReviewItem } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "guia-vestido-de-noiva",
    slug: "como-guardar-vestido-de-noiva-apos-o-casamento",
    title: "Como Guardar o Vestido de Noiva Após o Casamento: Guia Definitivo",
    excerpt: "Descubra por que nunca se deve usar saco plástico comum e qual o segredo para manter o tecido branco e bordados perfeitos por décadas.",
    category: "Noivas & Alta-Costura",
    readTime: "4 min de leitura",
    publishDate: "12 de Março de 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    author: "Especialista Têxtil Dr. Sabão",
    seoFocus: "como guardar vestido de noiva, lavagem vestido de casamento curitiba",
    content: `
      O vestido de noiva carrega memórias inesquecíveis, mas após a cerimônia e a festa, a barra acumula resíduos de solo, cera de vela, champanhe e suor.
      
      ### 1. Não Espere Meses para Lavar
      O maior erro das noivas é guardar o vestido sujo no armário. Manchas de açúcar e álcool podem ser invisíveis no primeiro dia, mas com o passar das semanas oxidam em contato com o ar e tornam-se manchas amareladas permanentes.
      
      ### 2. O Perigo dos Sacos Plásticos Comerciais
      Plásticos de PVC ou polietileno comuns liberam vapores químicos ao longo do tempo que amarelam a seda e o tule. Além disso, criam um efeito estufa propício a fungos. O armazenamento correto deve ser feito em **capas de TNT respirável ou caixas forradas com papel de seda acid-free (livre de ácido)**.
      
      ### 3. A Importância da Lavagem Artesanal Especializada
      Na Lavanderia Dr. Sabão em Curitiba (Alto da XV), cada vestido é inspecionado sob luz especial. Pedrarias, lantejoulas e rendas de bilro recebem pré-tratamento individual com químicos com pH calibrado, assegurando brilho eterno.
    `
  },
  {
    id: "tapetes-umidade-curitiba",
    slug: "dicas-para-limpar-tapetes-e-evitar-mofo-em-curitiba",
    title: "Tapetes e o Inverno em Curitiba: Como Evitar Mofo, Ácaros e Mau Cheiro",
    excerpt: "O clima úmido e frio da capital paranaense exige cuidados especiais na secagem e desinfecção de tapetes e cortinas.",
    category: "Higienização do Lar",
    readTime: "5 min de leitura",
    publishDate: "28 de Fevereiro de 2026",
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80",
    author: "Consultor Técnico Dr. Sabão",
    seoFocus: "como limpar tapetes curitiba, tirar cheiro de mofo tapete curitiba",
    content: `
      Com a alta umidade relativa do ar em Curitiba, secar tapetes no varal ou deixá-los no chão úmido é receita certa para proliferação de ácaros e bactérias.
      
      ### Por que receitas caseiras com vinagre podem danificar sua peça?
      Muitos tutoriais da internet recomendam misturas de vinagre, bicarbonato e detergente comum. No entanto, em tapetes de lã ou felpudos, o vinagre pode desbotar os pigmentos vegetais e o detergente não enxaguado vira um 'ímã de poeira', fazendo o tapete sujar 3x mais rápido.
      
      ### A Solução da Estufa Térmica Desumidificadora
      Apenas a lavagem por injeção e extração profissional com posterior secagem em estufa com circulação de ar aquecido e desumidificado garante que a base do tapete (a trama interna) fique 100% seca. Na Lavanderia Dr. Sabão, seu tapete volta higienizado, sem resíduos químicos e com aroma fresco.
    `
  },
  {
    id: "cuidados-jaqueta-couro",
    slug: "como-hidratar-e-limpar-jaqueta-de-couro-sem-estragar",
    title: "Como Hidratar e Limpar Jaqueta de Couro: O Segredo da Durabilidade",
    excerpt: "O couro legítimo precisa 'respirar' e receber hidratação lipídica periódica para não descascar ou mofar nos armários.",
    category: "Couro & Calçados",
    readTime: "4 min de leitura",
    publishDate: "15 de Janeiro de 2026",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
    author: "Mestre em Restauração de Couro",
    seoFocus: "limpar jaqueta couro curitiba, hidratar couro curitiba alto da xv",
    content: `
      Você abriu o guarda-roupa no início do outono e encontrou sua jaqueta de couro com pontinhos brancos ou rígida como papelão?
      
      ### 1. Mofo no Couro: Remova sem Álcool
      Nunca utilize álcool 70° ou cândida em couro legítimo! Isso retira os óleos naturais da pele animal e causa ressecamento irreversível.
      
      ### 2. Hidratação Profunda Anual
      Assim como a pele humana, o couro precisa de reposição de emolientes. Na Lavanderia Dr. Sabão, aplicamos pomadas e ceras nobres à base de óleos naturais com massagem mecânica suave. O couro recupera o caimento, a maleabilidade e o cheiro característico original.
    `
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Juliana Mendes Caldeira",
    rating: 5,
    date: "Há 2 semanas",
    neighborhood: "Alto da XV, Curitiba",
    comment: "Levei meu vestido de noiva com a cauda bem suja da grama do casamento. Fiquei impressionada com o carinho e o resultado: voltou impecável, cada pérola no lugar e cheiro maravilhoso! A melhor de Curitiba.",
    serviceUsed: "Vestido de Noiva e Véu"
  },
  {
    id: "rev-2",
    author: "Roberto Guimarães",
    rating: 5,
    date: "Há 1 mês",
    neighborhood: "Juvevê, Curitiba",
    comment: "Mandei lavar 2 tapetes persas que herdei da família. O Dr. Sabão tirou o cheiro de umidade e as cores reviveram. Prazo cumprido à risca e atendimento impecável no balcão da Rua Sete de Abril.",
    serviceUsed: "Tapetes Persas e Orientais"
  },
  {
    id: "rev-3",
    author: "Camila F. Sartori",
    rating: 5,
    date: "Há 3 semanas",
    neighborhood: "Cabral, Curitiba",
    comment: "Uso a lavanderia por peso toda semana. Economizo um tempo precioso no meu trabalho de médica. As roupas vêm dobradinhas, macias e com perfume discreto delicioso. Super recomendo!",
    serviceUsed: "Lavanderia por Peso (Cesto Semanal)"
  },
  {
    id: "rev-4",
    author: "Marcos Paulo Silveira",
    rating: 5,
    date: "Há 2 meses",
    neighborhood: "Cristo Rei, Curitiba",
    comment: "Minha jaqueta de couro de motociclista estava mofada após um inverno inteiro no armário. Eles fizeram a desinfecção e hidratação. Ficou nova em folha, couro super macio.",
    serviceUsed: "Higienização e Hidratação de Couro"
  }
];
