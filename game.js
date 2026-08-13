// ============================================================
//  ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
// ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
// ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
// ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
// ============================================================
//  所有场景、道具、成就配置都写在这里，方便直接修改！
// ============================================================

// ==================== 道具配置 ====================
// id: 唯一标识, name: 名称, desc: 描述, usable: 是否可主动使用, useEvent: 使用时触发的事件ID
var ITEM_CONFIG = {
  student_card:   { id: "student_card",   name: "学生卡",   desc: "文海中学的学生证，证明你的身份", usable: false },
  library_card:   { id: "library_card",   name: "借书卡",   desc: "图书馆借阅凭证，可进入图书馆", usable: false },
  lab_key:        { id: "lab_key",        name: "实验室钥匙", desc: "一把铜制钥匙，可打开实验室大门", usable: false },
  mysterious_note:{ id: "mysterious_note",name: "神秘纸条", desc: "泛黄的纸条，上面写着一段模糊的文字", usable: true, useEvent: "read_note" },
  medal:          { id: "medal",          name: "荣誉奖章", desc: "文海中学优秀学生的荣誉证明", usable: false },
  plant_specimen: { id: "plant_specimen", name: "植物标本", desc: "一片精心制作的银杏叶标本", usable: true, useEvent: "examine_specimen" },
  golden_pen:     { id: "golden_pen",     name: "金笔",     desc: "一支刻着「文海」的金色钢笔，意义非凡", usable: true, useEvent: "use_golden_pen" },
};

// ==================== 成就配置 ====================
// id: 唯一标识, name: 名称, desc: 解锁后显示的描述, icon: 图标
var ACHIEVEMENT_CONFIG = {
  first_step:   { id: "first_step",   name: "初入文海", desc: "第一次踏入文海中学的校门", icon: "🚪" },
  bookworm:     { id: "bookworm",     name: "书虫",     desc: "成功进入图书馆，知识的大门已打开", icon: "📚" },
  athlete:      { id: "athlete",      name: "运动健将", desc: "来到操场，挥洒青春汗水", icon: "⚽" },
  gourmet:      { id: "gourmet",      name: "美食家",   desc: "光顾食堂，品尝校园美食", icon: "🍜" },
  scholar:      { id: "scholar",      name: "学霸",     desc: "进入实验室，探索科学奥秘", icon: "🔬" },
  green_thumb:  { id: "green_thumb",  name: "园艺达人", desc: "漫步花园，感受自然之美", icon: "🌿" },
  explorer:     { id: "explorer",     name: "探险家",   desc: "探索了文海中学的每一个角落", icon: "🗺️" },
  collector:    { id: "collector",    name: "收藏家",   desc: "集齐了所有隐藏道具", icon: "💎" },
  note_reader:  { id: "note_reader",  name: "解密者",   desc: "阅读了神秘纸条上的内容", icon: "📜" },
  honor_student:{ id: "honor_student",name: "三好学生", desc: "获得了荣誉奖章", icon: "🏅" },
  flying_pig:   { id: "flying_pig",   name: "飞天之猪", desc: "见证了神秘猪猪拉屎之地", icon: "🐷" },
};

