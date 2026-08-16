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
  hachi_hat:      { id: "hachi_hat",      name: "哈基高的斗笠", desc: "哈基高大师留下的斗笠，似乎蕴含着某种力量", usable: false },
  hachi_book:     { id: "hachi_book",     name: "哈基高的哈气秘籍", desc: "这东西似乎记载了些神秘的东西", usable: false },
  bag:            { id: "bag",            name: "袋子",     desc: "可用于捕捉神兽", usable: false },
  desert_pig:     { id: "desert_pig",     name: "溜达猪",   desc: "稀有神兽，喜欢在沙漠溜达", usable: false },
  almond_water:   { id: "almond_water",   name: "杏仁水",   desc: "后室中珍贵的饮用水，感觉很清醒", usable: false },
  wire:           { id: "wire",           name: "电线",     desc: "从地下室找到的电线，不知道有什么用", usable: false },
  mystery_potion: { id: "mystery_potion", name: "神秘药剂", desc: "在化学实验室调配出的神秘药剂，散发着诡异的光芒", usable: false },
  dowsing_rod:    { id: "dowsing_rod",    name: "寻龙尺",   desc: "在草丛中发现的神秘道具，似乎能感应到某种力量", usable: false },
};

// ==================== 成就配置 ====================
// id: 唯一标识, name: 名称, desc: 解锁后显示的描述, icon: 图标
var ACHIEVEMENT_CONFIG = {
  flying_pig:   { id: "flying_pig",   name: "飞天之猪", desc: "见证了神秘猪猪拉屎之地", icon: "🐷" },
  hachi_king:   { id: "hachi_king",   name: "哈气之王", desc: "在御前决斗中击败了哈基高大师", icon: "👑" },
  hachi_emperor:{ id: "hachi_emperor",name: "哈气之皇", desc: "击杀困难哈基高", icon: "👑" },
  not_strong:   { id: "not_strong",   name: "你还不够强！", desc: "在御前决斗中败给了哈基高大师", icon: "💔" },
  retry_courage:{ id: "retry_courage",name: "再来一次的勇气", desc: "在御前决斗中落败仍然不认输", icon: "💪" },
  drunk_dream:  { id: "drunk_dream",  name: "疑似杭二新生", desc: "这家伙在幻想些什么呢", icon: "🤔" },
  hachi_legend: { id: "hachi_legend", name: "哈气大师传说", desc: "这段是不是我在哪看过", icon: "🌀" },
  so_free:      { id: "so_free",      name: "你真闲啊", desc: "你真闲啊", icon: "😮‍💨" },
  toilet_lover: { id: "toilet_lover", name: "喜欢蹲坑", desc: "你真的这么喜欢拉屎吗", icon: "🚽" },
  fly_higher:         { id: "fly_higher",         name: "我要飞得更高", desc: "中国人能飞中国人能飞", icon: "🚀" },
  stuck_in_backrooms: { id: "stuck_in_backrooms", name: "卡进后室了", desc: "怎么卡进后室了！", icon: "🟨" },
  red_room:           { id: "red_room",           name: "误入红室", desc: "你死了", icon: "🟥" },
  starved_to_death:   { id: "starved_to_death",   name: "饥渴而死", desc: "在后室中饥渴而死……", icon: "💀" },
  heavy_taste:        { id: "heavy_taste",        name: "重口味", desc: "翻垃圾桶翻出了个袋子", icon: "🗑️" },
  flat_fall:          { id: "flat_fall",          name: "平地摔", desc: "哈哈哈笑死我了你个小丑", icon: "🤡" },
  desert_pig_sight:   { id: "desert_pig_sight",   name: "目睹沙漠溜达猪", desc: "看到了传说中的沙漠溜达猪！", icon: "🐷" },
  capture_pig:        { id: "capture_pig",        name: "捕捉神兽溜达猪", desc: "成功捕捉了稀有神兽溜达猪！", icon: "🐗" },
  confucius_bless:    { id: "confucius_bless",    name: "儒学滋养", desc: "真喜欢拜访孔子", icon: "🙏" },
  little_greedy_cat:  { id: "little_greedy_cat",  name: "小馋猫", desc: "吃完了所有的小草，真好吃！", icon: "🐱" },
  eat_to_death:       { id: "eat_to_death",       name: "吃死了", desc: "吃到了毒草被毒死了", icon: "☠️" },
  grass_king:         { id: "grass_king",         name: "吃草之王", desc: "这傻孩子聪明的欸", icon: "🌿" },
  nasa_detected:      { id: "nasa_detected",      name: "老美的nasa这么厉害", desc: "老美的nasa这么厉害给我探测出来了", icon: "🛸" },
  beat_alien:         { id: "beat_alien",         name: "击败外星人", desc: "在石头剪刀布中击败了外星人", icon: "👽" },
  pooped_on:          { id: "pooped_on",          name: "被拉shi了", desc: "被外星人在头上拉屎了", icon: "💩" },
  level1:             { id: "level1",             name: "level1", desc: "进入层级level1", icon: "🚪" },
  unhygienic:         { id: "unhygienic",         name: "不讲卫生", desc: "妈妈没教过你不能喝陌生的水吗", icon: "🤢" },
  skin_stealer:       { id: "skin_stealer",       name: "偶遇窃皮者", desc: "在level1遇到了窃皮者", icon: "🫥" },
  past_running_ground:{ id: "past_running_ground",name: "过去跑操的地方", desc: "七年级跑操的回忆", icon: "🏃" },
  strange_place:      { id: "strange_place",      name: "到了奇怪的地方", desc: "被吸进了一个奇怪的门里", icon: "❓" },
  eternal_sleep:      { id: "eternal_sleep",      name: "长眠于此", desc: "在奇怪的地方永远睡去了……", icon: "🪦" },
  lab_1f:             { id: "lab_1f",             name: "实验楼一楼", desc: "进入了实验楼一楼", icon: "🧪" },
  library_fail:       { id: "library_fail",       name: "拜读未果", desc: "想进图书馆却被锁在门外", icon: "📚" },
  chem_lab_enter:     { id: "chem_lab_enter",     name: "进入化学实验室", desc: "进入了化学实验室", icon: "⚗️" },
  beat_bigfoot:       { id: "beat_bigfoot",       name: "战胜大脚鸡", desc: "在化学决斗中击败了大脚鸡", icon: "🐔" },
  easy_bigfoot:       { id: "easy_bigfoot",       name: "简单大脚鸡击败", desc: "你不会是打不过才选的这个吧", icon: "🐣" },
  chem_king:          { id: "chem_king",          name: "化学之王", desc: "击败了将成为神明的超级大脚鸡", icon: "👑" },
  nightmare_bigfoot:  { id: "nightmare_bigfoot",  name: "噩梦大脚鸡", desc: "击败了不可战胜的噩梦大脚鸡", icon: "👹" },
  penguin_dog:        { id: "penguin_dog",        name: "偶遇企鹅狗", desc: "在实验楼二楼遇到了企鹅狗", icon: "🐧" },
  sandbox_win:        { id: "sandbox_win",        name: "沙盘胜利", desc: "在沙盘对决中战胜了企鹅狗", icon: "🏆" },
  sandbox_lose:       { id: "sandbox_lose",       name: "沙盘失败", desc: "在沙盘对决中败给了企鹅狗", icon: "😔" },
  sandbox_hard_win:   { id: "sandbox_hard_win",   name: "击败困难企鹅狗", desc: "在困难模式下击败了企鹅狗", icon: "🎖️" },
  lost_to_bigfoot:    { id: "lost_to_bigfoot",    name: "丢人现眼", desc: "在化学决斗中输给了大脚鸡", icon: "💀" },
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
  toilet_stay: {
    id: "toilet_stay", title: "再蹲一会", icon: "🚽",
    text: "腿好麻啊……"
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
      { text: "都说中国人能飞，我也要飞！！！", target: "gate_fly" },
      { text: "去教学楼吧", popup: "前面的地点以后再去探索吧！" },
      { text: "欸……左边的小树林里似乎有异动", target: "path_to_grove" },
      { text: "小学的十字路口那里似乎发出了点动静……", target: "hermit_1" },
      { text: "去拜访孔子像", target: "confucius_1" },
      { text: "我要去实验楼耍耍！！！", target: "lab_floor" },
      { text: "去文海少年科技院（行政楼）看看吧", target: "tech_academy_1" },
      { text: "我要去看看地下室", target: "sandbag" },
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
      { text: "再蹲一会", target: "toilet_stay_check" },
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
    unlockAch: "drunk_dream",
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
      { text: "发起御前决斗", target: "hermit_duel_1", cls: "special" },
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
    unlockAch: "hachi_legend",
    shakeHard: true,
    autoJump: "gate",
    buttons: []
  },
  // ----- 御前决斗对话 -----
  hermit_duel_1: {
    id: "hermit_duel_1", name: "一位隐士的地方", img: "walking2.png",
    desc: "你这家伙，是不是太狂妄了点啊",
    autoNext: "hermit_duel_2",
    buttons: []
  },
  hermit_duel_2: {
    id: "hermit_duel_2", name: "一位隐士的地方", img: "walking2.png",
    desc: "哈基高：欸？",
    shake: true,
    autoNext: "hermit_duel_3",
    buttons: []
  },
  hermit_duel_3: {
    id: "hermit_duel_3", name: "一位隐士的地方", img: "duel1.jpg",
    desc: "我避你锋芒？",
    autoNext: "hermit_duel_4",
    buttons: []
  },
  hermit_duel_4: {
    id: "hermit_duel_4", name: "一位隐士的地方", img: "walking2.png",
    desc: "哈基高：区区蝼蚁，也敢与我哈气大师对决？",
    autoNext: "hermit_duel_5",
    buttons: []
  },
  hermit_duel_5: {
    id: "hermit_duel_5", name: "一位隐士的地方", img: "walking2.png",
    desc: "可不要小瞧了我啊，我可是很强的",
    autoNext: "hermit_duel_6",
    buttons: []
  },
  hermit_duel_6: {
    id: "hermit_duel_6", name: "一位隐士的地方", img: "walking2.png",
    desc: "哈基高：那就来较量一场吧，我会赌上哈气大师之名的",
    autoNext: "hermit_difficulty",
    buttons: []
  },
  hermit_difficulty: {
    id: "hermit_difficulty", name: "御前决斗", img: "walking2.png",
    desc: "选择决斗难度",
    buttons: [
      { text: "普通（1点血量，一击制胜）", target: "hermit_duel_7", setDifficulty: "normal" },
      { text: "困难（2点血量，每次攻击消耗1点）", target: "hermit_duel_7", setDifficulty: "hard" },
    ]
  },
  hermit_duel_7: {
    id: "hermit_duel_7", name: "一位隐士的地方", img: "walking2.png",
    desc: "要上了！！！",
    shake: true,
    autoJump: "duel_battle",
    buttons: []
  },
  // ----- 御前决斗战斗 -----
  duel_battle: {
    id: "duel_battle", name: "御前决斗", img: "walking2.png",
    desc: "",  // 战斗场景特殊处理
    buttons: []
  },
  duel_victory: {
    id: "duel_victory", name: "胜利", img: "duel_result.png",
    desc: "你击败了哈基高大师！御前决斗的胜者！",
    autoJump: "victory_1",
    buttons: []
  },
  victory_1: {
    id: "victory_1", name: "胜利", img: "duel_result.png",
    desc: "哈基高：怎么会.....我堂堂哈气大师....怎么会输...|哈基高：一定是你作弊了，你作弊了，我没有输，我没有输......|去天堂说去吧.....",
    shakeHard: true,
    autoNext: "victory_2",
    buttons: []
  },
  victory_2: {
    id: "victory_2", name: "胜利", img: "victory.jpg",
    desc: "哈基高...消失了呢......",
    getItem: "hachi_hat,hachi_book",
    autoNext: "victory_3",
    buttons: []
  },
  victory_3: {
    id: "victory_3", name: "胜利", img: "victory.jpg",
    desc: "该回校门口了，走吧",
    shake: true,
    autoJump: "gate",
    buttons: []
  },
  duel_defeat: {
    id: "duel_defeat", name: "失败", img: "duel_result.png",
    desc: "你败给了哈基高大师……御前决斗的败者……",
    autoJump: "defeat_1",
    buttons: []
  },
  defeat_1: {
    id: "defeat_1", name: "失败", img: "duel_result.png",
    desc: "难道……还是做不到吗……|哈基高：投降吧！胜利，已经注定了……|不……还没有结束|哈基高：真是倔强呢……",
    autoNext: "defeat_2",
    buttons: []
  },
  defeat_2: {
    id: "defeat_2", name: "失败", img: "defeat2.jpg",
    desc: "哈基高：投降吧，你赢的概率，连百分之一也没有",
    shake: true,
    buttons: [
      { text: "这还说啥了投降了", target: "defeat_surrender" },
      { text: "但是我拒绝", target: "defeat_refuse" },
    ]
  },
  defeat_surrender: {
    id: "defeat_surrender", name: "失败", img: "defeat2.jpg",
    desc: "哈基高：我不吃牛肉|（你被打晕了过去。。。）",
    shakeHard: true,
    autoJump: "gate",
    buttons: []
  },
  defeat_refuse: {
    id: "defeat_refuse", name: "再来一次的勇气", img: "refuse1.jpg",
    desc: "搭嘎，扣豆瓦鲁。",
    unlockAch: "retry_courage",
    autoNext: "defeat_refuse_2",
    buttons: []
  },
  defeat_refuse_2: {
    id: "defeat_refuse_2", name: "再来一次的勇气", img: "refuse2.jpg",
    desc: "杀手皇后，第三炸弹，败者食尘！！！！!",
    shakeHard: true,
    autoJump: "hermit_3",
    buttons: []
  },
  space: {
    id: "space", name: "外太空", img: "space.jpg",
    desc: "飞到外太空了😰！！|要去哪呢.......",
    unlockAch: "fly_higher",
    autoNext: "alien_encounter",
    buttons: []
  },
  alien_encounter: {
    id: "alien_encounter", name: "外星人", img: "alien_1.jpg",
    desc: "外星人：我去老美的nasa这么厉害给我探测出来了|这算哪门子外星人啊|外星人：我去你居然这么不尊重我|外星人：你激怒我了地球人",
    unlockAch: "nasa_detected",
    shake: true,
    autoNext: "alien_taunt",
    buttons: []
  },
  alien_taunt: {
    id: "alien_taunt", name: "外星人", img: "alien_2.jpg",
    desc: "外星人：我要在你的头上拉屎！！！！！|（没绷住）|外星人：笑什么!!!我可是很严肃的！！！！！|呜.....哈哈哈哈哈哈......啊哈哈哈哈哈哈哈哈哈哈|外星人：气死我了！！！你真的惹怒我了，我要和你决斗！！！|决斗啥啊|外星人：石头剪刀布|。。。sb|外星人：我很认真的啊喂！！！！|好好好我陪你玩我陪你玩",
    shakeHard: true,
    autoNext: "alien_game",
    buttons: []
  },
  alien_win: {
    id: "alien_win", name: "外星人", img: "alien_2.jpg",
    desc: "你菜狗吧|外星人：呃啊啊啊啊啊！这次是失误！！！|菜别找借口|外星人：等着！！等我回去修炼再战！！！",
    unlockAch: "beat_alien",
    autoNext: "alien_win_space",
    buttons: []
  },
  alien_win_space: {
    id: "alien_win_space", name: "外太空", img: "space.jpg",
    desc: "不是这什么菜狗外星人",
    buttons: [
      { text: "回到校门口", target: "gate" },
    ]
  },
  alien_lose: {
    id: "alien_lose", name: "外星人", img: "alien_1.jpg",
    desc: "外星人：哈哈哈哈哈哈哈哈你输啦！！！！|外星人：啊哈哈哈哈哈哈哈我要在你头上拉屎|外星人：啊哈...哈.....呃...呜欸！！！（死了）|不是这什么sb剧情我真玩不下去了|我要回地球了外星人还是太野了",
    unlockAch: "pooped_on",
    autoJump: "gate",
    buttons: []
  },
  // ----- 后室剧情线（厕所蹲坑两次触发） -----
  toilet_deep: {
    id: "toilet_deep", name: "厕所", img: "toilet_deep.jpg",
    desc: "好晕啊.....",
    shakeHard: true,
    autoJump: "backrooms_level0",
    buttons: []
  },
  backrooms_level0: {
    id: "backrooms_level0", name: "后室level0", img: "backrooms_level0.jpg",
    desc: "欸......这是哪里",
    unlockAch: "stuck_in_backrooms",
    autoNext: "backrooms_walk",
    buttons: []
  },
  backrooms_walk: {
    id: "backrooms_walk", name: "后室level0", img: "backrooms_walk.jpg",
    desc: "好像听到了一些奇怪的动静.....|往前走走看看吧......",
    fadeEffect: true,
    autoNext: "backrooms_walk_2",
    buttons: []
  },
  backrooms_walk_2: {
    id: "backrooms_walk_2", name: "后室level0", img: "backrooms_walk.jpg",
    desc: "走了好久啊.......|要不要休息一会......|这里......好闷......胸口有点痛......会不会有人来害我",
    buttons: [
      { text: "继续探索", target: "backrooms_choice" },
      { text: "停下休息", target: "backrooms_death" },
    ]
  },
  backrooms_choice: {
    id: "backrooms_choice", name: "后室level0", img: "backrooms_walk.jpg",
    desc: "往左还是往右呢",
    buttons: [
      { text: "往左", target: "backrooms_red" },
      { text: "往右", target: "backrooms_right" },
    ]
  },
  backrooms_red: {
    id: "backrooms_red", name: "后室level0", img: "backrooms_red.jpg",
    desc: ".......欸？|这里.....是哪里！",
    unlockAch: "red_room",
    autoJump: "gate",
    buttons: []
  },
  backrooms_right: {
    id: "backrooms_right", name: "后室level0", img: "backrooms_right.jpg",
    desc: "好累啊.....|不知道为什么胸没这么闷了|难道我刚才避开了什么东西？",
    shake: true,
    impactEffect: true,
    autoJump: "backrooms_level1",
    buttons: []
  },
  backrooms_level1: {
    id: "backrooms_level1", name: "后室level1", img: "backrooms_level1.jpg",
    desc: "好痛....|这是哪......|看来我切入到了一个新的层级",
    unlockAch: "level1",
    autoNext: "backrooms_level1_wet",
    buttons: []
  },
  backrooms_level1_wet: {
    id: "backrooms_level1_wet", name: "后室level1", img: "backrooms_wet.jpg",
    desc: "湿哒哒的....好多水坑|我好渴啊.......",
    buttons: [
      { text: "喝水坑里的水", target: "level1_drink" },
      { text: "继续往前", target: "level1_water" },
    ]
  },
  level1_drink: {
    id: "level1_drink", name: "后室level1", img: "backrooms_wet.jpg",
    desc: "........好晕....",
    unlockAch: "unhygienic",
    autoJump: "gate",
    buttons: []
  },
  level1_water: {
    id: "level1_water", name: "后室level1", img: "backrooms_wet.jpg",
    desc: "欸那里放了个矿泉水瓶|要不要去拿呢",
    buttons: [
      { text: "去拿", target: "level1_grab" },
      { text: "不去", target: "level1_no_grab" },
    ]
  },
  level1_grab: {
    id: "level1_grab", name: "后室level1", img: "backrooms_wet.jpg",
    desc: "咕咕咕....终于有水喝了|感觉清醒一点了",
    getItem: "almond_water",
    autoNext: "level1_continue",
    buttons: []
  },
  level1_no_grab: {
    id: "level1_no_grab", name: "后室level1", img: "backrooms_wet.jpg",
    desc: "好渴.....我还是去拿杏仁水吧....|咕咕咕....终于有水喝了|感觉清醒一点了",
    getItem: "almond_water",
    autoNext: "level1_continue",
    buttons: []
  },
  level1_continue: {
    id: "level1_continue", name: "后室level1", img: "backrooms_wet.jpg",
    desc: "欸.....听到了脚步|远方好像有人影|听说level1有很多人类居住的...|看来我要和幸存者会合了！我有救了",
    flickerEffect: true,
    autoNext: "level1_entity",
    buttons: []
  },
  level1_entity: {
    id: "level1_entity", name: "后室level1", img: "backrooms_entity.jpg",
    desc: "这....好像不是人。。",
    unlockAch: "skin_stealer",
    fadeEffect: true,
    autoJump: "gate",
    buttons: []
  },
  backrooms_death: {
    id: "backrooms_death", name: "后室level0", img: "backrooms_death.jpg",
    desc: "好困.......眼皮好沉....|要睡着了........好饿.........|.........|唔呃........渴........|oa.pdj....f.nj..o....weon..",
    unlockAch: "starved_to_death",
    shake: true,
    autoJump: "gate",
    buttons: []
  },
  // ----- 小树林路线（校门口触发） -----
  path_to_grove: {
    id: "path_to_grove", name: "去小树林的路上", img: "path_to_grove.jpg",
    desc: "（走路ing......)|前面还有垃圾桶欸，要不要去看看.....",
    buttons: [
      { text: "去看看垃圾桶", target: "trash_can" },
      { text: "不去，继续走", target: "path_to_grove_2" },
    ]
  },
  path_to_grove_2: {
    id: "path_to_grove_2", name: "去小树林的路上", img: "path_to_grove.jpg",
    desc: "走路.ing",
    autoNext: "grove_arrive",
    buttons: []
  },
  grove_arrive: {
    id: "grove_arrive", name: "去小树林的路上", img: "grove_arrive.jpg",
    desc: "就是这里..........",
    autoNext: "grove_encounter",
    buttons: []
  },
  grove_encounter: {
    id: "grove_encounter", name: "沙漠溜达猪栖息之地", img: "grove_encounter.jpg",
    desc: "居然是沙漠溜达猪！！！！|这可是非常稀有的神兽！！！！",
    unlockAch: "desert_pig_sight",
    shakeHard: true,
    autoNext: "grove_capture_check",
    buttons: []
  },
  grove_captured: {
    id: "grove_captured", name: "沙漠溜达猪栖息之地", img: "grove_captured.jpg",
    desc: "终于抓住稀有溜达猪了........",
    unlockAch: "capture_pig",
    getItem: "desert_pig",
    buttons: [
      { text: "继续往前吧", target: "running_ground" },
      { text: "返回校门口", target: "gate" },
    ]
  },
  trash_can: {
    id: "trash_can", name: "垃圾桶", img: "trash_can.jpg",
    desc: "好臭啊......|为什么我要过来看垃圾桶",
    buttons: [
      { text: "不管了，垃圾桶里可能有好吃的，掀开看看", target: "trash_dig" },
      { text: "直接离开", target: "path_to_grove_2" },
      { text: "转头前往地下室", target: "sandbag" },
    ]
  },
  trash_dig: {
    id: "trash_dig", name: "翻垃圾桶", img: "trash_dig.jpg",
    desc: "好臭啊......|欸....那里还有个袋子....|不管了先带上吧[获得物品袋子]可用于捕捉神兽",
    unlockAch: "heavy_taste",
    getItem: "bag",
    autoJump: "path_to_grove_2",
    buttons: []
  },
  sandbag: {
    id: "sandbag", name: "沙包", img: "sandbag.jpg",
    desc: "欸.....这里有沙包......|记得之前经常站在这上面看教室里的人|（爬上沙包）",
    autoNext: "sandbag_peek",
    buttons: []
  },
  sandbag_peek: {
    id: "sandbag_peek", name: "偷窥中", img: "sandbag_peek.jpg",
    desc: "根本看不清呢......|里面似乎早就已经改成会议室了|本来还想进去看看的.........",
    autoNext: "basement_door",
    buttons: []
  },
  basement_door: {
    id: "basement_door", name: "地下室门口", img: "basement_door.jpg",
    desc: "这就是地下室了吗.....",
    buttons: [
      { text: "不走下去", target: "basement_door_no" },
      { text: "走下去", target: "basement_slip" },
    ]
  },
  basement_slip: {
    id: "basement_slip", name: "要滑倒了", img: "basement_slip.jpg",
    desc: "欸欸欸？！！",
    shakeHard: true,
    autoJump: "basement_fall",
    buttons: []
  },
  basement_fall: {
    id: "basement_fall", name: "地下室", img: "basement_fall.jpg",
    desc: "啊！！！！！|这里怎么有个水坑啊....|呜.........|好疼......",
    unlockAch: "flat_fall",
    impactEffect: true,
    autoJump: "basement",
    buttons: []
  },
  basement: {
    id: "basement", name: "地下室", img: "basement.jpg",
    desc: "要不要下去呢",
    buttons: [
      { text: "下去", target: "basement_inside" },
      { text: "不下去", target: "basement_no" },
    ]
  },
  basement_inside: {
    id: "basement_inside", name: "地下室内", img: "basement_inside.jpg",
    desc: "这里还放着一个红绿灯呢.........",
    autoNext: "basement_wires",
    buttons: []
  },
  basement_wires: {
    id: "basement_wires", name: "地下室内", img: "basement_wires.jpg",
    desc: "里面还有电线......",
    buttons: [
      { text: "拿电线", target: "basement_wires_yes" },
      { text: "不拿", target: "basement_bikes" },
    ]
  },
  basement_wires_yes: {
    id: "basement_wires_yes", name: "地下室内", img: "basement_wires.jpg",
    desc: "获得了电线！",
    getItem: "wire",
    autoNext: "basement_bikes",
    buttons: []
  },
  basement_bikes: {
    id: "basement_bikes", name: "地下室内", img: "basement_bikes.jpg",
    desc: "好多自行车啊......|看来这个学校里还有人在上课|真羡慕他们啊......还能待在文海|现在还在上课的是第几届呢，记不清",
    autoNext: "basement_skylight",
    buttons: []
  },
  basement_skylight: {
    id: "basement_skylight", name: "地下室内", img: "basement_skylight.jpg",
    desc: "这里是天窗啊|（天光穿过蒙尘的玻璃，墙面上流淌着岁月洇染的斑驳痕迹。）|这个塑料瓶在这里待了好久了.....|他不会累吗？|不管了继续走吧",
    buttons: [
      { text: "继续往前走", target: "basement_furniture" },
      { text: "上楼", target: "basement_upstairs" },
    ]
  },
  basement_furniture: {
    id: "basement_furniture", name: "地下室内", img: "basement_furniture.jpg",
    desc: "为什么地下车库会有家具啊|看起来像有人住在这里一样|有点诡异........",
    buttons: [
      { text: "赶紧离开", target: "basement_stairs" },
      { text: "驻足再看一会", target: "furniture_strange_door" },
    ]
  },
  furniture_strange_door: {
    id: "furniture_strange_door", name: "地下室内", img: "strange_door.jpg",
    desc: "欸.....怎么闪出了一个门.......|要不要走进去呢......",
    buttons: [
      { text: "走进去", target: "furniture_enter_door" },
      { text: "不走进去", target: "furniture_sucked_in" },
    ]
  },
  furniture_enter_door: {
    id: "furniture_enter_door", name: "地下室内", img: "strange_door.jpg",
    desc: "（走路ing）",
    autoNext: "strange_place_1",
    buttons: []
  },
  furniture_sucked_in: {
    id: "furniture_sucked_in", name: "地下室内", img: "strange_door.jpg",
    desc: "欸.....不受控制的开始往那里移动了|要......要被吸进去了......",
    shake: true,
    autoJump: "strange_place_1",
    buttons: []
  },
  strange_place_1: {
    id: "strange_place_1", name: "奇怪的地方", img: "strange_place_1.jpg",
    desc: "这里.....是哪里......|我不是在文海吗......|我.....我要回去.....我要回去（转头）",
    unlockAch: "strange_place",
    silentAch: true,
    autoNext: "strange_place_2",
    buttons: []
  },
  strange_place_2: {
    id: "strange_place_2", name: "奇怪的地方", img: "strange_place_2.jpg",
    desc: "门....怎么消失了....",
    autoNext: "strange_place_3",
    buttons: []
  },
  strange_place_3: {
    id: "strange_place_3", name: "奇怪的地方", img: "strange_place_1.jpg",
    desc: "好吧....只能往前走了吗......|空气里似乎有些熏香|继续往前走走吧",
    autoNext: "strange_place_4",
    buttons: []
  },
  strange_place_4: {
    id: "strange_place_4", name: "奇怪的地方", img: "strange_place_4.jpg",
    desc: "好像之前来过这里......|这里真好，不用像上面那样孤单.....|(走路ing)",
    autoNext: "strange_place_5",
    buttons: []
  },
  strange_place_5: {
    id: "strange_place_5", name: "奇怪的地方", img: "strange_place_5.jpg",
    desc: "前面....还有好远才到.....|马上就不用孤单了....马上就可以获得永远的陪伴了|我要去...我要去那里...",
    autoNext: "strange_place_5_fx",
    buttons: []
  },
  furniture_return: {
    id: "furniture_return", name: "地下室内", img: "basement_furniture.jpg",
    desc: "回来了吗|刚才我怎么了|好像有点晕",
    autoNext: "basement_stairs",
    buttons: []
  },
  basement_stairs: {
    id: "basement_stairs", name: "爬楼梯", img: "basement_stairs.jpg",
    desc: "（爬楼梯ing)",
    autoNext: "running_ground",
    buttons: []
  },
  running_ground: {
    id: "running_ground", name: "七年级跑操之地", img: "running_ground.jpg",
    desc: "（这里是以前跑操的地方）|一个人也没有还是有些不习惯呢.....|算了不管了走吧",
    unlockAch: "past_running_ground",
    buttons: [
      { text: "继续往前走吧", target: "runway_1" },
      { text: "回到校门口", target: "gate" },
    ]
  },
  runway_1: {
    id: "runway_1", name: "靠小学一侧跑道", img: "321e29299155bdb97093546ac769fcc3.jpg",
    desc: "沿着这里走吧.....|(走路ing)",
    autoNext: "runway_2",
    buttons: []
  },
  runway_2: {
    id: "runway_2", name: "靠小学一侧跑道", img: "ea8480d0e94939893762ee580bfe390a.jpg",
    desc: "（走路ing)",
    autoNext: "runway_3",
    buttons: []
  },
  runway_3: {
    id: "runway_3", name: "靠小学一侧跑道", img: "c7414d2245aac8cc73bd11929b365f18.jpg",
    desc: "这里有个草丛欸.....|要不要检查一下",
    buttons: [
      { text: "检查一下", target: "runway_found" },
      { text: "不检查了", target: "lab_floor" },
    ]
  },
  runway_found: {
    id: "runway_found", name: "靠小学一侧跑道", img: "79486ed3a532d209183ee37ea3b1bd38.jpg",
    desc: "我去有个寻龙尺！[获得道具寻龙尺]",
    getItem: "dowsing_rod",
    buttons: [
      { text: "去实验楼", target: "lab_floor" },
    ]
  },
  basement_upstairs: {
    id: "basement_upstairs", name: "爬楼梯", img: "basement_stairs.jpg",
    desc: "上楼ing",
    autoNext: "basement_window",
    buttons: []
  },
  basement_window: {
    id: "basement_window", name: "地下室", img: "basement_window.jpg",
    desc: "一直不太明白为什么要在这里开一个窗户|在这里看外面就像是下水道里的老鼠窥探别人的青春美好生活|这家伙在说什么呢，不要装作很忧郁的样子啊不管了反正也和现实差不多吧|(怎么和自己吵起来了啊喂)",
    buttons: [
      { text: "继续往上走", target: "basement_top" },
    ]
  },
  basement_top: {
    id: "basement_top", name: "地下室", img: "basement_top.jpg",
    desc: "上来了.......",
    buttons: [
      { text: "往前走去前面的教学楼", popup: "前面的区域以后再来探索吧！" },
      { text: "往左走去孔子像", target: "confucius_1" },
    ]
  },
  confucius_1: {
    id: "confucius_1", name: "孔子像", img: "confucius_1.jpg",
    desc: "居然是孔子像吗，好尊敬啊......",
    unlockAch: "confucius_bless",
    autoNext: "confucius_2",
    buttons: []
  },
  confucius_2: {
    id: "confucius_2", name: "孔子像", img: "confucius_2.jpg",
    desc: "我正在向你靠近呢，孔子|居然一点都不后退吗，真是胆大呢",
    autoNext: "confucius_3",
    buttons: []
  },
  confucius_3: {
    id: "confucius_3", name: "孔子像", img: "confucius_3.jpg",
    desc: "听说孔子像下面有很多祭品.......|有点想吃......",
    autoNext: "confucius_4",
    buttons: []
  },
  confucius_4: {
    id: "confucius_4", name: "孔子像", img: "confucius_4.jpg",
    desc: "什......什么！！祭品怎么都没了！！|不.....不要啊！！！！我好饿！！！好饿啊！！！！！",
    shakeHard: true,
    autoNext: "confucius_5",
    buttons: []
  },
  confucius_5: {
    id: "confucius_5", name: "孔子像", img: "confucius_grass.jpg",
    desc: "不管了有啥吃啥吧|我要吃草！！！！！|我要吃草！！！！！",
    autoNext: "confucius_difficulty",
    buttons: []
  },
  confucius_difficulty: {
    id: "confucius_difficulty", name: "孔子像", img: "confucius_grass.jpg",
    desc: "选择吃草难度",
    buttons: [
      { text: "普通（4×4棋盘，2个毒草）", action: "confucius_game", setDifficulty: "normal" },
      { text: "困难（5×5棋盘，3个毒草）", action: "confucius_game", setDifficulty: "hard" },
    ]
  },
  confucius_win: {
    id: "confucius_win", name: "孔子像", img: "confucius_grass.jpg",
    desc: "真好吃啊！！！哈哈哈哈哈哈我吃饱啦！！！",
    unlockAch: "little_greedy_cat",
    autoJump: "gate",
    buttons: []
  },
  confucius_lose: {
    id: "confucius_lose", name: "孔子像", img: "confucius_grass.jpg",
    desc: "呃.....好晕|好像.....吃到毒草了....|这草里，有毒啊！！！！",
    unlockAch: "eat_to_death",
    autoJump: "gate",
    buttons: []
  },
  // 实验楼
  lab_floor: {
    id: "lab_floor", name: "实验楼", img: "lab_building.jpg",
    desc: "去哪楼呢",
    buttons: [
      { text: "1F", target: "lab_1f" },
      { text: "2F", target: "lab_2f" },
      { text: "3F", popup: "前面的区域以后再去探索吧！" },
      { text: "4F", popup: "前面的区域以后再去探索吧！" },
      { text: "5F", popup: "前面的区域以后再去探索吧！" },
      { text: "6F", popup: "前面的区域以后再去探索吧！" },
      { text: "回到校门口", target: "gate" },
    ]
  },
  lab_1f: {
    id: "lab_1f", name: "实验楼一楼", img: "lab_1f.jpg",
    desc: "进实验楼一楼了.....|这里似乎没有留下太多的回忆|我并不知道这里能干什么|要不往前走走",
    unlockAch: "lab_1f",
    buttons: [
      { text: "化学实验室", target: "chem_lab_1" },
      { text: "图书馆", target: "lab_library_door" },
    ]
  },
  lab_2f: {
    id: "lab_2f", name: "实验楼二楼", img: "6ab37b0a449e58316f2d983dc8bf696d.jpg",
    desc: "",
    buttons: []
  },
  // 化学实验室
  chem_lab_1: {
    id: "chem_lab_1", name: "化学实验室", img: "chem_lab_1.jpg",
    desc: "进来了...化学实验室|（门锁住了进不去,只能找网图了）|ayaaya....没有老师呢...|看来我可以做一些奇怪的化学实验了（坏笑）",
    unlockAch: "chem_lab_enter",
    autoNext: "chem_lab_2",
    buttons: []
  },
  chem_lab_2: {
    id: "chem_lab_2", name: "化学实验室", img: "chem_lab_2.jpg",
    desc: "大脚鸡：何人在此喧嚣|什....什么....居然是珍惜神兽大脚鸡|大脚鸡：我已经听到了，你要做一些奇怪的实验，我要阻止你！！！",
    autoNext: "chem_lab_capture",
    buttons: []
  },
  chem_lab_capture: {
    id: "chem_lab_capture", name: "化学实验室", img: "chem_lab_2.jpg",
    desc: "不行，我要捕捉你",
    buttons: function() {
      var btns = [];
      if (hasItem("bag")) {
        btns.push({ text: "用袋子捕捉大脚鸡", action: "chem_capture_fail" });
      }
      btns.push({ text: "继续", action: "chem_lab_difficulty" });
      return btns;
    }
  },
  chem_capture_fail: {
    id: "chem_capture_fail", name: "化学实验室", img: "chem_lab_2.jpg",
    desc: "捕捉失败！大脚鸡挣脱了袋子！",
    autoNext: "chem_lab_difficulty",
    buttons: []
  },
  // 难度选择
  chem_lab_difficulty: {
    id: "chem_lab_difficulty", name: "化学实验室", img: "chem_lab_2.jpg",
    desc: "选择挑战难度",
    buttons: [
      { text: "简单（大脚鸡4点血）", action: "chem_lab_battle_intro", setDifficulty: "easy" },
      { text: "普通（大脚鸡6点血）", action: "chem_lab_battle_intro", setDifficulty: "normal" },
      { text: "困难（大脚鸡15点血）", action: "chem_lab_battle_intro", setDifficulty: "hard" },
      { text: "噩梦（大脚鸡25点血，每回合两张牌）", action: "chem_lab_battle_intro", setDifficulty: "nightmare" },
    ]
  },
  chem_lab_battle_intro: {
    id: "chem_lab_battle_intro", name: "化学实验室", img: "chem_lab_2.jpg",
    desc: "大脚鸡：切....就算有袋子，也捕捉不到我的|可恶啊...只能战斗了吗...|大脚鸡：我不会放任你乱做实验的，我要保护这一切！！！|要上了！！[开始震动]|大脚鸡：要上了！！！[开始震动]",
    buttons: [],
  },
  chem_lab_battle: {
    id: "chem_lab_battle", name: "化学实验决斗", img: "chem_lab_2.jpg",
    desc: "",
    buttons: [],
  },
  // 决斗胜利
  chem_lab_win: {
    id: "chem_lab_win", name: "化学实验室", img: "chem_lab_end.jpg",
    desc: "",
    buttons: [],
  },
  // 决斗失败
  chem_lab_lose: {
    id: "chem_lab_lose", name: "化学实验室", img: "chem_lab_end.jpg",
    desc: "大脚鸡：你这家伙，技艺不精还敢来挑战我|大脚鸡：真是废物呢.....|可，可恶啊|（被大脚鸡扔出了实验室）",
    unlockAch: "lost_to_bigfoot",
    autoJump: "lab_1f",
    buttons: [],
  },
  lab_library_door: {
    id: "lab_library_door", name: "图书馆门口", img: "lab_library_door.jpg",
    desc: "被锁上了啊....|还是回到实验楼楼梯间吧",
    unlockAch: "library_fail",
    autoJump: "lab_floor",
    buttons: []
  },
  // 文海少年科技院
  tech_academy_1: {
    id: "tech_academy_1", name: "文海少年科技院", img: "tech_academy_1.jpg",
    desc: "欸......装修怎么这么豪华.....|进去看看吧",
    autoNext: "tech_academy_2",
    buttons: []
  },
  tech_academy_2: {
    id: "tech_academy_2", name: "文海少年科技院", img: "tech_academy_2.jpg",
    desc: "好大好宽敞|不过这里是干什么用的....",
    buttons: [
      { text: "返回校门口", popup: "这里什么都没有哦", popupThen: "gate" },
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
  toiletStayCount: 0,        // 厕所蹲坑次数
  confuciusDifficulty: "normal", // 孔子像吃草难度：normal/hard
  chemDifficulty: "normal",  // 化学决斗难度：easy/normal/hard/nightmare
  hachiDifficulty: "normal", // 哈基高决斗难度：normal/hard
  lastDuelEnemyHP: 0,        // 上一场决斗大脚鸡剩余血量
  lastDuelNightmare: false,  // 上一场决斗是否为噩梦模式
};

// 御前决斗战斗状态
var battleState = {
  playerKi: 0,      // 玩家气
  hachiKi: 0,       // 哈基高气
  hachiHP: 0,       // 哈基高血量（困难模式2点）
  inBattle: false,  // 是否在战斗中
};

// 检查是否有某道具
function hasItem(itemId) { return gameState.inventory.indexOf(itemId) !== -1; }

// 检查是否解锁某成就
function hasAchievement(achId) { return gameState.achievements.indexOf(achId) !== -1; }

// ===== 更新日志配置 =====
var CHANGELOG = [
  { version: "v1.5.76.78", date: "2026-08-16", items: [
    "实验楼二楼开放：进入心理教室往里看→遇见企鹅狗→沙盘对决",
    "新增沙盘对决游戏：3×4棋盘回合制对战，含铺设/精摆/防御/神秘药剂行动",
    "沙盘对决新增困难模式：4×4棋盘，企鹅狗开局2格，17分获胜",
    "困难模式击败企鹅狗可获得成就'击败困难企鹅狗'",
    "企鹅狗AI优化：随机选择行动，接壤时优先夺取玩家地块，无接壤不防御",
    "修复企鹅狗空过回合bug，精摆概率提升",
    "铺设目标格子改为点击沙盘上的格子选择",
    "沙盘行动按钮改为3个并排显示",
    "地下室摔倒、红室、后室饥渴而死新增闪回剧情及图片切换",
    "噩梦大脚鸡血量调整为25，困难大脚鸡为15，HP显示改为心形+数字格式",
    "噩梦模式玩家血量改为7，清水冲洗/降温冷凝管回复上限为7",
    "硫酸易伤debuff持续整局，文案改为'每次受伤+1'",
    "修复化学决斗战斗时概率跳到实验室一楼的bug",
    "传送门新增搜索功能，改名为'梦境裂隙'",
    "校门口新增'我要去看看地下室'选项直达沙包场景",
    "哈基高对战前新增难度选择及成就'哈气之皇'",
  ]},
  { version: "v1.5.76.58", date: "2026-08-15", items: [
    "玩家血量从5点提升至6点",
    "违反实验规章改为仅取消对方卡牌效果（己方卡牌不受影响）",
    "电线鞭挞和寻龙尺不受违反实验规章影响",
    "七年级跑操之地新增跑道探索路线：靠小学一侧跑道→草丛→寻龙尺道具",
    "新增道具：寻龙尺（化学决斗中50%造成1点伤害/50%减少1点伤害）",
    "化学决斗新增4张卡牌：违反实验规章、高温坩埚钳、降温冷凝管、我告老师了",
    "噩梦模式被大脚鸡击败后根据剩余血量显示不同对话和图片",
    "孔子像吃草小游戏新增难度选择：普通（4×4/2毒草）、困难（5×5/3毒草）",
    "新增成就：吃草之王（困难模式通关）",
  ]},
  { version: "v1.5.76.33", date: "2026-08-15", items: [
    "化学决斗新增难度选择：简单/普通/困难（4/6/10血）",
    "新增成就：简单大脚鸡击败、化学之王",
    "不同难度击败大脚鸡获得不同成就",
    "八年级跑操之地改名为七年级跑操之地",
    "修复护目镜/盾牌在伤害结算后生效的bug，重构伤害结算流程为四步流水线",
    "修复电线鞭挞双重计数bug",
    "修复胜利图片不显示bug",
  ]},
  { version: "v1.5.76.2", date: "2026-08-15", items: [
    "化学实验室开放：大脚鸡登场 + 化学决斗卡牌系统",
    "新增8张化学卡牌：注水入浓硫酸、串联酒精灯、手持试管加热、护目镜、清水冲洗、防爆盾牌、投掷烧杯、释放二氧化碳",
    "新增电线鞭挞技能（拥有电线时每回合额外+1伤害）",
    "新增决斗胜利/失败路线：震动+黑屏特效、获得神秘药剂/被扔出实验室",
    "新增成就：进入化学实验室、战胜大脚鸡、丢人现眼",
    "新增道具：神秘药剂",
    "修复护目镜减伤逻辑反转bug",
    "修复 buttons 函数类型检查、SCENES 变量名错误、triggerShake 未定义等bug",
  ]},
  { version: "v1.5.76.1", date: "2026-08-15", items: [
    "实验楼一楼开放：化学实验室（待开发）、图书馆（锁门）",
    "新增场景：实验楼一楼、图书馆门口",
    "新增成就：实验楼一楼、拜读未果",
  ]},
  { version: "v1.5.76", date: "2026-08-15", items: [
    "校门口新增实验楼选项：选择楼层1F-6F（待开发）",
    "校门口新增文海少年科技院（行政楼）路线",
    "新增场景：实验楼楼层选择、文海少年科技院×2",
    "新增通用能力：弹窗关闭后自动跳转目标场景（popupThen）",
  ]},
  { version: "v1.5.45", date: "2026-08-15", items: [
    "家具城新增驻足分支：奇怪的门闪现，探索奇怪的地方",
    "新增场景：奇怪的门、奇怪的地方×5",
    "新增成就：到了奇怪的地方（静默解锁）、长眠于此",
    "新增特效链：文案结束后触发震动→跌倒撞击→黑屏→成就弹窗",
    "修复奇怪的地方终幕特效提前触发、图片未正确显示的问题",
  ]},
  { version: "v1.5.4", date: "2026-08-14", items: [
    "扩展地下室剧情线：地下室内探索、电线收集、自行车群、天窗、家具区、爬楼梯、跑操之地",
    "新增上楼路线：窗户窥探、教学楼与孔子像分支",
    "新增场景：地下室内、电线、自行车、天窗、家具区、爬楼梯、跑操之地、窗户、顶部出口",
    "新增成就：过去跑操的地方",
    "新增道具：电线",
    "沙漠溜达猪捕捉后「继续往前吧」衔接至七年级跑操之地",
  ]},
  { version: "v1.5.3", date: "2026-08-14", items: [
    "扩展后室剧情线：新增往左/往右选择，往右切入level1",
    "新增场景：后室选择、后室右转、后室level1、水坑、杏仁水、窃皮者",
    "新增成就：level1、不讲卫生、偶遇窃皮者",
    "新增道具：杏仁水",
    "新增屏幕闪烁特效：level1中遇窃皮者前屏幕闪烁动画",
  ]},
  { version: "v1.5.27", date: "2026-08-14", items: [
    "新增孔子像路线：校门口拜访孔子像，触发吃草小游戏",
    "新增场景：孔子像×5、吃草小游戏胜利/失败",
    "新增成就：儒学滋养、小馋猫、吃死了",
    "新增吃草小游戏：4×4扫雷玩法，2棵毒草，吃完所有小草获胜",
    "新增外太空外星人剧情线：石头剪刀布决斗",
    "新增场景：外星人登场、外星人挑衅、石头剪刀布、胜利/失败",
    "新增成就：老美的nasa这么厉害、击败外星人、被拉shi了",
    "新增石头剪刀布小游戏：三选一，平局可重试，胜负自动跳转",
  ]},
  { version: "v1.5.10", date: "2026-08-14", items: [
    "新增沙漠溜达猪神兽遭遇剧情：小树林深处触发",
    "新增场景：小树林深处、沙漠溜达猪栖息之地",
    "新增成就：目睹沙漠溜达猪、捕捉神兽溜达猪",
    "新增道具：溜达猪",
    "新增捕捉神兽小游戏：进度条 + 点击10次捕捉溜达猪",
  ]},
  { version: "v1.5.0", date: "2026-08-14", items: [
    "开放小树林路线：校门口新增小树林入口",
    "新增垃圾桶探索路线：翻垃圾桶获得袋子",
    "新增地下室路线：沙包→偷窥→地下室→滑倒撞击",
    "新增场景：去小树林的路上、垃圾桶、翻垃圾桶、沙包、偷窥中、地下室门口、要滑倒了、地下室",
    "新增成就：重口味、平地摔",
    "新增道具：袋子",
    "新增撞击特效：闪白 + 震动 + 音效",
  ]},
  { version: "v1.14.137", date: "2026-08-14", items: [
    "新增后室剧情线：厕所蹲坑两次触发，进入后室level0",
    "新增场景：厕所深处、后室level0、后室探索、红室、饥渴而死",
    "新增成就：卡进后室了、误入红室、饥渴而死",
    "新增黑幕过渡效果：后室探索中屏幕缓慢变黑再变回",
    "修复图片切换稳定性：取消旧场景自动跳转定时器，防止覆盖新场景",
    "修复图片切换稳定性：先清空再设置新图，确保旧图不残留",
  ]},
  { version: "v1.4.13.1", date: "2026-08-13", items: [
    "图片加载深度优化：link preload 预加载头 + decode 解码 + rAF 切换 + CSS 硬件加速",
    "图片切换零延迟：智能同图闪切，异图直接切换，消除 setTimeout 10ms 延迟",
    "图片标签添加 loading=eager + decoding=sync 属性",
    "图片区域添加 will-change 硬件加速 + opacity 淡入过渡",
  ]},
  { version: "v1.4.13", date: "2026-08-13", items: [
    "校门口飞行按钮升级：拥有哈气秘籍后可飞往外太空",
    "新增场景：外太空",
    "新增成就：我要飞得更高",
    "新增道具：哈基高的哈气秘籍（击败哈基高获得）",
    "修复击败哈基高后无法获得道具的bug",
  ]},
  { version: "v1.3.91.flash", date: "2026-08-13", items: [
    "图片预加载优化：页面加载时自动缓存所有场景图片，切换场景秒加载",
    "标题更名为「文海gala」",
    "游玩提示更新内容",
    "厕所场景新增「再蹲一会」选项",
    "新增成就：喜欢蹲坑",
  ]},
  { version: "v1.3.78.1", date: "2026-08-13", items: [
    "新增成就：你真闲啊（集齐所有成就后解锁）",
  ]},
  { version: "v1.3.78.05", date: "2026-08-13", items: [
    "新增成就：哈气大师传说",
    "删除梦境裂隙中未使用的场景（教学楼/图书馆/操场/食堂/实验室/花园/礼堂/行政楼/体育馆）",
  ]},
  { version: "v1.3.78", date: "2026-08-13", items: [
    "新增梦境裂隙功能（左上角按钮，按标题分组跳转任意场景）",
    "新增游玩提示（开始页面「游玩提示」按钮）",
    "新增成就：疑似杭二新生",
    "新增胜利结局完整剧情线（哈基高崩溃 → 获得斗笠 → 回校门口）",
    "新增失败结局完整剧情线（投降路线 + 拒绝路线）",
    "新增成就：再来一次的勇气",
    "哈基高战斗新增台词（防下了！/天翔哈闪！/哈之呼吸法！）",
    "新增道具：哈基高的斗笠",
    "修复哈基高没气时AI不会呼吸的问题",
  ]},
  { version: "v1.3.0", date: "2026-08-13", items: [
    "首次发布文海gala",
    "新增开场剧情（nia~头好晕 → 文海学校 → 校门口）",
    "新增校门口场景及分支选择（教学楼/小树林/十字路口）",
    "新增隐士之地（哈基高大师）完整剧情线",
    "新增打字机字幕效果，支持 | 分段，逐句替换显示",
    "新增屏幕震动特效（普通/剧烈）",
    "新增抬头看天剧情线（校门口 → 猪猪拉屎之地 → 厕所 → 喝大了）",
    "新增神秘猪猪拉屎之地场景（三连猪猪 + 剧烈震动）",
    "新增厕所场景及窗外回忆剧情",
    "新增喝大了场景（杭二学生剧情）",
    "新增成就：飞天之猪",
    "新增场景触发成就弹窗功能",
    "新增更新日志功能",
    "新增版本号显示",
    "新增御前决斗系统（回合制战斗：哈气/格挡/呼吸）",
    "新增御前决斗对话剧情线（7个场景）",
    "新增战斗HUD显示（气量实时显示）",
    "新增成就：哈气之王、你还不够强！",
    "隐士之地新增「发起御前决斗」选项",
    "修复图片切换不稳定的缓存问题",
    "字幕改为逐句替换显示，不再叠加",
  ]}
];

// 添加道具（支持逗号分隔多个）
function addItems(itemStr) {
  if (!itemStr) return;
  var items = itemStr.split(",");
  for (var i = 0; i < items.length; i++) {
    addItem(items[i].trim());
  }
}

// 添加道具
function addItem(itemId) {
  if (!hasItem(itemId)) {
    gameState.inventory.push(itemId);
    var item = ITEM_CONFIG[itemId];
    showToast("获得道具：" + item.name);
    updateBackpackBadge();
  }
}

// 解锁成就
function unlockAchievement(achId) {
  if (!hasAchievement(achId)) {
    gameState.achievements.push(achId);
    gameState.newAchievements.push(achId);
    var ach = ACHIEVEMENT_CONFIG[achId];
    if (!ach) return;
    showToast("成就解锁：" + ach.name);
    updateAchievementBadge();
    // 检查是否集齐所有成就（排除"你真闲啊"自身）
    if (achId !== "so_free") checkAllAchievements();
  }
}

// 检查是否集齐所有成就
function checkAllAchievements() {
  var allAchIds = Object.keys(ACHIEVEMENT_CONFIG);
  for (var i = 0; i < allAchIds.length; i++) {
    if (allAchIds[i] === "so_free") continue;
    if (!hasAchievement(allAchIds[i])) return;
  }
  unlockAchievement("so_free");
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
var pendingAutoJumpTimer = null;  // 自动跳转定时器（可取消，防止旧场景覆盖新场景）
var pendingImageRAF = null;       // 图片切换 rAF（可取消，防止旧场景 rAF 覆盖新图片）
var currentSentences = [];
var currentSentenceIndex = 0;
var currentCharIndex = 0;
var typewriterDone = false;
var showButtonsAfter = false;  // 是否在打完当前句后显示按钮


// 渲染当前场景
function renderScene(sceneId) {
  // 厕所蹲坑计数：第二次点击进入后室剧情
  if (sceneId === "toilet_stay_check") {
    gameState.toiletStayCount++;
    if (gameState.toiletStayCount >= 2) {
      renderScene("toilet_deep");
    } else {
      showEventModal("toilet_stay");
      unlockAchievement("toilet_lover");
      var achCfg = ACHIEVEMENT_CONFIG["toilet_lover"];
      if (achCfg) {
        showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
      }
      renderScene("toilet");
    }
    return;
  }

  // 地下室不走下去 → 返回小树林
  if (sceneId === "basement_door_no") {
    var descArea = document.getElementById("description-area");
    descArea.innerHTML = "我还是去看看小树林吧......";
    setTimeout(function() { renderScene("path_to_grove_2"); }, 1200);
    return;
  }
  if (sceneId === "basement_no") {
    var descArea = document.getElementById("description-area");
    descArea.innerHTML = "我还是去看看小树林吧.........";
    setTimeout(function() { renderScene("path_to_grove_2"); }, 1200);
    return;
  }

  // 溜达猪捕捉检查：有袋子 → 捕捉小游戏，无袋子 → 返回垃圾桶
  if (sceneId === "grove_capture_check") {
    if (hasItem("bag")) {
      renderCaptureGame();
    } else {
      var descArea = document.getElementById("description-area");
      descArea.innerHTML = "可恶啊我没有袋子....我没法捕捉这么稀有的神兽<br>我得回垃圾桶那里找找。";
      var actionsArea = document.getElementById("actions-area");
      actionsArea.innerHTML = "";
      actionsArea.style.display = "flex";
      var btn = document.createElement("button");
      btn.className = "action-btn";
      btn.textContent = "返回垃圾桶";
      btn.onclick = function() { renderScene("trash_can"); };
      actionsArea.appendChild(btn);
    }
    return;
  }

  // 溜达猪捕捉完成 → 提示并传送回校门口
  if (sceneId === "grove_end") {
    showPopupModal("前面的区域以后再来探索吧");
    setTimeout(function() {
      openPortal();
    }, 1500);
    return;
  }

  // 吃草小游戏
  if (sceneId === "confucius_game") {
    renderGrassGame();
    return;
  }

  // 石头剪刀布小游戏
  if (sceneId === "alien_game") {
    renderRPSGame();
    return;
  }

  // 化学决斗介绍
  if (sceneId === "chem_lab_battle_intro") {
    stopTypewriter();
    if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
    var scene = SCENE_CONFIG["chem_lab_battle_intro"];
    // 渲染场景画面
    var img = document.getElementById("scene-img");
    img.src = scene.img;
    document.getElementById("location-name").textContent = scene.name;
    document.getElementById("description-area").innerHTML = "";
    document.getElementById("actions-area").style.display = "none";
    var gc = document.getElementById("game-container");
    gc.classList.add("shake");
    setTimeout(function() { gc.classList.remove("shake"); }, 500);
    // 推荐道具提示弹窗
    showPopupModal("💡 <b>提示</b><br><br>推荐玩家先去<b>地下室</b>收集<b>电线</b>，并在<b>靠小学一侧跑道</b>收集<b>寻龙尺</b>后再进行挑战，会大大降低游戏难度！<br><br><small>（电线可在决斗中鞭挞大脚鸡，寻龙尺有几率造成额外伤害或免伤）</small>");
    setTimeout(function() {
      startTypewriter(scene.desc, scene.autoNext, scene.autoJump, scene.getItem);
    }, 500);
    setTimeout(function() { renderScene("chem_lab_battle"); }, 3000);
    return;
  }
  // 化学决斗
  if (sceneId === "chem_lab_battle") {
    stopTypewriter();
    if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
    startChemDuel();
    return;
  }
  // 化学决斗胜利 → 拆分文案，中间插入震动+黑屏
  if (sceneId === "chem_lab_win") {
    renderChemWinSequence();
    return;
  }
  // 化学决斗失败 → 噩梦模式根据大脚鸡剩余血量显示不同对话
  if (sceneId === "chem_lab_lose") {
    renderChemLoseSequence();
    return;
  }
  // 地下室摔倒 → 闪回插入
  if (sceneId === "basement_fall") {
    renderBasementFallSequence();
    return;
  }
  // 红室 → 闪回插入
  if (sceneId === "backrooms_red") {
    renderRedRoomSequence();
    return;
  }
  // 后室饥渴而死 → 闪回插入
  if (sceneId === "backrooms_death") {
    renderBackroomsDeathSequence();
    return;
  }
  // 实验楼二楼 → 企鹅狗沙盘剧情
  if (sceneId === "lab_2f") {
    renderLab2FSequence();
    return;
  }

  // 飞行路由：检查是否有哈气秘籍
  if (sceneId === "gate_fly") {
    if (hasItem("hachi_book")) {
      renderScene("space");
    } else {
      showPopupModal("你还不够强，击败哈基高拿下哈气秘籍之后再来吧");
      renderScene("gate");
    }
    return;
  }

  // 奇怪的地方终幕特效链（文案结束后触发：震动 → 跌倒 → 黑屏 → 长眠于此）
  if (sceneId === "strange_place_5_fx") {
    var gc = document.getElementById("game-container");
    gc.classList.add("shake");
    setTimeout(function() {
      gc.classList.remove("shake");
      gc.classList.add("impact");
      playImpactSound();
      setTimeout(function() {
        gc.classList.remove("impact");
        unlockAchievement("eternal_sleep");
        var achCfg = ACHIEVEMENT_CONFIG["eternal_sleep"];
        if (achCfg) {
          showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
        }
        triggerFadeEffect(function() {
          renderScene("furniture_return");
        });
      }, 600);
    }, 500);
    return;
  }

  var scene = SCENE_CONFIG[sceneId];
  if (!scene) return;

  // 停止之前的打字机和自动跳转定时器（防止旧场景覆盖新场景）
  stopTypewriter();
  if (pendingAutoJumpTimer) {
    clearTimeout(pendingAutoJumpTimer);
    pendingAutoJumpTimer = null;
  }

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
      // 先同步清空旧图，确保不残留上一场景的图片
      img.src = "";
      // 取消之前未执行的图片切换 rAF，防止旧场景覆盖新图片
      if (pendingImageRAF) {
        cancelAnimationFrame(pendingImageRAF);
        pendingImageRAF = null;
      }
      // 预加载图片到缓存，避免 rAF 回调时图片未就绪导致概率不显示
      (new Image()).src = scene.img;
      // 单帧 rAF 后设置新图片，保证浏览器先完成清空渲染再加载新图
      pendingImageRAF = requestAnimationFrame(function() {
        pendingImageRAF = null;
        img.src = scene.img;
        img.style.display = "block";
        placeholder.style.display = "none";
      });
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
    var buttons = typeof scene.buttons === "function" ? scene.buttons() : scene.buttons;
    buttons.forEach(function(btn) {
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

  // 处理道具获取（无论场景类型，都先添加道具）
  if (scene.getItem) addItems(scene.getItem);

  // 打字机效果显示描述
  startTypewriter(scene.desc, scene.autoNext, scene.autoJump, scene.getItem);

  // 御前决斗战斗场景特殊处理
  if (sceneId === "duel_battle") {
    renderBattle();
    return;
  }

  // 场景解锁成就
  if (scene.unlockAch) {
    unlockAchievement(scene.unlockAch);
    var achCfg = ACHIEVEMENT_CONFIG[scene.unlockAch];
    if (achCfg && !scene.silentAch) {
      showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
    }
  }

  // 黑屏后回归（长眠特效）
  if (scene.fadeAndReturn) {
    var returnTarget = scene.fadeAndReturn;
    setTimeout(function() {
      triggerFadeEffect(function() {
        renderScene(returnTarget);
      });
    }, 1000);
    return;
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
  // 撞击特效（震动 + 闪白 + 音效）
  if (scene.impactEffect) {
    var gc = document.getElementById("game-container");
    gc.classList.add("impact");
    playImpactSound();
    setTimeout(function() { gc.classList.remove("impact"); }, 600);
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

// 黑幕过渡效果：缓慢变黑再变回去
function triggerFadeEffect(callback) {
  var overlay = document.getElementById("fade-overlay");
  overlay.classList.add("active");
  // 变黑后等待1秒再变回去
  setTimeout(function() {
    overlay.classList.remove("active");
    // 变回去后再等1.5秒执行回调
    setTimeout(function() {
      if (callback) callback();
    }, 1500);
  }, 1500);
}

// 撞击音效（Web Audio API 生成）
function playImpactSound() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    // 低频撞击感
    osc.type = "sine";
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.6, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch(e) {}
}

// 屏幕闪烁特效
function triggerFlickerEffect(callback) {
  var container = document.getElementById("game-container");
  container.classList.add("flicker");
  setTimeout(function() {
    container.classList.remove("flicker");
    if (callback) callback();
  }, 1500);
}

// 捕捉神兽小游戏
function renderCaptureGame() {
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var locationName = document.getElementById("location-name");
  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");
  var imageArea = document.getElementById("image-area");

  // 设置图片
  imageArea.style.display = "flex";
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "grove_encounter.jpg";
    img.style.display = "block";
    placeholder.style.display = "none";
  });

  locationName.textContent = "沙漠溜达猪栖息之地";

  // 进度条和提示
  descArea.innerHTML = "<div style=\"text-align:center;margin-bottom:12px;color:#e8d5b7;font-weight:700;\">疯狂点击捕捉按钮抓住溜达猪吧！！！</div>"
    + "<div style=\"background:rgba(255,255,255,0.1);border-radius:8px;height:20px;overflow:hidden;margin:0 20px;\">"
    + "<div id=\"capture-bar\" style=\"background:linear-gradient(90deg,#e8d5b7,#c9a96e);height:100%;width:0%;transition:width 0.1s;\"></div></div>"
    + "<div id=\"capture-count\" style=\"text-align:center;margin-top:8px;color:#c0c8d8;font-size:14px;\">0 / 10</div>";

  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";

  var captureBtn = document.createElement("button");
  captureBtn.className = "action-btn";
  captureBtn.textContent = "点击捕捉！";
  captureBtn.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a24)";
  captureBtn.style.color = "#fff";
  captureBtn.style.fontSize = "20px";
  captureBtn.style.padding = "18px";

  var clickCount = 0;
  captureBtn.onclick = function() {
    clickCount++;
    var bar = document.getElementById("capture-bar");
    var countEl = document.getElementById("capture-count");
    if (bar) bar.style.width = (clickCount * 10) + "%";
    if (countEl) countEl.textContent = clickCount + " / 10";
    if (clickCount >= 10) {
      captureBtn.disabled = true;
      captureBtn.textContent = "捕捉成功！";
      captureBtn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
      setTimeout(function() {
        renderScene("grove_captured");
      }, 800);
    }
  };
  actionsArea.appendChild(captureBtn);
}

// 吃草小游戏（4x4扫雷，2个毒草）
function renderGrassGame() {
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var locationName = document.getElementById("location-name");
  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");
  var imageArea = document.getElementById("image-area");

  // 设置图片
  imageArea.style.display = "flex";
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "confucius_grass.jpg";
    img.style.display = "block";
    placeholder.style.display = "none";
  });

  locationName.textContent = "孔子像";

  // 根据难度生成棋盘：普通=4x4/2毒草，困难=5x5/3毒草
  var isHard = gameState.confuciusDifficulty === "hard";
  var BOARD_SIZE = isHard ? 5 : 4;
  var POISON_COUNT = isHard ? 3 : 2;
  var totalCells = BOARD_SIZE * BOARD_SIZE; // 16
  var safeCount = totalCells - POISON_COUNT; // 14

  // 随机选择毒草位置
  var poisonIndices = [];
  while (poisonIndices.length < POISON_COUNT) {
    var r = Math.floor(Math.random() * totalCells);
    if (poisonIndices.indexOf(r) === -1) poisonIndices.push(r);
  }

  // 计算每个格子周围的毒草数
  function countNeighborPoison(idx) {
    var row = Math.floor(idx / BOARD_SIZE);
    var col = idx % BOARD_SIZE;
    var count = 0;
    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        var nr = row + dr;
        var nc = col + dc;
        if (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE) {
          var nIdx = nr * BOARD_SIZE + nc;
          if (poisonIndices.indexOf(nIdx) !== -1) count++;
        }
      }
    }
    return count;
  }

  var board = [];
  for (var i = 0; i < totalCells; i++) {
    board.push({
      index: i,
      isPoison: poisonIndices.indexOf(i) !== -1,
      neighborCount: poisonIndices.indexOf(i) !== -1 ? -1 : countNeighborPoison(i),
      revealed: false
    });
  }

  var revealedCount = 0;
  var gameOver = false;

  // 渲染游戏UI
  descArea.innerHTML = "";
  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";

  var gameArea = document.createElement("div");
  gameArea.id = "grass-game-area";
  gameArea.innerHTML = "";

  var grid = document.createElement("div");
  grid.id = "grass-grid";
  grid.style.gridTemplateColumns = "repeat(" + BOARD_SIZE + ", 1fr)";
  grid.style.maxWidth = isHard ? "380px" : "320px";

  board.forEach(function(cell) {
    var cellEl = document.createElement("div");
    cellEl.className = "grass-cell";
    cellEl.textContent = "🌿";
    cellEl.setAttribute("data-num", cell.neighborCount >= 0 ? cell.neighborCount : "");

    cellEl.onclick = function() {
      if (gameOver || cell.revealed) return;
      cell.revealed = true;
      cellEl.classList.add("revealed");

      if (cell.isPoison) {
        // 踩到毒草 → 失败
        gameOver = true;
        cellEl.classList.add("poison", "poison-reveal");
        cellEl.textContent = "☠️";
        // 揭示所有毒草
        board.forEach(function(c) {
          if (c.isPoison && c.index !== cell.index) {
            var otherEl = grid.children[c.index];
            otherEl.classList.add("poison", "revealed");
            otherEl.textContent = "☠️";
          }
        });
        setTimeout(function() {
          renderScene("confucius_lose");
        }, 1200);
      } else {
        // 安全草 → 显示数字
        if (cell.neighborCount > 0) {
          cellEl.textContent = cell.neighborCount;
        } else {
          cellEl.textContent = "🌱";
        }
        revealedCount++;
        if (revealedCount >= safeCount) {
          // 吃光所有草 → 胜利
          gameOver = true;
          if (isHard) {
            unlockAchievement("grass_king");
          }
          setTimeout(function() {
            renderScene("confucius_win");
          }, 800);
        }
      }
    };

    grid.appendChild(cellEl);
  });

  gameArea.appendChild(grid);

  var rules = document.createElement("div");
  rules.id = "grass-rules";
  var diffLabel = isHard ? "【困难模式】5×5棋盘，3个毒草" : "【普通模式】4×4棋盘，2个毒草";
  rules.innerHTML = diffLabel + "<br>🌿 小草：安全的草，数字表示周围毒草数量<br>☠️ 毒草：踩到就会中毒！<br>吃完所有小草即可获胜";
  gameArea.appendChild(rules);

  actionsArea.appendChild(gameArea);
}

