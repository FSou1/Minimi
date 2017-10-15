// author: FSou1 (my.fsou1@gmail.com)
window.addEventListener('DOMNodeInserted', function(event) {
    var element = document.body.querySelector("div[data-id]");
    if(element && element.parentElement) {           
        element.parentElement.removeChild(element);
    }
});