// ==================== 剧情事件配置 ====================
// id: 唯一标识, title: 弹窗标题, text: 弹窗内容, icon: 图标
var EVENT_CONFIG = {
  read_note: {
    id: "read_note", title: "神秘纸条", icon: "📜",
    text: "你小心翼翼地展开泛黄的纸条，上面用褪色的墨水写着：<br><br>「文海之心，藏于书阁。<br>　星辰之下，金石为开。」<br><br>这似乎是某个前辈留下的线索……"
  },
  examine_specimen: {
    id: "examine_specimen", title: "植物标本", icon: "🍂",
    text: "这片银杏叶保存得非常完好，叶脉清晰可见。背面贴着一张小标签：<br><br>「2023年秋 · 文海中学百年银杏树下拾」<br><br>看来这片叶子承载着一段珍贵的回忆。"
  },
  use_golden_pen: {
    id: "use_golden_pen", title: "金笔", icon: "🖊️",
    text: "你拿起这支金笔，笔身沉甸甸的，做工精致。在灯光下，笔身上的「文海」二字熠熠生辉。<br><br>这大概是某位优秀毕业生留下的纪念品，见证着文海中学的辉煌岁月。"
  },
  found_medal: {
    id: "found_medal", title: "荣誉奖章", icon: "🏅",
    text: "在礼堂的陈列柜角落，你发现了一枚闪闪发光的奖章。上面刻着：<br><br>「文海中学 · 杰出贡献奖」<br><br>这是对文海学子最高荣誉的认可！"
  },
  gate_event: {
    id: "gate_event", title: "校门口的发现", icon: "🏫",
    text: "你站在文海中学的大门前，阳光洒在「文海中学」四个大字上。门卫室的老爷爷笑着递给你一张学生卡。<br><br>「新同学吧？欢迎来到文海！」"
  },
  library_event: {
    id: "library_event", title: "图书馆奇遇", icon: "📖",
    text: "推开厚重的木门，书香扑面而来。在书架深处，一本旧书的夹页中掉出一张泛黄的纸条……<br><br>你获得了一张神秘纸条！"
  },
  lab_event: {
    id: "lab_event", title: "实验室发现", icon: "⚗️",
    text: "实验室里摆满了各种仪器。在实验台抽屉里，你发现了一支刻着「文海」的金色钢笔。<br><br>这支笔看起来不同寻常！"
  },
  complete_event: {
    id: "complete_event", title: "探索完成", icon: "🎉",
    text: "恭喜你！你已经走遍了文海中学的每一个角落，发现了所有的秘密。<br><br>文海的故事还在继续，每一届学子都在这里书写着属于自己的篇章……"
  }
};

