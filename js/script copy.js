"use strict"

/* 글자 타이핑 효과 */
let $slogan = document.querySelector('.slogan');
let slogan = "뜨거운 열정보다 중요한 것은 끊임없는 열정이다.";
let text_index = 0;

function typing(){
  $slogan.textContent += slogan[text_index++]
  if(text_index > slogan.length){
    $slogan.textContent = "";
    text_index = 0;
  };
}
setInterval(typing, 300);

/* 메뉴 클릭 시 이동 */
document.querySelectorAll(".nav ul li a").forEach(el=>{
  el.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(el.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      });
  });
});

window.addEventListener("scroll",()=>{
  let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
  let menu = document.querySelectorAll('nav ul li');
  document.querySelectorAll('.contents').forEach((cont, i) => {
      if(scrollTop >= cont.offsetTop){
          menu.forEach((li) => {
              li.classList.remove('active');
          });
          menu[i].classList.add('active');
      };
  });
});

/* 모바일메뉴 */
let menuArr = [];
let menu = document.querySelector('.mobile');
let menuItem = document.querySelectorAll('.mo_nav li');
let menuBtn = document.querySelector('.mo_btn');
let click = 0;
menu.addEventListener('click', () => {
  menuBtn.classList.toggle('open');

  if(click == 0){
    menu.style.height = '500px';
    click = 1;
    
  }else if(click == 1){
    menu.style.height = '70px';
    click = 0;
  };

});

document.querySelectorAll(".mo_nav li a").forEach((el)=>{
  el.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(el.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      });      

      menuItem.forEach(item => {
        item.classList.remove('active');
      })

      let tg = e.target;
      let item = tg.parentElement;
      item.classList.add('active');
          
  });
});

/* 스킬 */
const chart1 = document.querySelector('.chart1');
const chart2 = document.querySelector('.chart2');
const chart3 = document.querySelector('.chart3');
const chart4 = document.querySelector('.chart4');
const chart5 = document.querySelector('.chart5');
const chart6 = document.querySelector('.chart6');
const chart7 = document.querySelector('.chart7');
const chart8 = document.querySelector('.chart8');
const chart9 = document.querySelector('.chart9');
const chart10 = document.querySelector('.chart10');

const makeChart = (percent, classname, color) => {
  let i = 1;
  setInterval(function() {
      if (i < percent) {
        colorFn(i, classname, color);
        i++;
        classname.querySelector('.score').innerText = i+'%'
      } 
  })
}

const colorFn = (i, classname, color) => {
  classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}


window.addEventListener('scroll', function(){
  let scrolltop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
  console.log(scrolltop)
  if(scrolltop >= 2080 && scrolltop <=2140) { 
    makeChart(88, chart1, '#1499a5');
    makeChart(85, chart2, '#73b9be');
    makeChart(70, chart3, '#1499a5');
    makeChart(85, chart4, '#73b9be');
    makeChart(80, chart5, '#1499a5');
    makeChart(70, chart6, '#73b9be');
    makeChart(75, chart7, '#1499a5');
    makeChart(80, chart8, '#1499a5');
    makeChart(85, chart9, '#1499a5');
    makeChart(85, chart10, '#1499a5');
  }
})



/* project 탭메뉴 */
let $tab_menu = document.querySelectorAll('.tab_menu li');
let $tab_cont = document.querySelectorAll('.project__show');
let $mo_tab_cont = document.querySelectorAll('.tabCont');

let w = document.querySelector('#wrap').clientWidth;
window.addEventListener('resize',() => {
  w = document.querySelector('#wrap').clientWidth;
  resize();
})

function clickPager(count, btns, idx, items, width){
  for(let i=0; i<count; i++){
    btns[i].addEventListener('click', ()=>{
      idx = i;
      const offset = width * idx;
      items.forEach(item => item.setAttribute('style', `left:${-offset}px`));
  
      btns.forEach(btn => btn.classList.remove('active_btn'));
      btns[idx].classList.add('active_btn');
    });
  };
};

