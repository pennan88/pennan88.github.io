const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})


const textList = ["[ C# ]", "[ SQL ]", "[ HTML ]", "[ CSS ]", "[ .NET ]", "[ JS ]"];
      const cycle = document.querySelector("#cycle");
      let i = 0;
      const cycleText = () => {
        cycle.innerHTML = textList[i];
        i = ++i % textList.length;
      };
      cycleText();
      setInterval(cycleText, 1500);