// ==================== 场景配置 ====================
// id: 唯一标识, name: 地点名称, desc: 场景描述, img: 背景图片路径(后续替换),
// placeholder: 图片占位文字, buttons: 行动按钮数组
// 按钮: { text: 按钮文字, target: 目标场景ID, condition: 条件(item/achievement),
//         event: 触发事件ID, getItem: 获得道具ID, unlockAch: 解锁成就ID,
//         cls: 按钮样式类(special) }
var SCENE_CONFIG = {
  opening_1: {
    id: "opening_1", name: "文海学校", img: "opening1.jpg",
    desc: "nia，高中终于放学了，又搞砸了………",
    autoNext: "opening_2",
    buttons: []
  },
  opening_2: {
    id: "opening_2", name: "文海学校", img: "opening1.jpg",
    desc: "阿嘞？这里是哪里来着",
    autoNext: "opening_3",
    buttons: []
  },
  opening_3: {
    id: "opening_3", name: "文海学校", img: "opening2.jpg",
    desc: "头……好晕",
    autoJump: "gate",
    shake: true,
    buttons: []
  },
  gate: {
    id: "gate", name: "校门口", img: "start.jpg",
    placeholder: "📷 校门口照片",
    desc: "这里……是哪里……|居然是文海中学吗……|真是好久没见了呢……要不，进去看看？",
    buttons: [
      { text: "抬头看天", target: "gate_look" },
      { text: "去教学楼吧", popup: "前面的地点以后再去探索吧！" },
      { text: "欸……左边的小树林里似乎有异动", popup: "前面的地点以后再去探索吧！" },
      { text: "小学的十字路口那里似乎发出了点动静……", target: "hermit_1" },
    ]
  },
  gate_look: {
    id: "gate_look", name: "校门口", img: "start.jpg",
    desc: "你真的要抬头吗",
    buttons: [
      { text: "抬头", target: "gate_confirm" },
      { text: "不抬头", target: "gate" },
    ]
  },
  gate_confirm: {
    id: "gate_confirm", name: "校门口", img: "start.jpg",
    desc: "你确定吗",
    buttons: [
      { text: "确定", target: "pig_1" },
      { text: "不确定", target: "gate" },
    ]
  },
  pig_1: {
    id: "pig_1", name: "神秘猪猪拉屎之地", img: "pig1.jpg",
    desc: "好多……好多猪哇！！！！",
    unlockAch: "flying_pig",
    shakeHard: true,
    autoJump: "pig_2",
    buttons: []
  },
  pig_2: {
    id: "pig_2", name: "神秘猪猪拉屎之地", img: "pig2.jpg",
    desc: "他们……他们开始拉屎了！！！！！",
    shakeHard: true,
    autoJump: "pig_3",
    buttons: []
  },
  pig_3: {
    id: "pig_3", name: "神秘猪猪拉屎之地", img: "pig3.jpg",
    desc: "越来越多了……快跑啊！！！！",
    shakeHard: true,
    autoJump: "toilet",
    buttons: []
  },
  toilet: {
    id: "toilet", name: "厕所", img: "toilet.jpg",
    desc: "欸……瓦达西，怎么到……厕所了？！",
    buttons: [
      { text: "走出厕所", target: "window_scene" },
    ]
  },
  window_scene: {
    id: "window_scene", name: "厕所", img: "window.jpg",
    desc: "窗外……是小学啊……|真是怀念呢……那时候快乐的时光……|（你非常念旧）|嘶……头有点晕……",
    shakeHard: true,
    autoJump: "drunk",
    buttons: []
  },
  drunk: {
    id: "drunk", name: "喝大了", img: "drunk.jpg",
    desc: "欸……瓦达西……怎么到这了……|难道……我成为了一名杭二的学生？！|头……还是好晕",
    shakeHard: true,
    autoJump: "gate",
    buttons: []
  },
  hermit_1: {
    id: "hermit_1", name: "一位隐士的地方", img: "hermit.jpg",
    desc: "欸，这里面似乎有些神秘的动静|要不要进去看看呢……|（骗你的我根本不会给你选择的）|好吧，那我就进去看看吧……",
    autoNext: "hermit_2",
    buttons: []
  },
  hermit_2: {
    id: "hermit_2", name: "一位隐士的地方", img: "walking1.jpg",
    desc: "（走路……）|（走路……）",
    autoJump: "hermit_3",
    buttons: []
  },
  hermit_3: {
    id: "hermit_3", name: "一位隐士的地方", img: "walking2.png",
    desc: "什……什么！哈基高大师？！|哈基高：亚嘞亚嘞，你这家伙，居然胆敢打扰我修行，真是失礼呢！|怎……怎么办，触怒了哈基高大师的后果，可是很严重的啊……",
    buttons: [
      { text: "肯定……要跑路啊", target: "hermit_run" },
      { text: "肯定要……哈气啊！", target: "hermit_hachi" },
      { text: "只要虚心求教就可以了吧", target: "hermit_ask" },
    ]
  },
  hermit_run: {
    id: "hermit_run", name: "一位隐士的地方", img: "walking2.png",
    desc: "骗你的……我才不跑啊，逃跑可是懦夫的行为。|我要虚心学习它的哈气神功，趁他不备时偷袭他|（深吸一口气）大……大师！我喜欢你（划掉）我仰慕你很久了！！！！请和我交往（划掉）请教我怎么学会哈气神功吧！！！！！！",
    autoNext: "hermit_teach",
    buttons: []
  },
  hermit_hachi: {
    id: "hermit_hachi", name: "一位隐士的地方", img: "walking2.png",
    desc: "骗你的……我才不敢哈气啊|我要虚心学习它的哈气神功，趁他不备时偷袭他|（深吸一口气）大……大师！我喜欢你（划掉）我仰慕你很久了！！！！请和我交往（划掉）请教我怎么学会哈气神功吧！！！！！！",
    autoNext: "hermit_teach",
    buttons: []
  },
  hermit_ask: {
    id: "hermit_ask", name: "一位隐士的地方", img: "walking2.png",
    desc: "（深吸一口气）大……大师！我喜欢你（划掉）我仰慕你很久了！！！！请和我交往（划掉）请教我怎么学会哈气神功吧！！！！！！",
    shake: true,
    autoNext: "hermit_teach",
    buttons: []
  },
  hermit_teach: {
    id: "hermit_teach", name: "一位隐士的地方", img: "walking2.png",
    desc: "哈基高：真是拿你没办法呢……那我就教你吧，飞天哈气流的秘诀，收下吧|哦哦哦要被教了吗，好激动|哈基高：秘诀就是！|秘诀就是！！！（激动）|哈基高：曼波|大师你SB吧",
    autoJump: "hermit_ha",
    buttons: []
  },
  hermit_ha: {
    id: "hermit_ha", name: "一位隐士的地方", img: "hachi_ha.png",
    desc: "哈基高：哈！！！！！！！！",
    shakeHard: true,
    autoJump: "gate",
    buttons: []
  },
  teaching_building: {
    id: "teaching_building", name: "教学楼", img: "",
    placeholder: "📷 教学楼照片",
    desc: "明亮的走廊里回荡着朗朗读书声。教室门口贴着课程表，墙上的公告栏贴着各种社团活动通知。在走廊尽头的失物招领处，似乎有什么东西……",
    buttons: [
      { text: "查看失物招领处", target: "teaching_building", getItem: "library_card", event: null },
      { text: "前往图书馆", target: "library", condition: "library_card" },
      { text: "前往实验室", target: "lab", condition: "student_card" },
      { text: "返回校门口", target: "gate" },
      { text: "前往花园", target: "garden" },
    ]
  },
  library: {
    id: "library", name: "图书馆", img: "",
    placeholder: "📷 图书馆照片",
    desc: "高大的书架直通天花板，空气中弥漫着旧书特有的香气。阳光透过彩色玻璃窗洒在阅览桌上。角落里，一本泛黄的古书引起了你的注意……",
    buttons: [
      { text: "翻阅那本古书", target: "library", event: "library_event", getItem: "mysterious_note", unlockAch: "bookworm" },
      { text: "返回教学楼", target: "teaching_building" },
      { text: "前往礼堂", target: "auditorium" },
    ]
  },
  playground: {
    id: "playground", name: "操场", img: "",
    placeholder: "📷 操场照片",
    desc: "宽阔的操场上，同学们正在上体育课。跑道上有人挥汗如雨，篮球场上传来阵阵欢呼。操场边的看台上，几个学生在聊天休息。",
    buttons: [
      { text: "加入篮球赛", target: "playground", unlockAch: "athlete" },
      { text: "返回校门口", target: "gate" },
      { text: "前往食堂", target: "cafeteria" },
      { text: "前往体育馆", target: "gym" },
    ]
  },
  cafeteria: {
    id: "cafeteria", name: "食堂", img: "",
    placeholder: "📷 食堂照片",
    desc: "飘来阵阵饭菜香，食堂阿姨正在窗口忙碌。今天的特色菜是红烧肉和糖醋排骨。墙上贴着「光盘行动」的标语，学生们排队有序。",
    buttons: [
      { text: "排队打饭", target: "cafeteria", unlockAch: "gourmet" },
      { text: "返回校门口", target: "gate" },
      { text: "前往操场", target: "playground" },
      { text: "前往体育馆", target: "gym" },
    ]
  },
  lab: {
    id: "lab", name: "实验室", img: "",
    placeholder: "📷 实验室照片",
    desc: "实验室里整齐排列着实验台，烧杯、试管、显微镜一应俱全。墙上挂着科学家的画像，黑板上的公式还没有擦掉。实验台抽屉里似乎有什么东西……",
    buttons: [
      { text: "打开实验台抽屉", target: "lab", event: "lab_event", getItem: "golden_pen", unlockAch: "scholar" },
      { text: "返回教学楼", target: "teaching_building" },
    ]
  },
  garden: {
    id: "garden", name: "花园", img: "",
    placeholder: "📷 花园照片",
    desc: "这里是校园里最安静的角落。百年银杏树洒下斑驳的树影，花坛里各色鲜花竞相开放。石板小径蜿蜒曲折，通向一个小凉亭。树下有一片特别的银杏叶……",
    buttons: [
      { text: "拾起银杏叶", target: "garden", getItem: "plant_specimen", unlockAch: "green_thumb" },
      { text: "返回教学楼", target: "teaching_building" },
      { text: "前往礼堂", target: "auditorium" },
    ]
  },
  auditorium: {
    id: "auditorium", name: "礼堂", img: "",
    placeholder: "📷 礼堂照片",
    desc: "庄严的礼堂里，舞台上挂着「文海中学」的校徽。台下是一排排整齐的座椅。陈列柜里展示着学校历年获得的荣誉。角落里有一枚奖章闪闪发光……",
    buttons: [
      { text: "查看陈列柜", target: "auditorium", event: "found_medal", getItem: "medal", unlockAch: "honor_student" },
      { text: "前往图书馆", target: "library" },
      { text: "前往花园", target: "garden" },
    ]
  },
  admin_building: {
    id: "admin_building", name: "行政楼", img: "",
    placeholder: "📷 行政楼照片",
    desc: "行政楼是学校的办公中心，老师们在这里批改作业、准备教案。走廊里偶尔有老师匆匆走过。公告栏上贴着最新的校园通知。",
    buttons: [
      { text: "查看公告栏", target: "admin_building" },
      { text: "返回校门口", target: "gate" },
      { text: "前往体育馆", target: "gym" },
    ]
  },
  gym: {
    id: "gym", name: "体育馆", img: "",
    placeholder: "📷 体育馆照片",
    desc: "体育馆里传来羽毛球拍击球的声音。场地宽敞明亮，可以打篮球、羽毛球和乒乓球。墙上挂着「友谊第一，比赛第二」的横幅。",
    buttons: [
      { text: "打一场羽毛球", target: "gym" },
      { text: "前往操场", target: "playground" },
      { text: "前往食堂", target: "cafeteria" },
      { text: "前往行政楼", target: "admin_building" },
    ]
  },
};

