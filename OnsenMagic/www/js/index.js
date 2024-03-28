document.addEventListener("show", function (event) {
  ons.ready(function () {
    if (event.target.matches("#battery")) {
      window.addEventListener("batterystatus", example, false);
      function example(status) {
        document.getElementById("batteryrange").value = status.level;
      }
      //променете стойността на range да стане 35
    }
  });
});

function changeMe(e) {
  document.getElementById("firstBtn").setAttribute("modifier", "large");
}
