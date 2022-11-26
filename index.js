const boxes = document.querySelector('.bestEngineers__boxes')


function users(url){
fetch(url)
.then((res) => res.json())
.then((res) => res.map((item) => {
    boxes.innerHTML += `
    <div class="bestEngineers__box">
                <div>
                  <div class="bestEngineers__box__tools">
                    <img src="./assets/star.svg" alt="star" />
                    <img src="./assets/Groupdotes.svg" alt="dotes" />
                  </div>
                  <div class="bestEngineers__box__engineer">
                    <img src="./assets/photo1.svg" alt="engineer 1" />
                    <h2>${item.name}</h2>
                    <p>Michigan, TX</p>
                  </div>
                  <div class="bestEngineers__box__information">
                    <p>989-653-2986</p>
                    <p>${item.email}</p>
                  </div>
                </div>
              </div>
    `
}))
}
users('https://jsonplaceholder.typicode.com/users')

const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')
let scroll = 0;

btnNext.addEventListener('click', () => {
    scroll = scroll - 380
    boxes.style.left = scroll + 'px'
    if (scroll < -2300){
        scroll = -2300
    }else{
        boxes.style.left = scroll + 'px'
    }
})

btnPrev.addEventListener('click', () => {
    scroll = scroll + 380
    if(scroll >0) {
        scroll = 0
    }else{
        boxes.style.left = scroll + 'px'
    }
    boxes.style.left = scroll + 'px';
})