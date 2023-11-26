
// die Funktion changeAllColors wird nur aktiviert, wenn checkboxIs.checked ist ansonsten passiert beim bodyElement.onclick Event null
document.getElementById("checkboxId").onclick =
    function offOnn() {

        if (checkboxId.checked) {
            bodyElement.onclick = changeAllColors;

            // setzt den Style auf den neuen css/weirdStyle.css 
            document.getElementById("styleSheetId").href = "css/weirdStyle.css";

            // wieder der Code von GPT, weil es sonst auf aliceblue bleibt
            const allElements2 = document.querySelectorAll('*');
            allElements2.forEach(function (element) {
                element.style.backgroundColor = "rgb(108, 172, 227)";
            });
        }

        else {

            bodyElement.onclick = null;

            // Der Code setzt den gesamten Hintergrund wieder auf aliceblue
            // Ich check ihn selber nicht ist von GPT, habe viel rumprobiert und das ist das einziege was funktioniert hat
            const allElements = document.querySelectorAll('*');
            allElements.forEach(function (element) {
                element.style.backgroundColor = "aliceblue";
            });

            // setzt den Style auf den ursprünglichen css/style.css
            document.getElementById("styleSheetId").href = "css/style.css";

            // setzt den tooltiptext wieder auf grün
            document.getElementById("tooltiptext").style.backgroundColor = "#07942f";
        }
    };




// ändert die Farbe von allen Elemente beim Klicken auf alle Elemente
let j = 0;
function changeAllColors() {
    if (j === 0) {
        event.target.style.backgroundColor = "blue";
        j = 1;
    } else {
        event.target.style.backgroundColor = "aliceblue";
        j = 0;
    };
}



// klick auf PING, PONG erscheint, klick auf PONG, PING erscheint
function pingPong() {
    if (document.getElementById("pong").style.visibility == "hidden") {
        document.getElementById("ping").style.visibility = "hidden";
        document.getElementById("pong").style.visibility = "visible";
    } else {
        document.getElementById("ping").style.visibility = "visible";
        document.getElementById("pong").style.visibility = "hidden";
    }
}