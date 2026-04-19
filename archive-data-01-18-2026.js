console.log("✅ archive-data-01-18-2026.js loaded");

// Community Art настройки
const COMMUNITY_ART_MEDIA = "https://pbs.twimg.com/media/G-zC0HFXwAAcLlk?format=jpg&name=4096x4096";
const COMMUNITY_ARTIST_LINK = "https://x.com/ZaYaC011";

// Community Handmade настройки
const COMMUNITY_HANDMADE_MEDIA = "https://pbs.twimg.com/media/G-t1c14bQAI3o15?format=jpg&name=large";
const COMMUNITY_HANDMADE_ARTIST_LINK = "https://x.com/0xDuckyRWA";

const COMMUNITY_VIDEO_MEDIA = "0116_1_.mp4";
const COMMUNITY_VIDEO_ARTIST_LINK = "https://x.com/Dannnnnok";

// Community Thread настройки
const COMMUNITY_THREAD_MEDIA = "https://i.postimg.cc/kgCsLk7b/sdsada.png";
const COMMUNITY_THREAD_ARTIST_LINK = "https://x.com/0xboomin";

// Логотип RE
const FOOTER_LOGO = "https://m4lka.notion.site/image/attachment%3A2be03fbf-dae3-40f3-b484-69381a78e79a%3Areusde.webp?table=block&id=2c9172ac-99a3-80a2-85a6-e03de84da728&spaceId=09b5d55b-2dbd-409f-a198-a7e599deb266&width=2000&userId=&cache=v2";

// Изображение для Issue #1 
const ISSUE_1_IMAGE = "https://i.postimg.cc/RFPbm9MZ/1.png"; 

// Изображение для даты
const ISSUE_1_DATE_IMAGE = "https://i.postimg.cc/Zndgx2hj/2.png"; 

