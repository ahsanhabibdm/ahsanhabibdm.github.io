document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});
});
});
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});
function openPricing(evt, platformId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(platformId).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}
