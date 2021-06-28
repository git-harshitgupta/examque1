$(document).ready(function(){
    $("#calculateBtn").click(function(){
        var seminars=$("#seminars").find(":selected").text();
            var level = $("input[type='radio']:checked").val();
            if(seminars=="SOA"&&level=="Indroductory")
            {
                var price=2500;
            }
            else if(seminars=="SOA"&&level=="Intermediate")
            {
                var price=3500;
            }
            else if(seminars=="SOA"&&level=="Advanced")
            {
                var price=6000;
            }else if(seminars=="Design Patterns"&&level=="Indroductory")
            {
                var price=4000;
            }else if(seminars=="Design Patterns"&&level=="Intermediate")
            {
                var price=5500;
            }else if(seminars=="Design Patterns"&&level=="Advanced")
            {
                var price=8000;
            }else if(seminars=="Business Intelligence"&&level=="Indroductory")
            {
                var price=5000;
            }else if(seminars=="Business Intelligence"&&level=="Intermediate")
            {
                var price=7000;
            }else if(seminars=="Business Intelligence"&&level=="Advanced")
            {
                var price=10000;
            }
            console.log(price);
            $("#costText").val(price);
        
    })
    
    $("form").submit(function(e){
        e.preventDefault();
        var email=$("#email").val();
        var confirmEmail=$("#confirmEmail").val();
        console.log(email, confirmEmail);
        if(email!=confirmEmail){
            alert("Email is not same!");
        }
        else{
            var price=$("#costText").val();
            console.log(price);
            if(price==""){
                alert("Please select a seminar");
            }
        }
            
    })

    $("#displayDetailsBtn").click(function(){
        var firstName = $("#firstName").val();
        if(firstName==""){
            alert("Please submit form first");
        }
        else{
        var win = window.open("Question1a.html");

        var firstNamePass =  document.getElementById("firstName").value;
        var intialNamePass =  document.getElementById("inital").value;
        var lastNamePass =  document.getElementById("lastName").value;
        var emailPass =  document.getElementById("email").value;
        var seminarsPass =  document.getElementById("seminars").value;
        var seminarsPass =  document.getElementById("seminars").value;
        var levelPass =  document.getElementById("level").value;
        var pricePass =  document.getElementById("costText").value;
        
        console.log(levelPass);
        win.addEventListener("DOMContentLoaded", function (e) {
            win.document.getElementById("name").innerHTML ="Name: " +intialNamePass+" "+firstNamePass+" "+lastNamePass;
            win.document.getElementById("email").innerHTML ="Email: " +emailPass;
            win.document.getElementById("semainar").innerHTML ="Semainar " +seminarsPass;
            win.document.getElementById("level").innerHTML ="Level " +levelPass;
            win.document.getElementById("cost").innerHTML ="Cost " +pricePass;
		});
    }});

    
});
