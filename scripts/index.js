const darkButton = document.querySelector("#flexSwitchCheckDefault")
const htmlelement= document.querySelector("html")
const bodyelement= document.querySelector("body")
console.log(bodyelement)
console.log(htmlelement)

darkButton.addEventListener("click", (e)=>{

    if(bodyelement.getAttribute("data-theme")=="dark"){
        localStorage.setItem("theme", "light" )
        bodyelement.setAttribute("data-theme","light" )

    }else{
        localStorage.setItem("theme", "dark" )
        bodyelement.setAttribute("data-theme","dark" )


    }

   
}
)


console.log(darkButton)