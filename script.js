document.addEventListener("DOMContentLoaded", ()=>{
    let e = document.getElementById("adfree");
    var a = localStorage.getItem("adfree");
    e.checked = "y" === a,
    e.addEventListener("change", ()=>{
        e.checked ? localStorage.setItem("adfree", "y") : localStorage.setItem("adfree", "n")
    }
    )
}
),
window.location.href.includes("adfree") && localStorage.setItem("adfree", "y"),
themoviedb("trending/movie/week?language=en-US&page=1"),
themoviedb("trending/movie/week?language=en-US&page=2"),
themoviedb("trending/movie/week?language=en-US&page=3"),
themoviedb("trending/tv/week?language=en-US&page=1"),
themoviedb("trending/tv/week?language=en-US&page=2"),
themoviedb("trending/tv/week?language=en-US&page=3"),
newsapi();
