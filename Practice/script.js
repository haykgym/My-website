"use strict";

const btnMore = document.querySelector(".fa-caret-down");
const btnMenu = document.querySelector('.fa-circle-o');
const btnWelcome = document.querySelector('.welcome');
const btnMenuContent = document.querySelectorAll('.nav-menu--icon');
const modalIcons = document.querySelector(".more-icons");
const menu = document.querySelector('.nav-menu');
const section = document.querySelector('section');


function getColor(){
  const r = (Math.floor(Math.random() * 256));
  const g = (Math.floor(Math.random() * 256));
  const b = (Math.floor(Math.random() * 256));
  return [r,g,b];
}

function getStyle(curStyle){
  const styles = ['section','section--welcome','section--blog', 'section--source', 'section--cv', 'section--contact'];
  styles.forEach(style => section.classList.remove(style));
  section.classList.add(curStyle);
}

function getContent(html){
  section.innerHTML = '';

  section.insertAdjacentHTML('beforeend',html);

}

//Render page contents 
//1.
function renderWelcomeContent(){

  const html = `
    <div>
      <h1>Hello, I'm Hayk Petrosyan!</h1>
      <h4>A human being from the Earth!</h4>
    </div>
  `;

  getStyle('section--welcome');
  return getContent(html);
}
// renderWelcomeContent();

//2. render about content

function renderAboutContent(){
  const html = `
  <div class="slider--img_container">
    <div class="slider slider-left"><</div>
    <div class="img--container">
      <img src="/img/img1.jpg" class="img--profile img1 img--active"/>
      <img src="/img/img2.jpg" class="img--profile img2">
      <img src="/img/img3.jpg" class="img--profile img3" />
      <img src="/img/img4.jpg" class="img--profile img4" />
      <img src="/img/img5.jpg" class="img--profile img5" />
    </div>
    <div class="slider slider-right">></div>
  </div>
  <div class="info">
    <h1 class="about-me about-me--title">A little bit about me</h1>
    <br />
    <hr class="about-me" />
    <br />
    <p class="about-me about-me--text">
      I was born in a country which is called Armenia: in the northern part
      of Armenia, near the border, in a period, when there was a war in my
      country. 1993. 14th of June, during the bombing, in the basement of
      the hospital. It was a hard time, there was a lack of almost
      everything… But I am happy for the childhood I had. When there isn’t
      anything you start to appreciate everything. I studied at one of the
      secondary schools of my birthplace, after that physmath college, then
      applied mathematics and informatics faculty of YSU. At school I loved
      physics very much; physics was my passion. But in the end of college,
      informatics interested me more. I wrote my first code at the school
      and after that until now I deal with the IT sphere. By study I am a
      mathematician/programmer, I work in different segments (management,
      team leading, engineering lead, software engineer) of the IT sphere as
      a senior specialist. Besides main specialities I live to THINK. Think
      about reasons, relations, about possible and impossible, about life,
      about aim and about human beings. I am an atheist. I love to create!At school I loved
      physics very much; physics was my passion. But in the end of college,
      informatics interested me more. I wrote my first code at the school
      and after that until now I deal with the IT sphere. By study I am a
      mathematician/programmer, I work in different segments (management,
      team leading, engineering lead, software engineer) of the IT sphere as
      a senior specialist. Besides main specialities I live to THINK. Think
      about reasons, relations, about possible and impossible, about life,
      about aim and about human beings. I am an atheist. I love to create!
    </p>
  </div>
  `;

  getStyle('section');
  getContent(html);
}

renderAboutContent();

