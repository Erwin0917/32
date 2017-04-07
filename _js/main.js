(function(){
    

    
    function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

    var btnMobile = document.querySelector(".menuBtn"),
        menuMobile = document.querySelector(".mainNav");
    
    
    
    function openMobileMenu(){
        
        if(menuMobile){
            if(hasClass(menuMobile, "closeMenuMobile")){
                menuMobile.classList.remove("closeMenuMobile");
            }else{
                menuMobile.classList.add("closeMenuMobile");
            }
        }
    }
    
    
   
                                         
    btnMobile.onclick = openMobileMenu;
    
    
}) ();