// ============================================================
//  ██████╗  █████╗ ███╗   ███╗███████╗
// ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
// ██║  ███╗███████║██╔████╔██║█████╗
// ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝
// ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
//  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
// ============================================================
//             游戏状态管理 & 核心逻辑
// ============================================================

// 游戏状态（每次重新开始，不保存）
var gameState = {
  currentScene: "opening",   // 当前场景ID
  inventory: [],             // 背包道具ID列表
  achievements: [],          // 已解锁成就ID列表
  visitedScenes: [],         // 访问过的场景ID列表
  newAchievements: [],       // 本次新解锁的成就(用于提醒)
};

// 检查是否有某道具
function hasItem(itemId) { return gameState.inventory.indexOf(itemId) !== -1; }

// 检查是否解锁某成就
function hasAchievement(achId) { return gameState.achievements.indexOf(achId) !== -1; }

// ===== 更新日志配置 =====
var CHANGELOG = [
  { version: "v1.0", date: "2026-08-13", items: [
    "首次发布文海校园大探险",
    "新增开场剧情（nia~头好晕）",
    "新增校门口场景及三个分支选择",
    "新增隐士之地（哈基高大师）完整剧情线",
    "新增打字机字幕效果，支持 | 分段",
    "新增屏幕震动特效（普通/剧烈）",
    "新增更新日志功能",
  ]}
];

