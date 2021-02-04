const checkbox = document.getElementById('checkbox'); 
// var price2 = document.getElementById('price-2');
// var price3 = document.getElementById('price-3');
var clicked = false;
checkbox.addEventListener('click', () => {

    if(!clicked) {
        clicked = true;
        document.getElementById('price-1').innerHTML = '&dollar;19.99';
        document.getElementById('price-2').innerHTML = '&dollar;24.99';
        document.getElementById('price-3').innerHTML = '&dollar;39.99';
        
    }else {
        clicked = false;
        document.getElementById('price-1').innerHTML = '&dollar;199.99';
        document.getElementById('price-2').innerHTML = '&dollar;249.99';
        document.getElementById('price-3').innerHTML = '&dollar;399.99';
    }
    // price1.innerHTML = '&dollar;19.99';
    // price2.innerHTML = '&dollar;24.99';
    // price3.innerHTML = '&dollar;39.99';
    
});