function resize(){
  if(w >= 1000){

    $tab_menu.forEach((menu)=> {
      menu.addEventListener('click', e => {
        e.preventDefault();
    
        for(let i = 0; i<$tab_menu.length; i++){
          $tab_menu[i].classList.remove('select');
        };
    
        e.target.parentNode.classList.add('select');
        
        let orgTg = e.target.getAttribute('href');
        let tg = orgTg.replace('#', '');
  
        $tab_cont.forEach(cont => {
          cont.classList.remove('active');
        });
        document.getElementById(tg).classList.add('active');
  
        $pj1Items = document.querySelectorAll('.pj1 > li');
        let offset1 = slideWidth1 * currentIdx1;
        $pj1Items.forEach(item => {item.setAttribute("style", `left: ${-offset1}px`)});
  
        $pj2Items = document.querySelectorAll('.pj2 > li');
        let offset2 = slideWidth2 * currentIdx2;
        $pj2Items.forEach(item => {item.setAttribute("style", `left: ${-offset2}px`)});
  
        $pj3Items = document.querySelectorAll('.pj3 > li');
        let offset3 = slideWidth3 * currentIdx3;
        $pj3Items.forEach(item => {item.setAttribute("style", `left: ${-offset3}px`)});
  
        document.querySelectorAll('.pager_btn li').forEach(btn => {
          btn.classList.remove('active_btn');
        })
        $pagerBtn1[0].classList.add('active_btn');   
        $pagerBtn2[0].classList.add('active_btn');   
        $pagerBtn3[0].classList.add('active_btn');  
  
        clickPager($pj1Count, $pagerBtn1, currentIdx1, $pj1Items, slideWidth1);
        clickPager($pj2Count, $pagerBtn2, currentIdx2, $pj2Items, slideWidth2);
        clickPager($pj3Count, $pagerBtn3, currentIdx3, $pj3Items, slideWidth3);
  
      });
    });
  
  }else if(w < 1000){
    
    $tab_menu.forEach((menu)=> {
      menu.addEventListener('click', e => {
        e.preventDefault();
    
        for(let i = 0; i<$tab_menu.length; i++){
          $tab_menu[i].classList.remove('select');
        };
    
        e.target.parentNode.classList.add('select');
        
        let orgTg = e.target.getAttribute('href');
        let tg = orgTg.replace('#', 'mo_');
    
        $mo_tab_cont.forEach(cont => {
          cont.classList.remove('active');
          console.log(cont)
        });
        document.getElementById(tg).classList.add('active');
  
        mo_pj1Items = document.querySelectorAll('.mo_pj1 > li');
        let mo_offset1 = mo_slideWidth1 * mo_currentIdx1;
        mo_pj1Items.forEach(item => {item.setAttribute("style", `left: ${-mo_offset1}px`)});
  
        mo_pj2Items = document.querySelectorAll('.mo_pj2 > li');
        let mo_offset2 = mo_slideWidth2 * mo_currentIdx2;
        mo_pj2Items.forEach(item => {item.setAttribute("style", `left: ${-mo_offset2}px`)});
  
        mo_pj3Items = document.querySelectorAll('.mo_pj3 > li');
        let mo_offset3 = mo_slideWidth3 * mo_currentIdx3;
        mo_pj3Items.forEach(item => {item.setAttribute("style", `left: ${-mo_offset3}px`)});
  
        document.querySelectorAll('.mo_pager li').forEach(btn => {
          btn.classList.remove('active_btn');
        })
  
        mo_pagerBtn1[0].classList.add('active_btn');   
        mo_pagerBtn2[0].classList.add('active_btn');   
        mo_pagerBtn3[0].classList.add('active_btn');  
  
        clickPager(mo_pj1Count, mo_pagerBtn1, mo_currentIdx1, mo_pj1Items, mo_slideWidth1);
        clickPager(mo_pj2Count, mo_pagerBtn2, mo_currentIdx2, mo_pj2Items, mo_slideWidth2);
        clickPager(mo_pj3Count, mo_pagerBtn3, mo_currentIdx3, mo_pj3Items, mo_slideWidth3);

      });
    });
  
  }
}
resize();

/* project 슬라이드 */ 
const $pj1 = document.querySelector('.pj1');
const $pj2 = document.querySelector('.pj2');
const $pj3 = document.querySelector('.pj3');
let slideWidth1 = document.querySelector('.pj1').clientWidth;
let slideWidth2 = document.querySelector('.pj2').clientWidth;
let slideWidth3 = document.querySelector('.pj3').clientWidth;
let $pj1Items = document.querySelectorAll('.pj1 > li');
let $pj2Items = document.querySelectorAll('.pj2 > li');
let $pj3Items = document.querySelectorAll('.pj3 > li');
const $pj1Count = $pj1Items.length;
const $pj2Count = $pj2Items.length;
const $pj3Count = $pj3Items.length;
let currentIdx1 = 0; 
let currentIdx2 = 0; 
let currentIdx3 = 0; 
const $pager1 = document.querySelector('.pager1');
const $pager2 = document.querySelector('.pager2');
const $pager3 = document.querySelector('.pager3');

