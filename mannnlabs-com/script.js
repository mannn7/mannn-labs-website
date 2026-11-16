/* ============ STATE ============ */
var LANG='id';
var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============ I18N ============ */
var I18N={
id:{navProduk:'Produk',navTentang:'Tentang',navLegal:'Legalitas',navTraksi:'Traksi',navOwner:'Owner',navKontak:'Kontak',ctaDemo:'Lihat Demo →',
heroEyebrow:'AKSES AI TANPA RIBET',heroH1a:'Pakai AI canggih,',heroH1b:'tanpa bikin kantong jebol.',
heroLead:'Setiap paket dapat satu API key sendiri — key DeepSeek untuk model DeepSeek, key Claude untuk model Claude. Pilih paketnya, bayar lewat QRIS, Virtual Account, atau e-wallet, dan API key langsung dikirim ke emailmu. Butuh dua model? Ambil dua paket.',
heroCta1:'Lihat Playground',heroCta2:'Cek Harga Dulu',pill1:'Jawaban kilat',pill3:'Format OpenAI',pill4:'Dukungan dua bahasa',
miniDeepseek:'Harganya ringan, gesit di jawaban. Andalan untuk obrolan, kode, dan pekerjaan sehari-hari.',miniClaude:'Lebih cermat membaca konteks. Pas untuk berkas panjang dan tulisan yang rapi.',
prinsipLabel:'06 / Cara Kami Bekerja',prinsipH2:'Empat hal yang selalu kami pegang.',p1num:'JUJUR',p1h:'Dihitung Jujur',p1p:'Tarif kami susun dari biaya operasional yang sebenarnya, lalu kami ambil margin tipis — dan tidak ada potongan diam-diam di belakang.',
p2num:'LONGGAR',p2h:'Kuota Longgar',p2p:'Batas pemakaian kami buat lega sejak awal, jadi eksperimenmu tidak berhenti gara-gara mentok limit di tengah jalan.',
p3num:'SIAGA',p3h:'Siaga Terus',p3p:'Seluruh sistem kami awasi sepanjang waktu. Begitu satu jalur terganggu, permintaanmu dialihkan ke jalur lain tanpa kamu perlu melakukan apa-apa.',
p4num:'WAJAR',p4h:'Pakai dengan Wajar',p4p:'Pakai AI untuk riset, menulis, berkarya, dan pekerjaan lain yang sah — selama masih dalam batas penggunaan yang wajar. Ada penggunaan yang kami larang, misalnya penipuan, spam, dan konten ilegal; API key yang melanggar bisa kami cabut.',
produkLabel:'05 — PRODUK',produkH2a:'Setiap paket,',produkH2b:'satu API key',produkH2c:'sendiri',produkH2d:'untuk modelnya.',
prod1tag:'FLAGSHIP',prod1h:'API Key',prod1p:'Setiap paket dapat API key-nya sendiri — paket DeepSeek untuk model DeepSeek, paket Claude untuk model Claude. Kalau butuh dua-duanya, ambil dua paket. Key dilayani dari infrastruktur kami sendiri: kapasitasnya terukur, dan antrean pemakaiannya dibagi adil untuk semua pengguna.',prod1ds:'Gesit dan irit — andalan untuk obrolan, kode, dan tugas harian.',prod1cl:'Lebih cermat — pas untuk berkas panjang, riset, dan tulisan yang rapi.',prod1link:'Lihat paket & beli di',
prod2tag:'CONTOH ILUSTRASI',prod2h:'Contoh Penggunaan AI',prod2link:'Lihat contohnya',prod2p:'AI bisa membantumu membuat file dengan template rapi, mencatat pemasukan dan pengeluaran harian, sampai menyusun laporan dari catatan itu — tanpa perlu paham pemrograman. Lihat contohnya di bawah.',
useLabel:'08 / Contoh Penggunaan AI',useH2:'Pekerjaan harian, beres lebih cepat.',useDesc:'Contoh ilustrasi — satu cerita, tiga langkah yang nyambung. Mulai dari AI membuatkan file dengan template yang rapi, lalu setiap hari kamu cukup ceritakan pemasukan dan pengeluaranmu untuk dicatat ke file itu, dan di tahap akhir semua catatan itu disusun AI jadi laporan — cukup tulis dengan bahasa biasa. Semua angka di contoh ini hanya ilustrasi, bukan hasil nyata dari pengguna.',useIllus:'Contoh ilustrasi',useStepLbl:'Langkah',useAskLbl:'Kamu Minta',useOutLbl:'Hasilnya',
use1h:'Buatkan File',use1p:'File rapi dalam hitungan detik — template buku kas kosong dan tertata, siap diisi setiap hari, tinggal pakai.',use1ask:'“Buatkan file buku kas dengan template yang rapi: kolom tanggal, keterangan, pemasukan, dan pengeluaran.”',use1out:'Siap! File “Buku Kas” sudah jadi dengan template seperti ini — tinggal dipakai, tidak perlu menata kolom sendiri:',use1file:'Buku Kas.xlsx',
use2h:'Catatan Harian',use2p:'Cerita saja, AI yang mencatat — pemasukan dan pengeluaran hari ini langsung tercatat rapi di buku kas untukmu.',use2ask:'“Catat di buku kas ya — hari ini jualan tembus Rp 2,5 juta, terus beli bahan Rp 1,2 juta.”',use2out:'Tercatat di Buku Kas — Sabtu, 14 November 2026:\n• Pemasukan — Penjualan hari ini: Rp 2.500.000\n• Pengeluaran — Beli bahan: Rp 1.200.000\nSisa bersih hari ini: +Rp 1.300.000 — hari ini sudah rapi dan langsung tercatat di laporan buku kas, tanpa kamu buka kalkulator sama sekali.',
use3h:'Buatkan Laporan',use3p:'Laporan jadi tanpa rekap manual — semua catatan harianmu disusun AI jadi laporan lengkap dalam hitungan detik.',use3ask:'“Dari catatan buku kas Oktober, buatkan laporan ringkasnya.”',use3out:'Laporan Penjualan — Oktober 2026: Total omzet Rp48,6 juta (+12%), Produk terlaris Kopi Susu Gula Aren — 342 terjual, Tren naik stabil, Rekomendasi: tambah stok jelang promo 11.11.',use3file:'Laporan-Oktober.xlsx',
playH2:'Rasakan dulu sebelum memutuskan.',simBadge:'SIMULASI',targetTag:'TARGET',tempLabel:'Tingkat kreativitas (temperature)',promptLabel:'Prompt Kamu',promptPh:'Misalnya: tuliskan deskripsi menarik untuk brand sepatu online...',
chip1:'Apa itu API?',chip2:'Tulisan promosi',chip3:'Fungsi Python',runBtn:'Mulai Demo',runBusy:'Memproses…',
playNote:'Yang tampil di sini hanya simulasi tampilan, bukan jawaban sungguhan dari model.',outLabel:'Hasil',outIdle:'Keluaran demo akan tampil di area ini. Tekan “Mulai Demo” untuk mencobanya.',chars:'karakter',promptChars:'Prompt: ',resultChars:'Hasil: ',ownerPortfolio:'Portofolio',
tentangLabel:'01 / Tentang',traksiLabel:'03 / Traksi',tentangH2:'AI yang bagus seharusnya terjangkau — dan dipakai dengan wajar.',tentangCardH:'Tentang Mannn Labs',
aboutMain:'PT Mannn Labs adalah perusahaan teknologi yang lahir dari niat membantu manusia memakai AI yang bagus, nyata, dan terjangkau — semua produknya diuji dulu di ruang riset kami sebelum sampai ke tangan pelanggan.',
tentangP2:'Ditangani langsung oleh pemiliknya: server, produk, sampai urusan bantuan pelanggan.',
statusH:'Kondisi Sistem',statusP:'Kami tidak tertarik memoles angka. Yang kami tampilkan adalah target yang sungguh-sungguh kami pegang setiap hari:',m1:'Sasaran aktif per bulan',m2:'Sasaran kecepatan respon',m3:'Pengawasan tanpa henti',m4v:'2',m4:'Model pilihan — DeepSeek & Claude',
legalLabel:'02 / Legalitas',legalH2:'Bisnis yang jelas statusnya.',
legalMono:'PT Perorangan — Terdaftar Resmi',
legalPara:'Mannn Labs adalah brand dari PT Mannn Labs, badan usaha perseroan perorangan yang terdaftar resmi di Indonesia. Status tiap dokumen kami tampilkan apa adanya.',
badge1:'NIB Perorangan',badge3:'NPWP Individu',badge4:'NPWP PT',statusProcess:'DALAM PROSES',statusSoon:'SEGERA TERBIT',statusIssued:'TERDAFTAR',
navAria:'Utama',langAria:'Language / Bahasa',closeAria:'Tutup',
legalQuote:'“Infrastruktur yang baik tidak selalu terlihat, tetapi dampaknya selalu terasa.”',
legalQuoteNote:'Nomor dokumen kami simpan rapat — tapi siap dicek lewat jalur resmi.',
ownerLabel:'04 / Owner',ownerH2a:'Ini',ownerH2b:'yang punya.',
ownerEdu:'Lulusan S1 Teknologi Informasi, Universitas Bina Sarana Informatika (BSI)',
ownerBio:'Saya merancang, membangun, dan mengoperasikan Mannn Labs seorang diri — dari server dan serving model sampai menjawab pertanyaan pengguna. Tidak ada perantara dan tidak ada nama samaran: kalau ada yang perlu diperbaiki, saya sendiri yang memperbaikinya.',
respLabel:'Tanggung Jawab',own1:'Merancang & membangun Mannn Labs',own2:'Mengoperasikan server & layanan',own3:'Menjawab pertanyaan pengguna',
certLabel:'Sertifikasi',
certN5:'Analis Program – Pengembang Perangkat Lunak (Software Development)',
certD1:'Okt 2022',certD2:'Jul 2023',certD3:'Jan 2024',certD4:'Nov 2024',certD5:'Sep 2025',certD6:'Mar 2026',
opsLabel:'Operasional',
faqH2:'Yang paling sering ditanyakan',q1:'Aplikasiku sekarang pakai OpenAI. Bisa pindah ke sini?',a1:'Bisa banget. Kamu hanya perlu mengarahkan base_url ke Mannn Labs dan memakai API key dari kami — format request dan responsenya mengikuti OpenAI, jadi kode lamamu nyaris tidak perlu diubah.',
q2:'Metode pembayarannya apa saja?',a2:'Bayar per paket lewat QRIS, Virtual Account, maupun e-wallet. Begitu pembayaran terkonfirmasi, API key paketmu langsung dikirim ke email. Paket DeepSeek berlaku 1 minggu dan paket Claude berlaku 7 hari; setelah masa berlakunya habis, paket hangus dan tidak ada sisa yang diteruskan ke paket berikutnya (tanpa rollover).',
q3:'Bagaimana aturan refund di Mannn Labs?',a3:'Refund 100% kalau API key tidak bisa dipakai karena kesalahan dari sisi kami, diajukan maksimal 7 hari setelah pembayaran.',
q4:'Prompt yang kukirim, disimpan atau tidak?',a4:'Sistem mencatat log sebatas untuk keperluan tagihan dan keamanan. Prompt kamu diteruskan ke penyedia model (DeepSeek / Anthropic) supaya bisa dijawab, dan pembayaran diproses pihak ketiga lewat QRIS, Virtual Account, atau e-wallet. Kami tidak menjual data kamu ke pihak lain untuk iklan, dan kami tidak memakai prompt kamu untuk melatih model.',
q5:'DeepSeek atau Claude — pilih yang mana?',a5:'Pilih DeepSeek kalau kamu butuh jawaban gesit dan irit untuk obrolan, kode, dan tugas harian. Pilih Claude kalau pekerjaanmu banyak berkutat dengan berkas panjang, riset, dan naskah. Masing-masing punya API key sendiri — kalau butuh dua-duanya, beli dua paket: satu paket DeepSeek dan satu paket Claude.',
q6:'Apakah Mannn Labs bagian resmi dari DeepSeek atau Anthropic?',a6:'Bukan. Mannn Labs adalah penyedia akses API independen — kami bukan afiliasi resmi, anak perusahaan, atau mitra resmi DeepSeek maupun Anthropic (pembuat Claude). Nama DeepSeek dan Claude kami sebut hanya untuk menjelaskan model yang bisa kamu akses lewat layanan kami.',
kontakH2a:'Ada rencana kemitraan,',kontakH2b:'liputan, atau hal penting lainnya?',
footL:'© 2026 Mannn Labs — PT. Mannn Labs • mannnlabs.com. Dirakit dengan bangga di Indonesia.',footTerms:'Syarat & Ketentuan',footPrivacy:'Kebijakan Privasi',footRefund:'Refund'},
en:{navProduk:'Products',navTentang:'About',navLegal:'Legal',navTraksi:'Traction',navOwner:'Owner',navKontak:'Contact',ctaDemo:'See the Demo →',
heroEyebrow:'AI ACCESS, MADE SIMPLE',heroH1a:'Use advanced AI,',heroH1b:'without draining your wallet.',
heroLead:'Each package comes with its own API key — a DeepSeek key for the DeepSeek model, a Claude key for the Claude model. Pick your package, pay via QRIS, Virtual Account, or e-wallet, and the API key is sent straight to your email. Need both models? Take two packages.',
heroCta1:'See the Playground',heroCta2:'Check Pricing',pill1:'Lightning-fast replies',pill3:'OpenAI format',pill4:'Two-language support',
miniDeepseek:'Light on price, quick with answers. A go-to for chats, code, and everyday work.',miniClaude:'Reads context more carefully. Fits long documents and polished writing.',
prinsipLabel:'06 / How We Work',prinsipH2:'Four things we always stand by.',p1num:'HONEST',p1h:'Counted Honestly',p1p:'Our rates are built from actual operating costs with a thin margin on top — with no silent charges hiding behind it.',
p2num:'GENEROUS',p2h:'Roomy Quotas',p2p:'Usage limits are roomy from the start, so your experiments never stall halfway just because you hit a cap.',
p3num:'ON GUARD',p3h:'Always On Guard',p3p:'We watch the whole system around the clock. The moment one route has trouble, your requests are shifted to another route automatically.',
p4num:'FAIR USE',p4h:'Use It Fairly',p4p:'Use AI for research, writing, creative work, and other legitimate jobs — as long as it stays within fair use. Some uses are prohibited, such as fraud, spam, and illegal content; API keys that violate this can be revoked.',
produkLabel:'05 — Products',produkH2a:'Every package gets',produkH2b:'its own API key',produkH2c:'',produkH2d:'for its model.',
prod1tag:'FLAGSHIP',prod1h:'API Key',prod1p:'Every package comes with its own API key — a DeepSeek package for the DeepSeek model, a Claude package for the Claude model. Need both? Take two packages. Keys are served from our own infrastructure: capacity is measured, and the usage queue is shared fairly among everyone.',prod1ds:'Swift and thrifty — a go-to for chats, code, and daily tasks.',prod1cl:'More careful — fits long documents, research, and polished writing.',prod1link:'See packages & buy at',
prod2tag:'ILLUSTRATIVE EXAMPLES',prod2h:'AI Use Cases',prod2link:'See the examples',prod2p:'AI can help you create a file with a tidy template, record daily income and expenses, and compile a report from those records — no programming knowledge needed. See the examples below.',
useLabel:'08 / AI Use Cases',useH2:'Everyday work, done faster.',useDesc:'Illustrative example — one story, three connected steps. It starts with AI creating a file with a tidy template, then every day you simply tell it your income and expenses to be recorded into that file, and in the final step all those records are compiled by AI into a report — just write it in plain words. All figures in this example are illustrative only, not real user results.',useIllus:'Illustrative example',useStepLbl:'Step',useAskLbl:'You Ask',useOutLbl:'The Result',
use1h:'Create a File',use1p:'A tidy file in seconds — an empty, neatly arranged cash-book template, ready to use and fill in every day.',use1ask:'“Create a cash-book file with a tidy template: date, description, income, and expense columns.”',use1out:'Done! Your “Cash Book” file is ready with a template like this — just start using it, no need to arrange the columns yourself:',use1file:'Cash Book.xlsx',
use2h:'Daily Notes',use2p:'Just tell it, AI writes it down — today’s income and expenses are recorded neatly into the cash book for you.',use2ask:'“Put this in the cash book — today’s sales hit Rp 2.5 million, and I bought ingredients for Rp 1.2 million.”',use2out:'Recorded in the Cash Book — Saturday, November 14, 2026:\n• Income — Today’s sales: Rp 2,500,000\n• Expense — Ingredients: Rp 1,200,000\nNet for today: +Rp 1,300,000 — everything today is already neat and recorded straight into the cash book report, without you opening a calculator at all.',
use3h:'Write a Report',use3p:'Reports done with zero manual recaps — AI turns all your daily notes into a complete report in mere seconds.',use3ask:'“From October’s cash-book records, write me a brief report.”',use3out:'Sales Report — October 2026: Total revenue Rp 48.6M (+12%), Best seller: Palm Sugar Milk Coffee — 342 sold, Trend: steadily up, Recommendation: stock up ahead of the 11.11 sale.',use3file:'October-Report.xlsx',
playH2:'Feel it first before you decide.',simBadge:'SIMULATION',targetTag:'TARGET',tempLabel:'Creativity level (temperature)',promptLabel:'Your Prompt',promptPh:'For example: write a compelling description for an online shoe brand...',
chip1:'What is an API?',chip2:'Promo copy',chip3:'Python function',runBtn:'Start Demo',runBusy:'Processing…',
playNote:'What appears here is only a UI simulation, not a real answer from the model.',outLabel:'Output',outIdle:'Demo output will show up in this area. Press “Start Demo” to try it.',chars:'characters',promptChars:'Prompt: ',resultChars:'Result: ',ownerPortfolio:'Portfolio',
tentangLabel:'01 / About',traksiLabel:'03 / Traction',tentangH2:'Great AI should be affordable — and used fairly.',tentangCardH:'About Mannn Labs',
aboutMain:'PT Mannn Labs is a technology company born from the intention to help people use AI that is good, real, and affordable — every one of its products is tested first in our research space before it reaches customers.',
tentangP2:'Handled directly by the owner himself: the servers, the product, and even customer support.',
statusH:'System Condition',statusP:'We have no interest in dressing up numbers. What we show are the targets we genuinely hold ourselves to every day:',m1:'Monthly uptime target',m2:'Response speed goal',m3:'Watched without pause',m4v:'2',m4:'Models to choose from — DeepSeek & Claude',
legalLabel:'02 / Legal',legalH2:'A business with a clear status.',
legalMono:'Sole Proprietorship PT — Officially Registered',
legalPara:'Mannn Labs is the brand of PT Mannn Labs, a sole-proprietorship company officially registered in Indonesia. We show each document’s status exactly as it is.',
badge1:'Individual NIB',badge3:'Individual NPWP',badge4:'Company NPWP',statusProcess:'IN PROGRESS',statusSoon:'ISSUING SOON',statusIssued:'REGISTERED',
navAria:'Main',langAria:'Language',closeAria:'Close',
legalQuote:'“Good infrastructure is not always seen, but its impact is always felt.”',
legalQuoteNote:'We keep document numbers locked down — but always ready to be verified through official channels.',
ownerLabel:'04 / Owner',ownerH2a:'This is',ownerH2b:'the owner.',
ownerEdu:'Bachelor of Information Technology graduate, Universitas Bina Sarana Informatika (BSI)',
ownerBio:'I design, build, and operate Mannn Labs entirely on my own — from the servers and model serving to answering user questions. No middlemen and no aliases: if something needs fixing, I fix it myself.',
respLabel:'Responsibilities',own1:'Designs & builds Mannn Labs',own2:'Operates the servers & services',own3:'Answers user questions',
certLabel:'Certifications',
certN5:'Program Analyst – Software Developer',
certD1:'Oct 2022',certD2:'Jul 2023',certD3:'Jan 2024',certD4:'Nov 2024',certD5:'Sep 2025',certD6:'Mar 2026',
opsLabel:'Operations',
faqH2:'Most frequently asked',q1:'My app currently uses OpenAI. Can I move here?',a1:'Absolutely. Just point your base_url to Mannn Labs and use an API key from us — requests and responses follow the OpenAI format, so your existing code barely needs to change.',
q2:'What payment methods are available?',a2:'You pay per package via QRIS, Virtual Account, or e-wallet. Once your payment is confirmed, your package’s API key is sent straight to your email. DeepSeek packages are valid for 1 week and Claude packages for 7 days; once the validity period ends, the package expires and nothing carries over to the next package (no rollover).',
q3:'What is the refund policy?',a3:'You get a 100% refund if your API key cannot be used due to an error on our side, requested no later than 7 days after payment.',
q4:'Are the prompts I send stored or not?',a4:'The system keeps logs only for billing and security purposes. Your prompts are forwarded to the model provider (DeepSeek / Anthropic) so they can be answered, and payments are processed by third parties via QRIS, Virtual Account, or e-wallet. We never sell your data to anyone for advertising, and we never use your prompts to train models.',
q5:'DeepSeek or Claude — which should I pick?',a5:'Pick DeepSeek when you need swift, thrifty answers for chats, code, and daily tasks. Pick Claude when your work revolves around long files, research, and drafts. Each has its own API key — if you need both, buy two packages: one DeepSeek package and one Claude package.',
q6:'Is Mannn Labs an official part of DeepSeek or Anthropic?',a6:'No. Mannn Labs is an independent API access provider — we are not an official affiliate, subsidiary, or official partner of DeepSeek or of Anthropic (the maker of Claude). The names DeepSeek and Claude are mentioned only to describe the models you can access through our service.',
kontakH2a:'Planning a partnership,',kontakH2b:'press coverage, or something important?',
footL:'© 2026 Mannn Labs — PT. Mannn Labs • mannnlabs.com. Proudly assembled in Indonesia.',footTerms:'Terms & Conditions',footPrivacy:'Privacy Policy',footRefund:'Refunds'}
};
var DEMOS={
deepseek:{id:'API itu ibarat jembatan penghubung antar aplikasi: satu pihak mengirim permintaan, pihak lain mengirim balik jawaban. Lewat API Mannn Labs, aplikasimu bisa berbicara dengan model AI tanpa harus membangun otaknya sendiri.',en:'Think of an API as a bridge between applications: one side sends a request, the other side sends back an answer. Through the Mannn Labs API, your app can talk to an AI model without building the brain itself.'},
claude:{id:'API (Application Programming Interface) adalah seperangkat aturan yang membuat dua perangkat lunak bisa saling bertukar data secara teratur. Kamu mengirim permintaan sesuai format yang disepakati, server memprosesnya, lalu hasilnya kembali kepadamu dalam hitungan detik.',en:'An API (Application Programming Interface) is a set of rules that lets two pieces of software exchange data in an orderly way. You send a request in the agreed format, the server processes it, and the result comes back to you within seconds.'}};

