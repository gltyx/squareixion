/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Reset": "重置",
    "Ruby upgrades no longer take Ruby, keep master milestone 3 on collapse and unlocks new star upgrades": "红宝石升级不再需要红宝石，当坍缩和解锁新的星星升级时，保留主里程碑3",
    "Stage:": "关卡:",
    "Star upgrades": "星星升级",
    "Star": "星星",
    "Stars:": "星星:",
    "Unlocks": "解锁",
    "Universes:": "宇宙:",
    "With sounds": "开启声音",
    "Without sounds": "禁用声音",
    "An incremental game about squares!": "一个关于方块的增量游戏！",
    "and": "和",
    "and gives stars to buy powerful upgrades": "并给予星星以购买强大的升级",
    "and unlocks the light point generator 100%": "并解锁光点生成器100%",
    "Autoclicker": "自动点击器",
    "prestige": "声望",
    "Prestige": "声望",
    "prestige points": "声望点数",
    "Prestige points:": "声望点数:",
    "Rank:": "等级:",
    "Raises your": "提高了你的",
    "Ruby:": "红宝石:",
    "stars": "星星",
    "Play…": "开始…",
    "PP by": "声望点数 ",
    "Reset square": "重置方块",
    "Rebuild update": "重建更新",
    "Spawn neon square": "生成 霓虹 方块",
    "Universes required:": "宇宙要求:",
    "Stars required:": "星星要求:",
    "Square required:": "方块要求:",
    "stars by": "星星 ",
    "The second master milestone": "第2个主里程碑",
    "to buy good upgrades.": "以购买好的升级。",
    "Universe generators:": "宇宙生成器:",
    "Unlocks neon squares": "解锁 霓虹 方块",
    "Unlocks giant squares": "解锁 巨型 方块",
    "Unlocks the autobuyer for giga upgrades, the giga square generator 100%, the autoclicker for neon squares and unlock": "解锁千兆升级的自动购买器、100% 千兆方块生成器、霓虹方块的自动点击器并解锁",
    "Unlocks the autobuyer for light upgrades": "解锁自动购买功能，通过 光 升级",
    "Unlocks the autobuyer for ruby upgrades, keep master milestone 1, 2 on collapse and unlocks new star upgrades": "解锁红宝石升级的自动购买功能，在坍缩时保留主里程碑 1、2 并解锁新的星星升级",
    "Unlocks the new giga square upgrade": "解锁新的千兆方块升级",
    "Upgrades": "升级",
    "work when you are not playing.": "工作当你离开时。",
    "You can increase master level": "你可以提高主等级",
    "neon luck": "霓虹幸运",
    "Okay": "确定",
    "Original game": "原创游戏",
    "Prestige resets your stage,": "声望重置你的关卡，",
    "Collapse": "坍缩",
    "Collapsed": "已坍缩",
    "Collapse resets": "坍缩重置",
    "Collapsed once": "坍缩 1 次",
    "Cost:": "成本:",
    "Currently: no": "当前: 否",
    "Currently: x": "当前: x",
    "damage": "伤害",
    "damage by": "伤害 ",
    "Enter the strange place": "进入奇怪的地方",
    "everything": "所有东西",
    "Export via file": "导出存档到文件",
    "Export via text": "导出存档到剪贴板",
    "features, but gives giga squares": "功能，但提供千兆方块",
    "First collapse also unlocks new realm.": "第一次坍缩也会解锁新的领域。",
    "First rebuild unlocks new realm.": "首次重建将解锁新领域。",
    "First master level unlocks master milestones.": "第1个主等级解锁主里程碑。",
    "You can earn": "你可以获得",
    "You unlocked": "你已经解锁了",
    "Unlocks the autoclicker for giant squares, automatic nothing-spending master levels, giga upgrades no longer take GGS, keep master milestone 4, 7 and unlocks new star upgrades": "解锁巨型方块的自动点击器，自动化不花费主等级，千兆升级不再需要 GGS、保留主里程碑 4、7 并解锁新的星星升级",
    "Unlocks the galaxy generator 100(rebuild rank - 6)%": "解锁星系生成器 100（重建等级 - 6）%",
    "Unlocks the mini square generator 500%": "解锁迷你方块生成器 500%",
    "The Strange Place": "奇怪的地方",
    "The endgame and unlocks the collapsed times generator 500%": "游戏终局并解锁坍缩时间生成器 500%",
    "the fifth reset layer": "第五重置层",
    "starts earlier.": "开始得更早。",
    "squares have less HP.": "方块的生命值更少。",
    "before": "之前",
    "OFF": "关闭",
    "no": "否",
    "but gives prestige points to": "但给予声望点用来",
    "buy cool upgrades.": "购买酷炫的升级。",
    "calculation.": "计算。",
    "galaxies": "星系",
    "Galaxies:": "星系:",
    "generator": "生成器",
    "Generators": "生成器",
    "Giant Square required:": "巨型方块要求:",
    "its speed": "它的速度",
    "Light": "光",
    "Light resets": "光重置",
    "light": "光",
    "light requirement": "光 要求",
    "Light point": "光点",
    "Light points:": "光点:",
    "LP by": "光点 ",
    "Luck:": "幸运:",
    "master level bulk": "主等级批量",
    "Master": "主",
    "Master resets": "主重置",
    "Mini squares:": "迷你方块:",
    "Multiplies your": "乘以你的",
    "ON": "开启",
    "Import via file": "从文件导入存档",
    "Import via text": "从剪贴板导入存档",
    "increases master level to unlock new abilities.": "提高主等级以解锁新能力。",
    "light points": "光点",
    "Neon": "霓虹",
    "now contains true information.": "现在包含真实信息。",
    "rebuild rank": "重建等级",
    "Rebuild rank:": "重建等级:",
    "Rebuild resets": "重建重置",
    "Giant Square Stage required:": "举行方块关卡要求:",
    "allows you to hold squares to damage them.": "允许您按住方块来伤害它们。",
    "before, but": "之前，但是",
    "before, but gives light": "之前，但是给予光",
    "before, but gives universe generators for rebuild features.": "之前，但给出了用于重建功能的宇宙生成器。",
    "Giga squares:": "千兆方块:",
    "Gigalize resets giant square": "千兆化 重置巨型方块",
    "Gigalize": "千兆化",
    "have a limit.": "有一个限制。",
    "Keep 10 galaxies on rebuild": "保留 10 个星系在重建时",
    "log10(damage)": "log10(伤害)",
    "times": "次",
    "Third reset layer's automation": "第三重置层自动化",
    "Keep light upgrade 3 on master reset": "在主重置时保留 光 升级 3",
    "points to buy cooler upgrades. Light also": "点数去购买冷却器升级。光也",
    "Pre-light": "预-光",
    "Rebuild": "重建",
    "Ruby by": "红宝石 ",
    "maxed": "已最大",
    "Black holes:": "黑洞:",
    "collapsed times": "坍缩次数",
    "Entering the strange place forces collapse. All pre-collapse currency gain": "进入陌生的地方会导致坍缩。所有这些都是坍缩前的货币收益",
    "gain is now significantly increased by stage.": "增益现在显着增加通过关卡。",
    "(Overflow) ": "(溢出)",
    "(Capped)": "(达到上限)",
    "(Hardcapped)": "(达到硬上限)",
    "Permanently keep light upgrade 3, bulk master levels, you can no longer get lower neon tiers and unlocks new master milestones": "永久保留光升级3，批量主等级，你不能再得到较低的霓虹层和解锁新的主里程碑",
    "You can increase rebuild rank": "你可以增加重建等级",
    "universe generators": "宇宙生成器",
    "giga squares": "千兆方块",
    "Gigalize: g": "千兆化: g",
    "Light upgrade 3 is now much stronger: starting effect is 100ms, max level is 20, cost scaling is 2.": "光升级3现在更强了:起始效果是100ms，最高等级是20，成本比例是2。",
    "log10(Master level)": "log10(主等级)",
    "Milestone 1, 2, 3, 4 effect": "里程碑 1, 2, 3, 4 效果",
    "of the best": "最佳的",
    "Multiplies your damage by 350 each master level and unlocks the prestige point generator 100%": "使你的伤害每升一级增加350点，并100%解锁声望点数生成器",
    "Multiplies your GSD by": "乘以你的 GSD ",
    "Multiplies your GSD by 5 each master level starting at 16": "从16级开始，每个主级将你的 GSD 乘以5",
    "Multiplies your PP by 1.50 per stage after 100": "在100关卡之后，每关将你的 声望点数 x1.50",
    "3 each master level and unlocks the autobuyer for prestige upgrades": "3 每主等级和解锁自动购买者对于声望升级",
    "1 and star upgrades no longer take stars": "1和星星升级不再需要星星",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Squareixion": "方块大作战",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Discord': 'Discord',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Select text: ": "选择文本: ",
    "Water god ": "水神 ",
    "Damage:": "伤害:",
    "HP: ": "生命值: ",
    "Always play normal realm music: ": "始终播放普通领域音乐：",
    "Hotkeys:": "快捷键:",
    "Light: ": "光: ",
    "Master level:": "主等级:",
    "Music: ": "音乐: ",
    "Hide maxed upgrades: ": "隐藏最大化的升级：",
    "Hide the background (less laggy): ": "隐藏背景（减少滞后）：",
    "Multiplies your LP by ": "乘以你的 光点 ",
    "Multiplies your MS by ": "乘以你的 迷你方块 ",
    "Multiplies your stars by ": "乘以你的星星 ",
    "Keep collapse milestone ": "保留坍缩里程碑 ",
    "Play music outside the page: ": "在页面外播放音乐：",
    "Infinite Square ": "无限方块 ",
    "Spawn neon square ": "产生霓虹方块 ",
    "You can increase master level by ": "你可以提高 主等级 ",
    "Square required:\n": "方块要求:\n",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Planet Defender": "星球保卫者",
    "Dark Defender": "黑暗防御者",
    "Light Warrior": "光战士",
    "Basic": "基础",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    " square tier:": " 方块层级:",
    "x universes": "x 宇宙",
    "x stars": "x 星星",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^ ([\d\.]+)e(\d+)$/,
    /^e([\d\.]+)e(\d+)x$/,
    /^e([\d\.]+)e(\d+)\/e([\d\.]+)e(\d+)$/,
    /^\(e([\d\.]+)e(\d+)\)$/,
    /^\(\+e([\d\.]+)e(\d+)$/,
    /^\(\+e([\d\.]+)e(\d+)\/s\)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+)Q$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Collapsed (.+) times$/, '坍缩 $1 次'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Collapsed with (.+) master level$/, '坍缩时达到 $1 主等级'],
    [/^Collapsed with (.+) stage$/, '坍缩时达到 $1 关卡'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Master milestone (.+) effect$/, '主里程碑 $1 效果'],
    [/^You have collapsed (.+) times$/, '你坍缩了 $1 次'],
    [/^You can earn (.+) stars$/, '你可以获得 $1 星星'],
    [/^You can earn (.+) giga squares$/, '你可以获得 $1 千兆 方块'],
    [/^You can earn (.+) prestige point$/, '你可以获得 $1 声望点'],
    [/^You can earn (.+) light point$/, '你可以获得 $1 光点'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^e([\d\.]+)e([\d\.,]+)x$/, 'e$1e$2x'],
    [/^e([\d\.]+)e([\d\.,]+) GGS$/, 'e$1e$2 GGS'],
    [/^\+([\d\.]+)e([\d\.,]+)\/s master levels$/, '\+$1e$2\/秒 主等级'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^Version ([\d\.]+)$/, '版本 $1'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) stars$/, '$1 星星'],
    [/^([\d\.,]+) new reset layer.$/, '$1 新重置层。'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Rebuild rank ([\d\.,]+)$/, '重建等级 $1'],
    [/^Upgrade ([\d\.,]+)$/, '升级 $1'],
    [/^Master level ([\d\.,]+)$/, '主等级 $1'],
    [/^Prestige: ([\d\.,]+)$/, '声望: $1'],
    [/^Master: ([\d\.,]+)$/, '主: $1'],
    [/^Collapse: ([\d\.,]+)$/, '坍缩: $1'],
    [/^Rebuild: ([\d\.,]+)$/, '重建: $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Currently: (.+)x$/, '当前：$1x'],
    [/^Currently: (.+)ms$/, '当前：$1ms'],
    [/^Currently: (.+)ns$/, '当前：$1ns'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^(.+)x ruby$/, '$1x 红宝石'],
    [/^(.+) LP$/, '$1 光点'],
    [/^(.+) PP$/, '$1 声望点数'],
    [/^(.+) Ruby$/, '$1 红宝石'],
    [/^(.+) galaxies$/, '$1 星系'],

]);