//3. Render Blog Content
function renderBlogContent(){

  const html =`
    <h1 id="posts">Posts</h1>
    <div class="section--blog_container">
      <div class='posts-container'>
        <div class="posts-head">
          <div class="posts-symbol posts-margin" style="background-color:rgb(${getColor().join(',')})">T</div>
          <div class="posts-title_container posts-margin">
            <span class="posts-title">The problems of Armenians</span></br>
            <span>June 12, 2020</span>
          </div>
        </div>
        <div class="posts-content">
            <p class="posts-margin posts-text">
              Մեր ամենամեծ խնդիրն այն է, որ չենք «ճանաչում» մեր խնդիրները: Մեր ամենամեծ խնդիրն այն է, 
              որ չենք «ճանաչում» մեր խնդիրները
            </p>
        </div>
        <div class="posts-foot">
            <p class="posts-margin">Lang.</p>
            <h3 class="posts-margin">hy</h3>
        </div>
      </div>
      <div class='posts-container'>
        <div class="posts-head">
          <div class="posts-symbol posts-margin" style="background-color:rgb(${getColor().join(',')})">T</div>
          <div class="posts-title_container posts-margin">
            <span class="posts-title">They are human beings: Episode 1</span></br>
            <span>May 30, 2020</span>
          </div>
        </div>
        <div class="posts-content">
            <p class="posts-margin posts-text">
            - Ովքե՞ր են նրանք հայրիկ<br/>
            - Նրանք մարդիկ են որդիս<br/>
            - Մարդի՞կ
            </p>
        </div>
        <div class="posts-foot">
            <p class="posts-margin">Lang.</p>
            <h3 class="posts-margin">hy</h3>
        </div>
      </div>
      <div class='posts-container'>
        <div class="posts-head">
          <div class="posts-symbol posts-margin" style="background-color:rgb(${getColor().join(',')}">T</div>
          <div class="posts-title_container posts-margin">
            <span class="posts-title">They are human beings: Episode 2</span></br>
            <span>June 09, 2020</span>
          </div>
        </div>
        <div class="posts-content">
            <p class="posts-margin posts-text">
              — Բժիշկները սարքում են մահացածների՞ն։
              — Չէ, բժիշկները փորձում են օգնել մարդկանց, որ վերջիններս չհիվանդանան, կամ արդեն հիվանդացածներին օգնում են բուժվել, 
              որպեսզի նրանք չմահանան։ Հակառակ դեպքում՝ բժիշկներն իզորու չեն արդեն մահացածին սարքել։
            </p>
        </div>
        <div class="posts-foot">
            <p class="posts-margin">Lang.</p>
            <h3 class="posts-margin">hy</h3>
        </div>
      </div>
    </div>
  `;

  getStyle('section--blog');
  return getContent(html);
  
}

//4. Render Source Content

function renderSourceContent(){
  const html =`
    <h3 id="source-title">
      Some open source projects I am doing in free time
    </h3>
    <div class="section--source_container">
      <a href="https://github.com/suren-atoyan/react-pwa" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')})">R</div>
          <div class="source-title_container source-margin">
            <span class="source-title">React PWA</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              A minimal React PWA application as a Github template. It's a combination of essential (and minimal) 
              libraries/components/utils and their integrations upon CRA, which developers usually need during the 
              process of making React application.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://monaco-react.surenatoyan.com/" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')})">M</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Monaco Editor</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
               Monaco editor wrapper for easy/one-line integration with React applications without need of webpack 
               (or other module bundler) configuration files
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/suren-atoyan/react-pwa" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">T</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Technical Interview</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              The definition of "Technical interview", forms of implementation, methods of application, importance
               and includes general advice
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://primes.surenatoyan.com/" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">P</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Primes</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              It's a playground for examining and playing with prime numbers. It also gives an opportunity to write 
              custom formulas and visualize the results
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/suren-atoyan/react-pwa" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">L</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Local State</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              ⚡ Tiny, simple, and robust technique for defining and acting with local states
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/suren-atoyan/react-pwa" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">D</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Dev Battle</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              Application for organizing and following dev competitions
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/suren-atoyan/react-pwa" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">T</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Timers</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              Abstraction layer on setTimeout and setInterval, implementation of setImmediate.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
    </div>
  `;

  getStyle('section--source');
  return getContent(html);
}

//5. render CV

function renderCv(){
  const html = `
    <div class='cv-container'>
      <h4 class="cv-text cv-content">
        You can download the CV as a PDF file
      </h4>
      <button class="cv-button cv-content">
          DOWNLOAD
      </button>
    </div>
  `;

  getStyle('section--cv');
  return getContent(html);
}

//6.render contact 

