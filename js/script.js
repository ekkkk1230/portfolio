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

/* 탭메뉴 스크롤 */
window.addEventListener('scroll', () => {
  let scrolltop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
  let tab = document.querySelector('.tab_btn');
  if(scrolltop > 969){
    tab.style.position = 'fixed'
    /* tab.style.top = '4px' */
  }else{
    tab.style.position = 'relative'
  }
  
})




/* 스크롤 */

let charts = document.querySelectorAll('.chart');
let precentage = [88,85,70,85,80,70,75,80,85,85];

const scroll = document.querySelector('.scroll');
scroll.addEventListener('click', ()=>{
  document.querySelector('section').scrollIntoView({ behavior: 'smooth'});
})
const scrollToSkill = document.querySelector('.toSkill');
scrollToSkill.addEventListener('click', ()=>{
  document.querySelector('.skills').scrollIntoView({ behavior: 'smooth'});

  for(let i = 0; i<charts.length; i++){
    makeChart(precentage[i], charts[i], '#1499a5');
  };

})

/* 탭 */
function tab(btns, contents){
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      for(let i=0; i<btns.length; i++){
        btns[i].classList.remove('active');
      }
      e.target.parentElement.classList.add('active');

      let orgTg = e.target.getAttribute('href');
      let tg = orgTg.replace('#', '');

      contents.forEach(cont => {
        cont.style.display = 'none';
      })
      document.getElementById(tg).style.display = 'block';

    })
    contents[0].style.display = 'block';
  })
}

let tabBtn = document.querySelectorAll('.tab_btn li');
let tabCont = document.querySelectorAll('article');

let p_tabBtn = document.querySelectorAll('.p_tab_btn li');
let p_tabCont = document.querySelectorAll('.p_content')
let mo_tab_cont = document.querySelectorAll('.mo_content');
tab(tabBtn, tabCont);
tab(p_tabBtn, p_tabCont);

let ww = document.body.offsetWidth;

window.addEventListener('load', ()=>{
  if(ww < 1100){
    document.getElementById('mo_responsive').style.display = 'block';
    p_tabBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
  
        for(let i=0; i<p_tabBtn.length; i++){
          p_tabBtn[i].classList.remove('active');
        }
        e.target.parentElement.classList.add('active');
  
        let orgTg = e.target.getAttribute('href');
        let tg = orgTg.replace('#', 'mo_');
  
        mo_tab_cont.forEach(cont => {
          cont.style.display = 'none';
        })
        document.getElementById(tg).style.display = 'block';
  
      })
      document.getElementById('mo_responsive').style.display = 'block';
    })
  }else if(ww>=1100){
    tab(p_tabBtn, p_tabCont);
  }
})
window.addEventListener('resize', ()=>{
  ww = document.body.offsetWidth;
  if(ww < 1100){
    document.getElementById('mo_responsive').style.display = 'block';
    p_tabBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
  
        for(let i=0; i<p_tabBtn.length; i++){
          p_tabBtn[i].classList.remove('active');
        }
        e.target.parentElement.classList.add('active');
  
        let orgTg = e.target.getAttribute('href');
        let tg = orgTg.replace('#', 'mo_');
  
        mo_tab_cont.forEach(cont => {
          cont.style.display = 'none';
        })
        document.getElementById(tg).style.display = 'block';
  
      })
      document.getElementById('mo_responsive').style.display = 'block';
    })
  }else if(ww>=1100){
    tab(p_tabBtn, p_tabCont);
    slide_project();
  }
})

/* 스킬 */
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
  if(scrolltop >= 1830 && scrolltop <= 1850) { 
    for(let i = 0; i<charts.length; i++){
      makeChart(precentage[i], charts[i], '#1499a5');
    };
  };
});

/* project 슬라이드 */ 
window.addEventListener('click', e => {
  let tg = e.target;
  if(tg == document.querySelector('.tg')){
    slide_project();
    project_popup();
  };
});

function slide_project(){

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
  const $pagerBtn1 = document.querySelectorAll('.pager1 li');
  const $pagerBtn2 = document.querySelectorAll('.pager2 li');
  const $pagerBtn3 = document.querySelectorAll('.pager3 li');


  window.addEventListener("resize", () => {
    slideWidth1 = $pj1.clientWidth;
  });
  window.addEventListener("resize", () => {
    slideWidth2 = $pj2.clientWidth;
  });
  window.addEventListener("resize", () => {
    slideWidth3 = $pj3.clientWidth;
  });

  function clickPager(count, btns, idx, items, width){
    for(let i=0; i<count; i++){
      btns[i].addEventListener('click', ()=>{
        idx = i;
        const offset = width * idx;
        items.forEach(item => item.setAttribute('style', `left:${-offset}px`));
    
        btns.forEach(btn => btn.classList.remove('active'));
        btns[idx].classList.add('active');
      });
    };
  };

  clickPager($pj1Count, $pagerBtn1, currentIdx1, $pj1Items, slideWidth1);
  clickPager($pj2Count, $pagerBtn2, currentIdx2, $pj2Items, slideWidth2);
  clickPager($pj3Count, $pagerBtn3, currentIdx3, $pj3Items, slideWidth3);

}

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


function project_popup(){
  /* 프로젝트 팝업 */
  let $modal_view = document.querySelectorAll('.modal_inner');
  let $modal_tab = document.querySelector('.modal_tab');
  let $modal_phone = document.querySelector('.modal_phone');
  let bodyW = document.querySelector('body').clientWidth;
  let $modal = document.querySelector('#modal');

  document.querySelector('.p_tab_cont').addEventListener('click', e => {
    e.preventDefault();
    let tg = e.target;
    let classNames = tg.className;
    let domains = classNames.split(' ');
    let domain = domains[2];
    
    if(domain === 'project5'){
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
    document.querySelector('.p_tab_cont').addEventListener('click', () => {
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
}

/* 모바일 프로젝트 */
let mo_slideItem = document.querySelectorAll('.mo_p_tab_cont .mo_content li');

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
let title = document.querySelectorAll('.contents_title');
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
 /*  console.log(scrolltop) */
  if(scrolltop >= 1048){
    let animation = title[1].querySelectorAll('span');
    animation.forEach(i => i.classList.add('on'));
  }else if(scrolltop > 550){
    let animation1 = title[0].querySelectorAll('span');
    let animation2 = title[2].querySelectorAll('span');
    /* let animation3 = title[3].querySelectorAll('span'); */
    animation1.forEach(i => i.classList.add('on'));
    animation2.forEach(i => i.classList.add('on'));
    /* animation3.forEach(i => i.classList.add('on')); */
  }
  
});


