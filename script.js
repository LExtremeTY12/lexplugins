
const DISCORD_URL = "https://discord.gg/cVBFu43g9G";

const TRANSLATIONS = {
  en: {
    "meta.title": "LEX Store — Minecraft Plugins",
    "meta.description": "LEX Store — Professional Minecraft plugin store.",
    "nav.homeAria": "Go to home",
    "nav.menuAria": "Open menu",
    "nav.languageAria": "Language selector",
    "brand.subtitle": "Minecraft Plugins",
    "nav.products": "Products",
    "nav.benefits": "Benefits",
    "nav.faq": "FAQ",
    "hero.pill": "Premium Minecraft plugin store",
    "hero.title": "Professional plugins to level up your Minecraft server.",
    "hero.text": "LEX Store offers ready-to-use, configurable plugins with support. Buy premium plugins, download free resources, or request custom systems directly through Discord.",
    "hero.productsButton": "View products",
    "hero.customButton": "Request custom plugin",
    "hero.imageAlt": "Minecraft landscape",
    "hero.statusSmall": "Status",
    "hero.statusStrong": "Online",
    "hero.performanceSmall": "Performance",
    "hero.performanceStrong": "Ultra",
    "hero.progressText": "Plugins 1.21+",
    "stats.plugins": "ready plugins",
    "stats.compatibility": "compatibility",
    "stats.support": "fast support",
    "stats.configurable": "configurable",
    "benefits.eyebrow": "Why choose LEX Store?",
    "benefits.title": "A store built to sell plugins with confidence.",
    "benefits.text": "Modern design, smooth animations, a clean catalog, and a premium presentation for every product.",
    "features.flex.title": "Flexible purchase or download",
    "features.flex.text": "Each product can open its own link or send the customer directly to Discord.",
    "features.minecraft.title": "Professional Minecraft style",
    "features.minecraft.text": "A visual identity inspired by Minecraft, with a clean and premium interface.",
    "features.catalog.title": "Organized catalog",
    "features.catalog.text": "Search, category filters, and animated cards help customers find the right plugin.",
    "products.eyebrow": "Catalog",
    "products.title": "Featured products",
    "products.text": "Premium plugins can redirect to Discord or an external checkout. Free products can use a download button.",
    "products.searchPlaceholder": "Search plugin...",
    "products.filtersAria": "Category filters",
    "products.empty": "No products found.",
    "cta.eyebrow": "Official Discord",
    "cta.title": "Need a custom plugin?",
    "cta.text": "Talk to LEX Store on Discord for quotes, support, manual purchases, or exclusive plugins for your server.",
    "cta.button": "Join Discord",
    "faq.eyebrow": "Quick questions",
    "faq.title": "Frequently asked questions",
    "faq.text": "A simple section to explain purchases, downloads, and support.",
    "faq.buy.q": "How do I buy a plugin?",
    "faq.buy.a": "Click the product button. It can open a purchase/download link or send you to the LEX Store Discord.",
    "faq.custom.q": "Can I request custom plugins?",
    "faq.custom.a": "Yes. Use the Discord button to discuss requests, pricing, deadlines, and technical details.",
    "faq.support.q": "Do plugins include support?",
    "faq.support.a": "Support availability depends on the product. For questions before buying, contact LEX Store through Discord.",
    "footer.subtitle": "Professional Minecraft plugins",
    "footer.rights": "© <span id=\"year\"></span> LEX Store. All rights reserved.",
    "category.all": "All",
    "actions.buy": "Buy",
    "actions.download": "Download",
    "badges.best": "Best seller",
    "badges.new": "New",
    "badges.pro": "Pro",
    "badges.free": "Free",
    "badges.popular": "Popular",
    "badges.essential": "Essential",
    "categories.administration": "Administration",
    "categories.lobby": "Lobby",
    "categories.security": "Security",
    "categories.utilities": "Utilities",
    "categories.economy": "Economy",
    "categories.progression": "Progression",
    "categories.fun": "Fun",
    "categories.adventure": "Adventure",
    "chat.openAria": "Open assistant",
    "chat.windowAria": "LEX Assistant chat window",
    "chat.title": "LEX Assistant",
    "chat.subtitle": "Keyword assistant · may be inaccurate",
    "chat.closeAria": "Close chat",
    "chat.placeholder": "Type your question...",
    "chat.sendAria": "Send message",
    "chat.typing": "Assistant is typing",
    "chat.initial": "Hi! I’m the LEX Assistant. I can help with plugins, downloads, versions, support, Discord and custom requests. I’m an automatic keyword assistant, not a real AI, so some information may be incomplete, outdated or incorrect. Choose a quick question or type your message.",
    "chat.quick.buy": "How do I buy or download?",
    "chat.quick.free": "Which plugins are free?",
    "chat.quick.custom": "Can I request a custom plugin?",
    "chat.fallback": "I’m not fully sure about that. I can help with products, downloads, free plugins, installation, support, versions, Discord, custom plugins, prices, categories and common server requirements. For an exact answer, please contact LEX Store on Discord: https://discord.gg/cVBFu43g9G"
  },
  pt: {
    "meta.title": "LEX Store — Plugins Minecraft",
    "meta.description": "LEX Store — Loja profissional de plugins para servidores Minecraft.",
    "nav.homeAria": "Ir para início",
    "nav.menuAria": "Abrir menu",
    "nav.languageAria": "Seletor de idioma",
    "brand.subtitle": "Plugins Minecraft",
    "nav.products": "Produtos",
    "nav.benefits": "Vantagens",
    "nav.faq": "FAQ",
    "hero.pill": "Loja premium de plugins para Minecraft",
    "hero.title": "Plugins profissionais para elevar o teu servidor Minecraft.",
    "hero.text": "A LEX Store oferece plugins prontos, configuráveis e com suporte. Compra plugins pagos, baixa plugins grátis ou pede sistemas personalizados diretamente pelo Discord.",
    "hero.productsButton": "Ver produtos",
    "hero.customButton": "Encomendar plugin",
    "hero.imageAlt": "Paisagem Minecraft",
    "hero.statusSmall": "Estado",
    "hero.statusStrong": "Online",
    "hero.performanceSmall": "Performance",
    "hero.performanceStrong": "Ultra",
    "hero.progressText": "Plugins 1.21+",
    "stats.plugins": "plugins prontos",
    "stats.compatibility": "compatibilidade",
    "stats.support": "suporte rápido",
    "stats.configurable": "configurável",
    "benefits.eyebrow": "Porquê escolher a LEX Store?",
    "benefits.title": "Uma loja pensada para vender plugins com confiança.",
    "benefits.text": "Design moderno, animações fluidas, catálogo limpo e apresentação premium para cada produto.",
    "features.flex.title": "Compra ou download flexível",
    "features.flex.text": "Cada produto pode abrir um link próprio ou enviar o cliente diretamente para o Discord.",
    "features.minecraft.title": "Visual Minecraft profissional",
    "features.minecraft.text": "Identidade visual inspirada no Minecraft, com uma interface limpa e premium.",
    "features.catalog.title": "Catálogo organizado",
    "features.catalog.text": "Pesquisa, filtros por categoria e cards animados ajudam o cliente a encontrar o plugin certo.",
    "products.eyebrow": "Catálogo",
    "products.title": "Produtos em destaque",
    "products.text": "Plugins pagos podem enviar para o Discord ou para um checkout externo. Produtos grátis podem usar botão de download.",
    "products.searchPlaceholder": "Pesquisar plugin...",
    "products.filtersAria": "Filtros de categoria",
    "products.empty": "Nenhum produto encontrado.",
    "cta.eyebrow": "Discord oficial",
    "cta.title": "Precisas de um plugin personalizado?",
    "cta.text": "Fala com a LEX Store no Discord para orçamentos, suporte, compras manuais ou plugins exclusivos para o teu servidor.",
    "cta.button": "Entrar no Discord",
    "faq.eyebrow": "Dúvidas rápidas",
    "faq.title": "Perguntas frequentes",
    "faq.text": "Uma secção simples para explicar compras, downloads e suporte.",
    "faq.buy.q": "Como compro um plugin?",
    "faq.buy.a": "Clica no botão do produto. Ele pode abrir um link de compra/download ou enviar-te para o Discord da LEX Store.",
    "faq.custom.q": "Posso pedir plugins personalizados?",
    "faq.custom.a": "Sim. Usa o botão do Discord para falar sobre encomendas, orçamento, prazos e detalhes técnicos.",
    "faq.support.q": "Os plugins incluem suporte?",
    "faq.support.a": "A disponibilidade de suporte depende do produto. Para dúvidas antes da compra, contacta a LEX Store pelo Discord.",
    "footer.subtitle": "Plugins Minecraft profissionais",
    "footer.rights": "© <span id=\"year\"></span> LEX Store. Todos os direitos reservados.",
    "category.all": "Todos",
    "actions.buy": "Comprar",
    "actions.download": "Baixar",
    "badges.best": "Mais vendido",
    "badges.new": "Novo",
    "badges.pro": "Pro",
    "badges.free": "Grátis",
    "badges.popular": "Popular",
    "badges.essential": "Essencial",
    "categories.administration": "Administração",
    "categories.lobby": "Lobby",
    "categories.security": "Segurança",
    "categories.utilities": "Utilidades",
    "categories.economy": "Economia",
    "categories.progression": "Progressão",
    "categories.fun": "Diversão",
    "categories.adventure": "Aventura",
    "chat.openAria": "Abrir assistente",
    "chat.windowAria": "Janela do assistente LEX",
    "chat.title": "Assistente LEX",
    "chat.subtitle": "Assistente por palavras-chave · pode errar",
    "chat.closeAria": "Fechar chat",
    "chat.placeholder": "Escreve a tua pergunta...",
    "chat.sendAria": "Enviar mensagem",
    "chat.typing": "O assistente está a escrever",
    "chat.initial": "Olá! Sou o Assistente LEX. Posso ajudar com plugins, downloads, versões, suporte, Discord e pedidos personalizados. Sou um assistente automático por palavras-chave, não uma IA real, por isso algumas informações podem estar incompletas, desatualizadas ou erradas. Escolhe uma pergunta rápida ou escreve a tua mensagem.",
    "chat.quick.buy": "Como compro ou baixo?",
    "chat.quick.free": "Quais plugins são grátis?",
    "chat.quick.custom": "Posso pedir um plugin personalizado?",
    "chat.fallback": "Não tenho a certeza sobre isso. Posso ajudar com produtos, downloads, plugins grátis, instalação, suporte, versões, Discord, plugins personalizados, preços, categorias e requisitos comuns de servidor. Para uma resposta exata, contacta a LEX Store no Discord: https://discord.gg/cVBFu43g9G"
  }
};