const issues = [
  {
    number: 1,
    date: "January 16, 2026",
    dateRu: "16 января 2026",
    dateUk: "16 січня 2026",
    dateVi: "16 tháng 1, 2026",
    dateId: "16 Januari 2026",
    articles: [
      {
        title: {
          en: "Re Protocol Today",
          ru: "Re протокол сегодня",
          uk: "Re протокол сьогодні",
          vi: "Giao thức Re hôm nay",
          id: "Protokol Re Hari Ini"
        },
        text: {
          en: "Re has reached nearly $400M in total value locked, supporting 35 insurers across the reinsurance market. The protocol operates at the intersection of DeFi capital and real-world risk, bringing transparency and programmability to an industry that has operated the same way for centuries.<br><br>Through smart contracts, Re structures and manages insurance exposure onchain—making capital deployment, risk accounting, and returns fully visible. Regulators are aligned, institutional partners are onboarded, and the infrastructure is live. This is not theoretical. Re is processing real premiums, backing real policies, and generating real returns.<br><br>From a $1 trillion reinsurance market, Re has carved out a scalable, durable position. The protocol is operational, the model is proven, and the growth trajectory is clear.",
          ru: "Re достиг почти $400M в общем заблокированном капитале, поддерживая 35 страховщиков на рынке перестрахования. Протокол работает на пересечении DeFi-капитала и реальных рисков, привнося прозрачность и программируемость в индустрию, которая работала одинаково веками.<br><br>Через смарт-контракты Re структурирует и управляет страховым риском ончейн — делая размещение капитала, учет рисков и доходность полностью видимыми. Регуляторы согласованы, институциональные партнеры подключены, инфраструктура работает. Это не теория. Re обрабатывает реальные премии, обеспечивает реальные полисы и генерирует реальную доходность.<br><br>Из $1 триллиона рынка перестрахования Re занял масштабируемую, устойчивую позицию. Протокол работает, модель доказана, траектория роста ясна.",
          uk: "Re досяг майже $400M в загальному заблокованому капіталі, підтримуючи 35 страховиків на ринку перестрахування. Протокол працює на перетині DeFi-капіталу та реальних ризиків, привносячи прозорість та програмованість в індустрію, яка працювала однаково віками.<br><br>Через смарт-контракти Re структурує та керує страховим ризиком ончейн — роблячи розміщення капіталу, облік ризиків та дохідність повністю видимими. Регулятори узгоджені, інституційні партнери підключені, інфраструктура працює. Це не теорія. Re обробляє реальні премії, забезпечує реальні поліси та генерує реальну дохідність.<br><br>З $1 трильйона ринку перестрахування Re зайняв масштабовану, стійку позицію. Протокол працює, модель доведена, траєкторія зростання зрозуміла.",
          vi: "Re đã đạt gần $400M tổng giá trị khóa, hỗ trợ 35 công ty bảo hiểm trên thị trường tái bảo hiểm. Giao thức hoạt động tại giao điểm của vốn DeFi và rủi ro thế giới thực, mang lại tính minh bạch và khả năng lập trình cho một ngành đã hoạt động theo cùng một cách trong nhiều thế kỷ.<br><br>Thông qua hợp đồng thông minh, Re cấu trúc và quản lý rủi ro bảo hiểm onchain—làm cho việc triển khai vốn, kế toán rủi ro và lợi nhuận hoàn toàn minh bạch. Các cơ quan quản lý đã đồng thuận, đối tác thể chế đã tham gia, và cơ sở hạ tầng đang hoạt động. Đây không phải là lý thuyết. Re đang xử lý phí bảo hiểm thực tế, hỗ trợ các hợp đồng thực và tạo ra lợi nhuận thực.<br><br>Từ thị trường tái bảo hiểm $1 nghìn tỷ, Re đã tạo ra một vị thế có thể mở rộng và bền vững. Giao thức đang hoạt động, mô hình đã được chứng minh, và quỹ đạo tăng trưởng rõ ràng.",
          id: "Re telah mencapai hampir $400M dalam total nilai terkunci, mendukung 35 perusahaan asuransi di pasar reasuransi. Protokol beroperasi di persimpangan modal DeFi dan risiko dunia nyata, membawa transparansi dan kemampuan pemrograman ke industri yang telah beroperasi dengan cara yang sama selama berabad-abad.<br><br>Melalui smart contract, Re menyusun dan mengelola eksposur asuransi secara onchain—membuat penempatan modal, akuntansi risiko, dan pengembalian sepenuhnya terlihat. Regulator sejalan, mitra institusional bergabung, dan infrastruktur berjalan. Ini bukan teoritis. Re memproses premi nyata, mendukung polis nyata, dan menghasilkan pengembalian nyata.<br><br>Dari pasar reasuransi $1 triliun, Re telah mengukir posisi yang scalable dan tahan lama. Protokol beroperasi, modelnya terbukti, dan lintasan pertumbuhan jelas.",
        }
      },
      {
        title: {
          en: "Discord Updates",
          ru: "Обновления в Дискорде",
          uk: "Оновлення в Discord",
          vi: "Cập nhật trên Discord",
          id: "Pembaruan di Discord"
        },
        text: {
          en: "To our valued OG members and contributors: as we advance the platform, " +
            "we invite you to deepen your focus on Re's core product and technology. " +
            "Engage with the platform itself, explore our DeFi integrations and partnerships, " +
            "and connect with the community's most insightful minds in decentralized finance." +
            "<br><br>For our creative contributors and artists: infuse your work with purpose. " +
            "Let your art reflect the innovation, utility, and vision of what we're building together. " +
            "The team values content that showcases integrations, platform performance, " +
            "and the broader ecosystem—going beyond reUSDe to capture the full scope of Re's mission." +
            "<br><br>On January 14th, three community members were promoted to (re)al OG role: " +
            "<a href='https://x.com/sta1ve69' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@sta1ve</a>, " +
            "<a href='https://x.com/gotfc_' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@qos1mo</a>, and " +
            "<a href='https://x.com/0xboomin' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@.mikeyboomin</a>. " +
            "Their dedication and contributions embody what Re is building." +
            "<br><br>Together, we're not just creating a product. " +
            "We're shaping the future of decentralized risk markets.",
          ru: "Дорогие OG-участники и контрибьюторы: по мере развития платформы " +
            "мы приглашаем вас сосредоточиться на ключевом продукте и технологии Re. " +
            "Взаимодействуйте с самой платформой, изучайте наши DeFi-интеграции и партнерства, " +
            "общайтесь с самыми проницательными умами сообщества " +
            "в области децентрализованных финансов." +
            "<br><br>Нашим креативным контрибьюторам и художникам: " +
            "наполняйте свои работы смыслом. " +
            "Пусть ваше искусство отражает инновации, практическую ценность " +
            "и видение того, что мы строим вместе. " +
            "Команда ценит контент, который демонстрирует интеграции, " +
            "производительность платформы и более широкую экосистему — " +
            "выходя за рамки reUSDe и охватывая всю миссию Re." +
            "<br><br>14 января произошло повышение трех участников сообщества на роль (re)al OG: " +
            "<a href='https://x.com/sta1ve69' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@sta1ve</a>, " +
            "<a href='https://x.com/gotfc_' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@qos1mo</a> и " +
            "<a href='https://x.com/0xboomin' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@.mikeyboomin</a>. " +
            "Их преданность и вклад воплощают то, что строит Re." +
            "<br><br>Вместе мы создаем не просто продукт. " +
            "Мы формируем будущее децентрализованных рынков рисков.",
          uk: "Шановні OG-учасники та контриб'ютори: у міру розвитку платформи " +
            "ми запрошуємо вас зосередитися на ключовому продукті та технології Re. " +
            "Взаємодійте з самою платформою, досліджуйте наші DeFi-інтеграції та партнерства, " +
            "спілкуйтеся з найпроникливішими умами спільноти " +
            "у сфері децентралізованих фінансів." +
            "<br><br>Нашим креативним контриб'юторам та митцям: " +
            "наповнюйте свої роботи сенсом. " +
            "Нехай ваше мистецтво відображає інновації, практичну цінність " +
            "та бачення того, що ми будуємо разом. " +
            "Команда цінує контент, який демонструє інтеграції, " +
            "продуктивність платформи та ширшу екосистему — " +
            "виходячи за межі reUSDe та охоплюючи всю місію Re." +
            "<br><br>14 січня відбулося підвищення трьох учасників спільноти на роль (re)al OG: " +
            "<a href='https://x.com/sta1ve69' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@sta1ve</a>, " +
            "<a href='https://x.com/gotfc_' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@qos1mo</a> та " +
            "<a href='https://x.com/0xboomin' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@.mikeyboomin</a>. " +
            "Їхня відданість та внесок втілюють те, що будує Re." +
            "<br><br>Разом ми створюємо не просто продукт. " +
            "Ми формуємо майбутнє децентралізованих ринків ризиків.",
          vi: "Gửi các thành viên OG và cộng tác viên quý giá: " +
            "khi chúng tôi phát triển nền tảng, " +
            "chúng tôi mời bạn tập trung sâu hơn vào sản phẩm cốt lõi và công nghệ của Re. " +
            "Tương tác với chính nền tảng, khám phá các tích hợp và đối tác DeFi của chúng tôi, " +
            "và kết nối với những bộ óc sâu sắc nhất trong cộng đồng tài chính phi tập trung." +
            "<br><br>Đối với các cộng tác viên sáng tạo và nghệ sĩ: " +
            "hãy thấm nhuần mục đích vào tác phẩm của bạn. " +
            "Để nghệ thuật của bạn phản ánh sự đổi mới, tiện ích " +
            "và tầm nhìn về những gì chúng ta đang xây dựng cùng nhau. " +
            "Đội ngũ đánh giá cao nội dung thể hiện các tích hợp, hiệu suất nền tảng " +
            "và hệ sinh thái rộng lớn hơn—vượt ra ngoài reUSDe " +
            "để nắm bắt phạm vi đầy đủ của sứ mệnh Re." +
            "<br><br>Vào ngày 14 tháng 1, ba thành viên cộng đồng đã được thăng cấp lên vai trò (re)al OG: " +
            "<a href='https://x.com/sta1ve69' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@sta1ve</a>, " +
            "<a href='https://x.com/gotfc_' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@qos1mo</a>, và " +
            "<a href='https://x.com/0xboomin' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@.mikeyboomin</a>. " +
            "Sự cống hiến và đóng góp của họ thể hiện những gì Re đang xây dựng." +
            "<br><br>Cùng nhau, chúng ta không chỉ tạo ra một sản phẩm. " +
            "Chúng ta đang định hình tương lai của thị trường rủi ro phi tập trung.",
          id: "Untuk anggota OG dan kontributor kami yang berharga: " +
            "saat kami memajukan platform, " +
            "kami mengundang Anda untuk memperdalam fokus pada produk inti dan teknologi Re. " +
            "Terlibat dengan platform itu sendiri, jelajahi integrasi dan kemitraan DeFi kami, " +
            "dan terhubung dengan pikiran paling wawasan dalam komunitas keuangan terdesentralisasi." +
            "<br><br>Untuk kontributor kreatif dan seniman kami: " +
            "berikan tujuan pada karya Anda. " +
            "Biarkan seni Anda mencerminkan inovasi, utilitas, " +
            "dan visi tentang apa yang kita bangun bersama. " +
            "Tim menghargai konten yang menampilkan integrasi, kinerja platform, " +
            "dan ekosistem yang lebih luas—melampaui reUSDe " +
            "untuk menangkap cakupan penuh misi Re." +
            "<br><br>Pada 14 Januari, tiga anggota komunitas dipromosikan ke peran (re)al OG: " +
            "<a href='https://x.com/sta1ve69' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@sta1ve</a>, " +
            "<a href='https://x.com/gotfc_' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@qos1mo</a>, dan " +
            "<a href='https://x.com/0xboomin' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>@.mikeyboomin</a>. " +
            "Dedikasi dan kontribusi mereka mewujudkan apa yang dibangun Re." +
            "<br><br>Bersama-sama, kita tidak hanya menciptakan produk. " +
            "Kita membentuk masa depan pasar risiko terdesentralisasi.",
        }
      }
    ],
    team: [
      {
        name: "Karn Saroya",
        link: "https://x.com/karnsaroya",
        avatar: "https://pbs.twimg.com/profile_images/1757146411962146816/YjmvhwIZ_400x400.jpg",
        role: {
          en: "Co-founder & CEO",
          ru: "Сооснователь и CEO",
          uk: "Співзасновник та CEO",
          vi: "Đồng sáng lập & CEO",
          id: "Co-founder & CEO"
        }
      },
      {
        name: "Natalie Gray",
        link: "https://x.com/natalieevagray",
        avatar: "https://pbs.twimg.com/profile_images/1919825728318930947/a-Z1wC2N_400x400.jpg",
        role: {
          en: "Co-founder & Mommy",
          ru: "Сооснователь и Мамочка",
          uk: "Співзасновниця та Мамочка",
          vi: "Đồng sáng lập & Mommy",
          id: "Co-founder & Mommy"
        }
      },
      {
        name: "Ben Aneesh",
        link: "https://x.com/benaneesh",
        avatar: "https://pbs.twimg.com/profile_images/1985752135888203776/r5zxeVS8_400x400.jpg",
        role: {
          en: "Co-founder & Engineer",
          ru: "Сооснователь и инженер",
          uk: "Співзасновник та інженер",
          vi: "Đồng sáng lập & Kỹ sư",
          id: "Co-founder & Engineer"
        }
      },
      {
        name: "Cliff White",
        link: "https://x.com/thecliffwhite",
        avatar: "https://pbs.twimg.com/profile_images/2002818403602714624/tM6qyVFa_400x400.jpg",
        role: {
          en: "Co-founder, RE Labs",
          ru: "Сооснователь, RE Labs",
          uk: "Співзасновник, RE Labs",
          vi: "Đồng sáng lập, RE Labs",
          id: "Co-founder, RE Labs"
        }
      },
      {
        name: "ChazEevee",
        link: "https://x.com/ChazEevee",
        avatar: "https://pbs.twimg.com/profile_images/2007836099943563264/pggTViTw_400x400.jpg",
        role: {
          en: "Community Manager",
          ru: "Коммьюнити-менеджер",
          uk: "Ком'юніті-менеджер",
          vi: "Quản lý cộng đồng",
          id: "Manajer Komunitas"
        }
      },
      {
        name: "j.mike ./",
        link: "https://x.com/miketwinks",
        avatar: "https://pbs.twimg.com/profile_images/1972363197458866176/PAbBCZTs_400x400.jpg",
        role: {
          en: "Vibe Community Curator",
          ru: "Вайбовый коммьюнити-куратор",
          uk: "Вайбовий ком'юніті-куратор",
          vi: "Người quản lý vibe",
          id: "Vibe Community Curator"
        }
      },
      {
        name: "ItsMeJon",
        link: "https://x.com/ContraryActuary",
        avatar: "https://pbs.twimg.com/profile_images/2004218491876909056/-q17SRwH_400x400.jpg",
        role: {
          en: "Actuary",
          ru: "Актуарий",
          uk: "Актуарій",
          vi: "Chuyên gia Bảo hiểm",
          id: "Aktuaris"
        }
      },
      {
        name: "Saul",
        link: "https://x.com/SaulCapital",
        avatar: "https://pbs.twimg.com/profile_images/1676182300789293057/hlyGdn1i_400x400.jpg",
        role: {
          en: "Growth",
          ru: "Рост",
          uk: "Зростання",
          vi: "Tăng trưởng",
          id: "Growth"
        }
      },
      {
        name: "@st3phdoteth",
        link: "https://x.com/st3phdoteth",
        avatar: "https://pbs.twimg.com/profile_images/2000640002490015744/tx7gjBch_400x400.jpg",
        role: {
          en: "Marketing Chad",
          ru: "Маркетинг-чад",
          uk: "Маркетинг-чад",
          vi: "Marketing Chad",
          id: "Marketing Chad"
        }
      },
      
    ],
    metrics: {
      TVL: "$397M",
      "Onchain Capital": "$114M",
      "Offchain Capital": "$67M",
      "Premium Receivable": "$215M"
    },
    art: {
      author: "@ZaYaC011",
      link: COMMUNITY_ARTIST_LINK,
      media: COMMUNITY_ART_MEDIA
    },
    handmade: {
      author: "@0xDuckyRWA",
      link: COMMUNITY_HANDMADE_ARTIST_LINK,
      media: COMMUNITY_HANDMADE_MEDIA
    },
    video: {
      author: "@Dannnnnok",
      link: COMMUNITY_VIDEO_ARTIST_LINK,
      media: COMMUNITY_VIDEO_MEDIA
    },
    thread: {
      author: "@0xboomin",
      link: COMMUNITY_THREAD_ARTIST_LINK,
      media: COMMUNITY_THREAD_MEDIA
    }
  }
];

