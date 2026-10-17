export const COMPANY_NAP = {
  tradeName: "Lavanderia Dr. Sabão",
  legalName: "Dr. Sabão Lavanderia Especializada Ltda.",
  foundingYear: 2011,
  yearsOfExperience: 15, // 2011 to 2026
  address: {
    street: "Rua Sete de Abril, 269",
    complement: "Loja 01",
    neighborhood: "Alto da XV",
    city: "Curitiba",
    state: "PR",
    cep: "80045-125",
    country: "Brasil",
    fullAddress: "Rua Sete de Abril, 269, Loja 01, Alto da XV, Curitiba - PR, CEP 80045-125"
  },
  phones: {
    landline: "(41) 3363-3333",
    landlineRaw: "+554133633333",
    mobileWhatsApp: "(41) 98777-3600",
    whatsAppRaw: "5541987773600"
  },
  social: {
    instagram: "@lavanderiadrsabao",
    instagramUrl: "https://www.instagram.com/lavanderiadrsabao",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1118671607594!2d-49.25838032470716!3d-25.426744077564757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce449a8837be7%3A0x6b8bcbfdfa312012!2sR.%20Sete%20de%20Abril%2C%20269%20-%20Alto%20da%20Rua%20XV%2C%20Curitiba%20-%20PR%2C%2080045-125!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Rua+Sete+de+Abril+269+Loja+01+Alto+da+XV+Curitiba+PR"
  },
  openingHours: {
    weekdays: "Segunda a Sexta: 09h às 18h",
    saturday: "Sábado: 09h às 13h",
    sunday: "Domingo e Feriados: Fechado",
    scheduleSchema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { days: ["Saturday"], opens: "09:00", closes: "13:00" }
    ]
  },
  neighborhoodsServed: [
    { name: "Alto da XV", distance: "Sede própria", highlight: "Atendimento no balcão e delivery rápido" },
    { name: "Juvevê", distance: "1.2 km", highlight: "Entrega programada para condomínios" },
    { name: "Cabral", distance: "2.1 km", highlight: "Rápido acesso via Av. Munhoz da Rocha" },
    { name: "Cristo Rei", distance: "1.5 km", highlight: "Próximo ao Jardim Botânico" },
    { name: "Ahú", distance: "2.8 km", highlight: "Coleta e entrega para residências" },
    { name: "Batel", distance: "4.0 km", highlight: "Especialista em vestidos de alta-costura" },
    { name: "Centro Cívico", distance: "2.5 km", highlight: "Atendimento a executivos e escritórios" },
    { name: "Bigorrilho / Champagnat", distance: "4.5 km", highlight: "Lavagem de tapetes persas e cortinas" }
  ]
};

export const createWhatsAppUrl = (messageText: string = "Olá! Gostaria de um orçamento com a Lavanderia Dr. Sabão.") => {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${COMPANY_NAP.phones.whatsAppRaw}?text=${encoded}`;
};
