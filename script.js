/*  Initializing variables for event listener   */
button = document.getElementById('entrybutton');
textbox = document.getElementById('entryinput');
results = document.getElementById('textoutput');

/*  Adding event listener, adding alert and results functionality   */
button.addEventListener("click", function(){
    alert("David Medina: " + textbox.value);
    results.textContent = textbox.value;
});
