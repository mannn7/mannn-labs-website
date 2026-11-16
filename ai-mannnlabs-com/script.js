var LANG='id', activeModel='deepseek';
var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var I18N={
id:{navHome:'←',footBack:'← Kembali ke mannnlabs.com — Profil Perusahaan',navModel:'Model',navHarga:'Harga',navOrder:'Cara Order',navGaransi:'Garansi',navBeli:'Beli',ctaBuy:'Beli API Key',backLabel:'Kembali ke mannnlabs.com',logoLabel:'Mannn Labs AI — kembali ke halaman utama mannnlabs.com',navLabel:'Utama',langGroupLabel:'Language / Bahasa',dsTag:'BATCH PERCOBAAN',dsPrice:'Rp50.000',
heroEyebrow:'INFRASTRUKTUR API AI — INDONESIA',heroH1a:'Satu paket, satu API key.',heroH1b:'Dua model, siap pakai.',
heroLeadA:'Sambungkan model',heroLeadMid:'dan',heroLeadB:'ke aplikasimu lewat API yang kompatibel dengan OpenAI. Konteks 128K untuk DeepSeek dan 200K untuk Claude, function calling siap jalan, dan skema harga jelas sejak awal — bayar, terima key, langsung pakai.',
heroCta1:'Beli API Key',heroCta2:'Lihat Spesifikasi',termCaption:'Arahkan base URL OpenAI kamu ke sini dan sesuaikan nama modelnya — sisanya tetap.',stripModelSub:'dua model, satu format API',stripCtxSub:'DeepSeek 128K · Claude 200K',stripIfaceSub:'/v1 · function calling',stripValidL:'MASA AKTIF',stripValidV:'7 hari',stripFairSub:'per API key',
heroNote:'Profil lengkap perusahaannya ada di halaman utama mannnlabs.com — halaman ini khusus untuk membeli akses API-nya.',
codeHead:'sambungkan.py',copyBtn:'Salin Kode',copied:'Tersalin ✓',
miniDeepSeek:'Pilihan hemat untuk pemakaian ramai: obrolan, bantuan kode, dan tugas harian yang butuh jawaban cepat.',miniDeepSeekRate:'Rp50.000 / minggu per API key',
miniClaude:'Pilihan teliti untuk bacaan panjang: dokumen tebal, riset, dan naskah yang hasilnya harus rapi.',miniClaudeRate:'paket 7 hari mulai Rp25.000',
modelLabel:'01 / Spesifikasi Model',modelH2:'Kenali dulu sebelum membeli.',modelDesc:'Dua model ini karakternya berbeda, tapi cara pakainya sama persis: satu format request OpenAI-compatible, tinggal ganti nama modelnya saja. Tiap paket dapat API key-nya sendiri.',
tabDeepSeek:'Gesit & Irit',tabClaude:'Lebih Cermat',capLabel:'Kemampuan',useLabel:'Kegunaan',specCtxL:'Konteks',specPriceL:'Tarif',specSpeedL:'Kecepatan',specBestL:'Cocok Untuk',specFmtL:'Format API',specStreamL:'Streaming',
hargaLabel:'02 / Harga',hargaH2:'Harga yang bisa kamu hitung sendiri.',hargaDesc:'Harga dipisah per model — DeepSeek satu paket mingguan dengan batas fair-use per menit, Claude paket 7 hari dengan jatah token.',
dsGroupSub:'Satu paket. Udah.',dsGroupTag:'BATAS FAIR-USE JELAS',dsPer:'/ minggu / API key',dsF1:'Model DeepSeek — context 128K token per request',dsF2:'OpenAI-compatible /v1 · function calling',dsF3:'Batas pemakaian wajar (fair-use): 120 request/menit · 100rb token/menit · 5 request paralel',dsF4:'Batas per menit ini menjaga layanan tetap stabil dan adil untuk semua pengguna',dsF5:'Masa berlaku 1 minggu per API key',dsF6:'Refund 100% kalau API key tidak bisa dipakai karena kesalahan dari sisi kami, diajukan maksimal 7 hari setelah pembayaran',dsCta:'Ambil Batch Percobaan',clGroupSub:'Paket 7 hari, hangus, tanpa rollover.',clGroupTag:'SATU PAKET = SATU KEY',cl1Tag:'SANTAI',cl2Tag:'REGULER',cl3Tag:'POWER',clPer:'/ 7 hari',cl1Price:'Rp25.000',cl2Price:'Rp50.000',cl3Price:'Rp99.000',clRefund:'Refund 100% kalau API key tidak bisa dipakai karena kesalahan dari sisi kami, diajukan maksimal 7 hari setelah pembayaran',cl1F2:'± 2 juta token Haiku',cl2F2:'± 5 juta token Haiku',cl3F2:'± 500 ribu token Sonnet',clFKey:'1 API key · 1 jatah token',clF7:'Sisa token hangus di akhir hari ke-7 — tanpa rollover',cl1Cta:'Ambil Santai',cl2Cta:'Pilih Reguler',cl3Cta:'Ambil Power',clRuleB:'Aturan paket Claude:',clRule:'satu paket = satu key, satu jatah token. Kalau jatah token habis sebelum 7 hari, key berhenti; kalau waktu habis duluan, sisa token hangus — tanpa rollover.',priceFoot:'Harga per paket 7 hari (bukan per token): tiap paket punya jatah tokennya sendiri — Santai ±2 juta token Haiku, Reguler ±5 juta token Haiku, Power ±500 ribu token Sonnet.',
orderLabel:'03 / Cara Order',orderH2:'Dari klik sampai key aktif, tiga langkah saja.',
step1k:'PILIH PAKET',step1h:'Tentukan paket, lalu sapa kami',step1p:'Klik tombol beli pada paket yang kamu mau, atau kirim email ke',step1p2:'dengan menyebut nama paketnya. Kami balas dengan rincian pembayaran.',
step2k:'BAYAR',step2h:'Selesaikan pembayaran lokal',step2p:'Bayar lewat QRIS, Virtual Account, atau e-wallet — pilih yang paling gampang buatmu. Simpan buktinya, lalu kirimkan ke kami sebagai konfirmasi.',
step3k:'TERIMA KEY',step3h:'API key meluncur ke emailmu',step3p:'Begitu pembayaran terkonfirmasi, API key dan panduan singkat pemakaiannya kami kirim ke email kamu. Tinggal tempel ke aplikasi, dan model siap bekerja.',
garLabel:'04 / Garansi & Privasi',garH2:'Uangmu aman, datamu lebih aman lagi.',
garTag:'GARANSI PEMBELIAN',garCardH:'Garansi pembelian yang jelas',
g1h:'Key tidak bisa dipakai? Kami bantu perbaiki atau ganti key baru — refund 100% tetap terjamin',g1p:'Refund 100% kalau API key tidak bisa dipakai karena kesalahan dari sisi kami, diajukan maksimal 7 hari setelah pembayaran. Aturan ini berlaku untuk semua paket — DeepSeek maupun Claude — ajukan lewat email ke founder@mannnlabs.com.',
g2h:'Semua paket, satu aturan garansi',g2p:'DeepSeek maupun Claude, aturannya sama: kami bantu perbaiki atau ganti key baru dulu, dan kalau key tetap tidak bisa dipakai karena kesalahan dari sisi kami, refund 100% adalah hasil yang dijamin — kamu tidak dibiarkan menggantung.',
g3h:'Dibantu manusia, bukan templat',g3p:'Kendala saat pemasangan atau pemakaian dibantu langsung lewat email, oleh orang yang memang membangun layanan ini.',
privTag:'PRIVASI PENGGUNA',privCardH:'Prompt & data diproses secara transparan',
pv1h:'Prompt diteruskan ke penyedia model',pv1p:'Agar permintaanmu bisa dijawab, prompt diteruskan ke penyedia model (DeepSeek / Anthropic) yang kamu gunakan. Pembayaran diproses oleh pihak ketiga melalui QRIS, Virtual Account, atau e-wallet. Kami tidak menjual datamu untuk iklan, dan kami tidak memakai promptmu untuk melatih model.',
pv2h:'Log seperlunya saja',pv2p:'Sistem hanya mencatat log sebatas kebutuhan tagihan dan keamanan — berapa token terpakai dan kapan — bukan untuk mengintip isi percakapanmu.',
pv3h:'Key-mu, kendalimu',pv3p:'Jaga API key seperti menjaga kata sandi. Merasa key-mu bocor? Minta cabut dan ganti baru kapan saja lewat email, tanpa biaya tambahan.',
faqLabel:'05 / FAQ',faqH2:'Sebelum checkout, cek ini dulu',
q1:'Bedanya paket DeepSeek dan Claude apa?',a1:'DeepSeek cuma punya satu paket: Batch Percobaan Rp50.000 per minggu per API key, dengan batas pemakaian wajar (fair-use) 120 request/menit, 100rb token/menit, dan 5 request paralel — batas per menit ini menjaga layanan tetap stabil untuk semua pengguna. Claude dijual per paket 7 hari dengan jatah token: Santai Rp25.000 (± 2 juta token Haiku 5.5), Reguler Rp50.000 (± 5 juta token Haiku 5.5), dan Power Rp99.000 (± 500 ribu token Sonnet 5.5). Aturan refund yang sama berlaku untuk semua paket.',
q2:'Bayar dan terima key-nya lewat apa?',a2:'Pembayaran per paket, lewat QRIS, Virtual Account, maupun e-wallet. Pesan dulu lewat email ke founder@mannnlabs.com, bayar paket yang kamu pilih, begitu pembayaran terkonfirmasi API key langsung dikirim ke email kamu. Satu paket berlaku 1 minggu (DeepSeek) atau 7 hari (Claude), lalu hangus.',
q3:'Satu paket dapat berapa API key?',a3:'Satu paket = satu API key dengan jatahnya sendiri. Key DeepSeek berlaku untuk model DeepSeek, key Claude untuk model Claude di paketnya — kalau butuh dua model, ambil dua paket.',
q4:'Aplikasiku sekarang jalan di OpenAI. Susah tidak pindahnya?',a4:'Tidak. API kami mengikuti format OpenAI, jadi umumnya kamu cukup mengganti base_url ke api.mannnlabs.com dan nama model ke model yang kamu beli, lalu memakai API key dari kami. Library OpenAI untuk Python dan JavaScript bisa langsung dipakai.',
q5:'Masa berlakunya berapa lama?',a5:'Paket DeepSeek berlaku 1 minggu per API key. Paket Claude berlaku 7 hari: kalau jatah token habis sebelum 7 hari, key berhenti; kalau waktu habis duluan, sisa token hangus — tanpa rollover ke paket berikutnya.',
q6:'Bisa refund kalau ternyata tidak cocok?',a6:'Bisa, dengan satu aturan yang sama untuk semua paket: Refund 100% kalau API key tidak bisa dipakai karena kesalahan dari sisi kami, diajukan maksimal 7 hari setelah pembayaran. Kalau key bermasalah, kami bantu perbaiki atau ganti key baru dulu — dan kalau tetap tidak bisa dipakai karena kesalahan dari sisi kami, refund 100% adalah hasil yang dijamin. Ajukan lewat email ke founder@mannnlabs.com.',
q7:'Apakah Mannn Labs resmi dari DeepSeek atau Anthropic?',a7:'Tidak. Mannn Labs adalah penyedia akses API independen — kami bukan afiliasi resmi, anak perusahaan, maupun perwakilan resmi DeepSeek dan Anthropic (pembuat Claude). Kami menyediakan akses ke model-model tersebut, dengan API key, paket, dan dukungan yang kami kelola sendiri. Nama DeepSeek dan Claude di halaman ini hanya merujuk pada model yang kami sediakan aksesnya.',
buyLabel:'Mulai Sekarang',buyH2a:'Key pertamamu cuma',buyH2b:'berjarak satu email.',buyP:'Sebutkan paket yang kamu mau — Batch Percobaan untuk DeepSeek, atau paket Santai, Reguler, atau Power untuk Claude — dan kami balas dengan rincian pembayarannya. Tanpa daftar berbelit, tanpa kartu kredit.',buyGhost:'Bandingkan Paket Dulu',
footL:'© 2026 PT Mannn Labs (PT Perorangan) • Halaman penjualan di ai.mannnlabs.com.'},
en:{navHome:'←',footBack:'← Back to mannnlabs.com — Company Profile',navModel:'Models',navHarga:'Pricing',navOrder:'How to Order',navGaransi:'Guarantee',navBeli:'Buy',ctaBuy:'Buy API Key',backLabel:'Back to mannnlabs.com',logoLabel:'Mannn Labs AI — back to the main page of mannnlabs.com',navLabel:'Main',langGroupLabel:'Language',dsTag:'Trial Batch',dsPrice:'Rp50,000',
heroEyebrow:'AI API INFRASTRUCTURE — INDONESIA',heroH1a:'One package, one API key.',heroH1b:'Two models ready.',
heroLeadA:'Connect the',heroLeadMid:'and',heroLeadB:'models to your app through an OpenAI-compatible API. A 128K context window for DeepSeek and 200K for Claude, function calling ready to go, and pricing that stays clear from the start — pay, receive your key, and you are running.',
heroCta1:'Buy API Key',heroCta2:'See the Specs',termCaption:'Point your OpenAI base URL here and set the model name — the rest stays the same.',stripModelSub:'two models, one API format',stripCtxSub:'DeepSeek 128K · Claude 200K',stripIfaceSub:'/v1 · function calling',stripValidL:'VALIDITY',stripValidV:'7 days',stripFairSub:'per API key',
heroNote:'The full company profile lives on the main site, mannnlabs.com — this page is dedicated to buying API access.',
codeHead:'sambungkan.py',copyBtn:'Copy Code',copied:'Copied ✓',
miniDeepSeek:'The thrifty pick for busy workloads: chats, coding help, and daily tasks that need quick answers.',miniDeepSeekRate:'Rp50,000 / week per API key',
miniClaude:'The meticulous pick for long reads: thick documents, research, and drafts that must come out tidy.',miniClaudeRate:'7-day plans from Rp25,000',
modelLabel:'01 / Model Specs',modelH2:'Get to know them before you buy.',modelDesc:'These two models have different characters, but exactly the same way of working: one OpenAI-compatible request format — just switch the model name. Each package gets its own API key.',
tabDeepSeek:'Swift & Thrifty',tabClaude:'More Meticulous',capLabel:'Capabilities',useLabel:'Use Cases',specCtxL:'Context',specPriceL:'Rate',specSpeedL:'Speed',specBestL:'Best For',specFmtL:'API Format',specStreamL:'Streaming',
hargaLabel:'02 / Pricing',hargaH2:'Pricing you can calculate yourself.',hargaDesc:'Pricing is split per model — DeepSeek is one weekly plan with per-minute fair-use limits, Claude comes in 7-day plans with a token allowance.',
dsGroupSub:'One plan. That is it.',dsGroupTag:'CLEAR FAIR-USE LIMITS',dsPer:'/ week / API key',dsF1:'DeepSeek model — 128K-token context per request',dsF2:'OpenAI-compatible /v1 · function calling',dsF3:'Fair-use (reasonable-use) limits: 120 requests/minute · 100K tokens/minute · 5 parallel requests',dsF4:'These per-minute limits keep the service stable and fair for every user',dsF5:'Valid for 1 week per API key',dsF6:'100% refund if the API key cannot be used due to an error on our side, requested within 7 days of payment',dsCta:'Get the Trial Batch',clGroupSub:'7-day plans that expire, with no rollover.',clGroupTag:'ONE PLAN = ONE KEY',cl1Tag:'RELAXED',cl2Tag:'REGULAR',cl3Tag:'POWER',clPer:'/ 7 days',cl1Price:'Rp25,000',cl2Price:'Rp50,000',cl3Price:'Rp99,000',clRefund:'100% refund if the API key cannot be used due to an error on our side, requested within 7 days of payment',cl1F2:'± 2 million Haiku tokens',cl2F2:'± 5 million Haiku tokens',cl3F2:'± 500K Sonnet tokens',clFKey:'1 API key · 1 token allowance',clF7:'Leftover tokens expire at the end of day 7 — no rollover',cl1Cta:'Get Relaxed',cl2Cta:'Choose Regular',cl3Cta:'Get Power',clRuleB:'Claude plan rules:',clRule:'one plan = one key, one token allowance. If the token allowance runs out before the 7 days are up, the key stops; if the time runs out first, the leftover tokens expire — no rollover.',priceFoot:'Pricing is per 7-day package (not per token): each package has its own token allowance — Relaxed ±2 million Haiku tokens, Regular ±5 million Haiku tokens, Power ±500K Sonnet tokens.',
orderLabel:'03 / How to Order',orderH2:'From click to active key, just three steps.',
step1k:'PICK A PLAN',step1h:'Choose a plan, then say hello',step1p:'Hit the buy button on the plan you want, or email',step1p2:'naming the plan. We reply with the payment details.',
step2k:'PAY',step2h:'Complete a local payment',step2p:'Pay via QRIS, Virtual Account, or e-wallet — whichever is easiest for you. Keep the receipt and send it to us as confirmation.',
step3k:'GET YOUR KEY',step3h:'Your API key lands in your inbox',step3p:'Once your payment is confirmed, we email your API key with a short usage guide. Paste it into your app, and the models are ready to work.',
garLabel:'04 / Guarantee & Privacy',garH2:'Your money is safe; your data, safer.',
garTag:'PURCHASE GUARANTEE',garCardH:'A clear purchase guarantee',
g1h:'Key not working? We help fix it or replace the key — a 100% refund stays guaranteed',g1p:'100% refund if the API key cannot be used due to an error on our side, requested within 7 days of payment. This rule applies to every plan — DeepSeek and Claude alike — request it by email to founder@mannnlabs.com.',
g2h:'Every plan, one guarantee rule',g2p:'DeepSeek or Claude, the rule is the same: we help fix it or issue a new key first, and if the key still cannot be used due to an error on our side, a 100% refund is the guaranteed outcome — you are never left hanging.',
g3h:'Helped by humans, not templates',g3p:'Setup and usage issues are handled directly over email, by the people who actually built this service.',
privTag:'USER PRIVACY',privCardH:'Prompts & data, processed transparently',
pv1h:'Prompts are forwarded to the model provider',pv1p:'To answer your requests, your prompts are forwarded to the model provider (DeepSeek / Anthropic) you use. Payments are processed by third parties via QRIS, Virtual Account, or e-wallet. We do not sell your data for advertising, and we do not use your prompts to train models.',
pv2h:'Logs kept to the minimum',pv2p:'The system only logs what billing and security require — how many tokens were used and when — not to peek into your conversations.',
pv3h:'Your key, your control',pv3p:'Treat your API key like a password. Think it leaked? Ask us to revoke and replace it any time by email, at no extra cost.',
faqLabel:'05 / FAQ',faqH2:'Before you check out, read this first',
q1:'What is the difference between the DeepSeek and Claude plans?',a1:'DeepSeek has exactly one plan: the Trial Batch at Rp50,000 per week per API key, with fair-use (reasonable-use) limits of 120 requests/minute, 100K tokens/minute, and 5 parallel requests — these per-minute limits keep the service stable for every user. Claude is sold in 7-day plans with a token allowance: Relaxed Rp25,000 (± 2 million Haiku 5.5 tokens), Regular Rp50,000 (± 5 million Haiku 5.5 tokens), and Power Rp99,000 (± 500K Sonnet 5.5 tokens). The same refund rule applies to every plan.',
q2:'How do I pay, and how do I receive the key?',a2:'Payment is per package, via QRIS, Virtual Account, or e-wallet. Order first by email to founder@mannnlabs.com, pay for the package you choose, and once payment is confirmed your API key is sent straight to your email. One package lasts 1 week (DeepSeek) or 7 days (Claude), then it expires.',
q3:'How many API keys does one plan include?',a3:'One plan = one API key with its own allowance. A DeepSeek key works for the DeepSeek model, a Claude key for the Claude model in its plan — if you need both models, take two plans.',
q4:'My app currently runs on OpenAI. Is migrating hard?',a4:'No. Our API follows the OpenAI format, so in most cases you only need to change the base_url to api.mannnlabs.com and the model name to the model you bought, then use an API key from us. The OpenAI libraries for Python and JavaScript work right away.',
q5:'How long is it valid?',a5:'The DeepSeek plan is valid for 1 week per API key. Claude plans are valid for 7 days: if the token allowance runs out before the 7 days are up, the key stops; if the time runs out first, the leftover tokens expire — with no rollover to the next plan.',
q6:'Can I get a refund if it is not a fit?',a6:'Yes, under one rule that applies to every plan: 100% refund if the API key cannot be used due to an error on our side, requested within 7 days of payment. If your key has a problem, we help fix it or issue a new key first — and if it still cannot be used due to an error on our side, a 100% refund is the guaranteed outcome. Request it by email to founder@mannnlabs.com.',
q7:'Is Mannn Labs officially part of DeepSeek or Anthropic?',a7:'No. Mannn Labs is an independent API access provider — we are not an official affiliate, subsidiary, or representative of DeepSeek or of Anthropic (the maker of Claude). We provide access to those models, with API keys, plans, and support that we manage ourselves. The names DeepSeek and Claude on this page refer only to the models we provide access to.',
buyLabel:'Start Now',buyH2a:'Your first key is only',buyH2b:'one email away.',buyP:'Name the plan you want — the Trial Batch for DeepSeek, or the Relaxed, Regular, or Power plan for Claude — and we reply with the payment details. No convoluted sign-up, no credit card.',buyGhost:'Compare Plans First',
footL:'© 2026 PT Mannn Labs (PT Perorangan) • Sales page at ai.mannnlabs.com.'}
};

