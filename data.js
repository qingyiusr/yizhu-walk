/* ============================================================
   義竹走讀網站 內容資料檔
   ------------------------------------------------------------
   之後要新增、修改內容，只要改這個檔案，不用動 index.html。
   ・文字用 "雙引號" 包起來，每一項後面記得加逗號。
   ・地點照片：放進 images 資料夾，檔名用地點代號，例如 images/wengqingjiang.jpg，就會自動顯示，image 欄位可以留空。
     檔名不一樣（例如 .png）才需要填 image。imageCredit 填照片來源或拍攝者，例如「攝影：王小明」。
     還沒有圖片時留空 ""，網站會自動顯示預留框。
   ・status: "draft" 代表內容還沒查證，網頁上會顯示「待查證」標籤；
     查證完成後改成 "ok"。
   ============================================================ */

window.SITE = {
  title: "義起走讀！",
  date: "11/14（六）13:10–15:45",   /* 活動日期，顯示在首頁主視覺，留空就不顯示 */
  subtitle: "義竹國中 × 青銀搖滾力｜三條路線，十個地點",
  intro:
    "這是義竹國中同學和國立臺南大學青銀搖滾力計畫一起走讀義竹的導覽網站。三條路線各走三個點，走完都回到岸腳村社區活動中心集合。每個地點都有一張由同學畫的角色卡，還有阿公阿嬤說的地方故事。",
  /* ---------- 照片上傳設定 ----------
     uploadUrl：Google Apps Script 部署後的網址（設定方法見 README.md）。留空時照片只存在學生自己的手機。
     uploadKey：和 Apps Script 裡的 KEY 填一樣的文字，避免陌生人亂傳檔案。 */
  uploadUrl: "https://script.google.com/macros/s/AKfycbyebpN7ixvq3jj8jFsfHDrEv--YHmaKvNIhHGysf3Mb7n0LlyNGTEmPeGlQvoH0Q5s4jw/exec",
  uploadKey: "yizhu2026",
  maxPhotos: 10,
  /* ---------- 定位集章 ----------
     stampRadius：距離地點幾公尺內才能集章（手機定位誤差大約 10～30 公尺）
     leaderCode：定位不準時，帶隊人員說出口令讓學生輸入，一樣可以集章。活動前請改成你們自己的數字 */
  stampRadius: 60,
  leaderCode: "1114",
  /* ---------- 即時位置 ----------
     liveRefresh：幾秒更新一次其他同學的位置（需要先設定 uploadUrl） */
  liveRefresh: 30,
  reward: "回到集合點，把這個畫面給工作人員看，就能領取小禮物！",
  meetingPoint: {
    name: "岸腳村社區活動中心暨村辦公處",
    lat: 23.3404985, lng: 120.2515323,
    note: "三條路線的集合點與終點。出發前在這裡分組，走完回到這裡分享。"
  },
  /* 四種角色屬性（田野系已併入風土系） */
  types: {
    wind:   { name: "風土系", color: "#3DB7E4", power: "飛行・生長・自然", items: "風、河流、田野、農作物" },
    food:   { name: "食光系", color: "#FF6C2F", power: "補充能量・變身",   items: "地方小吃、傳統料理、農產加工" },
    guard:  { name: "守護系", color: "#FF48B0", power: "防禦・守護・記憶", items: "老屋、廟宇、教堂、聚落建築" },
    story:  { name: "故事系", color: "#0078BF", power: "時間旅行・召喚故事", items: "長輩、職人、地方傳說" }
  }
};

