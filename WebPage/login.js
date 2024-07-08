function validate1() {
    var email = $("#UserName").val();
      var pass = $("#password").val();
      if(email=="" && pass==""){
        $("#message").html("Kindly fill details");
      }
      else if(pass == ""){
        $("#message").html("Enter your Password");
      }
      else if(email==""){
        $("#message").html("Enter your Email");
      }
      else{
        $.ajax({
        type:"GET", url:"http://localhost:53057/api/SignUp?email="+email+"&pass="+pass, success:(response)=>{
            if(response==null){
              $("#message").html("User Not Found Or Check The Details You Have entered");
            }
            else{
              if(response.UserType=="admin"){
                $("#message").css("display","none");
                window.location.href="AdminSignUp.html";
                
                localStorage.clear()
              }
              else {
                $("#message").css("display","none");
                
                localStorage.clear()
                localStorage.setItem("userIdFromStorage",response.UserID);
                localStorage.setItem("userNameFromStorage",response.Names);
                
                window.location.href="index.html"
              }
            }
              
        }, 
        error: (err)=>{
          alert(err)
        }
        });
      }
   
}

