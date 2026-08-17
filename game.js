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
  first_meet:         { id: "first_meet",         name: "初遇", desc: "在教学楼一楼遇见了她", icon: "✨" },
  canteen_king:       { id: "canteen_king",       name: "抢饭大王", desc: "在食堂抢饭里抢到了超多的饭", icon: "🍚" },
  canteen_got_some:   { id: "canteen_got_some",   name: "好歹抢到饭了", desc: "在食堂抢饭里勉强带出了饭", icon: "🍛" },
  dream_eternal:      { id: "dream_eternal",      name: "梦境永续", desc: "选择永远留在了梦境里", icon: "🌌" },
  band_king:          { id: "band_king",          name: "乐队之王", desc: "在乐队大赛中击败了AI经纪人", icon: "👑" },
  bocchi_band:        { id: "bocchi_band",        name: "结成乐队吧！", desc: "签下了社恐吉他英雄后藤独", icon: "🎸" },
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
      { text: "去教学楼吧", target: "teaching_1f" },
      { text: "欸……左边的小树林里似乎有异动", target: "path_to_grove" },
      { text: "小学的十字路口那里似乎发出了点动静……", target: "hermit_1" },
      { text: "去拜访孔子像", target: "confucius_1" },
      { text: "我要去实验楼耍耍！！！", target: "lab_floor" },
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
    id: "pig_3", name: "神秘猪猪拉屎之地", img: "pig2.jpg",
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
    id: "drunk", name: "喝大了", img: "window.jpg",
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
    id: "hermit_2", name: "一位隐士的地方", img: "hermit.jpg",
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
    id: "hermit_duel_3", name: "一位隐士的地方", img: "walking2.png",
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
    id: "alien_taunt", name: "外星人", img: "alien_1.jpg",
    desc: "外星人：我要在你的头上拉屎！！！！！|（没绷住）|外星人：笑什么!!!我可是很严肃的！！！！！|呜.....哈哈哈哈哈哈......啊哈哈哈哈哈哈哈哈哈哈|外星人：气死我了！！！你真的惹怒我了，我要和你决斗！！！|决斗啥啊|外星人：石头剪刀布|。。。sb|外星人：我很认真的啊喂！！！！|好好好我陪你玩我陪你玩",
    shakeHard: true,
    autoNext: "alien_game",
    buttons: []
  },
  alien_win: {
    id: "alien_win", name: "外星人", img: "alien_1.jpg",
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
    id: "backrooms_right", name: "后室level0", img: "backrooms_walk.jpg",
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
    id: "grove_arrive", name: "去小树林的路上", img: "path_to_grove.jpg",
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
    id: "basement", name: "地下室", img: "basement_door.jpg",
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
    id: "strange_place_2", name: "奇怪的地方", img: "strange_place_1.jpg",
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
    id: "strange_place_4", name: "奇怪的地方", img: "strange_place_1.jpg",
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
    id: "confucius_2", name: "孔子像", img: "confucius_1.jpg",
    desc: "我正在向你靠近呢，孔子|居然一点都不后退吗，真是胆大呢",
    autoNext: "confucius_3",
    buttons: []
  },
  confucius_3: {
    id: "confucius_3", name: "孔子像", img: "confucius_1.jpg",
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
    id: "chem_lab_1", name: "化学实验室", img: "chem_lab_end.jpg",
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
  // 教学楼一楼（初遇剧情序列，由专用handler渲染）
  teaching_1f: {
    id: "teaching_1f", name: "教学楼一楼", img: "e1eb7eb8d869b6d61fd38988bf69f750.jpg",
    desc: "",
    buttons: []
  },
  // 食堂抢饭小游戏（由专用handler渲染）
  canteen_game: {
    id: "canteen_game", name: "食堂抢饭", img: "",
    desc: "",
    buttons: []
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
  round: 1,                    // 当前回合数
  lastPlayerAction: null,      // 玩家上回合行动（趁虚而入判断用）
  hachiPlannedAction: null,    // 哈基高本回合预定行动（HUD倾向提示用）
  hachiMindRead: false,        // 困难模式：本回合是否触发读心
};

// 检查是否有某道具
function hasItem(itemId) { return gameState.inventory.indexOf(itemId) !== -1; }

// 检查是否解锁某成就
function hasAchievement(achId) { return gameState.achievements.indexOf(achId) !== -1; }

// ===== 更新日志配置 =====
var CHANGELOG = [
  { version: "v1.5.78", date: "2026-08-17", items: [
    "新增小游戏'乐队大赛'（传送门精选直达🎸）：与AI经纪人10回合经营对抗，比拼总知名度",
    "玩家150金币 vs AI经纪人300金币开局（AI资金雄厚需靠策略取胜），每回合市场随机刷新5名乐手（特殊艺人每回合最多2个，全游戏唯一，签完不补）",
    "8位特殊艺人(数值无视160上限)：山田凉60金180能力150稳定(50%偷50金!)/伊地知虹夏140金172/166(全队稳定+14)/广井菊里60金170/168(喝醉能力-120)/喜多郁代150金166/156(知名度+30%)/后藤独100金190能力80稳定/丰川祥子120金177/58唱腔80(乐队粉碎机：每3回合40%逼退一名队员25%自己退队)/高松灯115金140/82唱腔95(专职主唱)/千早爱音100金183/85唱腔78(全面强力无短板)",
    "普通艺人随机生成（日式名池50个+唐人整活名3个，位置：吉他手×2/鼓手/贝斯手/主唱），价格≈(能力+稳定)/2，能力随回合成长(r1:30-60→r10:111-141封顶160)，20%概率附带特殊能力",
    "搞怪perk池(11种)：练习狂(演出能力+6)/气氛担当(全队稳定+4)/偶像气质(金币+30%)/老油条(发挥下限0.9)/富二代(返10金)/天才型(入队能力+15)/赌狗之魂(50%收益翻倍50%减半)/干饭王(入队+20能力每回合吃3金)/人来疯(编制达成发挥×1.5)/摇滚巨星(知名度+50%)/甩手掌柜(每回合分红+5金)",
    "成长系统：队员每次演出后35%概率能力+2~4，练得越久越强（特殊艺人可突破160上限，普通艺人封顶160）",
    "标准编制加成：凑齐吉他×2+鼓+贝斯全员收益+30%；基础收益已下调(金币0.55/知名度0.4系数)",
    "Live House专场：演出前花20金币安排，本轮金币收益×1.5（AI也有30%概率办）",
    "随机事件：每回合15%概率触发街头星探(+知名度)/器材损坏(-金币)/粉丝应援(+金币)",
    "转会系统：签约阶段可按20%签约价卖出队员腾编制换血",
    "主唱位：签约阶段点🎙指派主唱——唱腔仅在担任主唱时生效：知名度按能力×50%+唱腔计算；专职主唱无惩罚，兼任稳定-12",
    "上场限制：每场最多5名乐手（主唱优先入选，其余按能力+稳定自动选最强，替补不演出不成长；AI同规则）",
    "AI经纪人智商优化：①卖弱买强(能力<90自动换血回收资金) ②攒钱策略(无特殊艺人时55%概率存钱等大牌) ③特殊艺人优先级(灯>爱音>后藤>虹夏>喜多>广井>祥子>山田凉——AI懂风险) ④编制意识(优先补缺失位置再按性价比)，每回合最多签2名普通艺人且预留30金运营",
    "新成就：🏆乐队之王(击败AI经纪人)、🎸结成乐队吧！(签下后藤独)",
    "修复游戏中跳回对话框的bug：打字机'点击继续/快进'onclick与800ms自动跳转定时器残留，从传送门进小游戏后点HUD/倒计时到点会把玩家拉回旧剧情——stopTypewriter现同时清除onclick，renderScene把清理移到函数最顶部覆盖全部小游戏早退分支",
  ]},
  { version: "v1.5.77.3", date: "2026-08-17", items: [
    "图片精简第四批：删除6张，项目图片降至97张（含3个代码文件总计恰好100个文件，满足GitHub单次上传限制）",
    "猪猪线：pig_3'越来越多了'沿用pig2（画面递进自然）",
    "奇怪的地方线：strange_place_2'门消失了'/strange_place_4'好像之前来过'沿用strange_place_1——复用同图反而强化既视感与无限循环氛围",
    "化学实验室：chem_lab_1入口沿用chem_lab_end（入口与主场景画面有变化，文案本就吐槽是网图）",
    "喝大了：drunk'杭二学生'沿用window厕所窗外图（头晕状态延续）",
    "地下室：basement'要不要下去呢'沿用basement_door门口图（语义更贴合）",
  ]},
  { version: "v1.5.77.2", date: "2026-08-17", items: [
    "图片精简第三批：删除6张，项目图片降至103张",
    "文海少年科技院场景整体移除（入口按钮+2场景+2图片，无成就绑定无副作用）",
    "孔子像线：confucius_2/3沿用confucius_1，保留confucius_4（祭品没了名场面）",
    "沙漠溜达猪线：grove_arrive走路过渡沿用path_to_grove",
    "后室线：backrooms_right沿用backrooms_walk（同为level0走廊）",
  ]},
  { version: "v1.5.77.1", date: "2026-08-17", items: [
    "图片精简第二批：删除walking1.jpg/duel1.jpg/alien_2.jpg共3张",
    "哈气大师线：走路过渡沿用隐士入口图，'我避你锋芒'复用walking2",
    "外星人线：统一使用alien_1.jpg（嘲讽/胜利/石头剪刀布小游戏）",
    "项目图片降至109张，剧情文案与演出效果不变",
  ]},
  { version: "v1.5.77", date: "2026-08-17", items: [
    "教学楼一楼'初遇'剧情线完整开放：闲逛→揉眼模糊渐清晰→她登场→一起逛学校",
    "续篇'跟上去'：二楼糖人二选一（吃蜜糖/甜话被揍）→旧教室变回原样→坐回当年座位",
    "续篇2'一起上课'：课件竟是初中的→晕倒黑屏→散心→'永远留在这里'二选一→管理手册被电→摄像头→饮水机自动出水悬疑→空走廊→瞥见'同学们'她慌张否认",
    "新增亭子剧情（孔子像吃草梗）与食堂剧情（帮你带两份饭、被推入食堂）",
    "新增小游戏'食堂抢饭'：35秒限时拖拽搬饭，10个幽灵同学挤撞；≥14分抢饭大王/7-13分好歹抢到饭了/<7分她让你再抢一次（无限重试）",
    "终章'天台'：她展示'让你永远留在这里的东西'→二选一分支",
    "真结局线'是什么'：选择留下→解锁成就'梦境永续'→新闻弹窗揭示真相（感谢游玩）",
    "反抗线'我不要留在这里'：戳破虚幻→???登场'执迷不悟'→最终BOSS战",
    "新增最终BOSS战'执念鱿鱼'：黑色鱿鱼10血三阶段（触手冲撞/墨雾遮视野/狂暴弹幕），撞击造成伤害，锁血2点+叙事提示，80秒后终局环形弹幕必收尾",
    "濒死序列：0血不判负→美好回忆闪回→她的道歉送别→领域坍塌→完成最后一击→疯狂闪烁→结束画面回开始界面",
    "打字机体验优化：打字中单击快进整句；新增全局'⏭跳过'按钮一键跳过全部文案",
    "成就页分组：🌙梦之旅途/⚔️决斗与小游戏/😈整活与隐藏，各组显示解锁进度",
    "食堂抢饭、执念鱿鱼决战加入梦境裂隙精选小游戏",
    "修复：教学楼/天台/鱿鱼对话残留选项按钮、'完成最后一击'需点两次、BOSS战0血黑屏遮字等bug",
    "图片精简：删除7张单句过渡图（揉眼/我要拿了/走路×2/带逛提议/她催促/空走廊/旧教室），改为复用相邻图或纯文字，剧情节奏不变",
  ]},
  { version: "v1.5.76.98", date: "2026-08-17", items: [
    "BOSS战锁血叙事引导：鱿鱼锁血后HUD显示???台词'斩不断的……执念，与你同在'+伤害无效提示",
    "BOSS战终局机制：战斗超过80秒触发'???：挣扎够了吗'，360°旋转环形弹幕收尾，战斗不再无限拖延",
    "成就页分组显示：🌙梦之旅途/⚔️决斗与小游戏/😈整活与隐藏，各组显示解锁进度（如8/16），组内已解锁在前",
    "执念鱿鱼决战加入梦境裂隙精选小游戏（🦑），可随时直接挑战",
  ]},
  { version: "v1.5.76.97", date: "2026-08-17", items: [
    "修复天台选择后、鱿鱼对话期间残留选项按钮误显示的bug（点击继续不再显示已清空的按钮区）",
    "取消BOSS战玩家0血时的黑屏，濒死文案直接可见",
    "鱿鱼模型改为黑色（红色眼睛+亮色核心），墨弹加亮描边保证可见",
    "玩家撞击鱿鱼本体即可造成伤害（0.55秒冷却，仍锁血2点）",
    "三阶段墨弹密度提升：P1 0.9s双发/P2 0.55s三发/P3 0.32s四连扇形",
    "修复'完成最后一击'需点击两次的bug：按钮onclick清空按钮区，防止打字机'点击继续'复活旧按钮（同类隐患一并修复：糖人二选一/上课二选一）",
  ]},
  { version: "v1.5.76.96", date: "2026-08-17", items: [
    "终章剧情：食堂结局后她带你上天台，展示'让你永远留在这里的东西'",
    "新增真结局线'是什么'：愿意留下来——解锁成就'梦境永续'，新闻弹窗揭示真相（感谢游玩）",
    "新增反抗线'我不要留在这里'：戳破梦境虚幻，???登场宣布执念坍塌",
    "新增最终BOSS战：执念鱿鱼（10血）vs 玩家（5血），触屏拖拽移动",
    "BOSS三阶段：P1触手冲撞+慢速墨弹 / P2墨雾干扰视野+双触手拍打+弹幕加密 / P3狂暴高速横扫+大量弹幕",
    "鱿鱼血量锁定2点不再下降；玩家0血不判负——进入'濒死'剧情（黑屏+美好回忆闪回）",
    "濒死后她道歉送别，领域坍塌，'完成最后一击'（疯狂闪烁）→ 结束画面 → 回到开始界面",
  ]},
  { version: "v1.5.76.95", date: "2026-08-17", items: [
    "开放教学楼一楼路线：校门口'去教学楼吧'按钮正式可用",
    "新增初遇剧情：教学楼闲逛→眼睛痒→揉眼后屏幕模糊渐清晰→她登场",
    "新增模糊渐清晰特效：揉眼后图片区从模糊逐渐恢复清晰",
    "她登场时屏幕震动并解锁新成就'初遇'",
    "初遇对话剧情×9阶段：她等你回来、带主角逛学校，结尾'跟上去'按钮待续",
    "修复教学楼一楼剧情中会显示校门口残留按钮的bug（进入序列时清空按钮区）",
    "初遇剧情续篇'跟上去'：走路→到二楼→嘴甜二选一（吃蜜糖/糖人甜话）",
    "选择'糖人甜话'触发被揍剧情：切图+屏幕震动+道歉原谅后切回原图",
    "续篇结尾：旧教室变回原样对话→坐回当年座位，显示'待续'按钮",
    "续篇2'一起上课'：她想和你待近一点→上课发现讲的是初中内容→晕倒",
    "晕倒时屏幕突然全黑，黑屏2秒后恢复（复用fade-overlay黑幕）",
    "她打断晕倒话题带你去散心，新增'你想不想永远留在这里'二选一（当然想/为什么突然说这个）",
    "管理手册拿取被电（震动+好痛）、发现摄像头、被扶到饮水机旁（黑屏切换）",
    "饮水机自动出水（震动），她称是自己开的但明明在厕所——悬疑氛围结尾'拿你没办法...下楼吧'",
    "下楼续段：空无一人的走廊→走路→瞥见'同学们'的身影→她慌张否认'你看错啦'催促跟上——悬疑感加深",
    "新增亭子剧情（标题'亭子'）：文雅感觉/孔子像吃草梗/一起去食堂",
    "新增食堂剧情（标题'食堂'）：她不进去、求你带两份饭、把你推入食堂",
    "新增'食堂抢饭'小游戏：35秒限时，拖拽/滑动控制角色（禁止双指缩放）",
    "玩法：右侧打饭窗口每2秒出饭菜（黄点），搬回左侧大门积分，最多同时带2份；10个白色幽灵NPC乱飘会把玩家挤开；游戏中剧情图片隐藏不占空间",
    "结算：≥14分流程A+成就'抢饭大王'，7~13分流程B+成就'好歹抢到饭了'，不足7分她要求回去重新打饭再来一次",
    "食堂抢饭已加入梦境裂隙精选小游戏",
  ]},
  { version: "v1.5.76.94", date: "2026-08-16", items: [
    "哈基高也能解放誓约胜利之哈：蓄满3气后按局势概率发动，破盾——无视玩家格挡直接命中",
    "新增双誓约对轰：双方同回合释放誓约胜利之哈会相互抵消，气尽数耗散——用你的誓约对冲它的誓约！",
    "玩家0气且哈基高蓄满时解放概率更高（趁虚而入+15%，封顶75%）",
    "HUD新增红色脉冲警告：哈基高气息蓄满时提示誓约随时降临；其发动当回合必显准确预警",
    "困难模式读心强化：看穿玩家格挡/呼吸且气已蓄满时，直接解放誓约反制",
    "规则说明更新：补充誓约胜利之哈与对轰反制手段",
  ]},
  { version: "v1.5.76.93", date: "2026-08-16", items: [
    "御前决斗新增蓄力爆发：积满3气解锁'誓约胜利之哈'，造成2点伤害但消耗全部气",
    "哈基高AI感知3气威胁：玩家蓄满气时格挡概率额外+15%（封顶80%）",
    "御前决斗新增战斗特效：哈气命中闪白震动、玩家受击剧震、读心反制紫闪",
    "哈基高台词气泡化：台词以气泡叠在图片区展示，结算弹窗延后弹出",
    "化学决斗新增换牌机制：每回合可弃掉全部手牌重抽1次",
    "化学决斗新增元素连击：硫酸+酒精连锁反应、热蒸汽+烧杯骤冷碎裂、CO2+热蒸汽窒息加深，均额外+1伤害",
    "手牌中存在可触发combo的牌时显示连击提示，换牌后实时刷新",
    "大脚鸡AI性格随机化：每局随机攻击型/防御型/捣乱型，按性格加权出牌并在HUD显示",
  ]},
  { version: "v1.5.76.92", date: "2026-08-16", items: [
    "哈基高AI升级为策略型：危险预警——玩家有气时格挡概率55%起，玩家0气时绝不格挡趁机蓄力",
    "趁虚而入：玩家刚耗光气且哈基高有气时，哈气概率大幅提高（最高75%）",
    "困难模式读心：20%概率看穿玩家本回合行动并针对性反制，体现大师风范",
    "台词情境化：格挡成功/扑空/进攻/蓄力/读心各有不同台词池，危险期格挡说'亚嘞亚嘞，被我看穿了呢'",
    "战斗HUD新增回合数显示与哈基高行动倾向提示（读心时显示'深不可测'）",
  ]},
  { version: "v1.5.76.91", date: "2026-08-16", items: [
    "沙盘对决规则重构：分数改为实时计算，地块1分/高价值2分/精摆翻倍",
    "新增高价值地块：每局随机2个★地，本体2分，精摆后4分",
    "新增独立'夺取'行动：抢夺接壤敌方格并摧毁其精摆，与铺设分离",
    "防御惩罚改为'震碎'：夺取方失败时随机失去一块领地",
    "棋盘尺寸调整：普通4×4（10分获胜），困难4×5（15分获胜）",
    "企鹅狗AI性格随机化：每局随机激进夺地或保守精摆",
    "困难AI改为策略型：优先抢离玩家近的格子阻止扩张，按收益选夺取目标",
    "30回合上限，超时按分数判定，平局判企鹅狗胜",
    "新增开局规则说明弹窗、战斗日志面板、分数进度条、回合数显示",
    "精摆格金色发光边框，格子显示实时价值，夺取时闪烁动画",
    "新增'退出'按钮，中途可放弃沙盘对决",
    "精选小游戏移至梦境裂隙，背包新增控制台可输入道具名直接获取",
    "修复沙盘底部按钮被挤出屏幕无法点击的问题，格子缩小为42px",
    "企鹅狗行动弹窗提示（红色底），困难模式移除双倍行动机制",
  ]},
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
var typewriterSession = null;  // 当前打字机会话参数（跳过按钮用）


// 渲染当前场景
function renderScene(sceneId) {
  // 切场景时若食堂抢饭/BOSS战仍在运行，强制停止并清理画布
  stopCanteenGame();
  stopBossFight();
  stopBandGame();
  // 【必须最先执行】停止打字机+清自动跳转定时器+清"点击继续"onclick
  // （覆盖下方所有小游戏早退分支，防止从传送门进小游戏后残留定时器/点击把玩家拉回旧剧情对话框）
  stopTypewriter();
  if (pendingAutoJumpTimer) {
    clearTimeout(pendingAutoJumpTimer);
    pendingAutoJumpTimer = null;
  }
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

  // 食堂抢饭小游戏
  if (sceneId === "canteen_game") {
    startCanteenGame();
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
  // 教学楼一楼 → 初遇剧情
  if (sceneId === "teaching_1f") {
    renderTeaching1FSequence();
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
  typewriterSession = null;
  // 清除残留的"点击继续/快进"onclick：防止从传送门进入小游戏后，
  // 点击HUD（描述区）触发旧对话的跳转，跳回剧情对话框
  var descArea = document.getElementById("description-area");
  if (descArea) descArea.onclick = null;
  hideSkipBtn();
}

// ===== 打字机跳过按钮 =====
function ensureSkipBtn() {
  var b = document.getElementById("skip-btn");
  if (b) return b;
  b = document.createElement("button");
  b.id = "skip-btn";
  b.textContent = "⏭ 跳过";
  b.onclick = function(e) { e.stopPropagation(); skipTypewriter(); };
  document.getElementById("game-container").appendChild(b);
  return b;
}
function showSkipBtn() { ensureSkipBtn().style.display = "block"; }
function hideSkipBtn() {
  var b = document.getElementById("skip-btn");
  if (b) b.style.display = "none";
}
// 跳过：立即显示全部文案并走完成流程（序列剧情的轮询会自动接续）
function skipTypewriter() {
  if (typewriterDone || !currentSentences.length) return;
  if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }
  currentSentenceIndex = currentSentences.length;
  currentCharIndex = 0;
  var descArea = document.getElementById("description-area");
  descArea.innerHTML = currentSentences.join("<br>");
  descArea.onclick = null;
  hideSkipBtn();
  var s = typewriterSession;
  typeNextChar(s ? s.autoNext : null, s ? s.autoJump : null, s ? s.getItem : null);
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
    img.src = "alien_1.jpg";
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

// ===== 大脚鸡性格AI配置 =====
// 卡牌分类（供性格权重选牌用）
var CHEM_CARD_CATEGORIES = {
  attack:  ["water_to_acid", "alcohol_bomb", "heat_tube", "beaker", "co2", "hot_crucible"],
  defense: ["goggles", "shield"],
  heal:    ["water_wash", "cooling_tube"],
  control: ["tell_teacher"],
  chaos:   ["violate_rules"],
};
// 三种性格：aggressive攻击型 / defensive防御型 / chaos捣乱型
var ENEMY_PERSONA_CONFIG = {
  aggressive: { hint: "🐔 大脚鸡气势汹汹，攻势凌厉！",     weights: { attack: 65, defense: 15, heal: 10, control: 5, chaos: 5 } },
  defensive:  { hint: "🐔 大脚鸡摆出防御架势，稳扎稳打！", weights: { attack: 25, defense: 35, heal: 25, control: 10, chaos: 5 } },
  chaos:      { hint: "🐔 大脚鸡疯疯癫癫，不知想干什么……", weights: { attack: 30, defense: 10, heal: 10, control: 10, chaos: 40 } },
};

// 按当前性格加权选一张大脚鸡的牌（excludeChaos=true时排除违反实验规章）
function pickEnemyCard(excludeChaos) {
  var persona = ENEMY_PERSONA_CONFIG[chemDuelState.enemyPersona];
  var w = persona.weights;
  var pool = [
    ["attack", w.attack], ["defense", w.defense], ["heal", w.heal],
    ["control", w.control], ["chaos", excludeChaos ? 0 : w.chaos],
  ];
  var total = 0;
  for (var i = 0; i < pool.length; i++) total += pool[i][1];
  var r = Math.random() * total;
  var chosenCat = "attack";
  for (var j = 0; j < pool.length; j++) {
    if (r < pool[j][1]) { chosenCat = pool[j][0]; break; }
    r -= pool[j][1];
  }
  var ids = CHEM_CARD_CATEGORIES[chosenCat];
  var cardId = ids[Math.floor(Math.random() * ids.length)];
  for (var k = 0; k < CHEM_CARDS.length; k++) {
    if (CHEM_CARDS[k].id === cardId) return CHEM_CARDS[k];
  }
  return CHEM_CARDS[0];
}

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
    enemyPersona: ["aggressive", "defensive", "chaos"][Math.floor(Math.random() * 3)], // 大脚鸡性格（每局随机）
    lastPlayerCardId: null,   // 玩家上回合使用的卡牌（元素连击判定用）
    redrewThisTurn: false,    // 本回合是否已换牌
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
  ds.redrewThisTurn = false;

  // 大脚鸡按性格加权选牌（噩梦模式2张，且不抽违反实验规章）
  var isNightmare = gameState.chemDifficulty === "nightmare";
  var enemyCards = [pickEnemyCard(isNightmare)];
  if (isNightmare) {
    enemyCards.push(pickEnemyCard(true));
  }
  var personaHint = ENEMY_PERSONA_CONFIG[ds.enemyPersona].hint;

  // 玩家被眩晕：跳过出牌，敌方直接行动
  if (ds.playerStunned) {
    ds.playerStunned = false;
    var stunHTML = "<div style=\"display:flex;justify-content:space-between;padding:8px 0;font-size:14px;font-weight:600;\">"
      + "<span style=\"color:#ff6b6b;\">大脚鸡 HP: " + "♥".repeat(ds.enemyHP) + " " + ds.enemyHP + "</span>"
      + "<span style=\"color:#5cb85c;\">玩家 HP: " + "♥".repeat(ds.playerHP) + " " + ds.playerHP + "</span>"
      + "</div>"
      + "<div style=\"text-align:center;color:#ffa940;font-size:12px;margin-bottom:2px;\">" + personaHint + "</div>"
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

  // 抽3张牌（drawHand独立成函数，供换牌机制重抽）
  function drawHand() {
    var shuffled = CHEM_CARDS.slice().sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, 3);
  }
  var playerHand = drawHand();
  var handHas = function(id) {
    return playerHand.some(function(c) { return c.id === id; });
  };

  // 渲染HP + 性格提示 + 连击提示
  var nightmareLabel = isNightmare ? " <span style=\"color:#ff4444;font-size:11px;\">噩梦</span>" : "";
  var hpHTML = "<div style=\"display:flex;justify-content:space-between;padding:8px 0;font-size:14px;font-weight:600;\">"
    + "<span style=\"color:#ff6b6b;\">大脚鸡 HP: " + "♥".repeat(ds.enemyHP) + " " + ds.enemyHP + nightmareLabel + "</span>"
    + "<span style=\"color:#5cb85c;\">玩家 HP: " + "♥".repeat(ds.playerHP) + " " + ds.playerHP + "</span>"
    + "</div>";
  hpHTML += "<div style=\"text-align:center;color:#ffa940;font-size:12px;margin-bottom:2px;\">" + personaHint + "</div>";
  if (ds.playerSulfuric) {
    hpHTML += "<div style=\"text-align:center;color:#ff6600;font-size:12px;margin-bottom:4px;\">⚠ 硫酸腐蚀：每次受伤+1</div>";
  }
  // 元素连击提示：手牌中存在可触发combo的牌时给出暗示（换牌后实时刷新）
  var comboHint = "";
  if (ds.enemySulfuric && handHas("alcohol_bomb")) {
    comboHint = "💡 敌方带着硫酸腐蚀——酒精炸弹会引发连锁反应！";
  } else if (ds.lastPlayerCardId === "heat_tube" && handHas("beaker")) {
    comboHint = "💡 试管余温未散——投掷烧杯会骤冷碎裂！";
  } else if (ds.lastPlayerCardId === "co2" && handHas("heat_tube")) {
    comboHint = "💡 空气中CO2浓度很高——热蒸汽会令人窒息！";
  }
  hpHTML += "<div id=\"chem-combo-hint\" style=\"text-align:center;color:#9fd6ff;font-size:12px;margin-bottom:4px;\">" + comboHint + "</div>";
  hpHTML += "<div style=\"text-align:center;font-size:15px;color:#e8d5b7;margin:6px 0;\">第 " + ds.turn + " 回合 — 选择一张卡牌</div>";
  descArea.innerHTML = hpHTML;

  // 渲染卡牌（手牌放在独立容器中，换牌时只替换容器内容）
  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";
  actionsArea.style.flexDirection = "column";
  actionsArea.style.gap = "6px";

  var handDiv = document.createElement("div");
  handDiv.id = "chem-hand";
  handDiv.style.display = "flex";
  handDiv.style.flexDirection = "column";
  handDiv.style.gap = "6px";
  actionsArea.appendChild(handDiv);

  function renderChemHand(hand) {
    handDiv.innerHTML = "";
    hand.forEach(function(card) {
      var btn = document.createElement("button");
      btn.className = "action-btn";
      btn.style.textAlign = "left";
      btn.style.padding = "8px 12px";
      btn.style.fontSize = "13px";
      btn.innerHTML = "<span style=\"font-size:16px;\">" + card.icon + "</span> <b>" + card.name + "</b><br><span style=\"font-size:11px;color:#aaa;\">" + card.desc + "</span>";
      btn.onclick = function() {
        playChemDuelCard(card, enemyCards);
      };
      handDiv.appendChild(btn);
    });
  }
  renderChemHand(playerHand);

  // 换牌按钮：弃掉全部手牌重抽，每回合限1次
  var redrawBtn = document.createElement("button");
  redrawBtn.className = "action-btn";
  redrawBtn.id = "chem-redraw-btn";
  redrawBtn.style.textAlign = "center";
  redrawBtn.style.padding = "6px 12px";
  redrawBtn.style.fontSize = "12px";
  redrawBtn.style.background = "rgba(159, 214, 255, 0.12)";
  redrawBtn.style.borderColor = "rgba(159, 214, 255, 0.4)";
  redrawBtn.style.color = "#9fd6ff";
  redrawBtn.textContent = "🔄 换牌（弃掉全部手牌重抽，每回合限1次）";
  redrawBtn.onclick = function() {
    if (ds.redrewThisTurn) return;
    ds.redrewThisTurn = true;
    redrawBtn.disabled = true;
    redrawBtn.style.opacity = "0.5";
    redrawBtn.textContent = "🔄 已换牌";
    playerHand = drawHand();
    renderChemHand(playerHand);
    // 刷新连击提示（基于新手牌）
    var hintDiv = document.getElementById("chem-combo-hint");
    if (hintDiv) {
      var newHint = "";
      if (ds.enemySulfuric && handHas("alcohol_bomb")) {
        newHint = "💡 敌方带着硫酸腐蚀——酒精炸弹会引发连锁反应！";
      } else if (ds.lastPlayerCardId === "heat_tube" && handHas("beaker")) {
        newHint = "💡 试管余温未散——投掷烧杯会骤冷碎裂！";
      } else if (ds.lastPlayerCardId === "co2" && handHas("heat_tube")) {
        newHint = "💡 空气中CO2浓度很高——热蒸汽会令人窒息！";
      }
      hintDiv.textContent = newHint;
    }
  };
  actionsArea.appendChild(redrawBtn);

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

  // === 元素连击（combo）：牌与牌之间的配合触发额外效果 ===
  if (!ds.violateRules) {
    // 连锁反应：敌方处于硫酸腐蚀时引爆酒精
    if (ds.enemySulfuric && playerCard.id === "alcohol_bomb") {
      enemyDmg += 1;
      log.push("🔥 连锁反应！硫酸遇上酒精剧烈燃烧，额外+1伤害！");
    }
    // 骤冷碎裂：上回合热蒸汽加热，本回合投掷烧杯
    if (ds.lastPlayerCardId === "heat_tube" && playerCard.id === "beaker") {
      enemyDmg += 1;
      log.push("❄️ 骤冷碎裂！余温未散的烧杯应声炸裂，额外+1伤害！");
    }
    // 窒息加深：上回合CO2浓度升高，本回合热蒸汽无处可逃
    if (ds.lastPlayerCardId === "co2" && playerCard.id === "heat_tube") {
      enemyDmg += 1;
      log.push("🌫️ 窒息加深！高浓度CO2中热蒸汽令人窒息，额外+1伤害！");
    }
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

  // 记录玩家本回合卡牌（供下回合元素连击判定；眩晕回合不计入）
  if (playerCard.id !== "stunned") {
    ds.lastPlayerCardId = playerCard.id;
  }

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
        startTypewriter("企鹅狗：跟我一起来摆一下吧|是战斗吗.....我不会低头的|企鹅狗：你这家伙...真是满脑子都只想着战斗呢|企鹅狗：这里……原本是让人把心里的东西摆出来的地方哦|塔塔开！！！！！", null, null, null);
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

// 教学楼一楼 → 初遇剧情序列（无聊闲逛 → 眼睛痒揉一揉 → 模糊渐清晰 → 她登场 → 对话 → 陪她逛学校）
function renderTeaching1FSequence() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }

  var scene = SCENE_CONFIG["teaching_1f"];
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
  // 清空并隐藏按钮区：防止打字机"点击继续"后把上一场景（校门口）残留的按钮重新显示出来
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  // 剧情序列：img为null表示沿用当前图片；meet=true时触发揉眼后模糊渐清晰+登场震动+成就
  var seq = [
    { img: null, text: "好无聊啊.....教学楼有什么好来的呢....|或者说....我来这个学校....都是在做什么呢.....|眼睛好痒....." },
    { img: null, text: "揉一揉吧" },
    { img: "e44953fe91bea8bd111de733bc3fca1e.jpg", meet: true, text: "她：喂！！！！！！|欸....欸？！|她：我等了你好久啦！|她：你终于舍得回来看我了......|（这.....我不是在做梦吧....）" },
    { img: "9091bd44e6712c44730b1c56ddb2d6b5.jpg", text: "她：怎么呆住了？" },
    { img: "5470a144d4233a4467c8e6a4d193688e.jpg", text: "她：是不是被本大人的美貌吓到啦？！|只是太久没见到你了而已|再见有点不适应..." },
    { img: "9091bd44e6712c44730b1c56ddb2d6b5.jpg", text: "她：什么嘛...这时候不该夸我好看吗|好好好,大小姐最好看了~" },
    { img: "5470a144d4233a4467c8e6a4d193688e.jpg", text: "她：嘿嘿....原谅你啦！|她：你一直过的不太好呢...|她：我得想想要去哪玩让你开心起来" },
    { img: "5470a144d4233a4467c8e6a4d193688e.jpg", text: "她：居然你好久没回来了...|她：我就带你到学校各处逛逛如何!|这算哪门子好主意....." },
    { img: "90c31247c5481f8b40b86751ba451ed2.jpg", text: "她：诶诶？我想了好久的....|明明是刚想到的吧......|她：由不得你愿不愿意,现在就陪我去！！！|好....." },
  ];
  var idx = 0;
  var check = null;

  // 打字机播完 → 停顿片刻进入下一步
  function waitDone() {
    if (typewriterDone) {
      clearInterval(check);
      setTimeout(playStep, 600);
    }
  }

  function playStep() {
    // 序列播放完毕：显示"跟上去"按钮（后续剧情待续，返回校门口）
    if (idx >= seq.length) {
      var actionsArea = document.getElementById("actions-area");
      actionsArea.innerHTML = "";
      actionsArea.style.display = "flex";
      var btn = document.createElement("button");
      btn.className = "action-btn";
      btn.textContent = "（跟上去）";
      btn.onclick = function() { renderTeachingTourSequence(); };
      actionsArea.appendChild(btn);
      return;
    }
    var step = seq[idx];
    idx++;
    if (step.img) {
      // 规范：同步清空src + 取消旧RAF + 单次RAF设置新图
      img.src = "";
      cancelRAF();
      pendingImageRAF = requestAnimationFrame(function() {
        pendingImageRAF = null;
        img.src = step.img;
        img.style.display = "block";
        placeholder.style.display = "none";
      });
    }
    if (step.meet) {
      // 揉眼睁眼：图片区从模糊逐渐清晰，快看清时她"喂！"登场——震动+解锁成就+开始打字
      var area = document.getElementById("image-area");
      area.classList.remove("blur-clear");
      void area.offsetWidth; // 强制重排，确保动画重新播放
      area.classList.add("blur-clear");
      setTimeout(function() {
        var gc = document.getElementById("game-container");
        gc.classList.add("shake");
        setTimeout(function() { gc.classList.remove("shake"); }, 1000);
        unlockAchievement("first_meet");
        startTypewriter(step.text, null, null, null);
        check = setInterval(waitDone, 100);
      }, 1400);
    } else {
      startTypewriter(step.text, null, null, null);
      check = setInterval(waitDone, 100);
    }
  }

  playStep();
}

// 教学楼"跟上去"续篇：走路 → 二楼 → 糖人二选一（蜜糖/糖人吐槽） → 回教室 → 坐回当年座位
function renderTeachingTourSequence() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }

  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  // 规范切图：同步清空src + 取消旧RAF + 单次RAF设置新图
  function switchImg(src) {
    img.src = "";
    cancelRAF();
    pendingImageRAF = requestAnimationFrame(function() {
      pendingImageRAF = null;
      img.src = src;
      img.style.display = "block";
      placeholder.style.display = "none";
    });
  }

  // 打字机播完 → 停顿片刻执行下一步
  function typeAndWait(text, done) {
    startTypewriter(text, null, null, null);
    var check = setInterval(function() {
      if (typewriterDone) {
        clearInterval(check);
        setTimeout(done, 600);
      }
    }, 100);
  }

  // 阶段1：走路 → 阶段2：到二楼
  switchImg("90c31247c5481f8b40b86751ba451ed2.jpg");
  typeAndWait("（走路ing）", function() {
    switchImg("b606df558e411f75e8b5b79bd9529c4a.jpg");
    typeAndWait("她：到啦~二楼~|她：欸。。你怎么一直看着我|因为你好看啊|她：欸↓~↑？今天怎么嘴这么甜", showSweetChoice);
  });

  // 糖人二选一
  function showSweetChoice() {
    actionsArea.innerHTML = "";
    actionsArea.style.display = "flex";
    var btn1 = document.createElement("button");
    btn1.className = "action-btn";
    btn1.textContent = "我出门前吃蜜糖了";
    btn1.onclick = function() {
      actionsArea.innerHTML = "";
      actionsArea.style.display = "none";
      typeAndWait("她：哈哈~终于开窍了", goClassroom);
    };
    var btn2 = document.createElement("button");
    btn2.className = "action-btn";
    btn2.textContent = "对待糖人当然要说甜话啦~";
    btn2.onclick = choiceTease;
    actionsArea.appendChild(btn1);
    actionsArea.appendChild(btn2);
  }

  // 选项二：糖人吐槽 → 被揍（切图+屏幕震动） → 原谅后切回原图
  function choiceTease() {
    actionsArea.innerHTML = "";
    actionsArea.style.display = "none";
    switchImg("90c31247c5481f8b40b86751ba451ed2.jpg");
    startTypewriter("她：混蛋！！！打死你！！！", null, null, null);
    var gc = document.getElementById("game-container");
    gc.classList.add("shake");
    setTimeout(function() { gc.classList.remove("shake"); }, 1000);
    var check = setInterval(function() {
      if (typewriterDone) {
        clearInterval(check);
        setTimeout(function() {
          typeAndWait("她：哼！！|欸欸欸我错了，对不起宝宝|她：原谅你啦下次不许了！", function() {
            // 切回二楼原图，汇合到回教室
            switchImg("b606df558e411f75e8b5b79bd9529c4a.jpg");
            setTimeout(goClassroom, 600);
          });
        }, 600);
      }
    }, 100);
  }

  // 汇合：一起回教室看看 → 旧教室对话+坐回当年座位（同一张座位图）
  function goClassroom() {
    typeAndWait("我们一起回教室看看吧", function() {
      switchImg("4362fc91070218685e8efbe7c7edd4e1.jpg");
      typeAndWait("以前的教室呢......我记得已经改成会议室了来着|她：我给你变回来啦~厉害吧~|要变也是我想成这样的....|她：你可以假装是我变的|好好好...宝宝好厉害|她：哼哼~谢谢啦|你又坐到当时你的座位了呢...", function() {
        // 接续：一起上课剧情
        renderTeachingClassSequence();
      });
    });
  }
}

// 教学楼续篇2：一起上课（初中课件异样）→晕倒黑屏→她带去别处散心→"永远留在这"二选一→管理手册被电→摄像头→饮水机自动出水
function renderTeachingClassSequence() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }

  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  // 规范切图：同步清空src + 取消旧RAF + 单次RAF设置新图
  function switchImg(src) {
    img.src = "";
    cancelRAF();
    pendingImageRAF = requestAnimationFrame(function() {
      pendingImageRAF = null;
      img.src = src;
      img.style.display = "block";
      placeholder.style.display = "none";
    });
  }

  // 打字机播完 → 停顿片刻执行下一步
  function typeAndWait(text, done) {
    startTypewriter(text, null, null, null);
    var check = setInterval(function() {
      if (typewriterDone) {
        clearInterval(check);
        setTimeout(done, 600);
      }
    }, 100);
  }

  // 屏幕震动1秒
  function shakeScreen() {
    var gc = document.getElementById("game-container");
    gc.classList.add("shake");
    setTimeout(function() { gc.classList.remove("shake"); }, 1000);
  }

  // 突然全黑 → 黑透时切图 → 停2秒 → 恢复 → 继续
  function blackoutSwitch(src, done) {
    var fade = document.getElementById("fade-overlay");
    fade.classList.add("active");
    setTimeout(function() {
      switchImg(src);
      setTimeout(function() {
        fade.classList.remove("active");
        setTimeout(done, 600);
      }, 2000);
    }, 1300);
  }

  // 剧情步骤队列：img=切图 / blackoutImg=黑屏切图 / shake=步骤开始时震动 / choice=二选一
  var steps = [
    { text: "她：不行吗~我想和你待的近一点|倒也不是不行....|她：嘿嘿，我们一起上课吧~|她：我好久没和你一起上课了....|她：好久好久....." },
    { img: "dbc46936853d06081e2ddb316de0214e.jpg", text: "(课上在讲什么呢....)|(我无心听讲)|欸....|这些东西....是初中的吗" },
    { blackoutImg: "2d9eae028eb12b1ab6d5f417761b8376.jpg", text: "唔.....刚才好像有点头晕|欸....她呢？" },
    { img: "9b30a6cad1207cf33249299412f5f0dd.jpg", text: "她：喂喂喂，我在这边呢|我刚才...好像", shake: true },
    { img: "90c31247c5481f8b40b86751ba451ed2.jpg", text: "她：（打断）停停停，你要把你在教室里晕倒的事情再说一遍吗|我刚才....在教室里晕倒了？|她：够了我可不想听你再说|她：超级影响氛围的你知道吗！" },
    { img: "9b30a6cad1207cf33249299412f5f0dd.jpg", text: "她：居然你晕倒了，我就带你去别的地方看看吧|。。。好" },
    { img: "66c4d6ab9776b1fdd4565b1f53c34f3f.jpg", text: "这里真好看....|她：那可不....你想不想永远留在这里" },
    { choice: [
      { label: "当然想", text: "她：嘿嘿，就知道宝宝会陪着我哒" },
      { label: "为什么突然说这个", text: "她：这不是怕你又走了|你，....会想念我吗|她：....这是什么话，当然啦！|......|（对话在一个奇怪的氛围里结束了)" },
    ]},
    { img: "0f8838731ecb4c15bf52fe7723d0bad3.jpg", text: "那里有一个管理手册！|她：怎么，你想看看吗|这里不会有人吧|她：应该只有你一个人吧|那我就放心了" },
    { img: null, text: "我要拿了" },
    { text: "好痛！！！", shake: true },
    { img: "b662ffd6f7692078b8c0f61d485bced4.jpg", text: "这里怎么有个摄像头！！！|头好疼.....|她：你没事吧（把你扶到了一边坐着）" },
    { blackoutImg: "f614a90846a85770b84ae375b5d46ed0.jpg", text: "欸...为什么要把我放在饮水机旁边" },
    { img: "4a225150156297390d532ae642a653cf.jpg", text: "水！为什么水自动流出来了！", shake: true },
    { text: "（水停了）|她：怎么了|刚才饮水机自动启动了|她：是我开的哦|欸....骗人....明明你刚才还在厕所|她：我都说了是我开的哦（微笑）|好....好吧|她：拿你没办法...下楼吧" },
    { img: null, text: "一个人都没有呢.....|（走路ing）" },
    { img: "9553eed9844709499308fc823afc8ff7.jpg", text: "欸....这是同学们吗...." },
    { img: "90c31247c5481f8b40b86751ba451ed2.jpg", text: "她：喂！你发什么呆呢！|额...我刚才好像看到其他人了|她：你看错啦！！|她：赶紧跟我来！！！|好...的" },
    { img: "ff98d35198eea6891cd6a788cd5ef331.jpg", title: "亭子", text: "她：就到这里吧~|她：在这里坐一会把" },
    { img: "d17d538b5aa3b53f11665b1afe9ca276.jpg", text: "（坐下）|她：嘿嘿，这里有股文雅的感觉~|毕竟孔子像就在旁边|她：你要去吃草吗|不了谢谢....|她：说到这里....我有点饿了..|要不要一起去食堂吃饭|她：好啊~走吧！" },
    { img: "c31bc5670e3d7e6f2542e47960c39856.jpg", title: "食堂", text: "她：到啦~|她：我就不进去啦~你能帮我带两份饭出来吗|两份....有点难拿啊...." },
    { img: "7ec103d78421548f56e847447ec8720b.jpg", text: "她：我相信你一定可以的|喂喂喂不要这样子求我啊|就算这样子求我...我也不会|她：嗯嗯嗯嗯帮我去拿吧|不要！！！！|她：（将你推入食堂）|喂喂喂不要这么突然！" },
    { game: "canteen" },
  ];

  function runStep(i) {
    // 全部播完：待续按钮返回校门口
    if (i >= steps.length) {
      actionsArea.innerHTML = "";
      actionsArea.style.display = "flex";
      var endBtn = document.createElement("button");
      endBtn.className = "action-btn";
      endBtn.textContent = "（待续）";
      endBtn.onclick = function() { renderScene("gate"); };
      actionsArea.appendChild(endBtn);
      return;
    }
    var s = steps[i];
    var next = function() { runStep(i + 1); };

    // 切换标题（如：亭子/食堂）
    if (s.title) document.getElementById("location-name").textContent = s.title;

    // 触发小游戏（食堂抢饭）
    if (s.game === "canteen") {
      setTimeout(startCanteenGame, 600);
      return;
    }

    // 二选一分支：各自文案播完汇合到下一步
    if (s.choice) {
      actionsArea.innerHTML = "";
      actionsArea.style.display = "flex";
      for (var c = 0; c < s.choice.length; c++) {
        (function(opt) {
          var b = document.createElement("button");
          b.className = "action-btn";
          b.textContent = opt.label;
          b.onclick = function() {
            actionsArea.innerHTML = "";
            actionsArea.style.display = "none";
            typeAndWait(opt.text, next);
          };
          actionsArea.appendChild(b);
        })(s.choice[c]);
      }
      return;
    }

    var begin = function() {
      if (s.shake) shakeScreen();
      if (s.text) typeAndWait(s.text, next);
      else setTimeout(next, 600);
    };
    if (s.blackoutImg) {
      blackoutSwitch(s.blackoutImg, begin);
    } else {
      if (s.img) switchImg(s.img);
      begin();
    }
  }

  runStep(0);
}

