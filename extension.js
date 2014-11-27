(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'Quer te fuder até o talo!',
                    'deu-lhe um biscoito que está escrito "você é um viado"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Vou te dar um ban eterno de 30 dias"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Mostra as teta ae :trollface:"',
                    'deu-lhe um cookie vencido!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Você é um fracassado!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão achar que você é gay!',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo *-*"',
                    'deu-lhe um Trakinas e um copo de refrigerante',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que foi esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem deliciosos! :3'
                ];

        bot.loadChat();
    }

    
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "EMGbot",
        language: "portuguese",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["tema", "A música não se encaixa nos padrões da sala. "],
                ["op", "Essa música está na lista OP. "],
                ["historico", "A música ainda está no histórico. "],
                ["mix", "Você tocou um mix (muito longo) - não permitido. "],
                ["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
                ["nsfw", "A música que você tocou é NSFW (impróprio). "],
                ["indisponivel", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 3,
        motd: "Mensagem temporário do dia",
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://facebook.com/groups/1497216277163895/",
        youtubeLink: null,
        website: "https://electromilgrau.jimdo.com",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!"
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
