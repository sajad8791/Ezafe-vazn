var weight = document.getElementById("user-weight");
var height = document.getElementById("user-height");

const bmi_list = [
    [0, 18.5, "کمبود وزن"], [18.5, 24.9, "نرمال"] , [25, 29.9, "کمی اضافه وزن"], [30, 34, "اضافه وزن"],
    [35, 999, "اضافه وزن بالا"]
]

var button = document.querySelector("#input-area button");
button.addEventListener("click", function (){
    bmi = weight.value/Math.pow(height.value, 2)
    bmi = Math.floor(bmi)
    for(i= 0; i<= bmi_list.length; i++){
        if (bmi >= bmi_list[i][0] && bmi <= bmi_list[i][1]){
            alert(bmi_list[i][2] + "                               بی ام آی  : " +bmi)
        }
    }
});