// 添加道具
function addItem(itemId) {
  if (!hasItem(itemId)) {
    gameState.inventory.push(itemId);
    var item = ITEM_CONFIG[itemId];
    showToast("获得道具：" + item.name);
    updateBackpackBadge();
    // 检查收藏家成就
    checkCollectorAchievement();
  }
}

// 解锁成就
function unlockAchievement(achId) {
  if (!hasAchievement(achId)) {
    gameState.achievements.push(achId);
    gameState.newAchievements.push(achId);
    var ach = ACHIEVEMENT_CONFIG[achId];
    showToast("成就解锁：" + ach.name);
    updateAchievementBadge();
    // 检查探险家成就
    checkExplorerAchievement();
  }
}

// 检查收藏家成就
function checkCollectorAchievement() {
  var allItemIds = Object.keys(ITEM_CONFIG);
  var allCollected = allItemIds.every(function(id) { return hasItem(id); });
  if (allCollected) {
    unlockAchievement("collector");
  }
}

// 检查探险家成就
function checkExplorerAchievement() {
  var allSceneIds = Object.keys(SCENE_CONFIG);
  var allVisited = allSceneIds.every(function(id) { return gameState.visitedScenes.indexOf(id) !== -1; });
  if (allVisited) {
    unlockAchievement("explorer");
    // 触发完成事件
    showEventModal("complete_event");
  }
}

// 记录访问场景
function visitScene(sceneId) {
  if (gameState.visitedScenes.indexOf(sceneId) === -1) {
    gameState.visitedScenes.push(sceneId);
  }
}

// ============================================================
//  UI 渲染
// ============================================================

// 类型打字机变量
var typewriterTimer = null;
var currentSentences = [];
var currentSentenceIndex = 0;
var currentCharIndex = 0;
var typewriterDone = false;
var showButtonsAfter = false;  // 是否在打完当前句后显示按钮

