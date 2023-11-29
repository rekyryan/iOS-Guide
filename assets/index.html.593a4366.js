import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,r as l,o as d,c as u,a as e,b as i,d as o,w as s,e as a}from"./app.5c5e11a4.js";const p={},h=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><h2 id="download-linux" tabindex="-1"><a class="header-anchor" href="#download-linux" aria-hidden="true">#</a> Download (Linux)</h2>',3),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[e("img",{src:r,alt:"Uno screenshot dell\u2019applicazione di checkra1n"})],-1),b=e("h2",{id:"installare-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installare-checkra1n","aria-hidden":"true"},"#"),i(" Installare checkra1n")],-1),f=a("<li>Apri il file <code>pongoOS.zip</code>, seleziona <code>PongoConsolidated.bin</code> ed estrailo. <ul><li>Prendi nota di dove lo estrai</li></ul></li><li>Esegui il file binary di <code>checkra1n</code> in modalit\xE0 CLI usando la versione modificata di pongoOS nel terminale utilizzando <code>sudo checkra1n -c -k [path to PongoConsolidated.bin]</code></li><li>Collega il tuo dispositivo iOS al computer</li>",3),k=e("code",null,"Start",-1),v=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),y=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),S=a('<p>Il tuo dispositivo iOS dovrebbe adesso riavviarsi.</p><p>Per installare Odysseyra1n, <u>non</u> aprire l&#39;app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.</p><h2 id="lo-script-di-odysseyra1n" tabindex="-1"><a class="header-anchor" href="#lo-script-di-odysseyra1n" aria-hidden="true">#</a> Lo script di Odysseyra1n</h2><ol><li>Apri l&#39;app terminale sul tuo computer</li><li>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</li><li>Installa &quot;iproxy&quot; incollando ed eseguendo il seguente comando: <ul><li>Ubuntu/Debian: <code>sudo apt install libusbmuxd-tools</code></li><li>Arch Linux: <code>pacman -S libusbmuxd</code></li></ul></li><li>Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)&quot;</code></li></ol>',4),q=a('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function x(z,w){const t=l("ExternalLinkIcon"),n=l("router-link");return d(),u("div",null,[h,e("ul",null,[e("li",null,[i("The latest release of "),e("a",m,[i("checkra1n"),o(t)])]),e("li",null,[i("La versione modificata di "),e("a",_,[i("pongoOS"),o(t)])])]),g,b,e("ol",null,[f,e("li",null,[i("Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in "),o(n,{to:"/it_IT/faq/#what-is-dfu-mode"},{default:s(()=>[i("modalit\xE0 DFU")]),_:1}),i(", clicca "),k,i(" per iniziare "),v]),y]),S,e("p",null,[i("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),o(n,{to:"/faq/#what-are-tweaks"},{default:s(()=>[i("tweaks")]),_:1}),i(", themes, packages and more.")]),q])}var A=c(p,[["render",x],["__file","index.html.vue"]]);export{A as default};
