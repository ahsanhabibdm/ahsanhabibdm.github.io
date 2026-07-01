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
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function showSection(targetId) {
        sections.forEach(sec => {
            sec.style.display = 'none';
        });

        // যদি কেউ Services পেজে ক্লিক করে, তবে সার্ভিস এবং প্রাইসিং দুটোই দেখাবে
        if (targetId === 'services') {
            const servicesSection = document.getElementById('services');
            // আপনার প্রাইসিং সেকশনের আইডি যদি 'pricing' হয়ে থাকে
            const pricingSection = document.getElementById('pricing') || document.querySelector('.pricing') || document.querySelector('[id*="pricing"]');
            
            if (servicesSection) servicesSection.style.display = 'block';
            if (pricingSection) pricingSection.style.display = 'block';
        } else {
            // বাকি পেজগুলোর জন্য নরমাল নিয়ম
            const activeSection = document.getElementById(targetId);
            if (activeSection) {
                activeSection.style.display = 'block';
            }
        }
        window.scrollTo(0, 0); // পেজ একদম উপর থেকে শুরু হবে
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href').replace('#', '');
            showSection(id);
            history.pushState(null, null, '#' + id);
        });
    });

    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
        showSection(currentHash);
    } else {
        showSection('home');
    }
});
