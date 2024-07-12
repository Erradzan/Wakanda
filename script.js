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
      acad:"Rigorous coursework designed to foster critical thinking, problem-solving, and academic achievement. Emphasizes research, innovation, and opportunities for scholarships to support continued educational success.",
      nav9:"Creative Arts",
      crea:"Explores a wide range of artistic expressions including performing arts (music, drama), visual arts (painting, sculpture), and design (graphic, fashion). Encourages creativity, self-expression, and mastery of artistic techniques.",
      nav10: "STEM Education",
      stem:"Engages students in hands-on learning experiences in science, technology, engineering, and mathematics. Focuses on building skills in coding, robotics, data analysis, and scientific inquiry to prepare students for future careers in STEM fields.",
      nav11: "Practical Life Skills",
      prac:"Equips students with essential life skills necessary for personal and professional success. Includes financial literacy, effective communication, time management, tax preparation, cooking skills, and problem-solving techniques to navigate challenges in daily life.",
      nav12: "Career Guidance",
      care:"Provides comprehensive support for career exploration and development. Offers guidance on internships, networking opportunities, resume building, and interview preparation to help students make informed decisions about their future careers.",
      nav13: "Extracurricular Activities",
      spot:"Offers a diverse range of activities outside of regular academics to foster holistic development. Includes participation in sports, clubs, competitions, and cultural events to promote teamwork, leadership, and personal growth.",
      nav14: "Community Service",
      comm:"Encourages students to contribute positively to their communities through volunteerism and service projects. Emphasizes social responsibility, empathy, and awareness of community needs to cultivate compassionate global citizens.",
      nav15: "Leadership Education",
      lead:"Develops essential leadership qualities and skills through practical experiences and mentorship opportunities. Focuses on decision-making, teamwork, conflict resolution, and ethical leadership to prepare students to lead with integrity in diverse settings.",
      facilities: "Facilities",
      art: "Art Studio",
      hall: "Assembly Hall",
      multi: "Multimedia Center",
      chem: "Science and Robotic Lab",
      libraries: "Libraries",
      play: "Playground (for elementary)",
      bus: "School Bus",
      sport: "Sport Center",
      ach:"Achievement",
      aw:"Best Principal Awards 2021",
      inf:"Great leadership and significant contributions to student success at Wakanda Academy.",
      aw1:"Best School In The World 2021",
      inf1:"Outstanding academic excellence, innovative programs, and a nurturing environment.",
      aw2:"Best Humanitarian Awards 2022",
      inf2:"Exceptional compassion, dedication, and impactful contributions worldwide.",
      aw3:"Best Visual School 2023",
      inf3:"Outstanding achievements in visual arts education and fostering creativity and artistic excellence among students.",
      tou:"School Tour",
      please:"Please fill this form to schedule a school tour.",
      ema1:"Email:",
      nam1:"Name:",
      with:"With Prospective Student?",
      stud:"Prospective Student Name:",
      phone1:"Phone Number:",
      date1:"Date:",
      can:"Cancel",
      send:"Send",
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
      acad:"Kurikulum yang ketat dirancang untuk mendorong pemikiran kritis, pemecahan masalah, dan pencapaian akademis. Menekankan penelitian, inovasi, dan kesempatan untuk beasiswa guna mendukung kesuksesan pendidikan yang berkelanjutan.",
      nav9: "Seni Kreatif",
      crea:"Menjelajahi berbagai ekspresi seni termasuk seni pertunjukan (musik, drama), seni visual (menggambar, patung), dan desain (grafis, fashion). Mendorong kreativitas, ekspresi diri, dan penguasaan teknik seni.",
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
      stem:"Mengajak siswa dalam pengalaman belajar langsung di bidang sains, teknologi, rekayasa, dan matematika. Berfokus pada pengembangan keterampilan dalam pemrograman, robotika, analisis data, dan penyelidikan ilmiah untuk mempersiapkan siswa dalam karir masa depan di bidang STEM.",
      prac:"Mengajarkan siswa keterampilan hidup yang penting untuk kesuksesan pribadi dan profesional. Termasuk literasi keuangan, komunikasi efektif, manajemen waktu, persiapan pajak, keterampilan memasak, dan teknik pemecahan masalah untuk menghadapi tantangan dalam kehidupan sehari-hari.",
      care:"Memberikan dukungan komprehensif untuk eksplorasi dan pengembangan karier. Menawarkan panduan mengenai magang, kesempatan jaringan, pembuatan resume, dan persiapan wawancara untuk membantu siswa membuat keputusan yang terinformasi mengenai karier masa depan mereka.",
      spot:"Menyediakan berbagai kegiatan di luar akademik regular untuk memfasilitasi pengembangan holistik. Termasuk partisipasi dalam olahraga, klub, kompetisi, dan acara budaya untuk meningkatkan kerjasama tim, kepemimpinan, dan pertumbuhan pribadi.",
      comm:"Mendorong siswa untuk berkontribusi secara positif kepada komunitas melalui kegiatan relawan dan proyek pelayanan. Menekankan tanggung jawab sosial, empati, dan kesadaran akan kebutuhan komunitas untuk membentuk warga global yang penuh kasih.",
      lead:"Mengembangkan kualitas dan keterampilan kepemimpinan yang esensial melalui pengalaman praktis dan kesempatan mentorship. Fokus pada pengambilan keputusan, kerja tim, penyelesaian konflik, dan kepemimpinan etis untuk mempersiapkan siswa memimpin dengan integritas dalam berbagai setting.",
      ach:"Pencapaian",
      aw:"Penghargaan Kepala Sekolah Terbaik 2021",
      inf:"Kepemimpinan hebat dan kontribusi signifikan terhadap kesuksesan siswa di Wakanda Academy.",
      aw1:"Sekolah Terbaik di Dunia 2021",
      inf1:"Keunggulan akademik yang luar biasa, program inovatif, dan lingkungan yang mendukung.",
      aw2:"Penghargaan Kemanusiaan Terbaik 2022",
      inf2:"Belas kasih yang luar biasa, dedikasi, dan kontribusi yang berdampak di seluruh dunia.",
      aw3:"Sekolah Visual Terbaik 2023",
      inf3:"Pencapaian luar biasa dalam pendidikan seni visual dan mendorong kreativitas serta keunggulan artistik di antara siswa.",
      tou:"Kunjungan Sekolah",
      please:"Silakan isi formulir ini untuk menjadwalkan kunjungan sekolah.",
      ema1:"Email:",
      nam1:"Nama:",
      with:"Dengan Calon Siswa?",
      stud:"Nama Calon Siswa:",
      phone1:"Nomor Telepon:",
      date1:"Tanggal:",
      can:"Batal",
      send:"Kirim",
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
      acad:"批判的思考、問題解決能力、学業の達成を育むために設計された厳格なコースワーク。研究、革新、そして奨学金の機会を強調し、持続的な教育の成功を支援します。",
      crea:"音楽、演劇を含む演芸、絵画、彫刻を含む視覚芸術、グラフィックデザイン、ファッションデザインを含む幅広い芸術表現を探求します。創造性、自己表現、芸術技術のマスタリーを奨励します。",
      stem:"学生を実践的な学びの経験に参加させ、科学、技術、工学、数学の分野でのスキル構築に焦点を当てます。コーディング、ロボティクス、データ分析、科学的探求を通じて、将来のSTEM分野でのキャリアに備えます。",
      prac:"個人と職業的成功に必要な基本的な生活スキルを学生に備えます。財政リテラシー、効果的なコミュニケーション、時間管理、税金準備、料理スキル、日常生活の課題を乗り越えるための問題解決技術を含みます。",
      care:"キャリア探索と発展の包括的なサポートを提供します。インターンシップ、ネットワーキングの機会、履歴書の作成、面接の準備に関するガイダンスを提供し、学生が将来のキャリアについてよく考えた決断ができるよう支援します。",
      spot:"通常の学術活動の外で、総合的な成長を促すさまざまな活動を提供します。スポーツ、クラブ活動、競技会、文化イベントへの参加を通じて、チームワーク、リーダーシップ、個人の成長を促進します。",
      comm:"ボランティア活動や奉仕プロジェクトを通じて、地域社会への積極的な貢献を促します。社会的責任、共感、地域のニーズへの認識を重視し、思いやりのあるグローバル市民を育成します。",
      lead:"実践的な経験とメンターシップの機会を通じて、重要なリーダーシップの資質とスキルを育成します。意思決定、チームワーク、紛争解決、倫理的リーダーシップに焦点を当て、多様な環境で誠実にリードするための準備をします。",
      ach:"業績",
      aw:"2021年最優秀校長賞",
      inf:"ワカンダ・アカデミーでの素晴らしいリーダーシップと生徒の成功への重要な貢献。",
      aw1:"2021年世界最高の学校",
      inf1:"卓越した学業成績、革新的なプログラム、および育成環境。",
      aw2:"2022年最優秀人道賞",
      inf2:"卓越した慈悲心、献身、そして世界中での影響力のある貢献。",
      aw3:"2023年最優秀ビジュアルスクール",
      inf3:"視覚芸術教育における卓越した成果と、学生の創造性および芸術的卓越性の促進。",
      tou:"学校見学",
      please:"学校見学のスケジュールを予約するためにこのフォームに記入してください。",
      ema1:"Email:",
      nam1:"名前:",
      with:"見込み学生と一緒に？",
      stud:"見込み学生の名前:",
      phone1:"電話番号:",
      date1:"日付:",
      can:"キャンセル ",
      send:"送信する",
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
    const acadElement = document.getElementById('acad');
    const creaElement = document.getElementById('crea');
    const stemElement = document.getElementById('stem');
    const pracElement = document.getElementById('prac');
    const careElement = document.getElementById('care');
    const spotElement = document.getElementById('spot');
    const commElement = document.getElementById('comm');
    const leadElement = document.getElementById('lead');
    const achElement = document.getElementById('ach');
    const awElement = document.getElementById('aw');
    const infElement = document.getElementById('inf');
    const aw1Element = document.getElementById('aw1');
    const inf1Element = document.getElementById('inf1');
    const aw2Element = document.getElementById('aw2');
    const inf2Element = document.getElementById('inf2');
    const aw3Element = document.getElementById('aw3');
    const inf3Element = document.getElementById('inf3');
    const touElement = document.getElementById('tou');
    const pleaseElement = document.getElementById('please');
    const ema1Element = document.getElementById('ema1');
    const nam1Element = document.getElementById('nam1');
    const withElement = document.getElementById('with');
    const studElement = document.getElementById('stud');
    const phone1Element = document.getElementById('phone1');
    const date1Element = document.getElementById('date1');
    const canElement = document.getElementById('can');
    const sendElement = document.getElementById('send');

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
      acadElement.textContent = translations[language].acad;
      creaElement.textContent = translations[language].crea;
      stemElement.textContent = translations[language].stem;
      pracElement.textContent = translations[language].prac;
      careElement.textContent = translations[language].care;
      spotElement.textContent = translations[language].spot;
      commElement.textContent = translations[language].comm;
      leadElement.textContent = translations[language].lead;
      achElement.textContent = translations[language].ach;
      awElement.textContent = translations[language].aw;
      infElement.textContent = translations[language].inf;
      aw1Element.textContent = translations[language].aw1;
      inf1Element.textContent = translations[language].inf1;
      aw2Element.textContent = translations[language].aw2;
      inf2Element.textContent = translations[language].inf2;
      aw3Element.textContent = translations[language].aw3;
      inf3Element.textContent = translations[language].inf3;
      touElement.textContent = translations[language].tou;
      pleaseElement.textContent = translations[language].please;
      ema1Element.textContent = translations[language].ema1;
      nam1Element.textContent = translations[language].nam1;
      withElement.textContent = translations[language].with;
      studElement.textContent = translations[language].stud;
      phone1Element.textContent = translations[language].phone1;
      date1Element.textContent = translations[language].date1;
      canElement.textContent = translations[language].can;
      sendElement.textContent = translations[language].send;
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
  const logo3 = document.getElementById('logo3');
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
          logo3.src = 'Support/Black Logo.png';
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
          logo3.src = 'Support/Purple Logo.png';
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