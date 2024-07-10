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
      about: "About Us",
      aboutText: "Wakanda Academy, established in 2018 following the events of the Battle of Wakanda, is a pioneering educational institution committed to cultivating the next generation of leaders, innovators, and changemakers. Our mission is to provide a holistic education that combines academic excellence with character development and real-world skills.",
      mission: "Mission",
      missionText: "Our mission at Wakanda Academy is to provide an inclusive, forward-thinking education that nurtures every student's potential. We aim to inspire a passion for learning, cultivate critical thinking, and instill values of respect, responsibility, and resilience. We are dedicated to preparing students for the world, not only through rigorous academic programs but also by teaching practical life skills, fostering creativity, and encouraging personal growth.",
      vision: "Vision",
      visionText: "To be a world-class educational institution that empowers students to become influential leaders and positive change-makers in their communities and beyond.",
      programs: "Programs",
      nav8: "Academic Excellence",
      nav9: "Creative Arts",
      nav10: "STEM Education",
      nav11: "Practical Life Skills",
      nav12: "Career Guidance",
      nav13: "Extracurricular Activities",
      nav14: "Community Service",
      nav15: "Leadership Education",
      facilities: "Facilities",
      art: "Art Studio",
      hall: "Assembly Hall",
      multi: "Multimedia Center",
      chem: "Science and Robotic Lab",
      libraries: "Libraries",
      play: "Playground (for elementary)",
      bus: "School Bus",
      sport: "Sport Center",
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
      about: "Tentang Kami",
      aboutText: "Wakanda Academy, yang didirikan pada tahun 2018 setelah peristiwa Pertempuran Wakanda, adalah lembaga pendidikan terdepan yang berkomitmen untuk membina generasi pemimpin, inovator, dan pembuat perubahan berikutnya. Harapan kami adalah menyediakan pendidikan holistik yang menggabungkan keunggulan akademik dengan pengembangan karakter dan keterampilan dunia nyata.",
      mission: "Misi",
      missionText: "Misi kami di Wakanda Academy adalah menyediakan pendidikan inklusif dan berpikiran maju yang mengembangkan potensi setiap siswa. Kami bertujuan untuk menginspirasi hasrat belajar, mengembangkan pemikiran kritis, dan menanamkan nilai-nilai hormat, tanggung jawab, dan ketangguhan. Kami berdedikasi untuk mempersiapkan siswa menghadapi dunia, tidak hanya melalui program akademik yang ketat tetapi juga dengan mengajarkan keterampilan hidup praktis, mendorong kreativitas, dan mendorong pertumbuhan pribadi.",
      vision: "Visi",
      visionText: "Menjadi lembaga pendidikan kelas dunia yang memberdayakan siswa untuk menjadi pemimpin berpengaruh dan pembawa perubahan positif di komunitas mereka dan di luar.",
      programs: "Program",
      nav8: "Keunggulan Akademik",
      nav9: "Seni Kreatif",
      nav10: "Pendidikan STEM",
      nav11: "Keterampilan Hidup Praktis",
      nav12: "Bimbingan Karier",
      nav13: "Kegiatan Ekstrakurikuler",
      nav14: "Layanan Masyarakat",
      nav15: "Pendidikan Kepemimpinan",
      facilities: "Fasilitas",
      art: "Studio Seni",
      hall: "Aula Serbaguna",
      multi: "Pusat Multimedia",
      chem: "Laboratorium Sains dan Robotika",
      libraries: "Perpustakaan",
      play: "Taman Bermain (untuk SD)",
      bus: "Bus Sekolah",
      sport: "Pusat Olahraga",
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
      about: "私たちについて",
      aboutText: "ワカンダ・アカデミーは、ワカンダの戦いの後、2018年に設立された次世代のリーダー、イノベーター、そしてチェンジメーカーを育成することに専念する最先端の教育機関です。私たちの希望は、学業の卓越性とキャラクターの育成、そして実社会でのスキルを組み合わせた全人的な教育を提供することです。",
      mission: "ミッション",
      missionText: "ワカンダ・アカデミーの使命は、すべての学生の可能性を育む包括的で先進的な教育を提供することです。私たちは、学ぶことへの情熱を刺激し、批判的思考を育成し、尊敬、責任、そして回復力の価値を植え付けることを目指しています。厳格な学問プログラムだけでなく、実践的な生活スキルを教え、創造性を育み、個人の成長を奨励することで、学生を世界に備えることに専念しています。",
      vision: "ビジョン",
      visionText: "学生がコミュニティ内外で影響力のあるリーダーや積極的な変革者になることを支援する、世界クラスの教育機関を目指します。",
      programs: "プログラム",
      nav8: "学問の卓越性",
      nav9: "創造芸術",
      nav10: "STEM教育",
      nav11: "実用的な生活スキル",
      nav12: "キャリアガイダンス",
      nav13: "課外活動",
      nav14: "コミュニティサービス",
      nav15: "リーダーシップ教育",
      facilities: "設備",
      art: "アートスタジオ",
      hall: "集会ホール",
      multi: "マルチメディアセンター",
      chem: "科学とロボット工学の実験室",
      libraries: "図書館",
      play: "遊び場（小学生用)",
      bus: "スクールバス",
      sport: "スポーツセンター",
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
    const aboutElement = document.getElementById('about');
    const aboutTextElement = document.getElementById('about-text');
    const missionElement = document.getElementById('mission');
    const missionTextElement = document.getElementById('mission-text');
    const visionElement = document.getElementById('vision');
    const visionTextElement = document.getElementById('vision-text');
    const programsElement = document.getElementById('programs');
    const nav8Element = document.getElementById('8');
    const nav9Element = document.getElementById('9');
    const nav10Element = document.getElementById('10');
    const nav11Element = document.getElementById('11');
    const nav12Element = document.getElementById('12');
    const nav13Element = document.getElementById('13');
    const nav14Element = document.getElementById('14');
    const nav15Element = document.getElementById('15');
    const facilitiesElement = document.getElementById('facilities');
    const artElement = document.getElementById('art');
    const hallElement = document.getElementById('hall');
    const multiElement = document.getElementById('multi');
    const chemElement = document.getElementById('chem');
    const librariesElement = document.getElementById('libraries');
    const playElement = document.getElementById('play');
    const busElement = document.getElementById('bus');
    const sportElement = document.getElementById('sport');

    if (translations[language]) {
      titleElement.textContent = translations[language].title;
      mottoElement.textContent = translations[language].motto;
      news1Element.textContent = translations[language].news1;
      news2Element.textContent = translations[language].news2;
      news3Element.textContent = translations[language].news3;
      news4Element.textContent = translations[language].news4;
      news5Element.textContent = translations[language].news5;
      news6Element.textContent = translations[language].news6;
      aboutElement.textContent = translations[language].about;
      aboutTextElement.textContent = translations[language].aboutText;
      missionElement.textContent = translations[language].mission;
      missionTextElement.textContent = translations[language].missionText;
      visionElement.textContent = translations[language].vision;
      visionTextElement.textContent = translations[language].visionText;
      programsElement.textContent = translations[language].programs;
      nav8Element.textContent = translations[language].nav8;
      nav9Element.textContent = translations[language].nav9;
      nav10Element.textContent = translations[language].nav10;
      nav11Element.textContent = translations[language].nav11;
      nav12Element.textContent = translations[language].nav12;
      nav13Element.textContent = translations[language].nav13;
      nav14Element.textContent = translations[language].nav14;
      nav15Element.textContent = translations[language].nav15;
      facilitiesElement.textContent = translations[language].facilities;
      artElement.textContent = translations[language].art;
      hallElement.textContent = translations[language].hall;
      multiElement.textContent = translations[language].multi;
      chemElement.textContent = translations[language].chem;
      librariesElement.textContent = translations[language].libraries;
      playElement.textContent = translations[language].play;
      busElement.textContent = translations[language].bus;
      sportElement.textContent = translations[language].sport;
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