// 渲染当前场景
function renderScene(sceneId) {
  var scene = SCENE_CONFIG[sceneId];
  if (!scene) return;

  // 停止之前的打字机
  stopTypewriter();

  gameState.currentScene = sceneId;
  visitScene(sceneId);

  // 顶部地点名
  document.getElementById("location-name").textContent = scene.name;

  // 中部图片
  var imageArea = document.getElementById("image-area");
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  if (scene.hideImage) {
    imageArea.style.display = "none";
  } else {
    imageArea.style.display = "flex";
    if (scene.img) {
      img.style.display = "none";
      img.src = "";
      // 强制刷新，防止同一图片路径不触发重载
      setTimeout(function() {
        img.src = scene.img + "?t=" + Date.now();
        img.style.display = "block";
      }, 10);
      placeholder.style.display = "none";
    } else {
      img.style.display = "none";
      placeholder.style.display = "flex";
      placeholder.textContent = scene.placeholder;
    }
  }

  // 构建行动按钮（先隐藏）
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  if (scene.buttons) {
    scene.buttons.forEach(function(btn) {
      var button = document.createElement("button");
      button.className = "action-btn" + (btn.cls ? " " + btn.cls : "");
      button.textContent = btn.text;

      // 检查条件
      var disabled = false;
      if (btn.condition) {
        if (!hasItem(btn.condition) && !hasAchievement(btn.condition)) {
          disabled = true;
          button.textContent = btn.text + " 🔒";
        }
      }
      button.disabled = disabled;

      button.addEventListener("click", function() { handleAction(btn); });
      actionsArea.appendChild(button);
    });
  }
  actionsArea.style.display = "none";

  // 打字机效果显示描述
  startTypewriter(scene.desc, scene.autoNext, scene.autoJump);

  // 场景解锁成就
  if (scene.unlockAch) {
    unlockAchievement(scene.unlockAch);
    var achCfg = ACHIEVEMENT_CONFIG[scene.unlockAch];
    if (achCfg) {
      showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
    }
  }

  // 屏幕震动
  if (scene.shake) {
    var gc = document.getElementById("game-container");
    gc.classList.add("shake");
    setTimeout(function() { gc.classList.remove("shake"); }, 500);
  }
  if (scene.shakeHard) {
    var gc = document.getElementById("game-container");
    gc.classList.add("shake-hard");
    setTimeout(function() { gc.classList.remove("shake-hard"); }, 2000);
  }

  updateBackpackBadge();
  updateAchievementBadge();
}

// 停止打字机
function stopTypewriter() {
  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
    typewriterTimer = null;
  }
  typewriterDone = false;
}

// 开始打字机
function startTypewriter(text, autoNext, autoJump) {
  // 检测到下一个场景标记，去除后设置标志
  showButtonsAfter = false;
  if (text.indexOf("（到下一个场景）") !== -1) {
    text = text.replace("（到下一个场景）", "");
    showButtonsAfter = true;
  }

  // 空文本直接显示按钮
  if (!text.trim()) {
    document.getElementById("description-area").innerHTML = "";
    document.getElementById("actions-area").style.display = "flex";
    return;
  }

  // 按 | 手动分段，没有 | 则整段显示
  currentSentences = [];
  if (text.indexOf("|") !== -1) {
    var parts = text.split("|");
    for (var i = 0; i < parts.length; i++) {
      var seg = parts[i].trim();
      if (seg) currentSentences.push(seg);
    }
  } else {
    currentSentences.push(text);
  }

  currentSentenceIndex = 0;
  currentCharIndex = 0;
  typewriterDone = false;

  var descArea = document.getElementById("description-area");
  descArea.innerHTML = "<span class=\"cursor\"></span>";
  descArea.onclick = null;

  typeNextChar(autoNext, autoJump);
}

