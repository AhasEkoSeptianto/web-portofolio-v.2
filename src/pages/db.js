var allIconsSkill = [
  { image: "/image/icons/html-5.svg", name: "html5" },
  { image: "/image/icons/css.svg", name: "css3" },
  { image: "/image/icons/javascript.svg", name: "javascript" },
  { image: "/image/icons/python.svg", name: "python" },
  { image: "/image/icons/php.svg", name: "php" },
  { image: "/image/icons/mysql.svg", name: "mysql" },
  { image: "/image/icons/mongodb.svg", name: "mongodb" },
  { image: "/image/icons/nodejs.svg", name: "nodejs" },
  { image: "/image/icons/bootstrap.svg", name: "bootstrap" },
  { image: "/image/icons/materialui.png", name: "materialui" },
  { image: "/image/icons/tailwindcss.svg", name: "tailwind css" },
  { image: "/image/icons/expressjs.svg", name: "expressjs" },
  { image: "/image/icons/react.svg", name: "reactjs and react native" },
  { image: "/image/icons/nextjs.svg", name: "nextjs" },
  { image: "/image/icons/django.svg", name: "django" },
  { image: "/image/icons/laravel.svg", name: "laravel" },
  { image: "/image/icons/linux.svg", name: "linux" },
  { image: "/image/icons/alightmotion.svg", name: "alight motion" },
  { image: "/image/icons/figma.svg", name: "figma" },
  { image: "/image/icons/photoshop.svg", name: "photoshop" },
];

const allPortofolio = [
  {
    image_display: "/websapp universitas stikomcki/webstikomcki.png",
    name: "websapp universitas stikomcki",
    framework: "mongodb/expressjs/reactjs/nodejs",
    lang: "javascript",
    about_portofolio:
      'pada awalnya saya inisiatif membuat sebuah website untuk kampus saya yang dicabang karena mereka belum memilikinya yang mana website ini menyediakan informasi tentang kampus yang baru ini, menggunakan bahasa pemrograman modern "MERN" monggodb/expressjs/reactjs/nodejs. memiliki sistem login dari api dan menggunakan json web token sebagai informasi auth dan dashboard admin, saya juga menggunakan beberapa library dari js seperti material-ui, scrool-smoth etc,',
    image_fullDisplay: "/websapp universitas stikomcki/web_stikomcki.png",
    site: "https://website-stikomckid-v2.netlify.app/",
    github: "https://github.com/AhasEkoSeptianto/website-stikomckiv2-react.git",
    button_type: "Site",
    fileDownload: "",
  },
  {
    image_display: "/aplikasi_umkm_paguyuban/umkm_paguyuban.jpeg",
    name: "Web Pendataan Keanggotaan UMKM Paguyuban",
    framework: "nextjs/mongodb",
    lang: "javascript",
    about_portofolio:
      "aplikasi ini adalah pendataan keanggotaan umkm paguyuban disertai dengan kartu nama yang bisa digunakan anggota umkmnya, dibuat disatu project nextjs dengan builtin api nya dan menggunakan monggodb atlas sebagai penyimpanan datanya, project ini saya yang membuatnya sendiri untuk menambahkan pengalaman dengan media belajar nextjs, aplikasi ini bisa didemo untuk mengetahui cara kerjanya",
    image_fullDisplay: "/aplikasi_umkm_paguyuban/umkm_paguyuban.jpeg",
    site: "https://keanggotaan-umkm-paguyuban.netlify.app/",
    github: "hhttps://github.com/AhasEkoSeptianto/kkp_pendataananggotaumkm.git",
    button_type: "Site",
    fileDownload: "",
  },
  {
    image_display: "/website es cendol pak yoto/escendolyoto.png",
    name: "website es cendol pak yoto",
    framework: "laravel",
    lang: "php",
    about_portofolio:
      "e-commerse jajanan tradisional es cendol yoto, aplikasi ini menggunakan teknologi pure laravel dari php dan tailwinds css, memiliki sistem login dan dashboard admin. pada dashboard admin memiliki fitur grafik penjualanan, data karyawan, data product, data berita restoran, terbaru pendapatan perpriode dan pengaturan ",
    image_fullDisplay: "/website es cendol pak yoto/escendolapp.png",
    site: "",
    github: "https://github.com/AhasEkoSeptianto/webapp_escendol",
    button_type: "Site",
    fileDownload: "",
  },
  {
    image_display: "/mobile app finance/finance_app.jpeg",
    name: "mobile app finance",
    framework: "react native",
    lang: "javascript",
    about_portofolio:
      "aplikasi mobile android expo management keuangan, dibangun dengan teknologi react native, memiliki sistem login memakai api json web token, backend yang saya gunakan adalah expressjs",
    image_fullDisplay: "/mobile app finance/finance_app.jpeg",
    site: "",
    github: "https://github.com/AhasEkoSeptianto/reactNative_financeApp",
    button_type: "Download",
    fileDownload:
      "https://server-webportofolio.herokuapp.com/mobile app finance/finance_app_reactNative.apk",
  },
  {
    image_display: "/website personal/websitedjango.png",
    name: "website personal",
    framework: "django",
    lang: "python",
    about_portofolio:
      "website pribadi / personal ini adalah aplikasi berbasis website pertama saya, menggunakan sistem login , crud dan menampilkan informasi",
    image_fullDisplay: "/website personal/websitedjango_full.png",
    site: "https://website-pribadi-django.herokuapp.com",
    github: "https://website-django-pribady.herokuapp.com",
    button_type: "Site",
    fileDownload: "/website personal/null",
  },
  {
    image_display: "/aplikasi desktop spp mahasiswa/app-sppMahasiswa.png",
    name: "aplikasi desktop spp mahasiswa ",
    framework: "tkinter",
    lang: "python",
    about_portofolio:
      "aplikasi dekstop spp mahasiswa universitas, awal mula aplikasi ini dibuat adalah untuk teman kerja saya pada bagian keuangan salah satu universitas, memiliki fitur crud data mahasiswa dan data absensi serta manipulasi data-data dari mahasiswa tersebut",
    image_fullDisplay: "/aplikasi desktop spp mahasiswa/app-sppMahasiswa.png",
    site: "",
    github: "https://github.com/AhasEkoSeptianto/aplikasi-spp-mahasiswa",
    button_type: "Download",
    fileDownload:
      "https://server-webportofolio.herokuapp.com/aplikasi desktop spp mahasiswa/aplikasi spp mahasiswa desktop.zip",
  },
];

export { allPortofolio, allIconsSkill };
