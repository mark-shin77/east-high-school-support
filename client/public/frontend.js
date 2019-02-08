var button = document.getElementsByClassName("active-signups");

for(var i = 0; button.length > i; i++){   
    button[i].addEventListener('click', function(){
        if (this.classList.contains('18845734')) {
            var hideHeaders = document.getElementsByClassName("selected-signup");
            for ( var x = 0; x < hideHeaders.length; x++ ){
                hideHeaders[x].setAttribute("style", "display: none")
            }
            document.getElementsByClassName("18845734")[1].setAttribute("style", "display: block")
        }
        }, false);
}