// 石头剪刀布小游戏
function renderRPSGame() {
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var locationName = document.getElementById("location-name");
  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");
  var imageArea = document.getElementById("image-area");

  imageArea.style.display = "flex";
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "alien_2.jpg";
    img.style.display = "block";
    placeholder.style.display = "none";
  });

  locationName.textContent = "外星人";

  var choices = ["石头", "剪刀", "布"];
  var emojis = { "石头": "✊", "剪刀": "✌️", "布": "🖐️" };

  descArea.innerHTML = "<div style=\"text-align:center;font-size:18px;font-weight:700;color:#e8d5b7;margin-bottom:8px;\">石头剪刀布！</div>"
    + "<div id=\"rps-result\" style=\"text-align:center;color:#c0c8d8;min-height:24px;\"></div>";

  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";
  actionsArea.style.flexDirection = "row";
  actionsArea.style.gap = "10px";

  var gameOver = false;

  choices.forEach(function(choice) {
    var btn = document.createElement("button");
    btn.className = "action-btn";
    btn.textContent = emojis[choice] + " " + choice;
    btn.style.flex = "1";
    btn.onclick = function() {
      if (gameOver) return;
      var alienChoice = choices[Math.floor(Math.random() * 3)];
      var resultEl = document.getElementById("rps-result");

      var resultText = "你出了" + choice + "，外星人出了" + alienChoice + " → ";

      if (choice === alienChoice) {
        resultText += "平局！再来一次！";
        resultEl.textContent = resultText;
        return;
      }

      gameOver = true;
      actionsArea.querySelectorAll("button").forEach(function(b) { b.disabled = true; });

      var win = false;
      if ((choice === "石头" && alienChoice === "剪刀") ||
          (choice === "剪刀" && alienChoice === "布") ||
          (choice === "布" && alienChoice === "石头")) {
        win = true;
      }

      if (win) {
        resultText += "你赢了！";
        resultEl.textContent = resultText;
        resultEl.style.color = "#5cb85c";
        setTimeout(function() { renderScene("alien_win"); }, 1500);
      } else {
        resultText += "你输了！";
        resultEl.textContent = resultText;
        resultEl.style.color = "#ff4444";
        setTimeout(function() { renderScene("alien_lose"); }, 1500);
      }
    };
    actionsArea.appendChild(btn);
  });
}

