
function onClickedEstimatePrice() {

    var url = "http://127.0.0.1:5000/predict_home_price";
    // $.get(url, function(data, status){
    //     alert("Welcome");
    //   });

    console.log("Estimate price button clicked");
    
    var area = document.getElementsByName("area");
    var rooms = document.getElementsByName("rooms");
    var yard = document.getElementsByName("yard");
    var pool = document.getElementsByName("pool");
    var floors = document.getElementsByName("floors");
    var expensive = document.getElementsByName("expensive");
    var prev_owners = document.getElementsByName("prev_owners");
    var built = document.getElementsByName("built");
    var newOrNot = document.getElementsByName("newOrNot");
    var storm = document.getElementsByName("storm");
    var basement = document.getElementsByName("basement");
    var garage = document.getElementsByName("garage");
    var storage = document.getElementsByName("storage");
    var estPrice = document.getElementById("uiEstimatedPrice");
    //var url = "http://127.0.0.1:5000/predict_home_price";
     //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    
    $.post(url, {
        area: area.value,
        rooms: rooms.value,
        yard: yard.value,
        pool: pool.value,
        floors: floors.value,
        expensive: expensive.value,
        prev_owners: prev_owners.value,
        built: built.value,
        newOrNot: newOrNot.value,
        storm: storm.value,
        basement: basement.value,
        garage: garage.value,
        storage: storage.value

    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });

    // $.get(url, function(data, status){
    //     alert("Estimated price is: " + data.estimated_price.toString() + "\nStatus: " + status);
    //   });
  }
  
    // $("body").on('click', 'button', function(){
    //   $.get(url, function(data, status){
    //     alert("Estimated price is: " + data.estimated_price.toString() + "\nStatus: " + status);
    //   });
    // });


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