const i18n = {
    "zh-CN": { search: "搜索...", ai: "解析中..." },
    "en": { search: "Search...", ai: "Analyzing..." },
    "ja": { search: "検索...", ai: "解析中..." }
};

function changeLang(lang) {
    const dict = i18n[lang];
    document.getElementById('songInput').placeholder = dict.search;
    // 此处可扩展更多翻译
}