function makePagerBtn(count, pager){
  for(let i = 0; i< count; i++){
    if(i === 0) pager.innerHTML += '<li class="active_btn"></li>';
    else pager.innerHTML += '<li></li>';
  }
}

makePagerBtn($pj1Count, $pager1);
makePagerBtn($pj2Count, $pager2);
makePagerBtn($pj3Count, $pager3);

let $pagerBtn1 = document.querySelectorAll('.pager1 li');
let $pagerBtn2 = document.querySelectorAll('.pager2 li');
let $pagerBtn3 = document.querySelectorAll('.pager3 li');

window.addEventListener("resize", () => {
  slideWidth1 = $pj1.clientWidth;
});
window.addEventListener("resize", () => {
  slideWidth2 = $pj2.clientWidth;
});
window.addEventListener("resize", () => {
  slideWidth3 = $pj3.clientWidth;
});

clickPager($pj1Count, $pagerBtn1, currentIdx1, $pj1Items, slideWidth1);
clickPager($pj2Count, $pagerBtn2, currentIdx2, $pj2Items, slideWidth2);
clickPager($pj3Count, $pagerBtn3, currentIdx3, $pj3Items, slideWidth3);

/* 프로젝트 화면 슬라이드 */
let $viewer = document.querySelectorAll('.see');
$viewer.forEach((item) => {
  item.addEventListener('mouseenter', e => {
    let image = e.target; 
    let imageH = image.clientHeight;

    let imageP = image.parentNode.parentNode;
    let imageP_H = imageP.clientHeight;

    image.style.top = -(imageH-imageP_H)+'px';
  });
  item.addEventListener('mouseleave', e => {
    let image = e.target;

    image.style.top = 0+'px';
  });
});

/* 프로젝트 팝업 */
let $modal_view = document.querySelectorAll('.modal_inner');
let $modal_pc = document.querySelector('.modal_pc');
let $modal_tab = document.querySelector('.modal_tab');
let $modal_phone = document.querySelector('.modal_phone');
let bodyW = document.querySelector('body').clientWidth;
let $modal = document.querySelector('#modal');

/* 선택한 프로젝트 주소 넣기 */
document.querySelector('.tab_cont').addEventListener('click', e => {
  e.preventDefault();
  let tg = e.target;
  let classNames = tg.className;
  let domains = classNames.split(' ');
  let domain = domains[2];
  
  if(domain === 'project4'){
    $modal_pc.querySelector('iframe').setAttribute('src', `http://ek01.dothome.co.kr/index.php`);
    $modal_pc.classList.add('show');
    $modal_pc.querySelector('.btn').addEventListener('click', ()=>{
      $modal_pc.classList.remove('show');
    });
  }else if(domain === 'project5'){
    $modal_phone.querySelector('iframe').setAttribute('src', `https://maumagit-ef881.web.app/`);
    $modal_phone.classList.add('show');
    $modal_phone.querySelector('.btn').addEventListener('click', ()=>{
      $modal_phone.classList.remove('show');
    });

  }else if(tg.classList.contains('tab')){
    $modal_tab.querySelector('iframe').setAttribute('src', `./projectfile/${domain}/index.html`);
    $modal_tab.classList.add('show');
    $modal_tab.querySelector('.btn').addEventListener('click', ()=>{
      $modal_tab.classList.remove('show');
    });
  }else if(tg.classList.contains('phone')){
    $modal_phone.querySelector('iframe').setAttribute('src', `./projectfile/${domain}/index.html`);
    $modal_phone.classList.add('show');
    $modal_phone.querySelector('.btn').addEventListener('click', ()=>{
      $modal_phone.classList.remove('show');
    });
  }
})

/* 현재 시간 */
$modal_view.forEach(item => {
  document.querySelector('.tab_cont').addEventListener('click', () => {
    if(item.classList.contains('show') && item.classList.contains('modal_tab') || item.classList.contains('modal_phone')){
      let now = new Date();
      setInterval(()=>{
        now = new Date();
  
        let hours = ('0' + now.getHours()).slice(-2); 
        let minutes = ('0' + now.getMinutes()).slice(-2);
  
        let nowTime = hours + ':' + minutes;
        item.querySelector('.time').innerText = nowTime;
      }, 1000);
    }
  })
})