const currentIssueIndex = 0;

const translations = {
  en: {
    issueNumber: "Issue #1",
    artTitle: "Community Art",
    by: "by",
    artSubtitle: "Best Art",
    threadTitle: "Best Thread",
    handmadeTitle: "Best Handmade",
    videoTitle: "Best Video",
    credits: `© 2026 THE RE PROTOCOL TIMES`,
    joinCommunity: "Join Re-Community:",
    socialLinks: [
      { text: "X", url: "https://x.com/re_xyz" },
      { text: "Discord", url: "https://discord.com/invite/reprotocol" },
      { text: "Farcaster", url: "https://warpcast.com/~/channel/reprotocol" }
    ],
    reTeamTitle: "From the Re team:",
    reTeamText: "Stay focused. Engage deeply. Build with clarity and purpose. Re is live, and the work we do defines the future."
  },
  ru: {
    issueNumber: "Выпуск #1",
    artTitle: "Творчество сообщества",
    by: "от",
    artSubtitle: "Лучшее искусство",
    threadTitle: "Лучший тред",
    handmadeTitle: "Лучшая поделка",
    videoTitle: "Лучшее видео",
    credits: `© 2026 THE RE PROTOCOL TIMES`,
    joinCommunity: "Присоединяйтесь к Re-сообществу:",
    socialLinks: [
      { text: "X", url: "https://x.com/re_xyz" },
      { text: "Discord", url: "https://discord.com/invite/reprotocol" },
      { text: "Farcaster", url: "https://warpcast.com/~/channel/reprotocol" }
    ],
    reTeamTitle: "От команды Re:",
    reTeamText: "Оставайтесь сфокусированными. Вовлекайтесь глубоко. Создавайте с ясностью и целью. Re работает, и работа, которую мы делаем, определяет будущее."
  },
  uk: {
    issueNumber: "Випуск #1",
    artTitle: "Творчість спільноти",
    by: "від",
    artSubtitle: "Найкраще мистецтво",
    threadTitle: "Найкращий тред",
    handmadeTitle: "Найкраща саморобка",
    videoTitle: "Найкраще відео",
    credits: `© 2026 THE RE PROTOCOL TIMES`,
    joinCommunity: "Приєднуйтесь до Re-спільноти:",
    socialLinks: [
      { text: "X", url: "https://x.com/re_xyz" },
      { text: "Discord", url: "https://discord.com/invite/reprotocol" },
      { text: "Farcaster", url: "https://warpcast.com/~/channel/reprotocol" }
    ],
    reTeamTitle: "Від команди Re:",
    reTeamText: "Залишайтеся зосередженими. Занурюйтесь глибоко. Створюйте з ясністю та метою. Re працює, і робота, яку ми робимо, визначає майбутнє."
  },
  vi: {
    issueNumber: "Số #1",
    artTitle: "Nghệ thuật cộng đồng",
    by: "bởi",
    artSubtitle: "Nghệ thuật tốt nhất",
    threadTitle: "Chủ đề tốt nhất",
    handmadeTitle: "Thủ công tốt nhất",
    videoTitle: "Video tốt nhất",
    credits: `© 2026 THE RE PROTOCOL TIMES`,
    joinCommunity: "Tham gia cộng đồng Re:",
    socialLinks: [
      { text: "X", url: "https://x.com/re_xyz" },
      { text: "Discord", url: "https://discord.com/invite/reprotocol" },
      { text: "Farcaster", url: "https://warpcast.com/~/channel/reprotocol" }
    ],
    reTeamTitle: "Từ đội ngũ Re:",
    reTeamText: "Hãy tập trung. Tham gia sâu sắc. Xây dựng với sự rõ ràng và mục đích. Re đang hoạt động, và công việc chúng ta làm xác định tương lai."
  },
  id: {
    issueNumber: "Edisi #1",
    artTitle: "Seni Komunitas",
    by: "oleh",
    artSubtitle: "Seni Terbaik",
    threadTitle: "Thread Terbaik",
    handmadeTitle: "Kerajinan Terbaik",
    videoTitle: "Video Terbaik",
    credits: `© 2026 THE RE PROTOCOL TIMES`,
    joinCommunity: "Bergabung dengan Komunitas Re:",
    socialLinks: [
      { text: "X", url: "https://x.com/re_xyz" },
      { text: "Discord", url: "https://discord.com/invite/reprotocol" },
      { text: "Farcaster", url: "https://warpcast.com/~/channel/reprotocol" }
    ],
    reTeamTitle: "Dari tim Re:",
    reTeamText: "Tetap fokus. Terlibat dalam. Bangun dengan kejelasan dan tujuan. Re sedang berjalan, dan pekerjaan yang kita lakukan mendefinisikan masa depan."
  }
};

