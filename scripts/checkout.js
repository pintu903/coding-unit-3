document.querySelector("#confirm").addEventListener("click", checkoutDetails);

function checkoutDetails(event) {
  event.preventDefault();
  let form = document.querySelector("form");

  if (form.name.value == "" || form.name.value == "" || form.name.value == "") {
    return false;
  } else {
    setTimeout(function () {
      alert("Your order is accepted ");
      setTimeout(function () {
        alert(" Your order is being Prepared ");
        setTimeout(function () {
          alert("Your order is being packed ");
          setTimeout(function () {
            alert("Your order is out for delivery ");
            setTimeout(function(){
                alert(" Order delivered")
            },12000)

          }, 9000);
        }, 6000);
      }, 3000);    
    }, 0);

   
  }
}