// ===== 化学决斗系统 =====
var CHEM_CARDS = [
  { id: "water_to_acid", name: "注水入浓硫酸", desc: "剧烈飞溅腐蚀，对敌方造成1点伤害，之后敌方受到的伤害额外+1", icon: "💧→🧪" },
  { id: "alcohol_bomb", name: "串联酒精灯", desc: "大爆炸，造成3点伤害", icon: "💥" },
  { id: "heat_tube", name: "手持试管对着人加热", desc: "热蒸汽造成1点伤害", icon: "🔥" },
  { id: "goggles", name: "佩戴护目镜", desc: "本回合减少对方1点伤害", icon: "🥽" },
  { id: "water_wash", name: "清水冲洗", desc: "回复自己1点生命，去除硫酸腐蚀效果", icon: "💧" },
  { id: "shield", name: "防爆盾牌", desc: "抵挡敌方全部伤害", icon: "🛡️" },
  { id: "beaker", name: "投掷烧杯", desc: "对敌方造成1点伤害", icon: "🧪" },
  { id: "co2", name: "释放大量二氧化碳", desc: "对双方都造成1点伤害", icon: "💨" },
  { id: "violate_rules", name: "违反实验规章", desc: "双方卡牌本回合无效（电线鞭挞/寻龙尺除外）", icon: "📜" },
  { id: "hot_crucible", name: "高温坩埚钳", desc: "对敌方造成2点伤害，对自己造成1点伤害", icon: "🔧" },
  { id: "cooling_tube", name: "降温冷凝管", desc: "回复两点伤害", icon: "🧊" },
  { id: "tell_teacher", name: "我告老师了", desc: "对方下回合无法行动", icon: "📢" },
];

