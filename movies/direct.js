let directs = [{
    display: 'Directly on <span style="color: rgb(232, 128, 197);">sudo-flix</span>',
    base: "sudo-flix.lol",
    movie: function(e) {
        var t = slugify(e.title, {
            lower: !0,
            strict: !0
        });
        return `https://sudo-flix.lol/media/tmdb-movie-${e.tmdbId}-` + t
    },
    series: function(e) {
        var t = slugify(e.title, {
            lower: !0,
            strict: !0
        });
        return `https://sudo-flix.lol/media/tmdb-tv-${e.tmdbId}-${t}/${e.seasonId}/` + e.episodeId
    }
}, {
    display: 'Directly on <span style="color: rgb(53, 165, 195);">Binged</span>',
    base: "binged.live",
    movie: function(e) {
        return "https://binged.live/watch/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://binged.live/watch/tv/${e.tmdbId}?season=${e.seasonNumber}&ep=` + e.episodeNumber
    }
}, {
    display: 'Directly on <span style="color: rgb(154, 142, 241);">watch.lonelil</span>',
    base: "watch.lonelil.ru",
    movie: function(e) {
        return "https://watch.lonelil.ru/watch/movie/" + e.tmdbId
    },
    series: function(e) {
        return `https://watch.lonelil.ru/watch/show/${e.tmdbId}.${e.seasonNumber}.` + e.episodeNumber
    }
}];
var loadDirects = function(o) {
    let t = document.createElement("div");
    t.classList.add("modal");
    var e = document.createElement("div")
      , i = (e.classList.add("horizontal-modal"),
    document.createElement("p"))
      , n = (i.innerText = o.title,
    document.createElement("button"));
    n.id = "close-button",
    n.textContent = "Close";
    let l = document.createElement("div");
    l.classList.add("vertical-modal"),
    directs.forEach(e=>{
        var t, i = "Movie" === o.type ? e.movie : e.series;
        i(o) && (t = "https://www.google.com/s2/favicons?sz=32&domain=" + e.base,
        l.innerHTML = `${l.innerHTML}<div class="horizontal-modal"><img src="${t}"><a target="_blank" rel="noopener noreferrer" href="${i(o)}">${e.display}</a></div>`)
    }
    ),
    e.appendChild(n),
    t.appendChild(e),
    t.appendChild(i),
    t.appendChild(l),
    n.addEventListener("click", e=>{
        e.stopPropagation(),
        document.body.removeChild(t)
    }
    ),
    document.body.appendChild(t)
};
