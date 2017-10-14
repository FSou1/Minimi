window.addEventListener('DOMNodeInserted', function(event) {
    var element = document.body.querySelector("div[data-id]");
    if(element && element.parentElement) {           
        element.parentElement.removeChild(element);
    }
});