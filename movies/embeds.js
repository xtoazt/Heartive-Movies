let _fallback = "../previews/404img2.png";
var _embeds = (_embeds = [{
    sudo: "vidsrc.pro",
    name: "embed.su",
    movie: function(e) {
        return "https://embed.su/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://embed.su/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "cinescrape (4k) (no ads)",
    disabled: !0,
    scrape: async function(e) {
        var t = await (async()=>({}))("Movie" === e.type ? e.tmdbId : e.tmdbId).then(e=>e.json());
        return t && t.data && "success" === t.msg && (t = t.data[0]) && (t = t.quality_list) ? (e = {
            title: "Movie" === e.type ? e.title + " â€¢ " + e.year : e.title + ` â€¢ S${e.season}E` + e.episode,
            poster: e.poster,
            brand: "rgb(249, 173, 73)",
            src: cinescrapeToVidstack(t.filter(e=>"ORG" !== e.quality))
        },
        "../players/vidstack/?v=" + encodeURIComponent(JSON.stringify(e))) : _fallback
    }
}, {
    name: "vidlink",
    movie: function(e) {
        return `https://vidlink.pro/movie/${e.tmdbId}?autoplay=false&poster=true&primaryColor=00c1db`
    },
    series: function(e) {
        return `https://vidlink.pro/tv/${e.tmdbId}/${e.season}/${e.episode}?autoplay=false&poster=true&primaryColor=00c1db`
    }
}, {
    name: "vidsrc.rip (no ads)",
    movie: function(e) {
        return "https://vidsrc.rip/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://vidsrc.rip/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "superdirect",
    disabled: !0,
    movie: function(e) {
        return "https://multiembed.mov/directstream.php/?tmdb=1&video_id=" + e.tmdbId
    },
    series: function(e) {
        return `https://multiembed.mov/directstream.php/?tmdb=1&video_id=${e.tmdbId}&s=${e.season}&e=` + e.episode
    }
}, {
    name: "Removed, 18+ Popup Ads",
    movie: function(e) {
        return "https://example.com/?tmdb=1&video_id=" + e.tmdbId
    },
    series: function(e) {
        return `https://example.com/?tmdb=1&video_id=${e.tmdbId}&s=${e.season}&e=` + e.episode
    }
}, {
    name: "rollerdice (no ads)",
    disabled: !0,
    movie: function(e) {
        var t = e.title + " â€¢ " + e.year;
        return emtebase + "/rollerdice/" + encodeURIComponent(e.tmdbId + "/" + t)
    },
    series: function(e) {
        var t = e.title + ` â€¢ S${e.season}E` + e.episode;
        return emtebase + "/rollerdice/" + encodeURIComponent(e.tmdbId + `-${e.season}-${e.episode}/` + t)
    }
}, {
    name: "onstream",
    disabled: !0,
    scrape: async function(e) {
        e = await embedtesting("onstream/" + encodeURIComponent(JSON.stringify(e))).then(e=>e.text());
        return e.includes("://") ? e : _fallback
    }
}, {
    name: "vidbinge",
    movie: function(e) {
        return "https://vidbinge.dev/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://vidbinge.dev/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "moviesclub",
    movie: function(e) {
        return "https://moviesapi.club/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://moviesapi.club/tv/${e.tmdbId}-${e.season}-` + e.episode
    }
}, {
    name: "vidsrc.cc",
    movie: function(e) {
        return "https://vidsrc.cc/v2/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://vidsrc.cc/v2/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "moviekex",
    movie: function(e) {
        return "https://moviekex.online/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://moviekex.online/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "vidsrc.vip",
    movie: function(e) {
        return "https://vidsrc.vip/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://vidsrc.vip/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "vidsrc.nl (no ads)",
    movie: function(e) {
        return "https://player.vidsrc.nl/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://player.vidsrc.nl/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "popcornmovies (no ads)",
    disabled: !0,
    scrape: async function(e) {
        var t = "https://popcornmovies.to/api/flixscrape"
          , t = await fetch("Movie" === e.type ? t + "/movie/" + e.tmdbId : t + `/tv/${e.tmdbId}/${e.season}/` + e.episode).then(e=>e.json());
        return t && t?.source ? (t = {
            tmdbId: e.tmdbId,
            poster: e.poster,
            brand: "rgb(249, 173, 73)",
            src: "https://east-cn-raise-auctions.trycloudflare.com/proxy/" + t.source.slice(8)
        },
        "Movie" !== e.type && (t.season = e.season,
        t.episode = e.episode),
        "../players/vidstack/?v=" + encodeURIComponent(JSON.stringify(t))) : _fallback
    }
}, {
    name: "vidsrc.icu",
    movie: function(e) {
        return "https://vidsrc.icu/embed/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://vidsrc.icu/embed/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "Removed, 18+ Popup Ads",
    movie: function(e) {
        return "https://example.com/embed/" + e.tmdbId
    },
    series: function(e) {
        return `https://www.2embed.skin/embedtv/${e.tmdbId}&s=${e.season}&e=` + e.episode
    }
}, {
    name: "autoembed",
    movie: function(e) {
        return `https://player.autoembed.cc/embed/movie/${e.tmdbId}?server=1`
    },
    series: function(e) {
        return `https://player.autoembed.cc/embed/tv/${e.tmdbId}/${e.season}/${e.episode}?server=1`
    }
}, {
    name: "vidsrc.xyz",
    movie: function(e) {
        return "https://vidsrc.xyz/embed/movie?tmdb=" + e.tmdbId
    },
    series: function(e) {
        return `https://vidsrc.xyz/embed/tv?tmdb=${e.tmdbId}&season=${e.season}&episode=` + e.episode
    }
}, {
    name: "Removed, 18+ Popup Ads",
    movie: function(e) {
        return "https://example.com/embed/movie?tmdb=" + e.tmdbId
    },
    series: function(e) {
        return `https://www.primewire.tf/embed/tv?tmdb=${e.tmdbId}&season=${e.season}&episode=` + e.episode
    }
}, {
    name: "keels",
    movie: function(e) {
        return e.imdbId ? "https://keels313ale.com/play/" + e.imdbId : _fallback
    },
    series: function(e) {
        return e.imdbId ? "https://keels313ale.com/play/" + e.imdbId : _fallback
    }
}, {
    name: "123embed",
    movie: function(e) {
        return "https://play2.123embed.net/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://play2.123embed.net/tv/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "Removed, 18+ Popup Ads",
    movie: function(e) {
        return "https://example.com/filme/" + e.tmdbId
    },
    series: function(e) {
        return `https://embed.warezcdn.com/serie/${e.tmdbId}/${e.season}/` + e.episode
    }
}, {
    name: "Removed, 18+ Popup Ads",
    movie: function(e) {
        return "https://example.com/api/film.php?id=" + e.tmdbId
    },
    series: function(e) {
        return `https://frembed.pro/api/serie.php?id=${e.tmdbId}&sa=${e.season}&epi=` + e.episode
    }
}]).filter(e=>!0 !== e.disabled);
"y" === localStorage.getItem("adfree") && (_embeds = _embeds.filter(e=>(e.sudo || e.name).includes("(no ads)")).map(e=>{
    var t = e.sudo || e.name;
    if (t.includes("no ads"))
        return {
            ...e,
            sudo: t.replace("(no ads)", "").trim()
        }
}
));
let parseRuntimes = function(e) {
    var t = Math.floor(e / 60)
      , e = e % 60 + "m";
    return 0 < t ? t + "h" + ("0m" != e ? " " + e : "") : "0m" == e ? null : e
};
var loadEmbeds = function(t) {
    let n = document.createElement("div");
    n.classList.add("modal");
    var e = document.createElement("div")
      , d = (e.classList.add("horizontal-modal"),
    document.createElement("div"))
      , i = (d.classList.add("horizontal-modal"),
    document.createElement("p"));
    i.innerText = "Source: ";
    let s = document.createElement("select");
    s.setAttribute("autocomplete", "off");
    var r = document.createElement("button")
      , o = (r.id = "close-button",
    r.textContent = "Close",
    document.createElement("p"));
    o.innerText = "Movie" === t.type ? t.title : `Season ${t.seasonNumber} Episode ` + t.episodeNumber;
    function m(e) {
        if (c.innerHTML = '<iframe src="../previews/ploading.gif" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
        e.scrape)
            try {
                e.scrape(t).then(e=>{
                    c.innerHTML = `<iframe src="${e}" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>`
                }
                )
            } catch (e) {
                c.innerHTML = `<iframe src="${_fallback}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`
            }
        else
            c.innerHTML = `<iframe src="${"Movie" === t.type ? e.movie(t) : e.series(t)}" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>`
    }
    let a = document.createElement("p")
      , c = (a.innerText = t.runtime && parseRuntimes(t.runtime) ? parseEndTime(t.runtime) : "",
    document.createElement("div"));
    c.classList.add("vaplayer"),
    c.innerHTML = "<p>ur watching ligma channel!!1!</p>",
    e.appendChild(r),
    n.appendChild(e),
    n.appendChild(o),
    n.appendChild(a),
    d.appendChild(i),
    d.appendChild(s),
    n.appendChild(d),
    n.appendChild(c),
    setInterval(()=>{
        try {
            a.innerText = t.runtime && parseRuntimes(t.runtime) ? parseEndTime(t.runtime) : ""
        } catch (e) {}
    }
    , 2250),
    r.addEventListener("click", e=>{
        e.stopPropagation(),
        document.body.removeChild(n)
    }
    );
    _embeds.forEach(e=>{
        var t = document.createElement("option");
        t.text = e.sudo || e.name,
        t.value = e.name,
        s.add(t)
    }
    ),
    s.addEventListener("change", ()=>{
        m(_embeds.find(e=>e.name === s.value))
    }
    ),
    m(_embeds[0]),
    document.body.appendChild(n)
};