// ===== 食堂抢饭小游戏 =====
// 规则：35秒限时；滑动/拖拽控制角色；从右侧打饭窗口拿饭菜（黄点，每2秒生成），送回左侧大门积分
// 10个白色幽灵NPC乱飘，撞到玩家会把玩家挤开；最多同时携带2份
// ≥14分流程A+成就"抢饭大王"，7~13分流程B+成就"好歹抢到饭了"，<7分失败饿肚子
var canteenGame = null;

// 通用：打字机播完 → 停顿片刻执行回调
function seqTypeAndWait(text, done) {
  startTypewriter(text, null, null, null);
  var check = setInterval(function() {
    if (typewriterDone) {
      clearInterval(check);
      setTimeout(done, 600);
    }
  }, 100);
}

// 强制停止小游戏并清理画布（切场景时调用）
function stopCanteenGame() {
  if (!canteenGame) return;
  var g = canteenGame;
  canteenGame = null;
  if (g.raf) cancelAnimationFrame(g.raf);
  if (g.spawnTimer) clearInterval(g.spawnTimer);
  if (g.canvas && g.canvas.parentNode) g.canvas.parentNode.removeChild(g.canvas);
  // 恢复HUD区为剧情描述区
  var descArea = document.getElementById("description-area");
  if (descArea) descArea.innerHTML = "";
}