let currentLanguage = "en";

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  updateTranslations();
  renderIssue();
}

function getLanguage() {
  const stored = localStorage.getItem("preferredLanguage");
  return stored || "en";
}

function updateTranslations() {
  const t = translations[currentLanguage];
  
  const titleEl = document.getElementById("artTitle");
  if (titleEl) titleEl.textContent = t.artTitle;

  const galleryButton = document.getElementById("galleryButton");
  if (galleryButton && currentLanguage === "en") {
    galleryButton.textContent = "GALLERY";
  } else if (galleryButton && currentLanguage === "ru") {
    galleryButton.textContent = "ГАЛЕРЕЯ";
  } else if (galleryButton && currentLanguage === "uk") {
    galleryButton.textContent = "ГАЛЕРЕЯ";
  } else if (galleryButton && currentLanguage === "vi") {
    galleryButton.textContent = "PHÒNG TRƯNG BÀY";
  } else if (galleryButton && currentLanguage === "id") {
    galleryButton.textContent = "GALERI";
  }

  const footerCreditsEl = document.getElementById("footerCredits");
  if (footerCreditsEl) {
    footerCreditsEl.innerHTML = t.credits;
  }

  const footerTextEl = document.getElementById("footerText");
  if (footerTextEl) {
    if (currentLanguage === "en") {
      footerTextEl.textContent = "Published every two days";
    } else if (currentLanguage === "ru") {
      footerTextEl.textContent = "Публикуется каждые два дня";
    } else if (currentLanguage === "uk") {
      footerTextEl.textContent = "Публікується кожні два дні";
    } else if (currentLanguage === "vi") {
      footerTextEl.textContent = "Xuất bản mỗi hai ngày";
    } else if (currentLanguage === "id") {
      footerTextEl.textContent = "Diterbitkan setiap dua hari";
    }
  }

  const footerCommunityEl = document.getElementById("footerCommunity");
  if (footerCommunityEl) {
    const socialLinksHTML = t.socialLinks
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; margin: 0 8px; transition: color 0.3s;">${link.text}</a>`
      )
      .join(" ");
    footerCommunityEl.innerHTML = `${t.joinCommunity} ${socialLinksHTML}`;
  }
}

