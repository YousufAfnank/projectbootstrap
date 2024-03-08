function toggleFilter() {
  var filter = document.getElementById("filter");
  if (filter.style.width === "20%") {
      filter.style.width = "0";
  } else {
      filter.style.width = "20%";
  }
}
var monkey = document.getElementById("#btnm");
var head = document.querySelector("h3");
var recording = document.getElementById("#btnr");

// let videos = {
//   data :[
//     {
//       name:"monkeyeating",
//       cateory:"monkey",
//       video :"animal.1.mp4",
//     },
//     {
//       name:"monkeydancing",
//       cateory:"monkey",
//       video :"animal.2.mp4",
//     },
//     {
//       name:"bee1",
//       cateory:"recording",
//       video :"animal.3.mp4",
//     },
//     {
//       name:"bee2",
//       cateory:"recording",
//       video :"animal.4.mp4",
//     }
//   ]
// }


monkey.addEventListener("click", function(){
  head.innerHTML = "MONKEY";


})

recording.addEventListener("click", function(){
  head.innerHTML = "recording";

})  