var card = document.getElementsByClassName("card-Team");
var bounds;
function BubblyFunc(e, n) {
    bounds = card[n].getBoundingClientRect();
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var leftX = mouseX - bounds.left;
    var leftY = mouseY - bounds.top;
    var centerX = leftX - bounds.width/2;
    var centerY = leftY - bounds.height/2;
    var distance = Math.sqrt(centerX**2 + centerY**2);
    card[n].style.transform = "scale3d(1.0, 1.0, 1.0) rotate3d("+centerX/10+","+centerY/10+", 0, "+(Math.log(distance)*2)+"deg)";
}
function BubblyOut(n) {
    card[n].style.transform = "";
}
window.addEventListener("load", (event) => {
    // PAGE IS FULLY LOADED  
    // FADE OUT YOUR OVERLAYING DIV
    $('#overlay').fadeOut();
    document.getElementsByTagName("body")[0].style = "overflow-y: scroll;"
 });

 function Contact_Func(a, b) {
    var Name_Text = document.getElementById("Popup-Name");
    var Info_Text = document.getElementById("Popup-Info");
    switch(a) {
        case 0:
            Name_Text.innerHTML = "Prince Gupta";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 89585-34787"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: gs.academic@iitrpr.ac.in"
            }
            break;
        case 1:
            Name_Text.innerHTML = "Priyanshi Vachhani";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 99786-81440"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022ceb1023@iitrpr.ac.in"
            }
            break;
        case 2:
            Name_Text.innerHTML = "Dikshant Parashar";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 79885-77645"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022chb1047@iitrpr.ac.in"
            }
            break;
        case 3:
            Name_Text.innerHTML = "Ananya Sethi";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 85955-91130"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022csb1066@iitrpr.ac.in "
            }
            break;
        case 4:
            Name_Text.innerHTML = "Archit Goyal";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 89493-76451"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022eeb1158@iitrpr.ac.in"
            }
            break;
        case 5:
            Name_Text.innerHTML = "Priyanshi Shisodia";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 80778-81168"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022eeb1206@iitrpr.ac.in "
            }
            break;
        case 6:
            Name_Text.innerHTML = "Mayank Sharma";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 70149-78525"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022epb1238@iitrpr.ac.in"
            }
            break;
        case 7:
            Name_Text.innerHTML = "Nimish Sehgal";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 95017-07385"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022mcb1273@iitrpr.ac.in"
            }
            break;
        case 8:
            Name_Text.innerHTML = "Aditi Garg";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 93060-39034"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022meb1289@iitrpr.ac.in"
            }
            break;
        case 9:
            Name_Text.innerHTML = "Aditya Yadav";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 98701-24204"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022meb1291@iitrpr.ac.in"
            }
            break;
        case 10:
            Name_Text.innerHTML = "Kavyansh Dhakad";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 87704-18102"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2022mmb1382@iitrpr.ac.in"
            }
            break;
        case 11:
            Name_Text.innerHTML = "Aabhas Agarwal";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 93103-24115"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021ceb1001@iitrpr.ac.in"
            }
            break;
        case 12:
            Name_Text.innerHTML = "Tuhinanshu Modgil";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 73473-95907"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021chb1058@iitrpr.ac.in"
            }
            break;
        case 13:
            Name_Text.innerHTML = "Edgar Aditya Thorpe";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 81464-82991"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021csb1169@iitrpr.ac.in"
            }
            break;
        case 14:
            Name_Text.innerHTML = "Harshit";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 80537-79453"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021eeb1175@iitrpr.ac.in"
            }
            break;
        case 15:
            Name_Text.innerHTML = "Rudra Kumar Chourasia";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 83839-58730"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021eeb1208@iitrpr.ac.in"
            }
            break;
        case 16:
            Name_Text.innerHTML = "Akshit Singh";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 87006-25101"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021mcb1229@iitrpr.ac.in"
            }
            break;
        case 17:
            Name_Text.innerHTML = "Devanshi Sawhney";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 82870-99171"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021meb1281@iitrpr.ac.in"
            }
            break;
        case 18:
            Name_Text.innerHTML = "Gunjeet Narkhede";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 86240-15486"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2021mmb1349@iitrpr.ac.in"
            }
            break;
        case 19:
            Name_Text.innerHTML = "Priyanshu Thathera";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 72401-35780"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020ceb1024@iitrpr.ac.in"
            }
            break;
        case 20:
            Name_Text.innerHTML = "Vaidehi Patidar";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 93406-51979"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020chb1058@iitrpr.ac.inn"
            }
            break;
        case 21:
            Name_Text.innerHTML = "Akshat Toolaj Sinha";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 82798-33510"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020csb1068@iitrpr.ac.in"
            }
            break;
        case 22:
            Name_Text.innerHTML = "Ojassvi Kumar";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 92501-31555"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020csb1187@iitrpr.ac.in"
            }
            break;
        case 23:
            Name_Text.innerHTML = "Sri Amlan Anshu Mohanty";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 91823-40423"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020eeb1211@iitrpr.ac.in"
            }
            break;
        case 24:
            Name_Text.innerHTML = "Aditya Jain";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 95713-91537"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020mcb1226@iitrpr.ac.in"
            }
            break;
        case 25:
            Name_Text.innerHTML = "Akshit Kumar";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 78508-18858"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020meb1263@iitrpr.ac.in"
            }
            break;
        case 26:
            Name_Text.innerHTML = "Shraman Maiti";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 78937-77696"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020meb1354@iitrpr.ac.in"
            }
            break;
        case 27:
            Name_Text.innerHTML = "Himanshu Parganiha";
            if(b==1) {
                Info_Text.innerHTML = "Ph: +91 81096-69687"
            }
            else if(b==0) {
                Info_Text.innerHTML = "Mail: 2020mmb1346@iitrpr.ac.in"
            }
            break;
    }
    document.getElementsByClassName("modal")[0].style = "visibility: visible";
}

function Contact_Box_Close() {
    document.getElementsByClassName("modal")[0].style = "visibility: hidden";
}
