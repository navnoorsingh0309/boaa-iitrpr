var year_Checks = document.getElementsByClassName("Batch_Check");
function Batch_Checkbox(n)
{
    switch(n)
    {
        case 0:
            localStorage["batch_year"] = 2020;
            year_Checks[1].checked = false;
            year_Checks[2].checked = false;
            year_Checks[3].checked = false;
            break;
        case 1:
            localStorage["batch_year"] = 2021;
            year_Checks[0].checked = false;
            year_Checks[2].checked = false;
            year_Checks[3].checked = false;
            break;
        case 2:
            localStorage["batch_year"] = 2022;
            year_Checks[0].checked = false;
            year_Checks[1].checked = false;
            year_Checks[3].checked = false;
            break;
        case 3:
            localStorage["batch_year"] = 2023;
            year_Checks[0].checked = false;
            year_Checks[1].checked = false;
            year_Checks[2].checked = false;
            break;
    }
}
function Branch_Dropdown_Menu(n)
{
    var selected_Branch = document.getElementById("selected_branch");
    switch(n)
    {
        case 0:
            localStorage["branch"] = "CS";
            selected_Branch.innerHTML = "Selected: Computer Science and Engineering";
            break;
        case 1:
            localStorage["branch"] = "AI";
            selected_Branch.innerHTML = "Selected: Artificial Intelligence";
            break;
        case 2:
            localStorage["branch"] = "MnC";
            selected_Branch.innerHTML = "Selected: Mathematics and Computing";
            break;
        case 3:
            localStorage["branch"] = "EE";
            selected_Branch.innerHTML = "Selected: Electrical Enginerring";
            break;
        case 4:
            localStorage["branch"] = "ME";
            selected_Branch.innerHTML = "Selected: Mechanical Engineering";
            break;
        case 5:
            localStorage["branch"] = "EP";
            selected_Branch.innerHTML = "Selected: Engineering Physics";
            break;
        case 6:
            localStorage["branch"] = "CE";
            selected_Branch.innerHTML = "Selected: Chemical Engineering";
            break;
        case 7:
            localStorage["branch"] = "MME";
            selected_Branch.innerHTML = "Selected: Metallurgy and Material Science Engineering";
            break;
        case 8:
            localStorage["branch"] = "CI";
            selected_Branch.innerHTML = "Selected: Civil Engineering";
            break;
    }
}
window.addEventListener("load", (event) => {
    $('#overlay').fadeOut();
    document.getElementsByTagName("body")[0].style = "overflow-y: scroll;"
 });