var chemDuelState = null;

function startChemDuel() {
  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");

  // 设置决斗画面
  var img = document.getElementById("scene-img");
  img.src = "chem_lab_2.jpg";
  document.getElementById("location-name").textContent = "化学实验决斗";

  chemDuelState = {
    playerHP: gameState.chemDifficulty === "nightmare" ? 7 : 6,
    enemyHP: gameState.chemDifficulty === "easy" ? 5 : gameState.chemDifficulty === "hard" ? 15 : gameState.chemDifficulty === "nightmare" ? 25 : 8,
    playerSulfuric: false,  // 硫酸腐蚀debuff
    playerShield: false,    // 护目镜减伤
    enemyShield: false,
    enemySulfuric: false,
    whipUsed: false,        // 电线鞭挞本回合是否用过
    dowsingUsed: false,     // 寻龙尺本回合是否用过
    dowsingEffect: null,    // 寻龙尺效果：damage/shield
    violateRules: false,    // 违反实验规章：双方卡牌无效（电线鞭挞/寻龙尺除外）
    playerStunned: false,   // 玩家被眩晕（下回合无法行动）
    enemyStunned: false,    // 敌方被眩晕（下回合无法行动）
    turn: 0,
  };

  descArea.innerHTML = "";
  renderChemDuelRound();
}