/* ============ HEADER + MOBILE MENU ============ */
var header=document.getElementById('siteHeader');
window.addEventListener('scroll',function(){ header.classList.toggle('scrolled',window.scrollY>10); },{passive:true});
var menuBtn=document.getElementById('menuBtn'), mobileMenu=document.getElementById('mobileMenu');
menuBtn.addEventListener('click',function(){
  var open=mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',open?'true':'false');
});
mobileMenu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ mobileMenu.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); }); });

/* ============ SCROLL REVEAL (blur → tajam) ============ */
var revealEls=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !reduceMotion){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{threshold:.12});
  revealEls.forEach(function(el){ io.observe(el); });
}else{ revealEls.forEach(function(el){ el.classList.add('in'); }); }
/* Pengaman: paksa semua .reveal tampil setelah 1 detik, apa pun yang terjadi pada observer */
setTimeout(function(){ revealEls.forEach(function(el){ el.classList.add('in'); }); },1000);

/* ============ COUNTERS ============ */
function formatCount(el,v){
  var dec=parseInt(el.getAttribute('data-dec'),10)||0;
  var num= dec>0 ? v.toFixed(dec).replace('.', LANG==='id'?',':'.') : String(Math.round(v));
  return (el.getAttribute('data-prefix')||'')+num+(el.getAttribute('data-suffix')||'');
}
function animateCount(el){
  if(el.getAttribute('data-counted')==='1') return;
  el.setAttribute('data-counted','1');
  var target=parseFloat(el.getAttribute('data-count'));
  if(isNaN(target)){ return; }
  if(reduceMotion){ el.textContent=formatCount(el,target); return; }
  var start=null;
  function step(ts){
    if(!start) start=ts;
    var p=Math.min((ts-start)/1100,1);
    var eased=1-Math.pow(1-p,3);
    el.textContent=formatCount(el,target*eased);
    if(p<1){ requestAnimationFrame(step); }
    else{ el.textContent=formatCount(el,target); }
  }
  requestAnimationFrame(step);
}
var counters=document.querySelectorAll('.count');
if('IntersectionObserver' in window){
  var cio=new IntersectionObserver(function(entries){ entries.forEach(function(en){ if(en.isIntersecting){ animateCount(en.target); cio.unobserve(en.target); } }); },{threshold:.4});
  counters.forEach(function(el){ cio.observe(el); });
}else{ counters.forEach(animateCount); }
/* Pengaman counter: yang belum jalan setelah 1,5 detik dipaksa tampil dengan angka akhirnya */
setTimeout(function(){ counters.forEach(function(el){ if(!el.getAttribute('data-counted')) animateCount(el); }); },1500);
/* Pengaman akhir: setelah animasi seharusnya selesai, paksa semua counter ke angka akhir utuh */
setTimeout(function(){ counters.forEach(function(el){ var t=parseFloat(el.getAttribute('data-count')); if(!isNaN(t)) el.textContent=formatCount(el,t); }); },3200);

