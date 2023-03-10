const elMain = document.querySelector(".main-text"),
        elAside = document.querySelector("aside"),
        elSec = document.querySelectorAll("section");

      let pos = { y: 0, y2: 0, state: true };
      let offset = [];
      let y = 0;

      elSec.forEach(function (section) {
        offset.push(section.offsetTop);
      });

      let move = 0;
      elSec.forEach(function (elSection, key) {
        elAside.innerHTML += "<button></button>";
        elSection.addEventListener("wheel", function () {
          animation(key);
        });
      });

      let b = 0;
      
      const elBtns = document.querySelectorAll("aside button");
      elBtns.forEach(function (btn, key) {
        btn.addEventListener("click", function () {
          update(key);
          animation(key);
        });
      });
      

      function update(key) {
        elBtns[b].classList.remove("active");
        elBtns[key].classList.add("active");
        b = key;
      }
      

      function animation(key,inter=false) {    
        console.log(key);
        
        try {
          if (inter || event.wheelDelta < 0 ) {
            move = elSec[key].nextElementSibling.offsetTop;
            update(key+1);
            // key++;
          } else if (event.wheelDelta > 0) {
            move = elSec[key].previousElementSibling.offsetTop;
            update(key-1);
            // key--;
          } else {
            move = elSec[key].offsetTop;
          }
          
        } catch {}
        elMain.style = `transform:translateY(-${move}px)`;
      }
      
      let i=-1; 
      let timer = setInterval(()=>{
                  if(i<2){
                    animation(i,true);
                    i++;
                  }
                },2000);



      

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