function renderChemDuelRound() {
  var ds = chemDuelState;
  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");

  ds.turn++;
  ds.playerShield = false;
  ds.enemyShield = false;
  ds.whipUsed = false;
  ds.dowsingUsed = false;
  ds.dowsingEffect = null;
  ds.violateRules = false;

  // 大脚鸡随机选牌（噩梦模式2张，且不抽违反实验规章）
  var isNightmare = gameState.chemDifficulty === "nightmare";
  var enemyDeck = isNightmare ? CHEM_CARDS.filter(function(c) { return c.id !== "violate_rules"; }) : CHEM_CARDS;
  var enemyCards = [enemyDeck[Math.floor(Math.random() * enemyDeck.length)]];
  if (isNightmare) {
    var card2 = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];
    enemyCards.push(card2);
  }

  // 玩家被眩晕：跳过出牌，敌方直接行动
  if (ds.playerStunned) {
    ds.playerStunned = false;
    var stunHTML = "<div style=\"display:flex;justify-content:space-between;padding:8px 0;font-size:14px;font-weight:600;\">"
      + "<span style=\"color:#ff6b6b;\">大脚鸡 HP: " + "♥".repeat(ds.enemyHP) + " " + ds.enemyHP + "</span>"
      + "<span style=\"color:#5cb85c;\">玩家 HP: " + "♥".repeat(ds.playerHP) + " " + ds.playerHP + "</span>"
      + "</div>"
      + "<div style=\"text-align:center;color:#ff4444;font-size:15px;margin:8px 0;\">你被老师训话了，本回合无法行动！</div>"
      + "<div style=\"text-align:center;font-size:15px;color:#e8d5b7;margin:6px 0;\">第 " + ds.turn + " 回合 — 大脚鸡行动中...</div>";
    descArea.innerHTML = stunHTML;
    actionsArea.innerHTML = "";
    actionsArea.style.display = "flex";
    var stunNextBtn = document.createElement("button");
    stunNextBtn.className = "action-btn";
    stunNextBtn.textContent = "继续";
    stunNextBtn.style.width = "100%";
    stunNextBtn.onclick = function() {
      playChemDuelCard({ id: "stunned", name: "无法行动", desc: "", icon: "😵" }, enemyCards);
    };
    actionsArea.appendChild(stunNextBtn);
    return;
  }

  // 抽3张牌
  var shuffled = CHEM_CARDS.slice().sort(function() { return Math.random() - 0.5; });
  var playerHand = shuffled.slice(0, 3);

  // 渲染HP
  var nightmareLabel = isNightmare ? " <span style=\"color:#ff4444;font-size:11px;\">噩梦</span>" : "";
  var hpHTML = "<div style=\"display:flex;justify-content:space-between;padding:8px 0;font-size:14px;font-weight:600;\">"
    + "<span style=\"color:#ff6b6b;\">大脚鸡 HP: " + "♥".repeat(ds.enemyHP) + " " + ds.enemyHP + nightmareLabel + "</span>"
    + "<span style=\"color:#5cb85c;\">玩家 HP: " + "♥".repeat(ds.playerHP) + " " + ds.playerHP + "</span>"
    + "</div>";
  if (ds.playerSulfuric) {
    hpHTML += "<div style=\"text-align:center;color:#ff6600;font-size:12px;margin-bottom:4px;\">⚠ 硫酸腐蚀：每次受伤+1</div>";
  }
  hpHTML += "<div style=\"text-align:center;font-size:15px;color:#e8d5b7;margin:6px 0;\">第 " + ds.turn + " 回合 — 选择一张卡牌</div>";
  descArea.innerHTML = hpHTML;

  // 渲染卡牌
  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";
  actionsArea.style.flexDirection = "column";
  actionsArea.style.gap = "6px";

  playerHand.forEach(function(card) {
    var btn = document.createElement("button");
    btn.className = "action-btn";
    btn.style.textAlign = "left";
    btn.style.padding = "8px 12px";
    btn.style.fontSize = "13px";
    btn.innerHTML = "<span style=\"font-size:16px;\">" + card.icon + "</span> <b>" + card.name + "</b><br><span style=\"font-size:11px;color:#aaa;\">" + card.desc + "</span>";
    btn.onclick = function() {
      playChemDuelCard(card, enemyCards);
    };
    actionsArea.appendChild(btn);
  });

  // 电线鞭挞按钮
  if (hasItem("wire") && !ds.whipUsed) {
    var whipBtn = document.createElement("button");
    whipBtn.className = "action-btn";
    whipBtn.style.textAlign = "center";
    whipBtn.style.padding = "8px 12px";
    whipBtn.style.fontSize = "13px";
    whipBtn.style.background = "rgba(255, 200, 50, 0.15)";
    whipBtn.style.borderColor = "rgba(255, 200, 50, 0.5)";
    whipBtn.style.color = "#ffc832";
    whipBtn.innerHTML = "⚡ 使用电线鞭挞（本回合额外造成1点伤害，不影响出牌）";
    whipBtn.onclick = function() {
      ds.whipUsed = true;
      whipBtn.disabled = true;
      whipBtn.style.opacity = "0.5";
      whipBtn.textContent = "⚡ 电线鞭挞已使用（本回合出牌时额外+1伤害）";
    };
    actionsArea.appendChild(whipBtn);
  }

  // 寻龙尺按钮（50%造成1点伤害，50%减少1点伤害）
  if (hasItem("dowsing_rod") && !ds.dowsingUsed) {
    var dowsingBtn = document.createElement("button");
    dowsingBtn.className = "action-btn";
    dowsingBtn.style.textAlign = "center";
    dowsingBtn.style.padding = "8px 12px";
    dowsingBtn.style.fontSize = "13px";
    dowsingBtn.style.background = "rgba(100, 180, 255, 0.15)";
    dowsingBtn.style.borderColor = "rgba(100, 180, 255, 0.5)";
    dowsingBtn.style.color = "#64b4ff";
    dowsingBtn.innerHTML = "🔮 使用寻龙尺（本回合50%额外造成1点伤害，50%减少1点伤害，不影响出牌）";
    dowsingBtn.onclick = function() {
      ds.dowsingUsed = true;
      ds.dowsingEffect = Math.random() < 0.5 ? "damage" : "shield";
      dowsingBtn.disabled = true;
      dowsingBtn.style.opacity = "0.5";
      dowsingBtn.textContent = "🔮 寻龙尺已使用（" + (ds.dowsingEffect === "damage" ? "造成伤害" : "减少伤害") + "）";
    };
    actionsArea.appendChild(dowsingBtn);
  }
}