var MODELS={
deepseek:{idName:'deepseek-chat',
  id:{tag:'OPEN-WEIGHT — DARI DEEPSEEK',desc:'Model open-weight dari DeepSeek: kuat di penalaran dan coding, tapi tetap irit biaya. Enak diajak ngobrol, membantu menulis kode, dan menyelesaikan tugas harian — nyaman dipakai dalam Bahasa Indonesia maupun Inggris.',ctx:'128K token',speed:'Sangat Gesit',best:'Obrolan, Kode, Penalaran',price:'Rp50.000 / minggu per API key',stream:'Didukung',
      caps:['Percakapan Bahasa Indonesia & Inggris','Membantu menulis dan memperbaiki kode','Function calling untuk menyambungkan tool & data','Jawaban streaming, terasa real-time','Penalaran kuat untuk logika, matematika & analisis','Model open-weight — fleksibel untuk berbagai eksperimen'],
      uses:['Chatbot & asisten virtual untuk pelanggan','Copilot coding untuk tim developer','Bot Telegram / WhatsApp dan otomasi tugas harian','Draf konten, ringkasan, dan tanya-jawab cepat']},
  en:{tag:'OPEN-WEIGHT — BY DEEPSEEK',desc:'An open-weight model from DeepSeek: strong at reasoning and coding, yet still cost-light. Easy to chat with, helpful for writing code, and handy for daily tasks — comfortable in both Indonesian and English.',ctx:'128K tokens',speed:'Very Swift',best:'Chats, Code, Reasoning',price:'Rp50,000 / week per API key',stream:'Supported',
      caps:['Conversations in Indonesian & English','Helps write and fix code','Function calling to connect tools & data','Streaming answers that feel real-time','Strong reasoning for logic, math & analysis','Open-weight model — flexible for experiments'],
      uses:['Chatbots & virtual assistants for customers','A coding copilot for developer teams','Telegram / WhatsApp bots and daily task automation','Content drafts, summaries, and quick Q&A']}},
claude:{idName:'claude',
  id:{tag:'ANTHROPIC',desc:'Pembaca yang cermat untuk berkas panjang dan naskah serius. Pilihan tepat saat kamu butuh riset dan analisis yang rapi.',ctx:'200K token',speed:'Cepat',best:'Berkas, Riset, Naskah',price:'Paket 7 hari mulai Rp25.000',stream:'Didukung',
      caps:['Membaca & merangkum dokumen panjang','Penalaran dan analisis yang rapi dan runut','Menulis naskah panjang yang terstruktur','Function calling untuk menyambungkan tool & data','Jawaban streaming, terasa real-time'],
      uses:['Ringkasan kontrak, laporan, dan dokumen tebal','Riset dan analisis sebelum mengambil keputusan','Penulisan artikel, proposal, dan naskah resmi','Review dan penyuntingan tulisan panjang']},
  en:{tag:'ANTHROPIC',desc:'A careful reader for long files and serious drafts. The right pick when you need tidy research and analysis.',ctx:'200K tokens',speed:'Fast',best:'Files, Research, Drafts',price:'7-day plans from Rp25,000',stream:'Supported',
      caps:['Reads & summarizes long documents','Tidy, step-by-step reasoning and analysis','Writes well-structured long-form drafts','Function calling to connect tools & data','Streaming answers that feel real-time'],
      uses:['Summaries of contracts, reports, and thick documents','Research and analysis before making decisions','Writing articles, proposals, and official drafts','Reviewing and editing long-form writing']}}};

