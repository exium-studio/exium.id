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
import { ASSETS_PATH, IMAGES_PATH, SVGS_PATH } from "./path";

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
          image: `${SVGS_PATH}/brainstorming.svg`,
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
          image: `${SVGS_PATH}/designing.svg`,
        },
        {
          title: {
            id: "Implementasi Solusi",
            en: "Solution Implementation",
          },
          description: {
            id: "Tim profesional Exium mengimplementasikan solusi webapp dengan pendekatan terstruktur dan terukur. Kami memastikan proses integrasi yang lancar, minim gangguan operasional, serta menyediakan pelatihan lengkap dan dukungan berkelanjutan untuk memastikan adaptasi teknologi baru berjalan optimal dalam organisasi Anda.",
            en: "Exium's professional team implements webapp solutions with a structured and measured approach. We ensure seamless integration, minimal operational disruption, and provide comprehensive training and ongoing support to ensure optimal adaptation of new technologies within your organization.",
          },
          icon: Devices,
          image: `${SVGS_PATH}/coding.svg`,
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
          image: `${SVGS_PATH}/coding.svg`,
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
      // Poltekkes
      {
        index: 0,
        category: 1,
        client: {
          name: "Poltekkes",
          logo: `${ASSETS_PATH}/images/clients/poltekkes.png`,
        },
        color: "#34BFAC",
        thumbnail: `${IMAGES_PATH}/works/silaban/thumbnail.png`,
        thumbnail_gray: `${IMAGES_PATH}/works/silaban/thumbnail_gray.png`,
        image_1: `${IMAGES_PATH}/works/silaban/image_1.png`,
        image_2: `${IMAGES_PATH}/works/silaban/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/silaban/featured_image.png`,
        title: "Silaban",
        tag: { id: "Dashboard", en: "Dashboard" },
        summary: {
          id: "Platform yang memudahkan transaksi pengujian laboratorium",
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
            id: "Laboratorium di kampus Poltekkes saat ini masih mengandalkan proses manual untuk menerima dan memproses transaksi pengujian. Client yang ingin melakukan pengujian harus datang ke laboratorium, mengisi formulir fisik, dan menyerahkan sampel secara langsung. Proses ini memakan waktu, rentan terhadap kesalahan, dan kurang efisien, terutama ketika jumlah permintaan pengujian meningkat.",
            en: "The laboratory at the Poltekkes campus currently relies on manual processes to receive and process testing transactions. Clients who wish to conduct tests must come to the laboratory, fill out physical forms, and submit samples in person. This process is time-consuming, prone to errors, and inefficient, especially when the number of testing requests increases.",
          },
          {
            id: "Selain itu, komunikasi antara client dan laboratorium seringkali terhambat karena ketiadaan sistem terpusat untuk melacak status pengujian. Client tidak dapat memantau progres pengujian secara real-time, sementara staf laboratorium kesulitan mengelola antrian sampel dan hasil pengujian yang harus dikirim kembali ke client.",
            en: "In addition, communication between clients and the laboratory is often hindered by the lack of a centralized system to track testing status. Clients cannot monitor the progress of their tests in real-time, while laboratory staff struggle to manage sample queues and test results that need to be sent back to clients.",
          },
          {
            id: "Dengan berkembangnya teknologi dan kebutuhan akan efisiensi, laboratorium Poltekkes membutuhkan aplikasi transaksi pengujian yang dapat memudahkan client dalam menginput sampel (seperti foto atau data lainnya), melacak status pengujian, dan menerima hasil pengujian secara digital. Aplikasi ini juga harus terintegrasi dengan peralatan laboratorium (pesawat-pesawat) untuk memastikan proses pengujian berjalan lancar.",
            en: "With the advancement of technology and the need for efficiency, the Poltekkes laboratory requires a testing transaction application that can facilitate clients in submitting samples (such as photos or other data), tracking testing status, and receiving test results digitally. This application must also be integrated with laboratory equipment (devices) to ensure a smooth testing process.",
          },
          {
            id: "Aplikasi ini diharapkan dapat meningkatkan efisiensi operasional laboratorium, mengurangi kesalahan administrasi, dan memberikan pengalaman yang lebih baik bagi client dengan menyediakan akses mudah dan transparan ke informasi pengujian.",
            en: "This application is expected to improve the laboratory's operational efficiency, reduce administrative errors, and provide a better experience for clients by offering easy and transparent access to testing information.",
          },
        ],
        narratives: [
          {
            title: {
              id: "Input Sampel Secara Digital",
              en: "Digital Sample Input",
            },
            contents: [
              {
                id: "Client dapat menginput sampel (seperti foto atau data lainnya) secara digital melalui aplikasi. Sampel yang diinput akan langsung terdaftar dalam sistem laboratorium, mengurangi kebutuhan untuk mengisi formulir fisik atau datang ke laboratorium secara langsung.",
                en: "Clients can input samples (such as photos or other data) digitally through the application. The submitted samples will be immediately registered in the laboratory system, reducing the need to fill out physical forms or visit the laboratory in person.",
              },
              {
                id: "Fitur ini memudahkan client untuk mengirimkan sampel kapan saja dan dari mana saja, meningkatkan fleksibilitas dan efisiensi proses pengujian.",
                en: "This feature makes it easier for clients to submit samples anytime and from anywhere, increasing the flexibility and efficiency of the testing process.",
              },
            ],
          },
          {
            title: {
              id: "Integrasi dengan Peralatan Laboratorium",
              en: "Integration with Laboratory Equipment",
            },
            contents: [
              {
                id: "Aplikasi ini terintegrasi dengan peralatan laboratorium (pesawat-pesawat) untuk memproses sampel yang diinput oleh client. Setelah sampel diterima, sistem akan secara otomatis mengalokasikan pengujian ke peralatan yang sesuai, memastikan proses pengujian berjalan lancar dan efisien.",
                en: "This application is integrated with laboratory equipment (devices) to process samples submitted by clients. Once the samples are received, the system will automatically allocate the tests to the appropriate equipment, ensuring a smooth and efficient testing process.",
              },
              {
                id: "Dengan integrasi ini, staf laboratorium dapat fokus pada analisis hasil tanpa perlu khawatir tentang manajemen antrian sampel.",
                en: "With this integration, laboratory staff can focus on analyzing results without worrying about sample queue management.",
              },
            ],
          },
          {
            title: {
              id: "Pelacakan Status Pengujian Secara Real-Time",
              en: "Real-Time Testing Status Tracking",
            },
            contents: [
              {
                id: "Client dapat memantau status pengujian mereka secara real-time melalui aplikasi. Setiap tahap pengujian, mulai dari penerimaan sampel, proses pengujian, hingga penyelesaian hasil, akan ditampilkan secara transparan.",
                en: "Clients can monitor the status of their tests in real-time through the application. Each stage of the testing process, from sample receipt, testing process, to result completion, will be displayed transparently.",
              },
              {
                id: "Fitur ini memberikan kepastian dan kenyamanan bagi client, mengurangi kebutuhan untuk menghubungi laboratorium secara manual.",
                en: "This feature provides certainty and convenience for clients, reducing the need to contact the laboratory manually.",
              },
            ],
          },
          {
            title: {
              id: "Penerimaan Hasil Pengujian Secara Digital",
              en: "Digital Test Result Delivery",
            },
            contents: [
              {
                id: "Setelah pengujian selesai, hasil pengujian akan dikirimkan secara digital melalui aplikasi. Client dapat mengunduh hasil pengujian dalam format PDF atau format lainnya yang sesuai.",
                en: "Once the testing is completed, the test results will be delivered digitally through the application. Clients can download the test results in PDF format or other suitable formats.",
              },
              {
                id: "Fitur ini memastikan client menerima hasil pengujian dengan cepat dan aman, tanpa perlu menunggu laporan fisik.",
                en: "This feature ensures that clients receive test results quickly and securely, without waiting for physical reports.",
              },
            ],
          },
          {
            title: {
              id: "Manajemen Transaksi dan Pembayaran",
              en: "Transaction and Payment Management",
            },
            contents: [
              {
                id: "Aplikasi ini juga dilengkapi dengan fitur manajemen transaksi dan pembayaran. Client dapat melihat rincian biaya pengujian, melakukan pembayaran secara online, dan menerima invoice digital melalui aplikasi.",
                en: "This application is also equipped with transaction and payment management features. Clients can view testing cost details, make online payments, and receive digital invoices through the application.",
              },
              {
                id: "Dengan fitur ini, proses administrasi menjadi lebih efisien dan transparan bagi kedua belah pihak, baik client maupun laboratorium.",
                en: "With this feature, the administrative process becomes more efficient and transparent for both parties, both clients and the laboratory.",
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
        image_1: `${IMAGES_PATH}/works/rski_personalia/image_1.png`,
        image_2: `${IMAGES_PATH}/works/rski_personalia/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/rski_personalia/featured_image.png`,
        title: "RSKI Personalia",
        tag: { id: "HRMS", en: "HRMS" },
        summary: {
          id: "Exium membantu manajemen SDM RSKI agar lebih praktis, efisien dan efektif",
          en: "Exium help hospital HR management to be more practical, efficient and effective",
        },
        problem: {
          id: "RSKI Surakarta menghadapi kendala dalam mengelola HR secara manual, seperti kesulitan memantau data karyawan, menghitung payroll, dan aktivitas HR lainnya. Proses manual rentan kesalahan, tidak efisien, dan kurang terintegrasi.",
          en: "RSKI Surakarta faces challenges in manual HR management, such as difficulties in tracking employee data, calculating payroll, and other HR activities. Manual processes are error-prone, inefficient, and lack integration.",
        },
        solution: {
          id: "Manajemen karyawan terpusat | Payroll Otomatis | Absensi Online | Manajemen Cuti | Pelaporan Kinerja | Sistem Terintegrasi | Efisiensi HR | Akurasi Data",
          en: "Centralized Employee Management | Automated Payroll | Online Attendance | Leave Management | Performance Reporting | Integrated System | HR Efficiency | Data Accuracy",
        },
        duration: { id: "6 Bulan", en: "6 Months" },
        background: [
          {
            id: "RSKI Surakarta selama ini mengandalkan sistem manual untuk mengelola aktivitas HR, mulai dari pencatatan data karyawan, perhitungan payroll, hingga manajemen cuti dan absensi. Proses manual ini seringkali memakan waktu dan rentan terhadap kesalahan, terutama ketika data harus diperbarui atau dipindahkan antar divisi. Ketidakselarasan informasi antara divisi HR, keuangan, dan manajemen juga sering terjadi, menghambat pengambilan keputusan yang cepat dan akurat.",
            en: "RSKI Surakarta has relied on manual systems to manage HR activities, ranging from employee data recording, payroll calculations, to leave and attendance management. These manual processes are often time-consuming and prone to errors, especially when data needs to be updated or transferred between departments. Misalignment of information between HR, finance, and management departments also frequently occurs, hindering quick and accurate decision-making.",
          },
          {
            id: "Selain itu, proses perhitungan payroll yang dilakukan secara manual seringkali memicu ketidakakuratan, seperti kesalahan dalam menghitung tunjangan, pajak, atau potongan lainnya. Hal ini tidak hanya berdampak pada keuangan karyawan tetapi juga menambah beban kerja divisi HR yang harus melakukan koreksi berulang kali. Belum lagi, manajemen dokumen karyawan seperti kontrak kerja, sertifikat pelatihan, dan evaluasi kinerja yang masih disimpan secara fisik, membuat pencarian data menjadi lambat dan tidak efisien.",
            en: "In addition, manual payroll calculation processes often lead to inaccuracies, such as errors in calculating allowances, taxes, or other deductions. This not only affects employees' finances but also increases the workload of the HR department, which has to make repeated corrections. Furthermore, employee document management, such as employment contracts, training certificates, and performance evaluations, which are still stored physically, makes data retrieval slow and inefficient.",
          },
          {
            id: "Dengan semakin berkembangnya RSKI Surakarta dan bertambahnya jumlah karyawan, sistem manual yang digunakan saat ini semakin tidak mampu memenuhi kebutuhan operasional. Dibutuhkan solusi yang dapat mendigitalisasi seluruh proses HR, memastikan integrasi data antar divisi, dan meningkatkan efisiensi serta akurasi dalam pengelolaan sumber daya manusia.",
            en: "With the growing development of RSKI Surakarta and the increasing number of employees, the current manual system is becoming increasingly inadequate to meet operational needs. A solution is needed to digitize all HR processes, ensure data integration between departments, and improve efficiency and accuracy in human resource management.",
          },
          {
            id: "Oleh karena itu, RSKI Surakarta membutuhkan sistem HRMS (Human Resource Management System) yang terintegrasi dan modern. Sistem ini diharapkan dapat menyederhanakan proses HR, mengurangi beban kerja administratif, dan memberikan data yang akurat serta real-time untuk mendukung pengambilan keputusan yang lebih baik.",
            en: "Therefore, RSKI Surakarta requires an integrated and modern HRMS (Human Resource Management System). This system is expected to streamline HR processes, reduce administrative workloads, and provide accurate and real-time data to support better decision-making.",
          },
        ],
        narratives: [
          {
            title: {
              id: "Optimalkan Manajemen Karyawan",
              en: "Optimizing Employee Management",
            },
            contents: [
              {
                id: "Aplikasi HRMS RSKI Surakarta memungkinkan manajemen data karyawan secara terpusat dan real-time. Dengan fitur ini, divisi HR dapat dengan mudah mengakses informasi karyawan seperti data pribadi, riwayat pekerjaan, dan pelatihan yang telah diikuti. Hal ini mengurangi waktu yang dihabiskan untuk pencarian data manual dan memastikan akurasi informasi.",
                en: "The HRMS application for RSKI Surakarta enables centralized and real-time employee data management. With this feature, the HR department can easily access employee information such as personal data, work history, and completed training. This reduces time spent on manual data retrieval and ensures information accuracy.",
              },
              {
                id: "Selain itu, aplikasi ini juga dilengkapi dengan fitur manajemen dokumen yang memungkinkan penyimpanan dan pengelolaan file penting seperti kontrak kerja, sertifikat, dan evaluasi kinerja. Semua dokumen dapat diakses kapan saja, meningkatkan efisiensi administrasi.",
                en: "Additionally, the application is equipped with a document management feature that allows the storage and management of important files such as employment contracts, certificates, and performance evaluations. All documents can be accessed anytime, enhancing administrative efficiency.",
              },
            ],
          },
          {
            title: {
              id: "Payroll Otomatis dan Akurat",
              en: "Automated and Accurate Payroll",
            },
            contents: [
              {
                id: "Dengan fitur payroll otomatis, aplikasi HRMS ini memastikan perhitungan gaji, tunjangan, dan pajak karyawan dilakukan secara akurat dan tepat waktu. Sistem ini terintegrasi dengan data absensi dan cuti, sehingga perhitungan payroll selalu sesuai dengan kebijakan perusahaan.",
                en: "With the automated payroll feature, the HRMS application ensures accurate and timely calculation of employee salaries, allowances, and taxes. The system is integrated with attendance and leave data, ensuring payroll calculations always align with company policies.",
              },
              {
                id: "Selain itu, laporan payroll dapat dihasilkan secara otomatis dan dikirim ke departemen keuangan, mengurangi risiko kesalahan manusia dan memudahkan proses audit.",
                en: "Moreover, payroll reports can be generated automatically and sent to the finance department, reducing the risk of human error and simplifying the audit process.",
              },
            ],
          },
          {
            title: {
              id: "Meningkatkan Produktivitas HR",
              en: "Enhancing HR Productivity",
            },
            contents: [
              {
                id: "Aplikasi HRMS ini dilengkapi dengan fitur absensi online dan manajemen cuti yang memudahkan karyawan untuk mengajukan permohonan cuti dan memantau jadwal kerja. Divisi HR dapat menyetujui atau menolak permohonan secara cepat melalui sistem, mengurangi waktu tunggu dan meningkatkan kepuasan karyawan.",
                en: "The HRMS application is equipped with online attendance and leave management features, making it easier for employees to submit leave requests and monitor work schedules. The HR department can approve or reject requests quickly through the system, reducing waiting time and improving employee satisfaction.",
              },
              {
                id: "Dengan semua fitur yang terintegrasi dalam satu platform, aplikasi ini membantu divisi HR fokus pada tugas strategis seperti pengembangan karyawan dan perencanaan SDM, alih-alih terjebak dalam pekerjaan administratif yang repetitif.",
                en: "With all features integrated into one platform, this application helps the HR department focus on strategic tasks such as employee development and workforce planning, rather than being bogged down by repetitive administrative work.",
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
          id: "Absensi Online | Pengajuan Cuti | Tukar Jadwal | Penggajian Otomatis | Sistem Terintegrasi | Manajemen Data Karyawan | Akurasi Data",
          en: "Online Attendance | Leave Application | Change Schedule | Automated Payroll | Integrated System | Employee Data Management | Data Accuracy",
        },
        duration: { id: "6 Bulan", en: "6 Months" },
        background: [
          {
            id: "RSKI Surakarta saat ini menghadapi tantangan dalam mengelola absensi karyawan, pengajuan cuti, dan permintaan perubahan data karyawan yang masih dilakukan secara manual. Proses ini seringkali memakan waktu, rentan terhadap kesalahan, dan kurang efisien. Selain itu, karyawan kesulitan memantau informasi pribadi seperti jadwal kerja, payroll, dan status cuti secara real-time.",
            en: "RSKI Surakarta currently faces challenges in managing employee attendance, leave requests, and employee data change requests, which are still done manually. These processes are often time-consuming, prone to errors, and inefficient. Additionally, employees struggle to monitor personal information such as work schedules, payroll, and leave status in real-time.",
          },
          {
            id: "Dengan meningkatnya jumlah karyawan dan tuntutan operasional yang lebih dinamis, sistem manual yang ada tidak lagi mampu memenuhi kebutuhan karyawan. Karyawan membutuhkan solusi yang memudahkan mereka untuk melakukan absensi, mengajukan cuti, menukar jadwal, dan mengakses informasi penting seperti payroll tanpa harus melalui proses yang rumit.",
            en: "With the increasing number of employees and more dynamic operational demands, the existing manual system is no longer able to meet employee needs. Employees need a solution that makes it easier for them to perform attendance, submit leave requests, swap schedules, and access important information such as payroll without going through complicated processes.",
          },
          {
            id: "Oleh karena itu, RSKI Surakarta membutuhkan aplikasi mobile yang dirancang khusus untuk karyawan. Aplikasi ini akan memungkinkan karyawan untuk melakukan absensi online berbasis geolocation, mengajukan cuti, menukar jadwal, melihat payroll otomatis, mengajukan perubahan data pribadi, dan mengakses fitur-fitur lain yang mendukung kebutuhan sehari-hari mereka.",
            en: "Therefore, RSKI Surakarta requires a mobile application specifically designed for employees. This application will enable employees to perform online attendance based on geolocation, submit leave requests, swap schedules, view automated payroll, request changes to personal data, and access other features that support their daily needs.",
          },
          {
            id: "Aplikasi ini diharapkan dapat meningkatkan efisiensi, transparansi, dan kepuasan karyawan dengan menyediakan akses mudah dan real-time ke informasi yang mereka butuhkan. Dengan demikian, karyawan dapat fokus pada pekerjaan mereka tanpa terganggu oleh proses administratif yang rumit.",
            en: "This application is expected to improve efficiency, transparency, and employee satisfaction by providing easy and real-time access to the information they need. As a result, employees can focus on their work without being distracted by complicated administrative processes.",
          },
        ],
        narratives: [
          {
            title: {
              id: "Absensi Online Berbasis Geolocation",
              en: "Online Attendance Based on Geolocation",
            },
            contents: [
              {
                id: "Aplikasi ini memungkinkan karyawan melakukan absensi online dengan mudah menggunakan fitur geolocation. Sistem akan memastikan bahwa absensi hanya dapat dilakukan di lokasi yang telah ditentukan, meningkatkan akurasi dan mengurangi potensi kecurangan.",
                en: "This application allows employees to perform online attendance easily using geolocation features. The system ensures that attendance can only be recorded at designated locations, improving accuracy and reducing the potential for fraud.",
              },
              {
                id: "Dengan fitur ini, karyawan tidak perlu lagi mengisi formulir absensi manual atau khawatir tentang kesalahan pencatatan. Semua data absensi akan tersimpan secara otomatis dan dapat diakses oleh divisi HR untuk keperluan pelaporan.",
                en: "With this feature, employees no longer need to fill out manual attendance forms or worry about recording errors. All attendance data will be stored automatically and can be accessed by the HR department for reporting purposes.",
              },
            ],
          },
          {
            title: {
              id: "Pengajuan Cuti dan Tukar Jadwal",
              en: "Leave Requests and Schedule Swaps",
            },
            contents: [
              {
                id: "Karyawan dapat mengajukan cuti atau permintaan tukar jadwal langsung melalui aplikasi. Permintaan akan dikirim ke divisi HR untuk disetujui atau ditolak, dengan notifikasi real-time yang memudahkan karyawan memantau status pengajuan mereka.",
                en: "Employees can submit leave requests or schedule swap requests directly through the application. Requests will be sent to the HR department for approval or rejection, with real-time notifications making it easy for employees to track the status of their submissions.",
              },
              {
                id: "Fitur ini mengurangi waktu tunggu dan memastikan proses pengajuan cuti atau tukar jadwal menjadi lebih transparan dan efisien.",
                en: "This feature reduces waiting time and ensures that the process of submitting leave or schedule swap requests becomes more transparent and efficient.",
              },
            ],
          },
          {
            title: {
              id: "Akses Payroll Otomatis",
              en: "Automated Payroll Access",
            },
            contents: [
              {
                id: "Karyawan dapat melihat slip gaji mereka secara real-time melalui aplikasi. Informasi seperti gaji pokok, tunjangan, potongan pajak, dan bonus akan ditampilkan dengan jelas, memudahkan karyawan untuk memantau keuangan mereka.",
                en: "Employees can view their pay slips in real-time through the application. Information such as basic salary, allowances, tax deductions, and bonuses will be displayed clearly, making it easier for employees to monitor their finances.",
              },
              {
                id: "Dengan fitur ini, karyawan tidak perlu lagi menunggu laporan bulanan atau menghubungi divisi HR untuk mendapatkan informasi payroll.",
                en: "With this feature, employees no longer need to wait for monthly reports or contact the HR department to obtain payroll information.",
              },
            ],
          },
          {
            title: {
              id: "Pengajuan Perubahan Data Karyawan",
              en: "Employee Data Change Requests",
            },
            contents: [
              {
                id: "Karyawan dapat mengajukan perubahan data pribadi seperti alamat, nomor telepon, atau informasi bank melalui aplikasi. Permintaan akan diverifikasi oleh divisi HR sebelum diperbarui dalam sistem, memastikan keakuratan data.",
                en: "Employees can request changes to personal data such as address, phone number, or bank information through the application. Requests will be verified by the HR department before being updated in the system, ensuring data accuracy.",
              },
              {
                id: "Fitur ini memudahkan karyawan untuk memperbarui informasi mereka tanpa harus melalui proses administrasi yang rumit.",
                en: "This feature makes it easier for employees to update their information without going through complicated administrative processes.",
              },
            ],
          },
          {
            title: {
              id: "Fitur Pendukung Kebutuhan Karyawan",
              en: "Features Supporting Employee Needs",
            },
            contents: [
              {
                id: "Aplikasi ini juga dilengkapi dengan fitur-fitur tambahan seperti notifikasi jadwal kerja, pengingat cuti, dan akses ke dokumen penting seperti kontrak kerja dan sertifikat pelatihan. Semua fitur dirancang untuk meningkatkan kenyamanan dan produktivitas karyawan.",
                en: "This application is also equipped with additional features such as work schedule notifications, leave reminders, and access to important documents such as employment contracts and training certificates. All features are designed to enhance employee comfort and productivity.",
              },
              {
                id: "Dengan aplikasi ini, karyawan dapat mengelola kebutuhan administratif mereka secara mandiri, mengurangi ketergantungan pada divisi HR dan meningkatkan efisiensi kerja.",
                en: "With this application, employees can manage their administrative needs independently, reducing reliance on the HR department and improving work efficiency.",
              },
            ],
          },
        ],
      },

      // Gis politik
      {
        index: 3,
        category: 2,
        client: {
          name: "Bandung",
          logo: `${ASSETS_PATH}/images/clients/rski.png`,
        },
        color: "#3e97ff",
        thumbnail: `${IMAGES_PATH}/works/gis_politik/thumbnail.png`,
        thumbnail_gray: `${IMAGES_PATH}/works/gis_politik/thumbnail_gray.png`,
        image_1: `${IMAGES_PATH}/works/gis_politik/image_1.png`,
        image_2: `${IMAGES_PATH}/works/gis_politik/image_1.png`,
        featuredImage: `${IMAGES_PATH}/works/gis_politik/featured_image.png`,
        title: "Geo Information System",
        tag: { id: "HRIS", en: "HRIS" },
        summary: {
          id: "Data perolehan suara yang terdigitalisasi dengan visual peta",
          en: "Digitized vote acquisition data with map visuals",
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
            id: "Selama ini, data perolehan suara dari berbagai pemilihan seperti PEMILU dan PILKADA masih dikelola secara manual dan terpisah-pisah. Proses pengumpulan, pencatatan, dan analisis data seringkali memakan waktu, rentan terhadap kesalahan, dan kurang transparan. Selain itu, visualisasi data perolehan suara per daerah (seperti kelurahan) masih terbatas, sehingga sulit untuk memahami tren dan pola suara secara cepat.",
            en: "Currently, vote acquisition data from various elections such as general elections (PEMILU) and regional elections (PILKADA) is still managed manually and in a fragmented manner. The process of collecting, recording, and analyzing data is often time-consuming, prone to errors, and lacks transparency. Additionally, visualization of vote acquisition data per region (such as sub-districts) is still limited, making it difficult to quickly understand voting trends and patterns.",
          },
          {
            id: "Dengan berkembangnya teknologi GIS (Geographic Information System), dibutuhkan solusi yang dapat mendigitalisasi data perolehan suara dan menyajikannya dalam bentuk visual yang interaktif. Aplikasi ini harus mampu menampilkan detail suara per kelurahan, termasuk visualisasi doughnut chart untuk persentase suara partai atau calon, serta warna wilayah berdasarkan partai atau calon yang unggul.",
            en: "With the advancement of GIS (Geographic Information System) technology, a solution is needed to digitize vote acquisition data and present it in an interactive visual form. This application must be able to display vote details per sub-district, including doughnut chart visualizations for party or candidate vote percentages, as well as region colors based on the leading party or candidate.",
          },
          {
            id: "Selain itu, aplikasi ini juga harus memungkinkan pengguna untuk memfilter data berdasarkan tahun dan tipe pemilihan (PEMILU, PILKADA, dll.), serta menambahkan data aktivitas kampanye (seperti status alat peraga, sosialisasi, atau wilayah yang belum didatangi). Fitur ini akan membantu tim kampanye atau pemantau pemilihan dalam mengelola dan menganalisis data secara lebih efektif.",
            en: "In addition, this application must also allow users to filter data by year and election type (PEMILU, PILKADA, etc.), as well as add campaign activity data (such as the status of campaign tools, socialization, or areas that have not been visited). This feature will help campaign teams or election monitors manage and analyze data more effectively.",
          },
          {
            id: "Dengan adanya aplikasi ini, diharapkan proses pengelolaan data pemilihan menjadi lebih efisien, transparan, dan mudah diakses oleh semua pihak yang berkepentingan.",
            en: "With this application, it is hoped that the election data management process will become more efficient, transparent, and accessible to all relevant parties.",
          },
        ],
        narratives: [
          {
            title: {
              id: "Visualisasi Data Perolehan Suara per Kelurahan",
              en: "Vote Acquisition Data Visualization per Sub-District",
            },
            contents: [
              {
                id: "Aplikasi ini menampilkan data perolehan suara per kelurahan dalam bentuk peta interaktif. Setiap kelurahan akan diwarnai berdasarkan partai atau calon yang unggul, memudahkan pengguna untuk melihat pola kemenangan secara geografis.",
                en: "This application displays vote acquisition data per sub-district in an interactive map. Each sub-district will be colored based on the leading party or candidate, making it easier for users to see winning patterns geographically.",
              },
              {
                id: "Pengguna dapat mengklik suatu kelurahan untuk melihat detail perolehan suara, termasuk doughnut chart yang menampilkan persentase suara untuk setiap partai atau calon.",
                en: "Users can click on a sub-district to view detailed vote acquisition, including a doughnut chart displaying the vote percentage for each party or candidate.",
              },
            ],
          },
          {
            title: {
              id: "Filter Data Berdasarkan Tahun dan Tipe Pemilihan",
              en: "Filter Data by Year and Election Type",
            },
            contents: [
              {
                id: "Aplikasi ini dilengkapi dengan fitur filter yang memungkinkan pengguna memilih data berdasarkan tahun pemilihan dan tipe pemilihan (PEMILU, PILKADA, dll.). Hal ini memudahkan analisis data historis dan perbandingan antar pemilihan.",
                en: "This application is equipped with a filter feature that allows users to select data based on the election year and election type (PEMILU, PILKADA, etc.). This facilitates historical data analysis and comparisons between elections.",
              },
              {
                id: "Dengan fitur ini, pengguna dapat fokus pada data yang relevan tanpa terganggu oleh informasi yang tidak diperlukan.",
                en: "With this feature, users can focus on relevant data without being distracted by unnecessary information.",
              },
            ],
          },
          {
            title: {
              id: "Input Data Aktivitas Kampanye",
              en: "Campaign Activity Data Input",
            },
            contents: [
              {
                id: "Aplikasi ini memungkinkan pengguna untuk menambahkan data aktivitas kampanye, seperti status alat peraga (sudah terpasang, belum terpasang), sosialisasi (sudah dilakukan, belum dilakukan), dan wilayah yang belum didatangi. Data ini dapat ditampilkan pada peta untuk memudahkan pemantauan.",
                en: "This application allows users to add campaign activity data, such as the status of campaign tools (installed, not installed), socialization (done, not done), and areas that have not been visited. This data can be displayed on the map for easy monitoring.",
              },
              {
                id: "Fitur ini membantu tim kampanye dalam mengelola strategi dan memastikan semua wilayah terjangkau dengan baik.",
                en: "This feature helps campaign teams manage strategies and ensure all areas are well-covered.",
              },
            ],
          },
          {
            title: {
              id: "Tambah Data Perolehan Suara",
              en: "Add Vote Acquisition Data",
            },
            contents: [
              {
                id: "Pengguna dapat menambahkan data perolehan suara secara manual atau melalui impor file. Data yang ditambahkan akan langsung terintegrasi dengan sistem dan dapat divisualisasikan pada peta.",
                en: "Users can add vote acquisition data manually or through file import. The added data will be immediately integrated into the system and can be visualized on the map.",
              },
              {
                id: "Fitur ini memastikan data selalu diperbarui dan akurat, mendukung pengambilan keputusan yang lebih baik.",
                en: "This feature ensures that data is always updated and accurate, supporting better decision-making.",
              },
            ],
          },
          {
            title: {
              id: "Analisis Data dan Pelaporan",
              en: "Data Analysis and Reporting",
            },
            contents: [
              {
                id: "Aplikasi ini menyediakan fitur analisis data dan pelaporan otomatis. Pengguna dapat menghasilkan laporan perolehan suara, aktivitas kampanye, dan tren pemilihan dalam format PDF atau Excel.",
                en: "This application provides data analysis and automatic reporting features. Users can generate reports on vote acquisition, campaign activities, and election trends in PDF or Excel format.",
              },
              {
                id: "Dengan fitur ini, pengguna dapat dengan mudah membagikan informasi penting kepada pihak terkait atau publik.",
                en: "With this feature, users can easily share important information with relevant parties or the public.",
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
          id: "Akses Terbatas ke Aplikasi di Platform Tertentu?",
          en: "Limited Access to Apps on Specific Platforms?",
        },
        problem2: {
          id: "Akses terbatas ke aplikasi pada platform tertentu.",
          en: "Limited access to apps on specific platforms.",
        },
        solution: {
          id: "Platform-Agnostic PWA yang Mudah Dikelola",
          en: "Platform-Agnostic PWA That's Easy to Manage",
        },
        description: {
          id: "Kesulitan dengan aplikasi yang terbatas pada desktop atau platform tertentu? Kami mengubah cara aplikasi Anda diakses. Dengan aplikasi web yang dapat diubah menjadi PWA, Anda dapat memberikan pengalaman yang lancar di semua perangkat, baik desktop maupun seluler, tanpa perlu repot mengembangkan aplikasi asli yang terpisah. Lebih fleksibel, hemat biaya, dan efisien.",
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
          id: "Sulit Mengelola dan Menskalakan Aplikasi Anda?",
          en: "Difficult to Manage and Scale Your App?",
        },
        problem2: {
          id: "Sulit Mengelola dan Menskalakan Aplikasi Anda.",
          en: "Difficult to manage and scale your app.",
        },
        solution: {
          id: "Sistem Modular yang Mudah Dirawat dan Diperluas",
          en: "Modular System That's Easy to Maintain and Expand",
        },
        description: {
          id: "Kesulitan dengan aplikasi yang sulit dikelola dan ditingkatkan skalanya? Pendekatan modular kami membantu membagi aplikasi Anda menjadi komponen-komponen kecil yang independen, sehingga memudahkan pemeliharaan, pembaruan, dan peningkatan tanpa memengaruhi keseluruhan sistem. Dengan pendekatan ini, aplikasi Anda dapat berkembang seiring waktu, dan fitur-fitur baru dapat ditambahkan tanpa mengganggu fungsionalitas yang ada.",
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
          id: "Aplikasi Tidak Responsif dan Sulit Digunakan di Ponsel?",
          en: "App Not Responsive and Hard to Use on Mobile?",
        },
        problem2: {
          id: "Aplikasi Tidak Responsif dan Sulit Digunakan di Ponsel.",
          en: "App not responsive and hard to use on mobile.",
        },
        solution: {
          id: "Desain Responsif dan Optimasi Seluler",
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
          id: "Kesulitan Mengelola Data Pengguna yang Berkembang?",
          en: "Difficulty Managing Growing User Data?",
        },
        problem2: {
          id: "Kesulitan Mengelola Data Pengguna yang Berkembang.",
          en: "Difficulty managing growing user data.",
        },
        solution: {
          id: "Manajemen Data Efisien dengan Sistem Berbasis Cloud",
          en: "Efficient Data Management with Cloud-Based Systems",
        },
        description: {
          id: "Seiring dengan terus bertambahnya data pengguna, pengelolaan dan penyimpanan data menjadi tantangan yang signifikan. Kami menawarkan solusi pengelolaan data berbasis cloud yang menyediakan penyimpanan yang aman, mudah diakses, dan dapat diskalakan. Hal ini memastikan data tetap aman sekaligus memungkinkan analisis data secara real-time untuk membantu Anda memahami kebutuhan pengguna dan membuat strategi bisnis yang efektif.",
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
      name: "Tabler Icon",
      logo: `${IMAGES_PATH}/techstack/tabler.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/tabler.png`,
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
    address: {
      id: "Berbasis jarak jauh, berpusat di Semarang, Jawa Tengah, Indonesia",
      en: "Remotely, based on Semarang, Central Java, Indonesia",
    },
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