function playChemDuelCard(playerCard, enemyCards) {
  var ds = chemDuelState;
  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");

  // 禁用所有按钮
  actionsArea.querySelectorAll("button").forEach(function(b) { b.disabled = true; });

  var log = [];

  // === 第一步：玩家出牌效果 ===
  log.push("你使用了：" + playerCard.name);

  var playerDmg = 0;  // 玩家受到的伤害
  var enemyDmg = 0;   // 敌方受到的伤害

  switch (playerCard.id) {
    case "water_to_acid":
      enemyDmg = 1;
      ds.enemySulfuric = true;
      log.push("对敌方造成1点伤害，附加硫酸腐蚀！");
      break;
    case "alcohol_bomb":
      enemyDmg = 3;
      log.push("大爆炸！造成3点伤害！");
      break;
    case "heat_tube":
      enemyDmg = 1;
      log.push("热蒸汽造成1点伤害");
      break;
    case "goggles":
      ds.playerShield = true;
      log.push("佩戴护目镜，本回合减少1点伤害");
      break;
    case "water_wash":
      ds.playerHP = Math.min(gameState.chemDifficulty === "nightmare" ? 7 : 6, ds.playerHP + 1);
      ds.playerSulfuric = false;
      log.push("回复1点生命，去除硫酸腐蚀效果");
      break;
    case "shield":
      ds.playerShield = "full";
      log.push("防爆盾牌展开！抵挡全部伤害！");
      break;
    case "beaker":
      enemyDmg = 1;
      log.push("投掷烧杯造成1点伤害");
      break;
    case "co2":
      enemyDmg = 1;
      playerDmg = 1;
      log.push("释放大量二氧化碳，双方各受1点伤害");
      break;
    case "violate_rules":
      ds.violateRules = true;
      log.push("违反实验规章！双方卡牌效果无效，但电线鞭挞和寻龙尺不受影响！");
      break;
    case "hot_crucible":
      enemyDmg = 2;
      playerDmg = 1;
      log.push("高温坩埚钳对敌方造成2点伤害，自己烫伤1点");
      break;
    case "cooling_tube":
      ds.playerHP = Math.min(gameState.chemDifficulty === "nightmare" ? 7 : 6, ds.playerHP + 2);
      log.push("降温冷凝管回复2点生命！");
      break;
    case "tell_teacher":
      ds.enemyStunned = true;
      log.push("你告老师了！大脚鸡下回合无法行动！");
      break;
    case "stunned":
      log.push("你被眩晕了，本回合无法行动！");
      break;
  }

  // 违反实验规章：双方卡牌效果无效（电线鞭挞和寻龙尺不受影响）
  if (ds.violateRules) {
    log.push("违反实验规章生效！双方卡牌效果无效！");
    playerDmg = 0;
    enemyDmg = 0;
    ds.playerShield = false;
    ds.enemyShield = false;
  }

  // 玩家硫酸腐蚀加成（持续一整局，不会被消耗）
  if (!ds.violateRules && ds.enemySulfuric && enemyDmg > 0) {
    enemyDmg++;
    log.push("敌方硫酸腐蚀触发，额外+1伤害！");
  }

  // === 第二步：大脚鸡出牌效果（噩梦模式多张牌） ===
  if (ds.enemyStunned) {
    ds.enemyStunned = false;
    log.push("大脚鸡被老师训话了，本回合无法行动！");
  } else if (ds.violateRules) {
    log.push("违反实验规章！大脚鸡本回合卡牌效果无效！");
  } else {
    for (var i = 0; i < enemyCards.length; i++) {
      var enemyCard = enemyCards[i];
      log.push("大脚鸡使用了" + (enemyCards.length > 1 ? "第" + (i+1) + "张：" : "：") + enemyCard.name);

      switch (enemyCard.id) {
        case "water_to_acid":
          playerDmg += 1;
          ds.playerSulfuric = true;
          log.push("大脚鸡对你造成1点伤害，附加硫酸腐蚀！");
          break;
        case "alcohol_bomb":
          playerDmg += 3;
          log.push("大脚鸡引发大爆炸！造成3点伤害！");
          break;
        case "heat_tube":
          playerDmg += 1;
          log.push("大脚鸡用热蒸汽造成1点伤害");
          break;
        case "goggles":
          ds.enemyShield = true;
          log.push("大脚鸡佩戴护目镜，减少1点伤害");
          break;
        case "water_wash":
          ds.enemyHP = Math.min(gameState.chemDifficulty === "nightmare" ? 25 : gameState.chemDifficulty === "hard" ? 15 : gameState.chemDifficulty === "easy" ? 5 : 8, ds.enemyHP + 1);
          ds.enemySulfuric = false;
          log.push("大脚鸡回复1点生命，去除硫酸腐蚀");
          break;
        case "shield":
          ds.enemyShield = "full";
          log.push("大脚鸡展开防爆盾牌！抵挡全部伤害！");
          break;
        case "beaker":
          playerDmg += 1;
          log.push("大脚鸡投掷烧杯造成1点伤害");
          break;
        case "co2":
          playerDmg += 1;
          enemyDmg += 1;
          log.push("大脚鸡释放二氧化碳，双方各受1点伤害");
          break;
        case "violate_rules":
          ds.violateRules = true;
          log.push("大脚鸡违反实验规章！双方卡牌效果无效！");
          playerDmg = 0;
          enemyDmg = 0;
          ds.playerShield = false;
          ds.enemyShield = false;
          i = enemyCards.length; // 跳出循环，后续卡牌不再处理
          break;
        case "hot_crucible":
          playerDmg += 2;
          enemyDmg += 1;
          log.push("大脚鸡用高温坩埚钳对你造成2点伤害，自己烫伤1点");
          break;
        case "cooling_tube":
          var maxHP = gameState.chemDifficulty === "nightmare" ? 25 : gameState.chemDifficulty === "hard" ? 15 : gameState.chemDifficulty === "easy" ? 5 : 8;
          ds.enemyHP = Math.min(maxHP, ds.enemyHP + 2);
          log.push("大脚鸡用降温冷凝管回复2点生命！");
          break;
        case "tell_teacher":
          ds.playerStunned = true;
          log.push("大脚鸡告老师了！你下回合无法行动！");
          break;
      }
    }
  }

  // 大脚鸡硫酸腐蚀加成（持续一整局，不会被消耗）
  if (!ds.violateRules && ds.playerSulfuric && playerDmg > 0) {
    playerDmg++;
    log.push("你的硫酸腐蚀触发，额外+1伤害！");
  }

  // 电线鞭挞额外伤害（不受违反规章影响，在所有卡牌结算后执行）
  if (ds.whipUsed) {
    enemyDmg++;
    ds.whipUsed = false;
    log.push("电线鞭挞额外造成1点伤害！");
  }

  // 寻龙尺效果（不受违反规章影响，在所有卡牌结算后执行）
  if (ds.dowsingUsed) {
    if (ds.dowsingEffect === "damage") {
      enemyDmg++;
      log.push("寻龙尺感应到力量，对敌方额外造成1点伤害！");
    } else {
      if (ds.playerShield !== "full") {
        ds.playerShield = true;
      }
      log.push("寻龙尺形成保护罩，减少1点伤害！");
    }
    ds.dowsingUsed = false;
    ds.dowsingEffect = null;
  }

  // === 第三步：统一结算护盾/护目镜 ===
  // 玩家护盾
  if (ds.playerShield === true) {
    playerDmg = Math.max(0, playerDmg - 1);
    log.push("护目镜减少1点伤害");
  } else if (ds.playerShield === "full") {
    playerDmg = 0;
    log.push("防爆盾牌抵挡了全部伤害！");
  }
  // 敌方护盾
  if (ds.enemyShield === true) {
    enemyDmg = Math.max(0, enemyDmg - 1);
    log.push("大脚鸡护目镜减少1点伤害");
  } else if (ds.enemyShield === "full") {
    enemyDmg = 0;
    log.push("大脚鸡防爆盾牌抵挡了全部伤害！");
  }

  // === 第四步：统一扣血 ===
  ds.enemyHP -= enemyDmg;
  ds.playerHP -= playerDmg;

  // 显示回合结果
  var resultHTML = "<div id=\"chem-duel-hp\" style=\"display:flex;justify-content:space-between;padding:8px 0;font-size:14px;font-weight:600;\">"
    + "<span style=\"color:#ff6b6b;\">大脚鸡 HP: " + "♥".repeat(Math.max(0, ds.enemyHP)) + " " + Math.max(0, ds.enemyHP) + "</span>"
    + "<span style=\"color:#5cb85c;\">玩家 HP: " + "♥".repeat(Math.max(0, ds.playerHP)) + " " + Math.max(0, ds.playerHP) + "</span>"
    + "</div>"
    + "<div style=\"font-size:12px;color:#c0c8d8;line-height:1.6;margin:8px 0;\">"
    + log.map(function(l) { return "<div>" + l + "</div>"; }).join("")
    + "</div>";

  // 检查胜负
  var gameOver = false;
  if (ds.enemyHP <= 0 && ds.playerHP <= 0) {
    resultHTML += "<div style=\"text-align:center;color:#ffc832;font-size:16px;font-weight:700;margin-top:8px;\">同归于尽！</div>";
    gameOver = true;
    gameState.lastDuelEnemyHP = ds.enemyHP;
    gameState.lastDuelNightmare = gameState.chemDifficulty === "nightmare";
    setTimeout(function() { chemDuelState = null; renderScene("chem_lab_lose"); }, 2000);
  } else if (ds.enemyHP <= 0) {
    resultHTML += "<div style=\"text-align:center;color:#5cb85c;font-size:16px;font-weight:700;margin-top:8px;\">你战胜了大脚鸡！</div>";
    gameOver = true;
    setTimeout(function() { chemDuelState = null; renderScene("chem_lab_win"); }, 2000);
  } else if (ds.playerHP <= 0) {
    resultHTML += "<div style=\"text-align:center;color:#ff4444;font-size:16px;font-weight:700;margin-top:8px;\">你被大脚鸡击败了！</div>";
    gameOver = true;
    gameState.lastDuelEnemyHP = ds.enemyHP;
    gameState.lastDuelNightmare = gameState.chemDifficulty === "nightmare";
    setTimeout(function() { chemDuelState = null; renderScene("chem_lab_lose"); }, 2000);
  }

  descArea.innerHTML = resultHTML;

  if (!gameOver) {
    // 下一回合按钮
    actionsArea.innerHTML = "";
    var nextBtn = document.createElement("button");
    nextBtn.className = "action-btn";
    nextBtn.textContent = "下一回合";
    nextBtn.style.width = "100%";
    nextBtn.onclick = function() { renderChemDuelRound(); };
    actionsArea.appendChild(nextBtn);
  } else {
    actionsArea.innerHTML = "";
  }
}

// 化学决斗胜利序列：前半段文案 → 震动 → 黑屏 → 药剂 → 走出实验室
function renderChemWinSequence() {
  // 清除旧定时器
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }

  var scene = SCENE_CONFIG["chem_lab_win"];
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = scene.img;
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  document.getElementById("location-name").textContent = scene.name;
  document.getElementById("actions-area").style.display = "none";

  // 前半段文案
  var part1 = "大脚鸡:我.....输了吗.....|（嘴角挑起一抹笑容)真是弱小呢，离开吧|大脚鸡：切.....|（拎起大脚鸡,丢到一旁）|好了....开始实验吧！";
  var part2 = "终于做好了.....[获得道具，神秘药剂]|(走出实验室)";

  // 先打字前半段
  startTypewriter(part1, null, null, null);

  // 监听打字完成
  var checkInterval = setInterval(function() {
    if (typewriterDone) {
      clearInterval(checkInterval);
      // 震动
      var gc = document.getElementById("game-container");
      gc.classList.add("shake");
      setTimeout(function() { gc.classList.remove("shake"); }, 500);

      // 黑屏再亮起
      var fade = document.getElementById("fade-overlay");
      fade.classList.add("active");
      setTimeout(function() {
        fade.classList.remove("active");
        // 解锁成就 + 获得道具
        var achId = gameState.chemDifficulty === "easy" ? "easy_bigfoot" : gameState.chemDifficulty === "hard" ? "chem_king" : gameState.chemDifficulty === "nightmare" ? "nightmare_bigfoot" : "beat_bigfoot";
        unlockAchievement(achId);
        addItems("mystery_potion");
        // 打字后半段
        startTypewriter(part2, null, null, null);
        var check2 = setInterval(function() {
          if (typewriterDone) {
            clearInterval(check2);
            setTimeout(function() { renderScene("lab_1f"); }, 1500);
          }
        }, 200);
      }, 2000);
    }
  }, 200);
}

// 化学决斗失败序列：噩梦模式根据大脚鸡剩余血量显示不同对话
function renderChemLoseSequence() {
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }

  var isNightmare = gameState.lastDuelNightmare;
  var enemyHP = gameState.lastDuelEnemyHP;
  var scene = SCENE_CONFIG["chem_lab_lose"];

  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = isNightmare ? "a9759ba712a67c0d0af129fac5d69e0e.jpg" : scene.img;
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  document.getElementById("location-name").textContent = scene.name;
  document.getElementById("actions-area").style.display = "none";

  // 噩梦模式：根据大脚鸡剩余血量选择对话
  var desc;
  if (isNightmare) {
    if (enemyHP > 10) {
      desc = "大脚鸡：你这家伙，是在给我挠痒痒吗";
    } else if (enemyHP > 5) {
      desc = "大脚鸡：亚嘞亚嘞，这家伙，为什么要挑战我呢";
    } else {
      desc = "大脚鸡：真是可敬的对手呢....我永远也不会忘掉你吧";
    }
  } else {
    desc = scene.desc;
  }

  // 解锁成就
  unlockAchievement("lost_to_bigfoot");

  // 打字机播放对话，然后自动跳转
  startTypewriter(desc, null, "lab_1f", null);
}

// 地下室摔倒序列：摔倒 → 闪回 → 回到现实
function renderBasementFallSequence() {
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }

  var scene = SCENE_CONFIG["basement_fall"];
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = scene.img;
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  document.getElementById("location-name").textContent = scene.name;
  document.getElementById("actions-area").style.display = "none";

  // 撞击特效
  var gc = document.getElementById("game-container");
  gc.classList.add("impact");
  playImpactSound();
  setTimeout(function() { gc.classList.remove("impact"); }, 600);

  // 解锁成就
  unlockAchievement("flat_fall");

  // 第一阶段：打"啊！！！！！"
  startTypewriter("啊！！！！！", null, null, null);

  // 监听第一阶段打字完成
  var check1 = setInterval(function() {
    if (typewriterDone) {
      clearInterval(check1);
      // 切换为闪回图片
      img.src = "";
      if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
      pendingImageRAF = requestAnimationFrame(function() {
        pendingImageRAF = null;
        img.src = "7df52960ad37327cf4a1dccdb0c03f2e.jpg";
        img.style.display = "block";
        placeholder.style.display = "none";
      });
      // 第二阶段：闪回文案
      startTypewriter(".....这里是哪......|我在做梦吗....|这不是现实..|这.....不是现实....", null, null, null);
      // 监听第二阶段打字完成
      var check2 = setInterval(function() {
        if (typewriterDone) {
          clearInterval(check2);
          // 切回原图
          img.src = "";
          if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
          pendingImageRAF = requestAnimationFrame(function() {
            pendingImageRAF = null;
            img.src = scene.img;
            img.style.display = "block";
            placeholder.style.display = "none";
          });
          // 第三阶段：剩余文案，自动跳转
          startTypewriter("这里怎么有个水坑啊....|呜.........|好疼......", null, "basement", null);
        }
      }, 100);
    }
  }, 100);
}

// 红室序列：文案结束 → 闪回 → 回到校门口
function renderRedRoomSequence() {
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }

  var scene = SCENE_CONFIG["backrooms_red"];
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = scene.img;
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  document.getElementById("location-name").textContent = scene.name;
  document.getElementById("actions-area").style.display = "none";

  // 解锁成就
  unlockAchievement("red_room");

  // 第一阶段：原文案
  startTypewriter(scene.desc, null, null, null);

  var check1 = setInterval(function() {
    if (typewriterDone) {
      clearInterval(check1);
      // 切换为闪回图片
      img.src = "";
      if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
      pendingImageRAF = requestAnimationFrame(function() {
        pendingImageRAF = null;
        img.src = "88512876c3fbb56613b3ea90c95b6644.jpg";
        img.style.display = "block";
        placeholder.style.display = "none";
      });
      // 第二阶段：闪回文案，然后跳转到校门口
      startTypewriter("唔.....|怎么了......|(醒醒！！）|呜.......", null, "gate", null);
    }
  }, 100);
}

// 后室饥渴而死序列：文案结束 → 闪回 → 回到校门口
function renderBackroomsDeathSequence() {
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }

  var scene = SCENE_CONFIG["backrooms_death"];
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = scene.img;
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  document.getElementById("location-name").textContent = scene.name;
  document.getElementById("actions-area").style.display = "none";

  // 解锁成就
  unlockAchievement("starved_to_death");

  // 第一阶段：原文案
  startTypewriter(scene.desc, null, null, null);

  var check1 = setInterval(function() {
    if (typewriterDone) {
      clearInterval(check1);
      // 切换为闪回图片
      img.src = "";
      if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
      pendingImageRAF = requestAnimationFrame(function() {
        pendingImageRAF = null;
        img.src = "5ff634cca651352fb437e343b33ff07b.jpg";
        img.style.display = "block";
        placeholder.style.display = "none";
      });
      // 第二阶段：闪回文案，然后跳转到校门口
      startTypewriter("我这是....怎么了|我要醒过来......", null, "gate", null);
    }
  }, 100);
}

// 实验楼二楼序列：上楼 → 心理教室 → 企鹅狗 → 沙盘游戏
function renderLab2FSequence() {
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }

  var scene = SCENE_CONFIG["lab_2f"];
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = scene.img;
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  document.getElementById("location-name").textContent = scene.name;
  document.getElementById("actions-area").style.display = "none";

  // 阶段1：上楼
  startTypewriter("（上楼ing)", null, null, null);
  var step = 1;
  function lab2fCheck() {
    if (typewriterDone) {
      clearInterval(check);
      if (step === 1) {
        // 阶段2：心理教室
        img.src = "";
        cancelRAF();
        pendingImageRAF = requestAnimationFrame(function() {
          pendingImageRAF = null;
          img.src = "540bb3af605088778a2ad0b50077841f.jpg";
          img.style.display = "block";
          placeholder.style.display = "none";
        });
        startTypewriter("到了啊，心理教室....|之前没来过几次这里呢|心理课早就没有了.........", null, null, null);
        step = 2;
        check = setInterval(lab2fCheck, 100);
      } else if (step === 2) {
        // 阶段3：往里看 + 震动
        img.src = "";
        cancelRAF();
        pendingImageRAF = requestAnimationFrame(function() {
          pendingImageRAF = null;
          img.src = "dd5c8e3dbd6e38f52bd71f445e2d5064.jpg";
          img.style.display = "block";
          placeholder.style.display = "none";
        });
        var gc = document.getElementById("game-container");
        gc.classList.add("shake");
        setTimeout(function() { gc.classList.remove("shake"); }, 1000);
        startTypewriter("往这看看吧.....", null, null, null);
        step = 3;
        check = setInterval(lab2fCheck, 100);
      } else if (step === 3) {
        // 阶段4：企鹅狗出现
        img.src = "";
        cancelRAF();
        pendingImageRAF = requestAnimationFrame(function() {
          pendingImageRAF = null;
          img.src = "c2de7982035c6c7ba3c1ab236a8ab93d.jpg";
          img.style.display = "block";
          placeholder.style.display = "none";
        });
        unlockAchievement("penguin_dog");
        startTypewriter("企鹅狗：你到这里干什么|亚嘞亚嘞，还是被发现了吗|企鹅狗：我不会让你在这里久待的，跟我来...", null, null, null);
        step = 4;
        check = setInterval(lab2fCheck, 100);
      } else if (step === 4) {
        // 阶段5：摆阵 → 进入沙盘
        img.src = "";
        cancelRAF();
        pendingImageRAF = requestAnimationFrame(function() {
          pendingImageRAF = null;
          img.src = "62d9adb6d7848472877a00da89957ae2.jpg";
          img.style.display = "block";
          placeholder.style.display = "none";
        });
        startTypewriter("企鹅狗：跟我一起来摆一下吧|是战斗吗.....我不会低头的|企鹅狗：你这家伙...真是满脑子都只想着战斗呢|塔塔开！！！！！", null, null, null);
        step = 5;
        check = setInterval(lab2fCheck, 100);
      } else if (step === 5) {
        // 进入沙盘游戏 - 先选难度
        clearInterval(check);
        stopTypewriter();
        var descArea = document.getElementById("description-area");
        descArea.innerHTML = '<div style="text-align:center;padding:20px;">' +
          '<div style="font-size:18px;color:#e8d5b7;margin-bottom:16px;">选择沙盘难度</div>' +
          '<button class="action-btn" style="margin-bottom:10px;width:100%;" id="sandbox-normal-btn">普通（3×4棋盘，企鹅狗开局1格）</button>' +
          '<button class="action-btn" style="width:100%;" id="sandbox-hard-btn">困难（4×4棋盘，企鹅狗开局2格）</button>' +
          '</div>';
        document.getElementById("actions-area").innerHTML = "";
        document.getElementById("sandbox-normal-btn").onclick = function() {
          startSandboxGame("normal");
        };
        document.getElementById("sandbox-hard-btn").onclick = function() {
          startSandboxGame("hard");
        };
      }
    }
  }
  var check = setInterval(lab2fCheck, 100);
}

