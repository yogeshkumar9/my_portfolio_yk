//Navigation menu 

    document.querySelector('.menu').addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.toggle('change');
        })
    })


//water Wave animation for main section

    let wave1 = document.getElementById('wave1');
    let wave2 = document.getElementById('wave2');
    let wave3 = document.getElementById('wave3');
    let wave4 = document.getElementById('wave4');

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      wave1.style.backgroundPositionX = 400 + value + 4 + 'px';
      wave2.style.backgroundPositionX = 300 + value + -4 + 'px';
      wave3.style.backgroundPositionX = 200 + value + 2 + 'px';
      wave4.style.backgroundPositionX = 100 + value + -2 + 'px';
    })


//Scroll bar 

        // $(window).scroll(function(){
        //     var scroll = $(window).scrollTop(),
        //      dh=$(document).height(),
        //      wh=$(window).height();
        //     scrollPercent =(scroll/(dh-wh))* 100;
        //     $('#scrollbar').css('height', scrollPercent + '%');
        // })


// Scroll to top

window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector('.scroll-top');
    scroll.classList.toggle('active', window.scrollY > 500);
})

function scrolltop(){
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
}

function scroll(){
    window.scroll({
        behavior: 'smooth'
    })
}
