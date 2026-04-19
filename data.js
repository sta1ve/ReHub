console.log("✅ data.js loaded");

// Community Art настройки
const COMMUNITY_ART_MEDIA = "https://pbs.twimg.com/media/G_HFn12XIAAvE3T?format=jpg&name=medium";
const COMMUNITY_ARTIST_LINK = "https://x.com/JoomHiko";

// Community Handmade настройки
const COMMUNITY_HANDMADE_MEDIA = "https://pbs.twimg.com/media/G-8oz-uW0AEnlVR?format=jpg&name=large";
const COMMUNITY_HANDMADE_ARTIST_LINK = "https://x.com/0xpinkrabbits";

const COMMUNITY_VIDEO_MEDIA = "0122.mp4";
const COMMUNITY_VIDEO_ARTIST_LINK = "https://x.com/halcyonserenads";

// Community Thread настройки
const COMMUNITY_THREAD_MEDIA = "https://pbs.twimg.com/media/G-0NmumXUAERTTq?format=jpg&name=large";
const COMMUNITY_THREAD_ARTIST_LINK = "https://x.com/fradermon";

// Логотип RE
const FOOTER_LOGO = "https://m4lka.notion.site/image/attachment%3A2be03fbf-dae3-40f3-b484-69381a78e79a%3Areusde.webp?table=block&id=2c9172ac-99a3-80a2-85a6-e03de84da728&spaceId=09b5d55b-2dbd-409f-a198-a7e599deb266&width=2000&userId=&cache=v2";

// Изображение для Issue #1 
const ISSUE_1_IMAGE = "https://i.postimg.cc/HxPsVVgh/dvefyvf.png"; 

// Изображение для даты
const ISSUE_1_DATE_IMAGE = "https://i.postimg.cc/P5mx2XWm/fyf.png"; 