// ===== 沙盘游戏 =====
var sandboxState = null;

function startSandboxGame(difficulty) {
  difficulty = difficulty || "normal";
  var isHard = difficulty === "hard";
  var rows = isHard ? 4 : 3;
  var cols = 4;

  // 创建棋盘
  var board = [];
  for (var r = 0; r < rows; r++) {
    board[r] = [];
    for (var c = 0; c < cols; c++) {
      board[r][c] = null;
    }
  }

  if (isHard) {
    // 困难模式：企鹅狗开局2格（右上角），玩家左下角1格
    board[0][3] = "enemy";
    board[0][2] = "enemy";
    board[rows - 1][0] = "player";
  } else {
    // 普通模式：3行4列，企鹅狗右上角1格，玩家左下角1格
    board[0][3] = "enemy";
    board[rows - 1][0] = "player";
  }

  sandboxState = {
    difficulty: difficulty,
    board: board,
    rows: rows,
    cols: cols,
    refined: {},
    playerScore: 1,
    enemyScore: isHard ? 2 : 1,
    playerDefend: false,
    enemyDefend: false,
    potionCooldown: 0,
    enemyStunned: false,
    gameOver: false,
  };

  document.getElementById("location-name").textContent = isHard ? "沙盘对决（困难）" : "沙盘对决";
  updateSandboxHUD();
  renderSandboxActions();
}

function updateSandboxHUD(selectMode, selectAction) {
  var descArea = document.getElementById("description-area");
  var ss = sandboxState;
  var html = '<div class="battle-hud">';
  html += '<div style="display:flex;justify-content:space-between;padding:8px 0;">';
  html += '<span style="color:#5cb85c;">你：' + ss.playerScore + '分</span>';
  html += '<span style="color:#ff6b6b;">企鹅狗：' + ss.enemyScore + '分</span>';
  html += '</div>';

  if (selectMode && selectAction) {
    html += '<div style="text-align:center;color:#ffc832;font-size:13px;margin:4px 0;">点击棋盘选择目标格子</div>';
  }

  // 计算可选格子
  var validCells = {};
  if (selectMode && selectAction === "settle") {
    var adj = getAdjacentCells("player");
    for (var i = 0; i < adj.length; i++) {
      validCells[adj[i][0] + "," + adj[i][1]] = true;
    }
  }

  // 渲染棋盘
  html += '<div class="sandbox-grid" id="sandbox-grid" style="grid-template-columns: repeat(' + ss.cols + ', 1fr);">';
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      var cell = ss.board[r][c];
      var key = r + "," + c;
      var cls = "sandbox-cell";
      var content = "";
      if (cell === "player") {
        cls += " sandbox-player";
        content = ss.refined[key] ? "2" : "1";
      } else if (cell === "enemy") {
        cls += " sandbox-enemy";
        content = ss.refined[key] ? "2" : "1";
      }
      if (selectMode && selectAction && validCells[key]) {
        cls += " sandbox-selectable";
      }
      html += '<div class="' + cls + '" data-r="' + r + '" data-c="' + c + '">' + (content || "") + '</div>';
    }
  }
  html += '</div>';

  if (ss.enemyStunned) {
    html += '<div style="text-align:center;color:#ff6600;margin-top:6px;">企鹅狗被神秘药剂眩晕，本回合无法行动！</div>';
  }
  html += '</div>';
  descArea.innerHTML = html;
  descArea.onclick = null;

  // 绑定棋盘点击（选择模式）
  if (selectMode && selectAction) {
    var cells = descArea.querySelectorAll(".sandbox-selectable");
    cells.forEach(function(el) {
      el.addEventListener("click", function(e) {
        e.stopPropagation();
        var r = parseInt(el.dataset.r);
        var c = parseInt(el.dataset.c);
        doSandboxAction(selectAction, r, c);
      });
    });
  }
}

function renderSandboxActions() {
  var ss = sandboxState;
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";
  actionsArea.style.flexDirection = "row";
  actionsArea.style.flexWrap = "wrap";
  actionsArea.style.gap = "6px";
  actionsArea.style.justifyContent = "center";

  // 铺设：点击棋盘选择目标格子
  var adjCells = getAdjacentCells("player");
  var hasAdj = adjCells.length > 0;
  var settleBtn = document.createElement("button");
  settleBtn.className = "action-btn sandbox-action-btn";
  settleBtn.textContent = "铺设";
  settleBtn.title = "点击棋盘选择目标格子";
  if (!hasAdj) settleBtn.disabled = true;
  settleBtn.onclick = function() {
    // 进入棋盘选择模式
    updateSandboxHUD(true, "settle");
    // 显示取消按钮
    actionsArea.innerHTML = "";
    var cancelBtn = document.createElement("button");
    cancelBtn.className = "action-btn";
    cancelBtn.textContent = "取消选择";
    cancelBtn.style.width = "100%";
    cancelBtn.onclick = function() {
      updateSandboxHUD();
      renderSandboxActions();
    };
    actionsArea.appendChild(cancelBtn);
  };
  actionsArea.appendChild(settleBtn);

  // 精摆
  var refineBtn = document.createElement("button");
  refineBtn.className = "action-btn sandbox-action-btn";
  refineBtn.textContent = "精摆";
  refineBtn.title = "让一个格子价值翻倍";
  refineBtn.onclick = function() { doSandboxAction("refine"); };
  actionsArea.appendChild(refineBtn);

  // 防御
  var defendBtn = document.createElement("button");
  defendBtn.className = "action-btn sandbox-action-btn";
  defendBtn.textContent = "防御";
  defendBtn.title = "本回合对方无法夺取你的格子";
  defendBtn.onclick = function() { doSandboxAction("defend"); };
  actionsArea.appendChild(defendBtn);

  // 神秘药剂
  if (hasItem("mystery_potion") && ss.potionCooldown <= 0) {
    var potionBtn = document.createElement("button");
    potionBtn.className = "action-btn sandbox-action-btn";
    potionBtn.style.background = "rgba(180, 100, 255, 0.15)";
    potionBtn.style.borderColor = "rgba(180, 100, 255, 0.5)";
    potionBtn.style.color = "#b464ff";
    potionBtn.textContent = "药剂";
    potionBtn.title = "使用神秘药剂（眩晕企鹅狗1回合，冷却3回合）";
    potionBtn.onclick = function() { doSandboxAction("potion"); };
    actionsArea.appendChild(potionBtn);
  }
}

function showSandboxTargetSelect(cells, action) {
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";
  actionsArea.style.flexDirection = "column";
  actionsArea.style.gap = "4px";

  var label = document.createElement("div");
  label.style.cssText = "text-align:center;color:#e8d5b7;font-size:13px;padding:4px;";
  label.textContent = "选择目标格子：";
  actionsArea.appendChild(label);

  cells.forEach(function(cell) {
    var btn = document.createElement("button");
    btn.className = "action-btn";
    btn.textContent = "第" + (cell[0] + 1) + "行 第" + (cell[1] + 1) + "列";
    btn.style.width = "100%";
    btn.onclick = function() { doSandboxAction(action, cell[0], cell[1]); };
    actionsArea.appendChild(btn);
  });
}

function getAdjacentCells(owner) {
  var ss = sandboxState;
  var cells = [];
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      if (ss.board[r][c] === owner) {
        var dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        for (var d = 0; d < dirs.length; d++) {
          var nr = r + dirs[d][0], nc = c + dirs[d][1];
          if (nr >= 0 && nr < ss.rows && nc >= 0 && nc < ss.cols && ss.board[nr][nc] !== owner) {
            // 去重
            var dup = false;
            for (var k = 0; k < cells.length; k++) {
              if (cells[k][0] === nr && cells[k][1] === nc) { dup = true; break; }
            }
            if (!dup) cells.push([nr, nc]);
          }
        }
      }
    }
  }
  return cells;
}

function doSandboxAction(action, r, c) {
  var ss = sandboxState;
  if (ss.gameOver) return;

  var descArea = document.getElementById("description-area");
  var log = "";

  // 玩家行动
  if (action === "settle") {
    // 验证目标格子是否相邻
    var adjCells = getAdjacentCells("player");
    var valid = false;
    for (var i = 0; i < adjCells.length; i++) {
      if (adjCells[i][0] === r && adjCells[i][1] === c) { valid = true; break; }
    }
    if (!valid) return;
    if (ss.board[r][c] === "enemy" && ss.enemyDefend) {
      // 对方防御，玩家失去1分，格子归对方
      ss.playerScore = Math.max(0, ss.playerScore - 1);
      log = "企鹅狗防御了！你失去1分！";
    } else {
      ss.board[r][c] = "player";
      ss.playerScore++;
      log = "你夺取了第" + (r+1) + "行第" + (c+1) + "列！+1分";
    }
  } else if (action === "refine") {
    // 精摆一个自己的格子
    var playerCells = [];
    for (var rr = 0; rr < ss.rows; rr++) {
      for (var cc = 0; cc < ss.cols; cc++) {
        if (ss.board[rr][cc] === "player") playerCells.push([rr, cc]);
      }
    }
    var pick = playerCells[Math.floor(Math.random() * playerCells.length)];
    ss.refined[pick[0] + "," + pick[1]] = true;
    ss.playerScore++;
    log = "你精摆了第" + (pick[0]+1) + "行第" + (pick[1]+1) + "列！该格子价值+1";
  } else if (action === "defend") {
    ss.playerDefend = true;
    log = "你摆出防御架势，本回合对方无法夺取你的格子";
  } else if (action === "potion") {
    ss.enemyStunned = true;
    ss.potionCooldown = 3;
    log = "哈哈哈看我神秘药剂！企鹅狗：啊！！！（企鹅狗本回合无法行动）";
  }

  // 检查胜利
  var winScore = ss.difficulty === "hard" ? 17 : 10;
  if (ss.playerScore >= winScore) {
    ss.gameOver = true;
    descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#5cb85c;font-size:18px;font-weight:700;">你赢了！' + winScore + '分达成！</div></div>';
    document.getElementById("actions-area").innerHTML = "";
    setTimeout(function() { sandboxVictory(); }, 1500);
    return;
  }

  // 企鹅狗行动
  if (!ss.enemyStunned) {
    sandboxEnemyAI();
  } else {
    ss.enemyStunned = false;
  }

  // 冷却减1
  if (ss.potionCooldown > 0) ss.potionCooldown--;
  ss.playerDefend = false;
  ss.enemyDefend = false;

  // 检查企鹅狗胜利
  if (ss.enemyScore >= winScore) {
    ss.gameOver = true;
    descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#ff4444;font-size:18px;font-weight:700;">企鹅狗率先达到' + winScore + '分！</div></div>';
    document.getElementById("actions-area").innerHTML = "";
    setTimeout(function() { sandboxDefeat(); }, 1500);
    return;
  }

  updateSandboxHUD();
  renderSandboxActions();
  if (log) {
    var toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = log;
    document.body.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 2000);
  }
}

function sandboxEnemyAI() {
  var ss = sandboxState;
  var adj = getAdjacentCells("enemy");
  var hasAdj = adj.length > 0;

  // 优先防御如果玩家接近胜利
  if (ss.playerScore >= 7 && Math.random() < 0.4 && hasAdj) {
    ss.enemyDefend = true;
    return;
  }

  // 随机选择行动
  var roll = Math.random();
  if (roll < 0.45 && hasAdj) {
    // 铺设：优先夺取玩家格子（仅在接壤时）
    var playerTargets = [];
    var emptyTargets = [];
    for (var i = 0; i < adj.length; i++) {
      if (ss.board[adj[i][0]][adj[i][1]] === "player") {
        playerTargets.push(adj[i]);
      } else {
        emptyTargets.push(adj[i]);
      }
    }
    var pick;
    if (playerTargets.length > 0 && Math.random() < 0.8) {
      pick = playerTargets[Math.floor(Math.random() * playerTargets.length)];
    } else if (emptyTargets.length > 0) {
      pick = emptyTargets[Math.floor(Math.random() * emptyTargets.length)];
    } else {
      pick = playerTargets[Math.floor(Math.random() * playerTargets.length)];
    }
    if (ss.board[pick[0]][pick[1]] === "player" && ss.playerDefend) {
      ss.enemyScore = Math.max(0, ss.enemyScore - 1);
    } else {
      ss.board[pick[0]][pick[1]] = "enemy";
      ss.enemyScore++;
    }
  } else if (roll < 0.8) {
    // 精摆（概率提高：从30%提高到35%）
    var enemyCells = [];
    for (var r = 0; r < ss.rows; r++) {
      for (var c = 0; c < ss.cols; c++) {
        if (ss.board[r][c] === "enemy") enemyCells.push([r, c]);
      }
    }
    if (enemyCells.length > 0) {
      var pick = enemyCells[Math.floor(Math.random() * enemyCells.length)];
      ss.refined[pick[0] + "," + pick[1]] = true;
      ss.enemyScore++;
    }
  } else if (hasAdj) {
    // 防御（仅在接壤时使用）
    ss.enemyDefend = true;
  } else {
    // 无接壤且没抽到精摆，强制精摆
    var enemyCells = [];
    for (var r = 0; r < ss.rows; r++) {
      for (var c = 0; c < ss.cols; c++) {
        if (ss.board[r][c] === "enemy") enemyCells.push([r, c]);
      }
    }
    if (enemyCells.length > 0) {
      var pick = enemyCells[Math.floor(Math.random() * enemyCells.length)];
      ss.refined[pick[0] + "," + pick[1]] = true;
      ss.enemyScore++;
    }
  }
}

function sandboxVictory() {
  unlockAchievement("sandbox_win");
  if (sandboxState.difficulty === "hard") unlockAchievement("sandbox_hard_win");
  var img = document.getElementById("scene-img");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "62d9adb6d7848472877a00da89957ae2.jpg";
    img.style.display = "block";
  });
  document.getElementById("actions-area").style.display = "none";
  startTypewriter("企鹅狗：是我输了|哈哈哈哈！胜利者！是我", null, null, null);
  var check = setInterval(function() {
    if (typewriterDone) {
      clearInterval(check);
      var gc = document.getElementById("game-container");
      gc.classList.add("shake");
      setTimeout(function() { gc.classList.remove("shake"); }, 500);
      startTypewriter("企鹅狗：唉...我失败了，没能把你拉出来|你这家伙在说什么呢|不管了，这企鹅狗一直在神神叨叨的...我要赶紧离开这里", null, "lab_floor", null);
    }
  }, 100);
}

function sandboxDefeat() {
  unlockAchievement("sandbox_lose");
  var img = document.getElementById("scene-img");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "62d9adb6d7848472877a00da89957ae2.jpg";
    img.style.display = "block";
  });
  document.getElementById("actions-area").style.display = "none";
  startTypewriter("可恶.....还是输了吗|企鹅狗：可怜的孩子啊.....|企鹅狗：你先出去吧.....", null, "lab_floor", null);
}

function cancelRAF() {
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
}

// 开始打字机
function startTypewriter(text, autoNext, autoJump, getItem) {
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

  typeNextChar(autoNext, autoJump, getItem);
}

