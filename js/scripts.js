addSandwich = () => {

    let priceTotal = 0;


    let breadOptions = document.getElementsByName("bread");
    let breadValue;
    for(let i = 0; i < breadOptions.length; i++){
       if(breadOptions[i].checked){
        breadValue = breadOptions[i].value
        priceTotal = priceTotal + +breadOptions[i].dataset.cost
       }
    }



    let meatOptions = document.getElementsByName("meat");
    let meatChoice = [];
    for(let i = 0; i < meatOptions.length; i++){
       if(meatOptions[i].checked){
        meatChoice.push(meatOptions[i].value)
        priceTotal = priceTotal + +meatOptions[i].dataset.cost
       }
    }


    let ekstraOptions = document.getElementsByName("ekstra");
    let ekstraChoice = [];
    for(let i = 0; i < ekstraOptions.length; i++){
       if(ekstraOptions[i].checked){
        ekstraChoice.push(ekstraOptions[i].value)
        priceTotal = priceTotal + +ekstraOptions[i].dataset.cost
       }
    }

    let sauceOptions = document.getElementsByName("sauce");
    let sauceChoice = [];
    for(let i = 0; i < sauceOptions.length; i++){
       if(sauceOptions[i].checked){
         sauceChoice.push(sauceOptions[i].value)
        priceTotal = priceTotal + +sauceOptions[i].dataset.cost
       }
    }
  
console.log(priceTotal);
}

