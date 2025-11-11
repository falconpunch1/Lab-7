function init(){
    /*  Initializing variables for event listener   */
    var button = document.getElementById('entrybutton');
    var textbox = document.getElementById('entryinput');
    var results = document.getElementById('textoutput');

    /*  Adding event listener, adding alert and results functionality   */
    button.addEventListener("click", function(){
        alert("David Medina: " + textbox.value);
        results.textContent = textbox.value;
    });

}

window.addEventListener('load', init)