function renderContact(){
  const html = `
    <div class='contact-container'>
     <div class="contact contact-head">
        <h4 id="contact-title">Want to contact me?</h4>
     </div>
     <div class="contact contact-info">
        <p class="contact contact-info_text">I can endeavor to show maximum availability with Gmail and Telegram</p>
        <div class="fa-content">
          <a class="fa fa-send"  style="color:black">&nbsp&nbspTELEGRAM</a>
          <a class="fa fa-envelope" style="color:black">&nbsp&nbspGMAIL</a>
        </div>
     </div>
     <div class="contact contact-info">
        <p class="contact contact-info_text">You also can find me on social networks</p>
        <div class="fa-content">
          <a href="#" target="blank" class="fa fa-twitter" style="color:black">&nbsp&nbspTWITTER</a>
          <a href="#" target="blank" class="fa fa-facebook" style="color:black">&nbsp&nbspFACEBOOK</a>
        </div>
     </div>
     <div class="contact contact-info">
        <p class="contact contact-info_text">Or if it's something technical/professional</p>
        <div class="fa-content">
          <a href="#" target="blank" class="fa fa-github" style="color:black">&nbsp&nbspGITHUB</a>
          <a href="#" target="blank" class="fa fa-linkedin" style="color:black">&nbsp&nbspLINKEDIN</a>
        </div>
     </div>
    </div>
  `;

  getStyle('section--contact');
  return getContent(html);
}

//open the page selected by the user
function openPage(el){
  if(el.textContent.search('About') !== -1) {
    renderAboutContent();

    const btnSliderRight = document.querySelector('.slider-right');
    const btnSliderLeft = document.querySelector('.slider-left');
    const imgs = document.querySelectorAll('.img--profile')
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
    const img4 = document.querySelector(".img4");
    const img5 = document.querySelector(".img5");
    const curImg = document.querySelector(".img--active")

    // img2.style.opacity= 0;
    let x = 100;
    let y = 400;

    btnSliderLeft.addEventListener("click", function(e){
      e.preventDefault();

      let ind;
      imgs.forEach((img,i) => {
        img.style.transform = y !== 0 ? `translateX(-${y}%)` : `translateX(0%)`;
        if(img.classList.contains('img--active')) {
           ind = i === 0 ? 4 : i-1;
        };
        img.classList.remove('img--active');
        if(i === imgs.length -1){
          imgs[ind].classList.add('img--active');
        }
      });
      
      console.log(curImg)

      y = y - 100 === -100? 400 : y-100;
     
    });

    btnSliderRight.addEventListener('click', function(e){
      e.preventDefault();

      let ind;
      imgs.forEach((img,i) => {
        img.style.transform = x !== 500 ? `translateX(-${x}%)` : `translateX(0%)`;
        if(img.classList.contains('img--active')) {
           ind = i !==4 ? i+1 : 0;
        };
        img.classList.remove('img--active');
        if(i === imgs.length -1){
          imgs[ind].classList.add('img--active');
        }
      });

      x = x + 100 === 600? 100 : x+100;

    })
  }
  if(el.textContent.search('Welcome') !== -1) renderWelcomeContent();
  if(el.textContent.search('Blog') !== -1) renderBlogContent();
  if(el.textContent.search('Source')!== -1) renderSourceContent(); 
  if(el.textContent.search('Curriculum')!== -1) renderCv();
  if(el.textContent.search('Contact') !== -1) renderContact();  
}

// function openSourceLink(){

// }

//Event Handlers 
//1. for Social more links and Menu bar
window.addEventListener('click',function(e){
  //Open The rest Social links
  e.target === btnMore && modalIcons.classList.remove("hidden");
  if(!modalIcons.classList.contains('hidden') && e.target !== btnMore){
    e.target !== modalIcons && modalIcons.classList.add('hidden');
  }

  // Open and close Menu bar
  if(e.target === btnMenu){
    menu.style.transform = "translateX(0rem)";
    document.querySelector('body').classList.add('body--hidden');
    // document.querySelector('body').style.backgroundColor = 'lightgray';
  }
  if(menu.style.transform = "translateX(0rem)" && e.target !== menu && e.target!== btnMenu){
    menu.style.transform = "translateX(-18rem)";
    document.querySelector('body').classList.remove('body--hidden');
  }
})

//2. Open welcome page
btnWelcome.addEventListener('click', renderWelcomeContent)

//3. listen for open page from menu
btnMenuContent.forEach(btn => btn.addEventListener('click',function(e){
  e.preventDefault();
  openPage(btn);
}))

