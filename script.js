window.addEventListener('input', function (e) {
 console.log("keyup event detected! coming from this element:", e.target);
 var cardIDField = document.getElementById("cardid");
 var buttonTitleField = document.getElementById("buttontitle");

 var cardLink = document.getElementById("cardlink");
 cardlink.value = "%["+buttonTitleField.value+"](pairade://card?id="+cardIDField.value+")"

}, false);