function startCanteenGame() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  stopCanteenGame();

  document.getElementById("location-name").textContent = "食堂抢饭";
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  // 游戏内：剧情图片不显示也不占空间（画布填充图片区）
  var area = document.getElementById("image-area");
  var img = document.getElementById("scene-img");
  img.src = "";
  img.style.display = "none";
  var placeholder = document.getElementById("scene-placeholder");
  placeholder.style.display = "none";

  var canvas = document.createElement("canvas");
  canvas.id = "canteen-canvas";
  canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none;";
  canvas.oncontextmenu = function(e) { e.preventDefault(); return false; };
  area.appendChild(canvas);

  var rect = area.getBoundingClientRect();
  var W = Math.max(300, Math.floor(rect.width));
  var H = Math.max(240, Math.floor(rect.height));
  canvas.width = W;
  canvas.height = H;
  var ctx = canvas.getContext("2d");

  // 游戏状态
  var DURATION = 35000;           // 限时35秒
  var GATE_W = 30;                // 左侧大门宽度
  var WIN_W = 48;                 // 右侧打饭窗口宽度
  var MAX_CARRY = 2;              // 最多同时携带2份（对应剧情"带两份饭"）
  var state = {
    timeLeft: DURATION,
    score: 0,
    player: { x: W * 0.35, y: H / 2, r: 14, carry: 0, speed: 195 },
    foods: [],
    npcs: [],
    drag: null,                    // {sx, sy, cx, cy} 滑动/拖拽向量
    lastTs: 0,
    hudTick: 0,
  };

  // 10个白色幽灵NPC：全场乱飘，定时随机转向
  for (var i = 0; i < 10; i++) {
    state.npcs.push({
      x: GATE_W + 40 + Math.random() * (W - GATE_W - WIN_W - 80),
      y: 20 + Math.random() * (H - 40),
      r: 12 + Math.random() * 3,
      vx: 0, vy: 0,
      turnIn: 500 + Math.random() * 1200,
    });
  }
  function npcTurn(n) {
    var ang = Math.random() * Math.PI * 2;
    var spd = 60 + Math.random() * 90;
    n.vx = Math.cos(ang) * spd;
    n.vy = Math.sin(ang) * spd;
    n.turnIn = 500 + Math.random() * 1200;
  }

  // 饭菜每2秒生成一个（右侧打饭窗口内，场上最多8个）
  function spawnFood() {
    if (state.foods.length >= 8) return;
    state.foods.push({
      x: W - WIN_W / 2 - 6 + (Math.random() * 14 - 7),
      y: 24 + Math.random() * (H - 48),
      r: 9,
    });
  }
  spawnFood();
  var spawnTimer = setInterval(spawnFood, 2000);

  // HUD（复用描述区）
  var descArea = document.getElementById("description-area");
  descArea.innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;font-size:15px;margin-bottom:6px;">' +
    '<span>⏱ 剩余 <b id="cg-time" style="color:#ffd54f;">35</b> 秒</span>' +
    '<span>🍚 已抢 <b id="cg-score" style="color:#ffd54f;">0</b> 份</span>' +
    '<span>🎯 目标 <b style="color:#ffd54f;">7份</b> / <b style="color:#ff8a65;">14份</b></span>' +
    '</div>' +
    '<div style="font-size:12px;color:rgba(224,224,224,0.75);text-align:center;">' +
    '拖拽/滑动控制移动：去右侧打饭窗口拿<b style="color:#ffd54f;">黄色饭菜</b>（最多带2份），送回左侧<b style="color:#81c784;">大门</b>积分！小心白色幽灵同学会把你挤开！</div>';

  // 指针输入：鼠标拖拽 + 触屏滑动（双指操作被拦截，禁止缩放）
  function ptrPos(e) {
    var cr = canvas.getBoundingClientRect();
    return { x: e.clientX - cr.left, y: e.clientY - cr.top };
  }
  function onDown(e) {
    e.preventDefault();
    var p = ptrPos(e);
    state.drag = { sx: p.x, sy: p.y, cx: p.x, cy: p.y };
    if (canvas.setPointerCapture && e.pointerId !== undefined) {
      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    }
  }
  function onMove(e) {
    if (!state.drag) return;
    e.preventDefault();
    var p = ptrPos(e);
    state.drag.cx = p.x;
    state.drag.cy = p.y;
  }
  function onUp() { state.drag = null; }
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("touchstart", function(e) { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
  canvas.addEventListener("touchmove", function(e) { e.preventDefault(); }, { passive: false });

  // ===== 结算 =====
  function endGame() {
    stopCanteenGame();
    var score = state.score;
    if (score >= 14) {
      unlockAchievement("canteen_king");
      showCanteenResult("A", score);
    } else if (score >= 7) {
      unlockAchievement("canteen_got_some");
      showCanteenResult("B", score);
    } else {
      // <7分：还是食堂背景图，她要求回去重新打饭，然后再来一次
      showCanteenRetry();
    }
  }

  // ===== 主循环 =====
  function loop(ts) {
    if (!canteenGame) return;
    var dt = Math.min(0.033, (ts - state.lastTs) / 1000 || 0);
    state.lastTs = ts;
    state.timeLeft -= dt * 1000;

    // 倒计时结束直接结算
    if (state.timeLeft <= 0) { endGame(); return; }

    // 玩家移动：按拖拽向量方向移动（超过死区才动，速度随拖拽长度提升）
    var pl = state.player;
    if (state.drag) {
      var dx = state.drag.cx - state.drag.sx;
      var dy = state.drag.cy - state.drag.sy;
      var len = Math.sqrt(dx * dx + dy * dy);
      if (len > 8) {
        var k = Math.min(1, len / 70);
        pl.x += (dx / len) * pl.speed * k * dt;
        pl.y += (dy / len) * pl.speed * k * dt;
      }
    }
    // 玩家边界
    if (pl.x < pl.r) pl.x = pl.r;
    if (pl.x > W - pl.r) pl.x = W - pl.r;
    if (pl.y < pl.r) pl.y = pl.r;
    if (pl.y > H - pl.r) pl.y = H - pl.r;

    // NPC游走 + 撞击把玩家挤开
    for (var n = 0; n < state.npcs.length; n++) {
      var c = state.npcs[n];
      c.turnIn -= dt * 1000;
      if (c.turnIn <= 0 || (c.vx === 0 && c.vy === 0)) npcTurn(c);
      c.x += c.vx * dt;
      c.y += c.vy * dt;
      if (c.x < GATE_W + c.r) { c.x = GATE_W + c.r; c.vx = Math.abs(c.vx); }
      if (c.x > W - c.r) { c.x = W - c.r; c.vx = -Math.abs(c.vx); }
      if (c.y < c.r) { c.y = c.r; c.vy = Math.abs(c.vy); }
      if (c.y > H - c.r) { c.y = H - c.r; c.vy = -Math.abs(c.vy); }
      // 与玩家碰撞：沿连线把双方推开（玩家被挤开）
      var pdx = pl.x - c.x, pdy = pl.y - c.y;
      var pd = Math.sqrt(pdx * pdx + pdy * pdy);
      var pmin = pl.r + c.r;
      if (pd < pmin && pd > 0.001) {
        var overlap = pmin - pd;
        pl.x += (pdx / pd) * overlap * 0.75;
        pl.y += (pdy / pd) * overlap * 0.75;
        c.x -= (pdx / pd) * overlap * 0.35;
        c.y -= (pdy / pd) * overlap * 0.35;
      }
    }

    // 拾取饭菜（右侧窗口，最多带2份）
    for (var f = state.foods.length - 1; f >= 0; f--) {
      var fd = state.foods[f];
      var fdx = pl.x - fd.x, fdy = pl.y - fd.y;
      if (pl.carry < MAX_CARRY && Math.sqrt(fdx * fdx + fdy * fdy) < pl.r + fd.r) {
        pl.carry++;
        state.foods.splice(f, 1);
      }
    }
    // 送回左侧大门：积分
    if (pl.x - pl.r < GATE_W && pl.carry > 0) {
      state.score += pl.carry;
      pl.carry = 0;
    }

    // ===== 绘制 =====
    ctx.clearRect(0, 0, W, H);
    // 地板
    ctx.fillStyle = "#2b2622";
    ctx.fillRect(0, 0, W, H);
    // 左侧大门
    ctx.fillStyle = "#2e5d3e";
    ctx.fillRect(0, 0, GATE_W, H);
    ctx.fillStyle = "#a5d6a7";
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.save();
    ctx.translate(14, H / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("大门", 0, 4);
    ctx.restore();
    // 右侧打饭窗口
    ctx.fillStyle = "#5d4037";
    ctx.fillRect(W - WIN_W, 0, WIN_W, H);
    ctx.fillStyle = "#ffcc80";
    ctx.save();
    ctx.translate(W - WIN_W / 2, H / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("打饭窗口", 0, 4);
    ctx.restore();
    // 饭菜（黄色圆点）
    for (var d = 0; d < state.foods.length; d++) {
      var fo = state.foods[d];
      ctx.beginPath();
      ctx.arc(fo.x, fo.y, fo.r, 0, Math.PI * 2);
      ctx.fillStyle = "#ffd54f";
      ctx.fill();
      ctx.strokeStyle = "#f9a825";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    // NPC白色幽灵
    for (var v = 0; v < state.npcs.length; v++) {
      var gh = state.npcs[v];
      ctx.beginPath();
      ctx.arc(gh.x, gh.y, gh.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.fill();
      // 幽灵眼睛
      ctx.fillStyle = "#333";
      ctx.beginPath();
      ctx.arc(gh.x - 4, gh.y - 2, 2, 0, Math.PI * 2);
      ctx.arc(gh.x + 4, gh.y - 2, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    // 玩家（蓝色）+ 携带的饭
    ctx.beginPath();
    ctx.arc(pl.x, pl.y, pl.r, 0, Math.PI * 2);
    ctx.fillStyle = "#4fc3f7";
    ctx.fill();
    ctx.strokeStyle = "#e1f5fe";
    ctx.lineWidth = 2;
    ctx.stroke();
    if (pl.carry > 0) {
      for (var cc = 0; cc < pl.carry; cc++) {
        ctx.beginPath();
        ctx.arc(pl.x - 7 + cc * 14, pl.y - pl.r - 6, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#ffd54f";
        ctx.fill();
      }
    }
    // 拖拽方向指示
    if (state.drag) {
      var ax = state.drag.cx - state.drag.sx;
      var ay = state.drag.cy - state.drag.sy;
      if (Math.sqrt(ax * ax + ay * ay) > 8) {
        ctx.beginPath();
        ctx.moveTo(state.drag.sx, state.drag.sy);
        ctx.lineTo(state.drag.cx, state.drag.cy);
        ctx.strokeStyle = "rgba(79,195,247,0.5)";
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    }

    // HUD刷新（节流）
    state.hudTick += dt * 1000;
    if (state.hudTick > 100) {
      state.hudTick = 0;
      var tEl = document.getElementById("cg-time");
      var sEl = document.getElementById("cg-score");
      if (tEl) tEl.textContent = Math.ceil(state.timeLeft / 1000);
      if (sEl) sEl.textContent = state.score;
    }

    canteenGame.raf = requestAnimationFrame(loop);
  }

  canteenGame = { raf: null, spawnTimer: spawnTimer, canvas: canvas };
  canteenGame.raf = requestAnimationFrame(loop);
}

// 食堂抢饭失败（<7分）：食堂背景图 + 她要求重打，然后再来一次
function showCanteenRetry() {
  // 恢复图片区：显示食堂门口背景图
  var img = document.getElementById("scene-img");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "c31bc5670e3d7e6f2542e47960c39856.jpg";
    img.style.display = "block";
  });
  document.getElementById("location-name").textContent = "食堂";

  seqTypeAndWait("她：这明显不够吃！！！回去重新打饭！！！", function() {
    var actionsArea = document.getElementById("actions-area");
    actionsArea.innerHTML = "";
    actionsArea.style.display = "flex";
    var btn = document.createElement("button");
    btn.className = "action-btn";
    btn.textContent = "（再去抢一次）";
    btn.onclick = function() { startCanteenGame(); };
    actionsArea.appendChild(btn);
  });
}

// 食堂抢饭结算剧情：A(≥14)/B(7~13) 各自对话后汇入同一结局
function showCanteenResult(flow, score) {
  // 恢复图片区：显示食堂门口背景图
  var img = document.getElementById("scene-img");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "c31bc5670e3d7e6f2542e47960c39856.jpg";
    img.style.display = "block";
  });
  document.getElementById("location-name").textContent = "食堂";

  var textA = "她：哇你真的抢到了好多|嘿嘿，不要膜拜我|她：行行行我不膜拜你|要不你还是膜拜一下|她：行行行我膜拜你|好敷衍.......|她：就敷衍就敷衍，我要吃饭了！|完全只在意饭啊........";
  var textB = "她：呃呜....有点不够呢|没事我不用吃，都你吃吧|她：不不不，不吃饭你会胃疼的|为了你胃疼，我心甘情愿|她：我会心疼的！！！|好吧那我就勉为其难吃两口....|她：你真的不客气啊啊啊！！！";
  seqTypeAndWait(flow === "A" ? textA : textB, function() {
    // 两个流程汇入同一结局：天台终章
    showFinaleSequence();
  });
}

// ===== 终章：天台 =====
// 食堂结局汇合 → 吃太多吐槽 → 天台 → 她展示"让你永远留在这里的东西" → 二选一
function showFinaleSequence() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }

  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  // 规范切图
  function switchImg(src) {
    img.src = "";
    cancelRAF();
    pendingImageRAF = requestAnimationFrame(function() {
      pendingImageRAF = null;
      img.src = src;
      img.style.display = "block";
      placeholder.style.display = "none";
    });
  }

  // 图1：吃太多吐槽（5470a144）→ 走路 → 图2：天台
  switchImg("5470a144d4233a4467c8e6a4d193688e.jpg");
  seqTypeAndWait("她：你怎么吃了这么多！！我都没东西吃了！！！|红豆泥私密马赛！！|太久没吃东西有些饿了...|她：你啊！在外面要照顾好自己！！（敲脑壳）|她：算了...我还有个方法，我带你去看个东西|(走路ing)", function() {
    switchImg("d4148613c6b8b609b9d462cf9b5f9465.jpg");
    document.getElementById("location-name").textContent = "天台";
    seqTypeAndWait("这里....是哪里....|她：嘿嘿....我要带你去见一个东西|什么....|她：一个可以让你永远留在这里的东西", function() {
      // 二选一：是什么 / 我不要留在这里
      actionsArea.innerHTML = "";
      actionsArea.style.display = "flex";
      var btn1 = document.createElement("button");
      btn1.className = "action-btn";
      btn1.textContent = "是什么";
      btn1.onclick = renderStayEnding;
      var btn2 = document.createElement("button");
      btn2.className = "action-btn";
      btn2.textContent = "我不要留在这里";
      btn2.onclick = renderRefusePath;
      actionsArea.appendChild(btn1);
      actionsArea.appendChild(btn2);
    });
  });
}

// 真结局线：愿意留下来（梦境永续）
function renderStayEnding() {
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");

  img.src = "";
  cancelRAF();
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "9091bd44e6712c44730b1c56ddb2d6b5.jpg";
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  seqTypeAndWait("欸？你真的愿意留下来陪我吗？|当然啦~|她：我还以为你会再次离开我呢...|怎么...会.....|她：那个东西...就是...你的执念......", function() {
    // 解锁成就：梦境永续
    unlockAchievement("dream_eternal");
    // 切终图
    img.src = "";
    cancelRAF();
    pendingImageRAF = requestAnimationFrame(function() {
      pendingImageRAF = null;
      img.src = "eba4f533b30f0f618e206e5d5b244305.jpg";
      img.style.display = "block";
    });
    // 选项：继续游戏 → 新闻弹窗揭示真相 → 回校门口
    setTimeout(function() {
      actionsArea.innerHTML = "";
      actionsArea.style.display = "flex";
      var btn = document.createElement("button");
      btn.className = "action-btn";
      btn.textContent = "继续游戏";
      btn.onclick = function() {
        showPopupModal(
          "近日一初中肄业生在秋叶原大街自杀抢救无效死亡，死亡原因系安眠药过量，具同学了解死者生前在校内极其孤僻，经常独处，中考失利并未考上高中。通过这起案件可以看出.........<br><br>感谢游玩...",
          function() { renderScene("gate"); }
        );
      };
      actionsArea.appendChild(btn);
    }, 800);
  });
}

// 反抗线：我不要留在这里 → ???登场 → BOSS战
function renderRefusePath() {
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";
  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");

  // 图1：戳破虚幻
  img.src = "";
  cancelRAF();
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "7d1920bc68a84af90beab85fcccca21d.jpg";
    img.style.display = "block";
    placeholder.style.display = "none";
  });
  seqTypeAndWait("她：欸....为什么？你不是很讨厌外面的生活吗|她：待在这里难道不比外面强吗|她：你可以获得永恒的幸福|她：你不是喜欢我吗？你可以呆在这里陪我啊|你是假的吧|这里的一切....也都是假的吧|外面的世界很痛苦|外面的世界很孤单|外面的世界没有能相伴的人|冰天雪地....|但我还想有承受痛苦的机会|这里不是幸福|我不想拿虚幻的东西敷衍自己了....|你让我看到了生的希望|她：可..这", function() {
    // 图2：???登场
    img.src = "";
    cancelRAF();
    pendingImageRAF = requestAnimationFrame(function() {
      pendingImageRAF = null;
      img.src = "af9d888a79b17eaf4139565220713be9.jpg";
      img.style.display = "block";
    });
    seqTypeAndWait("???：已经晚了....|???：我们本来能好好谈谈，让这里存续下去的|???：我看到了你的【求生意志】|???：这样下去这里会因你而崩坏掉，你在这里的一切，包括'她'，都会消失|???：你真的做好决定了吗|我很确定|???：执迷不悟", function() {
      // 进入BOSS战
      setTimeout(startBossFight, 600);
    });
  });
}

// ===== 最终BOSS战：执念鱿鱼 =====
// 玩家5血（触屏拖拽移动），鱿鱼10血（锁血2点不再下降）
// P1(100-70%)：1触手慢旋+慢速墨弹 / P2(70-40%)：墨雾干扰视野+双触手+弹幕加密 / P3(40-20%)：三触手高速横扫+大量弹幕
// 玩家0血不判负 → 进入濒死剧情
var bossFight = null;

function stopBossFight() {
  if (!bossFight) return;
  var b = bossFight;
  bossFight = null;
  if (b.raf) cancelAnimationFrame(b.raf);
  if (b.canvas && b.canvas.parentNode) b.canvas.parentNode.removeChild(b.canvas);
  var descArea = document.getElementById("description-area");
  if (descArea) descArea.innerHTML = "";
}

function startBossFight() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  stopBossFight();
  stopCanteenGame();

  document.getElementById("location-name").textContent = "执念鱿鱼";
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  // 游戏内剧情图不显示不占空间
  var area = document.getElementById("image-area");
  var img = document.getElementById("scene-img");
  img.src = "";
  img.style.display = "none";
  document.getElementById("scene-placeholder").style.display = "none";

  var canvas = document.createElement("canvas");
  canvas.id = "boss-canvas";
  canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none;";
  canvas.oncontextmenu = function(e) { e.preventDefault(); return false; };
  area.appendChild(canvas);

  var rect = area.getBoundingClientRect();
  var W = Math.max(300, Math.floor(rect.width));
  var H = Math.max(240, Math.floor(rect.height));
  canvas.width = W;
  canvas.height = H;
  var ctx = canvas.getContext("2d");

  var state = {
    time: 0,
    player: { x: W * 0.22, y: H / 2, r: 12, hp: 5, speed: 200, inv: 0, hitCd: 0 },
    squid: { x: W * 0.74, y: H / 2, r: 42, hp: 10, maxHp: 10, coreR: 11, baseY: H / 2, floatT: 0 },
    tentacles: [],     // {ang, spin, len, pulse, phase}
    ink: [],           // 墨弹 {x,y,vx,vy,r}
    inkTimer: 0,
    inkSpawnGap: 900,
    phase: 1,
    lockAnnounced: false,   // 锁血叙事是否已播报
    finaleTriggered: false, // 终局弹幕是否已触发（防无限拖延）
    drag: null,
    lastTs: 0,
    hudTick: 0,
  };

  // 按阶段重建触手
  function buildTentacles() {
    var p = state.phase;
    var count = p === 1 ? 1 : p === 2 ? 2 : 3;
    var spin = p === 1 ? 1.2 : p === 2 ? 1.8 : 2.6;
    state.tentacles = [];
    for (var i = 0; i < count; i++) {
      state.tentacles.push({
        ang: (Math.PI * 2 / count) * i,
        spin: spin,
        baseLen: 95 + p * 18,
        pulse: p === 1 ? 0.25 : p === 2 ? 0.45 : 0.7,   // 拍打伸缩强度
        phase: Math.random() * Math.PI * 2,
      });
    }
    state.inkSpawnGap = p === 1 ? 900 : p === 2 ? 550 : 320;
  }
  buildTentacles();

  // HUD
  var descArea = document.getElementById("description-area");
  function renderHud() {
    var hearts = "";
    for (var i = 0; i < 5; i++) hearts += i < state.player.hp ? "♥" : "♡";
    var barLen = Math.round((state.squid.hp / state.squid.maxHp) * 20);
    var bar = "";
    for (var j = 0; j < 20; j++) bar += j < barLen ? "█" : "░";
    // 锁血/终局的叙事提示：把机制翻译成???的台词
    var warnLine = "";
    if (state.finaleTriggered) {
      warnLine = '<div style="font-size:12px;color:#ff5252;text-align:center;margin-top:3px;font-weight:700;text-shadow:0 0 8px rgba(255,82,82,0.7);">???：挣扎够了吗</div>';
    } else if (state.squid.hp <= 2) {
      warnLine = '<div style="font-size:11px;color:#ff8a80;text-align:center;margin-top:3px;">???：斩不断的……执念，与你同在<br>⚠ 伤害无效——它在等你亲手倒下</div>';
    }
    var phaseName = state.finaleTriggered ? "终局" : state.phase === 1 ? "P1 触手初现" : state.phase === 2 ? "P2 墨雾弥漫" : "P3 狂暴";
    descArea.innerHTML =
      '<div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:4px;">' +
      '<span style="color:#4fc3f7;">你 ' + hearts + ' ' + state.player.hp + '</span>' +
      '<span style="color:#ff8a65;">' + phaseName + '</span></div>' +
      '<div style="font-size:13px;color:#ff8a65;">🦑 执念 <span style="font-family:monospace;">' + bar + '</span> ' + state.squid.hp + '/10</div>' +
      '<div style="font-size:11px;color:rgba(224,224,224,0.7);text-align:center;margin-top:2px;">拖拽移动躲避触手与墨弹，撞击鱿鱼本体造成伤害！</div>' +
      warnLine;
  }
  renderHud();

  // 输入：拖拽/滑动
  function ptrPos(e) {
    var cr = canvas.getBoundingClientRect();
    return { x: e.clientX - cr.left, y: e.clientY - cr.top };
  }
  canvas.addEventListener("pointerdown", function(e) {
    e.preventDefault();
    var p = ptrPos(e);
    state.drag = { sx: p.x, sy: p.y, cx: p.x, cy: p.y };
    if (canvas.setPointerCapture && e.pointerId !== undefined) {
      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    }
  });
  canvas.addEventListener("pointermove", function(e) {
    if (!state.drag) return;
    e.preventDefault();
    var p = ptrPos(e);
    state.drag.cx = p.x; state.drag.cy = p.y;
  });
  canvas.addEventListener("pointerup", function() { state.drag = null; });
  canvas.addEventListener("pointercancel", function() { state.drag = null; });
  canvas.addEventListener("touchstart", function(e) { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
  canvas.addEventListener("touchmove", function(e) { e.preventDefault(); }, { passive: false });

  // 点到线段距离（触手碰撞）
  function distToSeg(px, py, x1, y1, x2, y2) {
    var dx = x2 - x1, dy = y2 - y1;
    var l2 = dx * dx + dy * dy;
    if (l2 === 0) return Math.sqrt((px - x1) * (px - x1) + (py - y1) * (py - y1));
    var t = ((px - x1) * dx + (py - y1) * dy) / l2;
    if (t < 0) t = 0; if (t > 1) t = 1;
    var cx = x1 + t * dx, cy = y1 + t * dy;
    return Math.sqrt((px - cx) * (px - cx) + (py - cy) * (py - cy));
  }

  function playerHit() {
    if (state.player.inv > 0) return;
    state.player.hp--;
    state.player.inv = 1200;
    renderHud();
    if (state.player.hp <= 0) {
      // 剧本要求：0血不判负 → 濒死剧情
      stopBossFight();
      renderBossNearDeath();
    }
  }

  function loop(ts) {
    if (!bossFight) return;
    var dt = Math.min(0.033, (ts - state.lastTs) / 1000 || 0);
    state.lastTs = ts;
    state.time += dt;
    var pl = state.player, sq = state.squid;

    // 阶段切换（按鱿鱼血量比例；锁血后停留P3）
    var ratio = sq.hp / sq.maxHp;
    var newPhase = ratio > 0.7 ? 1 : ratio > 0.4 ? 2 : 3;
    if (newPhase !== state.phase) {
      state.phase = newPhase;
      buildTentacles();
      renderHud();
    }

    // 玩家移动
    if (state.drag) {
      var dx = state.drag.cx - state.drag.sx;
      var dy = state.drag.cy - state.drag.sy;
      var len = Math.sqrt(dx * dx + dy * dy);
      if (len > 8) {
        var k = Math.min(1, len / 70);
        pl.x += (dx / len) * pl.speed * k * dt;
        pl.y += (dy / len) * pl.speed * k * dt;
      }
    }
    if (pl.x < pl.r) pl.x = pl.r;
    if (pl.x > W - pl.r) pl.x = W - pl.r;
    if (pl.y < pl.r) pl.y = pl.r;
    if (pl.y > H - pl.r) pl.y = H - pl.r;
    if (pl.inv > 0) pl.inv -= dt * 1000;

    // 鱿鱼浮动（P3大幅加快）
    sq.floatT += dt * (state.phase === 3 ? 2.6 : state.phase === 2 ? 1.6 : 1);
    sq.y = sq.baseY + Math.sin(sq.floatT) * (state.phase === 3 ? 46 : 26);

    // 触手旋转与拍打
    for (var t = 0; t < state.tentacles.length; t++) {
      var tn = state.tentacles[t];
      tn.ang += tn.spin * dt;
      tn.phase += dt * (state.phase === 3 ? 6 : state.phase === 2 ? 4 : 2.4);
    }

    // 终局机制：战斗拖过80秒，???失去耐心——环形弹幕收尾，战斗必有终点
    if (state.time > 80 && !state.finaleTriggered) {
      state.finaleTriggered = true;
      state.inkSpawnGap = 200;          // 终局弹幕间隔
      state.inkTimer = state.inkSpawnGap; // 立即开始
      renderHud();
    }

    // 墨弹生成
    state.inkTimer += dt * 1000;
    if (state.inkTimer >= state.inkSpawnGap) {
      state.inkTimer = 0;
      if (state.finaleTriggered) {
        // 终局：360°旋转环形弹幕，几乎无死角
        var ringN = 8;
        for (var r0 = 0; r0 < ringN; r0++) {
          var aR = (Math.PI * 2 / ringN) * r0 + state.time * 0.9;
          state.ink.push({ x: sq.x, y: sq.y, vx: Math.cos(aR) * 150, vy: Math.sin(aR) * 150, r: 6 });
        }
      } else {
        var baseAng = Math.atan2(pl.y - sq.y, pl.x - sq.x);
        var shots = state.phase === 1 ? 2 : state.phase === 2 ? 3 : 4;
        var spd = state.phase === 1 ? 100 : state.phase === 2 ? 130 : 160;
        for (var s = 0; s < shots; s++) {
          var a2 = baseAng + (s - (shots - 1) / 2) * 0.22 + (Math.random() * 0.12 - 0.06);
          state.ink.push({ x: sq.x, y: sq.y, vx: Math.cos(a2) * spd, vy: Math.sin(a2) * spd, r: 6 });
        }
      }
    }
    // 墨弹飞行
    for (var k2 = state.ink.length - 1; k2 >= 0; k2--) {
      var b = state.ink[k2];
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.x < -20 || b.x > W + 20 || b.y < -20 || b.y > H + 20) { state.ink.splice(k2, 1); continue; }
      var bdx = pl.x - b.x, bdy = pl.y - b.y;
      if (Math.sqrt(bdx * bdx + bdy * bdy) < pl.r + b.r) {
        state.ink.splice(k2, 1);
        playerHit();
        if (!bossFight) return;
      }
    }

    // 触手碰撞
    for (var t2 = 0; t2 < state.tentacles.length; t2++) {
      var tu = state.tentacles[t2];
      var L = tu.baseLen * (1 + tu.pulse * Math.sin(tu.phase));
      var ex = sq.x + Math.cos(tu.ang) * L;
      var ey = sq.y + Math.sin(tu.ang) * L;
      if (distToSeg(pl.x, pl.y, sq.x, sq.y, ex, ey) < pl.r + 5) {
        playerHit();
        if (!bossFight) return;
        break;
      }
    }

    // 玩家撞击鱿鱼本体造成伤害（冷却0.55秒）；锁血2点不再下降
    if (pl.hitCd > 0) pl.hitCd -= dt * 1000;
    var cdx = pl.x - sq.x, cdy = pl.y - sq.y;
    if (pl.hitCd <= 0 && Math.sqrt(cdx * cdx + cdy * cdy) < sq.r + pl.r) {
      pl.hitCd = 550;
      sq.hp--;
      if (sq.hp <= 2) sq.hp = 2;   // 锁血：不再下降
      renderHud();
    }

    // ===== 绘制 =====
    ctx.clearRect(0, 0, W, H);
    // 天台夜空背景
    var grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "#1a2238");
    grad.addColorStop(1, "#0d1120");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // 触手（黑色，画在鱿鱼身后）
    for (var d0 = 0; d0 < state.tentacles.length; d0++) {
      var tt = state.tentacles[d0];
      var LL = tt.baseLen * (1 + tt.pulse * Math.sin(tt.phase));
      var exx = sq.x + Math.cos(tt.ang) * LL;
      var eyy = sq.y + Math.sin(tt.ang) * LL;
      ctx.beginPath();
      ctx.moveTo(sq.x, sq.y);
      ctx.lineTo(exx, eyy);
      ctx.strokeStyle = "#17171f";
      ctx.lineWidth = 9;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.strokeStyle = "#44445c";
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    // 鱿鱼本体（黑色）
    ctx.beginPath();
    ctx.arc(sq.x, sq.y, sq.r, 0, Math.PI * 2);
    ctx.fillStyle = "#101018";
    ctx.fill();
    ctx.strokeStyle = "#3d3d55";
    ctx.lineWidth = 3;
    ctx.stroke();
    // 鱿鱼眼（红色发光）
    ctx.fillStyle = "#ff5252";
    ctx.beginPath();
    ctx.arc(sq.x - 12, sq.y - 10, 5, 0, Math.PI * 2);
    ctx.arc(sq.x + 12, sq.y - 10, 5, 0, Math.PI * 2);
    ctx.fill();
    // 核心弱点（发光）
    var glow = 0.5 + 0.5 * Math.sin(state.time * 5);
    ctx.beginPath();
    ctx.arc(sq.x, sq.y, sq.coreR + glow * 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,235,120,0.35)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(sq.x, sq.y, sq.coreR, 0, Math.PI * 2);
    ctx.fillStyle = "#ffeb8a";
    ctx.fill();
    ctx.strokeStyle = "#ffb300";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 墨弹（黑色本体+亮描边，深色背景下可见）
    for (var d1 = 0; d1 < state.ink.length; d1++) {
      var bb = state.ink[d1];
      ctx.beginPath();
      ctx.arc(bb.x, bb.y, bb.r, 0, Math.PI * 2);
      ctx.fillStyle = "#05050c";
      ctx.fill();
      ctx.strokeStyle = "#7a7a9e";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // 玩家（无敌帧闪烁）
    if (pl.inv <= 0 || Math.floor(pl.inv / 120) % 2 === 0) {
      ctx.beginPath();
      ctx.arc(pl.x, pl.y, pl.r, 0, Math.PI * 2);
      ctx.fillStyle = "#4fc3f7";
      ctx.fill();
      ctx.strokeStyle = "#e1f5fe";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // 墨雾（P2起）：以玩家为中心，近处透明远处漆黑，干扰视野
    if (state.phase >= 2) {
      var fogR = state.phase === 3 ? 115 : 95;
      var fogA = state.phase === 3 ? 0.8 : 0.72;
      var fog = ctx.createRadialGradient(pl.x, pl.y, 20, pl.x, pl.y, fogR);
      fog.addColorStop(0, "rgba(5,5,10,0)");
      fog.addColorStop(1, "rgba(5,5,10," + fogA + ")");
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, W, H);
    }

    bossFight.raf = requestAnimationFrame(loop);
  }

  bossFight = { raf: null, canvas: canvas };
  bossFight.raf = requestAnimationFrame(loop);
}

// BOSS战0血 → 濒死剧情 → 她的道歉送别 → 完成最后一击 → 疯狂闪烁 → 结束画面
function renderBossNearDeath() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }

  var img = document.getElementById("scene-img");
  var placeholder = document.getElementById("scene-placeholder");
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";

  function switchImg(src) {
    img.src = "";
    cancelRAF();
    pendingImageRAF = requestAnimationFrame(function() {
      pendingImageRAF = null;
      img.src = src;
      img.style.display = "block";
      placeholder.style.display = "none";
    });
  }

  // fade闪烁：times次快闪后结束（finalOn=闪完是否保持黑）
  function flicker(times, interval, finalOn, done) {
    var fade = document.getElementById("fade-overlay");
    var n = 0;
    var on = false;
    var timer = setInterval(function() {
      on = !on;
      if (on) fade.classList.add("active");
      else fade.classList.remove("active");
      n++;
      if (n >= times * 2) {
        clearInterval(timer);
        if (finalOn) fade.classList.add("active");
        else fade.classList.remove("active");
        setTimeout(done, 300);
      }
    }, interval);
  }

  // 1. 濒死：标题濒死 + 文案（不黑屏，保证文字可见）
  var fade = document.getElementById("fade-overlay");
  fade.classList.remove("active");
  setTimeout(function() {
    // 2. 濒死文案（图片隐藏，纯文案）
    img.src = "";
    img.style.display = "none";
    placeholder.style.display = "none";
    document.getElementById("location-name").textContent = "濒死";
    seqTypeAndWait("要....死了吗...|留在这里也不错.....", function() {
      // 3. 美好回忆闪回（显示图）
      switchImg("7ec103d78421548f56e847447ec8720b.jpg");
      seqTypeAndWait("真是美好的回忆呢....|活一次..也值了...", function() {
        // 4. 闪两秒
        flicker(5, 200, false, function() {
          // 5. 标题切回天台：她的道歉
          document.getElementById("location-name").textContent = "天台";
          switchImg("a24a8aa84a5626ab8b63e7f554a055eb.jpg");
          seqTypeAndWait("欸...欸？！|她：对不起......|她：我太自作主张...了....我不...该替你...做留下来...的决定|她：你是...对的...你不该属于这里....你属于真....实的世....界....|别...别这样|你别吓我....你在吓我对吧！", function() {
            // 6. 她的送别
            switchImg("0008d198b935b87ad7b79e0f875e4b72.jpg");
            seqTypeAndWait("她：去吧....别管我....回去....|不....不...我可以带你出去的...我可以带你出去的！|她：我不.....属于外面.....|她：我....是...出不...去的...", function() {
              // 7. 领域坍塌
              switchImg("d428d74b0185d199f7c23c3b074e9639.jpg");
              seqTypeAndWait("她：这里的....领域...已....经开....始....坍塌了....|快回....去...", function() {
                // 8. ??? + 完成最后一击
                switchImg("af9d888a79b17eaf4139565220713be9.jpg");
                actionsArea.innerHTML = "";
                actionsArea.style.display = "flex";
                var btn = document.createElement("button");
                btn.className = "action-btn";
                btn.textContent = "完成最后一击";
                btn.onclick = function() {
                  // 清空按钮区：防止后续打字机"点击继续"把本按钮重新显示出来（需点两次bug）
                  actionsArea.innerHTML = "";
                  actionsArea.style.display = "none";
                  // 最后一击后：她消失，主角试图从梦中醒来（接原疯狂闪烁结尾前的新剧情）
                  switchImg("66630a7d2b73509647772022ea943daa.jpg");
                  seqTypeAndWait("我....成功了吗.....|怎么.....还没有回到现实世界|她消失了....|这是梦对吧....我要醒来", function() {
                    // 猛扇自己一巴掌：屏幕持续剧烈震动
                    var gc = document.getElementById("game-container");
                    gc.classList.remove("shake-hard");
                    void gc.offsetWidth;
                    gc.classList.add("shake-hard");
                    seqTypeAndWait("（猛扇自己一巴掌）", function() {
                      gc.classList.remove("shake-hard");
                      // 天台边：只能跳下去了吗
                      switchImg("572258136ea08391503e8a6809ad94f0.jpg");
                      seqTypeAndWait("怎么还没醒.....|想回去....只能跳下去了吗...|这不是我的地方...我得回去|再见...梦|对不起......", function() {
                        // 9. 疯狂闪烁（坠落） → 半张牌尾声 → 结束画面
                        flicker(12, 100, true, function() {
                          // 半张牌：坠落后短暂的"苏醒"暗示——白光+仪器声，不给任何解释
                          fade.classList.remove("active");   // 撤黑幕（黑幕会遮住文案）
                          img.src = "";
                          img.style.display = "none";
                          placeholder.style.display = "flex";
                          placeholder.style.background = "#f2f2f0";   // 睁眼——刺眼的白光/白色天花板
                          document.getElementById("location-name").textContent = "";
                          seqTypeAndWait("滴……滴……滴……|（光芒……好刺眼……）|（这里是……哪里……）|（耳边……是陌生的仪器声……）", function() {
                            // 10. 结束画面（停留，等玩家点击继续）
                            placeholder.style.background = "";   // 还原，避免影响后续场景
                            switchImg("569e50202fd9f20e02fdb228049e34bf.jpg");
                            // 结束画面停留：打字机播完后不自动出按钮，包装"点击继续"——玩家点了才显示结束游戏按钮
                            seqTypeAndWait("......", function() {
                              var descArea = document.getElementById("description-area");
                              var origClick = descArea.onclick;
                              descArea.onclick = function() {
                                if (origClick) origClick();   // 清除"▼ 点击继续"提示
                                descArea.onclick = null;
                                actionsArea.innerHTML = "";
                                actionsArea.style.display = "flex";
                                var endBtn = document.createElement("button");
                                endBtn.className = "action-btn";
                                endBtn.textContent = "结束游戏";
                                endBtn.onclick = backToStartScreen;
                                actionsArea.appendChild(endBtn);
                              };
                            });
                          });
                        });
                      });
                    });
                  });
                };
                actionsArea.appendChild(btn);
              });
            });
          });
        });
      });
    });
  }, 300);
}

