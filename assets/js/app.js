function Add() {
    var value = document.getElementById("inp1").value
    var div = document.createElement("div")
    div.setAttribute("class", "mt-2 box bg-success p-1 d-flex rounded-2 justify-content-between align-items-center ")
    var h2 = document.createElement("h2")
    var icon = document.createElement("i")
    icon.setAttribute("class","remove fa-solid fa-trash")
    h2.innerHTML=value
    div.append(h2,icon)
    document.querySelector(".added").appendChild(div)
    var remover = document.querySelectorAll(".remove")
  for (var i = 0; i <= remover.length; i++) {
    remover[i].onclick=function() {
        this.parentElement.remove()
    }
    
  }
}