/* project 슬라이드 - 모바일 */ 
const mo_pj1 = document.querySelector('.mo_pj1');
const mo_pj2 = document.querySelector('.mo_pj2');
const mo_pj3 = document.querySelector('.mo_pj3');
let mo_slideWidth1 = document.querySelector('.mo_pj1').clientWidth;
let mo_slideWidth2 = document.querySelector('.mo_pj2').clientWidth;
let mo_slideWidth3 = document.querySelector('.mo_pj3').clientWidth;
let mo_pj1Items = document.querySelectorAll('.mo_pj1 > li');
let mo_pj2Items = document.querySelectorAll('.mo_pj2 > li');
let mo_pj3Items = document.querySelectorAll('.mo_pj3 > li');
const mo_pj1Count = mo_pj1Items.length;
const mo_pj2Count = mo_pj2Items.length;
const mo_pj3Count = mo_pj3Items.length;
let mo_currentIdx1 = 0;
let mo_currentIdx2 = 0;
let mo_currentIdx3 = 0;
const mo_pager1 = document.querySelector('.mo_pager1');
const mo_pager2 = document.querySelector('.mo_pager2');
const mo_pager3 = document.querySelector('.mo_pager3');

makePagerBtn(mo_pj1Count, mo_pager1);
makePagerBtn(mo_pj2Count, mo_pager2);
makePagerBtn(mo_pj3Count, mo_pager3);

let mo_pagerBtn1 = document.querySelectorAll('.mo_pager1 li');
let mo_pagerBtn2 = document.querySelectorAll('.mo_pager2 li');
let mo_pagerBtn3 = document.querySelectorAll('.mo_pager3 li');

window.addEventListener("resize", () => {
  mo_slideWidth1 = mo_pj1.clientWidth;
});
window.addEventListener("resize", () => {
  mo_slideWidth2 = mo_pj2.clientWidth;
});
window.addEventListener("resize", () => {
  mo_slideWidth3 = mo_pj3.clientWidth;
});

clickPager(mo_pj1Count, mo_pagerBtn1, mo_currentIdx1, mo_pj1Items, mo_slideWidth1);
clickPager(mo_pj2Count, mo_pagerBtn2, mo_currentIdx2, mo_pj2Items, mo_slideWidth2);
clickPager(mo_pj3Count, mo_pagerBtn3, mo_currentIdx3, mo_pj3Items, mo_slideWidth3);

/* 모바일 프로젝트 */
let mo_slideItem = document.querySelectorAll('.mo_tab .tab_contents li');

mo_slideItem.forEach(item => {
  item.addEventListener('mouseenter', e => {
    let tg = e.target;
    let hover = tg.querySelector('.hover')
    hover.classList.add('on')
  })
  item.addEventListener('mouseleave', e => {
    let tg = e.target;
    let hover = tg.querySelector('.hover')
    hover.classList.remove('on')
  })
})

/* contactMe */
let textEvent = document.querySelector('.contactMe').innerText;

let split = textEvent.split('').join('</span><span>');
split= `<span>${split}</span>`;
document.querySelector('.contactMe').innerHTML = split;


for(let i = 0 ; i<split.length; i ++){
  if(i < 9){
    document.querySelector(".contactMe span:nth-child("+(i+1)+")").style.animationDelay = `.${i}s`;
  }else if(i < 19){
    document.querySelector(".contactMe span:nth-child("+(i+1)+")").style.animationDelay = `1.${i-9}s`;
  }else if(i < 30){
    document.querySelector(".contactMe span:nth-child("+(i+1)+")").style.animationDelay = `2.${i-19}s`;
  }else if(i <= 30){
    document.querySelector(".contactMe span:nth-child("+i+")").style.animationDelay = `3.${i-29}s`;
  }
};

/* 메뉴 제목 스크롤 이벤트*/
let title = document.querySelectorAll('.content_title');
title.forEach(tit => {
  let text = tit.innerText;
  let split = text.split('').join(`</span><span>`);
  split = `<span>${split}</span>`;
  tit.innerHTML = split;
 
  for(let i = 0; i<text.length; i++){
    tit.querySelector("span:nth-child("+(i+1)+")").style.animationDelay = `.${i}s`;
  }
});

window.addEventListener('scroll', ()=>{
  let scrolltop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
  if(scrolltop > 2480){
    let animation = title[2].querySelectorAll('span');
    animation.forEach(i => i.classList.add('on'));
  }else if(scrolltop >= 1590){
    let animation = title[1].querySelectorAll('span');
    animation.forEach(i => i.classList.add('on'));
  }else if(scrolltop > 700){
    let animation = title[0].querySelectorAll('span');
    animation.forEach(i => i.classList.add('on'));
  }
});


