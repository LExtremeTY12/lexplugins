// Edit the site and plugins below. Keep the first line and the final semicolon.
window.LEXPLUGINS_CONFIG = {
  "site": {
    "name": "lexplugins",
    "author": "LExtremeTY",
    "tagline": "The next level of your server.",
    "description": "Minecraft plugins that bring more possibilities to your server. Explore the collection and find your next addition.",
    "modrinthUrl": "https://modrinth.com/user/LExtremeTY",
    "discordUrl": "https://discord.gg/RRYP5etNnn",
    "translations": {
      "pt": {
        "tagline": "O próximo nível do teu servidor.",
        "description": "Plugins de Minecraft feitos para dar mais possibilidades ao teu servidor. Explora a coleção e encontra a tua próxima adição."
      },
      "es": {
        "tagline": "El siguiente nivel de tu servidor.",
        "description": "Plugins de Minecraft para darle más posibilidades a tu servidor. Explora la colección y encuentra tu próxima incorporación."
      }
    }
  },
  "plugins": [
    {
      "id": "lexbounty",
      "name": "LexBounty",
      "category": "Gameplay",
      "description": "Give PvP a new purpose. Place bounties on players, connect your Vault economy and keep your server network in sync.",
      "tags": [
        "Economy",
        "PvP",
        "Server networks"
      ],
      "platforms": [
        "Paper",
        "Spigot",
        "Purpur",
        "Bukkit"
      ],
      "minecraft": "1.21.x · 26.1.x · 26.2",
      "features": [
        "Bounties powered by the Vault economy",
        "A menu showing the top bounties",
        "Rewards paid only for player-versus-player kills",
        "Local storage or MySQL, with Redis synchronization"
      ],
      "requirements": "Requires Vault and a compatible economy plugin. MySQL and Redis are used in server network mode.",
      "command": "/bounty",
      "price": {
        "amount": 0,
        "currency": "EUR"
      },
      "modrinthUrl": "https://modrinth.com/plugin/lexbounty",
      "purchaseUrl": "",
      "translations": {
        "pt": {
          "description": "Dá um novo objetivo ao PvP. Cria recompensas por jogadores, integra a economia com Vault e sincroniza a tua rede de servidores.",
          "tags": [
            "Economia",
            "PvP",
            "Multi-servidor"
          ],
          "features": [
            "Recompensas com a economia do Vault",
            "Menu com as maiores recompensas",
            "Pagamento apenas por eliminações entre jogadores",
            "Armazenamento local ou MySQL e sincronização por Redis"
          ],
          "requirements": "Requer Vault e um plugin de economia compatível. MySQL e Redis são usados no modo multi-servidor.",
          "command": "/bounty"
        },
        "es": {
          "description": "Dale un nuevo objetivo al PvP. Crea recompensas por jugadores, conecta la economía con Vault y sincroniza tu red de servidores.",
          "tags": [
            "Economía",
            "PvP",
            "Multiservidor"
          ],
          "features": [
            "Recompensas con la economía de Vault",
            "Menú con las mayores recompensas",
            "Pagos solo por eliminaciones entre jugadores",
            "Almacenamiento local o MySQL y sincronización con Redis"
          ],
          "requirements": "Requiere Vault y un plugin de economía compatible. MySQL y Redis se utilizan en el modo multiservidor.",
          "command": "/bounty"
        }
      }
    },
    {
      "id": "lexgauntlet",
      "name": "LexGauntlet",
      "category": "Gameplay",
      "description": "Put the power of the six Infinity Stones in your players’ hands. Customize their effects and manage the gauntlet through a dedicated menu.",
      "tags": [
        "Magic",
        "Adventure",
        "Server networks"
      ],
      "platforms": [
        "Paper",
        "Spigot",
        "Purpur",
        "Bukkit"
      ],
      "minecraft": "1.21.x · 26.1.x · 26.2",
      "features": [
        "Six Infinity Stones with configurable effects",
        "Gauntlet menu and admin tools",
        "CustomModelData support",
        "Local storage or MySQL for server networks"
      ],
      "requirements": "Configure each stone’s effects. Optional MySQL storage lets you share data between servers.",
      "command": "/gauntlet",
      "price": {
        "amount": 0,
        "currency": "EUR"
      },
      "modrinthUrl": "https://modrinth.com/plugin/lexgauntlet",
      "purchaseUrl": "",
      "translations": {
        "pt": {
          "description": "Coloca o poder das seis Joias do Infinito nas mãos dos jogadores. Personaliza os efeitos e gere a manopla num menu próprio.",
          "tags": [
            "Magia",
            "Aventura",
            "Multi-servidor"
          ],
          "features": [
            "Seis Joias do Infinito com efeitos configuráveis",
            "Menu da manopla e ferramentas de administração",
            "Suporte a CustomModelData",
            "Dados locais ou MySQL para redes de servidores"
          ],
          "requirements": "Configura os efeitos de cada joia. MySQL é opcional e permite partilhar os dados entre servidores.",
          "command": "/gauntlet"
        },
        "es": {
          "description": "Pon el poder de las seis Gemas del Infinito en manos de tus jugadores. Personaliza sus efectos y gestiona el guantelete desde su propio menú.",
          "tags": [
            "Magia",
            "Aventura",
            "Multiservidor"
          ],
          "features": [
            "Seis Gemas del Infinito con efectos configurables",
            "Menú del guantelete y herramientas de administración",
            "Compatibilidad con CustomModelData",
            "Datos locales o MySQL para redes de servidores"
          ],
          "requirements": "Configura los efectos de cada gema. MySQL es opcional y permite compartir los datos entre servidores.",
          "command": "/gauntlet"
        }
      }
    },
    {
      "id": "lextpa",
      "name": "LexTPA",
      "category": "Utilities",
      "description": "Bring your players together. Teleport requests with confirmation menus, interactive chat and cross-server support powered by Redis.",
      "tags": [
        "Teleportation",
        "Menus",
        "Server networks"
      ],
      "platforms": [
        "Paper",
        "Spigot",
        "Purpur",
        "Bukkit"
      ],
      "minecraft": "1.21.x · 26.1.x · 26.2",
      "features": [
        "Requests with /tpa and /tpahere",
        "Menus to confirm, accept or deny requests",
        "Clickable chat buttons",
        "Cross-server requests synchronized with Redis"
      ],
      "requirements": "Redis is only required for server network mode. Each server in the network needs a unique name.",
      "command": "/tpa <player>",
      "price": {
        "amount": 0,
        "currency": "EUR"
      },
      "modrinthUrl": "https://modrinth.com/plugin/lextpa",
      "purchaseUrl": "",
      "translations": {
        "pt": {
          "description": "Aproxima os teus jogadores. Pedidos de teletransporte com menus de confirmação, chat interativo e suporte entre servidores com Redis.",
          "tags": [
            "Teletransporte",
            "Menus",
            "Multi-servidor"
          ],
          "features": [
            "Pedidos com /tpa e /tpahere",
            "Menus para confirmar, aceitar ou recusar",
            "Botões clicáveis no chat",
            "Pedidos entre servidores sincronizados por Redis"
          ],
          "requirements": "Redis é necessário apenas para o modo multi-servidor. Cada servidor da rede deve ter um nome único.",
          "command": "/tpa <jogador>"
        },
        "es": {
          "description": "Acerca a tus jugadores. Solicitudes de teletransporte con menús de confirmación, chat interactivo y soporte entre servidores mediante Redis.",
          "tags": [
            "Teletransporte",
            "Menús",
            "Multiservidor"
          ],
          "features": [
            "Solicitudes con /tpa y /tpahere",
            "Menús para confirmar, aceptar o rechazar",
            "Botones en los que se puede hacer clic en el chat",
            "Solicitudes entre servidores sincronizadas con Redis"
          ],
          "requirements": "Redis solo es necesario para el modo multiservidor. Cada servidor de la red debe tener un nombre único.",
          "command": "/tpa <jugador>"
        }
      }
    },
    {
      "id": "discordsnd",
      "name": "DiscordSND",
      "category": "Discord",
      "description": "Connect your server to your community. Send messages and announcements to Discord with custom templates and support for multiple channels.",
      "tags": [
        "Discord",
        "Webhooks",
        "Messages"
      ],
      "platforms": [
        "Paper",
        "Spigot",
        "Bukkit"
      ],
      "minecraft": "1.21.x",
      "features": [
        "Send messages through webhooks or a bot",
        "Command-triggered announcements",
        "Customizable message templates",
        "Route messages to different Discord channels"
      ],
      "requirements": "Requires configured Discord webhooks or a bot. Events and logs must be set up manually.",
      "command": "/discord reload",
      "price": {
        "amount": 0,
        "currency": "EUR"
      },
      "modrinthUrl": "https://modrinth.com/plugin/discordsnd",
      "purchaseUrl": "",
      "translations": {
        "pt": {
          "description": "Liga o servidor à tua comunidade. Envia mensagens e anúncios para o Discord, com modelos personalizáveis e vários canais.",
          "tags": [
            "Discord",
            "Webhooks",
            "Mensagens"
          ],
          "features": [
            "Envio de mensagens por webhooks ou bot",
            "Anúncios acionados por comandos",
            "Modelos de mensagem personalizáveis",
            "Encaminhamento para diferentes canais do Discord"
          ],
          "requirements": "Requer a configuração de webhooks ou de um bot do Discord. Os eventos e registos devem ser configurados manualmente.",
          "command": "/discord reload"
        },
        "es": {
          "description": "Conecta tu servidor con tu comunidad. Envía mensajes y anuncios a Discord con plantillas personalizables y varios canales.",
          "tags": [
            "Discord",
            "Webhooks",
            "Mensajes"
          ],
          "features": [
            "Envío de mensajes mediante webhooks o un bot",
            "Anuncios activados por comandos",
            "Plantillas de mensajes personalizables",
            "Envío de mensajes a diferentes canales de Discord"
          ],
          "requirements": "Requiere configurar webhooks o un bot de Discord. Los eventos y registros deben configurarse manualmente.",
          "command": "/discord reload"
        }
      }
    }
  ]
};
