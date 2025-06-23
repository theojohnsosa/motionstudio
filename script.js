let time = document.getElementById("time");

setInterval(() =>{
    let d = new Date();
time.innerHTML = d.toLocaleTimeString();
}, 1000)


$(document).ready(function() {
    function scrollToTop() {
        $('html, body').animate({scrollTop:0}, 'slow');
    }

    $('#arrowUpBtn').click(function() {
        scrollToTop();
    });
});

document.getElementById('arrowDown').addEventListener('click', function() {
    const section2 = document.getElementById('section-2');
    section2.scrollIntoView({ behavior: 'smooth'});
});

$(document).ready(function() {
    $('#arrowDown').click(function() {
        $('html, body').animate({
            scrollTop: $('#section-2').offset().top
        }, 1000);
    });
});