// 打字下一个字
function typeNextChar(autoNext, autoJump, getItem) {
  var descArea = document.getElementById("description-area");
  if (currentSentenceIndex >= currentSentences.length) {
    // 所有句子打完
    typewriterDone = true;
    descArea.innerHTML = descArea.innerHTML.replace("<span class=\"cursor\"></span>", "");
    if (autoJump) {
      // 自动跳转场景
      if (getItem) addItems(getItem);
      pendingAutoJumpTimer = setTimeout(function() {
        pendingAutoJumpTimer = null;
        renderScene(autoJump);
      }, 800);
    } else if (autoNext) {
      // 点击继续后跳转场景
      if (getItem) addItems(getItem);
      descArea.innerHTML += "<span class=\"tap-hint\">▼ 点击继续</span>";
      descArea.onclick = function() {
        descArea.onclick = null;
        // 检查当前场景是否需要黑幕过渡效果
        var curScene = SCENE_CONFIG[gameState.currentScene];
        if (curScene && curScene.fadeEffect) {
          triggerFadeEffect(function() {
            renderScene(autoNext);
          });
        } else if (curScene && curScene.flickerEffect) {
          triggerFlickerEffect(function() {
            renderScene(autoNext);
          });
        } else {
          renderScene(autoNext);
        }
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
    typewriterTimer = setTimeout(function() { typeNextChar(autoNext, autoJump, getItem); }, 50);
  } else {
    // 当前句子打完，等待点击
    descArea.innerHTML = sentence + "<span class=\"tap-hint\">▼ 点击继续</span>";
    descArea.onclick = function() {
      descArea.onclick = null;
      currentSentenceIndex++;
      currentCharIndex = 0;
      descArea.innerHTML = "<span class=\"cursor\"></span>";
      typewriterTimer = setTimeout(function() { typeNextChar(autoNext, autoJump, getItem); }, 50);
    };
  }
}

// 处理按钮点击
function handleAction(btn) {
  // 弹窗提示
  if (btn.popup) {
    showPopupModal(btn.popup, btn.popupThen ? function() { renderScene(btn.popupThen); } : null);
    return;
  }

  // 先触发事件
  if (btn.event) {
    showEventModal(btn.event);
  }

  // 获得道具
  if (btn.getItem) {
    addItems(btn.getItem);
  }

  // 解锁成就
  if (btn.unlockAch) {
    unlockAchievement(btn.unlockAch);
  }

  // 跳转场景（如果target与当前相同则刷新当前场景）
  if (btn.target) {
    if (btn.setDifficulty) {
      gameState.hachiDifficulty = btn.setDifficulty;
    }
    renderScene(btn.target);
  }
  // action 跳转（同 target）
  if (btn.action) {
    // 设置难度
    if (btn.setDifficulty) {
      if (btn.action === "confucius_game") {
        gameState.confuciusDifficulty = btn.setDifficulty;
      } else {
        gameState.chemDifficulty = btn.setDifficulty;
      }
    }
    renderScene(btn.action);
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
function showPopupModal(message, onClose) {
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

  function closePopup() {
    overlay.remove();
    if (onClose) onClose();
  }

  overlay.querySelector("#popup-close-btn").addEventListener("click", closePopup);
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) closePopup();
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
    // 控制台
    '<div class="backpack-console">' +
    '<div class="console-title">🖥️ 控制台</div>' +
    '<div style="display:flex;gap:6px;">' +
    '<input type="text" id="console-input" class="console-input" placeholder="输入道具名称获取...">' +
    '<button id="console-btn" class="console-btn">获取</button>' +
    '</div>' +
    '<div id="console-msg" style="font-size:12px;color:#5cb85c;margin-top:4px;min-height:16px;"></div>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button class="modal-close-btn" id="backpack-close-btn">关 闭</button>' +
    '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  // 控制台逻辑
  overlay.querySelector("#console-btn").addEventListener("click", function() {
    handleConsoleInput(overlay);
  });
  overlay.querySelector("#console-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") handleConsoleInput(overlay);
  });

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

// 控制台输入处理
function handleConsoleInput(overlay) {
  var input = overlay.querySelector("#console-input");
  var msg = overlay.querySelector("#console-msg");
  var name = input.value.trim();
  if (!name) { msg.style.color = "#ff6b6b"; msg.textContent = "请输入道具名称"; return; }

  // 按名称匹配道具
  var found = null;
  for (var key in ITEM_CONFIG) {
    if (ITEM_CONFIG[key].name === name) { found = key; break; }
  }
  if (!found) {
    // 也尝试按id匹配
    if (ITEM_CONFIG[name]) { found = name; }
  }
  if (!found) {
    msg.style.color = "#ff6b6b";
    msg.textContent = "未找到道具：" + name;
    return;
  }

  if (hasItem(found)) {
    msg.style.color = "#ffc832";
    msg.textContent = "已拥有：" + ITEM_CONFIG[found].name;
  } else {
    addItem(found);
    msg.style.color = "#5cb85c";
    msg.textContent = "已获取：" + ITEM_CONFIG[found].name;
    // 刷新背包内容
    refreshBackpackContent(overlay);
  }
  input.value = "";
}

// 刷新背包道具列表
function refreshBackpackContent(overlay) {
  var body = overlay.querySelector(".modal-body");
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
  body.innerHTML = itemsHtml;
  // 重新绑定使用按钮
  body.querySelectorAll(".item-use-btn").forEach(function(btn) {
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

// ===== 御前决斗战斗系统 =====
function renderBattle() {
  battleState.inBattle = true;
  battleState.playerKi = 0;
  battleState.hachiKi = 0;
  battleState.hachiHP = gameState.hachiDifficulty === "hard" ? 2 : 1;

  var descArea = document.getElementById("description-area");
  var actionsArea = document.getElementById("actions-area");

  updateBattleHUD();

  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";

  // 哈气按钮
  var haBtn = document.createElement("button");
  haBtn.className = "action-btn battle-btn";
  haBtn.textContent = "哈气（消耗1气，造成伤害）";
  haBtn.addEventListener("click", function() { handleBattleAction("哈气"); });
  actionsArea.appendChild(haBtn);

  // 格挡按钮
  var geBtn = document.createElement("button");
  geBtn.className = "action-btn battle-btn";
  geBtn.textContent = "格挡（免消耗，抵挡攻击）";
  geBtn.addEventListener("click", function() { handleBattleAction("格挡"); });
  actionsArea.appendChild(geBtn);

  // 呼吸按钮
  var huBtn = document.createElement("button");
  huBtn.className = "action-btn battle-btn";
  huBtn.textContent = "呼吸（积累1气）";
  huBtn.addEventListener("click", function() { handleBattleAction("呼吸"); });
  actionsArea.appendChild(huBtn);

  // 规则按钮
  var ruleBtn = document.createElement("button");
  ruleBtn.className = "action-btn";
  ruleBtn.style.cssText = "background:linear-gradient(135deg,#555,#444);color:#aaa;";
  ruleBtn.textContent = "📖 查看规则";
  ruleBtn.addEventListener("click", function() {
    showPopupModal("【御前决斗规则】<br><br>⚔️ 哈气：消耗1气攻击对手，对手未格挡则造成伤害<br>🛡️ 格挡：免消耗，抵挡对手的哈气<br>💨 呼吸：积累1气<br><br>哈基高会随机选择行动，但没气时不会哈气。<br>" + (gameState.hachiDifficulty === "hard" ? "困难模式：哈基高拥有2点血量，每次攻击消耗1点。" : "普通模式：一击制胜！"));
  });
  actionsArea.appendChild(ruleBtn);
}

function updateBattleHUD() {
  var descArea = document.getElementById("description-area");
  var isHard = gameState.hachiDifficulty === "hard";
  var hpDisplay = isHard ? '<div class="battle-ki">哈基高血量：<span class="ki-num" style="color:#ff6b6b;">' + "♥".repeat(battleState.hachiHP) + '</span></div>' : '';
  descArea.innerHTML =
    '<div class="battle-hud">' +
    '<div class="battle-ki">你的气：<span class="ki-num">' + battleState.playerKi + '</span></div>' +
    '<div class="battle-ki">哈基高的气：<span class="ki-num">' + battleState.hachiKi + '</span></div>' +
    hpDisplay +
    '<div class="battle-round">选择你的行动</div>' +
    '</div>';
  descArea.onclick = null;
}

function handleBattleAction(action) {
  if (!battleState.inBattle) return;

  // 检查哈气是否够气
  if (action === "哈气" && battleState.playerKi < 1) {
    showPopupModal("气不够！请先使用「呼吸」积累气。");
    return;
  }

  // 哈基高选择行动
  var hachiAction = hachiChoose();

  // 执行玩家行动
  if (action === "哈气") battleState.playerKi--;
  if (action === "呼吸") battleState.playerKi++;

  // 执行哈基高行动
  if (hachiAction === "哈气") battleState.hachiKi--;
  if (hachiAction === "呼吸") battleState.hachiKi++;

  // 判断结果
  var hachiSay = "";
  if (hachiAction === "格挡") hachiSay = "「防下了！！！」";
  else if (hachiAction === "哈气") hachiSay = "「天翔哈闪！！！」";
  else if (hachiAction === "呼吸") hachiSay = "「哈之呼吸法！！！」";

  var resultMsg = "";
  resultMsg += "【你的行动】" + action + "<br>";
  resultMsg += "【哈基高的行动】" + hachiAction + " " + hachiSay + "<br><br>";

  // 玩家哈气判定
  if (action === "哈气") {
    if (hachiAction === "格挡") {
      resultMsg += "哈基高格挡了你的攻击！毫发无伤。";
    } else {
      battleState.hachiHP--;
      if (battleState.hachiHP <= 0) {
        resultMsg += "哈基高被你的哈气击中！哈基高出局！";
        battleState.inBattle = false;
        showPopupModal(resultMsg);
        setTimeout(function() {
          unlockAchievement("hachi_king");
          var achCfg = ACHIEVEMENT_CONFIG["hachi_king"];
          showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
          if (gameState.hachiDifficulty === "hard") {
            setTimeout(function() {
              unlockAchievement("hachi_emperor");
              var achCfg2 = ACHIEVEMENT_CONFIG["hachi_emperor"];
              showPopupModal("成就解锁：" + achCfg2.icon + " " + achCfg2.name + "<br><small>" + achCfg2.desc + "</small>");
              setTimeout(function() { renderScene("duel_victory"); }, 400);
            }, 400);
          } else {
            setTimeout(function() { renderScene("duel_victory"); }, 400);
          }
        }, 400);
        return;
      } else {
        resultMsg += "哈基高被你的哈气击中！剩余血量：" + "♥".repeat(battleState.hachiHP) + "（" + battleState.hachiHP + "/" + (gameState.hachiDifficulty === "hard" ? 2 : 1) + "）";
      }
    }
  }

  // 哈基高哈气判定
  if (hachiAction === "哈气") {
    if (action === "格挡") {
      resultMsg += "你格挡了哈基高的攻击！毫发无伤。";
    } else {
      resultMsg += "你被哈基高的哈气击中！你出局了！";
      battleState.inBattle = false;
      showPopupModal(resultMsg);
      setTimeout(function() {
        unlockAchievement("not_strong");
        var achCfg = ACHIEVEMENT_CONFIG["not_strong"];
        showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
        setTimeout(function() { renderScene("duel_defeat"); }, 400);
      }, 400);
      return;
    }
  }

  // 双方都格挡或都呼吸
  if (action === "格挡" && hachiAction === "格挡") {
    resultMsg += "双方都摆出了格挡架势……无事发生。";
  }
  if (action === "呼吸" && hachiAction === "呼吸") {
    resultMsg += "双方都深吸一口气……各自蓄力。";
  }
  if (action === "呼吸" && hachiAction === "格挡") {
    resultMsg += "你深吸一口气，哈基高摆出格挡架势。";
  }
  if (action === "格挡" && hachiAction === "呼吸") {
    resultMsg += "哈基高深吸一口气，你摆出格挡架势。";
  }

  showPopupModal(resultMsg);
  updateBattleHUD();
}

function hachiChoose() {
  var options = [];
  // 格挡和呼吸始终可选
  options.push("格挡");
  options.push("呼吸");
  // 有气才能哈气
  if (battleState.hachiKi >= 1) {
    options.push("哈气");
  }
  return options[Math.floor(Math.random() * options.length)];
}

// ===== 游玩提示 =====
function showTips() {
  showPopupModal("亚嘞亚嘞，居然选择游玩这款游戏吗，真是有品呢……<br><br>本游戏没有做任何网络优化，图片加载稍慢可能会影响游戏体验望大家体谅……<br><br>本游戏没有修复任何bug因为作者认为那是游戏体验的一部分……<br><br>可以先尝试集齐我设计的所有成就，虽然我还没有设计多少……<br><br>本作预计想要制作真。galagame线（还没做，以及N条起义神秘猎奇搞笑诡异线路，这个游戏真的是我乱做的非常低质。<br><br>总之这是一个半成品的纯唐人剧情向(迫真）猎奇小游戏，请你一定不要认真玩这个游戏，希望你能有糟糕的游戏体验，再见。");
}

// ===== 梦境裂隙 =====
function openPortal() {
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  // 按标题分组场景
  var groups = {};
  var sceneIds = Object.keys(SCENE_CONFIG);
  for (var i = 0; i < sceneIds.length; i++) {
    var sid = sceneIds[i];
    var scene = SCENE_CONFIG[sid];
    var name = scene.name || "未命名";
    if (!groups[name]) groups[name] = [];
    groups[name].push({ id: sid, name: name });
  }

  var html = '<div class="modal"><div class="modal-header">🌀 梦境裂隙</div>';
  html += '<div class="modal-body">';

  // 精选小游戏
  html += '<div class="portal-games">';
  html += '<div class="portal-games-title">🎮 精选小游戏</div>';
  html += '<div class="portal-games-list">';

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();renderScene(\'alien_game\');">';
  html += '<span class="game-icon">👽</span>外星人石头剪刀布</button>';

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();renderScene(\'hermit_difficulty\');">';
  html += '<span class="game-icon">⚔️</span>哈基高御前决斗</button>';

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();renderScene(\'chem_lab_difficulty\');">';
  html += '<span class="game-icon">🧪</span>大脚鸡化学决斗</button>';

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();renderScene(\'confucius_difficulty\');">';
  html += '<span class="game-icon">🌿</span>孔子像吃草</button>';

  html += '<button class="portal-game-btn" id="portal-sandbox-btn">';
  html += '<span class="game-icon">🏆</span>沙盘决斗</button>';

  html += '</div></div>';

  html += '<input class="portal-search" id="portal-search-input" type="text" placeholder="搜索场景名称或ID..." autocomplete="off">';
  html += '<div class="portal-list" id="portal-list">';

  var groupNames = Object.keys(groups);
  for (var g = 0; g < groupNames.length; g++) {
    var gname = groupNames[g];
    var scenes = groups[gname];
    html += '<div class="portal-group" data-group="' + gname + '"><div class="portal-group-name">' + gname + '</div>';
    for (var s = 0; s < scenes.length; s++) {
      var sc = scenes[s];
      html += '<button class="portal-scene-btn" data-scene="' + sc.id + '" data-name="' + gname + '">' + gname + '<span class="portal-scene-id">' + sc.id + '</span></button>';
    }
    html += '</div>';
  }

  html += '</div></div>';
  html += '<div class="modal-footer"><button class="modal-close-btn" id="portal-close-btn">关 闭</button></div></div>';
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  // 搜索功能
  var searchInput = overlay.querySelector("#portal-search-input");
  searchInput.addEventListener("input", function() {
    var query = searchInput.value.toLowerCase().trim();
    var groups = overlay.querySelectorAll(".portal-group");
    groups.forEach(function(group) {
      var btns = group.querySelectorAll(".portal-scene-btn");
      var visible = false;
      btns.forEach(function(btn) {
        var name = (btn.dataset.name || "").toLowerCase();
        var sceneId = (btn.dataset.scene || "").toLowerCase();
        if (!query || name.indexOf(query) !== -1 || sceneId.indexOf(query) !== -1) {
          btn.style.display = "";
          visible = true;
        } else {
          btn.style.display = "none";
        }
      });
      group.style.display = visible ? "" : "none";
    });
  });

  // 绑定场景按钮点击
  overlay.querySelectorAll(".portal-scene-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var sceneId = btn.dataset.scene;
      overlay.remove();
      stopTypewriter();
      renderScene(sceneId);
    });
  });

  // 沙盘决斗按钮：弹出难度选择
  overlay.querySelector("#portal-sandbox-btn").addEventListener("click", function(e) {
    e.stopPropagation();
    var gamesList = overlay.querySelector(".portal-games-list");
    gamesList.innerHTML = '<div style="text-align:center;color:#e8d5b7;padding:8px 0;font-size:13px;">选择沙盘难度</div>' +
      '<button class="portal-game-btn" style="font-size:12px;" onclick="event.stopPropagation();var ov=this.closest(\'.modal-overlay\');ov.remove();startSandboxGame(\'normal\');">普通（3×4棋盘，10分获胜）</button>' +
      '<button class="portal-game-btn" style="font-size:12px;" onclick="event.stopPropagation();var ov=this.closest(\'.modal-overlay\');ov.remove();startSandboxGame(\'hard\');">困难（4×4棋盘，17分获胜）</button>' +
      '<button class="portal-game-btn" style="font-size:12px;background:rgba(255,255,255,0.05);color:rgba(232,213,183,0.6);" onclick="event.stopPropagation();openPortal();">返回</button>';
  });

  overlay.querySelector("#portal-close-btn").addEventListener("click", function() { overlay.remove(); });
  overlay.addEventListener("click", function(e) { if (e.target === overlay) overlay.remove(); });
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
  gameState.toiletStayCount = 0;
  renderScene("opening_1");
}

// ===== 预加载所有场景图片（带状态追踪） =====
var imageCache = {};
(function() {
  var sceneIds = Object.keys(SCENE_CONFIG);
  for (var i = 0; i < sceneIds.length; i++) {
    var imgPath = SCENE_CONFIG[sceneIds[i]].img;
    if (imgPath && !imageCache[imgPath]) {
      imageCache[imgPath] = { loaded: false };
      var preImg = new Image();
      preImg.onload = function() {
        var key = this.getAttribute("data-key");
        if (imageCache[key]) imageCache[key].loaded = true;
      };
      preImg.onerror = function() {
        var key = this.getAttribute("data-key");
        if (imageCache[key]) imageCache[key].loaded = true;
      };
      preImg.setAttribute("data-key", imgPath);
      preImg.src = imgPath;
    }
  }
})();