// 打字下一个字
function typeNextChar(autoNext, autoJump) {
  var descArea = document.getElementById("description-area");
  if (currentSentenceIndex >= currentSentences.length) {
    // 所有句子打完
    typewriterDone = true;
    descArea.innerHTML = descArea.innerHTML.replace("<span class=\"cursor\"></span>", "");
    if (autoJump) {
      // 自动跳转场景
      setTimeout(function() { renderScene(autoJump); }, 800);
    } else if (autoNext) {
      // 点击继续后跳转场景
      descArea.innerHTML += "<span class=\"tap-hint\">▼ 点击继续</span>";
      descArea.onclick = function() {
        descArea.onclick = null;
        renderScene(autoNext);
      };
    } else if (showButtonsAfter) {
      document.getElementById("actions-area").style.display = "flex";
    } else {
      descArea.innerHTML += "<span class=\"tap-hint\">▼ 点击继续</span>";
      descArea.onclick = function() {
        descArea.onclick = null;
        descArea.innerHTML = descArea.innerHTML.replace("<span class=\"tap-hint\">▼ 点击继续</span>", "");
        document.getElementById("actions-area").style.display = "flex";
      };
    }
    return;
  }

  var sentence = currentSentences[currentSentenceIndex];
  if (currentCharIndex < sentence.length) {
    // 还在当前句子中，逐字显示
    var typed = sentence.substring(0, currentCharIndex + 1);
    descArea.innerHTML = typed + "<span class=\"cursor\"></span>";
    currentCharIndex++;
    typewriterTimer = setTimeout(function() { typeNextChar(autoNext, autoJump); }, 50);
  } else {
    // 当前句子打完，等待点击
    descArea.innerHTML = sentence + "<span class=\"tap-hint\">▼ 点击继续</span>";
    descArea.onclick = function() {
      descArea.onclick = null;
      currentSentenceIndex++;
      currentCharIndex = 0;
      descArea.innerHTML = "<span class=\"cursor\"></span>";
      typewriterTimer = setTimeout(function() { typeNextChar(autoNext, autoJump); }, 50);
    };
  }
}

// 处理按钮点击
function handleAction(btn) {
  // 弹窗提示
  if (btn.popup) {
    showPopupModal(btn.popup);
    return;
  }

  // 先触发事件
  if (btn.event) {
    showEventModal(btn.event);
  }

  // 获得道具
  if (btn.getItem) {
    addItem(btn.getItem);
  }

  // 解锁成就
  if (btn.unlockAch) {
    unlockAchievement(btn.unlockAch);
  }

  // 跳转场景（如果target与当前相同则刷新当前场景）
  if (btn.target) {
    renderScene(btn.target);
  }
}

// 显示事件弹窗
function showEventModal(eventId) {
  var evt = EVENT_CONFIG[eventId];
  if (!evt) return;

  var overlay = document.createElement("div");
  overlay.className = "modal-overlay event-modal";
  overlay.innerHTML =
    '<div class="modal">' +
    '<div class="modal-header">' + evt.icon + ' ' + evt.title + '</div>' +
    '<div class="modal-body">' + evt.text + '</div>' +
    '<div class="modal-footer">' +
    '<button class="modal-close-btn" id="event-close-btn">继 续</button>' +
    '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  overlay.querySelector("#event-close-btn").addEventListener("click", function() {
    overlay.remove();
  });
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) overlay.remove();
  });
}

// 显示提示弹窗
function showPopupModal(message) {
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay event-modal";
  overlay.innerHTML =
    '<div class="modal">' +
    '<div class="modal-body" style="padding: 30px 20px; text-align: center; font-size: 16px;">' + message + '</div>' +
    '<div class="modal-footer">' +
    '<button class="modal-close-btn" id="popup-close-btn">确 定</button>' +
    '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  overlay.querySelector("#popup-close-btn").addEventListener("click", function() {
    overlay.remove();
  });
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) overlay.remove();
  });
}

// 打开更新日志
function openChangelog() {
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  var html = '<div class="modal changelog-modal"><div class="modal-header">📋 更新日志</div>';
  html += '<div class="modal-body"><div class="changelog-list">';
  for (var i = 0; i < CHANGELOG.length; i++) {
    var log = CHANGELOG[i];
    html += '<div class="changelog-entry">';
    html += '<div class="changelog-ver">' + log.version + ' <span class="changelog-date">' + log.date + '</span></div>';
    html += '<ul class="changelog-items">';
    for (var j = 0; j < log.items.length; j++) {
      html += '<li>' + log.items[j] + '</li>';
    }
    html += '</ul></div>';
  }
  html += '</div></div>';
  html += '<div class="modal-footer"><button class="modal-close-btn" id="changelog-close-btn">关 闭</button></div></div>';
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  overlay.querySelector("#changelog-close-btn").addEventListener("click", function() { overlay.remove(); });
  overlay.addEventListener("click", function(e) { if (e.target === overlay) overlay.remove(); });
}

