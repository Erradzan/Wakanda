document.addEventListener('DOMContentLoaded', function() {
    const translations = {
      en: {
        title: "Wakanda Academy",
        motto: "Your journey to excellence begins here",
        news1: "Breaking News:",
        news2: "Wakanda Academy Alumnus, LiSA Has Now Joined JCX Music!",
        news3: "Wakanda Academy Alumnus, Kendrick Lamar Has Now Joined JCX Music!",
        news4: "Wakanda Academy Alumnus, Rich Brian Has Now Joined JCX Music!",
        news5: "WWE Is Coming To Wakanda Academy With Big News!!",
        news6: "Study Tour To Yale, Stanford, and NYU On 9th September 2024",
        partner: "Partnerships",
        jcx: "Wakanda Academy collaborates closely with JCX Music, a renowned name in the music industry, providing students with unparalleled opportunities in music education, production, and performance arts.",
        alum: "Alumnus",
        grad1: "Graduated in 2020.",
        grad2: "Graduated in 2019.",
        grad3: "Graduated in 2019.",
        lisajcx: "Lisa Performance At JCX Music Record Studio.",
        wwe: "Through our partnership with WWE, students gain insights into sports entertainment, marketing strategies, and event management, preparing them for diverse career paths.",
        grad4: "Graduated in 2019.",
        grad5: "Graduated in 2019.",
        grad6: "Graduated in 2019.",
        shield: "Their Comeback On 2024",
        new: "Our New Partnership",
        yale: "Our affiliation with Yale University allows students to access specialized courses, exchange programs, and academic resources, enriching their educational experience and global perspective.",
        stan: "Collaboration with Stanford offers students access to cutting-edge research, international networks, and academic programs in various fields, enhancing their academic and professional growth.",
        nyu: "Partnering with New York University provides students with internships, mentorship opportunities, and exposure to urban studies and business dynamics in one of the world's most dynamic cities."
      },
      id: {
        title: "Akademi Wakanda",
        motto: "Perjalanan Anda menuju keunggulan dimulai di sini.",
        news1: "Berita Terbaru:",
        news2: "Alumni Wakanda Academy, LiSA Kini Bergabung dengan JCX Music!",
        news3: "Alumni Wakanda Academy, Kendrick Lamar Kini Bergabung dengan JCX Music!",
        news4: "Alumni Wakanda Academy, Rich Brian Kini Bergabung dengan JCX Music!",
        news5: "WWE Akan Datang ke Wakanda Academy dengan Berita Besar!!",
        news6: "Studi Wisata ke Yale, Stanford, dan NYU pada 9 September 2024",
        partner: "Kemitraan ",
        jcx: "Wakanda Academy bekerja sama erat dengan JCX Music, nama terkemuka dalam industri musik, memberikan siswa kesempatan tak tertandingi dalam pendidikan musik, produksi, dan seni pertunjukan.",
        alum: "Alumni",
        grad1: "Lulus tahun 2020.",
        grad2: "Lulus tahun 2019.",
        grad3: "Lulus tahun 2019.",
        lisajcx: "Lisa Tampil di Studio Rekaman JCX Music.",
        wwe: "Melalui kemitraan kami dengan WWE, siswa mendapatkan wawasan dalam hiburan olahraga, strategi pemasaran, dan manajemen acara, mempersiapkan mereka untuk berbagai jalur karir.",
        grad4: "Lulus tahun 2019.",
        grad5: "Lulus tahun 2019.",
        grad6: "Lulus tahun 2019.",
        shield: "Kembalinya Mereka di Tahun 2024",
        new: "Kemitraan Baru Kami",
        yale: "Keterkaitan kami dengan Universitas Yale memungkinkan siswa mengakses kursus khusus, program pertukaran, dan sumber daya akademik, memperkaya pengalaman pendidikan dan pandangan global mereka.",
        stan: "Kolaborasi dengan Stanford memberikan siswa akses ke riset terdepan, jaringan internasional, dan program akademik di berbagai bidang, meningkatkan pertumbuhan akademik dan profesional mereka.",
        nyu: "Kerjasama dengan Universitas New York memberikan siswa kesempatan magang, mentorship, dan eksposur pada studi perkotaan serta dinamika bisnis di salah satu kota terbesar di dunia."
      },
      jp: {
        title: "ワカンダアカデミー",
        motto: "卓越への旅はここから始まります。",
        news1: "速報:",
        news2: "ワカンダ・アカデミーの卒業生、LiSAがJCX Musicに参加しました！",
        news3: "ワカンダ・アカデミーの卒業生、ケンドリック・ラマーがJCX Musicに参加しました！",
        news4: "ワカンダ・アカデミーの卒業生、Rich BrianがJCX Musicに参加しました！",
        news5: "WWEがワカンダ・アカデミーに大ニュースを持ってやって来る！！",
        news6: "2024年9月9日にイェール大学、スタンフォード大学、ニューヨーク大学へのスタディツアー",
        partner: "パートナーシップ",
        jcx: "ワカンダ・アカデミーは音楽業界で名高いJCX Musicと緊密に協力し、学生たちに音楽教育、制作、パフォーマンスアートの無比の機会を提供しています。",
        alum: "卒業生",
        grad1: "2020年卒業。",
        grad2: "2019年卒業。",
        grad3: "2019年卒業。",
        lisajcx: "リサがJCX Musicのレコードスタジオでパフォーマンス",
        wwe: "WWEとのパートナーシップを通じて、学生はスポーツエンターテイメント、マーケティング戦略、イベント管理の洞察を得ることで、多様なキャリアパスに向けて準備ができます。",
        grad4: "2019年卒業。",
        grad5: "2019年卒業。",
        grad6: "2019年卒業。",
        shield: "彼らのカムバックは2024年に",
        new: "私たちの新しいパートナーシップ",
        yale: "イエール大学との提携により、学生は専門コース、交換プログラム、学術資源へのアクセスが可能となり、教育体験とグローバルな視点が豊かになります。",
        stan: "スタンフォードとの協力により、最先端の研究、国際ネットワーク、さまざまな分野の学術プログラムへのアクセスが提供され、学術および職業成長が促進されます。",
        nyu: "ニューヨーク大学とのパートナーシップにより、学生はインターンシップ、メンターシップの機会を提供され、世界有数のダイナミックな都市での都市研究とビジネスダイナミクスに触れる機会が得られます。"
      }
    };
  
    const languageSelector = document.getElementById('language-selector');
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelector.value = savedLanguage;
    switchLanguage(savedLanguage);
    languageSelector.addEventListener('change', function() {
      const selectedLanguage = this.value;
      switchLanguage(selectedLanguage);
      localStorage.setItem('language', selectedLanguage);
    });
  
    function switchLanguage(language) {
      const titleElement = document.getElementById('title');
      const mottoElement = document.getElementById('motto');
      const news1Element = document.getElementById('news1');
      const news2Element = document.getElementById('news2');
      const news3Element = document.getElementById('news3');
      const news4Element = document.getElementById('news4');
      const news5Element = document.getElementById('news5');
      const news6Element = document.getElementById('news6');
      const partnerElement = document.getElementById('partner');
      const jcxElement = document.getElementById('jcx');
      const alumElement = document.getElementById('alum');
      const grad1Element = document.getElementById('grad1');
      const grad2Element = document.getElementById('grad2');
      const grad3Element = document.getElementById('grad3');
      const lisajcxElement = document.getElementById('lisajcx');
      const wweElement = document.getElementById('wwe');
      const grad4Element = document.getElementById('grad4');
      const grad5Element = document.getElementById('grad5');
      const grad6Element = document.getElementById('grad6');
      const shieldElement = document.getElementById('shield');
      const newElement = document.getElementById('new');
      const yaleElement = document.getElementById('yale');
      const stanElement = document.getElementById('stan');
      const nyuElement = document.getElementById('nyu');
  
      if (translations[language]) {
        titleElement.textContent = translations[language].title;
        mottoElement.textContent = translations[language].motto;
        news1Element.textContent = translations[language].news1;
        news2Element.textContent = translations[language].news2;
        news3Element.textContent = translations[language].news3;
        news4Element.textContent = translations[language].news4;
        news5Element.textContent = translations[language].news5;
        news6Element.textContent = translations[language].news6;
        partnerElement.textContent = translations[language].partner;
        jcxElement.textContent = translations[language].jcx;
        alumElement.textContent = translations[language].alum;
        grad1Element.textContent = translations[language].grad1;
        grad2Element.textContent = translations[language].grad2;
        grad3Element.textContent = translations[language].grad3;
        lisajcxElement.textContent = translations[language].lisajcx;
        wweElement.textContent = translations[language].wwe;
        grad4Element.textContent = translations[language].grad4;
        grad5Element.textContent = translations[language].grad5;
        grad6Element.textContent = translations[language].grad6;
        shieldElement.textContent = translations[language].shield;
        newElement.textContent = translations[language].new;
        yaleElement.textContent = translations[language].yale;
        stanElement.textContent = translations[language].stan;
        nyuElement.textContent = translations[language].nyu;
      }
    }
  
    document.addEventListener('DOMContentLoaded', () => {
      const tickerMove = document.querySelector('.ticker-move');
    })
  });
  
  document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('menu').classList.toggle('open');
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('darkModeToggle');
  const toggleIcon = document.getElementById('toggle-icon');
  const logo = document.getElementById('logo');
  const logo2 = document.getElementById('logo2');
  const favicon = document.getElementById('favicon');
  const favicon2 = document.getElementById('favicon2');
  const favicon3 = document.getElementById('favicon3');
  const favicon4 = document.getElementById('favicon4');
  const favicon5 = document.getElementById('favicon5');
  const favicon6 = document.getElementById('favicon6');
  const favicon7 = document.getElementById('favicon7');
  const favicon8 = document.getElementById('favicon8');
  const currentMode = localStorage.getItem('mode') || 'light';
  setMode(currentMode);
  
  modeToggle.addEventListener('click', () => {
      const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      setMode(newMode);
  });
  
  function setMode(mode) {
      if (mode === 'dark') {
          document.body.classList.add('dark-mode');
          toggleIcon.classList.remove('fa-moon');
          toggleIcon.classList.add('fa-sun');
          logo.src = 'Support/Black Logo.png';
          logo2.src = 'Support/Black Logo.png';
          favicon.href = 'Support/Black Icon.png';
          favicon2.src = 'Support/Black Icon.png';
          favicon3.src = 'Support/Black Icon.png';
          favicon4.src = 'Support/Black Icon.png';
          favicon5.src = 'Support/Black Icon.png';
          favicon6.src = 'Support/Black Icon.png';
          favicon7.src = 'Support/Black Icon.png';
          favicon8.src = 'Support/Black Icon.png';
          localStorage.setItem('darkMode', 'enabled');
      } else {
          document.body.classList.remove('dark-mode');
          toggleIcon.classList.remove('fa-sun');
          toggleIcon.classList.add('fa-moon');
          logo.src = 'Support/Purple Logo.png';
          logo2.src = 'Support/Purple Logo.png';
          favicon.href = 'Support/Purple Icon.png';
          favicon2.src = 'Support/Purple Icon.png';
          favicon3.src = 'Support/Purple Icon.png';
          favicon4.src = 'Support/Purple Icon.png';
          favicon5.src = 'Support/Purple Icon.png';
          favicon6.src = 'Support/Purple Icon.png';
          favicon7.src = 'Support/Purple Icon.png';
          favicon8.src = 'Support/Purple Icon.png';
          localStorage.setItem('darkMode', 'disabled');
      }
      localStorage.setItem('mode', mode);
  }

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  })
});