function applyLang(){
  var d=I18N[LANG];
  document.documentElement.lang=LANG;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n'); if(d[k]!==undefined) el.textContent=d[k];
  });
  /* Paragraf Garansi dirender sebagai teks biasa */
  var g3pEl=document.getElementById('g3p'); if(g3pEl) g3pEl.textContent=d.g3p;
  /* Label aksesibilitas header & grup toggle bahasa mengikuti bahasa aktif */
  var backEl=document.getElementById('backArrow'); if(backEl){ backEl.setAttribute('aria-label',d.backLabel); backEl.setAttribute('title',d.backLabel); }
  var logoEl=document.getElementById('logoLink'); if(logoEl) logoEl.setAttribute('aria-label',d.logoLabel);
  var mainNavEl=document.getElementById('mainNav'); if(mainNavEl) mainNavEl.setAttribute('aria-label',d.navLabel);
  document.querySelectorAll('.langToggle').forEach(function(t){ t.setAttribute('aria-label',d.langGroupLabel); });
  document.getElementById('langId').classList.toggle('active',LANG==='id');
  document.getElementById('langEn').classList.toggle('active',LANG==='en');
  var lm=document.getElementById('langIdM'), em=document.getElementById('langEnM');
  if(lm) lm.classList.toggle('active',LANG==='id');
  if(em) em.classList.toggle('active',LANG==='en');
  renderModel(); syncCodeLang();
}
function fillList(id,items){
  var ul=document.getElementById(id); if(!ul) return;
  ul.textContent='';
  items.forEach(function(t){ var li=document.createElement('li'); li.textContent=t; ul.appendChild(li); });
}
function renderModel(){
  var m=MODELS[activeModel][LANG];
  document.getElementById('modelTitle').textContent= activeModel==='deepseek' ? 'DeepSeek' : 'Claude';
  document.getElementById('modelDesc').textContent=m.desc;
  document.getElementById('modelTag').textContent=m.tag;
  document.getElementById('modelId').textContent='model: '+MODELS[activeModel].idName;
  document.getElementById('specCtx').textContent=m.ctx;
  document.getElementById('specSpeed').textContent=m.speed;
  document.getElementById('specBest').textContent=m.best;
  document.getElementById('specPrice').textContent=m.price;
  document.getElementById('specStream').textContent=m.stream;
  fillList('capList',m.caps);
  fillList('useList',m.uses);
  document.querySelectorAll('.tabBtn').forEach(function(b){
    var on=b.getAttribute('data-model')===activeModel;
    b.classList.toggle('active',on); b.setAttribute('aria-selected',on?'true':'false');
  });
}
function setLang(l){ LANG=l; applyLang(); }
function bindLangBtn(id,l){
  var b=document.getElementById(id); if(!b) return;
  /* pointerdown + click: setLang bersifat idempoten (menetapkan nilai tetap),
     jadi tap/klik pertama langsung menerapkan bahasa tanpa menunggu klik kedua */
  b.addEventListener('pointerdown',function(){ setLang(l); });
  b.addEventListener('click',function(){ setLang(l); });
}
bindLangBtn('langId','id'); bindLangBtn('langEn','en');
bindLangBtn('langIdM','id'); bindLangBtn('langEnM','en');
document.querySelectorAll('.tabBtn').forEach(function(b){
  b.addEventListener('click',function(){activeModel=b.getAttribute('data-model');renderModel();});
});