// 打开背包
function openBackpack() {
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  var itemsHtml = "";

  if (gameState.inventory.length === 0) {
    itemsHtml = '<div class="empty-text">背包空空如也<br>去探索校园收集道具吧！</div>';
  } else {
    gameState.inventory.forEach(function(itemId) {
      var item = ITEM_CONFIG[itemId];
      if (!item) return;
      itemsHtml +=
        '<div class="item-card">' +
        '<div class="item-icon">📦</div>' +
        '<div class="item-info">' +
        '<div class="item-name">' + item.name + '</div>' +
        '<div class="item-desc">' + item.desc + '</div>' +
        '</div>' +
        (item.usable ? '<button class="item-use-btn" data-item="' + itemId + '">使用</button>' : '') +
        '</div>';
    });
  }

  overlay.innerHTML =
    '<div class="modal">' +
    '<div class="modal-header">🎒 背包</div>' +
    '<div class="modal-body">' + itemsHtml + '</div>' +
    '<div class="modal-footer">' +
    '<button class="modal-close-btn" id="backpack-close-btn">关 闭</button>' +
    '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  // 绑定使用按钮
  overlay.querySelectorAll(".item-use-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var itemId = btn.dataset.item;
      var item = ITEM_CONFIG[itemId];
      if (item && item.useEvent) {
        overlay.remove();
        showEventModal(item.useEvent);
      }
    });
  });

  overlay.querySelector("#backpack-close-btn").addEventListener("click", function() { overlay.remove(); });
  overlay.addEventListener("click", function(e) { if (e.target === overlay) overlay.remove(); });
}

// 打开成就列表
function openAchievements() {
  // 清除新成就提醒
  gameState.newAchievements = [];
  updateAchievementBadge();

  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  var achHtml = "";
  var allAch = Object.values(ACHIEVEMENT_CONFIG);

  // 已解锁排前面
  var unlocked = allAch.filter(function(a) { return hasAchievement(a.id); });
  var locked = allAch.filter(function(a) { return !hasAchievement(a.id); });

  unlocked.concat(locked).forEach(function(ach) {
    var isUnlocked = hasAchievement(ach.id);
    achHtml +=
      '<div class="ach-card ' + (isUnlocked ? "unlocked" : "locked") + '">' +
      '<div class="ach-icon">' + (isUnlocked ? ach.icon : "❓") + '</div>' +
      '<div class="ach-info">' +
      '<div class="ach-name">' + ach.name + '</div>' +
      '<div class="ach-desc">' + ach.desc + '</div>' +
      '</div>' +
      '</div>';
  });

  overlay.innerHTML =
    '<div class="modal">' +
    '<div class="modal-header">🏆 成就</div>' +
    '<div class="modal-body">' + achHtml + '</div>' +
    '<div class="modal-footer">' +
    '<button class="modal-close-btn" id="ach-close-btn">关 闭</button>' +
    '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  overlay.querySelector("#ach-close-btn").addEventListener("click", function() { overlay.remove(); });
  overlay.addEventListener("click", function(e) { if (e.target === overlay) overlay.remove(); });
}

// 更新背包角标
function updateBackpackBadge() {
  var badge = document.getElementById("backpack-count");
  var count = gameState.inventory.length;
  if (count > 0) {
    badge.style.display = "flex";
    badge.textContent = count;
  } else {
    badge.style.display = "none";
  }
}

// 更新成就角标
function updateAchievementBadge() {
  var badge = document.getElementById("ach-new");
  if (gameState.newAchievements.length > 0) {
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

// Toast 提示
var toastTimer = null;
function showToast(msg) {
  var toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toast.classList.remove("show"); }, 2000);
}

// 开始游戏
function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("float-btns").style.display = "flex";
  // 每次从开头场景开始
  gameState.currentScene = "opening_1";
  gameState.inventory = [];
  gameState.achievements = [];
  gameState.visitedScenes = [];
  gameState.newAchievements = [];
  renderScene("opening_1");
}