// 结束游戏 → 回到最上层开始界面
function backToStartScreen() {
  stopCanteenGame();
  stopBossFight();
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  var fade = document.getElementById("fade-overlay");
  fade.classList.remove("active");
  var img = document.getElementById("scene-img");
  img.src = "";
  img.style.display = "none";
  document.getElementById("scene-placeholder").style.display = "flex";
  document.getElementById("location-name").textContent = "";
  document.getElementById("description-area").innerHTML = "";
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "none";
  document.getElementById("float-btns").style.display = "none";
  document.getElementById("start-screen").classList.remove("hidden");
}

// ===== 沙盘游戏 =====
var sandboxState = null;

function startSandboxGame(difficulty) {
  difficulty = difficulty || "normal";
  var isHard = difficulty === "hard";
  var rows = 4;
  var cols = isHard ? 5 : 4;

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
    board[0][cols - 1] = "enemy";
    board[0][cols - 2] = "enemy";
    board[rows - 1][0] = "player";
  } else {
    // 普通模式：企鹅狗右上角1格，玩家左下角1格
    board[0][cols - 1] = "enemy";
    board[rows - 1][0] = "player";
  }

  // 随机选择2个高价值地块（不能是双方初始领地）
  var highValue = {};
  var placed = 0;
  var guard = 0;
  while (placed < 2 && guard < 200) {
    guard++;
    var hr = Math.floor(Math.random() * rows);
    var hc = Math.floor(Math.random() * cols);
    var hk = hr + "," + hc;
    if (board[hr][hc] === null && !highValue[hk]) {
      highValue[hk] = true;
      placed++;
    }
  }

  sandboxState = {
    difficulty: difficulty,
    board: board,
    rows: rows,
    cols: cols,
    refined: {},
    highValue: highValue,
    playerScore: 1,
    enemyScore: isHard ? 2 : 1,
    playerDefend: false,
    enemyDefend: false,
    potionCooldown: 0,
    enemyStunned: false,
    gameOver: false,
    turn: 0,
    maxTurns: 30,
    logs: [],
    lastChange: null,
    // AI性格随机化：aggressive=激进夺地 / conservative=保守精摆
    aiPersonality: Math.random() < 0.5 ? "aggressive" : "conservative",
  };

  document.getElementById("location-name").textContent = isHard ? "沙盘对决（困难）" : "沙盘对决";

  // 显示沙盘对决图片（从传送门进入时覆盖上一场景的图）
  var img = document.getElementById("scene-img");
  img.src = "";
  if (pendingImageRAF) { cancelAnimationFrame(pendingImageRAF); pendingImageRAF = null; }
  pendingImageRAF = requestAnimationFrame(function() {
    pendingImageRAF = null;
    img.src = "62d9adb6d7848472877a00da89957ae2.jpg";
    img.style.display = "block";
  });

  // 先显示规则说明，确认后开始
  showSandboxRules(difficulty);
}

