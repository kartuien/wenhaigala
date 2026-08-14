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
};

// ==================== 成就配置 ====================
// id: 唯一标识, name: 名称, desc: 解锁后显示的描述, icon: 图标
var ACHIEVEMENT_CONFIG = {
  flying_pig:   { id: "flying_pig",   name: "飞天之猪", desc: "见证了神秘猪猪拉屎之地", icon: "🐷" },
  hachi_king:   { id: "hachi_king",   name: "哈气之王", desc: "在御前决斗中击败了哈基高大师", icon: "👑" },
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
  nasa_detected:      { id: "nasa_detected",      name: "老美的nasa这么厉害", desc: "老美的nasa这么厉害给我探测出来了", icon: "🛸" },
  beat_alien:         { id: "beat_alien",         name: "击败外星人", desc: "在石头剪刀布中击败了外星人", icon: "👽" },
  pooped_on:          { id: "pooped_on",          name: "被拉shi了", desc: "被外星人在头上拉屎了", icon: "💩" },
  level1:             { id: "level1",             name: "level1", desc: "进入层级level1", icon: "🚪" },
  unhygienic:         { id: "unhygienic",         name: "不讲卫生", desc: "妈妈没教过你不能喝陌生的水吗", icon: "🤢" },
  skin_stealer:       { id: "skin_stealer",       name: "偶遇窃皮者", desc: "在level1遇到了窃皮者", icon: "🫥" },
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
    autoNext: "hermit_duel_7",
    buttons: []
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
      { text: "继续往前吧", target: "grove_end" },
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
      { text: "下去", popup: "前面的地方以后再去探索吧！" },
      { text: "不下去", target: "basement_no" },
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
    autoNext: "confucius_game",
    buttons: []
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
};

// 御前决斗战斗状态
var battleState = {
  playerKi: 0,      // 玩家气
  hachiKi: 0,       // 哈基高气
  inBattle: false,  // 是否在战斗中
};

// 检查是否有某道具
function hasItem(itemId) { return gameState.inventory.indexOf(itemId) !== -1; }

// 检查是否解锁某成就
function hasAchievement(achId) { return gameState.achievements.indexOf(achId) !== -1; }

// ===== 更新日志配置 =====
var CHANGELOG = [
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
    "删除传送门中未使用的场景（教学楼/图书馆/操场/食堂/实验室/花园/礼堂/行政楼/体育馆）",
  ]},
  { version: "v1.3.78", date: "2026-08-13", items: [
    "新增传送门功能（左上角按钮，按标题分组跳转任意场景）",
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

  // 生成4x4棋盘，随机放置2个毒草
  var BOARD_SIZE = 4;
  var POISON_COUNT = 2;
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
  rules.innerHTML = "🌿 小草：安全的草，数字表示周围毒草数量<br>☠️ 毒草：踩到就会中毒！<br>吃完所有小草即可获胜";
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
    showPopupModal(btn.popup);
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

// ===== 御前决斗战斗系统 =====
function renderBattle() {
  battleState.inBattle = true;
  battleState.playerKi = 0;
  battleState.hachiKi = 0;

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
    showPopupModal("【御前决斗规则】<br><br>⚔️ 哈气：消耗1气攻击对手，对手未格挡则出局<br>🛡️ 格挡：免消耗，抵挡对手的哈气<br>💨 呼吸：积累1气<br><br>哈基高会随机选择行动，但没气时不会哈气。");
  });
  actionsArea.appendChild(ruleBtn);
}

function updateBattleHUD() {
  var descArea = document.getElementById("description-area");
  descArea.innerHTML =
    '<div class="battle-hud">' +
    '<div class="battle-ki">你的气：<span class="ki-num">' + battleState.playerKi + '</span></div>' +
    '<div class="battle-ki">哈基高的气：<span class="ki-num">' + battleState.hachiKi + '</span></div>' +
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
      resultMsg += "哈基高被你的哈气击中！哈基高出局！";
      battleState.inBattle = false;
      showPopupModal(resultMsg);
      setTimeout(function() {
        unlockAchievement("hachi_king");
        var achCfg = ACHIEVEMENT_CONFIG["hachi_king"];
        showPopupModal("成就解锁：" + achCfg.icon + " " + achCfg.name + "<br><small>" + achCfg.desc + "</small>");
        setTimeout(function() { renderScene("duel_victory"); }, 400);
      }, 400);
      return;
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

// ===== 传送门 =====
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

  var html = '<div class="modal"><div class="modal-header">🌀 传送门</div>';
  html += '<div class="modal-body"><div class="portal-list">';

  var groupNames = Object.keys(groups);
  for (var g = 0; g < groupNames.length; g++) {
    var gname = groupNames[g];
    var scenes = groups[gname];
    html += '<div class="portal-group"><div class="portal-group-name">' + gname + '</div>';
    for (var s = 0; s < scenes.length; s++) {
      var sc = scenes[s];
      html += '<button class="portal-scene-btn" data-scene="' + sc.id + '">' + gname + '<span class="portal-scene-id">' + sc.id + '</span></button>';
    }
    html += '</div>';
  }

  html += '</div></div>';
  html += '<div class="modal-footer"><button class="modal-close-btn" id="portal-close-btn">关 闭</button></div></div>';
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

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