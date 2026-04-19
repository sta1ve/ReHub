const CATEGORIES = {
  art: "Best art of the last 2 days",
  thread: "Best thread of the last 2 days",
  handmade: "Best handmade work of the last 2 days",
  video: "Best video of the last 2 days"
};

const galleryItems = [

  {
    media: "https://pbs.twimg.com/media/G_HFn12XIAAvE3T?format=jpg&name=medium",  
    twitter: "https://x.com/JoomHiko",                       
    category: "art"
  },
  {
    media: "https://pbs.twimg.com/media/G-zC0HFXwAAcLlk?format=jpg&name=4096x4096",  
    twitter: "https://x.com/ZaYaC011",                       
    category: "art"
  },
  {
    media: "https://i.postimg.cc/P59r1zKg/G-j-Ly4WXs-AE9u-Lp.jpg",  
    twitter: "https://x.com/syowro",                       
    category: "art"
  },

  {
    media: "https://pbs.twimg.com/media/G-0NmumXUAERTTq?format=jpg&name=large",  
    twitter: "https://x.com/fradermon",                       
    category: "thread"
  },
  {
    media: "https://i.postimg.cc/kgCsLk7b/sdsada.png",  
    twitter: "https://x.com/0xboomin",                       
    category: "thread"
  },

  

  {
    media: "https://pbs.twimg.com/media/G-8oz-uW0AEnlVR?format=jpg&name=large",
    twitter: "https://x.com/0xpinkrabbits",
    category: "handmade"
  },
  {
    media: "https://pbs.twimg.com/media/G-t1c14bQAI3o15?format=jpg&name=large",
    twitter: "https://x.com/0xDuckyRWA",
    category: "handmade"
  },
  {
    media: "https://i.postimg.cc/8PxmfLRx/G-e-HC0Wag-AA9S20.jpg",
    twitter: "https://x.com/0xpinkrabbits",
    category: "handmade"
  },
  

  {
    media: "0122.mp4",  
    twitter: "https://x.com/halcyonserenads",
    category: "video"
  },
  {
    media: "0116_1_.mp4",  
    twitter: "https://x.com/Dannnnnok",
    category: "video"
  },
  {
    media: "https://i.postimg.cc/MHCwWzd9/G-c2XEFWYAAcf9N.gif",  
    twitter: "https://x.com/22hizzzaaa",
    category: "video"
  },


];

const translations = {
  en: {
    galleryTitle: "Gallery",
    infoText: "Here are stored those artworks that were chosen as the best in the last newspaper, or we also liked them but they could not beat the Best art of 2 days",
    twitter: "Twitter",
    footerText: "Published every two days",
    createdBy: "Created by",
    madeFor: "Made for RE community and its promotion",
    categoryArt: "Best arts",
    categoryThread: "Best threads",
    categoryHandmade: "Best handmades",
    categoryVideo: "Best videos",
    tabArt: "Art",
    tabThread: "Thread",
    tabHandmade: "Handmade",
    tabVideo: "Video",
    backToMain: "← Back to main page"
  },
  ru: {
    galleryTitle: "Галерея",
    infoText: "Тут хранятся те арты которые были выбраны лучшими в прошлой газете, или тоже нам понравились но не смогли обойти Лучший арт за 2 дня",
    twitter: "Twitter",
    footerText: "Выходит каждые два дня",
    createdBy: "Создано",
    madeFor: "Сделано для RE комьюнити и его продвижения",
    categoryArt: "Лучшие арты",
    categoryThread: "Лучшие треды",
    categoryHandmade: "Лучшие ручные работы",
    categoryVideo: "Лучшие видосы",
    tabArt: "Арты",
    tabThread: "Треды",
    tabHandmade: "Ручная работа",
    tabVideo: "Видео",
    backToMain: "← Назад на главную"
  },
  uk: {
    galleryTitle: "Галерея",
    infoText: "Тут зберігаються ті арти які були обрані найкращими в минулій газеті, або теж нам сподобалися але не змогли обійти Найкращий арт за 2 дні",
    twitter: "Twitter",
    footerText: "Виходить кожні два дні",
    createdBy: "Створено",
    madeFor: "Зроблено для RE спільноти та її просування",
    categoryArt: "Найкращi арти",
    categoryThread: "Найкращi треди",
    categoryHandmade: "Найкращi ручнi роботи",
    categoryVideo: "Найкращi відео",
    tabArt: "Арти",
    tabThread: "Треди",
    tabHandmade: "Ручна робота",
    tabVideo: "Відео",
    backToMain: "← Назад на головну"
  },
  vi: {
    galleryTitle: "Thư viện ảnh",
    infoText: "Đây là nơi lưu trữ những tác phẩm nghệ thuật được chọn là tốt nhất trong báo lần trước, hoặc chúng tôi cũng thích nhưng không thể vượt qua Tác phẩm nghệ thuật hay nhất trong 2 ngày",
    twitter: "Twitter",
    footerText: "Xuất bản mỗi hai ngày",
    createdBy: "Được tạo bởi",
    madeFor: "Được tạo cho cộng đồng RE và quảng bá của nó",
    categoryArt: "Art tốt nhất",
    categoryThread: "Thread tốt nhất",
    categoryHandmade: "Thủ công tốt nhất",
    categoryVideo: "Video tốt nhất",
    tabArt: "Art",
    tabThread: "Thread",
    tabHandmade: "Thủ công",
    tabVideo: "Video",
    backToMain: "← Quay lại trang chính"
  },
  id: {
    galleryTitle: "Galeri",
    infoText: "Di sini disimpan karya seni yang dipilih sebagai yang terbaik di koran terakhir, atau kami juga menyukainya tetapi tidak bisa mengalahkan Karya seni terbaik 2 hari",
    twitter: "Twitter",
    footerText: "Diterbitkan setiap dua hari",
    createdBy: "Dibuat oleh",
    madeFor: "Dibuat untuk komunitas RE dan promosinya",
    categoryArt: "Art terbaik",
    categoryThread: "Thread terbaik",
    categoryHandmade: "Handmade terbaik",
    categoryVideo: "Video terbaik",
    tabArt: "Art",
    tabThread: "Thread",
    tabHandmade: "Handmade",
    tabVideo: "Video",
    backToMain: "← Kembali ke halaman utama"
  }
};