// 实时计算某方分数：普通地1分、高价值地2分、精摆价值翻倍
function calcSandboxScore(owner) {
  var ss = sandboxState;
  var score = 0;
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      if (ss.board[r][c] === owner) {
        var base = ss.highValue[r + "," + c] ? 2 : 1;
        score += ss.refined[r + "," + c] ? base * 2 : base;
      }
    }
  }
  return score;
}

// 同步双方分数（棋盘变化后调用）
function refreshSandboxScores() {
  sandboxState.playerScore = calcSandboxScore("player");
  sandboxState.enemyScore = calcSandboxScore("enemy");
}

// 防御成功时，夺取方随机失去一块领地（优先未精摆的），返回坐标或null
function sandboxLoseCell(owner) {
  var ss = sandboxState;
  var unrefined = [], refinedCells = [];
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      if (ss.board[r][c] === owner) {
        var key = r + "," + c;
        if (ss.refined[key]) refinedCells.push([r, c]);
        else unrefined.push([r, c]);
      }
    }
  }
  var pool = unrefined.length > 0 ? unrefined : refinedCells;
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// 沙盘规则说明弹窗
function showSandboxRules(difficulty) {
  var isHard = difficulty === "hard";
  var winScore = isHard ? 15 : 10;
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  var html = '<div class="modal"><div class="modal-header">🎲 沙盘对决规则</div>';
  html += '<div class="modal-body">';
  html += '<div style="color:#ffc832;font-size:13px;margin-bottom:6px;font-weight:700;">' + (isHard ? "困难模式：4×5棋盘 · " : "普通模式：4×4棋盘 · ") + winScore + '分获胜</div>';
  html += '<div style="font-size:12px;color:#b464ff;margin-bottom:6px;">★ 分数实时计算：每块地1分，高价值地2分，精摆使地块价值翻倍</div>';
  html += '<ul style="font-size:12px;line-height:1.9;color:rgba(232,213,183,0.85);padding-left:18px;">';
  html += '<li><b style="color:#5cb85c;">铺设</b>：占领与己方接壤的<b>空格</b>（高价值★地值2分）</li>';
  html += '<li><b style="color:#5cb85c;">夺取</b>：抢夺接壤的敌方格子，摧毁其精摆（对方掉分，你得分）</li>';
  html += '<li><b style="color:#5cb85c;">精摆</b>：点击自己的未精摆格子，价值翻倍（高价值地1→2分，普通地1→2分、高价值2→4分）</li>';
  html += '<li><b style="color:#5cb85c;">防御</b>：敌方夺取失败时，会随机震碎它一块领地</li>';
  html += '<li><b style="color:#b464ff;">药剂</b>：眩晕企鹅狗1回合（需神秘药剂，冷却3回合）</li>';
  html += '<li style="color:rgba(232,213,183,0.6);">回合上限30，超时按分数判定胜负</li>';
  if (isHard) html += '<li style="color:#ff6b6b;">困难企鹅狗开局2格，会优先抢占高价值地、夺取你的精摆格！</li>';
  html += '</ul></div>';
  html += '<div class="modal-footer"><button class="modal-close-btn" id="sandbox-rules-start">开始对战</button></div></div>';
  overlay.innerHTML = html;
  document.body.appendChild(overlay);
  overlay.querySelector("#sandbox-rules-start").addEventListener("click", function() {
    overlay.remove();
    updateSandboxHUD();
    renderSandboxActions();
  });
}

// 记录沙盘战斗日志（最新的在前面）
function pushSandboxLog(msg, type) {
  var ss = sandboxState;
  if (!ss) return;
  ss.logs.unshift({ msg: msg, type: type || "player" });
  if (ss.logs.length > 10) ss.logs.pop();
}

function updateSandboxHUD(selectMode, selectAction) {
  var descArea = document.getElementById("description-area");
  var ss = sandboxState;
  var winScore = ss.difficulty === "hard" ? 15 : 10;
  var html = '<div class="battle-hud">';

  // 顶部分数 + 回合数
  html += '<div style="display:flex;justify-content:space-between;padding:6px 0 4px;font-size:13px;">';
  html += '<span style="color:#5cb85c;">你：<b>' + ss.playerScore + '</b>/' + winScore + '</span>';
  html += '<span style="color:rgba(232,213,183,0.5);font-size:12px;">回合 ' + ss.turn + '/' + ss.maxTurns + '</span>';
  html += '<span style="color:#ff6b6b;">企鹅狗：<b>' + ss.enemyScore + '</b>/' + winScore + '</span>';
  html += '</div>';

  // 分数进度条
  var pPct = Math.min(100, Math.round(ss.playerScore / winScore * 100));
  var ePct = Math.min(100, Math.round(ss.enemyScore / winScore * 100));
  html += '<div class="sandbox-progress"><div class="sandbox-progress-fill sandbox-progress-player" style="width:' + pPct + '%;"></div></div>';
  html += '<div class="sandbox-progress"><div class="sandbox-progress-fill sandbox-progress-enemy" style="width:' + ePct + '%;float:right;"></div></div>';

  if (selectMode && selectAction) {
    var modeText = selectAction === "refine" ? "点击自己未精摆的格子"
      : selectAction === "seize" ? "点击要夺取的敌方格子（虚线框）"
      : "点击要铺设的空格子（虚线框）";
    html += '<div style="text-align:center;color:#ffc832;font-size:13px;margin:4px 0;">' + modeText + '</div>';
  }

  // 计算可选格子
  var validCells = {};
  if (selectMode && (selectAction === "settle" || selectAction === "seize")) {
    var adj = getAdjacentCells("player");
    for (var i = 0; i < adj.length; i++) {
      var ar = adj[i][0], ac = adj[i][1];
      // 铺设只能选空格，夺取只能选敌方格
      if ((selectAction === "settle" && ss.board[ar][ac] === null) ||
          (selectAction === "seize" && ss.board[ar][ac] === "enemy")) {
        validCells[ar + "," + ac] = true;
      }
    }
  } else if (selectMode && selectAction === "refine") {
    for (var rr = 0; rr < ss.rows; rr++) {
      for (var cc = 0; cc < ss.cols; cc++) {
        if (ss.board[rr][cc] === "player" && !ss.refined[rr + "," + cc]) {
          validCells[rr + "," + cc] = true;
        }
      }
    }
  }

  // 渲染棋盘（格子固定小尺寸，棋盘宽度随列数自适应）
  var gridWidth = ss.cols * 42 + (ss.cols - 1) * 4;
  html += '<div class="sandbox-grid" id="sandbox-grid" style="grid-template-columns: repeat(' + ss.cols + ', 42px); width:' + gridWidth + 'px; max-width:100%;">';
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      var cell = ss.board[r][c];
      var key = r + "," + c;
      var isHV = ss.highValue[key] ? true : false;
      var cls = "sandbox-cell";
      var content = "";
      if (cell === "player" || cell === "enemy") {
        // 显示该格实时价值：普通1/2（精摆翻倍），高价值2/4
        var base = isHV ? 2 : 1;
        content = ss.refined[key] ? base * 2 : base;
        cls += cell === "player" ? " sandbox-player" : " sandbox-enemy";
        if (isHV) cls += " sandbox-hv-owned";
      } else if (isHV) {
        content = "★";
        cls += " sandbox-hv";
      }
      if (ss.refined[key]) cls += " sandbox-refined-cell";
      // 最近变化的格子播放闪烁动画
      if (ss.lastChange && ss.lastChange[0] === r && ss.lastChange[1] === c) cls += " sandbox-flash";
      if (selectMode && selectAction && validCells[key]) {
        cls += " sandbox-selectable";
      }
      html += '<div class="' + cls + '" data-r="' + r + '" data-c="' + c + '">' + (content || "") + '</div>';
    }
  }
  html += '</div>';

  // 战斗日志面板
  html += '<div class="sandbox-log">';
  for (var li = 0; li < ss.logs.length && li < 6; li++) {
    var entry = ss.logs[li];
    var color = entry.type === "enemy" ? "#ff6b6b" : (entry.type === "sys" ? "#ffc832" : "#5cb85c");
    html += '<div class="sandbox-log-entry" style="color:' + color + ';">' + entry.msg + '</div>';
  }
  if (ss.logs.length === 0) {
    html += '<div class="sandbox-log-entry" style="color:rgba(232,213,183,0.35);">（战斗开始...）</div>';
  }
  html += '</div>';

  if (ss.enemyStunned) {
    html += '<div style="text-align:center;color:#ff6600;margin-top:6px;font-size:12px;">🐧 企鹅狗被眩晕，本回合无法行动！</div>';
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

  // 进入棋盘选择模式的公共流程（铺设/夺取/精摆共用取消逻辑）
  function enterSelectMode(action) {
    updateSandboxHUD(true, action);
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
  }

  // 统计相邻空格（铺设目标）
  var adjCells = getAdjacentCells("player");
  var emptyAdj = 0, enemyAdj = 0;
  for (var ai = 0; ai < adjCells.length; ai++) {
    if (ss.board[adjCells[ai][0]][adjCells[ai][1]] === null) emptyAdj++;
    else enemyAdj++;
  }

  // 铺设：只能占领相邻空格
  var settleBtn = document.createElement("button");
  settleBtn.className = "action-btn sandbox-action-btn";
  settleBtn.textContent = "铺设";
  settleBtn.title = "占领与己方接壤的空格（高价值★地值2分）";
  if (emptyAdj === 0) settleBtn.disabled = true;
  settleBtn.onclick = function() { enterSelectMode("settle"); };
  actionsArea.appendChild(settleBtn);

  // 夺取：抢夺相邻敌方格子
  var seizeBtn = document.createElement("button");
  seizeBtn.className = "action-btn sandbox-action-btn";
  seizeBtn.style.background = "rgba(255,107,107,0.12)";
  seizeBtn.style.borderColor = "rgba(255,107,107,0.45)";
  seizeBtn.style.color = "#ff6b6b";
  seizeBtn.textContent = "夺取";
  seizeBtn.title = "抢夺接壤的敌方格子，摧毁其精摆";
  if (enemyAdj === 0) seizeBtn.disabled = true;
  seizeBtn.onclick = function() { enterSelectMode("seize"); };
  actionsArea.appendChild(seizeBtn);

  // 精摆：点击自己的未精摆格子
  var refinable = 0;
  for (var rr = 0; rr < ss.rows; rr++) {
    for (var cc = 0; cc < ss.cols; cc++) {
      if (ss.board[rr][cc] === "player" && !ss.refined[rr + "," + cc]) refinable++;
    }
  }
  var refineBtn = document.createElement("button");
  refineBtn.className = "action-btn sandbox-action-btn";
  refineBtn.textContent = "精摆";
  refineBtn.title = "点击自己的未精摆格子，价值翻倍";
  if (refinable === 0) refineBtn.disabled = true;
  refineBtn.onclick = function() { enterSelectMode("refine"); };
  actionsArea.appendChild(refineBtn);

  // 防御
  var defendBtn = document.createElement("button");
  defendBtn.className = "action-btn sandbox-action-btn";
  defendBtn.textContent = "防御";
  defendBtn.title = "敌方夺取失败时，会随机震碎它一块领地";
  defendBtn.onclick = function() { doSandboxAction("defend"); };
  actionsArea.appendChild(defendBtn);

  // 神秘药剂
  var hasPotion = hasItem("mystery_potion") && ss.potionCooldown <= 0;
  var potionBtn = document.createElement("button");
  potionBtn.className = "action-btn sandbox-action-btn";
  potionBtn.style.background = "rgba(180, 100, 255, 0.15)";
  potionBtn.style.borderColor = "rgba(180, 100, 255, 0.5)";
  potionBtn.style.color = "#b464ff";
  potionBtn.textContent = hasPotion ? "药剂" : (ss.potionCooldown > 0 ? "冷却" + ss.potionCooldown : "无药剂");
  potionBtn.title = hasPotion ? "使用神秘药剂（眩晕企鹅狗1回合，冷却3回合）" : "需要神秘药剂";
  if (!hasPotion) potionBtn.disabled = true;
  potionBtn.onclick = function() { doSandboxAction("potion"); };
  actionsArea.appendChild(potionBtn);

  // 退出按钮
  var quitBtn = document.createElement("button");
  quitBtn.className = "action-btn sandbox-action-btn";
  quitBtn.style.background = "rgba(255,255,255,0.04)";
  quitBtn.style.borderColor = "rgba(232,213,183,0.15)";
  quitBtn.style.color = "rgba(232,213,183,0.45)";
  quitBtn.textContent = "退出";
  quitBtn.title = "放弃本局，离开沙盘";
  quitBtn.onclick = function() { renderScene("lab_floor"); };
  actionsArea.appendChild(quitBtn);
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
  ss.lastChange = null;

  // 玩家行动
  if (action === "settle") {
    // 铺设：只能铺相邻空格
    if (ss.board[r][c] !== null) return;
    var adjCells = getAdjacentCells("player");
    var valid = false;
    for (var i = 0; i < adjCells.length; i++) {
      if (adjCells[i][0] === r && adjCells[i][1] === c) { valid = true; break; }
    }
    if (!valid) return;
    var isHV = ss.highValue[r + "," + c] ? true : false;
    ss.board[r][c] = "player";
    ss.lastChange = [r, c];
    log = "你铺设了第" + (r+1) + "行第" + (c+1) + "列！" + (isHV ? "★高价值地+2分" : "+1分");
  } else if (action === "seize") {
    // 夺取：只能夺取相邻敌方格
    if (ss.board[r][c] !== "enemy") return;
    var adjCells2 = getAdjacentCells("player");
    var valid2 = false;
    for (var j = 0; j < adjCells2.length; j++) {
      if (adjCells2[j][0] === r && adjCells2[j][1] === c) { valid2 = true; break; }
    }
    if (!valid2) return;
    if (ss.enemyDefend) {
      // 企鹅狗防御成功：你随机失去一块领地
      var lost = sandboxLoseCell("player");
      if (lost) {
        delete ss.refined[lost[0] + "," + lost[1]];
        ss.board[lost[0]][lost[1]] = null;
        ss.lastChange = [lost[0], lost[1]];
        log = "🐧 企鹅狗防御了！你的第" + (lost[0]+1) + "行第" + (lost[1]+1) + "列被震碎！";
      } else {
        log = "🐧 企鹅狗防御了！夺取失败";
      }
    } else {
      var key = r + "," + c;
      var wasRefined = ss.refined[key] ? true : false;
      var isHV2 = ss.highValue[key] ? true : false;
      delete ss.refined[key];
      ss.board[r][c] = "player";
      ss.lastChange = [r, c];
      log = "你夺取了第" + (r+1) + "行第" + (c+1) + "列！" + (isHV2 ? "★高价值地" : "") + (wasRefined ? "（摧毁了企鹅狗的精摆！）" : "");
    }
  } else if (action === "refine") {
    // 验证是自己未精摆的格子
    if (ss.board[r][c] !== "player" || ss.refined[r + "," + c]) return;
    ss.refined[r + "," + c] = true;
    ss.lastChange = [r, c];
    var isHV3 = ss.highValue[r + "," + c] ? true : false;
    log = "你精摆了第" + (r+1) + "行第" + (c+1) + "列！" + (isHV3 ? "★高价值价值翻倍至4分" : "价值翻倍至2分");
  } else if (action === "defend") {
    ss.playerDefend = true;
    log = "你摆出防御架势，企鹅狗夺取会失败并被震碎领地";
  } else if (action === "potion") {
    ss.enemyStunned = true;
    ss.potionCooldown = 3;
    log = "你使用了神秘药剂！企鹅狗眩晕1回合";
  }

  // 记录玩家日志
  pushSandboxLog(log, "player");

  // 实时重算双方分数
  refreshSandboxScores();

  // 回合数+1
  ss.turn++;

  // 检查胜利
  var winScore = ss.difficulty === "hard" ? 15 : 10;
  if (ss.playerScore >= winScore) {
    ss.gameOver = true;
    pushSandboxLog("🏆 你率先达到" + winScore + "分！", "sys");
    descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#5cb85c;font-size:18px;font-weight:700;">你赢了！' + winScore + '分达成！</div></div>';
    document.getElementById("actions-area").innerHTML = "";
    setTimeout(function() { sandboxVictory(); }, 1500);
    return;
  }

  // 重置 enemyDefend（玩家已行动完毕，消耗上回合企鹅狗的防御）
  ss.enemyDefend = false;

  // 企鹅狗行动（单次行动，困难模式依靠策略而非次数）
  var enemyLog = "";
  if (!ss.enemyStunned) {
    enemyLog = sandboxEnemyAI();
    pushSandboxLog(enemyLog, "enemy");
  } else {
    ss.enemyStunned = false;
    pushSandboxLog("🐧 企鹅狗眩晕中，跳过行动", "sys");
  }

  // 实时重算双方分数（企鹅狗行动后）
  refreshSandboxScores();

  // 冷却减1，重置 playerDefend（企鹅狗已行动完毕，消耗上回合玩家的防御）
  if (ss.potionCooldown > 0) ss.potionCooldown--;
  ss.playerDefend = false;

  // 检查企鹅狗胜利
  if (ss.enemyScore >= winScore) {
    ss.gameOver = true;
    pushSandboxLog("💀 企鹅狗率先达到" + winScore + "分！", "sys");
    descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#ff4444;font-size:18px;font-weight:700;">企鹅狗率先达到' + winScore + '分！</div></div>';
    document.getElementById("actions-area").innerHTML = "";
    setTimeout(function() { sandboxDefeat(); }, 1500);
    return;
  }

  // 回合上限结算：分数高者胜
  if (ss.turn >= ss.maxTurns) {
    ss.gameOver = true;
    if (ss.playerScore > ss.enemyScore) {
      pushSandboxLog("⏰ 30回合结束！" + ss.playerScore + " vs " + ss.enemyScore + "，你赢了！", "sys");
      descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#5cb85c;font-size:16px;font-weight:700;">回合结束！<br>' + ss.playerScore + ' vs ' + ss.enemyScore + '<br>你以分数优势获胜！</div></div>';
      document.getElementById("actions-area").innerHTML = "";
      setTimeout(function() { sandboxVictory(); }, 1800);
    } else if (ss.enemyScore > ss.playerScore) {
      pushSandboxLog("⏰ 30回合结束！" + ss.playerScore + " vs " + ss.enemyScore + "，企鹅狗赢了", "sys");
      descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#ff4444;font-size:16px;font-weight:700;">回合结束！<br>' + ss.playerScore + ' vs ' + ss.enemyScore + '<br>企鹅狗以分数优势获胜！</div></div>';
      document.getElementById("actions-area").innerHTML = "";
      setTimeout(function() { sandboxDefeat(); }, 1800);
    } else {
      pushSandboxLog("⏰ 30回合结束！" + ss.playerScore + " vs " + ss.enemyScore + "，平局判企鹅狗胜", "sys");
      descArea.innerHTML = '<div class="battle-hud"><div style="text-align:center;color:#ff4444;font-size:16px;font-weight:700;">回合结束！<br>' + ss.playerScore + ' vs ' + ss.enemyScore + '<br>平局！企鹅狗获胜！</div></div>';
      document.getElementById("actions-area").innerHTML = "";
      setTimeout(function() { sandboxDefeat(); }, 1800);
    }
    return;
  }

  updateSandboxHUD();
  renderSandboxActions();
  // 显示玩家行动弹窗
  if (log) {
    var toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = log;
    document.body.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 2000);
  }
  // 显示企鹅狗行动弹窗（延迟500ms）
  if (enemyLog) {
    setTimeout(function() {
      var eToast = document.createElement("div");
      eToast.className = "toast show";
      eToast.style.background = "rgba(255,107,107,0.9)";
      eToast.textContent = enemyLog;
      document.body.appendChild(eToast);
      setTimeout(function() { eToast.remove(); }, 2000);
    }, 500);
  }
}

