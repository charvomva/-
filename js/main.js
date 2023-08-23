
  const navabr_lang = document.querySelector(".navabr_lang");
  const langList = document.querySelector(".langList")

  function showLangMenu (){
    console.log("check");
    langList.classList.toggle("move");
  }

  navabr_lang.addEventListener("click",showLangMenu)



  /***************메뉴***************/

 const seoulNow = document.querySelector("#seoulNow")
  const subMenu = document.querySelector(".subMenu")

  function menuDown(){
    subMenu.classList.add("on")

    subMenuRecommd.classList.remove("on")
    subMenutriptheme.classList.remove("on")
    subMenulocation.classList.remove("on")
    subMenuinfo.classList.remove("on")
  }

  function menuUp(){
    subMenu.classList.remove("on")
  }

  seoulNow.addEventListener("mouseover",menuDown)
  subMenu.addEventListener("mouseleave",menuUp)


const recommend = document.querySelector("#recommend");
const subMenuRecommd = document.querySelector("#subMenuRecommd")

function recommendDown (){
    
    subMenuRecommd.classList.add("on")
    subMenu.classList.remove("on")
    subMenutriptheme.classList.remove("on")
    subMenulocation.classList.remove("on")
    subMenuinfo.classList.remove("on")
  }

  function menu02Up(){
    subMenuRecommd.classList.remove("on")
  }

recommend.addEventListener("mouseover",recommendDown)
subMenuRecommd.addEventListener("mouseleave",menu02Up)

const triptheme = document.querySelector("#triptheme")
const subMenutriptheme = document.querySelector('#subMenutriptheme')

function tripThemeDown (){
  
  subMenutriptheme.classList.add("on")
  subMenuRecommd.classList.remove("on")
  subMenu.classList.remove("on")
  subMenulocation.classList.remove("on")
  subMenuinfo.classList.remove("on")
}

function menu03Up(){
  subMenutriptheme.classList.remove("on")
}

triptheme.addEventListener("mouseover",tripThemeDown)
subMenutriptheme.addEventListener("mouseleave",menu03Up) 


const locations = document.querySelector("#locations")
const subMenulocation = document.querySelector('#subMenulocation')

function locationDown (){
  console.log("hi")
  subMenulocation.classList.add("on")
  subMenutriptheme.classList.remove("on")
  subMenuRecommd.classList.remove("on")
  subMenu.classList.remove("on")
  subMenuinfo.classList.remove("on")
}

function menu04Up(){
  subMenulocation.classList.remove("on")
}

locations.addEventListener("mouseover",locationDown)
subMenutriptheme.addEventListener("mouseleave", menu04Up) 

const info = document.querySelector("#info")
const subMenuinfo = document.querySelector('#subMenuinfo')

function infoDown (){
  console.log("hiii")
  subMenuinfo.classList.add("on")
  subMenulocation.classList.remove("on")
  subMenutriptheme.classList.remove("on")
  subMenuRecommd.classList.remove("on")
  subMenu.classList.remove("on")
}

function menu05Up(){
  subMenuinfo.classList.remove("on")
}

info.addEventListener("mouseover",infoDown)
subMenuinfo.addEventListener("mouseleave", menu05Up)

  /********************************/



  /****/
  const menuicon = document.querySelector(".menuicon")
  const sideMenu = document.querySelector(".sideMenu")
  const sideOff = document.querySelector("#sideOff")
  const sideMenuBack = document.querySelector(".sideMenuBack ")

  function sideMenuOn(){
    sideMenu.style.display = "flex"
    sideMenuBack.style.display ="block"
  }
  menuicon.addEventListener("click",sideMenuOn)

  function sideMenuOff(){
    sideMenu.style.display = "none"
    sideMenuBack.style.display ="none"
  }
  sideOff.addEventListener("click",sideMenuOff)

  const ssubmenu01 = document.querySelector("#ssubmenu01")
  const ssubmenu02 = document.querySelector("#ssubmenu02")
  const ssubmenu03 = document.querySelector("#ssubmenu03")
  const ssubmenu04 = document.querySelector("#ssubmenu04")
  const ssubmenu05 = document.querySelector("#ssubmenu05")


  const sideMenu01 = document.querySelector("#sideMenu01")
  const sideMenu02 = document.querySelector("#sideMenu02")
  const sideMenu03 = document.querySelector("#sideMenu03")
  const sideMenu04 = document.querySelector("#sideMenu04")
  const sideMenu05 = document.querySelector("#sideMenu05")

function showMenu(){
  ssubmenu01.classList.toggle("on")
}
sideMenu01.addEventListener("click",showMenu)


function showMenu02(){
  ssubmenu02.classList.toggle("on")
}
sideMenu02.addEventListener("click",showMenu02)


function showMenu03(){
  ssubmenu03.classList.toggle("on")
}
sideMenu03.addEventListener("click",showMenu03)

function showMenu04(){
  ssubmenu04.classList.toggle("on")
}
sideMenu04.addEventListener("click",showMenu04)

function showMenu05(){
  ssubmenu05.classList.toggle("on")
}
sideMenu05.addEventListener("click",showMenu05)






function offSideMenu(){

  const windowWidth = window.innerWidth
  if(windowWidth > 960) {
    sideMenu.style.display = "none"
    sideMenuBack.style.display ="none"
  }
 

} 

window.addEventListener("resize", offSideMenu)
  /****/

const sns01 = document.querySelector("#sns01")
const sns02 = document.querySelector("#sns02")
const sns03 = document.querySelector("#sns03")
const sns04 = document.querySelector("#sns04")
const sns05 = document.querySelector("#sns05")
const sns06 = document.querySelector("#sns06")

const snsMask = document.querySelector(".snsMask")
const snsMask02 = document.querySelector("#sns02 .snsMask")
const snsMask03 = document.querySelector("#sns03 .snsMask")
const snsMask04 = document.querySelector("#sns04 .snsMask")
const snsMask05 = document.querySelector("#sns05 .snsMask")
const snsMask06 = document.querySelector("#sns06 .snsMask")

function maskOn(){
  snsMask.style.display ="flex"
}
function maskOff(){
  snsMask.style.display ="none"
}

function maskOn02(){
  snsMask02.style.display ="flex"
}
function maskOff02(){
  snsMask02.style.display ="none"
}

function maskOn03(){
  snsMask03.style.display ="flex"
}
function maskOff03(){
  snsMask03.style.display ="none"
}

function maskOn04(){
  snsMask04.style.display ="flex"
}
function maskOff04(){
  snsMask04.style.display ="none"
}

function maskOn05(){
  snsMask05.style.display ="flex"
}
function maskOff05(){
  snsMask05.style.display ="none"
}


function maskOn06(){
  snsMask06.style.display ="flex"
}
function maskOff06(){
  snsMask06.style.display ="none"
}


sns01.addEventListener("mouseenter",maskOn)
sns01.addEventListener("mouseleave",maskOff)

sns02.addEventListener("mouseenter",maskOn02)
sns02.addEventListener("mouseleave",maskOff02)

sns03.addEventListener("mouseenter",maskOn03)
sns03.addEventListener("mouseleave",maskOff03)

sns04.addEventListener("mouseenter",maskOn04)
sns04.addEventListener("mouseleave",maskOff04)

sns05.addEventListener("mouseenter",maskOn05)
sns05.addEventListener("mouseleave",maskOff05)

sns06.addEventListener("mouseenter",maskOn06)
sns06.addEventListener("mouseleave",maskOff06)
  