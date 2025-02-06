import {
  ChartLineDown,
  ChatTeardropDots,
  DesktopTower,
  DeviceMobile,
  Devices,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  Trophy,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { ASSETS_PATH, IMAGES_PATH } from "./path";

const contents = {
  headline: {
    id: "Tempat Ide Visioner Menjadi Nyata",
    en: "Where Visionary Ideas Take Shape",
  },
  tagline: "visionary engineering",
  home: {
    hero: {
      intro: {
        id: "Kami mengembangkan solusi perangkat lunak inovatif untuk tantangan modern, menciptakan pengalaman efisien dan berdampak jangka panjang.",
        en: "We develop innovative software solutions to modern challenges, creating efficient and impactful experiences that last.",
      },
      averageRating: {
        label: { id: "Penilaian Rata-rata", en: "Average Rating" },
        value: 5,
      },
      cta: {
        id: "Mari diskusi",
        en: "Let's talk",
      },
      ctaDescription: {
        id: "Diskusi dengan tim kami",
        en: "Talk with our team",
      },
    },
    stats: [
      {
        emoji: "🏆",
        value: { id: "2+", en: "2+" },
        label: {
          id: "Kami telah berpengalaman lebih dari 2 tahun di industri.",
          en: "We have over 2 years of experience in this industry.",
        },
        description: {
          id: "Kami bekerja dengan berbagai perusahaan, dari yayasan hingga PT.",
          en: "We collaborate with various companies, from foundations to PT.",
        },
      },
      {
        emoji: "🧑‍💻",
        value: { id: "10+", en: "10+" },
        label: {
          id: "Lebih dari 10 proyek telah kami selesaikan di berbagai industri.",
          en: "We have completed over 10 projects in various industries.",
        },
        description: {
          id: "Termasuk sektor kesehatan, politik, SDM, serta geospasial.",
          en: "Including healthcare, politics, HR, and geospatial sectors.",
        },
      },
      {
        emoji: "😊",
        value: { id: "140+", en: "140+" },
        label: {
          id: "95% klien kami merasa puas dengan layanan yang diberikan.",
          en: "95% of our clients are satisfied with the services provided.",
        },
        description: {
          id: "Kami selalu memberikan solusi yang tepat sesuai kebutuhan klien.",
          en: "We always provide the right solutions tailored to client needs.",
        },
      },
      {
        emoji: "💡",
        value: { id: "5+", en: "5+" },
        label: {
          id: "Keahlian kami di berbagai bidang teknologi dan bisnis.",
          en: "Our expertise spans various technology and business fields.",
        },
        description: {
          id: "Mulai dari pengembangan software hingga strategi bisnis digital.",
          en: "From software development to digital business strategy.",
        },
      },
    ],
    works: {
      title: {
        id: "Lihat karya-karya dari Exium",
        en: "See Exium's project showcase",
      },
      intro: {
        id: "Proyek unggulan kami mencerminkan keahlian dalam survei umum dan pemindaian ke BIM.",
        en: "Our standout projects showcase expertise in general surveys and scan-to-BIM.",
      },
      clientLabel: { id: "Klien", en: "Client" },
      locationLabel: { id: "Lokasi", en: "Location" },
      yearLabel: { id: "Tahun", en: "Year" },
      locationYearLabel: { id: "Lokasi/Tahun", en: "Location/Year" },
      detailWorkLabel: { id: "Lihat detail", en: "View detail" },
      cta: {
        id: "Semua Karya",
        en: "All Works",
      },
    },
    aboutUs: {
      title: {
        id: "Tentang Exium",
        en: "About Exium",
      },
      intro: {
        id: "Exium adalah mitra teknologi Anda yang berfokus pada solusi inovatif untuk mendukung kesuksesan bisnis Anda. Kami memahami bahwa setiap bisnis unik, sehingga kami menghadirkan layanan yang dapat disesuaikan dengan kebutuhan spesifik Anda untuk memberikan pengalaman yang berharga bagi pengguna.",
        en: "Exium is your technology partner, dedicated to innovative solutions that support your business success. We understand that every business is unique, so we offer services tailored to your specific needs to provide valuable experiences for your users.",
      },
    },
    services: {
      title: {
        id: "oleh Exium",
        en: "by Exium",
      },
      tag: {
        id: "Layanan",
        en: "Services",
      },
      intro: {
        id: "Jangan biarkan masalah teknologi menghambat bisnis Anda. Dengan solusi PWA yang fleksibel dan mudah diakses di semua perangkat, kami siap membantu Anda menjangkau lebih banyak pengguna tanpa batasan platform dan menjaga aplikasi tetap scalable seiring pertumbuhan bisnis Anda.",
        en: "Don't let technology issues hold your business back. With flexible and easily accessible PWA solutions across all devices, we're ready to help you reach more users without platform limitations and keep your app scalable as your business grows.",
      },
      solutionLabel: { id: "Solusi", en: "Solution" },
      cta: {
        id: "Rincian Layanan",
        en: "Details of Services",
      },
    },
    tww: {
      title: {
        id: "Cara Exium Bekerja",
        en: "The Way Exium Works",
      },
      intro: {
        id: "Di Exium, kami percaya bahwa kesuksesan proyek digital dimulai dari cara kami bekerja. Dengan pendekatan terstruktur dan kolaboratif, kami memastikan setiap tahap proyek berjalan efisien, transparan, dan menghasilkan solusi yang tepat untuk kebutuhan bisnis Anda.",
        en: "At Exium, we believe the success of digital projects starts with how we work. Through a structured and collaborative approach, we ensure every project phase is efficient, transparent, and delivers the right solutions for your business needs.",
      },
      list: [
        {
          title: {
            id: "Konsultasi Mendalam",
            en: "In-Depth Consultation",
          },
          description: {
            id: "Kami memulai dengan analisis menyeluruh tentang infrastruktur digital, proses bisnis, dan tantangan spesifik yang Anda hadapi. Tim ahli kami melakukan wawancara komprehensif untuk memahami setiap aspek kebutuhan teknologi Anda.",
            en: "We begin with a comprehensive analysis of your digital infrastructure, business processes, and specific challenges. Our expert team conducts in-depth interviews to understand every aspect of your technological needs.",
          },
          icon: UsersThree,
          emoji: "🗣️",
        },
        {
          title: {
            id: "Desain Solusi",
            en: "Solution Design",
          },
          description: {
            id: "Berdasarkan temuan konsultasi, kami merancang solusi teknologi yang dipersonalisasi. Setiap strategi dikembangkan dengan presisi untuk menyelesaikan permasalahan unik dan mengoptimalkan kinerja digital bisnis Anda.",
            en: "Based on consultation findings, we design personalized technological solutions. Each strategy is developed with precision to address unique challenges and optimize your business's digital performance.",
          },
          icon: ChatTeardropDots,
          emoji: "🎨",
        },
        {
          title: {
            id: "Implementasi",
            en: "Implementation",
          },
          description: {
            id: "Tim teknisi profesional kami mengimplementasikan solusi dengan pendekatan bertahap dan terukur. Kami memastikan transisi minimal gangguan, memberikan pelatihan komprehensif, dan mendukung adaptasi teknologi baru dalam organisasi Anda.",
            en: "Our professional tech team implements solutions with a phased and measured approach. We ensure minimal disruption, provide comprehensive training, and support the adaptation of new technologies within your organization.",
          },
          icon: Devices,
          emoji: "🧑‍💻",
        },
        {
          title: {
            id: "Dukungan Berkelanjutan",
            en: "Continuous Support",
          },
          description: {
            id: "Komitmen kami tidak berhenti setelah implementasi. Kami menyediakan dukungan purna jual yang mencakup pemantauan berkala, pemeliharaan sistem, optimasi berkelanjutan, dan konsultasi untuk memastikan solusi teknologi Anda tetap terdepan dan efektif.",
            en: "Our commitment doesn't stop after implementation. We provide ongoing support including periodic monitoring, system maintenance, continuous optimization, and consultation to ensure your technological solutions remain cutting-edge and effective.",
          },
          icon: Trophy,
          emoji: "📞",
        },
      ],
    },
    footer: {
      contact: {
        id: "Kontak",
        en: "Contact",
      },
      socialMedia: {
        id: "Media Sosial",
        en: "Social Media",
      },
      copyright: {
        id: "Hak Cipta",
        en: "Copyright",
      },
    },
  },
  works: {
    title: {
      id: "Karya Berkualitas Exium untuk Memenuhi Kebutuhan Klien",
      en: "Exium's Quality Works to Meet Client Needs",
    },
    summary: {
      id: "Selama 2 tahun terakhir, Exium telah memberi solusi digital pada lebih dari 10 proyek. Jelajahi karya terbaru kami.",
      en: "Over the past 2 years, Exium has provided digital solutions to more than 10 projects. Explore our latest work.",
    },
    backgroundLabel: { id: "Latar Belakang", en: "Background" },
    list: [
      // Gis
      {
        index: 2,
        category: 2,
        client: {
          name: "Bandung",
          logo: `${ASSETS_PATH}/images/clients/rski.png`,
        },
        color: "#3e97ff",
        thumbnail: `${IMAGES_PATH}/works/gis/thumbnail.png`,
        thumbnail_gray: `${IMAGES_PATH}/works/gis/thumbnail_gray.png`,
        image_1: `${IMAGES_PATH}/works/gis/image_1.png`,
        image_2: `${IMAGES_PATH}/works/gis/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/gis/featured_image.png`,
        title: "Geo Information System",
        tag: { id: "HRIS", en: "HRIS" },
        summary: {
          id: "Data tanah yang terdigitalisasi dengan fitur deteksi cerdas gap & overlap",
          en: "Digitized land data with intelligent gap & overlap detection features",
        },
        problem: {
          id: "Aute laborum ut et id ipsum esse in elit Lorem tempor in. Sunt deserunt commodo aliquip incididunt irure voluptate.",
          en: "",
        },
        solution: {
          id: "Dummy Solution | Dummy Solution | Dummy Solution",
          en: "",
        },
        duration: { id: "3 Bulan", en: "3 Months" },
        background: [
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
        ],
        narratives: [
          {
            title: { id: "Latar Belakang", en: "Background" },
            contents: [
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
            ],
          },
          {
            title: {
              id: "Ullamco anim velit sint",
              en: "",
            },
            contents: [
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
            ],
          },
          {
            title: { id: "Laborum consequat anim", en: "" },
            contents: [
              {
                id: "Aliquip labore ex irure mollit irure adipisicing dolor elit qui proident quis consequat nulla irure. Adipisicing sunt ipsum officia anim. Ea cillum consectetur ullamco velit Lorem Lorem sunt eiusmod labore ipsum in.",
                en: "",
              },
            ],
          },
        ],
      },

      // Rski
      {
        index: 1,
        category: 1,
        client: {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          logo: `${IMAGES_PATH}/clients/rski.png`,
        },
        color: "#34BFAC",
        thumbnail: `${IMAGES_PATH}/works/rski_personalia/thumbnail.png`,
        thumbnail_gray: `${IMAGES_PATH}/works/rski_personalia/thumbnail_gray.png`,
        image_1: `${IMAGES_PATH}/works/rski_karyawan/image_1.png`,
        image_2: `${IMAGES_PATH}/works/rski_karyawan/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/rski_personalia/featured_image.png`,
        title: "RSKI Personalia",
        tag: { id: "HRIS", en: "HRIS" },
        summary: {
          id: "Exium membantu manajemen SDM RSKI agar lebih praktis, efisien dan efektif",
          en: "Exium help hospital HR management to be more practical, efficient and effective",
        },
        problem: {
          id: "Aute laborum ut et id ipsum esse in elit Lorem tempor in. Sunt deserunt commodo aliquip incididunt irure voluptate.",
          en: "",
        },
        solution: {
          id: "Dummy Solution | Dummy Solution | Dummy Solution",
          en: "",
        },
        duration: { id: "3 Bulan", en: "3 Months" },
        background: [
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
        ],
        narratives: [
          {
            title: { id: "Latar Belakang", en: "Background" },
            contents: [
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
            ],
          },
          {
            title: {
              id: "Ullamco anim velit sint",
              en: "",
            },
            contents: [
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
            ],
          },
          {
            title: { id: "Laborum consequat anim", en: "" },
            contents: [
              {
                id: "Aliquip labore ex irure mollit irure adipisicing dolor elit qui proident quis consequat nulla irure. Adipisicing sunt ipsum officia anim. Ea cillum consectetur ullamco velit Lorem Lorem sunt eiusmod labore ipsum in.",
                en: "",
              },
            ],
          },
        ],
      },
      {
        index: 2,
        category: 2,
        client: {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          logo: `${ASSETS_PATH}/images/clients/rski.png`,
        },
        color: "#1fb7af",
        thumbnail: `${IMAGES_PATH}/works/rski_karyawan/thumbnail.png`,
        thumbnail_gray: `${IMAGES_PATH}/works/rski_karyawan/thumbnail_gray.png`,
        image_1: `${IMAGES_PATH}/works/rski_karyawan/image_1.png`,
        image_2: `${IMAGES_PATH}/works/rski_karyawan/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/rski_karyawan/featured_image.png`,
        title: "RSKI Karyawan",
        tag: { id: "HRIS", en: "HRIS" },
        summary: {
          id: "Aplikasi karyawan yang memudahkan proses absensi dan kebutuhan karyawan lainnya",
          en: "Employee app that makes the attendance process easier and other employee needs",
        },
        problem: {
          id: "Aute laborum ut et id ipsum esse in elit Lorem tempor in. Sunt deserunt commodo aliquip incididunt irure voluptate.",
          en: "",
        },
        solution: {
          id: "Dummy Solution | Dummy Solution | Dummy Solution",
          en: "",
        },
        duration: { id: "3 Bulan", en: "3 Months" },
        background: [
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
        ],
        narratives: [
          {
            title: { id: "Latar Belakang", en: "Background" },
            contents: [
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
            ],
          },
          {
            title: {
              id: "Ullamco anim velit sint",
              en: "",
            },
            contents: [
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
            ],
          },
          {
            title: { id: "Laborum consequat anim", en: "" },
            contents: [
              {
                id: "Aliquip labore ex irure mollit irure adipisicing dolor elit qui proident quis consequat nulla irure. Adipisicing sunt ipsum officia anim. Ea cillum consectetur ullamco velit Lorem Lorem sunt eiusmod labore ipsum in.",
                en: "",
              },
            ],
          },
        ],
      },

      // Poltekkes
      {
        index: 0,
        category: 1,
        client: {
          name: "Poltekkes",
          logo: `${ASSETS_PATH}/images/clients/poltekkes.png`,
        },
        color: "#34BFAC",
        thumbnail: `${IMAGES_PATH}/works/rski_personalia/thumbnail.png`,
        thumbnail_gray: `${IMAGES_PATH}/works/rski_personalia/thumbnail_gray.png`,
        image_1: `${IMAGES_PATH}/works/rski_karyawan/image_1.png`,
        image_2: `${IMAGES_PATH}/works/rski_karyawan/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/silaban/featured_image.png`,
        title: "Silaban",
        tag: { id: "Dashboard", en: "Dashboard" },
        summary: {
          id: "Platform yang memudahkan transaksi pengujian laboratorium admin",
          en: "Platform that makes it easy to transact lab tests",
        },
        problem: {
          id: "Aute laborum ut et id ipsum esse in elit Lorem tempor in. Sunt deserunt commodo aliquip incididunt irure voluptate.",
          en: "",
        },
        solution: {
          id: "Dummy Solution | Dummy Solution | Dummy Solution",
          en: "",
        },
        duration: { id: "2 Bulan", en: "2 Months" },
        background: [
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
          {
            id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
            en: "",
          },
        ],
        narratives: [
          {
            title: { id: "Latar Belakang", en: "Background" },
            contents: [
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
              {
                id: "Enim deserunt officia est excepteur deserunt consequat ipsum exercitation elit pariatur ea mollit. Consequat id nostrud sit cupidatat reprehenderit eu sint nulla ullamco consectetur sunt eiusmod ex deserunt. Anim commodo id pariatur ea cillum ipsum sint mollit incididunt labore. Irure officia veniam ad est aliquip exercitation officia velit ad esse voluptate sit occaecat quis. Ullamco id aliquip exercitation commodo qui consequat proident amet. Dolore sint tempor quis duis laborum sit ea non nulla pariatur quis. Cupidatat id dolor culpa laboris occaecat pariatur et.",
                en: "",
              },
            ],
          },
          {
            title: {
              id: "Ullamco anim velit sint",
              en: "",
            },
            contents: [
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
              {
                id: "Esse occaecat sit amet aliqua laborum do quis id tempor exercitation nulla dolor elit. Magna esse ex et anim officia qui esse. Irure ex laborum adipisicing deserunt quis Lorem cupidatat velit esse Lorem. Pariatur culpa irure velit qui ut exercitation excepteur. Incididunt ut voluptate quis commodo veniam magna et enim dolore eu ad tempor tempor.",
                en: "",
              },
            ],
          },
          {
            title: { id: "Laborum consequat anim", en: "" },
            contents: [
              {
                id: "Aliquip labore ex irure mollit irure adipisicing dolor elit qui proident quis consequat nulla irure. Adipisicing sunt ipsum officia anim. Ea cillum consectetur ullamco velit Lorem Lorem sunt eiusmod labore ipsum in.",
                en: "",
              },
            ],
          },
        ],
      },
    ],
    iconicCLientLabel: {
      id: "Klien ikonik Exium",
      en: "Exium's iconic clients",
    },
  },
  workCategories: [
    { id: "Sumber Daya Manusia", en: "Human Resource" },
    { id: "Web GIS", en: "Web GIS" },
    { id: "Lorem", en: "" },
    { id: "Lorem", en: "" },
  ],
  workDetail: {
    clientLabel: { id: "Klien", en: "Client" },
    problemLabel: { id: "Problem", en: "Masalah" },
    solutionLabel: { id: "Solusi", en: "Solution" },
    durationLabel: { id: "Durasi", en: "Duration" },
  },
  clients: [
    {
      logo: `${IMAGES_PATH}/clients/kawanmina.png`,
      logoGray: `${IMAGES_PATH}/clients/kawanmina_g.webp`,
      name: "Kawan Mina",
    },
    {
      logo: `${IMAGES_PATH}/clients/khalifah.png`,
      logoGray: `${IMAGES_PATH}/clients/khalifah_g.webp`,
      name: "Khalifah One",
    },
    {
      logo: `${IMAGES_PATH}/clients/yohana.png`,
      logoGray: `${IMAGES_PATH}/clients/yohana_g.webp`,
      name: "PT Yohana Sentosa Pramata",
    },
    {
      logo: `${IMAGES_PATH}/clients/demokrat.png`,
      logoGray: `${IMAGES_PATH}/clients/demokrat_g.webp`,
      name: "Partai Demokrat Semarang",
    },
    {
      logo: `${IMAGES_PATH}/clients/rski.png`,
      logoGray: `${IMAGES_PATH}/clients/rski_g.webp`,
      name: "Rumah Sakit Kasih Ibu Surakarta",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_g.webp`,
      name: "Partai Gerindra Semarang",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_g.webp`,
      name: "Poltekkes Kemenkes Semarang",
    },
    {
      logo: `${IMAGES_PATH}/clients/bpjs.png`,
      logoGray: `${IMAGES_PATH}/clients/bpjs_g.webp`,
      name: "BPJS Kesehatan",
    },
  ],
  iconicClients: [
    {
      logo: `${IMAGES_PATH}/clients/rski.png`,
      logoGray: `${IMAGES_PATH}/clients/rski_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/bpjs.png`,
      logoGray: `${IMAGES_PATH}/clients/bpjs_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_gray.png`,
      name: "Lorem Ipsum",
    },
  ],
  clientStories: [
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
  ],
  services: {
    title: {
      id: "Solusi Tepat untuk Setiap Tantangan!",
      en: "The Right Solutions for Every Challenge!",
    },
    intro: {
      id: "Does the above problem sound familiar to you? Exium got you covered",
      en: "Does the above problem sound familiar to you? Exium got you covered",
    },
    list: [
      {
        icon: Devices,
        problem: {
          id: "Limited Access to Apps on Specific Platforms?",
          en: "Limited access to apps on specific platforms.",
        },
        problem2: {
          id: "Limited access to apps on specific platforms.",
          en: "Limited access to apps on specific platforms.",
        },
        solution: {
          id: "Platform-Agnostic PWA That's Easy to Manage",
          en: "Platform-Agnostic PWA That's Easy to Manage",
        },
        description: {
          id: "Struggling with apps that are limited to desktop or specific platforms? We transform the way your apps are accessed. With a web app that can turn into a PWA, you can provide a seamless experience across all devices, whether desktop or mobile, without the hassle of developing separate native apps. It's more flexible, cost-effective, and efficient.",
          en: "Struggling with apps that are limited to desktop or specific platforms? We transform the way your apps are accessed. With a web app that can turn into a PWA, you can provide a seamless experience across all devices, whether desktop or mobile, without the hassle of developing separate native apps. It's more flexible, cost-effective, and efficient.",
        },
        notes: [
          {
            label: { id: "PWA", en: "PWA" },
            description: {
              id: "Progressive Web Apps (PWAs) are web-based apps designed to look and function like native apps on both mobile and desktop devices. With PWAs, users can access apps directly from their browsers without downloading them from app stores, but still enjoy features like shortcuts on their home screens, push notifications, and even offline use. PWAs provide fast, responsive, and flexible experiences across platforms at a lower development cost than native apps.",
              en: "Progressive Web Apps (PWAs) are web-based apps designed to look and function like native apps on both mobile and desktop devices. With PWAs, users can access apps directly from their browsers without downloading them from app stores, but still enjoy features like shortcuts on their home screens, push notifications, and even offline use. PWAs provide fast, responsive, and flexible experiences across platforms at a lower development cost than native apps.",
            },
          },
          {
            label: { id: "Platform-Agnostic", en: "Platform-Agnostic" },
            description: {
              id: "Platform-agnostic refers to a technology or system that can operate on various platforms or operating systems without being dependent on a specific environment. For example, a platform-agnostic app can run on Windows, macOS, and Linux without major modifications, offering greater flexibility for users with different operating systems. This ensures higher interoperability across devices and ecosystems, reaching a wider audience.",
              en: "Platform-agnostic refers to a technology or system that can operate on various platforms or operating systems without being dependent on a specific environment. For example, a platform-agnostic app can run on Windows, macOS, and Linux without major modifications, offering greater flexibility for users with different operating systems. This ensures higher interoperability across devices and ecosystems, reaching a wider audience.",
            },
          },
        ],
      },
      {
        icon: ChartLineDown,
        problem: {
          id: "Difficult to Manage and Scale Your App?",
          en: "Difficult to manage and scale your app.",
        },
        problem2: {
          id: "Difficult to manage and scale your app.",
          en: "Difficult to manage and scale your app.",
        },
        solution: {
          id: "Modular System That's Easy to Maintain and Expand",
          en: "Modular System That's Easy to Maintain and Expand",
        },
        description: {
          id: "Struggling with apps that are hard to manage and scale? Our modular approach helps divide your app into small, independent components, making maintenance, updates, and improvements easier without affecting the entire system. With this approach, your app can evolve over time, and new features can be added without disrupting existing functionality.",
          en: "Struggling with apps that are hard to manage and scale? Our modular approach helps divide your app into small, independent components, making maintenance, updates, and improvements easier without affecting the entire system. With this approach, your app can evolve over time, and new features can be added without disrupting existing functionality.",
        },
        notes: [
          {
            label: { id: "Modular", en: "Modular" },
            description: {
              id: "A modular approach to app development means breaking the app into small, self-contained components that function independently. Each module performs a specific function, so it can be managed, updated, or fixed without affecting the rest of the system. This approach makes development more flexible and scalable, allowing for easy feature additions or updates without disturbing other components.",
              en: "A modular approach to app development means breaking the app into small, self-contained components that function independently. Each module performs a specific function, so it can be managed, updated, or fixed without affecting the rest of the system. This approach makes development more flexible and scalable, allowing for easy feature additions or updates without disturbing other components.",
            },
          },
        ],
      },
      {
        icon: DeviceMobile,
        problem: {
          id: "App Not Responsive and Hard to Use on Mobile?",
          en: "App not responsive and hard to use on mobile.",
        },
        problem2: {
          id: "App not responsive and hard to use on mobile.",
          en: "App not responsive and hard to use on mobile.",
        },
        solution: {
          id: "Responsive Design and Mobile Optimization",
          en: "Responsive Design and Mobile Optimization",
        },
        description: {
          id: "Apps that aren't responsive on mobile devices can negatively impact user satisfaction and retention. We offer responsive design that automatically adjusts the app’s layout to fit different screen sizes, ensuring a comfortable experience on all devices. Additionally, we optimize mobile performance with smart memory management and caching, making apps run faster, even with limited internet connectivity.",
          en: "Apps that aren't responsive on mobile devices can negatively impact user satisfaction and retention. We offer responsive design that automatically adjusts the app’s layout to fit different screen sizes, ensuring a comfortable experience on all devices. Additionally, we optimize mobile performance with smart memory management and caching, making apps run faster, even with limited internet connectivity.",
        },
        notes: [
          {
            label: { id: "Responsive", en: "Responsive" },
            description: {
              id: "Responsiveness is the ability of an interface or app design to adapt its layout to different screen sizes and orientations. Responsive design automatically adjusts, resizes, or hides certain elements to ensure ease of access and aesthetics across various devices. It's crucial for enhancing user experience, ensuring optimal display, and supporting cross-device accessibility without the need to develop separate apps for each screen type.",
              en: "Responsiveness is the ability of an interface or app design to adapt its layout to different screen sizes and orientations. Responsive design automatically adjusts, resizes, or hides certain elements to ensure ease of access and aesthetics across various devices. It's crucial for enhancing user experience, ensuring optimal display, and supporting cross-device accessibility without the need to develop separate apps for each screen type.",
            },
          },
        ],
      },
      {
        icon: DesktopTower,
        problem: {
          id: "Difficulty Managing Growing User Data?",
          en: "Difficulty managing growing user data.",
        },
        problem2: {
          id: "Difficulty managing growing user data.",
          en: "Difficulty managing growing user data.",
        },
        solution: {
          id: "Efficient Data Management with Cloud-Based Systems",
          en: "Efficient Data Management with Cloud-Based Systems",
        },
        description: {
          id: "As user data continues to grow, managing and storing data becomes a significant challenge. We offer cloud-based data management solutions that provide secure, easy-to-access, and scalable storage. This ensures data is safe while enabling real-time data analysis to help you understand user needs and create effective business strategies.",
          en: "As user data continues to grow, managing and storing data becomes a significant challenge. We offer cloud-based data management solutions that provide secure, easy-to-access, and scalable storage. This ensures data is safe while enabling real-time data analysis to help you understand user needs and create effective business strategies.",
        },
        notes: [
          {
            label: { id: "Cloud", en: "Cloud" },
            description: {
              id: "Cloud computing is a service model that provides computing resources, such as storage, servers, databases, networking, and software over the internet. With cloud services, users can access and store data and run applications remotely, without needing to own or manage physical infrastructure. Cloud computing offers flexibility, cost savings, increased efficiency, and allows collaboration and accessibility from any device or location.",
              en: "Cloud computing is a service model that provides computing resources, such as storage, servers, databases, networking, and software over the internet. With cloud services, users can access and store data and run applications remotely, without needing to own or manage physical infrastructure. Cloud computing offers flexibility, cost savings, increased efficiency, and allows collaboration and accessibility from any device or location.",
            },
          },
        ],
      },
    ],
  },
  aboutUs: {
    title: {
      id: "Ketahui Lebih Banyak Tentang Exium",
      en: "Get to Know More About Exium",
    },
    intro: {
      id: "Exium lahir dari hasrat untuk mengubah tantangan teknologi menjadi peluang transformasi. Didirikan oleh para profesional berpengalaman di bidang digital, kami memahami bahwa setiap bisnis memiliki potensi unik yang menunggu untuk diberdayakan melalui teknologi canggih.",
      en: "Exium was born from a passion to transform technological challenges into opportunities for digital transformation. Founded by experienced professionals in the digital realm, we understand that every business has a unique potential waiting to be empowered through cutting-edge technology.",
    },
    intro2: {
      id: "Perjalanan kami dimulai dengan sebuah visi sederhana namun kuat: membuat teknologi dapat diakses dan bermakna bagi setiap organisasi. Kami tidak sekadar menyediakan solusi, tetapi membangun kemitraan strategis yang mendorong pertumbuhan dan inovasi berkelanjutan.",
      en: "Our journey began with a simple yet powerful vision: to make technology accessible and meaningful for every organization. We don't just provide solutions; we build strategic partnerships that drive sustainable growth and innovation.",
    },
    intro3: {
      id: "Dengan fokus pada kolaborasi, keahlian mendalam, dan komitmen terhadap kepuasan klien, Exium telah membantu puluhan perusahaan dari berbagai industri mengoptimalkan potensi digital mereka. Setiap proyek bagi kami adalah kesempatan untuk menciptakan perubahan positif.",
      en: "With a focus on collaboration, deep expertise, and commitment to client satisfaction, Exium has helped dozens of companies across various industries optimize their digital potential. For us, every project is an opportunity to create positive change.",
    },
    mission: {
      id: "Misi kami adalah membantu bisnis dari berbagai industri bertransformasi secara digital dengan layanan yang andal, mudah digunakan, dan scalable. Dengan Exium, Anda mendapatkan lebih dari sekadar solusi teknologi—Anda mendapatkan tim yang peduli dengan pertumbuhan dan kesuksesan bisnis Anda.",
      en: "Our mission is to help businesses across industries digitally transform with reliable, user-friendly, and scalable services. With Exium, you get more than just a technology solution—you get a team that cares about your business growth and success.",
    },
    vision: {
      id: "Visi kami adalah menciptakan masa depan digital yang inklusif, di mana teknologi mempermudah kehidupan dan membuka peluang baru bagi semua orang.",
      en: "Our vision is to create an inclusive digital future, where technology makes life easier and opens up new opportunities for everyone.",
    },
    imagesCollase: [
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/reza.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/reza.jpg`,
      `${IMAGES_PATH}/reza.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/team.jpg`,
    ],
    imagesCollase2: [
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/reza.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/reza.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/team.jpg`,
      `${IMAGES_PATH}/reza.jpg`,
    ],
    valuesLabel: {
      id: "Nilai Inti Kami",
      en: "Our Core Values",
    },
    valuesIntro: {
      id: "Nilai-nilai inti kami mencerminkan prinsip-prinsip yang membimbing kami dalam menghadapi perubahan dan tantangan, seperti ubur-ubur yang mampu bertahan dan beradaptasi di lingkungan yang dinamis.",
      en: "Our core values reflect the principles that guide us through change and challenges, much like a jellyfish that survives and adapts in a dynamic environment.",
    },
    values: [
      {
        title: { id: "Adaptif", en: "Adaptive" },
        description: {
          id: "Mampu menyesuaikan diri dengan perubahan dan lingkungan sekitar, seperti ubur-ubur yang beradaptasi di berbagai kondisi laut.",
          en: "Able to adapt to changes and the surrounding environment, like a jellyfish adapting to different sea conditions.",
        },
      },
      {
        title: {
          id: "Tenang dalam Situasi Apapun",
          en: "Calm in Any Situation",
        },
        description: {
          id: "Tetap tenang dan terkendali meskipun di tengah tantangan dan situasi yang penuh tekanan, seperti ubur-ubur yang tenang di arus laut.",
          en: "Remain calm and composed even in the face of challenges and high-pressure situations, like a jellyfish calmly navigating sea currents.",
        },
      },
      {
        title: { id: "Tenang Namun Berbahaya", en: "Calm but Dangerous" },
        description: {
          id: "Tenang namun memiliki kemampuan yang mematikan ketika dibutuhkan, seperti sengatan ubur-ubur yang bisa sangat berbahaya meski tampak lembut.",
          en: "Calm but with potentially lethal capabilities when needed, like the sting of a jellyfish that can be extremely dangerous despite its soft appearance.",
        },
      },
      {
        title: { id: "Mengalir Bersama Arus", en: "Flow with the Current" },
        description: {
          id: "Mampu mengikuti arus dan menerima keadaan tanpa kehilangan tujuan, tetapi tetap bisa memanfaatkan kesempatan dari aliran yang ada.",
          en: "Able to go with the flow and accept circumstances without losing purpose, while still taking advantage of opportunities in the current.",
        },
      },
      {
        title: {
          id: "Bertahan dalam Ketidakpastian",
          en: "Resilient in Uncertainty",
        },
        description: {
          id: "Mampu bertahan di lingkungan yang tidak pasti dan sulit, seperti ubur-ubur yang bertahan di lautan yang terus berubah.",
          en: "Able to survive in uncertain and challenging environments, like a jellyfish enduring the ever-changing seas.",
        },
      },
      {
        title: { id: "Sederhana namun Efektif", en: "Simple yet Effective" },
        description: {
          id: "Memiliki struktur yang sederhana namun sangat efektif dalam menjalankan fungsinya, seperti ubur-ubur yang memiliki anatomi sederhana tetapi tetap bertahan dengan efisiensi tinggi.",
          en: "Possessing a simple structure yet highly effective in fulfilling its role, like a jellyfish with a simple anatomy but exceptional efficiency.",
        },
      },
    ],
    teamLabel: {
      id: "Tim Kami",
      en: "Our Team",
    },
    teamIntro: {
      id: "Tim kami terdiri dari individu-individu yang berdedikasi dan ahli di bidangnya, bekerja bersama untuk mencapai tujuan bersama dengan semangat kolaborasi.",
      en: "Our team is made up of dedicated individuals with expertise in their fields, working together to achieve shared goals with a spirit of collaboration.",
    },
    serving: {
      title: {
        id: "Melayani Klien di Seluruh Dunia",
        en: "Serving Clients Worldwide",
      },
      description: {
        id: "Berdomisili di Indonesia, kami telah bekerja dengan klien dari 5 benua dan 11 negara. Kami umumnya bekerja secara remote, namun siap bepergian jika dibutuhkan.",
        en: "Based in Indonesia, we've collaborated with clients across 5 continents and 11 countries. While we usually work remotely, we're always ready to travel when needed.",
      },
    },
  },
  teams: [
    {
      name: "Naufal Ilyas Abdul Hakim",
      image: `${IMAGES_PATH}/teams/naufal.png`,
      role: "CEO",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/prst.b.y/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
        en: "Believe in yourself, take on your challenges",
      },
    },
    {
      name: "Reza Hashfi Hawari",
      image: `${IMAGES_PATH}/teams/reza.png`,
      role: "President",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/reza-hashfi-hawari-b80549202/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/rezahhawari/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Jatuh bukanlah suatu kegagalan. Kegagalan datang ketika Anda tetap berada di tempat Anda terjatuh.",
        en: "Faling down is not a failure. Failure comes when you stay where you have fallen.",
      },
    },
    {
      name: "Zaenal Abidin",
      image: `${IMAGES_PATH}/teams/zaenal.png`,
      role: "Lead Engineer",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/prst.b.y/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
        en: "Believe in yourself, take on your challenges",
      },
    },
    {
      name: "Azam",
      image: `${IMAGES_PATH}/teams/reza.png`,
      role: "UI/UX Designer",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/prst.b.y/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
        en: "Believe in yourself, take on your challenges",
      },
    },
    {
      name: "Fatwa Linovera",
      image: `${IMAGES_PATH}/teams/sulenq.png`,
      role: "Frontend Developer",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/fatwa-linovera-620672150/",
        },
        // {
        //   label: "Instagram",
        //   icon: RiInstagramFill,
        //   link: "https://www.instagram.com/_sulenq/",
        // },
        {
          label: "Website",
          icon: Globe,
          link: "https://fatwalinovera.netlify.app/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Satu-satunya kebijaksanaan sejati adalah mengetahui bahwa Anda tidak tahu apa-apa",
        en: "The only true wisdom is in knowing you know nothing",
      },
    },
  ],
  techstack: [
    {
      name: "HTML",
      logo: `${IMAGES_PATH}/techstack/html.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/html.png`,
    },
    {
      name: "CSS",
      logo: `${IMAGES_PATH}/techstack/css.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/css.png`,
    },
    {
      name: "React",
      logo: `${IMAGES_PATH}/techstack/react.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/react.png`,
    },
    {
      name: "Javascript",
      logo: `${IMAGES_PATH}/techstack/js.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/js.png`,
    },
    {
      name: "Typescript",
      logo: `${IMAGES_PATH}/techstack/ts.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/ts.png`,
    },
    {
      name: "ChakraUI",
      logo: `${IMAGES_PATH}/techstack/chakraui.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/chakraui.png`,
    },
    {
      name: "Zustand",
      logo: `${IMAGES_PATH}/techstack/zustand.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/zustand.png`,
    },
    {
      name: "Axios",
      logo: `${IMAGES_PATH}/techstack/axios.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/axios.png`,
    },
    {
      name: "GSAP",
      logo: `${IMAGES_PATH}/techstack/gsap.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/gsap.png`,
    },
    {
      name: "Laravel",
      logo: `${IMAGES_PATH}/techstack/laravel.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/laravel.png`,
    },
    {
      name: "PHP",
      logo: `${IMAGES_PATH}/techstack/php.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/php.png`,
    },
    {
      name: "MySQL",
      logo: `${IMAGES_PATH}/techstack/mysql.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/mysql.png`,
    },
    {
      name: "Postman",
      logo: `${IMAGES_PATH}/techstack/postman.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/postman.png`,
    },
    {
      name: "Figma",
      logo: `${IMAGES_PATH}/techstack/figma.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/figma.png`,
    },
    {
      name: "CorelDRAW",
      logo: `${IMAGES_PATH}/techstack/corel.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/corel.png`,
    },
    {
      name: "Phosphor Icon",
      logo: `${IMAGES_PATH}/techstack/phosphoricon.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/phosphoricon.png`,
    },
  ],
  faqs: {
    title: {
      id: "Pertanyaan yang Sering Diajukan",
      en: "Frequently Asked Questions",
    },
    summary: {
      id: "Temukan jawaban untuk pertanyaan umum tentang layanan kami, proses kerja, dan informasi penting lainnya di sini. Kami siap membantu Anda dengan semua yang Anda butuhkan.",
      en: "Find answers to common questions about our services, workflow, and other important information here. We are ready to assist you with everything you need.",
    },
    faqs: [
      {
        title: {
          id: "Lorem ipsum dolor sit amet?",
          en: "Lorem ipsum dolor sit amet?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, urna vel tempor dictum, velit eros viverra mi, nec varius lorem ipsum ut lectus. Suspendisse potenti. Phasellus et volutpat elit. Maecenas vulputate semper mi, ut malesuada mi auctor in.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, urna vel tempor dictum, velit eros viverra mi, nec varius lorem ipsum ut lectus. Suspendisse potenti. Phasellus et volutpat elit. Maecenas vulputate semper mi, ut malesuada mi auctor in.",
        },
      },
      {
        title: {
          id: "Curabitur suscipit urna vel tempor dictum?",
          en: "Curabitur suscipit urna vel tempor dictum?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor nec bibendum interdum, arcu urna dapibus metus, at gravida ex mi id nulla. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Curabitur euismod fermentum urna.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor nec bibendum interdum, arcu urna dapibus metus, at gravida ex mi id nulla. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Curabitur euismod fermentum urna.",
        },
      },
      {
        title: {
          id: "Morbi euismod nulla a neque cursus?",
          en: "Morbi euismod nulla a neque cursus?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nulla a neque cursus, sed viverra augue tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nibh ut vulputate accumsan, dui sapien maximus eros, vitae sagittis velit eros sed mauris.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nulla a neque cursus, sed viverra augue tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nibh ut vulputate accumsan, dui sapien maximus eros, vitae sagittis velit eros sed mauris.",
        },
      },
      {
        title: {
          id: "Vestibulum ante ipsum primis in faucibus?",
          en: "Vestibulum ante ipsum primis in faucibus?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Praesent tincidunt, sapien nec sollicitudin feugiat, arcu sem venenatis nisi, id interdum est nunc non tortor. Ut vitae lorem eget lacus consequat auctor. Donec blandit sollicitudin ex nec aliquet.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Praesent tincidunt, sapien nec sollicitudin feugiat, arcu sem venenatis nisi, id interdum est nunc non tortor. Ut vitae lorem eget lacus consequat auctor. Donec blandit sollicitudin ex nec aliquet.",
        },
      },
      {
        title: {
          id: "Nullam sollicitudin libero sit amet?",
          en: "Nullam sollicitudin libero sit amet?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Maecenas id tristique ligula. Ut cursus, nisl a convallis condimentum, ligula orci suscipit odio, in tempus mauris nisl vel ligula.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Maecenas id tristique ligula. Ut cursus, nisl a convallis condimentum, ligula orci suscipit odio, in tempus mauris nisl vel ligula.",
        },
      },
    ],
  },
  contact: {
    address: "Remotely, based on Semarang, Central Java, Indonesia",
    email: "contact@exium.com",
    phone: "+6282352222001",
    wa: "https://wa.me/6282352222001?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20lebih%20lanjut%20mengenai%20aplikasi%20HR%20yang%20Anda%20tawarkan.%20Apakah%20saya%20bisa%20mendapatkan%20informasi%20lebih%20detail%20atau%20jadwal%20untuk%20berdiskusi%20lebih%20lanjut%3F%20Terima%20kasih%21",
  },
  sosmeds: {
    label: { id: "Sosial Media", en: "Social Links" },
    list: [
      {
        name: "Whatsappp",
        icon: WhatsappLogo,
        number: "+6285726218466",
        link: "https://wa.me/6282352222001?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20lebih%20lanjut%20mengenai%20aplikasi%20HR%20yang%20Anda%20tawarkan.%20Apakah%20saya%20bisa%20mendapatkan%20informasi%20lebih%20detail%20atau%20jadwal%20untuk%20berdiskusi%20lebih%20lanjut%3F%20Terima%20kasih%21",
        disabled: false,
      },
      {
        name: "Instagram",
        icon: InstagramLogo,
        link: "",
        disabled: true,
      },
      {
        name: "LinkedIn",
        icon: LinkedinLogo,
        link: "",
        disabled: true,
      },
    ],
  },
  footer: {
    cta: {
      title: {
        id: "Butuh Bantuan atau Ingin Konsultasi Lebih Lanjut?",
        en: "Need Help or Want Further Consultation?",
      },
      desc: {
        id: "Klik 'Hubungi Kami di WhatsApp' untuk berbicara langsung dengan tim kami yang siap memberikan solusi dan menjawab segala pertanyaan Anda dengan cepat.",
        en: "Click 'Contact Us on WhatsApp' to chat directly with our team, ready to provide solutions and answer all your questions quickly.",
      },
      buttonLabel: {
        id: "Hubungi Kami di WhatsApp",
        en: "Contact Us on WhatsApp",
      },
    },
    navigationLabel: {
      id: "Navigasi",
      en: "Navigation",
    },
    contactLabel: {
      id: "Kontak",
      en: "Contant",
    },
    viewMapsLabel: {
      id: "Lihat Alamat di Maps",
      en: "View Address on Maps",
    },
  },
};

export default contents;