let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
let currentCategory = localStorage.getItem('selectedCategory') || 'art';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  updateTranslations();
  updateCategoryTitle();
  renderGallery();
}

function setCategory(category) {
  currentCategory = category;
  localStorage.setItem('selectedCategory', category);
  updateCategoryTitle();
  updateActiveTab();
  renderGallery();
}

function updateCategoryTitle() {
  const categoryTitleEl = document.getElementById('categoryTitle');
  if (!categoryTitleEl) return;
  
  const t = translations[currentLanguage];
  let title = '';
  
  if (currentCategory === 'art') {
    title = t.categoryArt;
  } else if (currentCategory === 'thread') {
    title = t.categoryThread;
  } else if (currentCategory === 'handmade') {
    title = t.categoryHandmade;
  } else if (currentCategory === 'video') {
    title = t.categoryVideo;
  }
  
  categoryTitleEl.textContent = title;
}

function updateActiveTab() {
  const tabs = document.querySelectorAll('.gallery-tabs .tab');
  tabs.forEach(tab => {
    const category = tab.getAttribute('data-category');
    if (category === currentCategory) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

function updateTranslations() {
  const t = translations[currentLanguage];
  
  // galleryTitle now uses an image, so we don't update it
  
  const infoTextEl = document.getElementById('infoText');
  if (infoTextEl) {
    infoTextEl.textContent = t.infoText;
  }
  
  const footerTextEl = document.getElementById('footerText');
  if (footerTextEl) {
    footerTextEl.textContent = t.footerText;
  }
  
  const creditsEl = document.getElementById('footerCredits');
  if (creditsEl) {
    creditsEl.innerHTML = `${t.createdBy} <a href="https://x.com/sta1ve69" target="_blank" rel="noopener noreferrer" class="footer-link">sta1ve</a> and <a href="https://x.com/gotfc_" target="_blank" rel="noopener noreferrer" class="footer-link">qos1mo</a>`;
  }
  
  const communityEl = document.getElementById('footerCommunity');
  if (communityEl) {
    communityEl.innerHTML = `<a href="https://www.notion.so/279e46cc240580fbb337c366b9e58e9b?v=284e46cc240580308955000c5400d304" target="_blank" rel="noopener noreferrer" class="footer-link footer-link-re">re</a><br>${t.madeFor}`;
  }
  
  const footerLogoEl = document.getElementById('footerLogo');
  if (footerLogoEl) {
    footerLogoEl.textContent = "re";
  }
  
  // Translate tab buttons
  const tabs = document.querySelectorAll('.gallery-tabs .tab');
  tabs.forEach(tab => {
    const category = tab.getAttribute('data-category');
    if (category === 'art') {
      tab.textContent = t.tabArt;
    } else if (category === 'thread') {
      tab.textContent = t.tabThread;
    } else if (category === 'handmade') {
      tab.textContent = t.tabHandmade;
    } else if (category === 'video') {
      tab.textContent = t.tabVideo;
    }
  });
  
  // Translate back link
  const backLink = document.querySelector('.gallery-back-link');
  if (backLink) {
    backLink.textContent = t.backToMain;
  }
  
  updateCategoryTitle();
}

function getMediaElement(mediaUrl) {
  if (mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be")) {
    let videoId = "";
    if (mediaUrl.includes("youtube.com/embed/")) {
      videoId = mediaUrl.split("youtube.com/embed/")[1].split("?")[0];
    } else if (mediaUrl.includes("youtube.com/shorts/")) {
      videoId = mediaUrl.split("youtube.com/shorts/")[1].split("?")[0];
    } else if (mediaUrl.includes("youtu.be/")) {
      videoId = mediaUrl.split("youtu.be/")[1].split("?")[0];
    } else if (mediaUrl.includes("youtube.com/watch")) {
      try {
        videoId = new URL(mediaUrl).searchParams.get("v");
      } catch (e) {
        const match = mediaUrl.match(/[?&]v=([^&]+)/);
        if (match) videoId = match[1];
      }
    }
    
    if (videoId) {
      videoId = videoId.trim().split("&")[0].split("?")[0].split("#")[0];
      if (videoId.length > 0) {
        return `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
    }
  } else if (mediaUrl.includes("vimeo.com")) {
    let videoId = "";
    if (mediaUrl.includes("vimeo.com/")) {
      videoId = mediaUrl.split("vimeo.com/")[1].split("?")[0];
    }
    if (videoId) {
      return `<iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }
  } else if (mediaUrl.match(/\.(mp4|webm|ogg|mov)$/i)) {
    return `<video controls><source src="${mediaUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
  } else {
    return `<img src="${mediaUrl}" alt="Community Art">`;
  }
  return '';
}

function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;
  
  galleryGrid.innerHTML = '';
  
  
  const filteredItems = galleryItems.filter(item => item.category === currentCategory);
  
  if (filteredItems.length === 0) {
    galleryGrid.innerHTML = '<p style="text-align: center; color: var(--muted); padding: 40px;">No items in this category yet. Content will be loaded here.</p>';
    return;
  }
  
  filteredItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    const mediaElement = getMediaElement(item.media);
    
   
    let twitterUsername = '@creator';
    if (item.twitter) {
      const match = item.twitter.match(/x\.com\/([^\/\?]+)/);
      if (match) {
        twitterUsername = '@' + match[1];
      }
    }
    
    const twitterLink = item.twitter ? `<a href="${item.twitter}" target="_blank" rel="noopener noreferrer" class="gallery-item-link">${twitterUsername}</a>` : '';
    
    div.innerHTML = `
      ${mediaElement}
      ${twitterLink}
    `;
    
    galleryGrid.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", function() {
 
  updateActiveTab();
  updateTranslations();
  updateCategoryTitle();
  renderGallery();
  
 
  const tabs = document.querySelectorAll('.gallery-tabs .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      if (category && CATEGORIES[category]) {
        setCategory(category);
      }
    });
  });

  
  const infoButton = document.getElementById('infoButton');
  const infoModal = document.getElementById('infoModal');
  const closeModal = document.getElementById('closeModal');

  if (infoButton && infoModal && closeModal) {
    infoButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      infoModal.classList.add('active');
    });

    closeModal.addEventListener('click', function() {
      infoModal.classList.remove('active');
    });

    infoModal.addEventListener('click', function(e) {
      if (e.target === infoModal) {
        infoModal.classList.remove('active');
      }
    });

    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && infoModal.classList.contains('active')) {
        infoModal.classList.remove('active');
      }
    });
  }

  
  (function() {
    const langToggle = document.getElementById("langToggle");
    const langDropdown = document.getElementById("langDropdown");
    const langOptions = document.querySelectorAll(".lang-option");
    
    if (!langToggle || !langDropdown) {
      return;
    }
    
    langToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      langDropdown.classList.toggle("active");
    });
    
    langOptions.forEach(function(option) {
      option.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const selectedLang = this.getAttribute("data-lang");
        if (!selectedLang || !translations[selectedLang]) {
          return;
        }
        
        const mainContent = document.querySelector('.gallery-container') || document.body;
        mainContent.style.transition = 'opacity 0.2s ease';
        mainContent.style.opacity = '0.5';
        
        setTimeout(function() {
          currentLanguage = selectedLang;
          setLanguage(currentLanguage);
          langDropdown.classList.remove("active");
          
          setTimeout(function() {
            mainContent.style.opacity = '1';
          }, 100);
        }, 200);
      });
    });
    
    document.addEventListener("click", function(e) {
      if (!langDropdown.classList.contains("active")) {
        return;
      }
      
      const target = e.target;
      const isClickInside = langToggle.contains(target) || 
                           langDropdown.contains(target) ||
                           target.closest('.lang-selector');
      
      if (!isClickInside) {
        langDropdown.classList.remove("active");
      }
    });
  })();
});