const PRODUCTS = [
  {
    id: 1,
    name: "LexGauntlet",
    categoryKey: "fun",
    price: { en: "Free", pt: "Grátis" },
    type: "free",
    badgeKey: "free",
    icon: "👑",
    description: {
      en: "Professional Infinity Gauntlet plugin,  reliable on both single servers and multi-server networks",
      pt: "Plugin profissional da Manopla do Infinito, confiável tanto em servidores individuais quanto em redes com múltiplos servidores."
    },
    features: {
      en: ["Simple configuration", "1.21+ support", "Updates included", "Multi-server"],
      pt: ["Config simples", "Suporte 1.21+", "Atualizações incluídas", "Multi-server"]
    },
    gradient: "linear-gradient(135deg, rgba(255,211,106,.55), rgba(255,136,58,.25), rgba(99,240,165,.12))",
    actionType: "link",
    actionUrl: "https://modrinth.com/plugin/lexgauntlet"
  },
  {
    id: 2,
    name: "LexBounty",
    categoryKey: "economy",
    price: { en: "Free", pt: "Grátis" },
    type: "free",
    badgeKey: "free",
    icon: "💎",
    description: {
      en: "It allows players to place bounties on other players using Vault economy, automatically tracks and ranks the highest bounties.",
      pt: "Permite que os jogadores ofereçam recompensas por outros jogadores, classificando automaticamente as recompensas mais altas."
    },
    features: {
      en: ["GUI menus", "Full protection", "Multi-server"],
      pt: ["Menus GUI", "Proteção total", "Multi-server"]
    },
    gradient: "linear-gradient(135deg, rgba(244,114,182,.48), rgba(192,132,252,.26), rgba(99,240,165,.10))",
    actionType: "link",
    actionUrl: "https://modrinth.com/plugin/lexbounty"
  },
  {
    id: 3,
    name: "DiscordSND",
    categoryKey: "utilities",
    price: { en: "Free", pt: "Grátis" },
    type: "free",
    badgeKey: "free",
    icon: "🛡️",
    description: {
      en: "Powerful, highly configurable Minecraft plugin that sends server events and custom messages directly to Discord.",
      pt: "Altamente configurável que envia eventos do servidor e mensagens personalizadas diretamente para o Discord."
    },
    features: {
      en: ["Real-time messages", "100% config", "Bot or Webhook"],
      pt: ["Mensagens em tempo real", "100% configurável", "Bot ou Webhook"]
    },
    gradient: "linear-gradient(135deg, rgba(56,189,248,.45), rgba(99,102,241,.26), rgba(99,240,165,.12))",
    actionType: "link",
    actionUrl: "https://modrinth.com/plugin/discordsnd"
  },
  {
    id: 4,
    name: "LexTPA",
    categoryKey: "adventure",
    price: { en: "Free", pt: "Grátis" },
    type: "free",
    badgeKey: "free",
    icon: "🛡️",
    description: {
      en: "A modern teleport request plugin, designed to feel clean and fast for players while still being powerful for large networks.",
      pt: "Um plugin moderno para solicitação de teletransporte, projetado para oferecer uma experiência limpa e rápida aos jogadores, sem deixar de ser poderoso para grandes redes."
    },
    features: {
      en: ["Multi-Server", "GUI", "Easy to configure"],
      pt: ["Multi-Server", "GUI", "Fácil de configurar"]
    },
    gradient: "linear-gradient(135deg, rgba(99,240,165,.48), rgba(132,204,22,.26), rgba(255,211,106,.12))",
    actionType: "link",
    actionUrl: "https://modrinth.com/plugin/lextpa"
  },
];