// 计算格子集合中离玩家最近的格子（困难AI用于阻止玩家扩张/优先精摆前线）
function sandboxNearestToPlayer(cells) {
  var ss = sandboxState;
  var playerCells = [];
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      if (ss.board[r][c] === "player") playerCells.push([r, c]);
    }
  }
  if (playerCells.length === 0 || cells.length === 0) {
    return cells[Math.floor(Math.random() * cells.length)];
  }
  var best = cells[0], bestDist = Infinity;
  for (var i = 0; i < cells.length; i++) {
    var minD = Infinity;
    for (var j = 0; j < playerCells.length; j++) {
      var d = Math.abs(cells[i][0] - playerCells[j][0]) + Math.abs(cells[i][1] - playerCells[j][1]);
      if (d < minD) minD = d;
    }
    if (minD < bestDist) { bestDist = minD; best = cells[i]; }
  }
  return best;
}

// 评估夺取某格的收益（摧毁对方的价值 + 自己获得的价值）
function sandboxSeizeGain(r, c) {
  var ss = sandboxState;
  var base = ss.highValue[r + "," + c] ? 2 : 1;
  var value = ss.refined[r + "," + c] ? base * 2 : base;
  return value * 2; // 对方损失value + 自己获得value
}

function sandboxEnemyAI() {
  var ss = sandboxState;
  var isHard = ss.difficulty === "hard";
  var isAggro = ss.aiPersonality === "aggressive";
  var winScore = isHard ? 15 : 10;
  var adj = getAdjacentCells("enemy");

  // 性格影响策略参数：激进=高夺取低防御少精摆 / 保守=高防御高精摆
  var seizeChance = isHard ? (isAggro ? 0.92 : 0.72) : (isAggro ? 0.78 : 0.6);
  var defendChance = isAggro ? (isHard ? 0.35 : 0.2) : (isHard ? 0.75 : 0.55);
  var refineBias = isAggro ? 0.85 : 0.97; // 保守派更倾向精摆（压制抢占/铺设的优先级）

  // 相邻格子分类
  var playerAdj = [], emptyAdj = [], hvEmpty = [];
  for (var i = 0; i < adj.length; i++) {
    var ar = adj[i][0], ac = adj[i][1];
    if (ss.board[ar][ac] === "player") {
      playerAdj.push(adj[i]);
    } else {
      emptyAdj.push(adj[i]);
      if (ss.highValue[ar + "," + ac]) hvEmpty.push(adj[i]);
    }
  }

  // 可精摆的自己格子（优先高价值：精摆高价值=+2分）
  var refinable = [], refinableHV = [];
  for (var r = 0; r < ss.rows; r++) {
    for (var c = 0; c < ss.cols; c++) {
      if (ss.board[r][c] === "enemy" && !ss.refined[r + "," + c]) {
        if (ss.highValue[r + "," + c]) refinableHV.push([r, c]);
        else refinable.push([r, c]);
      }
    }
  }

  // 1. 防御：玩家接近胜利时概率防御（保守派更警觉）
  var defendThreshold = winScore - 3;
  if (ss.playerScore >= defendThreshold && Math.random() < defendChance && playerAdj.length > 0) {
    ss.enemyDefend = true;
    return "🐧 企鹅狗摆出防御架势！";
  }

  // 2. 夺取玩家格子（困难AI按收益选最优，优先摧毁玩家精摆/高价值格）
  if (playerAdj.length > 0 && Math.random() < seizeChance) {
    var pick;
    if (isHard) {
      pick = playerAdj[0];
      var bestGain = -1;
      for (var g = 0; g < playerAdj.length; g++) {
        var gain = sandboxSeizeGain(playerAdj[g][0], playerAdj[g][1]);
        if (gain > bestGain) { bestGain = gain; pick = playerAdj[g]; }
      }
    } else {
      pick = playerAdj[Math.floor(Math.random() * playerAdj.length)];
    }
    if (ss.playerDefend) {
      // 玩家防御成功：企鹅狗随机失去一块领地
      var lost = sandboxLoseCell("enemy");
      if (lost) {
        delete ss.refined[lost[0] + "," + lost[1]];
        ss.board[lost[0]][lost[1]] = null;
        ss.lastChange = [lost[0], lost[1]];
        return "🐧 企鹅狗夺取失败被反震！它的第" + (lost[0]+1) + "行第" + (lost[1]+1) + "列被震碎！";
      }
      return "🐧 企鹅狗夺取失败！";
    }
    var key = pick[0] + "," + pick[1];
    var wasRefined = ss.refined[key] ? true : false;
    var isHV = ss.highValue[key] ? true : false;
    delete ss.refined[key];
    ss.board[pick[0]][pick[1]] = "enemy";
    ss.lastChange = [pick[0], pick[1]];
    return "🐧 企鹅狗夺取了第" + (pick[0]+1) + "行第" + (pick[1]+1) + "列！" + (isHV ? "★" : "") + (wasRefined ? "（摧毁了你的精摆！）" : "");
  }

  // 3. 精摆（保守派优先级更高；优先高价值格，困难AI其次选前线阻止玩家扩张）
  var allRefinable = refinableHV.concat(refinable);
  if (allRefinable.length > 0 && Math.random() < refineBias) {
    var pool = refinableHV.length > 0 ? refinableHV : allRefinable;
    var pick3 = isHard ? sandboxNearestToPlayer(pool) : pool[Math.floor(Math.random() * pool.length)];
    ss.refined[pick3[0] + "," + pick3[1]] = true;
    ss.lastChange = [pick3[0], pick3[1]];
    var hvR = ss.highValue[pick3[0] + "," + pick3[1]] ? "★高价值" : "";
    return "🐧 企鹅狗精摆了" + hvR + "第" + (pick3[0]+1) + "行第" + (pick3[1]+1) + "列！";
  }

  // 4. 抢占高价值空格
  if (hvEmpty.length > 0 && Math.random() < 0.9) {
    var pick2 = hvEmpty[Math.floor(Math.random() * hvEmpty.length)];
    ss.board[pick2[0]][pick2[1]] = "enemy";
    ss.lastChange = [pick2[0], pick2[1]];
    return "🐧 企鹅狗抢占了★高价值地第" + (pick2[0]+1) + "行第" + (pick2[1]+1) + "列！";
  }

  // 5. 普通铺设（困难AI选离玩家近的格子，阻止玩家扩张方向）
  if (emptyAdj.length > 0) {
    var pick4 = isHard ? sandboxNearestToPlayer(emptyAdj) : emptyAdj[Math.floor(Math.random() * emptyAdj.length)];
    ss.board[pick4[0]][pick4[1]] = "enemy";
    ss.lastChange = [pick4[0], pick4[1]];
    return "🐧 企鹅狗铺设了第" + (pick4[0]+1) + "行第" + (pick4[1]+1) + "列！";
  }

  // 6. 无事可做：接壤则防御，否则空过
  if (playerAdj.length > 0) {
    ss.enemyDefend = true;
    return "🐧 企鹅狗摆出防御架势！";
  }
  return "🐧 企鹅狗无所事事...";
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
  startTypewriter("企鹅狗：是我输了|企鹅狗：……你的心里，好多东西啊|哈哈哈哈！胜利者！是我", null, null, null);
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
  typewriterSession = { autoNext: autoNext, autoJump: autoJump, getItem: getItem };

  var descArea = document.getElementById("description-area");
  descArea.innerHTML = "<span class=\"cursor\"></span>";
  descArea.onclick = null;
  showSkipBtn();

  typeNextChar(autoNext, autoJump, getItem);
}

// 打字下一个字
function typeNextChar(autoNext, autoJump, getItem) {
  var descArea = document.getElementById("description-area");
  if (currentSentenceIndex >= currentSentences.length) {
    // 所有句子打完
    typewriterDone = true;
    typewriterSession = null;
    hideSkipBtn();
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
        // 仅当按钮区有内容时才显示：防止已清空的序列剧情把残留按钮重新显示出来
        var actionsEl = document.getElementById("actions-area");
        if (actionsEl.innerHTML.trim()) actionsEl.style.display = "flex";
      };
    }
    return;
  }

  var sentence = currentSentences[currentSentenceIndex];

  // 当前句子打完的展示与点击推进
  function showSentenceDone() {
    descArea.innerHTML = sentence + "<span class=\"tap-hint\">▼ 点击继续</span>";
    descArea.onclick = function() {
      descArea.onclick = null;
      currentSentenceIndex++;
      currentCharIndex = 0;
      descArea.innerHTML = "<span class=\"cursor\"></span>";
      typewriterTimer = setTimeout(function() { typeNextChar(autoNext, autoJump, getItem); }, 50);
    };
  }

  if (currentCharIndex < sentence.length) {
    // 还在当前句子中，逐字显示
    var typed = sentence.substring(0, currentCharIndex + 1);
    descArea.innerHTML = typed + "<span class=\"cursor\"></span>";
    currentCharIndex++;
    // 打字中单击：快进显示整句
    descArea.onclick = function() {
      descArea.onclick = null;
      if (typewriterTimer) { clearTimeout(typewriterTimer); typewriterTimer = null; }
      currentCharIndex = sentence.length;
      showSentenceDone();
    };
    typewriterTimer = setTimeout(function() { typeNextChar(autoNext, autoJump, getItem); }, 50);
  } else {
    // 当前句子打完，等待点击
    showSentenceDone();
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
// 成就分组：主线剧情 / 决斗与小游戏 / 整活与隐藏
var ACHIEVEMENT_GROUPS = [
  { name: "🌙 梦之旅途", ids: [
    "first_meet", "dream_eternal", "drunk_dream", "hachi_legend",
    "stuck_in_backrooms", "red_room", "starved_to_death", "level1",
    "unhygienic", "skin_stealer", "past_running_ground",
    "strange_place", "eternal_sleep", "lab_1f", "library_fail", "chem_lab_enter",
  ]},
  { name: "⚔️ 决斗与小游戏", ids: [
    "hachi_king", "hachi_emperor", "not_strong", "retry_courage",
    "beat_bigfoot", "easy_bigfoot", "chem_king", "nightmare_bigfoot", "lost_to_bigfoot",
    "penguin_dog", "sandbox_win", "sandbox_lose", "sandbox_hard_win",
    "canteen_king", "canteen_got_some",
    "band_king", "bocchi_band",
    "confucius_bless", "little_greedy_cat", "eat_to_death", "grass_king",
    "beat_alien", "pooped_on", "nasa_detected", "capture_pig", "desert_pig_sight",
  ]},
  { name: "😈 整活与隐藏", ids: [
    "flying_pig", "so_free", "toilet_lover", "heavy_taste", "flat_fall", "fly_higher",
  ]},
];

function openAchievements() {
  // 清除新成就提醒
  gameState.newAchievements = [];
  updateAchievementBadge();

  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  var achHtml = "";

  // 分组渲染：组内已解锁排前面；未入组的成就兜底进"其他"
  var grouped = {};
  for (var g = 0; g < ACHIEVEMENT_GROUPS.length; g++) {
    var grp = ACHIEVEMENT_GROUPS[g];
    var items = [];
    for (var i = 0; i < grp.ids.length; i++) {
      var cfg = ACHIEVEMENT_CONFIG[grp.ids[i]];
      if (cfg) { items.push(cfg); grouped[grp.ids[i]] = true; }
    }
    items.sort(function(a, b) { return (hasAchievement(a.id) ? -1 : 1) - (hasAchievement(b.id) ? -1 : 1); });
    var got = 0;
    for (var k = 0; k < items.length; k++) if (hasAchievement(items[k].id)) got++;
    achHtml += '<div class="ach-group-title">' + grp.name + ' <span class="ach-group-count">' + got + '/' + items.length + '</span></div>';
    achHtml += renderAchCards(items);
  }
  // 兜底：不在任何分组的成就
  var rest = Object.values(ACHIEVEMENT_CONFIG).filter(function(a) { return !grouped[a.id]; });
  if (rest.length) {
    rest.sort(function(a, b) { return (hasAchievement(a.id) ? -1 : 1) - (hasAchievement(b.id) ? -1 : 1); });
    achHtml += '<div class="ach-group-title">📦 其他 <span class="ach-group-count"></span></div>';
    achHtml += renderAchCards(rest);
  }

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

// 渲染一组成就卡片
function renderAchCards(items) {
  var html = "";
  items.forEach(function(ach) {
    var isUnlocked = hasAchievement(ach.id);
    html +=
      '<div class="ach-card ' + (isUnlocked ? "unlocked" : "locked") + '">' +
      '<div class="ach-icon">' + (isUnlocked ? ach.icon : "❓") + '</div>' +
      '<div class="ach-info">' +
      '<div class="ach-name">' + ach.name + '</div>' +
      '<div class="ach-desc">' + ach.desc + '</div>' +
      '</div>' +
      '</div>';
  });
  return html;
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
  battleState.round = 1;
  battleState.lastPlayerAction = null;
  battleState.hachiPlannedAction = null;
  battleState.hachiMindRead = false;
  // 开局先规划哈基高的行动（供HUD倾向提示）
  planHachiAction();

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

  // 誓约胜利之哈按钮（蓄力爆发：积满3气解锁，造成2点伤害，消耗全部气）
  var fullHaBtn = document.createElement("button");
  fullHaBtn.className = "action-btn battle-btn battle-full-btn";
  fullHaBtn.id = "full-ha-btn";
  fullHaBtn.textContent = "💥 誓约胜利之哈（消耗全部气，造成2点伤害）";
  fullHaBtn.addEventListener("click", function() { handleBattleAction("誓约胜利之哈"); });
  actionsArea.appendChild(fullHaBtn);

  // 规则按钮
  var ruleBtn = document.createElement("button");
  ruleBtn.className = "action-btn";
  ruleBtn.style.cssText = "background:linear-gradient(135deg,#555,#444);color:#aaa;";
  ruleBtn.textContent = "📖 查看规则";
  ruleBtn.addEventListener("click", function() {
    showPopupModal("【御前决斗规则】<br><br>⚔️ 哈气：消耗1气攻击对手，对手未格挡则造成伤害<br>🛡️ 格挡：免消耗，抵挡对手的哈气<br>💨 呼吸：积累1气<br>💥 誓约胜利之哈：蓄满3气解放，造成2点伤害，消耗全部气<br><br>⚠️ 哈基高蓄满3气后也会解放誓约胜利之哈——它能<b>无视格挡</b>直接命中！<br>反制手段：抢先击杀它，或以你自己的誓约胜利之哈<b>对轰抵消</b>！<br><br>哈基高会观察你的气量随机应变：你蓄满气时它会重点防御，你气竭时它会趁机猛攻！留意HUD中它的架势提示。<br>" + (gameState.hachiDifficulty === "hard" ? "困难模式：哈基高拥有2点血量，每次攻击消耗1点，且有20%概率看穿你的行动！" : "普通模式：一击制胜！"));
  });
  actionsArea.appendChild(ruleBtn);
}

function updateBattleHUD() {
  var descArea = document.getElementById("description-area");
  var isHard = gameState.hachiDifficulty === "hard";
  var hpDisplay = isHard ? '<div class="battle-ki">哈基高血量：<span class="ki-num" style="color:#ff6b6b;">' + "♥".repeat(battleState.hachiHP) + '</span></div>' : '';
  // 蓄力爆发是否就绪（3气解锁誓约胜利之哈）
  var fullReady = battleState.playerKi >= 3;
  // 哈基高蓄满3气：誓约胜利之哈随时可能降临（破盾警告）
  var hachiCharged = battleState.hachiKi >= 3;
  descArea.innerHTML =
    '<div class="battle-hud">' +
    '<div class="battle-round">—— 第 ' + battleState.round + ' 回合 ——</div>' +
    '<div class="battle-ki">你的气：<span class="ki-num">' + battleState.playerKi + '</span></div>' +
    '<div class="battle-ki">哈基高的气：<span class="ki-num">' + battleState.hachiKi + '</span></div>' +
    hpDisplay +
    (hachiCharged ? '<div class="battle-hachiwarn">⚠️ 哈基高气息已蓄满——誓约胜利之哈随时可能降临，格挡无效！</div>' : '') +
    '<div class="battle-tip">' + getHachiTendencyHint() + '</div>' +
    (fullReady ? '<div class="battle-fullready">💥 蓄力完成！誓约胜利之哈已解锁！</div>' : '') +
    '<div class="battle-round">选择你的行动</div>' +
    '</div>';
  // 同步誓约胜利之哈按钮的可用状态
  var fullBtn = document.getElementById("full-ha-btn");
  if (fullBtn) {
    fullBtn.disabled = !fullReady;
    fullBtn.style.opacity = fullReady ? "1" : "0.45";
  }
  descArea.onclick = null;
}

function handleBattleAction(action) {
  if (!battleState.inBattle) return;

  // 检查哈气是否够气
  if (action === "哈气" && battleState.playerKi < 1) {
    showPopupModal("气不够！请先使用「呼吸」积累气。");
    return;
  }
  // 誓约胜利之哈需要蓄满3气
  if (action === "誓约胜利之哈" && battleState.playerKi < 3) {
    showPopupModal("气不够！「誓约胜利之哈」需要蓄满3气（连续呼吸3次）。");
    return;
  }

  // 哈基高行动：困难模式读心触发时看穿玩家本回合行动并针对性反制，否则使用预定行动
  var mindReadUsed = false;
  var hachiAction;
  if (battleState.hachiMindRead) {
    mindReadUsed = true;
    triggerBattleFx("mind"); // 读心紫闪特效
    if (action === "哈气" || action === "誓约胜利之哈") hachiAction = "格挡";
    else if (battleState.hachiKi >= 3) hachiAction = "誓约胜利之哈"; // 看穿玩家格挡/呼吸且气已蓄满：直接解放誓约
    else if (action === "格挡") hachiAction = "呼吸";
    else hachiAction = battleState.hachiKi >= 1 ? "哈气" : "呼吸";
  } else {
    hachiAction = battleState.hachiPlannedAction || "呼吸";
  }

  // 执行玩家行动（誓约胜利之哈消耗全部气，风险与爆发并存）
  if (action === "哈气") battleState.playerKi--;
  if (action === "誓约胜利之哈") battleState.playerKi = 0;
  if (action === "呼吸") battleState.playerKi++;

  // 执行哈基高行动（誓约胜利之哈同样消耗全部气）
  if (hachiAction === "哈气") battleState.hachiKi--;
  if (hachiAction === "誓约胜利之哈") battleState.hachiKi = 0;
  if (hachiAction === "呼吸") battleState.hachiKi++;

  // 情境化台词 + 台词气泡（先在图片区展示，稍后再弹结算窗）
  var hachiSay = getHachiLine(hachiAction, action, mindReadUsed);
  showHachiBubble(hachiSay);

  var isFullHa = action === "誓约胜利之哈";
  var resultMsg = "";
  resultMsg += "【你的行动】" + action + "<br>";
  resultMsg += "【哈基高的行动】" + hachiAction + " " + hachiSay + "<br><br>";

  // ===== 双誓约对轰：两道光炮相互抵消 =====
  var clashed = (action === "誓约胜利之哈" && hachiAction === "誓约胜利之哈");
  if (clashed) {
    triggerBattleFx("impact");
    resultMsg += "双方同时解放了誓约胜利之哈！！<br>两道光炮在正中央轰然相撞，爆发出刺目的光辉——<br>相互抵消！双方的气被冲击波尽数吹散。";
  }
  // 玩家攻击判定（哈气1点伤害，誓约胜利之哈2点）
  else if (action === "哈气" || isFullHa) {
    if (hachiAction === "格挡") {
      resultMsg += "哈基高格挡了你的" + (isFullHa ? "誓约胜利之哈" : "攻击") + "！毫发无伤。";
    } else {
      battleState.hachiHP -= isFullHa ? 2 : 1;
      triggerBattleFx("impact"); // 命中闪白震动
      if (battleState.hachiHP <= 0) {
        resultMsg += "哈基高被你的" + (isFullHa ? "誓约胜利之哈" : "哈气") + "击中！哈基高出局！";
        battleState.inBattle = false;
        delayedModal(resultMsg, function() {
          unlockAchievement("hachi_king");
          var achCfg = ACHIEVEMENT_CONFIG["hachi_king"];
          showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>", function() {
            if (gameState.hachiDifficulty === "hard") {
              setTimeout(function() {
                unlockAchievement("hachi_emperor");
                var achCfg2 = ACHIEVEMENT_CONFIG["hachi_emperor"];
                showPopupModal("成就解锁：" + achCfg2.icon + " " + achCfg2.name + "<br><small>" + achCfg2.desc + "</small>", function() {
                  renderScene("duel_victory");
                });
              }, 400);
            } else {
              renderScene("duel_victory");
            }
          });
        });
        return;
      } else {
        resultMsg += "哈基高被你的" + (isFullHa ? "誓约胜利之哈" : "哈气") + "击中！剩余血量：" + "♥".repeat(battleState.hachiHP) + "（" + battleState.hachiHP + "/" + (gameState.hachiDifficulty === "hard" ? 2 : 1) + "）";
      }
    }
  }

  // 哈基高哈气判定
  if (hachiAction === "哈气") {
    if (action === "格挡") {
      resultMsg += "你格挡了哈基高的攻击！毫发无伤。";
    } else {
      resultMsg += "你被哈基高的哈气击中！你出局了！";
      triggerBattleFx("player-hit"); // 玩家受击剧烈震动
      battleState.inBattle = false;
      delayedModal(resultMsg, function() {
        unlockAchievement("not_strong");
        var achCfg = ACHIEVEMENT_CONFIG["not_strong"];
        showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>", function() {
          renderScene("duel_defeat");
        });
      });
      return;
    }
  }

  // 哈基高誓约胜利之哈判定：破盾——无视格挡直接命中
  if (!clashed && hachiAction === "誓约胜利之哈") {
    if (action === "格挡") {
      resultMsg += "哈基高解放了誓约胜利之哈！！<br>光炮贯穿了你的格挡——你被吞没了！你出局了！";
    } else {
      resultMsg += "你被哈基高的誓约胜利之哈吞噬了！你出局了！";
    }
    triggerBattleFx("player-hit");
    battleState.inBattle = false;
    delayedModal(resultMsg, function() {
      unlockAchievement("not_strong");
      var achCfg = ACHIEVEMENT_CONFIG["not_strong"];
      showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>", function() {
        renderScene("duel_defeat");
      });
    });
    return;
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

  // 记录本回合玩家行动，推进回合数并规划哈基高下一回合的策略
  battleState.lastPlayerAction = action;
  battleState.round++;
  planHachiAction();

  delayedModal(resultMsg);
  updateBattleHUD();
}

// 延迟弹出结算弹窗，给台词气泡和战斗特效留出展示时间
function delayedModal(msg, onClose) {
  setTimeout(function() { showPopupModal(msg, onClose); }, 950);
}