const issues = [
  {
    number: 1,
    date: "September 18, 2026",
    dateRu: "18 сентября 2026",
    dateUk: "18 вересня 2026",
    dateVi: "18 tháng 9, 2026",
    dateId: "18 September 2026",
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
          en: "Re's TVL has reached an all-time high of $400M. From $0 to $400M in a year. This remarkable growth was driven by continued demand for our core products, reUSD and reUSDe, as well as our premium receivable. The numbers tell a compelling story of real world adoption and market validation." +
            "<br><br>Re operates at genuine real world scale, backing 35 insurance companies across the United States. The protocol currently sits at approximately $400M in total value locked, with reUSD nearing $100M in circulating supply. Since inception, Re has written approximately $300M in insurance premium, with an ambitious but achievable target of $1B in premium by 2027. These aren't vanity metrics. They represent actual insurance policies protecting real people and businesses." +
            "<br><br>What is reinsurance? At the highest level, reinsurance is the insurance company's insurance. It is the essential safety cushion that allows insurers to keep writing policies even when catastrophic events like hurricanes, floods, or wildfires create outsized losses that could otherwise bankrupt them. Without reinsurance, the entire insurance industry would collapse under the weight of major disasters." +
            "<br><br>Re's core thesis is elegantly simple yet profound: insurance and reinsurance ultimately come down to two fundamental things that blockchains handle exceptionally well: contracts and capital. The product is essentially a promise to pay under clearly defined circumstances, paired with cryptographic proof that the capital exists to honor that promise. This transparency is revolutionary in an industry built on opacity." +
            "<br><br>Through smart contracts, Re structures and manages insurance exposure entirely onchain, making capital deployment, risk accounting, and returns fully visible to all participants. This isn't vaporware or a whitepaper dream. Regulators are aligned and supportive, institutional partners are onboarded and actively participating, and the infrastructure is live and processing real transactions every day. This is not theoretical. Re is processing real premiums, backing real policies, and generating real returns for depositors." +
            "<br><br>The source of returns is fundamentally different from most crypto projects. These are real world insurance premiums that get paid reliably every day, regardless of crypto market cycles, bull runs, or bear markets. Re has successfully proven that it can sell reinsurance to traditional insurance companies, connect DeFi capital to those companies in a compliant manner, and make regulators happy along the way. This three-way bridge between DeFi, traditional finance, and regulation is extraordinarily rare." +
            "<br><br>The long term vision extends far beyond Re as a single company. The goal is to build the internet capital markets for insurance, where multiple market participants can directly access onchain collateral and transact around risk in a dramatically more efficient way than legacy systems allow. From a $1 trillion global reinsurance market that has remained largely unchanged for decades, Re has carved out a scalable, durable, and rapidly growing position." +
            "<br><br>Consider the historical context: traditional reinsurance giants like Lloyd's of London have been operating for 338 years, Swiss Re for 163 years, Munich Re for 146 years, and Berkshire Hathaway Reinsurance for 58 years. These companies have built their empires over centuries using the same fundamental playbook. Re is only 3 years old, yet it is already operating at meaningful scale with proven traction, institutional backing, regulatory alignment, and a clear growth trajectory. The contrast between centuries-old legacy infrastructure and onchain innovation has never been more stark. Re is not just participating in this market. It is fundamentally reshaping how reinsurance capital flows, how risk is priced, and how the entire industry will evolve in the decades to come.",
          ru: "TVL Re достиг исторического максимума в $400M. От $0 до $400M за год. Этот впечатляющий рост был обусловлен постоянным спросом на наши основные продукты, reUSD и reUSDe, а также нашу премию к получению. Цифры рассказывают убедительную историю реального внедрения и рыночной валидации." +
            "<br><br>Re работает в настоящем реальном масштабе, поддерживая 35 страховых компаний по всей территории Соединенных Штатов. Протокол в настоящее время имеет примерно $400M в общей заблокированной стоимости, с reUSD, приближающимся к $100M в обращении. С момента запуска Re выписал примерно $300M страховых премий, с амбициозной, но достижимой целью в $1B премий к 2027 году. Это не пустые метрики. Они представляют реальные страховые полисы, защищающие реальных людей и бизнесы." +
            "<br><br>Что такое перестрахование? На самом высоком уровне перестрахование — это страхование для страховых компаний. Это важная подушка безопасности, которая позволяет страховщикам продолжать выписывать полисы даже когда катастрофические события, такие как ураганы, наводнения или лесные пожары, создают огромные убытки, которые в противном случае могли бы их обанкротить. Без перестрахования вся страховая индустрия рухнула бы под тяжестью крупных бедствий." +
            "<br><br>Основной тезис Re элегантно прост, но глубок: страхование и перестрахование в конечном счете сводятся к двум фундаментальным вещам, с которыми блокчейны справляются исключительно хорошо: контракты и капитал. Продукт — это по сути обещание выплатить при четко определенных обстоятельствах в сочетании с криптографическим доказательством того, что капитал существует для выполнения этого обещания. Эта прозрачность революционна в индустрии, построенной на непрозрачности." +
            "<br><br>Через смарт-контракты Re полностью структурирует и управляет страховым риском ончейн, делая размещение капитала, учет рисков и доходность полностью видимыми для всех участников. Это не вапорвейр и не мечта из вайтпейпера. Регуляторы согласованы и поддерживают, институциональные партнеры подключены и активно участвуют, инфраструктура работает и обрабатывает реальные транзакции каждый день. Это не теория. Re обрабатывает реальные премии, обеспечивает реальные полисы и генерирует реальную доходность для вкладчиков." +
            "<br><br>Источник доходности фундаментально отличается от большинства крипто-проектов. Это реальные страховые премии, которые надежно выплачиваются каждый день, независимо от крипто-рыночных циклов, бычьих рынков или медвежьих рынков. Re успешно доказал, что может продавать перестрахование традиционным страховым компаниям, связывать DeFi-капитал с этими компаниями комплаентным способом и удовлетворять регуляторов на этом пути. Этот трехсторонний мост между DeFi, традиционными финансами и регулированием чрезвычайно редок." +
            "<br><br>Долгосрочное видение выходит далеко за рамки Re как одной компании. Цель — построить интернет-рынки капитала для страхования, где множество участников рынка могут напрямую получать доступ к ончейн-обеспечению и совершать сделки с рисками драматически более эффективным способом, чем позволяют устаревшие системы. Из $1 триллиона глобального рынка перестрахования, который оставался в значительной степени неизменным на протяжении десятилетий, Re занял масштабируемую, устойчивую и быстрорастущую позицию." +
            "<br><br>Рассмотрим исторический контекст: традиционные гиганты перестрахования, такие как Lloyd's of London, работают уже 338 лет, Swiss Re — 163 года, Munich Re — 146 лет, а Berkshire Hathaway Reinsurance — 58 лет. Эти компании строили свои империи на протяжении веков, используя один и тот же фундаментальный план. Re всего 3 года, но он уже работает в значимом масштабе с доказанной тракцией, институциональной поддержкой, регуляторным согласованием и четкой траекторией роста. Контраст между многовековой устаревшей инфраструктурой и ончейн-инновациями никогда не был более ярким. Re не просто участвует в этом рынке. Он фундаментально меняет то, как течет перестраховочный капитал, как оценивается риск, и как вся индустрия будет развиваться в ближайшие десятилетия.",
          uk: "TVL Re досяг історичного максимуму в $400M. Від $0 до $400M за рік. Це вражаюче зростання було зумовлено постійним попитом на наші основні продукти, reUSD та reUSDe, а також нашу премію до отримання. Цифри розповідають переконливу історію реального впровадження та ринкової валідації." +
            "<br><br>Re працює в справжньому реальному масштабі, підтримуючи 35 страхових компаній по всій території Сполучених Штатів. Протокол наразі має приблизно $400M у загальній заблокованій вартості, з reUSD, що наближається до $100M в обігу. З моменту запуску Re виписав приблизно $300M страхових премій, з амбітною, але досяжною метою в $1B премій до 2027 року. Це не порожні метрики. Вони представляють реальні страхові поліси, що захищають реальних людей та бізнеси." +
            "<br><br>Що таке перестрахування? На найвищому рівні перестрахування — це страхування для страхових компаній. Це важлива подушка безпеки, яка дозволяє страховикам продовжувати виписувати поліси навіть коли катастрофічні події, такі як урагани, повені або лісові пожежі, створюють величезні збитки, які інакше могли б їх збанкрутити. Без перестрахування вся страхова індустрія впала б під тягарем великих лих." +
            "<br><br>Основна теза Re елегантно проста, але глибока: страхування та перестрахування зрештою зводяться до двох фундаментальних речей, з якими блокчейни справляються винятково добре: контракти та капітал. Продукт — це по суті обіцянка виплатити за чітко визначених обставин у поєднанні з криптографічним доказом того, що капітал існує для виконання цієї обіцянки. Ця прозорість є революційною в індустрії, побудованій на непрозорості." +
            "<br><br>Через смарт-контракти Re повністю структурує та керує страховим ризиком ончейн, роблячи розміщення капіталу, облік ризиків та дохідність повністю видимими для всіх учасників. Це не вапорвейр і не мрія з вайтпейперу. Регулятори узгоджені та підтримують, інституційні партнери підключені та активно беруть участь, інфраструктура працює та обробляє реальні транзакції щодня. Це не теорія. Re обробляє реальні премії, забезпечує реальні поліси та генерує реальну дохідність для вкладників." +
            "<br><br>Джерело дохідності фундаментально відрізняється від більшості крипто-проєктів. Це реальні страхові премії, які надійно виплачуються щодня, незалежно від крипто-ринкових циклів, бичачих ринків або ведмежих ринків. Re успішно довів, що може продавати перестрахування традиційним страховим компаніям, пов'язувати DeFi-капітал з цими компаніями комплаєнтним способом та задовольняти регуляторів на цьому шляху. Цей тристоронній міст між DeFi, традиційними фінансами та регулюванням надзвичайно рідкісний." +
            "<br><br>Довгострокове бачення виходить далеко за межі Re як однієї компанії. Мета — побудувати інтернет-ринки капіталу для страхування, де багато учасників ринку можуть безпосередньо отримувати доступ до ончейн-забезпечення та здійснювати угоди з ризиками драматично більш ефективним способом, ніж дозволяють застарілі системи. З $1 трильйона глобального ринку перестрахування, який залишався значною мірою незмінним протягом десятиліть, Re зайняв масштабовану, стійку та швидкозростаючу позицію." +
            "<br><br>Розглянемо історичний контекст: традиційні гіганти перестрахування, такі як Lloyd's of London, працюють вже 338 років, Swiss Re — 163 роки, Munich Re — 146 років, а Berkshire Hathaway Reinsurance — 58 років. Ці компанії будували свої імперії протягом століть, використовуючи той самий фундаментальний план. Re лише 3 роки, але він вже працює в значущому масштабі з доведеною тракцією, інституційною підтримкою, регуляторним узгодженням та чіткою траєкторією зростання. Контраст між багатовіковою застарілою інфраструктурою та ончейн-інноваціями ніколи не був більш яскравим. Re не просто бере участь у цьому ринку. Він фундаментально змінює те, як тече перестраховий капітал, як оцінюється ризик, і як вся індустрія розвиватиметься в наступні десятиліття.",
          vi: "TVL của Re đã đạt mức cao nhất mọi thời đại là $400M. Từ $0 đến $400M trong một năm. Sự tăng trưởng đáng chú ý này được thúc đẩy bởi nhu cầu liên tục đối với các sản phẩm cốt lõi của chúng tôi, reUSD và reUSDe, cũng như phí bảo hiểm phải thu của chúng tôi. Con số kể một câu chuyện thuyết phục về việc áp dụng trong thế giới thực và xác nhận thị trường." +
            "<br><br>Re hoạt động ở quy mô thế giới thực thực sự, hỗ trợ 35 công ty bảo hiểm trên khắp Hoa Kỳ. Giao thức hiện đang ở mức khoảng $400M tổng giá trị khóa, với nguồn cung reUSD lưu hành gần $100M. Kể từ khi thành lập, Re đã viết khoảng $300M phí bảo hiểm, với mục tiêu đầy tham vọng nhưng có thể đạt được là $1B phí bảo hiểm vào năm 2027. Đây không phải là các số liệu phù phiếm. Chúng đại diện cho các hợp đồng bảo hiểm thực tế bảo vệ con người và doanh nghiệp thực sự." +
            "<br><br>Tái bảo hiểm là gì? Ở cấp độ cao nhất, tái bảo hiểm là bảo hiểm cho công ty bảo hiểm. Đây là đệm an toàn thiết yếu cho phép các công ty bảo hiểm tiếp tục viết hợp đồng ngay cả khi các sự kiện thảm khốc như bão, lũ lụt hoặc cháy rừng tạo ra những tổn thất lớn có thể khiến họ phá sản. Không có tái bảo hiểm, toàn bộ ngành bảo hiểm sẽ sụp đổ dưới sức nặng của các thảm họa lớn." +
            "<br><br>Luận điểm cốt lõi của Re thanh lịch đơn giản nhưng sâu sắc: bảo hiểm và tái bảo hiểm cuối cùng quy về hai điều cơ bản mà blockchain xử lý đặc biệt tốt: hợp đồng và vốn. Sản phẩm về cơ bản là lời hứa thanh toán trong những trường hợp được xác định rõ ràng, kết hợp với bằng chứng mật mã rằng vốn tồn tại để thực hiện lời hứa đó. Sự minh bạch này mang tính cách mạng trong một ngành được xây dựng dựa trên sự mờ đục." +
            "<br><br>Thông qua hợp đồng thông minh, Re cấu trúc và quản lý rủi ro bảo hiểm hoàn toàn onchain, làm cho việc triển khai vốn, kế toán rủi ro và lợi nhuận hoàn toàn hiển thị với tất cả người tham gia. Đây không phải là vaporware hay giấc mơ whitepaper. Các cơ quan quản lý đã đồng thuận và hỗ trợ, đối tác thể chế đã tham gia và tích cực tham gia, và cơ sở hạ tầng đang hoạt động và xử lý các giao dịch thực mỗi ngày. Đây không phải là lý thuyết. Re đang xử lý phí bảo hiểm thực, hỗ trợ hợp đồng thực và tạo ra lợi nhuận thực cho người gửi tiền." +
            "<br><br>Nguồn lợi nhuận khác biệt cơ bản so với hầu hết các dự án crypto. Đây là phí bảo hiểm thế giới thực được thanh toán đáng tin cậy mỗi ngày, bất kể chu kỳ thị trường crypto, thị trường tăng giá hoặc thị trường giảm giá. Re đã chứng minh thành công rằng nó có thể bán tái bảo hiểm cho các công ty bảo hiểm truyền thống, kết nối vốn DeFi với các công ty đó theo cách tuân thủ, và làm hài lòng các cơ quan quản lý trên đường đi. Cây cầu ba chiều giữa DeFi, tài chính truyền thống và quy định này cực kỳ hiếm." +
            "<br><br>Tầm nhìn dài hạn vượt xa Re như một công ty duy nhất. Mục tiêu là xây dựng thị trường vốn internet cho bảo hiểm, nơi nhiều người tham gia thị trường có thể trực tiếp truy cập tài sản thế chấp onchain và giao dịch về rủi ro theo cách hiệu quả hơn đáng kể so với các hệ thống cũ cho phép. Từ thị trường tái bảo hiểm toàn cầu $1 nghìn tỷ đã phần lớn không thay đổi trong nhiều thập kỷ, Re đã tạo ra một vị thế có thể mở rộng, bền vững và tăng trưởng nhanh chóng." +
            "<br><br>Hãy xem xét bối cảnh lịch sử: các gã khổng lồ tái bảo hiểm truyền thống như Lloyd's of London đã hoạt động được 338 năm, Swiss Re 163 năm, Munich Re 146 năm, và Berkshire Hathaway Reinsurance 58 năm. Các công ty này đã xây dựng đế chế của họ qua nhiều thế kỷ sử dụng cùng một bộ sách chiến lược cơ bản. Re mới chỉ 3 tuổi, nhưng nó đã hoạt động ở quy mô có ý nghĩa với lực kéo đã được chứng minh, sự hỗ trợ của tổ chức, sự liên kết quy định, và quỹ đạo tăng trưởng rõ ràng. Sự tương phản giữa cơ sở hạ tầng cũ hàng thế kỷ và đổi mới onchain chưa bao giờ rõ nét hơn. Re không chỉ tham gia vào thị trường này. Nó đang định hình lại cơ bản cách vốn tái bảo hiểm chảy, cách định giá rủi ro, và cách toàn bộ ngành sẽ phát triển trong những thập kỷ tới.",
          id: "TVL Re telah mencapai rekor tertinggi sepanjang masa sebesar $400M. Dari $0 menjadi $400M dalam setahun. Pertumbuhan luar biasa ini didorong oleh permintaan berkelanjutan untuk produk inti kami, reUSD dan reUSDe, serta premi yang dapat diterima. Angka-angka ini menceritakan kisah adopsi dunia nyata dan validasi pasar yang meyakinkan." +
            "<br><br>Re beroperasi pada skala dunia nyata yang sesungguhnya, mendukung 35 perusahaan asuransi di seluruh Amerika Serikat. Protokol saat ini berada di sekitar $400M dalam total nilai terkunci, dengan pasokan reUSD yang beredar mendekati $100M. Sejak awal, Re telah menulis sekitar $300M dalam premi asuransi, dengan target ambisius namun dapat dicapai sebesar $1B dalam premi pada tahun 2027. Ini bukan metrik yang sia-sia. Mereka mewakili polis asuransi aktual yang melindungi orang dan bisnis nyata." +
            "<br><br>Apa itu reasuransi? Pada tingkat tertinggi, reasuransi adalah asuransi untuk perusahaan asuransi. Ini adalah bantalan keamanan penting yang memungkinkan perusahaan asuransi terus menulis polis bahkan ketika peristiwa bencana seperti angin topan, banjir, atau kebakaran hutan menciptakan kerugian besar yang sebaliknya bisa membuat mereka bangkrut. Tanpa reasuransi, seluruh industri asuransi akan runtuh di bawah beban bencana besar." +
            "<br><br>Tesis inti Re sangat sederhana namun mendalam: asuransi dan reasuransi pada akhirnya bermuara pada dua hal fundamental yang ditangani blockchain dengan sangat baik: kontrak dan modal. Produknya pada dasarnya adalah janji untuk membayar dalam keadaan yang didefinisikan dengan jelas, dipasangkan dengan bukti kriptografi bahwa modal ada untuk memenuhi janji tersebut. Transparansi ini revolusioner dalam industri yang dibangun atas ketidakjelasan." +
            "<br><br>Melalui smart contract, Re menyusun dan mengelola eksposur asuransi sepenuhnya secara onchain, membuat penempatan modal, akuntansi risiko, dan pengembalian sepenuhnya terlihat oleh semua peserta. Ini bukan vaporware atau mimpi whitepaper. Regulator sejalan dan mendukung, mitra institusional bergabung dan aktif berpartisipasi, dan infrastruktur berjalan dan memproses transaksi nyata setiap hari. Ini bukan teoritis. Re memproses premi nyata, mendukung polis nyata, dan menghasilkan pengembalian nyata untuk penyetor." +
            "<br><br>Sumber pengembalian secara fundamental berbeda dari kebanyakan proyek crypto. Ini adalah premi asuransi dunia nyata yang dibayarkan dengan andal setiap hari, terlepas dari siklus pasar crypto, bull run, atau bear market. Re telah berhasil membuktikan bahwa ia dapat menjual reasuransi kepada perusahaan asuransi tradisional, menghubungkan modal DeFi ke perusahaan tersebut dengan cara yang compliant, dan membuat regulator senang di sepanjang jalan. Jembatan tiga arah antara DeFi, keuangan tradisional, dan regulasi ini sangat langka." +
            "<br><br>Visi jangka panjang melampaui Re sebagai perusahaan tunggal. Tujuannya adalah membangun pasar modal internet untuk asuransi, di mana banyak peserta pasar dapat langsung mengakses jaminan onchain dan bertransaksi tentang risiko dengan cara yang jauh lebih efisien daripada yang diizinkan sistem lama. Dari pasar reasuransi global $1 triliun yang sebagian besar tidak berubah selama beberapa dekade, Re telah mengukir posisi yang scalable, tahan lama, dan tumbuh pesat." +
            "<br><br>Pertimbangkan konteks historis: raksasa reasuransi tradisional seperti Lloyd's of London telah beroperasi selama 338 tahun, Swiss Re selama 163 tahun, Munich Re selama 146 tahun, dan Berkshire Hathaway Reinsurance selama 58 tahun. Perusahaan-perusahaan ini telah membangun kerajaan mereka selama berabad-abad menggunakan playbook fundamental yang sama. Re baru berusia 3 tahun, namun sudah beroperasi pada skala yang berarti dengan traksi yang terbukti, dukungan institusional, keselarasan regulasi, dan lintasan pertumbuhan yang jelas. Kontras antara infrastruktur lama berusia berabad-abad dan inovasi onchain tidak pernah lebih mencolok. Re tidak hanya berpartisipasi dalam pasar ini. Ia secara fundamental membentuk kembali bagaimana modal reasuransi mengalir, bagaimana risiko dihargai, dan bagaimana seluruh industri akan berkembang di dekade-dekade mendatang."
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
          en: "Exciting news from the Re community! A new role has been introduced: <strong>(Re)al Holder</strong>. " +
            "To verify and receive this role, holders need at least <strong>200 reUSD or reUSDe</strong>. " +
            "Verification is available at <a href='https://guild.xyz/re' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>guild.xyz/re</a>." +
            "<br><br>We're thrilled to celebrate recent promotions within our community:" +
            "<br><br><strong>@(re)al contributor:</strong> " +
            "<a href='https://x.com/Som_6991' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Som</a>, " +
            "<a href='https://x.com/cozjji' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@cozjji</a>, " +
            "<a href='https://x.com/n4zorK' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@n4zorK</a>, " +
            "<a href='https://x.com/0xPierre' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Pierreã</a>, " +
            "<a href='https://x.com/Capzz09' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Capzz</a>, " +
            "<a href='https://x.com/envynity_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@envynity</a>, " +
            "<a href='https://x.com/Ki1ta_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ki1ta</a>" +
            "<br><br><strong>@(re)al OG:</strong> " +
            "<a href='https://x.com/Lady_Red_re' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Lady_Red</a>" +
            "<br><br><strong>@(re)gional helper:</strong> " +
            "<a href='https://x.com/Riffk1' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Riffk1</a>" +
            "<br><br><strong>@(re)al MEGA Legend:</strong> " +
            "<a href='https://x.com/MohdSarim0' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@EREN DADDY</a>, " +
            "<a href='https://x.com/O_LEEGEND' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ryomen</a>, " +
            "<a href='https://x.com/lukass3411' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@lukass ( Re )</a>, " +
            "<a href='https://x.com/Sahil_re_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Sahil</a>" +
            "<br><br>Their dedication continues to strengthen the Re ecosystem. Together, we're building the future of decentralized reinsurance.",
          ru: "Захватывающие новости из сообщества Re! Введена новая роль: <strong>(Re)al Holder</strong>. " +
            "Для верификации и получения этой роли необходимо иметь минимум <strong>200 reUSD или reUSDe</strong>. " +
            "Верификация доступна на <a href='https://guild.xyz/re' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>guild.xyz/re</a>." +
            "<br><br>Мы рады отметить недавние повышения в нашем сообществе:" +
            "<br><br><strong>@(re)al contributor:</strong> " +
            "<a href='https://x.com/Som_6991' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Som</a>, " +
            "<a href='https://x.com/cozjji' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@cozjji</a>, " +
            "<a href='https://x.com/n4zorK' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@n4zorK</a>, " +
            "<a href='https://x.com/0xPierre' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Pierreã</a>, " +
            "<a href='https://x.com/Capzz09' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Capzz</a>, " +
            "<a href='https://x.com/envynity_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@envynity</a>, " +
            "<a href='https://x.com/Ki1ta_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ki1ta</a>" +
            "<br><br><strong>@(re)al OG:</strong> " +
            "<a href='https://x.com/Lady_Red_re' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Lady_Red</a>" +
            "<br><br><strong>@(re)gional helper:</strong> " +
            "<a href='https://x.com/Riffk1' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Riffk1</a>" +
            "<br><br><strong>@(re)al MEGA Legend:</strong> " +
            "<a href='https://x.com/MohdSarim0' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@EREN DADDY</a>, " +
            "<a href='https://x.com/O_LEEGEND' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ryomen</a>, " +
            "<a href='https://x.com/lukass3411' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@lukass ( Re )</a>, " +
            "<a href='https://x.com/Sahil_re_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Sahil</a>" +
            "<br><br>Их преданность продолжает укреплять экосистему Re. Вместе мы строим будущее децентрализованного перестрахования.",
          uk: "Захоплюючі новини зі спільноти Re! Введена нова роль: <strong>(Re)al Holder</strong>. " +
            "Для верифікації та отримання цієї ролі необхідно мати мінімум <strong>200 reUSD або reUSDe</strong>. " +
            "Верифікація доступна на <a href='https://guild.xyz/re' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>guild.xyz/re</a>." +
            "<br><br>Ми раді відзначити недавні підвищення в нашій спільноті:" +
            "<br><br><strong>@(re)al contributor:</strong> " +
            "<a href='https://x.com/Som_6991' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Som</a>, " +
            "<a href='https://x.com/cozjji' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@cozjji</a>, " +
            "<a href='https://x.com/n4zorK' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@n4zorK</a>, " +
            "<a href='https://x.com/0xPierre' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Pierreã</a>, " +
            "<a href='https://x.com/Capzz09' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Capzz</a>, " +
            "<a href='https://x.com/envynity_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@envynity</a>, " +
            "<a href='https://x.com/Ki1ta_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ki1ta</a>" +
            "<br><br><strong>@(re)al OG:</strong> " +
            "<a href='https://x.com/Lady_Red_re' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Lady_Red</a>" +
            "<br><br><strong>@(re)gional helper:</strong> " +
            "<a href='https://x.com/Riffk1' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Riffk1</a>" +
            "<br><br><strong>@(re)al MEGA Legend:</strong> " +
            "<a href='https://x.com/MohdSarim0' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@EREN DADDY</a>, " +
            "<a href='https://x.com/O_LEEGEND' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ryomen</a>, " +
            "<a href='https://x.com/lukass3411' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@lukass ( Re )</a>, " +
            "<a href='https://x.com/Sahil_re_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Sahil</a>" +
            "<br><br>Їхня відданість продовжує зміцнювати екосистему Re. Разом ми будуємо майбутнє децентралізованого перестрахування.",
          vi: "Tin thú vị từ cộng đồng Re! Một vai trò mới đã được giới thiệu: <strong>(Re)al Holder</strong>. " +
            "Để xác minh và nhận vai trò này, cần có ít nhất <strong>200 reUSD hoặc reUSDe</strong>. " +
            "Xác minh có sẵn tại <a href='https://guild.xyz/re' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>guild.xyz/re</a>." +
            "<br><br>Chúng tôi vui mừng chúc mừng các thăng cấp gần đây trong cộng đồng:" +
            "<br><br><strong>@(re)al contributor:</strong> " +
            "<a href='https://x.com/Som_6991' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Som</a>, " +
            "<a href='https://x.com/cozjji' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@cozjji</a>, " +
            "<a href='https://x.com/n4zorK' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@n4zorK</a>, " +
            "<a href='https://x.com/0xPierre' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Pierreã</a>, " +
            "<a href='https://x.com/Capzz09' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Capzz</a>, " +
            "<a href='https://x.com/envynity_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@envynity</a>, " +
            "<a href='https://x.com/Ki1ta_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ki1ta</a>" +
            "<br><br><strong>@(re)al OG:</strong> " +
            "<a href='https://x.com/Lady_Red_re' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Lady_Red</a>" +
            "<br><br><strong>@(re)gional helper:</strong> " +
            "<a href='https://x.com/Riffk1' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Riffk1</a>" +
            "<br><br><strong>@(re)al MEGA Legend:</strong> " +
            "<a href='https://x.com/MohdSarim0' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@EREN DADDY</a>, " +
            "<a href='https://x.com/O_LEEGEND' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ryomen</a>, " +
            "<a href='https://x.com/lukass3411' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@lukass ( Re )</a>, " +
            "<a href='https://x.com/Sahil_re_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Sahil</a>" +
            "<br><br>Sự cống hiến của họ tiếp tục củng cố hệ sinh thái Re. Cùng nhau, chúng ta đang xây dựng tương lai của tái bảo hiểm phi tập trung.",
          id: "Berita menarik dari komunitas Re! Sebuah peran baru telah diperkenalkan: <strong>(Re)al Holder</strong>. " +
            "Untuk verifikasi dan menerima peran ini, pemegang memerlukan minimal <strong>200 reUSD atau reUSDe</strong>. " +
            "Verifikasi tersedia di <a href='https://guild.xyz/re' target='_blank' rel='noopener noreferrer' " +
            "style='color: var(--accent); text-decoration: underline;'>guild.xyz/re</a>." +
            "<br><br>Kami sangat senang merayakan promosi terbaru dalam komunitas kami:" +
            "<br><br><strong>@(re)al contributor:</strong> " +
            "<a href='https://x.com/Som_6991' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Som</a>, " +
            "<a href='https://x.com/cozjji' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@cozjji</a>, " +
            "<a href='https://x.com/n4zorK' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@n4zorK</a>, " +
            "<a href='https://x.com/0xPierre' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Pierreã</a>, " +
            "<a href='https://x.com/Capzz09' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Capzz</a>, " +
            "<a href='https://x.com/envynity_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@envynity</a>, " +
            "<a href='https://x.com/Ki1ta_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ki1ta</a>" +
            "<br><br><strong>@(re)al OG:</strong> " +
            "<a href='https://x.com/Lady_Red_re' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Lady_Red</a>" +
            "<br><br><strong>@(re)gional helper:</strong> " +
            "<a href='https://x.com/Riffk1' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Riffk1</a>" +
            "<br><br><strong>@(re)al MEGA Legend:</strong> " +
            "<a href='https://x.com/MohdSarim0' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@EREN DADDY</a>, " +
            "<a href='https://x.com/O_LEEGEND' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Ryomen</a>, " +
            "<a href='https://x.com/lukass3411' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@lukass ( Re )</a>, " +
            "<a href='https://x.com/Sahil_re_' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: underline;'>@Sahil</a>" +
            "<br><br>Dedikasi mereka terus memperkuat ekosistem Re. Bersama-sama, kami membangun masa depan reasuransi terdesentralisasi."
        }
      },
      {
        title: {
          en: "RE-EVENTS",
          ru: "RE-события",
          uk: "RE-події",
          vi: "RE-sự kiện",
          id: "RE-acara"
        },
        text: {
          en: "Guess the Film - Friday, January 23, 2026, 19:00<br><br>Puzzles - Saturday, January 24, 2026, 16:00<br><br>For details, check RE-announcements or ask the helpers.",
          ru: "Угадай Фильм - пятница, 23 января 2026 г. 19:00<br><br>Пазлы - суббота, 24 января 2026 г. 16:00<br><br>За деталями зайдите в RE-announcements или спросите у хелперов.",
          uk: "Вгадай Фільм - п'ятниця, 23 січня 2026 р. 19:00<br><br>Пазли - субота, 24 січня 2026 р. 16:00<br><br>За деталями зайдіть у RE-announcements або запитайте хелперів.",
          vi: "Đoán Phim - Thứ Sáu, 23 tháng 1 năm 2026, 19:00<br><br>Trò chơi ghép hình - Thứ Bảy, 24 tháng 1 năm 2026, 16:00<br><br>Để biết thêm chi tiết, hãy vào RE-announcements hoặc hỏi các helper.",
          id: "Tebak Film - Jumat, 23 Januari 2026, 19:00<br><br>Puzzle - Sabtu, 24 Januari 2026, 16:00<br><br>Untuk detail lebih lanjut, silakan kunjungi RE-announcements atau tanyakan kepada para helper."
        }
      },
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
      }
    ],
    metrics: {
      TVL: "$401,793,644",
      "Onchain Capital": "$122,342,037",
      "Offchain Capital": "$64,310,432",
      "Premium Receivable": "$215,141,174"
    },
    social: [
      {
        author: "RE Protocol",
        link: "https://x.com/re",
        icon: "https://pbs.twimg.com/profile_images/1999166607638265856/-2lfeHam_400x400.jpg",
        text: {
          en: "Re Protocol is a blockchain-based system that connects traditional insurance markets with decentralized finance (DeFi).",
          ru: "Re Protocol - это блокчейн-система, которая соединяет традиционные страховые рынки с децентрализованными финансами (DeFi).",
          uk: "Re Protocol - це блокчейн-система, яка поєднує традиційні страхові ринки з децентралізованими фінансами (DeFi).",
          vi: "Re Protocol là một hệ thống dựa trên blockchain, kết nối thị trường bảo hiểm truyền thống với tài chính phi tập trung (DeFi).",
          id: "Re Protocol adalah sistem berbasis blockchain yang menghubungkan pasar asuransi tradisional dengan keuangan terdesentralisasi (DeFi)."
        },
        tweet: {
          en: "The State of the Reinsurance Market at Year-End 2025. And How Re Is Navigating It. (See the full version on X.)",
          ru: "Состояние рынка перестрахования на конец 2025 года и то, как Re ориентируется в текущих условиях. (Полную версию смотрите в X.)",
          uk: "Стан ринку перестрахування на кінець 2025 року та те, як Re орієнтується в цих умовах. (Повну версію дивіться на X.)",
          vi: "Tình hình thị trường tái bảo hiểm vào cuối năm 2025 và cách Re đang thích ứng. (Xem phiên bản đầy đủ trên X.)",
          id: "Kondisi pasar reasuransi pada akhir tahun 2025 dan bagaimana Re menavigasinya. (Lihat versi lengkap di X.)"
        }
      },
      {
        author: "Karn Saroya",
        link: "https://x.com/karnsaroya",
        icon: "https://pbs.twimg.com/profile_images/1757146411962146816/YjmvhwIZ_400x400.jpg",
        text: {
          en: "Co-founder & CEO, RE",
          ru: "Сооснователь и CEO, RE",
          uk: "Співзасновник та CEO, RE",
          vi: "Đồng sáng lập & CEO, RE",
          id: "Co-founder & CEO, RE"
        },
        tweet: {
          en: "Listen in, get updates on Re and the evolution of the risk substrate that backs all economic activity n chill (See the full version on X.)",
          ru: "Слушайте, получайте обновления о Re и развитии рискованной основы, которая поддерживает всю экономическую активность, и расслабляйтесь (Смотрите полную версию на X).",
          uk: "Слухайте, отримуйте оновлення про Re та еволюцію ризикової основи, яка підтримує всю економічну діяльність, і розслабляйтеся (Дивіться повну версію на X).",
          vi: "Hãy lắng nghe, cập nhật về Re và sự phát triển của cơ sở rủi ro hỗ trợ tất cả hoạt động kinh tế và thư giãn (Xem phiên bản đầy đủ trên X).",
          id: "Dengarkan, dapatkan pembaruan tentang Re dan evolusi substrat risiko yang mendukung semua aktivitas ekonomi dan santai saja (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Natalie Gray",
        link: "https://x.com/natalieevagray",
        icon: "https://pbs.twimg.com/profile_images/1919825728318930947/a-Z1wC2N_400x400.jpg",
        text: {
          en: "Co-founder & Mommy, RE — designing (re)al experiences and narratives to reinsure trillions on-chain",
          ru: "Сооснователь и Мамочка, RE — создание (ре)альных опытов и нарративов для перестрахования",
          uk: "Співзасновниця та Мамочка, RE — створення (ре)альних досвідів і наративів для перестрахування трильйонів в ончейні",
          vi: "Đồng sáng lập & Mommy, RE — thiết kế trải nghiệm và câu chuyện (re)al để tái bảo hiểm hàng nghìn tỷ đô trên blockchain",
          id: "Co-founder & Mommy, RE — merancang pengalaman dan narasi (re)al untuk mereasuransikan triliunan secara on-chain"
        },
        tweet: {
          en: "Done with hype (See the full version on X.)",
          ru: "Хватит шумихи (Смотрите полную версию на X).",
          uk: "Досить ажіотажу (Дивіться повну версію на X).",
          vi: "Chán sự thổi phồng rồi (Xem phiên bản đầy đủ trên X).",
          id: "Sudah cukup hype (Lihat versi lengkap di X)."
        }
      },
      {
        author: "ChazEevee",
        link: "https://x.com/ChazEevee",
        icon: "https://pbs.twimg.com/profile_images/2007836099943563264/pggTViTw_400x400.jpg",
        text: {
          en: "Community Manager, RE",
          ru: "Коммьюнити-менеджер, RE",
          uk: "Ком'юніті-менеджер, RE",
          vi: "Quản lý cộng đồng, RE",
          id: "Manajer Komunitas, RE"
        },
        tweet: {
          en: "one of my goals this year is to let myself be bored more (See the full version on X.)",
          ru: "Одна из моих целей в этом году — позволять себе чаще скучать (Смотрите полную версию на X).",
          uk: "Одна з моїх цілей цього року — дозволяти собі нудьгувати більше (Дивіться повну версію на X).",
          vi: "Một trong những mục tiêu của tôi trong năm nay là để bản thân cảm thấy chán nhiều hơn (Xem phiên bản đầy đủ trên X).",
          id: "Salah satu tujuan saya tahun ini adalah membiarkan diri saya bosan lebih sering (Lihat versi lengkap di X)."
        }
      },
      {
        author: "j.mike ./",
        link: "https://x.com/miketwinks",
        icon: "https://pbs.twimg.com/profile_images/1972363197458866176/PAbBCZTs_400x400.jpg",
        text: {
          en: "Vibe Community Curator of the RE Community",
          ru: "Вайбовый коммьюнити-куратор сообщества RE",
          uk: "Вайбовий ком'юніті-куратор спільноти RE",
          vi: "Người quản lý vibe của cộng đồng RE",
          id: "Vibe Community Curator komunitas RE"
        },
        tweet: {
          en: "upd: privacy just took the top narrative in crypto twitter +8.43% in 7d (See the full version on X.)",
          ru: "Обновление: приватность только что стала главной темой в крипто-твиттере, +8,43% за 7 дней (Смотрите полную версию на X).",
          uk: "Оновлення: приватність щойно стала головною темою у крипто-твіттері, +8,43% за 7 днів (Дивіться повну версію на X).",
          vi: "Cập nhật: quyền riêng tư vừa trở thành chủ đề hàng đầu trên crypto Twitter, +8,43% trong 7 ngày (Xem phiên bản đầy đủ trên X).",
          id: "Pembaruan: privasi baru saja menjadi narasi utama di crypto Twitter, +8,43% dalam 7 hari (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Cliff White",
        link: "https://x.com/thecliffwhite",
        icon: "https://pbs.twimg.com/profile_images/2002818403602714624/tM6qyVFa_400x400.jpg",
        text: {
          en: "Co-founder, RE Labs",
          ru: "Сооснователь, RE Labs",
          uk: "Співзасновник, RE Labs",
          vi: "Đồng sáng lập, RE Labs",
          id: "Co-founder, RE Labs"
        },
        tweet: {
          en: "Great to see new markets embracing the predictability of a reinsurance product like this. (See the full version on X.)",
          ru: "Здорово видеть, что новые рынки принимают предсказуемость такого перестраховочного продукта (Смотрите полную версию на X).",
          uk: "Чудово бачити, що нові ринки приймають передбачуваність такого перестрахового продукту (Дивіться повну версію на X).",
          vi: "Thật tuyệt khi thấy các thị trường mới chấp nhận tính dự đoán của một sản phẩm tái bảo hiểm như thế này (Xem phiên bản đầy đủ trên X).",
          id: "Senang melihat pasar baru menerima prediktabilitas produk reasuransi seperti ini (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Ben Aneesh",
        link: "https://x.com/benaneesh",
        icon: "https://pbs.twimg.com/profile_images/1985752135888203776/r5zxeVS8_400x400.jpg",
        text: {
          en: "Co-founder & Engineer, RE — bringing (re)insurance on-chain",
          ru: "Сооснователь и инженер, RE — вывод (ре)страхования в ончейн",
          uk: "Співзасновник та інженер, RE — виведення (ре)страхування в ончейн",
          vi: "Đồng sáng lập & Kỹ sư, RE — đưa (tái) bảo hiểm lên on-chain",
          id: "Co-founder & Engineer, RE — membawa (re)asuransi ke on-chain"
        },
        tweet: {
          en: "most yield is either hard to understand or hard to trust. (See the full version on X.)",
          ru: "Большинство доходностей либо трудно понять, либо трудно доверять (Смотрите полную версию на X).",
          uk: "Більшість прибутковості або важко зрозуміти, або важко довіряти (Дивіться повну версію на X).",
          vi: "Hầu hết lợi suất hoặc khó hiểu, hoặc khó tin cậy (Xem phiên bản đầy đủ trên X).",
          id: "Sebagian besar hasil sulit dipahami atau sulit dipercaya (Lihat versi lengkap di X)."
        }
      },
      {
        author: "ItsMeJon",
        link: "https://x.com/ContraryActuary",
        icon: "https://pbs.twimg.com/profile_images/2004218491876909056/-q17SRwH_400x400.jpg",
        text: {
          en: "@RE New features are coming! Stay tuned for exciting updates.",
          ru: "@RE Новые функции в разработке! Следите за захватывающими обновлениями.",
          uk: "@RE Нові функції в розробці! Слідкуйте за захоплюючими оновленнями.",
          vi: "@RE Các tính năng mới sắp ra mắt! Hãy theo dõi để cập nhật thú vị.",
          id: "@RE Fitur baru akan datang! Tetap ikuti untuk pembaruan menarik."
        },
        tweet: {
          en: "Re spent 2025 proving that reinsurance can operate transparently onchain, with real counterparties, real premiums, and disciplined underwriting. 2026 is about scaling that foundation responsibly. Onchain finance only works long-term when trust and verification come first. (See the full version on X.)",
          ru: "Re провела 2025 год, доказывая, что перестрахование может работать прозрачно на блокчейне, с реальными контрагентами, реальными премиями и дисциплинированным андеррайтингом. 2026 год посвящен масштабированию этой базы с ответственностью. Финансы на блокчейне работают долгосрочно только тогда, когда доверие и проверка стоят на первом месте (Смотрите полную версию на X).",
          uk: "Re провела 2025 рік, доводячи, що перестрахування може працювати прозоро на блокчейні, з реальними контрагентами, реальними преміями та дисциплінованим андеррайтингом. 2026 рік присвячений масштабуванню цієї основи відповідально. Фінанси на блокчейні працюють довгостроково лише тоді, коли довіра та перевірка стоять на першому місці (Дивіться повну версію на X).",
          vi: "Re đã dành năm 2025 để chứng minh rằng tái bảo hiểm có thể hoạt động minh bạch trên chuỗi, với các đối tác thực sự, phí bảo hiểm thực sự và đánh giá rủi ro kỷ luật. Năm 2026 là về việc mở rộng nền tảng đó một cách có trách nhiệm. Tài chính trên chuỗi chỉ hoạt động lâu dài khi niềm tin và xác minh được đặt lên hàng đầu (Xem phiên bản đầy đủ trên X).",
          id: "Re menghabiskan tahun 2025 untuk membuktikan bahwa reasuransi dapat beroperasi secara transparan di onchain, dengan pihak lawan nyata, premi nyata, dan underwriting yang disiplin. Tahun 2026 adalah tentang memperluas fondasi itu secara bertanggung jawab. Keuangan onchain hanya bekerja jangka panjang ketika kepercayaan dan verifikasi diutamakan (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Saul",
        link: "https://x.com/SaulCapital",
        icon: "https://pbs.twimg.com/profile_images/1676182300789293057/hlyGdn1i_400x400.jpg",
        text: {
          en: "Growth, RE",
          ru: "Рост, RE",
          uk: "Зростання, RE",
          vi: "Tăng trưởng, RE",
          id: "Growth, RE"
        },
        tweet: {
          en: "great tool for observing hyperliquid traders, check them out (See the full version on X.)",
          ru: "Отличный инструмент для наблюдения за гиперликвидными трейдерами, посмотрите (Смотрите полную версию на X).",
          uk: "Чудовий інструмент для спостереження за гіперліквідними трейдерами, подивіться (Дивіться повну версію на X).",
          vi: "Công cụ tuyệt vời để quan sát các trader siêu thanh khoản, hãy xem thử (Xem phiên bản đầy đủ trên X).",
          id: "Alat yang bagus untuk mengamati trader yang sangat likuid, periksa mereka (Lihat versi lengkap di X)."
        }
      },
      {
        author: "@st3phdoteth",
        link: "https://x.com/st3phdoteth",
        icon: "https://pbs.twimg.com/profile_images/2000640002490015744/tx7gjBch_400x400.jpg",
        text: {
          en: "Marketing Chad, RE — serving up insights",
          ru: "Маркетинг-чад, RE — делимся инсайдами",
          uk: "Маркетинг-чад, RE — ділимося інсайдами",
          vi: "Marketing Chad, RE — chia sẻ những góc nhìn chuyên sâu",
          id: "Marketing Chad, RE — menyajikan insight"
        },
        tweet: {
          en: "getting ready to listen to @karnsaroya talk about @re on @therollupco (See the full version on X.)",
          ru: "Готовлюсь послушать @karnsaroya о @re на @therollupco (Смотрите полную версию на X).",
          uk: "Готуюся послухати @karnsaroya про @re на @therollupco (Дивіться повну версію на X).",
          vi: "Chuẩn bị nghe @karnsaroya nói về @re trên @therollupco (Xem phiên bản đầy đủ trên X).",
          id: "Bersiap-siap mendengarkan @karnsaroya berbicara tentang @re di @therollupco (Lihat versi lengkap di X)."
        }
      }
    ],
    art: {
      media: COMMUNITY_ART_MEDIA,
      author: "@JoomHiko",
      link: COMMUNITY_ARTIST_LINK
    },
    thread: {
      media: COMMUNITY_THREAD_MEDIA,
      author: "@fradermon",
      link: COMMUNITY_THREAD_ARTIST_LINK
    },
    handmade: {
      media: COMMUNITY_HANDMADE_MEDIA,
      author: "@0xpinkrabbits",
      link: COMMUNITY_HANDMADE_ARTIST_LINK
    },
    video: {
      media: COMMUNITY_VIDEO_MEDIA,
      author: "@halcyonserenads",
      link: COMMUNITY_VIDEO_ARTIST_LINK
    }
  }
];

const translations = {
  en: {
    metricsTitle: "Key Metrics",
    archiveTitle: "Archive", 
    socialTitle: "RE TEAM",
    artTitle: "↓Best art of the last 2 days↓",
    threadTitle: "↓Best Thread of the last 2 days↓",
    handmadeTitle: "↓Best handmade work of the last 2 days↓",
    videoTitle: "↓Best video of the last 2 days↓",
    footerText: "Published every two days",
    by: "by",
    noActivity: "No recent activity",
    issue: "Issue №",
    createdBy: "Created by",
    linksTo: "Links to",
    madeFor: "Made for RE community and its promotion",
    galleryButton: "GALLERY",
    galleryTitle: "Art Gallery",
    twitter: "Twitter",
    viewTweet: "View latest tweet",
    goToX: "Go to X profile",
    viewNewTweet: "Click to view the new tweet"
  },
  ru: {
    metricsTitle: "Ключевые метрики",
    archiveTitle: "Архив",
    socialTitle: "RE TEAM",
    artTitle: "↓Лучший арт за последние 2 дня↓",
    threadTitle: "↓Лучший тред за последние 2 дня↓",
    handmadeTitle: "↓Лучшая ручная работа за последние 2 дня↓",
    videoTitle: "↓Лучшее видео за последние 2 дня↓",
    footerText: "Выходит каждые два дня",
    by: "от",
    noActivity: "Нет недавней активности",
    issue: "Выпуск №",
    createdBy: "Создано",
    linksTo: "Ссылки на",
    madeFor: "Сделано для RE коммьюнити и его продвижения",
    galleryButton: "ГАЛЕРЕЯ",
    galleryTitle: "Галерея артов",
    twitter: "Twitter",
    viewTweet: "Посмотреть последний твит",
    goToX: "Перейти в X профиль",
    viewNewTweet: "Нажми чтобы посмотреть новый твит"
  },
  uk: {
    metricsTitle: "Ключові метрики",
    archiveTitle: "Архів",
    socialTitle: "RE TEAM",
    artTitle: "↓Найкращий арт за останні 2 дні↓",
    threadTitle: "↓Найкращий тред за останні 2 дні↓",
    handmadeTitle: "↓Найкраща ручна робота за останні 2 дні↓",
    videoTitle: "↓Найкраще відео за останні 2 дні↓",
    footerText: "Виходить кожні два дні",
    by: "від",
    noActivity: "Немає недавньої активності",
    issue: "Випуск №",
    createdBy: "Створено",
    linksTo: "Посилання на",
    madeFor: "Зроблено для RE спільноти та її просування",
    galleryButton: "ГАЛЕРЕЯ",
    galleryTitle: "Галерея артів",
    twitter: "Twitter",
    viewTweet: "Переглянути останній твіт",
    goToX: "Перейти в X профіль",
    viewNewTweet: "Натисни, щоб переглянути новий твіт"
  },
  vi: {
    metricsTitle: "Chỉ số chính",
    archiveTitle: "Lưu trữ",
    socialTitle: "RE TEAM",
    artTitle: "Tác phẩm nghệ thuật hay nhất trong 2 ngày qua↓",
    threadTitle: "↓Thread hay nhất trong 2 ngày qua↓",
    handmadeTitle: "Tác phẩm thủ công hay nhất trong 2 ngày qua↓",
    videoTitle: "Video hay nhất trong 2 ngày qua↓",
    footerText: "Xuất bản mỗi hai ngày",
    by: "bởi",
    noActivity: "Không có hoạt động gần đây",
    issue: "Số phát hành №",
    createdBy: "Được tạo bởi",
    linksTo: "Liên kết đến",
    madeFor: "Được tạo cho cộng đồng RE và quảng bá của nó",
    galleryButton: "THƯ VIỆN",
    galleryTitle: "Thư viện nghệ thuật",
    twitter: "Twitter",
    viewTweet: "Xem tweet mới nhất",
    goToX: "Đi tới hồ sơ X",
    viewNewTweet: "Nhấn để xem tweet mới"
  },
  id: {
    metricsTitle: "Metrik Utama",
    archiveTitle: "Arsip",
    socialTitle: "RE TEAM",
    artTitle: "↓Karya seni terbaik dalam 2 hari terakhir↓",
    threadTitle: "↓Thread terbaik dalam 2 hari terakhir↓",
    handmadeTitle: "↓Karya tangan terbaik dalam 2 hari terakhir↓",
    videoTitle: "↓Video terbaik dalam 2 hari terakhir↓",
    footerText: "Diterbitkan setiap dua hari",
    by: "oleh",
    noActivity: "Tidak ada aktivitas terkini",
    issue: "Edisi №",
    createdBy: "Dibuat oleh",
    linksTo: "Tautan ke",
    madeFor: "Dibuat untuk komunitas RE dan promosinya",
    galleryButton: "GALERI",
    galleryTitle: "Galeri Seni",
    twitter: "Twitter",
    viewTweet: "Lihat tweet terbaru",
    goToX: "Pergi ke profil X",
    viewNewTweet: "Klik untuk melihat tweet terbaru"
  }
};

let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
let currentIssueIndex = 0;

// Маппинг имен к их X профилям
const userXProfiles = {
  'Not Emperor Osmo': 'https://x.com/Flowslikeosmo',
  '@delay': 'https://x.com/nevergiveduck',
  'delay': 'https://x.com/nevergiveduck',
  '@dreshik': 'https://x.com/dreshik_',
  'dreshik': 'https://x.com/dreshik_'
};

function replaceNamesWithLinks(text) {
  if (!text) return text;
  

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;
  
 
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      let result = text;
      let wasChanged = false;
      
     
      const sortedNames = Object.keys(userXProfiles).sort((a, b) => b.length - a.length);
      
      sortedNames.forEach(name => {
        const profileUrl = userXProfiles[name];
        
        const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
       
        const regex = new RegExp(`(^|[^\\w@])${escapedName}(?![\\w@])`, 'gi');
        
        const newResult = result.replace(regex, (match, prefix) => {
          
          const foundName = match.substring(prefix ? prefix.length : 0);
          wasChanged = true;
          return prefix + `<a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="user-link">${foundName}</a>`;
        });
        
        result = newResult;
      });
      
      if (wasChanged && result !== text) {
        
        const temp = document.createElement('div');
        temp.innerHTML = result;
        
        const parent = node.parentNode;
        while (temp.firstChild) {
          parent.insertBefore(temp.firstChild, node);
        }
        parent.removeChild(node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      
      if (node.tagName && node.tagName.toLowerCase() === 'a' && node.classList && node.classList.contains('user-link')) {
        return;
      }
      
      const children = Array.from(node.childNodes);
      children.forEach(processNode);
    }
  }
  
  
  const children = Array.from(tempDiv.childNodes);
  children.forEach(processNode);
  
  return tempDiv.innerHTML;
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  renderIssue();
  updateTranslations();
}

function updateTranslations() {
  const t = translations[currentLanguage];
  
  // archiveTitle now uses an image, so we don't update it
  
  const socialTitleEl = document.getElementById('socialTitle');
  if (socialTitleEl) socialTitleEl.textContent = t.socialTitle;
  
  const artTitleEl = document.getElementById('artTitle');
  if (artTitleEl) {
    artTitleEl.textContent = t.artTitle;
  }
  
  const footerTextEl = document.getElementById('footerText');
  if (footerTextEl) footerTextEl.textContent = t.footerText;
  
  const galleryButton = document.getElementById('galleryButton');
  if (galleryButton) {
    galleryButton.textContent = t.galleryButton;
  }
  
  const footerLogoEl = document.getElementById('footerLogo');
  if (footerLogoEl) {
    footerLogoEl.textContent = "re";
  }
  
  const creditsEl = document.getElementById('footerCredits');
  if (creditsEl) {
    creditsEl.innerHTML = `${t.createdBy} <a href="https://x.com/sta1ve69" target="_blank" rel="noopener noreferrer" class="footer-link">sta1ve</a> and <a href="https://x.com/gotfc_" target="_blank" rel="noopener noreferrer" class="footer-link">qos1mo</a>`;
  }
  
  const communityEl = document.getElementById('footerCommunity');
  if (communityEl) {
    communityEl.innerHTML = `${t.linksTo} <a href="https://www.notion.so/279e46cc240580fbb337c366b9e58e9b?v=284e46cc240580308955000c5400d304" target="_blank" rel="noopener noreferrer" class="footer-link footer-link-re">re</a><br>${t.madeFor}`;
  }
}

function loadIssue(index) {
  if (index >= 0 && index < issues.length) {
    currentIssueIndex = index;
    renderIssue();
  }
}

function showTweetModal(post) {
  const t = translations[currentLanguage];
  const tweet = typeof post.tweet === 'object' ? post.tweet[currentLanguage] : post.tweet;
  
 
  const handle = post.author
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '')
    .toLowerCase();
  
  
  const modal = document.createElement('div');
  modal.className = 'tweet-modal';
  modal.innerHTML = `
    <button class="tweet-modal-close" aria-label="Close">×</button>
    <div class="tweet-modal-content">
      <div class="tweet-card">
        <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="tweet-card-header">
          <img src="${post.icon}" alt="${post.author}" class="tweet-card-avatar" />
          <div class="tweet-card-author">
            <div class="tweet-card-name">${post.author}</div>
            <div class="tweet-card-handle">@${handle}</div>
          </div>
        </a>
        <div class="tweet-card-text">${tweet || t.noActivity}</div>
        <div class="tweet-card-footer">
          <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="tweet-card-link">
            <span class="tweet-x-icon">𝕏</span>
            <span>${t.goToX}</span>
          </a>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  
  setTimeout(() => modal.classList.add('active'), 10);
  
  
  const closeBtn = modal.querySelector('.tweet-modal-close');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  
  
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function renderIssue() {
  const current = issues[currentIssueIndex];
  const t = translations[currentLanguage];
  
  const issueNumberEl = document.getElementById("issueNumber");
  const issueDateEl = document.getElementById("issueDate");

  if (issueNumberEl) {
    
    const oldTextEl = issueNumberEl.parentNode.querySelector("#issueNumberText");
    if (oldTextEl) {
      oldTextEl.remove();
    }

    
    if (current.number === 1 && ISSUE_1_IMAGE) {
      issueNumberEl.src = ISSUE_1_IMAGE;
      issueNumberEl.alt = `${t.issue}${current.number}`;
      issueNumberEl.style.display = "block";
    } else {
      
      issueNumberEl.style.display = "none";
      const textEl = document.createElement("span");
      textEl.id = "issueNumberText";
      textEl.textContent = `${t.issue}${current.number}`;
      issueNumberEl.parentNode.insertBefore(textEl, issueNumberEl);
    }
  }

  if (issueDateEl) {
    
    const oldDateTextEl = issueDateEl.parentNode.querySelector("#issueDateText");
    if (oldDateTextEl) {
      oldDateTextEl.remove();
    }

    
    if (current.number === 1 && ISSUE_1_DATE_IMAGE) {
      issueDateEl.src = ISSUE_1_DATE_IMAGE;
      let dateText = current.date;
      if (currentLanguage === 'ru' && current.dateRu) dateText = current.dateRu;
      else if (currentLanguage === 'uk' && current.dateUk) dateText = current.dateUk;
      else if (currentLanguage === 'vi' && current.dateVi) dateText = current.dateVi;
      else if (currentLanguage === 'id' && current.dateId) dateText = current.dateId;
      issueDateEl.alt = dateText;
      issueDateEl.style.display = "block";
    } else {
      
      issueDateEl.style.display = "none";
      let dateText = current.date;
      if (currentLanguage === 'ru' && current.dateRu) dateText = current.dateRu;
      else if (currentLanguage === 'uk' && current.dateUk) dateText = current.dateUk;
      else if (currentLanguage === 'vi' && current.dateVi) dateText = current.dateVi;
      else if (currentLanguage === 'id' && current.dateId) dateText = current.dateId;
      const textEl = document.createElement("span");
      textEl.id = "issueDateText";
      textEl.textContent = dateText;
      issueDateEl.parentNode.insertBefore(textEl, issueDateEl);
    }
  }

  const articlesEl = document.getElementById("articles");
  if (articlesEl) {
    articlesEl.innerHTML = '';
    if (current.articles && current.articles.length > 0) {
      current.articles.forEach(a => {
        const el = document.createElement("article");
        const title = typeof a.title === 'object' ? a.title[currentLanguage] : a.title;
        let text = typeof a.text === 'object' ? a.text[currentLanguage] : a.text;
        
        text = replaceNamesWithLinks(text);
        el.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        articlesEl.appendChild(el);
      });
    }
  }

  // Render RE TEAM Section
  const teamSectionContainer = document.getElementById("reTeamSection");
  if (teamSectionContainer && current.team && current.team.length > 0) {
    const t = translations[currentLanguage];
    
    let teamHTML = `
      <div class="re-team-section collapsed" id="reTeamCollapsible">
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
    
    teamSectionContainer.innerHTML = teamHTML;
    
    // Add click handler for collapsible functionality
    const teamHeader = document.getElementById('reTeamHeader');
    const teamCollapsible = document.getElementById('reTeamCollapsible');
    
    if (teamHeader && teamCollapsible) {
      teamHeader.addEventListener('click', function() {
        teamCollapsible.classList.toggle('collapsed');
      });
    }
  }

  // Archive is now manually managed in HTML
  // const archiveEl = document.getElementById("archive");
  // Archive links are added manually to preserve historical issues


  const artEl = document.getElementById("communityArt");
  if (artEl) {
    let artHTML = '';
    
    
    function getMediaElement(mediaUrl) {
      let mediaElement = "";
      
      if (mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be")) {
        let videoId = "";
        
        try {
          if (mediaUrl.includes("youtube.com/embed/")) {
            videoId = mediaUrl.split("youtube.com/embed/")[1].split("?")[0].split("&")[0];
          } else if (mediaUrl.includes("youtube.com/shorts/")) {
            videoId = mediaUrl.split("youtube.com/shorts/")[1].split("?")[0].split("&")[0];
          } else if (mediaUrl.includes("youtu.be/")) {
            const parts = mediaUrl.split("youtu.be/")[1];
            videoId = parts ? parts.split("?")[0].split("&")[0] : "";
          } else if (mediaUrl.includes("youtube.com/watch")) {
            try {
              const url = new URL(mediaUrl);
              videoId = url.searchParams.get("v") || "";
            } catch (e) {
              const match = mediaUrl.match(/[?&]v=([^&]+)/);
              if (match) videoId = match[1];
            }
          }
          
          if (videoId) {
            videoId = videoId.trim().split("&")[0].split("?")[0].split("#")[0];
            if (videoId.length > 0) {
              mediaElement = `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="community-media"></iframe>`;
            }
          }
        } catch (error) {
          console.error("Ошибка обработки YouTube ссылки:", error);
        }
      } else if (mediaUrl.includes("vimeo.com")) {
        let videoId = "";
        if (mediaUrl.includes("vimeo.com/")) {
          videoId = mediaUrl.split("vimeo.com/")[1].split("?")[0];
        }
        if (videoId) {
          mediaElement = `<iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="community-media"></iframe>`;
        }
      } else if (mediaUrl.match(/\.(mp4|webm|ogg|mov)$/i)) {
        mediaElement = `<video controls class="community-media"><source src="${mediaUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
      } else {
        mediaElement = `<img src="${mediaUrl}" alt="Community Art" class="community-media">`;
      }
      
      return mediaElement;
    }
    
    // Best art
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
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    // Best thread
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
    
    // Best handmade
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
    
    // Best video
    if (current.video) {
      const authorText = current.video.author;
      const authorLink = current.video.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
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