window.ROUTES = [
  {
    id: "route-1",
    name: "路線一　新舊風格拼貼",
    color: "#FF48B0",
    summary: "百年前蓋的洋樓把閩南、日式、西洋三種風格拼在一起；以廟宇為主的小鎮裡也有天主堂；最現代的超商招牌，還藏著義竹的舊地名「二竹」。一路觀察新的和舊的，怎麼拼貼成今天的義竹。",
    stops: ["wengqingjiang", "st-joseph", "seven-erzhu"]
  },
  {
    id: "route-2",
    name: "路線二　翁家記憶拼圖",
    color: "#0078BF",
    summary: "翁岳生的老家、祖先上岸的八掌溪、翁氏宗族聚居的六桂村，三站各是翁家故事的一塊。把三塊拼起來，看看一個家族怎麼在義竹落地生根。",
    stops: ["cunde-hall", "bazhang-river", "liugui-center"]
  },
  {
    id: "route-3",
    name: "路線三　文武食光調色盤",
    color: "#FF6C2F",
    summary: "百年小學的「文」、清代武秀才古宅的「武」、市場小吃的「食光」。一路收集義竹日常的顏色，調出屬於你的義竹色盤。",
    stops: ["yizhu-elementary", "wengqingchun", "market-1"]
  }
];