// 战斗特效：impact=命中闪白震动 player-hit=玩家受击剧震 mind=读心紫闪
function triggerBattleFx(type) {
  var c = document.getElementById("game-container");
  if (!c) return;
  var cls = type === "player-hit" ? "shake-hard" : type === "mind" ? "mind-flash" : "impact";
  c.classList.remove(cls);
  void c.offsetWidth; // 强制重绘，确保同名动画可重复触发
  c.classList.add(cls);
  setTimeout(function() { c.classList.remove(cls); }, 1000);
}

// 哈基高台词气泡：叠在图片区右下角，自动消失
var hachiBubbleTimer = null;
function showHachiBubble(text) {
  var imgArea = document.getElementById("image-area");
  if (!imgArea) return;
  var old = imgArea.querySelector(".hachi-bubble");
  if (old) old.remove();
  if (hachiBubbleTimer) clearTimeout(hachiBubbleTimer);
  var b = document.createElement("div");
  b.className = "hachi-bubble";
  b.textContent = text;
  imgArea.appendChild(b);
  hachiBubbleTimer = setTimeout(function() {
    b.classList.add("out");
    setTimeout(function() { if (b.parentNode) b.remove(); }, 320);
  }, 2300);
}

// ===== 哈基高策略型AI =====
// 按权重随机选择（pairs为[选项, 权重]数组，权重总和100）
function weightedPick(pairs) {
  var total = 0;
  for (var i = 0; i < pairs.length; i++) total += pairs[i][1];
  var r = Math.random() * total;
  for (var j = 0; j < pairs.length; j++) {
    if (r < pairs[j][1]) return pairs[j][0];
    r -= pairs[j][1];
  }
  return pairs[pairs.length - 1][0];
}

// 哈基高每回合策略规划（在玩家行动前决定，供HUD倾向提示与结算使用）
function planHachiAction() {
  battleState.hachiMindRead = false;
  battleState.hachiPlannedAction = null;

  var isHard = gameState.hachiDifficulty === "hard";
  var playerHasKi = battleState.playerKi >= 1;   // 玩家随时能哈气（危险状态）
  var hachiHasKi = battleState.hachiKi >= 1;
  // 趁虚而入判断：玩家刚用哈气耗光了气（本回合只能格挡或呼吸）
  var playerJustExhausted = battleState.lastPlayerAction === "哈气" && battleState.playerKi === 0;

  // 困难模式读心：20%概率看穿玩家本回合行动（结算时针对性反制，HUD不显示倾向）
  if (isHard && Math.random() < 0.2) {
    battleState.hachiMindRead = true;
    battleState.hachiPlannedAction = "读心";
    return;
  }

  var block = 0, breathe = 0, ha = 0, full = 0;
  if (battleState.hachiKi >= 3) {
    // 蓄满3气：随时可能解放誓约胜利之哈（破盾，无视格挡）
    if (playerHasKi) {
      full = isHard ? 35 : 25;   // 玩家有气：主要仍以防为主，偶发大招
      block = 60;
      breathe = 100 - full - block;
    } else {
      // 玩家0气：格挡无意义，大概率解放誓约（格挡也挡不住光炮）
      full = isHard ? 55 : 45;
      if (playerJustExhausted) full = Math.min(full + 15, 75); // 趁虚而入：气刚耗光直接处刑
      ha = 15;
      breathe = 100 - full - ha;
    }
  } else if (playerHasKi) {
    // 危险预警：玩家有气时重点格挡（普通55%/困难60%）
    block = isHard ? 60 : 55;
    // 玩家蓄满3气（誓约胜利之哈威胁）：格挡欲望更强，封顶80%
    if (battleState.playerKi >= 3) block = Math.min(block + 15, 80);
    if (hachiHasKi) {
      breathe = isHard ? 20 : 25;
      ha = 20;
    } else {
      breathe = 100 - block;
      ha = 0;
    }
  } else {
    // 玩家0气：绝不格挡，趁机蓄力或进攻
    block = 0;
    if (hachiHasKi) {
      ha = isHard ? 50 : 40;
      if (playerJustExhausted) {
        // 趁虚而入：玩家气刚耗光，大幅提高哈气概率
        ha = isHard ? 75 : 70;
      }
      breathe = 100 - ha;
    } else {
      ha = 0;
      breathe = 100;
    }
  }
  battleState.hachiPlannedAction = weightedPick([["格挡", block], ["呼吸", breathe], ["哈气", ha], ["誓约胜利之哈", full]]);
}

// HUD倾向提示：根据哈基高本回合的架势给出暗示（读心时不可读，偶尔神色难测）
function getHachiTendencyHint() {
  if (battleState.hachiMindRead) return "哈基高的眼神深不可测，似乎看穿了什么……";
  // 誓约胜利之哈的预警必须绝对准确——这是玩家唯一的反制窗口（对轰/抢先击杀）
  if (battleState.hachiPlannedAction === "誓约胜利之哈") return "⚠️ 哈基高正在凝聚全部气力——誓约胜利之哈即将降临！！";
  // 提示并非100%准确：困难模式更容易摸不透
  var vagueChance = gameState.hachiDifficulty === "hard" ? 0.3 : 0.15;
  if (Math.random() < vagueChance) return "哈基高神色平静，难以捉摸……";
  if (battleState.hachiPlannedAction === "格挡") return "哈基高正凝神戒备……";
  if (battleState.hachiPlannedAction === "哈气") return "哈基高杀气毕露，气息骤然凶猛！";
  if (battleState.hachiPlannedAction === "呼吸") return "哈基高缓缓沉腰，似乎在酝酿气息……";
  return "";
}

// 情境化台词：根据双方行动与读心状态选择台词
function getHachiLine(hachiAction, playerAction, mindReadUsed) {
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  if (mindReadUsed) return "「你的行动，早已在我预料之中」";
  if (hachiAction === "誓约胜利之哈") {
    if (playerAction === "誓约胜利之哈") return "「什么！？竟敢以誓约对轰——！！！」";
    if (playerAction === "格挡") return "「那面盾，可挡不住此等光芒」";
    return pick(["「EX——誓约·胜利之哈！！！」", "「于此见证吧，吾毕生修行之极致——」", "「哈啊啊啊啊啊啊——！！！！」"]);
  }
  if (hachiAction === "格挡") {
    if (playerAction === "誓约胜利之哈") {
      // 挡下玩家的孤注一掷
      return pick(["「孤注一掷吗……防下了！！！」", "「把气全部押上，太过天真了呢」", "「哈啊啊——什么都没发生」"]);
    }
    if (playerAction === "哈气") {
      // 危险期格挡成功
      return pick(["「亚嘞亚嘞，被我看穿了呢」", "「防下了！！！」", "「这种程度的哈气，可伤不到我」"]);
    }
    // 扑空格挡
    return pick(["「……防了个寂寞」", "「切，居然不出手吗」", "「谨慎些总归没错」"]);
  }
  if (hachiAction === "哈气") {
    return pick(["「天翔哈闪！！！」", "「哈之呼吸·贰之型·飞沫！」", "「接招吧！这就是哈气大师的实力！」"]);
  }
  // 呼吸蓄力
  return pick(["「哈之呼吸法·壹之型」", "「调整气息……」", "「为下一击，做好准备……」"]);
}

// ===== 乐队大赛小游戏 =====
// 与AI经纪人经营乐队对抗：10回合内比拼总知名度
// 特殊艺人配置（全游戏唯一，每回合市场最多刷出2个；数值=初始设计×2，能力无视160上限，演出成长可继续突破）
var BAND_SPECIAL_ARTISTS = [
  { specialId: "yamada",  name: "山田凉",     role: "贝斯手", price: 60, ability: 180, stability: 150, vocal: 25, emoji: "🦎", desc: "每次演出后可能偷走 50 金币演出收益（超级败家）" },
  { specialId: "nijika",  name: "伊地知虹夏", role: "鼓手",   price: 140, ability: 172, stability: 166, vocal: 65, emoji: "🥁", desc: "提升本队其他队员每人 14 点稳定度" },
  { specialId: "hirokita",name: "广井菊里",   role: "贝斯手", price: 60, ability: 170, stability: 168, vocal: 40, emoji: "🍺", desc: "演出前有概率喝醉，能力值下降 120 点" },
  { specialId: "kita",    name: "喜多郁代",   role: "吉他手", price: 150, ability: 166, stability: 156, vocal: 85, emoji: "✨", desc: "吉他英雄变身：个人知名度收益 +30%" },
  { specialId: "bocchi",  name: "后藤独",     role: "吉他手", price: 100, ability: 190, stability: 80, vocal: 1, emoji: "📮", desc: "社恐吉他英雄：能力登峰造极但情绪极不稳定，唱腔稀烂" },
  { specialId: "sakiko",  name: "丰川祥子",   role: "吉他手", price: 120, ability: 177, stability: 58, vocal: 80, emoji: "🎹", desc: "乐队粉碎机：每过3回合可能逼退队内一名队员，也可能自己退队" },
  { specialId: "tomori",  name: "高松灯",     role: "主唱",   price: 115, ability: 140, stability: 82, vocal: 95, emoji: "🐧", desc: "想把歌…唱好。唱腔登峰造极的专职主唱" },
  { specialId: "anon",    name: "千早爱音",   role: "吉他手", price: 100, ability: 183, stability: 85, vocal: 78, emoji: "🌟", desc: "爱音也要搞乐队！全面强力无短板" },
];
// 普通艺人随机名池（大部分日式风格，保留几个唐人整活名）
var BAND_NORMAL_NAMES = ["田中太郎","铃木花子","佐藤悠希","渡边葵","山本樱","中村陆","小林芽衣","春日纯","林田空","斋藤莲","伊藤奈奈","阿部由美","上田真","森太阳","池田枫","石川纯菜","白石澪","高桥凉","松本雪菜","藤原翼","加藤浩二","水野枫","星野辉","栗原遥","雨宫莲","桥本奈奈未","矢野绫音","远藤樱","绫濑遥","菊池幸代","堀越丽奈","相泽慧","守屋瞳","冈崎绘里","村上葵","本多光太郎","长谷川堇","三浦春马","宫本岚","大冢爱美","西田结衣","东云玲","楠木灯里","一之濑翼","神谷诗织","月冈恋钟","日向翔阳","樱井优斗","望月聪","有马加奈","阿强","狗蛋","铁柱"];
// 乐队位置：吉他手×2、鼓手、贝斯手、主唱（吉他双权重）
var BAND_ROLES = ["吉他手","吉他手","贝斯手","鼓手","主唱"];
var BAND_ROLE_EMOJI = { "吉他手": "🎸", "贝斯手": "🎻", "鼓手": "🥁", "主唱": "🎤" };
// 普通艺人特殊能力（生成时20%概率附带一个；后半为搞怪高数值款）
var BAND_NORMAL_PERKS = [
  { perk: "practice", name: "练习狂",   desc: "每次演出后能力永久+6" },
  { perk: "cheer",    name: "气氛担当", desc: "全队其他队员稳定+4" },
  { perk: "idol",     name: "偶像气质", desc: "个人金币收益+30%" },
  { perk: "veteran",  name: "老油条",   desc: "发挥下限0.9，几乎不失误" },
  { perk: "rich",     name: "富二代",   desc: "签约后返还10金币" },
  { perk: "genius",   name: "天才型",   desc: "入队时能力立即+15" },
  { perk: "gambler",  name: "赌狗之魂", desc: "每场演出50%收益翻倍，50%收益减半" },
  { perk: "eater",    name: "干饭王",   desc: "入队能力+20，但每回合吃掉3金币伙食费" },
  { perk: "crowd",    name: "人来疯",   desc: "标准编制达成时个人发挥×1.5" },
  { perk: "rockstar", name: "摇滚巨星", desc: "个人知名度收益+50%" },
  { perk: "dividend", name: "甩手掌柜", desc: "每回合固定分红+5金币（无需上场）" },
];
var bandState = null;
var BAND_UID = 0;   // 队员唯一编号（主唱指派用）

// 入口：开始乐队大赛（传送门直接调用）
function renderBandGame() {
  stopTypewriter();
  if (pendingAutoJumpTimer) { clearTimeout(pendingAutoJumpTimer); pendingAutoJumpTimer = null; }
  stopCanteenGame();
  stopBossFight();
  stopBandGame();

  document.getElementById("location-name").textContent = "乐队大赛";
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  actionsArea.style.display = "flex";

  // 隐藏剧情图，游戏面板填充图片区
  var area = document.getElementById("image-area");
  var img = document.getElementById("scene-img");
  img.src = "";
  img.style.display = "none";
  document.getElementById("scene-placeholder").style.display = "none";

  var panel = document.createElement("div");
  panel.id = "band-panel";
  area.appendChild(panel);

  // 初始化对局状态（AI资金更雄厚，玩家需靠策略取胜）
  bandState = {
    round: 1, maxRound: 10, phase: "sign",
    gold: 150, fame: 0,
    aiGold: 300, aiFame: 0,
    band: [], aiBand: [],
    market: [], usedSpecial: {},
    live: false,   // 本回合是否已安排Live House专场
    vocalUid: null, // 主唱兼任队员uid
    logs: [],
  };
  bandState.market = bandGenMarket(1);
  bandState.logs.push("📢 乐队大赛开幕！你持 150 金币 vs AI经纪人 300 金币，10 回合后比拼总知名度！");
  bandRender();
}

// 清理乐队面板（renderScene切场景时调用）
function stopBandGame() {
  var panel = document.getElementById("band-panel");
  if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
}

// 生成普通艺人（能力随回合成长，10回合制，能力上限160；唱腔：专职主唱50-90、其他10-90）
function bandGenNormal(round) {
  var growth = (round - 1) * 9;
  var ability = Math.min(160, 30 + growth + Math.floor(Math.random() * 31)); // r1:30-60 → r10:111-141
  var stability = 35 + Math.floor(Math.random() * 46);          // 35-80
  var name = BAND_NORMAL_NAMES[Math.floor(Math.random() * BAND_NORMAL_NAMES.length)];
  var role = BAND_ROLES[Math.floor(Math.random() * BAND_ROLES.length)];
  var vocal = role === "主唱" ? 50 + Math.floor(Math.random() * 41) : 10 + Math.floor(Math.random() * 81);
  var price = role === "主唱"
    ? Math.round((ability + vocal + stability) / 2 * (0.9 + Math.random() * 0.2))
    : Math.round((ability + stability) / 2 * (0.9 + Math.random() * 0.2));
  var perkCfg = null;
  if (Math.random() < 0.2) perkCfg = BAND_NORMAL_PERKS[Math.floor(Math.random() * BAND_NORMAL_PERKS.length)];
  return {
    name: name, role: role, price: price, ability: ability, stability: stability, vocal: vocal,
    emoji: BAND_ROLE_EMOJI[role] || "🎤", specialId: null,
    perk: perkCfg ? perkCfg.perk : null, perkName: perkCfg ? perkCfg.name : null,
    perkDesc: perkCfg ? perkCfg.desc : null,
  };
}

// 生成市场：5人，特殊艺人每回合最多2个（不与已签重复）
function bandGenMarket(round) {
  var market = [];
  var specialCount = 0;
  var r = Math.random();
  if (r < 0.25) specialCount = 2; else if (r < 0.8) specialCount = 1;
  var pool = [];
  for (var i = 0; i < BAND_SPECIAL_ARTISTS.length; i++) {
    if (!bandState.usedSpecial[BAND_SPECIAL_ARTISTS[i].specialId]) pool.push(BAND_SPECIAL_ARTISTS[i]);
  }
  // 洗牌
  for (var j = pool.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var tmp = pool[j]; pool[j] = pool[k]; pool[k] = tmp;
  }
  specialCount = Math.min(specialCount, pool.length);
  for (var s = 0; s < specialCount; s++) market.push(pool[s]);
  while (market.length < 5) market.push(bandGenNormal(round));
  return market;
}

// 玩家签约
function bandSign(idx) {
  if (!bandState || bandState.phase !== "sign") return;
  var artist = bandState.market[idx];
  if (!artist || artist.soldTo) return;
  if (bandState.gold < artist.price) { showToast("金币不够啦！"); return; }
  bandState.gold -= artist.price;
  artist.soldTo = "player";
  if (artist.specialId) bandState.usedSpecial[artist.specialId] = true;
  var signed = Object.assign({}, artist);   // 克隆入队：演出成长不污染全局特殊艺人配置
  signed.uid = ++BAND_UID;
  // 入队即生效的天赋
  if (signed.perk === "genius") { signed.ability += 15; showToast(signed.name + " 是天才型！入队能力+15（" + signed.ability + "）"); }
  if (signed.perk === "eater") { signed.ability += 20; showToast(signed.name + " 是干饭王！能力+20（" + signed.ability + "），但每回合吃3金币"); }
  bandState.band.push(signed);
  if (artist.specialId === "bocchi") unlockAchievement("bocchi_band");
  if (artist.perk === "rich") { bandState.gold += 10; showToast(artist.name + " 是富二代，返还了 10 金币！"); }
  else showToast("签下了 " + artist.name + "（" + artist.role + "）！");
  bandRender();
}

// AI签约（玩家点演出时，从市场剩余中按策略买人）
function bandAiSign() {
  var st = bandState;
  var left = st.market.filter(function(m) { return !m.soldTo; });
  var bought = [];
  var sold = [];

  // 【智商1】卖弱买强：转卖能力<90的弱队员回收资金（AI也懂换血）
  for (var w = st.aiBand.length - 1; w >= 0; w--) {
    if (st.aiBand[w].ability < 90 && st.aiBand.length > 1) {
      var weak = st.aiBand.splice(w, 1)[0];
      var back = Math.max(1, Math.floor(weak.price * 0.2));
      st.aiGold += back;
      sold.push(weak.name + "(回收" + back + "金)");
    }
  }
  if (sold.length) st.logs.push("🤖 AI经纪人转会卖出了：" + sold.join("、"));

  // 【智商2】攒钱策略：市场无特殊艺人且金币<120时，55%概率跳过买普通，攒钱等下回合特殊
  var specials = left.filter(function(m) { return m.specialId; });
  var saveMode = !specials.length && st.aiGold < 120 && Math.random() < 0.55;
  if (saveMode) {
    st.logs.push("🤖 AI经纪人按兵不动，似乎在攒钱等待大牌……");
    return;
  }

  // 【智商3】特殊艺人优先级（灯主唱>爱音>后藤>虹夏>喜多>广井>祥子>山田凉——AI知道偷钱鬼和乐队粉碎机的风险）
  var prio = { tomori: 0, anon: 1, bocchi: 2, nijika: 3, kita: 4, hirokita: 5, sakiko: 6, yamada: 7 };
  specials.sort(function(a, b) { return (prio[a.specialId] !== undefined ? prio[a.specialId] : 9) - (prio[b.specialId] !== undefined ? prio[b.specialId] : 9); });
  // 有钱就全收特殊（AI资金雄厚，但留30金运营）
  for (var i = 0; i < specials.length; i++) {
    if (st.aiGold >= specials[i].price + 30) {
      st.aiGold -= specials[i].price;
      specials[i].soldTo = "ai";
      st.usedSpecial[specials[i].specialId] = true;
      var aiS = Object.assign({}, specials[i]);
      aiS.uid = ++BAND_UID;
      st.aiBand.push(aiS);
      bought.push(specials[i].name);
    }
  }

  // 【智商4】编制意识：普通艺人优先补缺失位置（吉他×2+鼓+贝斯），编制全了再按性价比
  var normals = left.filter(function(m) { return !m.specialId && !m.soldTo; });
  var needRoles = { "吉他手": 2, "鼓手": 1, "贝斯手": 1 };
  for (var r = 0; r < st.aiBand.length; r++) {
    if (needRoles[st.aiBand[r].role]) needRoles[st.aiBand[r].role]--;
  }
  // 先挑补位的
  var normalsSorted = normals.slice().sort(function(a, b) {
    var aNeed = needRoles[a.role] > 0 ? 1 : 0;
    var bNeed = needRoles[b.role] > 0 ? 1 : 0;
    if (aNeed !== bNeed) return bNeed - aNeed;   // 缺位优先
    return (b.ability + b.stability) / b.price - (a.ability + a.stability) / a.price;  // 再性价比
  });
  var normalBought = 0;
  for (var n = 0; n < normalsSorted.length && normalBought < 2; n++) {
    if (st.aiGold >= normalsSorted[n].price + 30) {
      st.aiGold -= normalsSorted[n].price;
      normalsSorted[n].soldTo = "ai";
      var aiN = Object.assign({}, normalsSorted[n]);
      aiN.uid = ++BAND_UID;
      st.aiBand.push(aiN);
      bought.push(normalsSorted[n].name);
      if (needRoles[normalsSorted[n].role] > 0) needRoles[normalsSorted[n].role]--;
      normalBought++;
    }
  }
  if (bought.length) st.logs.push("🤖 AI经纪人签下了：" + bought.join("、"));
  else if (!sold.length) st.logs.push("🤖 AI经纪人这回合按兵不动……");
}

// 标准编制判断：吉他×2 + 鼓 + 贝斯（特殊艺人位置也计入）
function bandHasFull(band) {
  var g = 0, d = 0, b = 0;
  for (var i = 0; i < band.length; i++) {
    if (band[i].role === "吉他手") g++;
    else if (band[i].role === "鼓手") d++;
    else if (band[i].role === "贝斯手") b++;
  }
  return g >= 2 && d >= 1 && b >= 1;
}

// 出场阵容：最多5人（主唱优先入选，其余按能力+稳定选最强；替补不演出不成长）
function bandLineup(band, vocalUid) {
  if (band.length <= 5) return band.slice();
  var vocal = null, rest = [];
  for (var i = 0; i < band.length; i++) {
    if (vocalUid != null && band[i].uid === vocalUid) vocal = band[i];
    else rest.push(band[i]);
  }
  rest.sort(function(a, b) { return (b.ability + b.stability) - (a.ability + a.stability); });
  var lineup = vocal ? [vocal] : [];
  for (var j = 0; j < rest.length && lineup.length < 5; j++) lineup.push(rest[j]);
  return lineup;
}

