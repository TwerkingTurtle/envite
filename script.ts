function save() {
    
    localStorage.setItem(document.getElementById("guestid")!.innerText, document.getElementById("seat")!.innerText);

}

function find() {

    if ( localStorage.getItem(document.getElementById("enterfield")!.innerText) != null ) {

        document.getElementById("location")!.innerText = localStorage.getItem(document.getElementById("enterfield")!.innerText)!;

    } else { alert("No invited guest") }

}