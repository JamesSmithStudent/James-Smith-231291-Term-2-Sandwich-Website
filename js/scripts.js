let sandwichOrder = [];

orderSandwich = () => {

    let priceTotal = 0;
    let calorieTotal = 0;
    let sandwichName =  document.getElementById("Sandname").value;


    //Calorie Count

    let breadCalorie = document.getElementsByName("bread");
    for(let i = 0; i < breadCalorie.length; i++){
       if(breadCalorie[i].checked){
        calorieTotal = calorieTotal + +breadCalorie[i].dataset.cal
       }
    }

    let meatCalorie = document.getElementsByName("meat");
    for(let i = 0; i < meatCalorie.length; i++){
       if(meatCalorie[i].checked){
        calorieTotal = calorieTotal + +meatCalorie[i].dataset.cal
       }
    }


    let extraCalorie = document.getElementsByName("ekstra");
    for(let i = 0; i < extraCalorie.length; i++){
       if(extraCalorie[i].checked){
        calorieTotal = calorieTotal + +extraCalorie[i].dataset.cal
       }
    }

    let sauceCalorie = document.getElementsByName("sauce");
    for(let i = 0; i < sauceCalorie.length; i++){
       if(sauceCalorie[i].checked){
        calorieTotal = calorieTotal + +sauceCalorie[i].dataset.cal
       }
    }




   //Cost Count
    
    let breadOptions = document.getElementsByName("bread");
    for(let i = 0; i < breadOptions.length; i++){
       if(breadOptions[i].checked){
       priceTotal = priceTotal + +breadOptions[i].dataset.cost
       }
    }

    let meatOptions = document.getElementsByName("meat");
    for(let i = 0; i < meatOptions.length; i++){
       if(meatOptions[i].checked){
        priceTotal = priceTotal + +meatOptions[i].dataset.cost
       }
    }


    let extraOptions = document.getElementsByName("ekstra");
    for(let i = 0; i < ekstraOptions.length; i++){
       if(extraOptions[i].checked){
        priceTotal = priceTotal + +extraOptions[i].dataset.cost
       }
    }

    let sauceOptions = document.getElementsByName("sauce");
    for(let i = 0; i < sauceOptions.length; i++){
       if(sauceOptions[i].checked){
        priceTotal = priceTotal + +sauceOptions[i].dataset.cost
       }
    }





    sandwichOrder.push({
      sandwichName : sandwichName,
     sandwichorderTotal : priceTotal,
     calorieorderTotal : calorieTotal
  })
}

displaySandwichOrder = () =>{

      let orderArea = document.getElementById("orders");
      let orderTotal = document.getElementById("TotalCost");
      orderArea.innerHTML = " ";
      let totalCost = 0;

      for(let i = 0 ; i < sandwichOrder.length; i++){

          let Name = sandwichOrder[i].sandwichName;
          let Cost = sandwichOrder[i].sandwichorderTotal;
          let Calorie = sanwichorder[i].calorieTotal;

              totalCost += Cost;

              orderArea.innerHTML += `
              
              <div class="dom2">
                <h3 class="pp2">${Name} :</h3>
                <p class="pp1">R ${Cost} .00</p>
                <p class="pp4" id="TotalCost">Total: ${totalCost}</p>
                <p class="pp3">${Calorie}Calories</p>
              </div> 
              
              `
}     
}