/* ============ FAQ — single-open accordion ============ */
var faqItems=document.querySelectorAll('.faqItem');
function setFaq(item,open){
  var panel=item.querySelector('.faqA'), btn=item.querySelector('.faqQ');
  item.classList.toggle('open',open);
  btn.setAttribute('aria-expanded',open?'true':'false');
  panel.style.maxHeight= open ? panel.scrollHeight+'px' : '0px';
}
faqItems.forEach(function(item){
  if(item.classList.contains('open')) setFaq(item,true);
  item.querySelector('.faqQ').addEventListener('click',function(){
    var wasOpen=item.classList.contains('open');
    faqItems.forEach(function(x){ setFaq(x,false); });
    if(!wasOpen) setFaq(item,true);
  });
});
window.addEventListener('resize',function(){ faqItems.forEach(function(item){ if(item.classList.contains('open')) setFaq(item,true); }); });

/* ============ PLAYGROUND ============ */
var promptInput=document.getElementById('promptInput'), outBox=document.getElementById('outputBox'),
    outMeta=document.getElementById('outMeta'), charCount=document.getElementById('charCount'),
    runBtn=document.getElementById('runBtn'), playTimer=null;
function updateChars(){ charCount.textContent=I18N[LANG].promptChars+promptInput.value.length+' '+I18N[LANG].chars; }
promptInput.addEventListener('input',updateChars);
document.getElementById('tempRange').addEventListener('input',function(){ document.getElementById('tempVal').textContent=Number(this.value).toFixed(1); });
document.querySelectorAll('[data-chip]').forEach(function(chip){
  chip.addEventListener('click',function(){ promptInput.value=chip.getAttribute('data-chip'); updateChars(); promptInput.focus(); });
});
var lastRun=null;
function buildReply(model,prompt,temp){ return DEMOS[model][LANG]+'\n\n— Demo • Model: '+(model==='deepseek'?'DeepSeek':'Claude')+' • temperature: '+temp+' • Prompt: "'+prompt.slice(0,80)+'"'; }
function doneMeta(model,reply){ return 'model: '+(model==='deepseek'?'deepseek-chat':'claude')+' • status: done • '+I18N[LANG].resultChars+reply.length+' '+I18N[LANG].chars; }
runBtn.addEventListener('click',function(){
  var model=document.getElementById('modelSel').value;
  var prompt=promptInput.value.trim()||'Halo!';
  var temp=document.getElementById('tempVal').textContent;
  var reply=buildReply(model,prompt,temp);
  if(playTimer) clearInterval(playTimer);
  outBox.textContent=''; runBtn.disabled=true; runBtn.textContent=I18N[LANG].runBusy;
  outMeta.textContent='model: '+(model==='deepseek'?'deepseek-chat':'claude')+' • status: streaming';
  var i=0;
  playTimer=setInterval(function(){
    i+=3; outBox.textContent=reply.slice(0,i);
    if(i>=reply.length){ clearInterval(playTimer); playTimer=null; runBtn.disabled=false; runBtn.textContent=I18N[LANG].runBtn; lastRun={model:model,prompt:prompt,temp:temp}; outMeta.textContent=doneMeta(model,reply); }
  },12);
  if(reduceMotion){ clearInterval(playTimer); playTimer=null; outBox.textContent=reply; runBtn.disabled=false; runBtn.textContent=I18N[LANG].runBtn; lastRun={model:model,prompt:prompt,temp:temp}; outMeta.textContent=doneMeta(model,reply); }
});

