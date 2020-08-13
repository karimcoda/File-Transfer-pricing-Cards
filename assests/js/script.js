var btnCircel = document.querySelector('.btn-circel'),
    btnSpnCircel = document.querySelector('.spanCircel'),
    prices = document.querySelectorAll('.price'),
    tfcon = true;

btnCircel.addEventListener('click', function(){
        btnSpnCircel.classList.toggle('ch-btn-right');
        
            if(tfcon){
                allPrices = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];
                tfcon = false
            }else{
                allPrices = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];
                tfcon = true
            }
            
            for(i = 0; i < prices.length; i++ ){
                prices[i].innerHTML = allPrices[i]
            }
            
})

