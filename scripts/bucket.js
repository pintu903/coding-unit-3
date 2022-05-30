// On clicking remove button the item should be removed from DOM as well as localstorage.


var data= JSON.parse(localStorage.getItem("coffee"))

// console.log(data)
let sum_show = document.getElementById('total_amount')
let sum=0
for(let i=0; i<data.length; i++){
    sum=sum+data[i].price
}

sum_show.append(sum)


data.map(function(elem,index){

    let show_data= document.getElementById('bucket')

    let div= document.createElement('div')

    let img= document.createElement('img')
    img.src=elem.image

    let title=document.createElement('p')
    title.innerText=elem.title

    let price= document.createElement('p')
    price.innerText="Price " + elem.price

    let button= document.createElement("button")
    button.innerText="Remove"
    button.setAttribute("id","remove_coffee")
    button.addEventListener("click",function(){
        removetoCart(elem,index)
    })

    div.append(img,title,price,button)

    show_data.append(div)
})

function removetoCart(elem,index){

    
    data.splice(index,1)

    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload()
}






