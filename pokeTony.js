// Poke Tony
// v0.0.1

(function poker() {
  var whoAmIPoking = "Bob"
  var minHowOften = 20000 // 20 seconds
  var maxHowOften = 40000 // 40 seconds
  var howOften = Math.round(Math.random() * (maxHowOften - minHowOften)) + minHowOften;

  setTimeout(function() {
    var poke = document.getElementById("poke_live_new").querySelectorAll("[rel=async-post]");
    if(poke.length > 0) {
      if(poke[0].getAttribute("title") != "Remove") {
        poke[0].click();
        console.log(whoAmIPoking + " poked!");
      } else {
        console.log("No pokes to poke back.");
      }
    } else {
      console.log("No pokes to poke back.");
    }
    poker();
  }, howOften);

}());
