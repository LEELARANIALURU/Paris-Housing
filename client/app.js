function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var area = document.getElementByName("area");
    var rooms = document.getElementByName("rooms");
    var yard = document.getElementByName("yard");
    var pool = document.getElementByName("pool");
    var floors = document.getElementByName("floors");
    var expensive = document.getElementByName("expensive");
    var prev_owners = document.getElementByName("prev_owners");
    var built = document.getElementByName("built");
    var newOrNot = document.getElementByName("newOrNot");
    var storm = document.getElementByName("storm");
    var basement = document.getElementByName("basement");
    var garage = document.getElementByName("garage");
    var storage = document.getElementByName("storage");
    var estPrice = document.getElementsById("uiEstimatedPrice")
  
    var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {
        area: area,
        rooms: rooms,
        yard: yard,
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

  // function onPageLoad() {
  //   console.log( "document loaded" );
  //   var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
  //   // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  //   $.get(url,function(data, status) {
  //       console.log("got response for get_location_names request");
  //       // if(data) {
  //       //     var locations = data.locations;
  //       //     var uiLocations = document.getElementById("uiLocations");
  //       //     $('#uiLocations').empty();
  //       //     for(var i in locations) {
  //       //         var opt = new Option(locations[i]);
  //       //         $('#uiLocations').append(opt);
  //       //     }
  //       // }
  //   });
  // }
  
  // window.onload = onPageLoad;