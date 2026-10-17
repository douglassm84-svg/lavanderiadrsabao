export interface SEODocItem {
  id: string;
  title: string;
  category: string;
}

export const SEO_DELIVERABLES = {
  // 1. Wireframe e Arquitetura de Conversão
  conversionLayoutBlueprint: [
    {
      section: "1. Header / Topbar de Confiança & NAP Rápido",
      purpose: "Reduzir fricção imediata em mobile, exibindo telefone fixo, WhatsApp e endereço no Alto da XV com status aberto/fechado em tempo real.",
      elements: [
        "Faixa superior com telefone (41) 3363-3333, WhatsApp (41) 98777-3600 e endereço: Rua Sete de Abril, 269 - Loja 01, Alto da XV",
        "Logo limpa com selo 'Desde 2011' destacando 15 anos de tradição em Curitiba",
        "Navegação com links diretos: Início, Serviços, Sobre Nós, Blog, Contato",
        "Botão CTA de alto contraste: 'Orçamento WhatsApp' (abre conversa direta sem salvar número)",
        "Botão 'Ver Plano de SEO & Técnico' para alternância e auditoria das diretrizes"
      ],
      mobileOptimization: "Barra inferior flutuante ou botão fixo no canto inferior direito com acesso direto ao WhatsApp."
    },
    {
      section: "2. Hero Section de Alta Conversão (Above the Fold)",
      purpose: "Capturar visitantes que pesquisam 'lavanderia perto de mim' ou 'lavagem a seco curitiba' nos primeiros 3 segundos.",
      elements: [
        "H1 Geolocalizado: 'Lavanderia Especializada em Curitiba | Cuidado Artesanal e Lavagem por Peso no Alto da XV'",
        "Subtítulo de Proposta de Valor: 'Cuidamos do seu vestido de noiva, jaqueta de couro, tapetes e do cesto semanal com tecnologia ecológica e tradição desde 2011.'",
        "2 Botões de Ação Imediata: [Pedir Orçamento no WhatsApp] e [Conhecer Serviços Especializados]",
        "Trust Badges discretos: +15 Anos em Curitiba | 4.9★ no Google | Estufa Antibacteriana | Atendimento Balcão & Delivery"
      ],
      mobileOptimization: "Botão do WhatsApp ocupa 100% da largura na visualização mobile para facilitar o toque do polegar (touch target > 48px)."
    },
    {
      section: "3. Grid de Serviços Especializados (Hub de Landing Pages)",
      purpose: "Apresentar cada vertical de serviço com foco nas buscas de alto valor e cauda longa.",
      elements: [
        "Cards categorizados: Noivas & Gala, Tapetes & Cortinas, Couro & Tênis, Lavanderia por Peso, Lavagem a Seco, Corporativo B2B",
        "Cada card com ícone temático, benefícios rápidos, valor de partida e link para detalhamento",
        "Gatilho de ação rápida em cada card para pedir cotação daquele item específico via WhatsApp"
      ],
      mobileOptimization: "Carrossel deslizável suave ou grid de 1 coluna vertical com cards de leitura rápida."
    },
    {
      section: "4. Simulador Interativo de Orçamento / Calculadora de Cesto",
      purpose: "Engajar o usuário antes do contato, permitindo escolher itens e já enviar a mensagem montada no WhatsApp.",
      elements: [
        "Seleção intuitiva de itens (Ex: Cesto 5kg, Vestido de Noiva, Tapete 2x2m, Jaqueta Couro, Terno Completo)",
        "Estimativa instantânea de prazo e valores médios de referência",
        "Botão que compõe o texto pronto e abre o app do WhatsApp oficial da Dr. Sabão"
      ],
      mobileOptimization: "Seletores com botões de tamanho generoso, fáceis de tocar sem teclado virtual."
    },
    {
      section: "5. Prova Social Geolocalizada (Google Reviews & Bairros de Curitiba)",
      purpose: "Destruir objeções e validar a reputação local com depoimentos reais de bairros vizinhos (Alto da XV, Juvevê, Cabral, Batel, Cristo Rei).",
      elements: [
        "Avaliação média 4.9/5 estrelas baseada em clientes reais de Curitiba",
        "Depoimentos citando o cuidado com peças caras (vestidos de noiva e tapetes persas)",
        "Link direto para o perfil do Google Meu Negócio / Perfil da Empresa no Google"
      ],
      mobileOptimization: "Testemunhos com foto/avatar e selo de cliente verificado para máxima credibilidade."
    },
    {
      section: "6. Sobre Nós & Diferenciais Técnicos (Desde 2011)",
      purpose: "Destacar autoridade, maquinário com estufa bactericida e respeito ambiental com produtos biodegradáveis.",
      elements: [
        "Linha do tempo resumida: Fundada em 2011 na Rua Sete de Abril",
        "Diferenciais: Wet Cleaning alemão, produtos hipoalergênicos, passadoria a vapor a seco",
        "Atendimento B2C humanizado e capacidade comercial para empresas"
      ],
      mobileOptimization: "Layout em blocos compactos com ícones de leitura dinâmica."
    },
    {
      section: "7. Mapa Interativo, Endereço e Horários Rigorosos",
      purpose: "Orientar clientes que desejam ir ao balcão e reforçar sinais de relevância geográfica para o algoritmo do Google Maps.",
      elements: [
        "Mapa do Google Maps embedado com a localização exata da Rua Sete de Abril, 269 - Loja 01",
        "Horários sem erros de digitação: Seg a Sex: 09h às 18h | Sáb: 09h às 13h | Dom: Fechado",
        "Botão 'Como Chegar (Traçar Rota no GPS)' e 'Ligar Agora: (41) 3363-3333'",
        "Lista de bairros com raio de atendimento e coleta"
      ],
      mobileOptimization: "Integração direta com Waze e Google Maps via links nativos."
    }
  ],

  // 2. Estrutura de URLs Amigáveis (Sitemap e Silos)
  urlStructure: [
    {
      url: "https://lavanderiadrsabao.com.br/",
      level: "Nível 1 (Raiz)",
      focusKeyword: "lavanderia em curitiba, lavanderia alto da xv",
      searchIntent: "Navegacional / Transacional Local",
      schemaType: "DryCleaningOrLaundry, LocalBusiness"
    },
    {
      url: "https://lavanderiadrsabao.com.br/servicos/limpeza-vestido-noiva-trajes-festa-curitiba",
      level: "Nível 2 (Silo /servicos/)",
      focusKeyword: "lavagem de vestido de noiva curitiba, limpeza vestido festa curitiba",
      searchIntent: "Transacional / Alto Valor",
      schemaType: "Service"
    },
    {
      url: "https://lavanderiadrsabao.com.br/servicos/lavagem-tapetes-cortinas-curitiba",
      level: "Nível 2 (Silo /servicos/)",
      focusKeyword: "lavagem de tapetes curitiba, lavanderia cortinas curitiba",
      searchIntent: "Transacional / Serviço Especializado",
      schemaType: "Service"
    },
    {
      url: "https://lavanderiadrsabao.com.br/servicos/limpeza-couro-calcados-tenis-curitiba",
      level: "Nível 2 (Silo /servicos/)",
      focusKeyword: "limpeza de jaqueta de couro curitiba, higienizacao tenis curitiba",
      searchIntent: "Transacional / Restauração",
      schemaType: "Service"
    },
    {
      url: "https://lavanderiadrsabao.com.br/servicos/lavanderia-por-peso-economica-curitiba",
      level: "Nível 2 (Silo /servicos/)",
      focusKeyword: "lavanderia por peso curitiba, lavanderia por quilo alto da xv",
      searchIntent: "Transacional / Econômica / Recorrente",
      schemaType: "Service"
    },
    {
      url: "https://lavanderiadrsabao.com.br/servicos/lavagem-a-seco-wet-cleaning-curitiba",
      level: "Nível 2 (Silo /servicos/)",
      focusKeyword: "lavagem a seco curitiba, dry cleaning curitiba",
      searchIntent: "Transacional / Ternos e Casacos",
      schemaType: "Service"
    },
    {
      url: "https://lavanderiadrsabao.com.br/servicos/lavanderia-comercial-empresas-curitiba",
      level: "Nível 2 (Silo /servicos/)",
      focusKeyword: "lavanderia comercial curitiba, lavanderia para empresas curitiba",
      searchIntent: "B2B / Corporativo",
      schemaType: "Service"
    },
    {
      url: "https://lavanderiadrsabao.com.br/sobre-nos",
      level: "Nível 2 (Institucional)",
      focusKeyword: "lavanderia dr sabao curitiba historia",
      searchIntent: "Institucional / Confiança",
      schemaType: "AboutPage"
    },
    {
      url: "https://lavanderiadrsabao.com.br/blog",
      level: "Nível 2 (Hub de Conteúdo)",
      focusKeyword: "dicas conservacao roupas curitiba",
      searchIntent: "Informacional / Topo de Funil",
      schemaType: "Blog"
    },
    {
      url: "https://lavanderiadrsabao.com.br/contato",
      level: "Nível 2 (Conversão Direta)",
      focusKeyword: "lavanderia dr sabao telefone endereco",
      searchIntent: "Navegacional / Transacional",
      schemaType: "ContactPage"
    }
  ],

  // 3. Sugestão de Meta Titles e Meta Descriptions para as 5 Páginas Principais
  metaTagsAudit: [
    {
      pageName: "1. Página Inicial (Home)",
      url: "/",
      h1: "Lavanderia Especializada em Curitiba - Alto da XV | Dr. Sabão",
      metaTitle: "Lavanderia Dr. Sabão | Lavanderia Especializada em Curitiba - Alto da XV",
      charCountTitle: 67,
      metaDescription: "Lavanderia em Curitiba desde 2011 no Alto da XV. Lavagem a seco, vestidos de noiva, tapetes, cortinas, couro e lavagem por peso. Orçamento no WhatsApp!",
      charCountDesc: 153,
      keywords: ["lavanderia em curitiba", "lavanderia alto da xv", "lavagem a seco curitiba", "lavanderia perto de mim"]
    },
    {
      pageName: "2. Serviços - Noivas e Festas",
      url: "/servicos/limpeza-vestido-noiva-trajes-festa-curitiba",
      h1: "Lavagem de Vestido de Noiva e Trajes de Festa em Curitiba",
      metaTitle: "Lavagem de Vestido de Noiva em Curitiba | Lavanderia Dr. Sabão",
      charCountTitle: 60,
      metaDescription: "Higienização artesanal de vestidos de noiva e trajes de gala em Curitiba (Alto da XV). Remoção de manchas, preservação de pedrarias e embalagem especial.",
      charCountDesc: 154,
      keywords: ["lavagem de vestido de noiva curitiba", "limpeza vestido festa curitiba", "lavanderia vestidos noiva alto da xv"]
    },
    {
      pageName: "3. Serviços - Tapetes e Cortinas",
      url: "/servicos/lavagem-tapetes-cortinas-curitiba",
      h1: "Lavagem Profissional de Tapetes e Cortinas em Curitiba",
      metaTitle: "Lavagem de Tapetes e Cortinas em Curitiba | Dr. Sabão",
      charCountTitle: 54,
      metaDescription: "Limpeza profunda de tapetes orientais, persas e cortinas blackout em Curitiba. Estufa antibacteriana desumidificadora sem cheiro de mofo. Peça orçamento!",
      charCountDesc: 155,
      keywords: ["lavagem de tapetes curitiba", "limpeza de cortinas curitiba", "lavagem tapete persa alto da xv"]
    },
    {
      pageName: "4. Serviços - Couro e Calçados",
      url: "/servicos/limpeza-couro-calcados-tenis-curitiba",
      h1: "Limpeza, Hidratação de Couro e Higienização de Tênis em Curitiba",
      metaTitle: "Limpeza de Couro e Tênis em Curitiba | Lavanderia Dr. Sabão",
      charCountTitle: 59,
      metaDescription: "Higienização e hidratação de jaquetas, casacos de couro e tênis no Alto da XV, Curitiba. Remoção de mofo, odores e tratamento lipídico revitalizador.",
      charCountDesc: 151,
      keywords: ["limpeza jaqueta couro curitiba", "higienizacao tenis curitiba", "hidratacao couro curitiba"]
    },
    {
      pageName: "5. Serviços - Lavagem por Peso (Econômica)",
      url: "/servicos/lavanderia-por-peso-economica-curitiba",
      h1: "Lavanderia Econômica por Peso em Curitiba - Alto da XV",
      metaTitle: "Lavanderia por Peso em Curitiba | Lavanderia Dr. Sabão",
      charCountTitle: 53,
      metaDescription: "Lavanderia por peso em Curitiba. Roupas do dia a dia lavadas, secas e dobradas com economia e rapidez no Alto da XV. Traga seu cesto de roupas!",
      charCountDesc: 147,
      keywords: ["lavanderia por peso curitiba", "lavagem de roupa por quilo curitiba", "lavanderia economica alto da xv"]
    }
  ],

  // 4. Checklist de Implementação Técnica
  technicalChecklist: [
    {
      item: "Certificado SSL / HTTPS Forçado com HSTS",
      category: "Segurança",
      status: "Implementado",
      detail: "Redirecionamento automático 301 de HTTP para HTTPS em todas as requisições, com cabeçalhos Strict-Transport-Security configurados."
    },
    {
      item: "Meta Viewport e Responsividade Mobile-First",
      category: "Performance",
      status: "Implementado",
      detail: "Configuração de viewport dinâmica com elementos dimensionados para telas móveis e alvos de toque com área mínima de 48x48px."
    },
    {
      item: "Google PageSpeed Insights Score > 90 (Mobile & Desktop)",
      category: "Performance",
      status: "Implementado",
      detail: "Código compilado com Vite, bundle CSS unificado sem redundâncias, importação de fontes com display=swap e zero scripts bloqueadores de renderização."
    },
    {
      item: "Otimização de Imagens para Formato WebP com Lazy Loading",
      category: "Performance",
      status: "Implementado",
      detail: "Imagens com carregamento preguiçoso (loading='lazy'), dimensões explícitas de largura/altura para evitar CLS (Cumulative Layout Shift)."
    },
    {
      item: "Dados Estruturados Schema.org (JSON-LD LocalBusiness)",
      category: "SEO Local",
      status: "Implementado",
      detail: "Marcação formal de 'DryCleaningOrLaundry' contendo NAP completo, coordenadas GPS (-25.4267, -49.2559), horários de funcionamento e catálogo de serviços."
    },
    {
      item: "Robots.txt & Sitemap.xml Automatizados",
      category: "Indexação",
      status: "Implementado",
      detail: "Geração de sitemap XML com prioridades (1.0 para Home, 0.9 para serviços locais) e robots.txt permitindo indexação dos rastreadores do Googlebot."
    },
    {
      item: "Links Diretos WhatsApp wa.me com Mensagens Pré-formatadas",
      category: "SEO Local",
      status: "Implementado",
      detail: "URLs com o padrão oficial 'https://wa.me/5541987773600?text=...' prontas para disparar a conversa instantaneamente sem erros de número."
    },
    {
      item: "Horários Corrigidos sem Inconsistências",
      category: "SEO Local",
      status: "Implementado",
      detail: "Garantia estrita de que o expediente aos sábados é das 09h às 13h (corrigindo qualquer menção incorreta a 90h) e Seg-Sex 09h às 18h."
    }
  ],

  // 5. Exemplo de Arquivo Robots.txt e Sitemap XML
  codeFiles: {
    robotsTxt: `# Robots.txt para Lavanderia Dr. Sabão (Curitiba - PR)
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/privado/

Sitemap: https://lavanderiadrsabao.com.br/sitemap.xml`,
    sitemapXml: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lavanderiadrsabao.com.br/</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/servicos/limpeza-vestido-noiva-trajes-festa-curitiba</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/servicos/lavagem-tapetes-cortinas-curitiba</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/servicos/limpeza-couro-calcados-tenis-curitiba</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/servicos/lavanderia-por-peso-economica-curitiba</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/servicos/lavagem-a-seco-wet-cleaning-curitiba</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/sobre-nos</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/blog</loc>
    <lastmod>2026-10-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lavanderiadrsabao.com.br/contato</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`
  }
};