/* ============ LANGUAGE TOGGLE ID/EN ============ */
var DEFAULT_PROMPT={id:'Terangkan apa itu API hanya dalam 2 kalimat, untuk orang awam.',en:'Explain what an API is in just 2 sentences, for a complete beginner.'};
var CHIPS={id:['Terangkan apa itu API hanya dalam 2 kalimat, untuk orang awam.','Buatkan tulisan promosi Instagram untuk es kopi susu gula aren.','Buatkan fungsi Python untuk memeriksa apakah sebuah email valid.'],
           en:['Explain what an API is in just 2 sentences, for a complete beginner.','Write Instagram promo copy for an iced palm-sugar milk coffee.','Write a Python function that checks whether an email is valid.']};
function setLang(l){
  LANG=l;
  document.documentElement.lang=l;
  document.getElementById('langId').classList.toggle('active',l==='id');
  document.getElementById('langEn').classList.toggle('active',l==='en');
  var dict=I18N[l];
  document.querySelectorAll('[data-i18n]').forEach(function(el){ var k=el.getAttribute('data-i18n'); if(dict[k]!==undefined) el.textContent=dict[k]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){ var k=el.getAttribute('data-i18n-ph'); if(dict[k]!==undefined) el.setAttribute('placeholder',dict[k]); });
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el){ var k=el.getAttribute('data-i18n-aria'); if(dict[k]!==undefined) el.setAttribute('aria-label',dict[k]); });
  /* angka Traksi ikut format bahasa (99,9% <-> 99.9%) tanpa memecah tampilannya */
  document.querySelectorAll('.count[data-counted="1"]').forEach(function(el){ var t=parseFloat(el.getAttribute('data-count')); if(!isNaN(t)) el.textContent=formatCount(el,t); });
  document.title= l==='id' ? 'Mannn Labs API AI — Akses API AI Terjangkau' : 'Mannn Labs API AI — Affordable AI API Access';
  /* chip prompts follow language */
  document.querySelectorAll('[data-chip]').forEach(function(chip,i){ chip.setAttribute('data-chip',CHIPS[l][i]); });
  if(promptInput.value===DEFAULT_PROMPT[l==='id'?'en':'id']) promptInput.value=DEFAULT_PROMPT[l];
  updateChars();
  /* hasil & meta Playground ikut bahasa aktif (counter hasil tidak tertinggal bahasa lama) */
  if(lastRun && !playTimer){
    var r2=buildReply(lastRun.model,lastRun.prompt,lastRun.temp);
    outBox.textContent=r2; outMeta.textContent=doneMeta(lastRun.model,r2);
  }else if(!lastRun){
    outBox.textContent=dict.outIdle; outMeta.textContent='model: — • status: idle';
  }
  faqItems.forEach(function(item){ if(item.classList.contains('open')) setFaq(item,true); });
  renderLegal();
}
document.getElementById('langId').addEventListener('click',function(){ if(LANG!=='id') setLang('id'); });
document.getElementById('langEn').addEventListener('click',function(){ if(LANG!=='en') setLang('en'); });