window.SPOTS = {
  "wengqingjiang": {
    name: "翁清江古厝",
    fullName: "翁清江・翁清曲宅院",
    lat: 23.3338307, lng: 120.2436577, label: "right", icon: "house",
    type: "guard",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "翁清江和翁清曲兩兄弟是日治時期義竹地區很重要的地方仕紳。他們的宅院是嘉義縣的縣定古蹟：1911年開始興建，1919年洋樓完成，1922年整座宅院才全部蓋好。第一進是兩層樓的洋樓，第二進是三合院，外牆用紅磚以英式砌法砌成，融合了閩南、日式和西洋三種風格。",
    facts: [
      "牌樓上刻著翁家家訓「厚德載物」，意思是做人要像大地一樣厚實，才能承載萬物。",
      "翁氏祖先在宋朝有「一家六子都考上科舉」的故事，叫做「六桂傳芳」。",
      "2006年嘉義縣政府做文化資產普查時發現翁宅的價值，2008年正式公告為縣定古蹟。"
    ],
    mission: "找找看：洋樓的哪些地方像西洋建築，哪些地方又像傳統三合院？畫下你覺得最特別的一個窗戶或柱子。",
    elder: "",
    sources: [
      { title: "翁清江‧翁清曲宅院（蕃薯藤）", url: "https://n.yam.com/Article/20220109937120" },
      { title: "樹德科大參訪翁清江古厝報導（1111）", url: "https://www.1111.com.tw/news/149978/amp/" }
    ]
  },
  "st-joseph": {
    name: "聖若瑟堂",
    fullName: "義竹聖若瑟堂（天主堂）",
    lat: 23.3371475, lng: 120.2424863, label: "right", icon: "church",
    type: "guard",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "義竹聖若瑟堂是天主教嘉義教區的堂區，位在仁里村。「若瑟」就是耶穌的養父約瑟，天主教常用他來當教堂的守護聖人。教堂和廟宇一樣，都是村民聚會、尋求心靈安定的地方。",
    facts: [
      "地址：嘉義縣義竹鄉仁里村423-1號。",
      "義竹以廟宇信仰為主，天主堂讓我們看到小鎮裡不同的信仰也一起生活。",
      "聖若瑟堂屬於天主教嘉義教區，由「聖言會」的神父負責服務。"
    ],
    mission: "比一比：教堂和你家附近的廟，有哪些地方很像、哪些地方很不一樣？（例如顏色、屋頂、門口的裝飾）",
    elder: "",
    sources: [
      { title: "GCatholic：義竹聖若瑟堂", url: "https://gcatholic.org/churches/asia-east/38139" }
    ]
  },
  "seven-erzhu": {
    name: "7-11 二竹門市",
    fullName: "7-ELEVEN 二竹門市（補給站）",
    lat: 23.3364845, lng: 120.2424541, label: "right", icon: "shop",
    type: "food",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "路線一的補給站，可以上廁所、喝水、休息。門市名字裡的「二竹」其實藏著義竹的舊地名：義竹以前叫「二竹圍庄」，因為台語「義」和「二」的發音很接近，後來就改叫義竹。",
    facts: [
      "義竹以前叫「二竹圍庄」，清朝時屬於嘉義縣的「龍蛟潭堡」。",
      "日治時期1920年設立「義竹庄」，1950年起屬於嘉義縣義竹鄉。"
    ],
    mission: "考考你：附近還有哪些招牌、路名或店名用到「二竹」或「義竹」？拍下來，回到集合點分享。",
    elder: "",
    sources: [
      { title: "認識嘉義縣義竹鄉（蕃薯藤）", url: "https://n.yam.com/Article/20220109937120" }
    ]
  },
  "cunde-hall": {
    name: "義竹存德堂",
    fullName: "義竹存德堂（翁岳生祖居）",
    lat: 23.3321661, lng: 120.2417078, label: "right", icon: "house2",
    type: "story",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "存德堂是前司法院長翁岳生小時候住的老家。2022年，這座老宅捐出來給地方使用，變成在地學生讀書的空間。從大法官的童年家，變成同學們念書的地方，這本身就是一個很棒的故事。",
    facts: [
      "義竹六桂村一帶的翁家出了很多人才，包括前司法院長翁岳生、前中研院院長翁啟惠等人。",
      "鄉里間常說這是祖先庇蔭、地靈人傑。"
    ],
    mission: "想一想：如果你是存德堂的「守護角色」，你會守護什麼？是書、是記憶，還是一個夢想？",
    elder: "",
    sources: [
      { title: "Spectral Codex：義竹存德堂", url: "https://spectralcodex.com/yizhu-cunde-hall/" },
      { title: "翁氏宗族人才故事（蕃薯藤）", url: "https://n.yam.com/Article/20220109937120" }
    ]
  },
  "bazhang-river": {
    name: "八掌溪河畔",
    fullName: "八掌溪河畔",
    lat: 23.3330635, lng: 120.2443163, label: "right", icon: "wave",
    type: "wind",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "義竹鄉位在八掌溪的北岸，溪水從東邊彎彎地繞過義竹的市街。據記載，清朝康熙末年，翁家的祖先翁士岱就是從八掌溪上岸，來到義竹開墾。之後翁家子孫越來越多，翁姓成為義竹最大的家族。",
    facts: [
      "八掌溪是嘉義縣和台南市的界河，對岸就是台南。",
      "雍正、乾隆年間，又有其他翁姓族人陸續沿著先人的腳步來到義竹。"
    ],
    mission: "聽聽看：站在河邊安靜一分鐘，你聽到了哪些聲音？風、鳥、車子還是水？把聲音畫成一個角色。",
    elder: "",
    sources: [
      { title: "認識嘉義縣義竹鄉、翁氏宗族（蕃薯藤）", url: "https://n.yam.com/Article/20220109937120" }
    ]
  },
  "liugui-center": {
    name: "六桂村活動中心",
    fullName: "六桂村活動中心",
    lat: 23.3344394, lng: 120.2420277, label: "right", icon: "people",
    type: "story",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "六桂村是翁家聚居的村子。翁家有一個有名的家族典故叫「六桂傳芳」：宋朝時翁家一家六個兒子都考上科舉。村名「六桂」和這個典故有沒有關係，可以問問村裡的長輩。活動中心是村民開會、跳舞、辦活動的地方，也是長輩們聚在一起聊天的好地方。",
    facts: [
      "六桂村的翁氏宗族，都是「翁貴溪公」和「翁濱溪公」兩房的後代。",
      "義竹國小校慶時，六桂社區的土風舞隊也曾上台表演。"
    ],
    mission: "訪問任務：請一位在活動中心的長輩告訴你，「六桂」這個名字是怎麼來的？記下他說的一句話。",
    elder: "",
    sources: [
      { title: "翁清江古厝與六桂傳芳（1111）", url: "https://www.1111.com.tw/news/149978/amp/" },
      { title: "翁氏宗族與六桂村（蕃薯藤）", url: "https://n.yam.com/Article/20220109937120" },
      { title: "義竹國小108週年校慶報導（風傳媒）", url: "https://www.storm.mg/article/4780073" }
    ]
  },
  "yizhu-elementary": {
    name: "義竹國小",
    fullName: "嘉義縣義竹鄉義竹國民小學",
    lat: 23.3360369, lng: 120.2455638, label: "right", icon: "flag",
    type: "story",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "義竹國小是一所有百年歷史的小學，2023年慶祝創校108週年，也就是大約在1915年創校。很多義竹國中的同學小時候就在這裡念書，你的爸爸媽媽、阿公阿嬤可能也是這裡的校友。",
    facts: [
      "附近的「原義竹圍分教場教師宿舍」建於1915年，是少見的雙拼日式宿舍，2019年登錄為嘉義縣歷史建築。",
      "學校有傳統樂旗隊，曾代表嘉義縣參加全國賽。"
    ],
    mission: "回家訪問：問問家裡的長輩，他們是不是義竹國小畢業的？那時候的學校長什麼樣子？",
    elder: "",
    sources: [
      { title: "義竹國小創校108週年（風傳媒）", url: "https://www.storm.mg/article/4780073" },
      { title: "原義竹圍分教場教師宿舍修復（聯合新聞網）", url: "https://udn.com/news/story/7326/9609748" }
    ]
  },
  "wengqingchun": {
    name: "翁慶春古宅",
    fullName: "翁慶春古宅（武秀才故居）",
    lat: 23.334563, lng: 120.244994, label: "below", icon: "gate",
    type: "guard",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "翁慶春是清代的武秀才。他的古宅是一座四合院，旁邊還結合了兩棟洋樓，外面圍著紅磚牆。嘉義縣政府已經把它列冊追蹤，鄉公所也在爭取讓它成為古蹟。2025年丹娜絲颱風吹倒了一面牆，老宅更需要大家關心。",
    facts: [
      "古宅屬於私人財產，目前還沒有正式的文化資產身分。",
      "安全提醒：建物有損壞，請在外面觀察，不要進入或攀爬。"
    ],
    mission: "想像任務：如果你可以幫翁慶春古宅說一句話，讓更多人願意保護它，你會說什麼？",
    elder: "",
    sources: [
      { title: "翁慶春古宅颱風受損報導（旺得富）", url: "https://wantrich.chinatimes.com/news/20251029900125-420501" }
    ]
  },
  "market-1": {
    name: "公有第一攤販市場",
    fullName: "義竹鄉公有第一攤販市場",
    lat: 23.3351166, lng: 120.2439238, label: "left", icon: "awning",
    type: "food",
    image: "",
    imageCredit: "",
    card: "",   /* 角色卡圖片檔名，放在 images 資料夾；留空會先顯示拼圖怪獸 */
    status: "ok",
    intro:
      "市場是義竹人每天生活的中心。這裡有雞肉飯、乾意麵、豆菜麵等在地小吃。義竹的生活圈和台南鹽水、新營很接近，所以飲食習慣也很像。市場的攤商還曾經組成「五月光」，用有趣的造型介紹自己的攤位。",
    facts: [
      "2023年經濟部核定補助這座市場的建物補強工程。",
      "豆菜麵被很多人認為是義竹最有代表性的小吃之一。"
    ],
    mission: "美食偵探：找一個攤位，問老闆在這裡做了幾年？最受歡迎的是什麼？把它畫成一個「食光系」角色。",
    elder: "",
    sources: [
      { title: "義竹小吃半日遊（Smile Taiwan）", url: "https://smiletaiwan.cw.com.tw/article/6503" },
      { title: "公有零售市場補強核定清單（經濟部）", url: "https://market.cto.moea.gov.tw/tmmarket/upload/FileManage/56BA2E0E-2A72-4529-B380-523AD11206B4/1120609-各縣市政府公有零售市場第36次核定清單.pdf" }
    ]
  }
};