/* FAQ single-open */
function faqSet(item,open){
  var a=item.querySelector('.faqA'), q=item.querySelector('.faqQ');
  item.classList.toggle('open',open); q.setAttribute('aria-expanded',open?'true':'false');
  a.style.maxHeight= open ? a.scrollHeight+'px' : '0px';
}
document.querySelectorAll('.faqItem').forEach(function(item){
  item.querySelector('.faqQ').addEventListener('click',function(){
    var wasOpen=item.classList.contains('open');
    document.querySelectorAll('.faqItem.open').forEach(function(o){ if(o!==item) faqSet(o,false); });
    faqSet(item,!wasOpen);
  });
});
function faqInit(){
  document.querySelectorAll('.faqItem').forEach(function(item){ faqSet(item,item.classList.contains('open')); });
}

/* Terminal auto-typing — token pertama (komentar) mengikuti bahasa aktif */
function codeComment(){ return LANG==='en' ? '# paste your API key into ' : '# tempel API key kamu di '; }
function codeGreeting(){ return LANG==='en' ? '"Hello!"' : '"Halo!"'; }
function codeTokens(){
  return [
  {t:codeComment(),c:'tok-c'},
  {t:'$KEY',c:'tok-var'},
  {t:'\n',c:''},
  {t:'curl',c:'tok-cmd'},
  {t:' ',c:''},
  {t:'https://api.mannnlabs.com/v1/chat/completions',c:'tok-url'},
  {t:' \\\n  ',c:''},
  {t:'-H',c:'tok-flag'},
  {t:' ',c:''},
  {t:'"',c:'tok-s'},
  {t:'Content-Type:',c:'tok-key'},
  {t:' application/json',c:'tok-str'},
  {t:'"',c:'tok-s'},
  {t:' \\\n  ',c:''},
  {t:'-H',c:'tok-flag'},
  {t:' ',c:''},
  {t:'"',c:'tok-s'},
  {t:'Authorization:',c:'tok-key'},
  {t:' Bearer ',c:'tok-str'},
  {t:'$KEY',c:'tok-var'},
  {t:'"',c:'tok-s'},
  {t:' \\\n  ',c:''},
  {t:'-d',c:'tok-flag'},
  {t:' ',c:''},
  {t:'\'',c:'tok-s'},
  {t:'{',c:''},
  {t:'"model"',c:'tok-key'},
  {t:': ',c:''},
  {t:'"deepseek-chat"',c:'tok-str'},
  {t:',',c:''},
  {t:'\n       ',c:''},
  {t:'"messages"',c:'tok-key'},
  {t:': [{',c:''},
  {t:'"role"',c:'tok-key'},
  {t:': ',c:''},
  {t:'"user"',c:'tok-str'},
  {t:',',c:''},
  {t:'\n       ',c:''},
  {t:'"content"',c:'tok-key'},
  {t:': ',c:''},
  {t:codeGreeting(),c:'tok-str'},
  {t:'}]}',c:''},
  {t:'\'',c:'tok-s'}
  ];
}
function fullCodeText(){
  var s=''; codeTokens().forEach(function(tok){ s+=tok.t; }); return s;
}
var codePre=null, codeCursor=null, codeLang='id', codeTyped=0, codeTotal=0, codeTimer=null, codeDone=false;
function renderCode(n){
  if(!codePre) return;
  var toks=codeTokens();
  codePre.textContent='';
  var remaining=n;
  for(var i=0;i<toks.length&&remaining>0;i++){
    var tok=toks[i];
    var part=tok.t.slice(0,remaining);
    remaining-=part.length;
    if(!part) break;
    if(tok.c){
      var sp=document.createElement('span');
      sp.className=tok.c; sp.textContent=part;
      codePre.appendChild(sp);
    }else{
      codePre.appendChild(document.createTextNode(part));
    }
  }
  if(codeCursor) codePre.appendChild(codeCursor);
}
function codeCharAt(pos){
  var toks=codeTokens(), acc=0;
  for(var i=0;i<toks.length;i++){
    if(pos<acc+toks[i].t.length) return toks[i].t.charAt(pos-acc);
    acc+=toks[i].t.length;
  }
  return '';
}
function startTyping(){
  codePre=document.getElementById('codeBlock');
  if(!codePre) return;
  codeLang=LANG;
  codeCursor=document.createElement('span');
  codeCursor.className='typeCursor';
  codeCursor.setAttribute('aria-hidden','true');
  codeTotal=0;
  codeTokens().forEach(function(tok){ codeTotal+=tok.t.length; });
  if(reduceMotion){
    /* Tampilkan kode lengkap langsung, tanpa animasi ketik */
    codePre.appendChild(codeCursor);
    codeDone=true;
    return;
  }
  /* Cadangkan tinggi akhir terminal agar layout tidak bergeser saat mengetik */
  var finalH=codePre.offsetHeight;
  if(finalH>0) codePre.style.minHeight=finalH+'px';
  renderCode(0);
  function step(){
    if(codeDone) return;
    if(codeTyped>=codeTotal){ renderCode(codeTotal); codeDone=true; return; }
    /* Ketik 1 huruf per langkah; jeda sedikit lebih lama di akhir baris */
    var prevChar=codeTyped>0?codeCharAt(codeTyped-1):'';
    codeTyped+=1;
    renderCode(codeTyped);
    var delay=14+Math.random()*22;
    if(prevChar==='\n') delay=180;
    else if(prevChar==='\\') delay=90;
    codeTimer=setTimeout(step,delay);
  }
  codeTimer=setTimeout(step,400);
}
/* Saat bahasa diganti, hentikan animasi ketik dan tampilkan kode lengkap dalam bahasa baru */
function syncCodeLang(){
  if(codeLang===LANG) return;
  codeLang=LANG;
  if(!codePre) return;
  if(codeTimer){ clearTimeout(codeTimer); codeTimer=null; }
  /* Hitung ulang total dari token bahasa baru ("Hello!" 1 karakter lebih panjang dari "Halo!") */
  codeTotal=0;
  codeTokens().forEach(function(tok){ codeTotal+=tok.t.length; });
  codeDone=true; codeTyped=codeTotal;
  renderCode(codeTotal);
}

