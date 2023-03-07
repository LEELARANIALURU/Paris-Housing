// function getBathValue() {
//     var uiBathrooms = document.getElementsByName("uiBathrooms");
//     for(var i in uiBathrooms) {
//       if(uiBathrooms[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
  
//   function getBHKValue() {
//     var uiBHK = document.getElementsByName("uiBHK");
//     for(var i in uiBHK) {
//       if(uiBHK[i].checked) {
//           return parseInt(i)+1;
//       }
//     }
//     return -1; // Invalid Value
//   }
  
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementByName("area");
    var rooms = document.getElementByName("rooms");
    var yard = document.getElementByName("yard");
    var pool = document.getElementByName("pool");
    var floors = document.getElementByName("floors");
    var expensive = document.getElementByName("expensive");
    var prev_owners = document.getElementByName("prev_owners");
    var built = document.getElementByName("built");
    var newOrNot = document.getElementByName("new");
    var storm = document.getElementByName("storm");
    var basement = document.getElementByName("basement");
    var basement = document.getElementByName("garage");
    var storage = document.getElementByName("storage");
  
    var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {
        sqft: sqft,
        rooms: rooms,
        yard: yard.value,
        pool: pool,
        floors: floors,
        expensive: expensive,
        prev_owners: prev_owners,
        built: built,
        newOrNot: newOrNot,
        storm: storm,
        basement: basement,
        garage: garage,
        storage: storage


    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });
  }