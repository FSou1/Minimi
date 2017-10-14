window.addEventListener('DOMNodeInserted', function(event) {
    var element = document.body.querySelector("div[role='feed'] > *");
    if(element && element.parentElement) {        
        element.parentElement.removeChild(element);
    }
});