/* ============ MODAL LEGAL — S&K / Privasi / Refund (footer) ============ */
var LEGAL={
terms:{
id:{t:'Syarat & Ketentuan',p:[
'Cara order: pilih produk atau paket yang kamu inginkan, lalu kirim pesananmu lewat email ke <a href="mailto:founder@mannnlabs.com">founder@mannnlabs.com</a>. Kami akan membalas dengan detail pembayaran dan langkah selanjutnya.',
'Pembayaran: kami menerima QRIS, Virtual Account (VA), dan e-wallet. Pesanan diproses setelah pembayaran kami terima.',
'Pengiriman API key: API key dikirim ke email kamu setelah pembayaran terkonfirmasi. Setiap paket punya API key sendiri untuk modelnya — paket DeepSeek berlaku 1 minggu, paket Claude berlaku 7 hari, lalu hangus tanpa rollover. Jaga kerahasiaan API key kamu — key yang sudah terkirim menjadi tanggung jawab pemiliknya.',
'Penggunaan yang dilarang: layanan ini tidak boleh dipakai untuk penipuan, spam, konten ilegal, atau pelanggaran hukum lainnya. API key yang melanggar dapat kami cabut.']},
en:{t:'Terms & Conditions',p:[
'How to order: pick the product or plan you want, then send your order by email to <a href="mailto:founder@mannnlabs.com">founder@mannnlabs.com</a>. We will reply with payment details and the next steps.',
'Payment: we accept QRIS, Virtual Account (VA), and e-wallets. Orders are processed once payment is received.',
'API key delivery: your API key is sent to your email after your payment is confirmed. Each package has its own API key for its model — DeepSeek packages are valid for 1 week, Claude packages for 7 days, then they expire with no rollover. Keep your API key secret — once delivered, it is the owner\u2019s responsibility.',
'Prohibited use: this service may not be used for fraud, spam, illegal content, or other violations of the law. Keys that violate this may be revoked.']}},
privacy:{
id:{t:'Kebijakan Privasi',p:[
'Data yang kami kumpulkan hanya sebatas email dan data order (produk yang dibeli, jumlah pembayaran, dan waktu transaksi) — cukup untuk memproses pesanan dan mengirim API key kamu.',
'Prompt yang kamu kirim diteruskan ke penyedia model (DeepSeek / Anthropic) supaya permintaanmu bisa dijawab. Pembayaran diproses oleh pihak ketiga lewat QRIS, Virtual Account, atau e-wallet.',
'Sistem mencatat log sebatas jumlah token dan waktu pemakaian untuk keperluan tagihan dan keamanan — bukan isi percakapan kamu.',
'Kami tidak menjual data kamu ke pihak lain untuk iklan, dan kami tidak memakai prompt kamu untuk melatih model.',
'API key bersifat rahasia dan menjadi milik pembeli sepenuhnya. Simpan dengan aman dan jangan bagikan ke siapa pun.']},
en:{t:'Privacy Policy',p:[
'We only collect your email and order data (the product purchased, payment amount, and transaction time) — just enough to process your order and deliver your API key.',
'The prompts you send are forwarded to the model provider (DeepSeek / Anthropic) so your requests can be answered. Payments are processed by third parties via QRIS, Virtual Account, or e-wallet.',
'The system logs only token counts and usage timestamps for billing and security purposes — not the content of your conversations.',
'We never sell your data to anyone for advertising, and we never use your prompts to train models.',
'Your API key is confidential and belongs entirely to you as the buyer. Store it safely and never share it with anyone.']}},
refund:{
id:{t:'Kebijakan Refund',p:[
'Refund 100% kalau API key tidak bisa dipakai karena kesalahan dari sisi kami, diajukan maksimal 7 hari setelah pembayaran.',
'Cara mengajukan: hubungi kami lewat email <a href="mailto:founder@mannnlabs.com">founder@mannnlabs.com</a>.',
'Refund yang disetujui dikembalikan ke metode pembayaran asal.']},
en:{t:'Refund Policy',p:[
'You get a 100% refund if your API key cannot be used due to an error on our side, requested no later than 7 days after payment.',
'How to request: contact us by email at <a href="mailto:founder@mannnlabs.com">founder@mannnlabs.com</a>.',
'Approved refunds are returned to the original payment method.']}}
};
var legalKey=null, legalLastFocus=null;
function renderLegal(){
  if(!legalKey) return;
  var c=LEGAL[legalKey][LANG]; if(!c) return;
  document.getElementById('legalTitle').textContent=c.t;
  document.getElementById('legalBody').innerHTML=c.p.map(function(x){ return '<p>'+x+'</p>'; }).join('');
}
function openLegal(k){
  legalKey=k; legalLastFocus=document.activeElement;
  renderLegal();
  document.getElementById('legalModal').hidden=false;
  document.body.style.overflow='hidden';
  document.getElementById('legalClose').focus();
}
function closeLegal(){
  document.getElementById('legalModal').hidden=true;
  document.body.style.overflow='';
  legalKey=null;
  if(legalLastFocus && legalLastFocus.focus) legalLastFocus.focus();
}
document.querySelectorAll('[data-legal]').forEach(function(btn){
  btn.addEventListener('click',function(){ openLegal(btn.getAttribute('data-legal')); });
});
document.getElementById('legalClose').addEventListener('click',closeLegal);
document.getElementById('legalModal').addEventListener('click',function(e){ if(e.target===this) closeLegal(); });
document.addEventListener('keydown',function(e){ if(e.key==='Escape' && legalKey) closeLegal(); });

/* ============ INIT ============ */
updateChars();
