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
        tb: "Tuition Breakdown",
        tbe: "Elementary School (Grades 1-5):	$10,000 - $15,000 per year.",
        tbm: "Middle School (Grades 6-8):	$15,000 - $20,000 per year.",
        tbh: "High School (Grades 9-12): $20,000 - $25,000 per year.",
        ac: "Additional Cost",
        ace: "Enrollment Fee:	$500 - $1,000 (one-time).",
        acb: "Books and Supplies:	$500 - $1,000 per year.",
        acx: "Extracurricular Activities:	$500 - $2,000 per year (depending on the activities).",
        acu: "Uniforms:	$200 - $500 per year.",
        aco: "Boarding (if applicable):	$10,000 - $20,000 per year.",
        fast: "Financial Aid Structure",
        tfs: "Tuition Fee Structure: Full Tuition: $10,000 - $25,000 per year (depending on grade level).",
        fat: "Financial Aid Tiers:",
        tier1: "Tier 1: 90% aid - Families with income below $3,500 per year.",
        tier2: "Tier 2: 75% aid - Families with income between $3,500 - $7,000 per year.",
        tier3: "Tier 3: 50% aid - Families with income between $7,000 - $10,000 per year.",
        tier4: "Tier 4: 25% aid - Families with income between $10,000 - $14,000 per year.",
        mbs: "Merit-Based Scholarships:",
        aes: "Academic Excellence Scholarship: 25-100% tuition coverage.",
        ats: "Artistic Talent Scholarship: 25-100% tuition coverage.",
        aas: "Athletic Achievement Scholarship: 25-100% tuition coverage.",
        wsp: "Work-Study Program:",
        sjb: "Student Jobs: Up to 20 hours per week, earning $100 per month to offset tuition costs.",
        enhanced: "Enhanced Student Loan Program Structure for Wakanda Academy",
        ltc: "Loan Terms and Conditions:",
        elig: "Eligibility: Defined based on financial need, academic potential, and commitment to repay.",
        loan: "Loan Amount: Covers full or partial tuition and additional expenses like books and supplies.",
        inter: "Interest Rate: No interest (0%).",
        repay: "Repayment Period: Set a reasonable repayment period, such as 5-10 years.",
        grace: "Grace Period: Up to 3-4 years after graduation, allowing ample time for students to secure stable employment.",
        rep: "Repayment Options:",
        srp: "Standard Repayment Plan: Fixed monthly payments over the repayment period.",
        ibr: "Income-Based Repayment Plan: Payments as a percentage of the borrower's income, ensuring affordability.",
        dafo: "Deferment and Forbearance Options: Allow temporary pauses in repayment for students facing financial hardship.",
        exam: "Example of the Interest-Free Student Loan Program",
        loant: "Loan Terms:",
        elig1: "Eligibility: Students from families with income below $10,000  per year.",
        loan1: "Loan Amount: Up to $25,000 per student.",
        inter1: "Interest Rate: 0% (interest-free).",
        repay1: "Repayment Period: 10 years.",
        grace1: "Grace Period: Up to 3-4 years post-graduation.",
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
        tb: "Rincian Biaya Pendidikan",
        tbe: "Sekolah Dasar (Kelas 1-5): Rp150.000.000 - Rp225.000.000 per tahun.",
        tbm: "Sekolah Menengah Pertama (Kelas 6-8): Rp225.000.000 - Rp300.000.000 per tahun.",
        tbh: "Sekolah Menengah Atas (Kelas 9-12): Rp300.000.000 - Rp375.000.000 per tahun.",
        ac: "Biaya Tambahan",
        ace: "Biaya Pendaftaran: Rp7.500.000 - Rp15.000.000 (satu kali).",
        acb: "Buku dan Perlengkapan: Rp7.500.000 - Rp15.000.000 per tahun.",
        acx: "Kegiatan Ekstrakurikuler: Rp7.500.000 - Rp30.000.000 per tahun (tergantung pada kegiatannya).",
        acu: "Seragam: Rp3.000.000 - Rp7.500.000 per tahun.",
        aco: "Asrama (jika ada): Rp150.000.000 - Rp300.000.000 per tahun.",
        fast: "Struktur Bantuan Keuangan.",
        tfs: "Struktur Biaya Pendidikan: Biaya Penuh: Rp150.000.000 - Rp375.000.000 per tahun (tergantung pada tingkat kelas).",
        fat: "Tingkat Bantuan Keuangan.",
        tier1: "Tingkat 1: Bantuan 90% - Keluarga dengan pendapatan di bawah Rp52.500.000 per tahun.",
        tier2: "Tingkat 2: Bantuan 75% - Keluarga dengan pendapatan antara Rp52.500.000 - Rp105.000.000 per tahun.",
        tier3: "Tingkat 3: Bantuan 50% - Keluarga dengan pendapatan antara Rp105.000.000 - Rp150.000.000 per tahun.",
        tier4: "Tingkat 4: Bantuan 25% - Keluarga dengan pendapatan antara Rp150.000.000 - Rp210.000.000 per tahun.",
        mbs: "Beasiswa Berbasis Prestasi:",
        aes: "Beasiswa Keunggulan Akademik: Mencakup biaya pendidikan 25-100%.",
        ats: "Beasiswa Bakat Seni: Mencakup biaya pendidikan 25-100%.",
        aas: "Beasiswa Prestasi Atletik: Mencakup biaya pendidikan 25-100%.",
        wsp: "Program Kerja Sambil Belajar:",
        sjb: "Pekerjaan Mahasiswa: Hingga 20 jam per minggu, dengan penghasilan Rp1.500.000 per bulan untuk mengurangi biaya pendidikan.",
        enhanced: "Struktur Program Pinjaman Mahasiswa yang Ditingkatkan untuk Wakanda Academy. Syarat dan Ketentuan Pinjaman:",
        ltc: "Syarat dan Ketentuan Pinjaman:",
        elig: "Kelayakan: Ditentukan berdasarkan kebutuhan keuangan, potensi akademik, dan komitmen untuk mengembalikan.",
        loan: "Jumlah Pinjaman: Menutupi biaya pendidikan penuh atau sebagian dan biaya tambahan seperti buku dan perlengkapan.",
        inter: "Tingkat Bunga: Tidak ada bunga (0%).",
        repay: "Periode Pembayaran Kembali: Menetapkan periode pembayaran kembali yang wajar, seperti 5-10 tahun.",
        grace: "Periode Penangguhan: Hingga 3-4 tahun setelah lulus, memberikan waktu yang cukup bagi siswa untuk mendapatkan pekerjaan yang stabil.",
        rep: "Opsi Pembayaran Kembali:",
        srp: "Rencana Pembayaran Kembali Standar: Pembayaran tetap bulanan selama periode pembayaran kembali.",
        ibr: "Rencana Pembayaran Berdasarkan Pendapatan: Pembayaran sebagai persentase dari pendapatan peminjam, memastikan terjangkau.",
        dafo: "Opsi Deferment dan Forbearance: Memungkinkan penangguhan sementara dalam pembayaran bagi siswa yang menghadapi kesulitan keuangan.",
        exam: "Contoh Program Pinjaman Mahasiswa Tanpa Bunga:",
        loant: "Syarat Pinjaman:",
        elig1: "Kelayakan: Siswa dari keluarga dengan pendapatan di bawah Rp150.000.000 per tahun.",
        loan1: "Jumlah Pinjaman: Hingga Rp375.000.000 per siswa.",
        inter1: "Tingkat Bunga: 0% (tanpa bunga).",
        repay1: "Periode Pembayaran Kembali: 10 tahun.",
        grace1: "Periode Penangguhan: Hingga 3-4 tahun setelah lulus.",
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
        tb: "授業料の内訳",
        tbe: "小学校 (1年生から5年生): 年間 ¥1,100,000 - ¥1,650,000。",
        tbm: "中学校 (6年生から8年生): 年間 ¥1,650,000 - ¥2,200,000。",
        tbh: "高校 (9年生から12年生): 年間 ¥2,200,000 - ¥2,750,000。",
        ac: "追加費用",
        ace: "入学金: ¥55,000 - ¥110,000 (一度きり)。",
        acb: "教科書と備品: 年間 ¥55,000 - ¥110,000。",
        acx: "課外活動: 年間 ¥55,000 - ¥220,000 (活動による)。",
        acu: "制服: 年間 ¥14,000 - ¥55,000。",
        aco: "寮費 (適用される場合): 年間 ¥1,100,000 - ¥2,200,000。",
        fast: "奨学金制度",
        tfs: "授業料の構造: 定額授業料: 年間 ¥1,100,000 - ¥2,750,000 (学年による)。",
        fat: "奨学金の段階。",
        tier1: "ティア1: 90%の援助 - 年収が年間¥455,000以下の家族",
        tier2: "ティア2: 75%の援助 - 年収が年間¥455,000から¥910,000の間の家族。",
        tier3: "ティア3: 50%の援助 - 年収が年間¥910,000から¥1,300,000の間の家族。",
        tier4: "ティア4: 25%の援助 - 年収が年間¥1,300,000から¥1,820,000の間の家族。",
        mbs: "成績に基づく奨学金:",
        aes: "学業優秀奨学金: 授業料の25-100%をカバー。",
        ats: "芸術的才能奨学金: 授業料の25-100%をカバー。",
        aas: "スポーツ実績奨学金: 授業料の25-100%をカバー。",
        wsp: "学業と並行しての仕事プログラム:",
        sjb: "学生の仕事: 週最大20時間、授業料負担を軽減するために月¥14,000の収入を得る。",
        enhanced: "ワカンダ・アカデミーの改良された学生ローンプログラム構造. ローンの条件:",
        ltc: "ローンの条件:",
        elig: "対象: 財政的必要性、学業のポテンシャル、返済へのコミットメントに基づいて定義されます。",
        loan: "ローン額: 授業料全額または一部と書籍や備品などの追加費用をカバーします。",
        inter: "利率: 利息なし（0%）。",
        repay: "返済期間: 5〜10年など、合理的な返済期間を設定します。",
        grace: "猶予期間: 卒業後3〜4年間、学生が安定した雇用を見つけるための十分な時間を提供します。",
        rep: "返済オプション:",
        srp: "標準的な返済プラン: 返済期間中の固定された月々の支払い。",
        ibr: "収入に基づく返済プラン: 借り手の収入の一定割合を支払いとします。",
        dafo: "猶予と保留のオプション: 財政的困難に直面している学生に対して一時的な返済の休止を許可します。",
        exam: "無利子学生ローンプログラムの例:",
        loant: "ローンの条件:",
        elig1: "対象: 年収が年間¥1,300,000以下の家族の学生。",
        loan1: "ローン額: 1人当たり最大¥2,750,000。",
        inter1: "利率: 0%（無利子）。",
        repay1: "返済期間: 10年",
        grace1: "猶予期間: 卒業後3〜4年間。",
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
      const tbElement = document.getElementById('tb');
      const tbeElement = document.getElementById('tbe');
      const tbmElement = document.getElementById('tbm');
      const tbhElement = document.getElementById('tbh');
      const acElement = document.getElementById('ac');
      const aceElement = document.getElementById('ace');
      const acbElement = document.getElementById('acb');
      const acxElement = document.getElementById('acx');
      const acuElement = document.getElementById('acu');
      const acoElement = document.getElementById('aco');
      const fastElement = document.getElementById('fast');
      const tfsElement = document.getElementById('tfs');
      const fatElement = document.getElementById('fat');
      const tier1Element = document.getElementById('tier1');
      const tier2Element = document.getElementById('tier2');
      const tier3Element = document.getElementById('tier3');
      const tier4Element = document.getElementById('tier4');
      const mbsElement = document.getElementById('mbs');
      const aesElement = document.getElementById('aes');
      const atsElement = document.getElementById('ats');
      const aasElement = document.getElementById('aas');
      const wspElement = document.getElementById('wsp');
      const sjbElement = document.getElementById('sjb');
      const enhancedElement = document.getElementById('enhanced');
      const ltcElement = document.getElementById('ltc');
      const eligElement = document.getElementById('elig');
      const loanElement = document.getElementById('loan');
      const interElement = document.getElementById('inter');
      const repayElement = document.getElementById('repay');
      const graceElement = document.getElementById('grace');
      const repElement = document.getElementById('rep');
      const srpElement = document.getElementById('srp');
      const ibrElement = document.getElementById('ibr');
      const dafoElement = document.getElementById('dafo');
      const examElement = document.getElementById('exam');
      const loantElement = document.getElementById('loant');
      const elig1Element = document.getElementById('elig1');
      const loan1Element = document.getElementById('loan1');
      const inter1Element = document.getElementById('inter1');
      const repay1Element = document.getElementById('repay1');
      const grace1Element = document.getElementById('grace1');
  
      if (translations[language]) {
        titleElement.textContent = translations[language].title;
        mottoElement.textContent = translations[language].motto;
        news1Element.textContent = translations[language].news1;
        news2Element.textContent = translations[language].news2;
        news3Element.textContent = translations[language].news3;
        news4Element.textContent = translations[language].news4;
        news5Element.textContent = translations[language].news5;
        news6Element.textContent = translations[language].news6;
        tbElement.textContent = translations[language].tb;
        tbeElement.textContent = translations[language].tbe;
        tbmElement.textContent = translations[language].tbm;
        tbhElement.textContent = translations[language].tbh;
        acElement.textContent = translations[language].ac;
        aceElement.textContent = translations[language].ace;
        acbElement.textContent = translations[language].acb;
        acxElement.textContent = translations[language].acx;
        acuElement.textContent = translations[language].acu;
        acoElement.textContent = translations[language].aco;
        fastElement.textContent = translations[language].fast;
        tfsElement.textContent = translations[language].tfs;
        fatElement.textContent = translations[language].fat;
        tier1Element.textContent = translations[language].tier1;
        tier2Element.textContent = translations[language].tier2;
        tier3Element.textContent = translations[language].tier3;
        tier4Element.textContent = translations[language].tier4;
        mbsElement.textContent = translations[language].mbs;
        aesElement.textContent = translations[language].aes;
        atsElement.textContent = translations[language].ats;
        aasElement.textContent = translations[language].aas;
        wspElement.textContent = translations[language].wsp;
        sjbElement.textContent = translations[language].sjb;
        enhancedElement.textContent = translations[language].enhanced;
        ltcElement.textContent = translations[language].ltc;
        eligElement.textContent = translations[language].elig;
        loanElement.textContent = translations[language].loan;
        interElement.textContent = translations[language].inter;
        repayElement.textContent = translations[language].repay;
        graceElement.textContent = translations[language].grace;
        repElement.textContent = translations[language].rep;
        srpElement.textContent = translations[language].srp;
        ibrElement.textContent = translations[language].ibr;
        dafoElement.textContent = translations[language].dafo;
        examElement.textContent = translations[language].exam;
        loantElement.textContent = translations[language].loant;
        elig1Element.textContent = translations[language].elig1;
        loan1Element.textContent = translations[language].loan1;
        inter1Element.textContent = translations[language].inter1;
        repay1Element.textContent = translations[language].repay1;
        grace1Element.textContent = translations[language].grace1;
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