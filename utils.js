var themoviedb = (()=>{
    var a = new Headers;
    a.append("Accept", "application/json"),
    a.append("Content-Type", "application/json"),
    a.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmYwZmFlZWIzZjc3OWRhZDdkOWM3MjY4ZGM0NmNmNiIsIm5iZiI6MTcyMzkzMjM1MS4xNDEyNzIsInN1YiI6IjY2YzExZTJmOTk5ZmYwYTFjNTE2YWRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vwZW4D57fT-wlqLgHt_4vhnfTbuIwFOOrWE2DBlRHMQ");
    let t = _initCachedFetch({
        mode: "block",
        matchIn: ["://"],
        endsWith: [],
        defaultTTL: "1 hour"
    }, a);
    return async function(a, e) {
        let n = "https://api.themoviedb.org/3"
          , i = (0 < n.length && n.endsWith("/") && a.startsWith("/") ? n += a.slice(1) : 0 < n.length && !n.endsWith("/") && !a.startsWith("/") ? n += "/" + a : n += a,
        new URL(n));
        return Object.entries(e?.params ?? {}).forEach(([a,e])=>{
            i.searchParams.set(a, e)
        }
        ),
        await t("tmdb-" + encodeURIComponent(a), i.toString())
    }
}
)()
  , emtebase = "https://embed-testing-v7.vercel.app/tests"
  , embedtesting = (()=>{
    let t = emtebase
      , r = _initCachedFetch({
        mode: "block",
        matchIn: ["://"],
        endsWith: [],
        defaultTTL: "10 minute"
    }, new Headers);
    return async function(a, e) {
        let n = t
          , i = (0 < n.length && n.endsWith("/") && a.startsWith("/") ? n += a.slice(1) : 0 < n.length && !n.endsWith("/") && !a.startsWith("/") ? n += "/" + a : n += a,
        new URL(n));
        return Object.entries(e?.params ?? {}).forEach(([a,e])=>{
            i.searchParams.set(a, e)
        }
        ),
        await r("etv7-" + encodeURIComponent(a), i.toString(), e?.headers)
    }
}
)()
  , newsapi = (()=>{
    let a = "https://erynith.github.io/news-api"
      , e = _initCachedFetch({
        mode: "block",
        matchIn: ["://"],
        endsWith: [],
        defaultTTL: "30 minute"
    }, new Headers);
    return async function() {
        let n = await e("newsapi", a + "/en/data.json").then(a=>a.json());
        return await e("newstorrentfreak", a + "/tf.json").then(a=>a.json()).then(a=>{
            a.forEach(a=>{
                n.articles.push(a)
            }
            )
        }
        ),
        new Promise((a,e)=>{
            a(n)
        }
        )
    }
}
)()
  , wyziesubs = (()=>{
    let t = _initCachedFetch({
        mode: "block",
        matchIn: ["://"],
        endsWith: [],
        defaultTTL: "10 minute"
    }, new Headers);
    return async function(a, e) {
        let n = "https://sub.wyzie.ru"
          , i = (0 < n.length && n.endsWith("/") && a.startsWith("/") ? n += a.slice(1) : 0 < n.length && !n.endsWith("/") && !a.startsWith("/") ? n += "/" + a : n += a,
        new URL(n));
        return Object.entries(e?.params ?? {}).forEach(([a,e])=>{
            i.searchParams.set(a, e)
        }
        ),
        await t("wyziesubs-" + encodeURIComponent(a), i.toString(), {
            signal: AbortSignal.timeout(5e3)
        })
    }
}
)()
  , streamToVidstack = function(a) {
    var e, n, i = {
        "4k": [3840, 2160],
        1080: [1920, 1080],
        720: [1280, 720],
        480: [853, 480],
        360: [640, 360],
        144: [256, 144]
    }, t = a.stream[0].qualities, r = [];
    for (e in t)
        t.hasOwnProperty(e) && (n = i[e]) && r.push({
            src: t[e].url,
            type: "video/mp4",
            width: n[0],
            height: n[1]
        });
    return r.reverse(),
    r
}
  , cinescrapeToVidstack = function(a) {
    let n = {
        "4K": [3840, 2160],
        "1080P": [1920, 1080],
        "720P": [1280, 720],
        "480P": [853, 480],
        "360P": [640, 360],
        "144P": [256, 144]
    };
    return a.map(a=>{
        var e;
        if (n[a.quality])
            return (e = new URL(a.download_url)).protocol = "https:",
            e.hostname = "mp4.febbox.net",
            {
                src: e.toString(),
                type: "video/mp4",
                width: n[a.quality][0],
                height: n[a.quality][1]
            }
    }
    )
}
  , levenshteinDistance = function(n, i) {
    var t = n.length
      , r = i.length
      , s = [];
    for (let a = 0; a <= t; a++)
        s[a] = [],
        s[a][0] = a;
    for (let a = 0; a <= r; a++)
        s[0][a] = a;
    for (let e = 1; e <= t; e++)
        for (let a = 1; a <= r; a++) {
            var o = n[e - 1] === i[a - 1] ? 0 : 1;
            s[e][a] = Math.min(s[e - 1][a] + 1, s[e][a - 1] + 1, s[e - 1][a - 1] + o)
        }
    return s[t][r]
}
  , sanitizeString = function(a) {
    return a.replace(/[^\w\s]/gi, "").replace(/\s+/g, "").toLowerCase().trim()
}
  , compareTitle = function(a, e, n=2) {
    return levenshteinDistance(sanitizeString(a), sanitizeString(e)) <= n
}
  , hasSources = function(a) {
    return 0 < a.length
}
  , inFuture = a=>new Date(a || "1/1/9999").getTime() > (new Date).getTime();
let monAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var properDate = function(a) {
    return a = new Date(a),
    `${monAbbr[a.getMonth()]} ${a.getDate() + 1} ` + a.getFullYear()
}
  , dateIsRecent = function(a) {
    return new Date - new Date(a) < 3456e5
};
function parseEndTime(a) {
    var e = new Date
      , e = new Date(e.getTime() + 6e4 * a)
      , a = e.getHours()
      , e = e.getMinutes();
    return `Ends at ${a % 12 == 0 ? 12 : a % 12}:${e < 10 ? "0" + e : e} ` + (12 <= a ? "PM" : "AM")
}
var sleep = e=>new Promise(a=>setTimeout(a, 1e3 * e))
  , noSourcesAvailableMessage = '<b><img draggable="false" class="emoji" alt="" src="https://erynith.pages.dev/artplayer/indicator.svg"> No sources are available for this item! D:<img draggable="false" alt="" src="../previews/404.gif"></b>'
  , isJSON = function(a) {
    try {
        return JSON.parse(a),
        !0
    } catch {
        return !1
    }
}
  , app_name = ()=>"heartive"
  , oranj = function(a) {
    return `<span style="color:rgb(255, 117, 117);">${a}</span>`
}
  , hasOverride = (window.onhashchange = ()=>window.location.reload(),
function(a, e) {
    var n = localStorage.getItem("override");
    return "stremio" === n ? (e.target = "",
    e.rel = "",
    "Movie" === a.type ? e.href = "stremio:///detail/movie/" + a.imdbId : "Series" === a.type && (e.href = `stremio:///detail/series/${a.imdbId}/${a.imdbId}:${a.seasonNumber}:` + a.episodeNumber),
    !0) : "direct" === n && (e.addEventListener("click", ()=>{
        loadDirects(a)
    }
    ),
    !0)
}
)
  , getLastItem = function(a) {
    var e = Object.keys(a);
    return a[e[e.length - 1]]
}
  , watched = {
    has: function(e) {
        return JSON.parse(localStorage.getItem("watched") || "[]").find(a=>a === e)
    },
    add: function(e) {
        var a = JSON.parse(localStorage.getItem("watched") || "[]").filter(a=>a !== e);
        a.push(e),
        localStorage.setItem("watched", JSON.stringify(a))
    },
    remove: function(e) {
        var a = JSON.parse(localStorage.getItem("watched") || "[]").filter(a=>a !== e);
        localStorage.setItem("watched", JSON.stringify(a))
    }
}
  , addCheckmark = function(e, a) {
    a.querySelectorAll(".checkOverlay").forEach(a=>a.remove());
    let n = document.createElement("div");
    n.classList.add("checkOverlay"),
    n.innerHTML = '<img loading="lazy" src="../previews/branding/icons/checkmark.png">',
    a.appendChild(n),
    n.addEventListener("click", a=>{
        a.stopPropagation(),
        watched.remove(e),
        n.remove()
    }
    ),
    tippy && tippy(n, {
        content: "Played",
        animation: "shift-away-subtle"
    })
}
  , languageMap = {
    aa: "Afar",
    ab: "Abkhaz",
    ae: "Avestan",
    af: "Afrikaans",
    ak: "Akan",
    am: "Amharic",
    an: "Aragonese",
    ar: "Arabic (Standard)",
    "ar-ae": "Arabic (U.A.E.)",
    "ar-bh": "Arabic (Bahrain)",
    "ar-dz": "Arabic (Algeria)",
    "ar-eg": "Arabic (Egypt)",
    "ar-iq": "Arabic (Iraq)",
    "ar-jo": "Arabic (Jordan)",
    "ar-kw": "Arabic (Kuwait)",
    "ar-lb": "Arabic (Lebanon)",
    "ar-ly": "Arabic (Libya)",
    "ar-ma": "Arabic (Morocco)",
    "ar-om": "Arabic (Oman)",
    "ar-qa": "Arabic (Qatar)",
    "ar-sa": "Arabic (Saudi Arabia)",
    "ar-sy": "Arabic (Syria)",
    "ar-tn": "Arabic (Tunisia)",
    "ar-ye": "Arabic (Yemen)",
    as: "Assamese",
    ast: "Asturian",
    av: "Avaric",
    ay: "Aymara",
    az: "Azerbaijani",
    ba: "Bashkir",
    be: "Belarusian",
    bg: "Bulgarian",
    bi: "Bislama",
    bm: "Bambara",
    bn: "Bengali",
    bo: "Tibetan",
    br: "Breton",
    bs: "Bosnian",
    bul: "Bulgarian",
    ca: "Catalan",
    ce: "Chechen",
    ch: "Chamorro",
    ckb: "Kurdish (Sorani)",
    co: "Corsican",
    cr: "Cree",
    cs: "Czech",
    cu: "Old Church Slavonic",
    cv: "Chuvash",
    cy: "Welsh",
    da: "Danish",
    de: "German (Standard)",
    "de-at": "German (Austria)",
    "de-ch": "German (Switzerland)",
    "de-de": "German (Germany)",
    "de-li": "German (Liechtenstein)",
    "de-lu": "German (Luxembourg)",
    dv: "Divehi",
    dz: "Dzongkha",
    ee: "Ewe",
    el: "Greek",
    en: "English",
    "en-au": "English (Australia)",
    "en-bz": "English (Belize)",
    "en-ca": "English (Canada)",
    "en-gb": "English (United Kingdom)",
    "en-ie": "English (Ireland)",
    "en-jm": "English (Jamaica)",
    "en-nz": "English (New Zealand)",
    "en-ph": "English (Philippines)",
    "en-tt": "English (Trinidad & Tobago)",
    "en-us": "English (United States)",
    "en-za": "English (South Africa)",
    "en-zw": "English (Zimbabwe)",
    eo: "Esperanto",
    es: "Spanish",
    "es-ar": "Spanish (Argentina)",
    "es-bo": "Spanish (Bolivia)",
    "es-cl": "Spanish (Chile)",
    "es-co": "Spanish (Colombia)",
    "es-cr": "Spanish (Costa Rica)",
    "es-do": "Spanish (Dominican Republic)",
    "es-ec": "Spanish (Ecuador)",
    "es-es": "Spanish (Spain)",
    "es-gt": "Spanish (Guatemala)",
    "es-hn": "Spanish (Honduras)",
    "es-mx": "Spanish (Mexico)",
    "es-ni": "Spanish (Nicaragua)",
    "es-pa": "Spanish (Panama)",
    "es-pe": "Spanish (Peru)",
    "es-pr": "Spanish (Puerto Rico)",
    "es-py": "Spanish (Paraguay)",
    "es-sv": "Spanish (El Salvador)",
    "es-uy": "Spanish (Uruguay)",
    "es-ve": "Spanish (Venezuela)",
    et: "Estonian",
    eu: "Basque",
    fa: "Persian",
    "fa-ir": "Persian/Iran",
    ff: "Fula",
    fi: "Finnish",
    fil: "Filipino",
    fj: "Fijian",
    fo: "Faeroese",
    fr: "French (Standard)",
    "fr-be": "French (Belgium)",
    "fr-ca": "French (Canada)",
    "fr-ch": "French (Switzerland)",
    "fr-fr": "French (France)",
    "fr-lu": "French (Luxembourg)",
    "fr-mc": "French (Monaco)",
    fur: "Friulian",
    fy: "Frisian",
    ga: "Irish",
    gd: "Gaelic (Scots)",
    "gd-ie": "Gaelic (Irish)",
    gl: "Galacian",
    gn: "GuaranÃ­",
    gu: "Gujurati",
    gv: "Manx",
    ha: "Hausa",
    he: "Hebrew",
    heb: "Hebrew",
    hi: "Hindi",
    ho: "Hiri Motu",
    hr: "Croatian",
    hsb: "Upper Sorbian",
    ht: "Haitian",
    hu: "Hungarian",
    hy: "Armenian",
    hz: "Herero",
    ia: "Interlingua",
    id: "Indonesian",
    ie: "Interlingue",
    ig: "Igbo",
    ii: "Nuosu",
    ik: "Inupiaq",
    in: "Indonesian",
    io: "Ido",
    is: "Icelandic",
    it: "Italian (Standard)",
    "it-ch": "Italian (Switzerland)",
    iu: "Inuktitut",
    ja: "Japanese",
    ji: "Yiddish",
    jv: "Javanese",
    ka: "Georgian",
    kg: "Kongo",
    ki: "Kikuyu",
    kj: "Kwanyama",
    kk: "Kazakh",
    kl: "Kalaallisut",
    km: "Khmer",
    kn: "Kannada",
    ko: "Korean",
    "ko-kp": "Korean (North Korea)",
    "ko-kr": "Korean (South Korea)",
    kr: "Kanuri",
    ks: "Kashmiri",
    ku: "Kurdish",
    kv: "Komi",
    kw: "Cornish",
    ky: "Kirghiz",
    la: "Latin",
    lb: "Luxembourgish",
    lg: "Ganda",
    li: "Limburgish",
    ln: "Lingala",
    lo: "Lao",
    lt: "Lithuanian",
    lu: "Luba-Katanga",
    lv: "Latvian",
    mg: "Malagasy",
    mh: "Marshallese",
    mi: "Maori",
    mk: "FYRO Macedonian",
    ml: "Malayalam",
    mn: "Mongolian",
    mo: "Moldavian",
    mr: "Marathi",
    ms: "Malay",
    mt: "Maltese",
    my: "Burmese",
    na: "Nauru",
    nb: "Norwegian (Bokmal)",
    nd: "Northern Ndebele",
    ne: "Nepali",
    ng: "Ndonga",
    nl: "Dutch (Standard)",
    "nl-be": "Dutch (Belgian)",
    nn: "Norwegian (Nynorsk)",
    no: "Norwegian",
    nr: "Southern Ndebele",
    nv: "Navajo",
    ny: "Chichewa",
    oc: "Occitan",
    oj: "Ojibwe",
    om: "Oromo",
    or: "Oriya",
    os: "Ossetian",
    pa: "Punjabi",
    "pa-in": "Punjabi (India)",
    "pa-pk": "Punjabi (Pakistan)",
    pb: "Portuguese (Brazil)",
    pi: "PÄli",
    pl: "Polish",
    ps: "Pashto",
    pt: "Portuguese",
    "pt-br": "Portuguese (Brazil)",
    qu: "Quechua",
    rm: "Rhaeto-Romanic",
    rn: "Kirundi",
    ro: "Romanian",
    "ro-mo": "Romanian (Moldavia)",
    ru: "Russian",
    "ru-mo": "Russian (Moldavia)",
    rw: "Kinyarwanda",
    sa: "Sanskrit",
    sb: "Sorbian",
    sc: "Sardinian",
    sd: "Sindhi",
    se: "Northern Sami",
    sg: "Sango",
    si: "Singhalese",
    sk: "Slovak",
    sl: "Slovenian",
    sm: "Samoan",
    sn: "Shona",
    so: "Somani",
    sq: "Albanian",
    sr: "Serbian",
    ss: "Swati",
    st: "Southern Sotho",
    su: "Sundanese",
    sv: "Swedish",
    "sv-fi": "Swedish (Finland)",
    "sv-sv": "Swedish (Sweden)",
    sw: "Swahili",
    sx: "Sutu",
    sz: "Sami (Lappish)",
    ta: "Tamil",
    te: "Teluga",
    tg: "Tajik",
    th: "Thai",
    ti: "Tigrinya",
    tig: "Tigre",
    tk: "Turkmen",
    tl: "Tagalog",
    tlh: "Klingon",
    tn: "Tswana",
    to: "Tonga",
    tr: "Turkish",
    ts: "Tsonga",
    tt: "Tatar",
    tw: "Twi",
    ty: "Tahitian",
    ug: "Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    ve: "Venda",
    vi: "Vietnamese",
    vo: "Volapuk",
    wa: "Walloon",
    wo: "Wolof",
    xh: "Xhosa",
    yi: "Yiddish",
    yo: "Yoruba",
    za: "Zhuang",
    zh: "Chinese",
    "zh-cn": "Chinese (PRC)",
    "zh-hk": "Chinese (Hong Kong)",
    "zh-sg": "Chinese (Singapore)",
    "zh-tw": "Chinese (Taiwan)",
    zt: "Chinese (Traditional)",
    zu: "Zulu"
};