// 演出结算：上场≤5人；主唱位知名度按 能力×50%+唱腔 计算（专职主唱无惩罚，兼任稳定-12）
function bandPerform(band, vocalUid) {
  var events = [];
  if (!band.length) return { gold: 0, fame: 0, events: ["乐队空无一人，只能对着空气弹奏……"] };
  var lineup = bandLineup(band, vocalUid);
  if (band.length > 5) {
    var names = [];
    for (var ln = 0; ln < lineup.length; ln++) names.push(lineup[ln].name);
    events.push("🎫 出场名单（5人上限）：" + names.join("、"));
  }
  var hasNijika = lineup.some(function(m) { return m.specialId === "nijika"; });
  var hasCheer = lineup.some(function(m) { return m.perk === "cheer"; });
  var fullBand = bandHasFull(lineup);
  if (fullBand) events.push("🎼 标准编制达成（吉他×2+鼓+贝斯）！全队收益+30%！");
  var gold = 0, fame = 0, stolen = 0;
  for (var i = 0; i < lineup.length; i++) {
    var m = lineup[i];
    var ab = m.ability, stb = m.stability;
    var isVocal = vocalUid != null && m.uid === vocalUid;
    if (isVocal) {
      if (m.role === "主唱") events.push("🎤 " + m.name + " 专职主唱登场（唱腔" + m.vocal + "）！");
      else { stb -= 12; events.push("🎤 " + m.name + " 兼任主唱（唱腔" + m.vocal + "，稳定-12）！"); }
    }
    if (hasNijika && m.specialId !== "nijika") stb += 14;
    if (hasCheer && m.perk !== "cheer") stb += 4;
    // 广井菊里：35%喝醉
    if (m.specialId === "hirokita" && Math.random() < 0.35) {
      ab = Math.max(5, ab - 120);
      events.push("🍺 " + m.name + " 演出前喝醉了！能力暴跌……");
    }
    // 发挥系数：稳定度越高波动越小（稳定>100视为恒定满发挥）
    var stRoll = stb + Math.floor(Math.random() * 31) - 15;
    if (stRoll < 0) stRoll = 0; if (stRoll > 100) stRoll = 100;
    var factor = 0.6 + 0.4 * stRoll / 100;
    if (m.perk === "veteran" && factor < 0.9) factor = 0.9;
    if (fullBand) factor *= 1.3;
    var g = ab * factor * 0.55;
    // 主唱位唱腔生效：知名度基数 = 能力×50% + 唱腔（唱腔仅在担任主唱时生效）
    var fBase = isVocal ? (ab * 0.5 + (m.vocal || 0)) : ab;
    var f = fBase * factor * 0.4;
    if (m.specialId === "kita") f *= 1.3;
    if (m.perk === "idol") g *= 1.3;
    // 赌狗之魂：50%个人收益翻倍，50%减半
    if (m.perk === "gambler") {
      if (Math.random() < 0.5) { g *= 2; f *= 2; events.push("🎲 " + m.name + " 赌狗之魂爆发！梭哈成功，个人收益翻倍！！"); }
      else { g *= 0.5; f *= 0.5; events.push("🎲 " + m.name + " 赌输了……个人收益减半。"); }
    }
    // 人来疯：标准编制达成时个人发挥×1.5
    if (m.perk === "crowd" && fullBand) { g *= 1.5; f *= 1.5; events.push("🔥 " + m.name + " 人来疯！台下人越多越兴奋，发挥×1.5！"); }
    // 摇滚巨星：个人知名度收益+50%
    if (m.perk === "rockstar") f *= 1.5;
    gold += g; fame += f;
    // 山田凉：50%偷50金币（超级败家）
    if (m.specialId === "yamada" && Math.random() < 0.5) {
      stolen += 50;
      events.push("🦎 " + m.name + " 偷走了 50 金币演出收益！！");
    }
    // 练习狂：演出后能力+6（特殊艺人可突破160上限，普通艺人封顶160）
    if (m.perk === "practice") {
      var oldAb = m.ability;
      m.ability += 6;
      if (!m.specialId && m.ability > 160) m.ability = 160;
      events.push("🎵 " + m.name + " 越练越强，能力+6" + (oldAb <= 160 && m.ability > 160 ? "，突破极限！" : "") + "！");
    }
    // 成长系统：演出积累经验，35%概率能力+2~4（练习狂已有必触发成长，不再叠加；特殊艺人无上限，普通艺人封顶160）
    else if ((m.specialId || m.ability < 160) && Math.random() < 0.35) {
      var grow = 2 + Math.floor(Math.random() * 3);
      var oldAb2 = m.ability;
      m.ability += grow;
      if (!m.specialId && m.ability > 160) m.ability = 160;
      events.push("🌟 " + m.name + " 在演出中积累了经验，能力+" + grow + (oldAb2 <= 160 && m.ability > 160 ? "，突破极限！" : "") + "！");
    }
  }
  gold = Math.max(0, Math.round(gold - stolen));
  return { gold: gold, fame: Math.round(fame), events: events };
}

// 丰川祥子·乐队粉碎机：每过3回合发作——40%逼退一名其他队员，25%自己退队「无可救药」
function bandSakikoTick(band, label, logs) {
  var idx = -1;
  for (var i = 0; i < band.length; i++) if (band[i].specialId === "sakiko") { idx = i; break; }
  if (idx < 0) return null;
  var r = Math.random();
  if (r < 0.4 && band.length > 1) {
    // 随机逼退一名其他队员（戏剧效果拉满）
    var victims = [];
    for (var v = 0; v < band.length; v++) if (v !== idx) victims.push(v);
    var pick = victims[Math.floor(Math.random() * victims.length)];
    var out = band.splice(pick, 1)[0];
    logs.push("🎹 " + label + "的丰川祥子突然发作：「你，离开这个乐队。」—— " + out.name + " 被逼退了！！");
    return out;
  } else if (r < 0.65) {
    band.splice(idx, 1);
    logs.push("🎹 " + label + "的丰川祥子：「这个乐队，已经无可救药了。」她自己退队了！");
    return "self";
  }
  logs.push("🎹 " + label + "的丰川祥子脸色阴沉，但这次什么都没做……");
  return null;
}

// 玩家点击「开始演出」：AI先签人 → 双方演出（含Live加成）→ 随机事件 → 展示战报
function bandStartShow() {
  if (!bandState || bandState.phase !== "sign") return;
  var st = bandState;
  bandAiSign();
  st.logs.push("—— 第 " + st.round + " 回合演出 ——");
  // Live House专场：玩家已安排则金币×1.5；AI 30%概率也办（需20金）
  if (st.live) st.logs.push("🎬 你的Live House专场开场！本轮金币收益×1.5！");
  var aiLive = st.aiGold >= 20 && Math.random() < 0.3;
  if (aiLive) { st.aiGold -= 20; st.logs.push("🎬 AI也办了Live House专场！"); }
  // AI自动指派主唱：按唱腔×2+能力×0.5综合评分选最佳主唱
  var aiVocalUid = null;
  if (st.aiBand.length) {
    var best = null, bestScore = -1;
    for (var av = 0; av < st.aiBand.length; av++) {
      var cand = st.aiBand[av];
      var score = (cand.vocal || 0) * 2 + cand.ability * 0.5;
      if (score > bestScore) { bestScore = score; best = cand; }
    }
    aiVocalUid = best.uid;
    st.logs.push("🤖 AI指定 " + best.name + " 担任主唱（唱腔" + (best.vocal || 0) + "）！");
  }
  var mine = bandPerform(st.band, st.vocalUid);
  var theirs = bandPerform(st.aiBand, aiVocalUid);
  if (st.live) { mine.gold = Math.round(mine.gold * 1.5); }
  if (aiLive) { theirs.gold = Math.round(theirs.gold * 1.5); }
  st.gold += mine.gold; st.fame += mine.fame;
  st.aiGold += theirs.gold; st.aiFame += theirs.fame;
  st.logs.push("🎤 你的乐队演出结束：+" + mine.gold + " 金币，+" + mine.fame + " 知名度" + (mine.events.length ? "（" + mine.events.join("；") + "）" : ""));
  st.logs.push("🤖 AI乐队演出结束：+" + theirs.gold + " 金币，+" + theirs.fame + " 知名度" + (theirs.events.length ? "（" + theirs.events.join("；") + "）" : ""));
  // 随机事件：15%概率三选一
  if (Math.random() < 0.15) {
    var ev = Math.floor(Math.random() * 3);
    if (ev === 0) {
      var fameUp = 15 + Math.floor(Math.random() * 16);
      st.fame += fameUp;
      st.logs.push("🌟 随机事件：街头星探相中了你的乐队！知名度+" + fameUp + "！");
    } else if (ev === 1) {
      var cost = 15 + Math.floor(Math.random() * 16);
      st.gold = Math.max(0, st.gold - cost);
      st.logs.push("💥 随机事件：器材损坏！维修花费 " + cost + " 金币……");
    } else {
      var gift = 15 + Math.floor(Math.random() * 16);
      st.gold += gift;
      st.logs.push("💌 随机事件：粉丝应援集资！获得 " + gift + " 金币！");
    }
  }
  // 干饭王伙食费 / 甩手掌柜分红（每回合结算，含替补，双方乐队同规则）
  var plEat = 0, plDiv = 0, aiEat = 0, aiDiv = 0;
  for (var pe = 0; pe < st.band.length; pe++) {
    if (st.band[pe].perk === "eater") plEat += 3;
    if (st.band[pe].perk === "dividend") plDiv += 5;
  }
  for (var ae = 0; ae < st.aiBand.length; ae++) {
    if (st.aiBand[ae].perk === "eater") aiEat += 3;
    if (st.aiBand[ae].perk === "dividend") aiDiv += 5;
  }
  if (plEat) { st.gold = Math.max(0, st.gold - plEat); st.logs.push("🍚 干饭王们干掉了 " + plEat + " 金币的伙食……"); }
  if (plDiv) { st.gold += plDiv; st.logs.push("💼 甩手掌柜们躺赚分红 +" + plDiv + " 金币！"); }
  if (aiEat) st.aiGold = Math.max(0, st.aiGold - aiEat);
  if (aiDiv) st.aiGold += aiDiv;
  // 丰川祥子·乐队粉碎机：每过3回合（第3/6/9回合演出后）发作，双方乐队各自判定
  if (st.round % 3 === 0) {
    var kicked = bandSakikoTick(st.band, "你的乐队", st.logs);
    // 被逼退的恰好是兼任主唱 → 主唱位空缺
    if (kicked && kicked !== "self" && st.vocalUid === kicked.uid) st.vocalUid = null;
    bandSakikoTick(st.aiBand, "AI乐队", st.logs);
  }
  st.live = false;  // Live为单回合增益，下回合需重新安排
  st.phase = "result";
  bandRender();
}

// 安排/取消 Live House专场（20金币，本轮金币收益×1.5）
function bandToggleLive() {
  var st = bandState;
  if (!st || st.phase !== "sign") return;
  if (st.live) {
    st.live = false;
    st.gold += 20;   // 取消退费
    showToast("已取消Live House专场，退还 20 金币");
  } else {
    if (st.gold < 20) { showToast("金币不足，办不起专场……"); return; }
    st.live = true;
    st.gold -= 20;
    showToast("Live House专场已安排！本轮金币收益×1.5");
  }
  bandRender();
}

// 指派/取消主唱兼任：个人知名度×1.35，但稳定-12（分心debuff）
function bandToggleVocal(uid) {
  var st = bandState;
  if (!st || st.phase !== "sign") return;
  if (st.vocalUid === uid) {
    st.vocalUid = null;
    showToast("已取消主唱兼任");
  } else {
    st.vocalUid = uid;
    var name = "";
    for (var i = 0; i < st.band.length; i++) if (st.band[i].uid === uid) name = st.band[i].name;
    showToast(name + " 兼任主唱！个人知名度×1.35，稳定-12");
  }
  bandRender();
}

// 转会卖出：按签约价20%回收金币（特殊艺人卖出后不回市场）
function bandSell(idx) {
  var st = bandState;
  if (!st || st.phase !== "sign") return;
  var m = st.band[idx];
  if (!m) return;
  var back = Math.max(1, Math.floor(m.price * 0.2));
  st.gold += back;
  if (st.vocalUid === m.uid) st.vocalUid = null;   // 卖掉主唱则空缺
  st.band.splice(idx, 1);
  st.logs.push("💸 " + m.name + " 被转会卖出，回收 " + back + " 金币。");
  showToast(m.name + " 已卖出，回收 " + back + " 金币");
  bandRender();
}

// 下一回合 / 最终结算
function bandNextRound() {
  var st = bandState;
  if (!st || st.phase !== "result") return;
  if (st.round >= st.maxRound) { bandFinish(); return; }
  st.round++;
  st.market = bandGenMarket(st.round);
  st.phase = "sign";
  bandRender();
}

// 最终结算
function bandFinish() {
  var st = bandState;
  var win = st.fame > st.aiFame;
  var html = "10 回合巡回演出马拉松落幕！<br><br>"
    + "🎤 你的乐队：知名度 <b style='color:#ffc832'>" + st.fame + "</b>（" + st.band.length + " 人）<br>"
    + "🤖 AI乐队：知名度 <b style='color:#ff8a65'>" + st.aiFame + "</b>（" + st.aiBand.length + " 人）<br><br>"
    + (win ? "🏆 你的乐队轰动了全城，AI经纪人流下了不甘的泪水！" : (st.fame === st.aiFame ? "🤝 平局……AI经纪人侥幸保住了面子。" : "💥 AI乐队的海报贴满了大街小巷，下次再战！"));
  bandState = null;
  if (win) unlockAchievement("band_king");
  showPopupModal(html, function() { renderScene("gate"); });
}

// 主渲染
function bandRender() {
  var st = bandState;
  if (!st) return;
  var panel = document.getElementById("band-panel");
  if (!panel) return;
  var html = "";

  // 市场区
  html += '<div class="band-section-title">🎼 本回合乐手市场' + (st.phase === "sign" ? '（点击签约，可签多人）' : '（本回合已截止）') + '</div>';
  html += '<div class="band-market">';
  for (var i = 0; i < st.market.length; i++) {
    var m = st.market[i];
    var sold = m.soldTo === "player" ? '<span class="band-sold mine">已签入</span>' : m.soldTo === "ai" ? '<span class="band-sold ai">被AI签走</span>' : "";
    var canBuy = st.phase === "sign" && !m.soldTo && st.gold >= m.price;
    html += '<div class="band-card' + (m.specialId ? ' special' : '') + (m.soldTo ? ' sold' : '') + '">';
    html += '<div class="band-card-top"><span class="band-name">' + m.emoji + " " + m.name + '</span><span class="band-role">' + m.role + (m.specialId ? " ⭐" : "") + '</span>' + sold + '</div>';
    html += '<div class="band-stats">💪能力 <b>' + m.ability + '</b>　🛡稳定 <b>' + m.stability + '</b>　🎵唱腔 <b>' + m.vocal + '</b>　💰<b>' + m.price + '</b></div>';
    if (m.specialId) html += '<div class="band-perk">' + m.desc + '</div>';
    else if (m.perkName) html += '<div class="band-perk">【' + m.perkName + '】' + m.perkDesc + '</div>';
    if (st.phase === "sign" && !m.soldTo) {
      html += '<button class="band-sign-btn"' + (canBuy ? ' onclick="bandSign(' + i + ')"' : ' disabled') + '>' + (st.gold >= m.price ? "签约" : "金币不足") + '</button>';
    }
    html += '</div>';
  }
  html += '</div>';

  // 我的乐队（签约阶段：🎙指派主唱 / ✖转会卖出；超5人显示上场/替补；标题显示编制状态）
  var lineupUids = {};
  var lineupPrev = bandLineup(st.band, st.vocalUid);
  for (var lu = 0; lu < lineupPrev.length; lu++) lineupUids[lineupPrev[lu].uid] = true;
  var benchMode = st.band.length > 5;
  html += '<div class="band-section-title">🎤 你的乐队（' + st.band.length + '人·上场' + lineupPrev.length + (benchMode ? '<span style="color:rgba(224,224,224,0.4);">（替补' + (st.band.length - lineupPrev.length) + '）</span>' : '') + (bandHasFull(lineupPrev) ? '·<span style="color:#ffc832;">标准编制✓</span>' : '·<span style="color:rgba(224,224,224,0.4);">编制不全</span>') + '）</div><div class="band-roster">';
  if (!st.band.length) html += '<div class="band-empty">还没有乐手……不签人怎么演出啊！</div>';
  for (var b = 0; b < st.band.length; b++) {
    var p = st.band[b];
    var isVocal = st.vocalUid === p.uid;
    var onStage = lineupUids[p.uid];
    html += '<span class="band-member' + (isVocal ? ' vocal' : '') + (benchMode && !onStage ? ' benched' : '') + '">' + p.emoji + " " + p.name + '<small>' + p.ability + '/' + p.stability + '/🎵' + p.vocal + (isVocal ? '·🎤主唱' : '') + (p.perkName ? '·' + p.perkName : '') + (benchMode ? (onStage ? '<em class="band-stage-tag">上场</em>' : '<em class="bench-tag">替补</em>') : '') + '</small>'
      + (st.phase === "sign"
        ? '<i class="band-vocal-btn" onclick="bandToggleVocal(' + p.uid + ')" title="' + (isVocal ? '取消主唱' : '指派主唱：知名度按能力50%+唱腔，专职无惩罚/兼任稳定-12') + '">' + (isVocal ? '🎤' : '🎙') + '</i>'
          + '<i class="band-sell-x" onclick="bandSell(' + b + ')" title="转会卖出(回收' + Math.max(1, Math.floor(p.price * 0.2)) + '金)">✖</i>'
        : '')
      + '</span>';
  }
  html += '</div>';

  // AI乐队
  html += '<div class="band-section-title">🤖 AI乐队（' + st.aiBand.length + '人·金币' + st.aiGold + '）</div><div class="band-roster">';
  if (!st.aiBand.length) html += '<span class="band-empty">AI经纪人还在观望……</span>';
  for (var a = 0; a < st.aiBand.length; a++) {
    var q = st.aiBand[a];
    html += '<span class="band-member ai">' + q.emoji + " " + q.name + '<small>' + q.ability + '/' + q.stability + '/🎵' + q.vocal + '</small></span>';
  }
  html += '</div>';

  // 战报（最近8条）
  html += '<div class="band-section-title">📜 演出战报</div><div class="band-logs">';
  var start = Math.max(0, st.logs.length - 8);
  for (var l = start; l < st.logs.length; l++) html += '<div class="band-log-line">' + st.logs[l] + '</div>';
  html += '</div>';

  panel.innerHTML = html;

  // HUD（描述区）
  var descArea = document.getElementById("description-area");
  descArea.innerHTML =
    '<div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:4px;">' +
    '<span>🕐 回合 <b style="color:#ffc832;">' + st.round + "/" + st.maxRound + '</b></span>' +
    '<span>💰 金币 <b style="color:#ffd54f;">' + st.gold + '</b></span></div>' +
    '<div style="display:flex;justify-content:space-between;font-size:14px;">' +
    '<span>🎤 你的知名度 <b style="color:#4fc3f7;">' + st.fame + '</b></span>' +
    '<span>🤖 AI知名度 <b style="color:#ff8a65;">' + st.aiFame + '</b></span></div>' +
    '<div style="font-size:11px;color:rgba(224,224,224,0.6);text-align:center;margin-top:3px;">' +
    (st.phase === "sign"
      ? "签约/卖人/主唱/Live安排好后开演（上场≤5人：主唱优先+能力强者，AI也会抢人！）" + (st.live ? '<span style="color:#ffc832;"> 🎬Live×1.5</span>' : '') + (bandHasFull(bandLineup(st.band, st.vocalUid)) ? '<span style="color:#ffc832;"> 🎼编制+30%</span>' : '') + (st.vocalUid != null ? '<span style="color:#ffc832;"> 🎤主唱就位</span>' : '')
      : "演出结束！点击下方进入下一回合") + '</div>';

  // 按钮区
  var actionsArea = document.getElementById("actions-area");
  actionsArea.innerHTML = "";
  if (st.phase === "sign") {
    var showBtn = document.createElement("button");
    showBtn.innerHTML = "🎤 开始演出！";
    showBtn.className = "special";
    showBtn.onclick = bandStartShow;
    actionsArea.appendChild(showBtn);
    var liveBtn = document.createElement("button");
    liveBtn.innerHTML = st.live ? "🎬 取消Live专场" : "🎬 Live专场(20金)";
    liveBtn.className = st.live ? "special" : "";
    liveBtn.onclick = bandToggleLive;
    actionsArea.appendChild(liveBtn);
  } else {
    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = st.round >= st.maxRound ? "🏁 查看最终结果" : "➡️ 下一回合";
    nextBtn.className = "special";
    nextBtn.onclick = bandNextRound;
    actionsArea.appendChild(nextBtn);
  }
  var quitBtn = document.createElement("button");
  quitBtn.innerHTML = "🚪 放弃比赛";
  quitBtn.onclick = function() { bandState = null; renderScene("gate"); };
  actionsArea.appendChild(quitBtn);
}

// ===== 游玩提示 =====
function showTips() {
  showPopupModal("亚嘞亚嘞，居然选择游玩这款游戏吗，真是有品呢……<br><br>本游戏没有做任何网络优化，图片加载稍慢可能会影响游戏体验望大家体谅……<br><br>本游戏没有修复任何bug因为作者认为那是游戏体验的一部分……<br><br>本游戏纯前端，没有存档功能，若想再次游玩可借助传送门和背包控制台手动回到上次游玩进度……<br><br>教学楼是剧情主线，实验楼像小游戏大全，地下室算主线前传，其他算奇异古怪搞笑猎奇路线大全……<br><br>可以先尝试集齐我设计的所有成就，虽然我还没有设计多少……<br><br>本作预计想要制作真。galagame线（还没做，以及N条起义神秘猎奇搞笑诡异线路，这个游戏真的是我乱做的非常低质。<br><br>作者语文很差，所以剧情写的很烂，ai标也懒得去……<br><br>技术力有限，十分低质……<br><br>如果看的云里雾里一头雾水那就对了，因为凡人是无法理解神的（bushi）<br><br>总之这是一个半成品的纯唐人剧情向(迫真）猎奇小游戏，请你一定不要认真玩这个游戏，希望你能有糟糕的游戏体验，再见。");
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

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();renderScene(\'canteen_game\');">';
  html += '<span class="game-icon">🍚</span>食堂抢饭</button>';

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();startBossFight();">';
  html += '<span class="game-icon">🦑</span>执念鱿鱼决战</button>';

  html += '<button class="portal-game-btn" onclick="event.stopPropagation();this.closest(\'.modal-overlay\').remove();renderBandGame();">';
  html += '<span class="game-icon">🎸</span>乐队大赛</button>';

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