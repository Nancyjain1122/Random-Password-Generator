const passwordbox = document.getElementById("Password");
const lengthInput = document.getElementById("length");
        // const length=12;
        const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase= "abcdefghijklmnopqrstuvwxyz";
        const number= "0123456789";
        const symbol= "@#$%^*&!";

        const allCHars= uppercase + lowercase +number +symbol;

        function createpassword(){
            const length = parseInt(lengthInput.value); 
            let password ="";
            password +=uppercase[Math.floor(Math.random() * uppercase.length)];
            password +=lowercase[Math.floor(Math.random() * lowercase.length)];
            password +=number[Math.floor(Math.random() * number.length)];
            password +=symbol[Math.floor(Math.random() * symbol.length)];

            while(length>password.length){
            password +=allCHars[Math.floor(Math.random() * allCHars.length)];
        }
            passwordbox.value=password;
        }
        function copypassword(){
            passwordbox.select();
            document.execCommand("copy");
        }

// for dark mode

var icon=document.getElementById("boxicons");
document.addEventListener("DOMContentLoaded",function(){
    boxicons.onclick = function(){
    document.body.classList.toggle("dark-theme");
    var moonIcon = '<i class="bx bxs-moon"></i>';
    var sunIcon = '<i class="bx bxs-sun"></i>';
    //var iconContainer = document.getElementById("icon-container");
    if(document.body.classList.contains("dark-theme")){
        document.body.style.backgroundColor = "#002330";
        boxicons.style.color="yellow";
        boxicons.innerHTML = sunIcon;
        
    }
    else{
        document.body.style.backgroundColor = "#18d2f2";
        boxicons.style.color="#7e8a7b";
        boxicons.innerHTML = moonIcon;
      
    }
};
});