let currentLang = getInitialLanguage();
let selectedCategory = "all";
let searchTerm = "";

const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

function getInitialLanguage() {
  const saved = localStorage.getItem("lex-store-language");
  if (saved === "pt" || saved === "en") return saved;
  return (navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en";
}

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.en[key] || key;
}

function localized(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLang] || value.en || Object.values(value)[0] || "";
  }
  return value;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "pt" ? "pt-PT" : "en";
  document.title = t("meta.title");

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-lang-btn]").forEach(button => {
    button.classList.toggle("active", button.dataset.langBtn === currentLang);
    button.setAttribute("aria-pressed", String(button.dataset.langBtn === currentLang));
  });

  setupYear();
  renderQuickReplies();
}

function categoryLabel(categoryKey) {
  return categoryKey === "all" ? t("category.all") : t(`categories.${categoryKey}`);
}

function getCategories() {
  return ["all", ...new Set(PRODUCTS.map(product => product.categoryKey))];
}

function renderFilters() {
  categoryFilters.innerHTML = getCategories().map(categoryKey => `
    <button class="filter-btn ${categoryKey === selectedCategory ? "active" : ""}" type="button" data-category="${escapeHtml(categoryKey)}">
      ${escapeHtml(categoryLabel(categoryKey))}
    </button>
  `).join("");

  categoryFilters.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function productMatches(product) {
  const categoryOk = selectedCategory === "all" || product.categoryKey === selectedCategory;
  const features = localized(product.features).join(" ");
  const searchText = `${product.name} ${categoryLabel(product.categoryKey)} ${localized(product.description)} ${features}`.toLowerCase();
  return categoryOk && searchText.includes(searchTerm.toLowerCase().trim());
}

function getActionIcon(product) {
  if (product.actionType === "discord") return "💬";
  if (product.type === "free") return "⬇️";
  return "↗";
}

function getActionLabel(product) {
  return product.type === "free" ? t("actions.download") : t("actions.buy");
}

function renderProducts() {
  const filtered = PRODUCTS.filter(productMatches);

  productGrid.innerHTML = filtered.map((product, index) => {
    const url = product.actionType === "discord" ? DISCORD_URL : product.actionUrl;
    const features = localized(product.features);

    return `
      <article class="product-card" style="animation-delay: ${index * 70}ms;">
        <div class="product-inner">
          <div class="product-bg" style="--gradient: ${product.gradient};"></div>
          <div class="product-top">
            <span class="product-icon">${escapeHtml(product.icon)}</span>
            <span class="product-badge">${escapeHtml(t(`badges.${product.badgeKey}`))}</span>
          </div>
          <div class="product-body">
            <p class="product-category">${escapeHtml(categoryLabel(product.categoryKey))}</p>
            <div class="product-price-row">
              <h3>${escapeHtml(product.name)}</h3>
              <span class="product-price">${escapeHtml(localized(product.price))}</span>
            </div>
            <p class="product-description">${escapeHtml(localized(product.description))}</p>
            <ul class="product-features">
              ${features.map(feature => `<li class="product-feature">${escapeHtml(feature)}</li>`).join("")}
            </ul>
            <div class="product-actions">
              <a class="product-btn magnetic" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
                ${escapeHtml(getActionLabel(product))} ${getActionIcon(product)}
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyState.style.display = filtered.length ? "none" : "block";
  bindMouseLight();
  bindMagneticButtons();
}

function setupLanguageButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach(button => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.langBtn;
      localStorage.setItem("lex-store-language", currentLang);
      applyTranslations();
      renderFilters();
      renderProducts();
    });
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}

function createFloatingBlocks() {
  const container = document.getElementById("floatingBlocks");
  const colors = ["rgba(99,240,165,.28)", "rgba(255,211,106,.22)", "rgba(192,132,252,.22)", "rgba(255,255,255,.18)"];

  for (let i = 0; i < 26; i++) {
    const block = document.createElement("span");
    block.className = "float-block";
    block.style.setProperty("--left", `${Math.random() * 100}%`);
    block.style.setProperty("--top", `${Math.random() * 100}%`);
    block.style.setProperty("--size", `${8 + Math.random() * 14}px`);
    block.style.setProperty("--duration", `${7 + Math.random() * 10}s`);
    block.style.setProperty("--delay", `${Math.random() * -10}s`);
    block.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
    container.appendChild(block);
  }
}

function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function setupFAQ() {
  document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) faq.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
}

function setupSearch() {
  searchInput.addEventListener("input", event => {
    searchTerm = event.target.value;
    renderProducts();
  });
}

function setupCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  let hasMouse = false;

  window.addEventListener("pointermove", event => {
    if (!hasMouse) {
      glow.style.opacity = "1";
      hasMouse = true;
    }
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });

  window.addEventListener("pointerleave", () => {
    glow.style.opacity = "0";
    hasMouse = false;
  });
}

function setupTiltCard() {
  const card = document.getElementById("heroTilt");
  if (!card) return;

  card.addEventListener("pointermove", event => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.animation = "none";
    card.style.transform = `rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
    card.style.animation = "slowFloat 6s ease-in-out infinite";
  });
}

function bindMouseLight() {
  document.querySelectorAll(".feature-card, .product-card, .faq-item").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

function bindMagneticButtons() {
  document.querySelectorAll(".magnetic").forEach(button => {
    button.addEventListener("pointermove", event => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}


const CHAT_QUICK_KEYS = ["chat.quick.buy", "chat.quick.free", "chat.quick.custom"];

function getProductNames() {
  return PRODUCTS.map(product => product.name).join(", ");
}

function getFreeProductNames() {
  const freeProducts = PRODUCTS.filter(product => product.type === "free").map(product => product.name);
  return freeProducts.length ? freeProducts.join(", ") : (currentLang === "pt" ? "nenhum plugin grátis no momento" : "no free plugins right now");
}

function getCategoryProductNames(categoryKey) {
  const products = PRODUCTS.filter(product => product.categoryKey === categoryKey).map(product => product.name);
  return products.length ? products.join(", ") : (currentLang === "pt" ? "nenhum produto encontrado nessa categoria" : "no products found in that category");
}

const CHAT_INTENTS = [
  {
    id: "greeting",
    patterns: {
      pt: [["ola"], ["olá"], ["oi"], ["boas"], ["bom", "dia"], ["boa", "tarde"], ["boa", "noite"], ["eae"], ["hey"]],
      en: [["hello"], ["hi"], ["hey"], ["good", "morning"], ["good", "afternoon"], ["good", "evening"]]
    },
    response: {
      pt: "Olá! Posso ajudar com compras, downloads, plugins grátis, instalação, suporte, versões 1.21+, Discord, categorias ou plugins personalizados. Escreve o nome de um plugin ou a tua dúvida.",
      en: "Hi! I can help with purchases, downloads, free plugins, installation, support, 1.21+ versions, Discord, categories or custom plugins. Type a plugin name or your question."
    }
  },
  {
    id: "bot_identity",
    patterns: {
      pt: [["es", "ia"], ["és", "ia"], ["tu", "es"], ["tu", "és"], ["humano"], ["bot"], ["assistente"], ["inteligencia", "artificial"], ["inteligência", "artificial"]],
      en: [["are", "you", "ai"], ["are", "you", "human"], ["bot"], ["assistant"], ["artificial", "intelligence"]]
    },
    response: {
      pt: "Sou um assistente automático da LEX Store baseado em palavras-chave. Tento responder como um assistente inteligente, mas não sou uma IA real ligada a uma base de dados; algumas respostas podem estar incompletas ou erradas.",
      en: "I’m an automatic LEX Store keyword assistant. I try to answer like a smart assistant, but I’m not a real AI connected to a database; some answers may be incomplete or incorrect."
    }
  },
  {
    id: "buy",
    patterns: {
      pt: [["comprar"], ["compra"], ["quero", "comprar"], ["pagamento"], ["pagar"], ["adquirir"], ["checkout"], ["como", "pago"], ["como", "comprar"], ["comprar", "plugin"]],
      en: [["buy"], ["purchase"], ["want", "buy"], ["payment"], ["pay"], ["checkout"], ["how", "buy"], ["buy", "plugin"]]
    },
    response: {
      pt: "Para comprar ou obter um plugin, vai ao catálogo, abre o card do produto e clica no botão principal. Alguns produtos abrem um link externo, outros podem enviar para o Discord. Se tiveres dúvidas antes de comprar, fala no Discord da LEX Store.",
      en: "To buy or get a plugin, go to the catalog, open the product card and click the main button. Some products open an external link, while others may send you to Discord. If you have questions before buying, contact LEX Store on Discord."
    }
  },
  {
    id: "price",
    patterns: {
      pt: [["preco"], ["preço"], ["precos"], ["preços"], ["valor"], ["custa"], ["quanto"], ["barato"], ["caro"], ["desconto"], ["cupao"], ["cupom"]],
      en: [["price"], ["prices"], ["cost"], ["how", "much"], ["cheap"], ["expensive"], ["discount"], ["coupon"], ["promo"]]
    },
    response: {
      pt: "Os preços aparecem diretamente nos cards dos produtos. Quando um produto está marcado como Grátis, o botão aparece como Baixar. Promoções, descontos ou valores personalizados devem ser confirmados no Discord, porque podem mudar.",
      en: "Prices are shown directly on the product cards. When a product is marked as Free, the button appears as Download. Promotions, discounts or custom prices should be confirmed on Discord because they may change."
    }
  },
  {
    id: "free_download",
    patterns: {
      pt: [["gratis"], ["grátis"], ["gratuito"], ["baixar"], ["download"], ["modrinth"], ["sem", "pagar"], ["plugin", "gratis"], ["plugin", "grátis"]],
      en: [["free"], ["download"], ["modrinth"], ["without", "paying"], ["free", "plugin"], ["free", "plugins"]]
    },
    response: {
      pt: () => `Neste momento, os produtos marcados como grátis são: ${getFreeProductNames()}. Clica no botão Baixar no card do produto para abrir o link oficial. Confirma sempre a versão, dependências e instruções no link antes de instalares.`,
      en: () => `Right now, the products marked as free are: ${getFreeProductNames()}. Click the Download button on the product card to open the official link. Always confirm version support, dependencies and instructions before installing.`
    }
  },
  {
    id: "custom",
    patterns: {
      pt: [["plugin", "personalizado"], ["plugin", "custom"], ["encomendar"], ["orcamento"], ["orçamento"], ["pedido", "plugin"], ["fazer", "plugin"], ["plugin", "exclusivo"], ["desenvolver", "plugin"]],
      en: [["custom", "plugin"], ["request", "plugin"], ["commission"], ["quote"], ["make", "plugin"], ["order", "plugin"], ["exclusive", "plugin"], ["develop", "plugin"]]
    },
    response: {
      pt: "Sim, podes pedir um plugin personalizado. Para uma resposta melhor, envia no Discord: ideia do plugin, versão do servidor, tipo de servidor, comandos desejados, permissões, menus, mensagens, orçamento e prazo. Quanto mais detalhes enviares, mais fácil é avaliar.",
      en: "Yes, you can request a custom plugin. For a better answer, send this on Discord: plugin idea, server version, server type, desired commands, permissions, menus, messages, budget and deadline. The more details you send, the easier it is to evaluate."
    }
  },
  {
    id: "support",
    patterns: {
      pt: [["suporte"], ["ajuda"], ["erro"], ["bug"], ["problema"], ["nao", "funciona"], ["não", "funciona"], ["crash"], ["falha"], ["duvida"], ["dúvida"]],
      en: [["support"], ["help"], ["error"], ["bug"], ["problem"], ["not", "working"], ["crash"], ["issue"], ["question"]]
    },
    response: {
      pt: "Para suporte, junta: nome do plugin, versão do servidor, versão do Java, lista de plugins, log/erro completo e o que estavas a tentar fazer. Depois envia tudo no Discord da LEX Store para ser mais fácil ajudar.",
      en: "For support, collect: plugin name, server version, Java version, plugin list, full log/error and what you were trying to do. Then send everything on the LEX Store Discord so it is easier to help."
    }
  },
  {
    id: "discord",
    patterns: {
      pt: [["discord"], ["contacto"], ["contato"], ["falar"], ["ticket"], ["comunidade"], ["servidor", "discord"], ["link", "discord"]],
      en: [["discord"], ["contact"], ["talk"], ["ticket"], ["community"], ["discord", "server"], ["discord", "link"]]
    },
    response: {
      pt: `O Discord oficial da LEX Store é: ${DISCORD_URL}. Podes usá-lo para suporte, compras manuais, pedidos personalizados ou dúvidas antes de baixar/comprar.`,
      en: `The official LEX Store Discord is: ${DISCORD_URL}. You can use it for support, manual purchases, custom requests or questions before downloading/buying.`
    }
  },
  {
    id: "version",
    patterns: {
      pt: [["versao"], ["versão"], ["compatibilidade"], ["1.21"], ["minecraft", "versao"], ["minecraft", "versão"], ["paper"], ["spigot"], ["purpur"], ["bukkit"]],
      en: [["version"], ["compatibility"], ["1.21"], ["minecraft", "version"], ["paper"], ["spigot"], ["purpur"], ["bukkit"]]
    },
    response: {
      pt: "O site apresenta compatibilidade geral 1.21+. Muitos plugins costumam ser pensados para Paper/Purpur/Spigot, mas cada produto pode ter requisitos próprios. Confirma sempre a página oficial do plugin antes de instalar.",
      en: "The site shows general 1.21+ compatibility. Many plugins are usually made for Paper/Purpur/Spigot, but each product may have its own requirements. Always confirm the official plugin page before installing."
    }
  },
  {
    id: "install",
    patterns: {
      pt: [["instalar"], ["instalacao"], ["instalação"], ["colocar", "plugin"], ["pasta", "plugins"], ["jar"], ["reiniciar"], ["reload"]],
      en: [["install"], ["installation"], ["put", "plugin"], ["plugins", "folder"], ["jar"], ["restart"], ["reload"]]
    },
    response: {
      pt: "Instalação comum: baixa o ficheiro .jar, coloca-o na pasta plugins do servidor, reinicia o servidor e edita os ficheiros de configuração gerados. Evita /reload se o plugin não recomendar. Confirma dependências como Vault ou PlaceholderAPI quando necessário.",
      en: "Common installation: download the .jar file, put it in the server plugins folder, restart the server and edit the generated configuration files. Avoid /reload unless the plugin recommends it. Confirm dependencies like Vault or PlaceholderAPI when needed."
    }
  },
  {
    id: "dependencies",
    patterns: {
      pt: [["dependencia"], ["dependência"], ["dependencias"], ["dependências"], ["vault"], ["placeholderapi"], ["luckperms"], ["permissoes"], ["permissões"], ["economia"]],
      en: [["dependency"], ["dependencies"], ["vault"], ["placeholderapi"], ["luckperms"], ["permissions"], ["economy"]]
    },
    response: {
      pt: "Alguns plugins podem precisar de dependências. Plugins de economia normalmente usam Vault e um plugin de economia compatível. Plugins com placeholders podem precisar de PlaceholderAPI. Permissões normalmente são geridas com LuckPerms ou outro sistema de permissões.",
      en: "Some plugins may need dependencies. Economy plugins usually use Vault and a compatible economy plugin. Placeholder-based plugins may need PlaceholderAPI. Permissions are usually managed with LuckPerms or another permissions system."
    }
  },
  {
    id: "config",
    patterns: {
      pt: [["configurar"], ["configuracao"], ["configuração"], ["config"], ["yml"], ["yaml"], ["mensagens"], ["traduzir"], ["editar"]],
      en: [["configure"], ["configuration"], ["config"], ["yml"], ["yaml"], ["messages"], ["translate"], ["edit"]]
    },
    response: {
      pt: "A maioria dos plugins gera ficheiros de configuração após o primeiro arranque. Normalmente podes editar mensagens, permissões, comandos, tempos e opções do sistema. Depois de alterar configs, reinicia o servidor ou usa o comando de reload do próprio plugin, se existir.",
      en: "Most plugins generate configuration files after the first startup. You can usually edit messages, permissions, commands, cooldowns and system options. After changing configs, restart the server or use the plugin’s own reload command if it exists."
    }
  },
  {
    id: "updates",
    patterns: {
      pt: [["atualizacao"], ["atualização"], ["update"], ["updates"], ["nova", "versao"], ["nova", "versão"], ["manutencao"], ["manutenção"]],
      en: [["update"], ["updates"], ["new", "version"], ["maintenance"], ["patch"], ["changelog"]]
    },
    response: {
      pt: "Atualizações podem variar por plugin. Para produtos com link externo, verifica a página oficial. Para dúvidas sobre futuras versões, correções ou manutenção, o Discord é o melhor lugar para confirmar informações recentes.",
      en: "Updates may vary by plugin. For products with external links, check the official page. For questions about future versions, fixes or maintenance, Discord is the best place to confirm recent information."
    }
  },
  {
    id: "refund",
    patterns: {
      pt: [["reembolso"], ["refund"], ["devolver"], ["devolucao"], ["devolução"], ["cancelar", "compra"], ["arrependi"]],
      en: [["refund"], ["return"], ["cancel", "purchase"], ["money", "back"], ["chargeback"]]
    },
    response: {
      pt: "Políticas de reembolso podem depender do produto e do método de compra. Antes de comprar, confirma as condições no Discord ou no link oficial do produto. Eu posso estar desatualizado sobre políticas específicas.",
      en: "Refund policies may depend on the product and purchase method. Before buying, confirm the terms on Discord or on the official product link. I may be outdated about specific policies."
    }
  },
  {
    id: "security",
    patterns: {
      pt: [["seguro"], ["seguranca"], ["segurança"], ["virus"], ["vírus"], ["token"], ["bot", "discord"], ["roubar"], ["malware"], ["confiavel"], ["confiável"]],
      en: [["safe"], ["security"], ["virus"], ["token"], ["discord", "bot"], ["steal"], ["malware"], ["trusted"]]
    },
    response: {
      pt: "Por segurança, baixa plugins apenas pelos botões oficiais do site ou links confirmados no Discord. Nunca partilhes tokens, palavras-passe ou ficheiros sensíveis. Se tiveres dúvidas sobre um ficheiro, pede confirmação antes de instalar.",
      en: "For safety, download plugins only from the official site buttons or links confirmed on Discord. Never share tokens, passwords or sensitive files. If you are unsure about a file, ask for confirmation before installing."
    }
  },
  {
    id: "products",
    patterns: {
      pt: [["produtos"], ["plugins"], ["catalogo"], ["catálogo"], ["lista"], ["quais", "plugins"], ["tem", "plugins"], ["mostrar", "plugins"]],
      en: [["products"], ["plugins"], ["catalog"], ["list"], ["which", "plugins"], ["show", "plugins"]]
    },
    response: {
      pt: () => `No catálogo aparecem estes plugins: ${getProductNames()}. Usa a pesquisa e os filtros para encontrar categorias como Diversão, Economia, Utilidades e Aventura.`,
      en: () => `The catalog currently includes: ${getProductNames()}. Use the search and filters to find categories like Fun, Economy, Utilities and Adventure.`
    }
  },
  {
    id: "categories",
    patterns: {
      pt: [["categoria"], ["categorias"], ["fun"], ["diversao"], ["diversão"], ["adventure"], ["aventura"], ["economia"], ["utilidades"], ["lobby"], ["seguranca"], ["segurança"]],
      en: [["category"], ["categories"], ["fun"], ["adventure"], ["economy"], ["utilities"], ["lobby"], ["security"], ["administration"]]
    },
    response: {
      pt: () => `As categorias são geradas pelos produtos cadastrados. No momento há produtos em: ${getCategories().filter(key => key !== "all").map(categoryLabel).join(", ")}. Se procurares por Diversão, vais encontrar: ${getCategoryProductNames("fun")}. Em Aventura: ${getCategoryProductNames("adventure")}.`,
      en: () => `Categories are generated from the registered products. Right now there are products in: ${getCategories().filter(key => key !== "all").map(categoryLabel).join(", ")}. In Fun, you will find: ${getCategoryProductNames("fun")}. In Adventure: ${getCategoryProductNames("adventure")}.`
    }
  },
  {
    id: "fun_category",
    patterns: {
      pt: [["fun"], ["diversao"], ["diversão"], ["plugin", "diversao"], ["plugin", "diversão"]],
      en: [["fun"], ["fun", "plugin"], ["fun", "plugins"]]
    },
    response: {
      pt: () => `Na categoria Diversão, o catálogo mostra: ${getCategoryProductNames("fun")}. Esta categoria é ideal para sistemas mais interativos, criativos ou diferentes para o servidor.`,
      en: () => `In the Fun category, the catalog shows: ${getCategoryProductNames("fun")}. This category is ideal for more interactive, creative or unique server systems.`
    }
  },
  {
    id: "adventure_category",
    patterns: {
      pt: [["adventure"], ["aventura"], ["plugin", "aventura"]],
      en: [["adventure"], ["adventure", "plugin"], ["adventure", "plugins"]]
    },
    response: {
      pt: () => `Na categoria Aventura, o catálogo mostra: ${getCategoryProductNames("adventure")}. Esta categoria é indicada para mecânicas de exploração, movimento, teletransporte ou gameplay.`,
      en: () => `In the Adventure category, the catalog shows: ${getCategoryProductNames("adventure")}. This category is suited for exploration, movement, teleport or gameplay mechanics.`
    }
  },
  {
    id: "lexgauntlet",
    patterns: {
      pt: [["lexgauntlet"], ["gauntlet"], ["manopla"], ["infinity", "gauntlet"], ["joias", "infinito"]],
      en: [["lexgauntlet"], ["gauntlet"], ["infinity", "gauntlet"], ["infinity", "stones"]]
    },
    response: {
      pt: "O LexGauntlet é um plugin grátis da categoria Diversão. O botão Baixar leva ao link oficial. Confirma no Modrinth/página oficial se a versão, dependências e instruções batem com o teu servidor.",
      en: "LexGauntlet is a free plugin in the Fun category. The Download button opens the official link. Confirm on Modrinth/the official page that the version, dependencies and instructions match your server."
    }
  },
  {
    id: "lexbounty",
    patterns: {
      pt: [["lexbounty"], ["bounty"], ["recompensa"], ["recompensas"], ["procurado"], ["caca", "jogador"], ["caça", "jogador"]],
      en: [["lexbounty"], ["bounty"], ["bounties"], ["reward"], ["rewards"], ["wanted"], ["hunt", "player"]]
    },
    response: {
      pt: "O LexBounty é um plugin grátis de economia focado em recompensas por jogadores. Normalmente este tipo de plugin usa economia Vault, então confirma as dependências antes de instalar.",
      en: "LexBounty is a free economy plugin focused on player bounties. This type of plugin usually uses Vault economy, so confirm dependencies before installing."
    }
  },
  {
    id: "discordsnd",
    patterns: {
      pt: [["discordsnd"], ["discord", "snd"], ["notificacao"], ["notificação"], ["notificacoes"], ["notificações"], ["discord", "minecraft"], ["send", "discord"]],
      en: [["discordsnd"], ["discord", "snd"], ["notification"], ["notifications"], ["discord", "minecraft"], ["send", "discord"]]
    },
    response: {
      pt: "O DiscordSND é um plugin de utilidades ligado a integrações/notificações com Discord. Vê o card do produto e confirma no link oficial antes de instalar, especialmente se envolver webhooks ou configurações do Discord.",
      en: "DiscordSND is a utilities plugin related to Discord integrations/notifications. Check the product card and confirm the official link before installing, especially if it involves webhooks or Discord settings."
    }
  },
  {
    id: "lextpa",
    patterns: {
      pt: [["lextpa"], ["tpa"], ["teleport"], ["teletransporte"], ["tp"], ["pedido", "teleporte"], ["teleportar"]],
      en: [["lextpa"], ["tpa"], ["teleport"], ["tp"], ["teleport", "request"]]
    },
    response: {
      pt: "O LexTPA é um plugin grátis da categoria Aventura para pedidos de teletransporte. É pensado para uma experiência limpa e rápida, mas confirma comandos, permissões e compatibilidade no link oficial.",
      en: "LexTPA is a free Adventure plugin for teleport requests. It is designed for a clean and fast experience, but confirm commands, permissions and compatibility on the official link."
    }
  },
  {
    id: "server_type",
    patterns: {
      pt: [["survival"], ["skyblock"], ["rankup"], ["lifesteal"], ["factions"], ["smp"], ["minigames"], ["rede"], ["network"]],
      en: [["survival"], ["skyblock"], ["rankup"], ["lifesteal"], ["factions"], ["smp"], ["minigames"], ["network"]]
    },
    response: {
      pt: "A escolha do plugin depende do tipo de servidor. Survival e SMP combinam bem com utilidades, TPA e economia. SkyBlock/RankUP podem precisar de economia, recompensas e menus. Para uma recomendação exata, envia o teu tipo de servidor no Discord.",
      en: "The best plugin depends on your server type. Survival and SMP work well with utilities, TPA and economy. SkyBlock/RankUP may need economy, rewards and menus. For an exact recommendation, send your server type on Discord."
    }
  },
  {
    id: "source_license",
    patterns: {
      pt: [["codigo", "fonte"], ["código", "fonte"], ["source"], ["open", "source"], ["licenca"], ["licença"], ["revender"], ["redistribuir"]],
      en: [["source", "code"], ["open", "source"], ["license"], ["resell"], ["redistribute"]]
    },
    response: {
      pt: "Código-fonte, licença, redistribuição e permissões de revenda dependem de cada plugin. Confirma sempre na página oficial do produto ou no Discord antes de reutilizar, modificar ou redistribuir qualquer ficheiro.",
      en: "Source code, license, redistribution and resale permissions depend on each plugin. Always confirm on the official product page or Discord before reusing, modifying or redistributing any file."
    }
  },
  {
    id: "delivery",
    patterns: {
      pt: [["entrega"], ["recebo"], ["receber"], ["depois", "compra"], ["apos", "comprar"], ["após", "comprar"], ["link", "download"]],
      en: [["delivery"], ["receive"], ["after", "buying"], ["after", "purchase"], ["download", "link"]]
    },
    response: {
      pt: "A entrega depende do produto. Plugins grátis normalmente abrem o link de download. Produtos pagos podem usar checkout externo ou Discord. Guarda sempre comprovativos e confirma o processo no canal oficial.",
      en: "Delivery depends on the product. Free plugins usually open the download link. Paid products may use an external checkout or Discord. Always keep proof of payment and confirm the process through the official channel."
    }
  },
  {
    id: "thanks",
    patterns: {
      pt: [["obrigado"], ["obrigada"], ["valeu"], ["thanks"], ["agradecido"], ["perfeito"], ["top"]],
      en: [["thanks"], ["thank", "you"], ["ty"], ["appreciate"], ["perfect"], ["great"]]
    },
    response: {
      pt: "De nada! Se precisares de ajuda com algum plugin específico, escreve o nome dele e tento orientar-te.",
      en: "You’re welcome! If you need help with a specific plugin, type its name and I’ll try to guide you."
    }
  },
  {
    id: "bye",
    patterns: {
      pt: [["adeus"], ["tchau"], ["xau"], ["ate", "logo"], ["até", "logo"], ["falamos"]],
      en: [["bye"], ["goodbye"], ["see", "you"], ["talk", "later"]]
    },
    response: {
      pt: "Até logo! Boa sorte com o teu servidor Minecraft. Se precisares de ajuda, a LEX Store está no Discord.",
      en: "See you! Good luck with your Minecraft server. If you need help, LEX Store is on Discord."
    }
  }
];

let chatbotReady = false;
let chatbotOpen = false;
let chatbotTyping = false;
let chatbotHistoryStarted = false;

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+\s.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectMessageLanguage(message) {
  const normalized = normalizeText(message);
  const ptWords = ["ola", "olá", "oi", "boas", "obrigado", "obrigada", "quero", "como", "comprar", "baixar", "gratis", "grátis", "suporte", "versao", "versão", "plugin", "personalizado", "tenho", "preciso", "ajuda", "discord", "preco", "preço", "instalar", "configurar", "erro", "servidor", "teletransporte", "recompensa", "categoria"];
  const enWords = ["hello", "hi", "thanks", "thank", "buy", "download", "free", "support", "version", "custom", "plugin", "need", "help", "discord", "price", "install", "configure", "error", "server", "teleport", "bounty", "category"];
  const ptScore = ptWords.reduce((score, word) => score + (normalized.includes(normalizeText(word)) ? 1 : 0), 0);
  const enScore = enWords.reduce((score, word) => score + (normalized.includes(normalizeText(word)) ? 1 : 0), 0);
  if (ptScore > enScore) return "pt";
  if (enScore > ptScore) return "en";
  return currentLang;
}

function patternMatches(message, pattern) {
  const normalized = normalizeText(message);
  return pattern.every(keyword => normalized.includes(normalizeText(keyword)));
}

function getChatResponse(message) {
  const lang = detectMessageLanguage(message);
  const matches = CHAT_INTENTS.map(item => {
    const langPatterns = item.patterns[lang] || [];
    const allPatterns = Object.values(item.patterns).flat();
    const pattern = langPatterns.find(candidate => patternMatches(message, candidate))
      || allPatterns.find(candidate => patternMatches(message, candidate));

    if (!pattern) return null;

    return {
      item,
      score: pattern.join(" ").length + pattern.length * 10
    };
  }).filter(Boolean).sort((a, b) => b.score - a.score);

  const intent = matches[0] && matches[0].item;
  if (!intent) return (TRANSLATIONS[lang] && TRANSLATIONS[lang]["chat.fallback"]) || t("chat.fallback");

  const response = intent.response[lang] || intent.response.en;
  return typeof response === "function" ? response() : response;
}

function chatbotElements() {
  return {
    widget: document.getElementById("chatbotWidget"),
    toggle: document.getElementById("chatbotToggle"),
    window: document.getElementById("chatbotWindow"),
    close: document.getElementById("chatbotClose"),
    messages: document.getElementById("chatbotMessages"),
    quick: document.getElementById("chatbotQuickReplies"),
    form: document.getElementById("chatbotForm"),
    input: document.getElementById("chatbotInput")
  };
}

function addChatMessage(role, text) {
  const { messages } = chatbotElements();
  if (!messages) return;

  const message = document.createElement("div");
  message.className = `chat-message ${role}`;
  message.innerHTML = `<div class="chat-bubble">${escapeHtml(text)}</div>`;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function addTypingIndicator() {
  const { messages } = chatbotElements();
  if (!messages) return null;

  const typing = document.createElement("div");
  typing.className = "chat-message bot typing-message";
  typing.innerHTML = `
    <div class="chat-bubble typing-bubble" aria-label="${escapeHtml(t("chat.typing"))}">
      <span></span><span></span><span></span>
    </div>
  `;
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
  return typing;
}

function sendBotReply(text) {
  if (chatbotTyping) return;
  chatbotTyping = true;
  const typing = addTypingIndicator();
  const delay = 2000 + Math.floor(Math.random() * 1000);

  window.setTimeout(() => {
    if (typing) typing.remove();
    addChatMessage("bot", text);
    chatbotTyping = false;
  }, delay);
}

function handleChatSubmit(text) {
  const clean = String(text || "").trim();
  if (!clean || chatbotTyping) return;

  const { input } = chatbotElements();
  addChatMessage("user", clean);
  if (input) input.value = "";
  sendBotReply(getChatResponse(clean));
}

function renderQuickReplies() {
  const { quick } = chatbotElements();
  if (!quick) return;

  quick.innerHTML = CHAT_QUICK_KEYS.map(key => `
    <button type="button" class="chatbot-quick-btn" data-chat-question="${escapeHtml(t(key))}">${escapeHtml(t(key))}</button>
  `).join("");

  quick.querySelectorAll("[data-chat-question]").forEach(button => {
    button.addEventListener("click", () => handleChatSubmit(button.dataset.chatQuestion));
  });
}

function openChatbot() {
  const { widget, window: chatWindow, input } = chatbotElements();
  if (!widget || !chatWindow) return;

  chatbotOpen = true;
  widget.classList.add("open");
  chatWindow.setAttribute("aria-hidden", "false");

  if (!chatbotHistoryStarted) {
    chatbotHistoryStarted = true;
    addChatMessage("bot", t("chat.initial"));
  }

  window.setTimeout(() => input && input.focus(), 150);
}

function closeChatbot() {
  const { widget, window: chatWindow } = chatbotElements();
  if (!widget || !chatWindow) return;

  chatbotOpen = false;
  widget.classList.remove("open");
  chatWindow.setAttribute("aria-hidden", "true");
}

function setupChatbot() {
  if (chatbotReady) return;
  const { toggle, close, form, input } = chatbotElements();
  if (!toggle || !close || !form || !input) return;

  chatbotReady = true;
  renderQuickReplies();

  toggle.addEventListener("click", () => {
    chatbotOpen ? closeChatbot() : openChatbot();
  });

  close.addEventListener("click", closeChatbot);

  form.addEventListener("submit", event => {
    event.preventDefault();
    handleChatSubmit(input.value);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && chatbotOpen) closeChatbot();
  });
}

function setupYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function init() {
  applyTranslations();
  setupLanguageButtons();
  setupMenu();
  setupFAQ();
  setupSearch();
  setupCursorGlow();
  setupTiltCard();
  createFloatingBlocks();
  renderFilters();
  renderProducts();
  setupRevealAnimations();
  bindMouseLight();
  bindMagneticButtons();
  setupChatbot();
}

document.addEventListener("DOMContentLoaded", init);
