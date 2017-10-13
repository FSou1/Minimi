document.onreadystatechange = function () {
    if(document.readyState === "complete") {
        window.addEventListener('DOMNodeInserted', function(event) {
            var elements = document.body.querySelectorAll("div[data-id]");
            if(elements && elements.length) {
                for(var i = 0, j = elements.length; i < j; i++) {                
                    elements[i].parentElement.removeChild(elements[i]);
                }
            }
        });
    }
}