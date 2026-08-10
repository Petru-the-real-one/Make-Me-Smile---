var num = 0;

function counter() {
  num++;
  console.log(num);
  var span2 = document.getElementById("span2");
  span2.innerHTML = num;
}
function Make_The_Face_Smile() {
  var Mood_Change = document.getElementById("Mood_Change");
  Mood_Change.src = "happiness.png";
}