/* Copy code */
document.querySelectorAll('[data-copy]').forEach(function(btn){
  btn.addEventListener('click',function(){
    var target=document.getElementById(btn.getAttribute('data-copy'));
    if(!target) return;
    var text=(target.id==='codeBlock') ? fullCodeText() : target.innerText;
    function done(){
      btn.classList.add('copied');
      var lab=btn.querySelector('.copyLabel'); if(lab) lab.textContent=I18N[LANG].copied;
      setTimeout(function(){ btn.classList.remove('copied'); var l=btn.querySelector('.copyLabel'); if(l) l.textContent=I18N[LANG].copyBtn; },1800);
    }
    if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(done).catch(done); }
    else{
      var ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); }catch(e){}
      document.body.removeChild(ta); done();
    }
  });
});

/* Header + mobile menu */
var header=document.getElementById('siteHeader');
window.addEventListener('scroll',function(){ header.classList.toggle('scrolled',window.scrollY>8); },{passive:true});
var menuBtn=document.getElementById('menuBtn'), mobileMenu=document.getElementById('mobileMenu');
menuBtn.addEventListener('click',function(){
  var open=mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',open?'true':'false');
});
mobileMenu.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click',function(){ mobileMenu.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); });
});

/* Reveal on scroll — dengan pengaman: konten selalu muncul walau observer gagal */
if('IntersectionObserver' in window && !reduceMotion){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.05,rootMargin:'0px 0px 500px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  /* Pengaman: paksa tampil semua sisa elemen setelah 1 detik */
  setTimeout(function(){
    document.querySelectorAll('.reveal:not(.in)').forEach(function(el){ el.classList.add('in'); io.unobserve(el); });
  },1000);
}else{
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
}

applyLang();
faqInit();
startTyping();
window.addEventListener('resize',function(){
  document.querySelectorAll('.faqItem.open .faqA').forEach(function(a){ a.style.maxHeight=a.scrollHeight+'px'; });
});
