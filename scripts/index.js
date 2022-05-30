// Add the coffee to local storage with key "coffee"


const url=`https://masai-mock-api.herokuapp.com/coffee/menu`


fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    // console.log(res.menu.data)
    showData(res.menu.data)
})
.catch(function(err){
    console.log(err)
})


function showData(data){
    

    let container=document.getElementById('menu')

    data.map(function(elem){

        let div = document.createElement('div')

        let img= document.createElement('img')
        img.src=elem.image

        let title=document.createElement('p')
        title.innerText=elem.title

        let price = document.createElement('p')
        price.innerText="Price " +elem.price

        let button= document.createElement('button')
        button.innerText="add to bucket"
        button.setAttribute("id","add_to_bucket")
        button.addEventListener("click",function(){
            addtoCart(elem)
        })

        div.append(img,title,price,button)
        container.append(div)
    })
}
let arr = JSON.parse(localStorage.getItem("coffee")) || []
let show_count= document.getElementById("coffee_count")
show_count.innerText=arr.length

console.log(arr.length)

function addtoCart(elem){

    arr.push(elem)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload()
    
}




