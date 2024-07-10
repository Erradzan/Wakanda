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
        fac: "Faculty",
        title1: "Principal",
        name: "Unknown",
        tit2: "Vice Principal",
        sub1: "Honorary Chemistry Teacher",
        sub2: "Honorary Biology Teacher",
        sub3: "Honorary P.E. Teacher",
        sub4: "Honorary Environmental Studies Teacher",
        sub5: "Honorary Leadership and Ethics Teacher",
        sub6: "Honorary Music Teacher",
        sub7: "Honorary Mathematics Teacher",
        sub8: "Honorary Computer Science Teacher",
        sub9: "Honorary P.E. Teacher",
        sub10: "Honorary Social Studies Teacher",
        sub11: "Honorary History Teacher",
        sub12: "Honorary Science Teacher",
        sub13: "Honorary Language Teacher",
        sub14: "Honorary Art Teacher"
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
        fac: "Fakultas",
        title1: "Kepala Sekolah",
        name: "Tidak Diketahui",
        tit2: "Wakil Kepala Sekolah",
        sub1: "Guru Kehormatan Kimia",
        sub2: "Guru Kehormatan Biologi",
        sub3: "Guru Kehormatan Pendidikan Jasmani",
        sub4: "Guru Kehormatan Studi Lingkungan",
        sub5: "Guru Kehormatan Kepemimpinan dan Etika",
        sub6: "Guru Kehormatan Musik",
        sub7: "Guru Kehormatan Matematika",
        sub8: "Guru Kehormatan Ilmu Komputer",
        sub9: "Guru Kehormatan Pendidikan Jasmani",
        sub10: "Guru Kehormatan Studi Sosial",
        sub11: "Guru Kehormatan Sejarah",
        sub12: "Guru Kehormatan Sains",
        sub13: "Guru Kehormatan Bahasa",
        sub14: "Guru Kehormatan Seni"
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
        fac: "教員",
        title1: "校長",
        name: "不明",
        tit2: "副校長",
        sub1: "名誉化学教師",
        sub2: "名誉生物教師",
        sub3: "名誉体育教師",
        sub4: "名誉環境学教師",
        sub5: "名誉リーダーシップと倫理教師",
        sub6: "名誉音楽教師",
        sub7: "名誉数学教師",
        sub8: "名誉コンピューター科学教師",
        sub9: "名誉体育教師",
        sub10: "名誉社会学教師",
        sub11: "名誉歴史教師",
        sub12: "名誉科学教師",
        sub13: "名誉言語教師",
        sub14: "名誉美術教師"
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
      const facElement = document.getElementById('fac');
      const title1Element = document.getElementById('title1');
      const nameElement = document.getElementById('name');
      const tit2Element = document.getElementById('tit2');
      const sub1Element = document.getElementById('sub1');
      const sub2Element = document.getElementById('sub2');
      const sub3Element = document.getElementById('sub3');
      const sub4Element = document.getElementById('sub4');
      const sub5Element = document.getElementById('sub5');
      const sub6Element = document.getElementById('sub6');
      const sub7Element = document.getElementById('sub7');
      const sub8Element = document.getElementById('sub8');
      const sub9Element = document.getElementById('sub9');
      const sub10Element = document.getElementById('sub10');
      const sub11Element = document.getElementById('sub11');
      const sub12Element = document.getElementById('sub12');
      const sub13Element = document.getElementById('sub13');
      const sub14Element = document.getElementById('sub14');
  
      if (translations[language]) {
        titleElement.textContent = translations[language].title;
        mottoElement.textContent = translations[language].motto;
        news1Element.textContent = translations[language].news1;
        news2Element.textContent = translations[language].news2;
        news3Element.textContent = translations[language].news3;
        news4Element.textContent = translations[language].news4;
        news5Element.textContent = translations[language].news5;
        news6Element.textContent = translations[language].news6;
        facElement.textContent = translations[language].fac;
        title1Element.textContent = translations[language].title1;
        nameElement.textContent = translations[language].name;
        tit2Element.textContent = translations[language].tit2;
        sub1Element.textContent = translations[language].sub1;
        sub2Element.textContent = translations[language].sub2;
        sub3Element.textContent = translations[language].sub3;
        sub4Element.textContent = translations[language].sub4;
        sub5Element.textContent = translations[language].sub5;
        sub6Element.textContent = translations[language].sub6;
        sub7Element.textContent = translations[language].sub7;
        sub8Element.textContent = translations[language].sub8;
        sub9Element.textContent = translations[language].sub9;
        sub10Element.textContent = translations[language].sub10;
        sub11Element.textContent = translations[language].sub11;
        sub12Element.textContent = translations[language].sub12;
        sub13Element.textContent = translations[language].sub13;
        sub14Element.textContent = translations[language].sub14;
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