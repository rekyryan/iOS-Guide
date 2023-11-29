import{_ as s}from"./sideloadly_win.6263388d.js";import{_ as d,r as n,o as c,c as u,a as e,b as i,d as a,w as l,e as r}from"./app.5c5e11a4.js";const p={},h=e("p",null,"Il tool \xE8 compatibile con dispositivi su versioni iOS 14.0-14.3.",-1),_=e("p",null,"Utilizzeremo Sideloadly per installare l'app di Taurine sul tuo dispositivo iOS nello step successivo.",-1),m={class:"custom-container warning"},v=e("p",{class:"custom-container-title"},"WARNING",-1),f=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),i(" Download")],-1),g=e("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[e("p",null,[i(" Taurine \xE8 attualmente firmato su "),e("a",{href:"https://jailbreaks.app/",target:"_blank"},"jailbreaks.app"),i(" per una installazione pi\xF9 facile che non richiede un computer. ")])],-1),z={href:"https://taurine.app/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},S=r('<p><img src="'+s+'" alt="Uno screenshot dell\u2019applicazione di Sideloadly (Windows)"></p><h2 id="installazione" tabindex="-1"><a class="header-anchor" href="#installazione" aria-hidden="true">#</a> Installazione</h2><ol><li>Apri Sideloadly</li><li>Connetti il tuo dispositivo iOS al computer <ul><li>Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo</li></ul></li><li>Trascina il file <code>.ipa</code> di Taurine su Sideloadly</li><li>Inserisci il tuo Apple ID</li><li>Inserisci la tua password <ul><li>Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d\u2019accordo con ci\xF2, puoi sempre usare un Apple ID alternativo.</li></ul></li></ol><p>L\u2019app verr\xE0 adesso installata sul tuo dispositivo iOS.</p><h2 id="autorizzare-l-applicazione" tabindex="-1"><a class="header-anchor" href="#autorizzare-l-applicazione" aria-hidden="true">#</a> Autorizzare l\u2019applicazione</h2><ol><li>Vai su <code>Impostazioni</code> -&gt; <code>Generali</code> -&gt; <code>Gestione Dispositivo</code> -&gt; <code>&lt;Il tuo Apple ID&gt;</code><ul><li>A seconda del tuo utilizzo, <code>Gestione dispositivo</code> potrebbe apparire come <code>Gestione Profili e Dispositivo</code></li></ul></li><li>Clicca su <code>Autorizza &quot;&lt;Il tuo Apple ID&gt;&quot;</code></li></ol><p>L\u2019applicazione di Taurine adesso pu\xF2 essere aperta dalla home screen.</p><h2 id="eseguire-taurine" tabindex="-1"><a class="header-anchor" href="#eseguire-taurine" aria-hidden="true">#</a> Eseguire Taurine</h2><ol><li>Riavvia il dispositivo <ul><li>Questo passaggio non \xE8 necessario ma consigliato</li></ul></li><li>Apri l\u2019applicazione di Taurine dalla home screen appena dopo il riavvio <ul><li>Se hai unc0ver installato, abilita &quot;Restore RootFS&quot; prima di rimuovere unc0ver</li></ul></li><li>Clicca su \u201CJailbreak\u201D</li></ol><p>Se hai ripristinato il rootFS, torna allo step precedente e ripetilo.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se sul dispositivo l\u2019app, crasha/si riavvia inaspettatamente ed il jailbreak non viene installato, prova a riavviare il dispositivo e far partire l\u2019exploit di nuovo finch\xE9 non funziona.</p></div>',11),I={class:"custom-container warning"},w=e("p",{class:"custom-container-title"},"WARNING",-1),T=e("code",null,"ERR_Jailbreak",-1),A=e("code",null,"ERR_Already_Jailbroken",-1),q=e("code",null,"ERR_TFP0",-1),x=r('<h2 id="installare-il-software-necessario" tabindex="-1"><a class="header-anchor" href="#installare-il-software-necessario" aria-hidden="true">#</a> Installare il software necessario</h2><ol><li>Apri l&#39;applicazione di Sileo</li><li>Clicca sulla sezione &quot;Cerca&quot;</li><li>Cerca &quot;libhooker&quot;</li><li>Clicca su &quot;Ottieni\u201D <ul><li>Facendo ci\xF2 verr\xE0 avviata una coda - non iniziare ad installare la coda fino a quando non abbiamo selezionato tutti i programmi necessari da installare</li></ul></li><li>Cerca &quot;PreferenceLoader&quot; e &quot;RocketBootstrap&quot; e aggiungili alla coda premendo &quot;Ottieni&quot;</li><li>Tocca la barra della coda in fondo alla pagina</li><li>Clicca su \u201CConferma\u201D</li><li>Una volta terminato, tocca &#39;Riavvia la SpringBoard&#39;</li></ol>',2);function y(R,C){const o=n("router-link"),t=n("ExternalLinkIcon");return c(),u("div",null,[e("p",null,[i("Taurine \xE8 un "),a(o,{to:"/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:l(()=>[i("jailbreak semi-untethered")]),_:1}),i(", richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.")]),h,e("p",null,[i("A causa di come funzionano i jailbreak semi-untethered, l'app avr\xE0 bisogno di essere "),a(o,{to:"/it_IT/resigning-apps"},{default:l(()=>[i("ri-firmata")]),_:1}),i(" ogni 7 giorni.")]),_,e("div",m,[v,e("p",null,[i("Se attualmente hai eseguito il jailbreak tramite un altro tool (escluso Odysseyra1n), assicurati di "),a(o,{to:"/it_IT/restoring-rootfs"},{default:l(()=>[i("rimuoverlo correttamente")]),_:1}),i(" prima di proseguire.")])]),f,g,e("ul",null,[e("li",null,[i("L\u2019ultima versione di "),e("a",z,[i("Taurine"),a(t)])]),e("li",null,[i("L\u2019ultima versione di "),e("a",b,[i("Sideloadly"),a(t)])]),e("li",null,[i("L\u2019ultima versione di "),e("a",k,[i("iTunes"),a(t)]),i(" se sei su Windows")])]),S,e("div",I,[w,e("p",null,[i("Se ricevi l'errore "),T,i(", "),A,i(" o "),q,i(" leggi la sezione Taurine/Odyssey "),a(o,{to:"/it_IT/troubleshooting/#common-errors-on-odyssey-and-taurine"},{default:l(()=>[i("sulla")]),_:1}),i(" pagina di TroubleShooting")])]),e("p",null,[i("Adesso dovresti essere jailbroken con Sileo installato nella home screen. Puoi utilizzare Sileo per installare "),a(o,{to:"/it_IT/faq/#what-are-tweaks"},{default:l(()=>[i("tweak")]),_:1}),i(", temi e altro.")]),x])}var L=d(p,[["render",y],["__file","index.html.vue"]]);export{L as default};