function getMediaElement(mediaUrl) {
  if (!mediaUrl || mediaUrl === "#") return "";
  
  const lowerUrl = mediaUrl.toLowerCase();
  if (lowerUrl.endsWith(".mp4") || lowerUrl.endsWith(".webm") || lowerUrl.endsWith(".mov")) {
    return `<video class="community-media" controls><source src="${mediaUrl}" type="video/mp4"></video>`;
  }
  
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
    let videoId = "";
    if (lowerUrl.includes("youtube.com/watch")) {
      const url = new URL(mediaUrl);
      videoId = url.searchParams.get("v");
    } else if (lowerUrl.includes("youtu.be/")) {
      videoId = mediaUrl.split("youtu.be/")[1].split("?")[0];
    }
    if (videoId) {
      return `<iframe class="community-media" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
  }
  
  return `<img src="${mediaUrl}" alt="Community Content" class="community-media" />`;
}

function renderIssue() {
  const current = issues[currentIssueIndex];
  const t = translations[currentLanguage];

  const issueNumberEl = document.getElementById("issueNumber");
  if (issueNumberEl) {
    issueNumberEl.src = ISSUE_1_IMAGE;
  }

  const issueDateEl = document.getElementById("issueDate");
  if (issueDateEl) {
    issueDateEl.src = ISSUE_1_DATE_IMAGE;
  }

  const articlesEl = document.getElementById("articles");
  if (articlesEl && current.articles) {
    articlesEl.innerHTML = current.articles
      .map((article) => {
        const title = article.title[currentLanguage] || article.title.en;
        const text = article.text[currentLanguage] || article.text.en;
        return `
          <article class="article">
            <h2>${title}</h2>
            <div class="article-text">${text}</div>
          </article>
        `;
      })
      .join("");
  }

  const reTeamSection = document.getElementById("reTeamSection");
  if (reTeamSection && current.team) {
    let teamHTML = `
      <div class="re-team-section" id="reTeamCollapsible">
        <div class="re-team-header" id="reTeamHeader">
          <img src="https://i.postimg.cc/W1TX4Fxd/reteam.png" alt="RE TEAM" class="re-team-logo" />
          <span class="re-team-toggle">▼</span>
        </div>
        <div class="re-team-content">
          <div class="re-team-grid">
    `;
    
    current.team.forEach(member => {
      const role = typeof member.role === 'object' ? member.role[currentLanguage] : member.role;
      teamHTML += `
        <div class="re-team-member">
          <img src="${member.avatar}" alt="${member.name}" class="re-team-member-avatar" />
          <a href="${member.link}" target="_blank" rel="noopener noreferrer" class="re-team-member-name">${member.name}</a>
          <div class="re-team-member-role">${role}</div>
        </div>
      `;
    });
    
    teamHTML += `
          </div>
        </div>
      </div>
    `;
    
    reTeamSection.innerHTML = teamHTML;
    
    // Add click handler for collapsible functionality
    const teamHeader = document.getElementById('reTeamHeader');
    const teamCollapsible = document.getElementById('reTeamCollapsible');
    
    if (teamHeader && teamCollapsible) {
      teamHeader.addEventListener('click', function() {
        teamCollapsible.classList.toggle('collapsed');
      });
    }
  }

  const artEl = document.getElementById("communityArt");
  if (artEl) {
    let artHTML = "";
    
    if (current.art) {
      const authorText = current.art.author;
      const authorLink = current.art.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.art.media || current.art.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          <h3 class="art-subsection-title">${t.artSubtitle}</h3>
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    if (current.thread) {
      const authorText = current.thread.author;
      const authorLink = current.thread.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.thread.media || current.thread.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          <h3 class="art-subsection-title">${t.threadTitle}</h3>
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    if (current.handmade) {
      const authorText = current.handmade.author;
      const authorLink = current.handmade.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.handmade.media || current.handmade.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          <h3 class="art-subsection-title">${t.handmadeTitle}</h3>
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    if (current.video) {
      const authorText = current.video.author;
      const authorLink = current.video.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel='noopener noreferrer' class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.video.media || current.video.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          <h3 class="art-subsection-title">${t.videoTitle}</h3>
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    artEl.innerHTML = artHTML;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderIssue();
  updateTranslations();

 
  (function () {
    const langToggle = document.getElementById("langToggle");
    const langDropdown = document.getElementById("langDropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    if (!langToggle || !langDropdown) {
      console.error("Language elements not found!");
      return;
    }

    langToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      langDropdown.classList.toggle("active");
    });

    langOptions.forEach(function (option) {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const selectedLang = this.getAttribute("data-lang");
        
        if (!selectedLang || !translations[selectedLang]) return;

        const mainContent = document.querySelector(".grid") || document.body;
        mainContent.style.transition = "opacity 0.2s ease";
        mainContent.style.opacity = "0.5";

        setTimeout(function () {
          currentLanguage = selectedLang;
          setLanguage(currentLanguage);
          langDropdown.classList.remove("active");

          setTimeout(function () {
            mainContent.style.opacity = "1";
          }, 100);
        }, 200);
      });
    });

    document.addEventListener("click", function (e) {
      if (!langDropdown.classList.contains("active")) return;
      if (!e.target.closest(".lang-selector")) {
        langDropdown.classList.remove("active");
      }
    });
  })();

  
  const current = issues[currentIssueIndex];
  const headerMetrics = current.metrics ? [
    `TVL: ${current.metrics.TVL || 'N/A'}`,
    `Onchain: ${current.metrics["Onchain Capital"] || 'N/A'}`,
    `Offchain: ${current.metrics["Offchain Capital"] || 'N/A'}`,
    `Premium: ${current.metrics["Premium Receivable"] || 'N/A'}`
  ] : [
    "TVL: $397M",
    "Onchain: $114M",
    "Offchain: $67M",
    "Premium: $215M"
  ];

  let metricIndex = 0;
  const metricEl = document.getElementById("metricValue");

  if (metricEl) {
    metricEl.textContent = headerMetrics[0];

    setInterval(function () {
      metricEl.style.opacity = "0";
      metricEl.style.transform = "translateY(-8px)";

      setTimeout(function () {
        metricIndex = (metricIndex + 1) % headerMetrics.length;
        metricEl.textContent = headerMetrics[metricIndex];

        metricEl.offsetHeight;

        metricEl.style.opacity = "1";
        metricEl.style.transform = "translateY(0)";
      }, 450);
    }, 3000);
  }
});
