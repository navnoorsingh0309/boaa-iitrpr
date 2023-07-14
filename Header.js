var menu = 0;

function menuClick() {    
    var bar_one = document.getElementById("menu_1");
    bar_one.style.transition = "transform 0.1s";    
    var bar_two = document.getElementById("menu_2");
    bar_two.style.transition = "transform 0.1s";    
    var bar_three = document.getElementById("menu_3");
    bar_three.style.transition = "transform 0.1s";
    var menuBlock = document.getElementById("Menu_block");
    if(menu==0)
    {
        bar_one.style.transform = "rotateZ(45deg) translate(8px, 0px)";
        bar_two.style.transform = "rotateZ(-45deg)";
        bar_three.style.transform = "rotateZ(45deg) translate(0px, -15.5px)";
        menuBlock.style.animation = "drop_down_animation 1s ease-in-out";
        menuBlock.style.animationFillMode = "forwards";
        menu = 1;
    }
    else
    {
        bar_one.style.transform = "rotateZ(0deg) translate(0px, 0px)";
        bar_two.style.transform = "rotateZ(0deg)";
        bar_three.style.transform = "rotateZ(0deg) translate(0px, 0px)";
        menuBlock.style.animation = "drop_down_animation_out 1s ease-in-out";
        menu = 0;
    }
}
