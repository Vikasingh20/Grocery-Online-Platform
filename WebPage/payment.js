function validateCartId() {
    var cardNo = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    if (cardNo.length == 16 && expiryDate.length == 5 && cvv.length == 3) {

        // localStorage.removeItem("data");
        var prodId = localStorage.getItem("productID");
        var prodName = localStorage.getItem("productName");
        var prodPrice = localStorage.getItem("productPrice");
        var tag = localStorage.getItem("productTag");
        var total = localStorage.getItem("productTotal");
        var prodQty = localStorage.getItem("productQty");
        var userId = localStorage.getItem("userIdFromStorage");
        if(prodId > 0 && prodId != null){
            //---------- Inserting data to Order Table
            $.ajax({
               type:"POST", url:"http://localhost:53057/api/CartMaster", data:{"UserID":userId, "ProductID":prodId,"ProdName":prodName,"ProdPrice":prodPrice,"ProdQty":prodQty,"ProdTotal":total,"Tag":tag},
               success:()=>{
                //   alert("Data added to cart");
                window.location.href="success.html";
               }, error:(err)=>{
                  alert(err);
               }
            });
          }

        window.location.href="success.html";
        

    } else {
        alert("Invalid Card!!!!!!!!!!")
        window.location.href="cancel.html";

    }
    return false;
}