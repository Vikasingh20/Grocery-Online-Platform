function registerUser() {

  var userName = $("#username").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var cnfPwd=$("#confirm_password").val();
  var flag = 0;
  
  if(password == "" || cnfPwd =="" || userName =="" || email ==""){
    alert("Kindly Fill Details");
  }
  else{
    if(password==cnfPwd)    
      {
    // $("#btnSignUp").attr("type",'submit');
      $.ajax({
      type:"POST",url:"http://localhost:53057/api/SignUp",data:{"Names":userName,"Passwords":password,"Email":email, "UserType":"user"},success:(response)=>{
        // alert("hello"); 
        location.replace("login.html");
      
      }, error: (err)=>{
          alert("Error inside ajax"+err);
      }
      });
    }
    else
    {
      alert("Please check your Password and Confirm Password");
    }
  
  }
  
}
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var Demo;
// (function (Demo) {
//     var Typescript;
//     (function (Typescript) {
//         var SignUp;
//         (function (SignUp) {
//             function validate1() {
//                 var email = $("#UserName").val();
//                 var pass = $("#password").val();
//                 if (email === "" && pass === "") {
//                     $("#message").html("Kindly fill details");
//                 }
//                 else if (pass === "") {
//                     $("#message").html("Enter your Password");
//                 }
//                 else if (email === "") {
//                     $("#message").html("Enter your Email");
//                 }
//                 else {
//                     $.ajax({
//                         type: "GET",
//                         url: "http://localhost:53057/api/SignUp?email=".concat(email, "&pass=").concat(pass),
//                         success: function (response) {
//                             if (response === null) {
//                                 $("#message").html("User Not Found Or Check The Details You Have entered");
//                             }
//                             else {
//                                 if (response.UserType === "admin") {
//                                     $("#message").css("display", "none");
//                                     window.location.href = "AdminSignUp.html";
//                                     localStorage.clear();
//                                 }
//                                 else {
//                                     $("#message").css("display", "none");
//                                     localStorage.clear();
//                                     localStorage.setItem("userIdFromStorage", response.UserID);
//                                     localStorage.setItem("userNameFromStorage", response.Names);
//                                     window.location.href = "index.html";
//                                 }
//                             }
//                         },
//                         error: function (err) {
//                             alert(err);
//                         }
//                     });
//                 }
//             }
//         })(SignUp = Typescript.SignUp || (Typescript.SignUp = {}));
//     })(Typescript = Demo.Typescript || (Demo.Typescript = {}));
// })(Demo || (Demo = {}));
