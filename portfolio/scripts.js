var tabtiles = document.getElementsByClassName('tab-tiles')
var tabcontents = document.getElementsByClassName('tab-contents')

function opetab(tabname){
    for(tabtile of tabtiles){
        tabtile.classList.remove("active")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabname).classList.add("active-tab")
}


