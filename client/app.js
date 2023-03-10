
function onClickedEstimatePrice() {

    function getYardValue() {
      var yard = document.getElementsByName("yard");
      
      for(var i in yard) {
        if(yard[i].checked) {
            return parseInt(i);
        }
      }
      return 0; // Default
    }

    function getPoolValue() {
      var pool = document.getElementsByName("pool");
      
      for(var i in pool) {
        if(pool[i].checked) {
            return parseInt(i);
        }
      }
      return 0; // Default
    }

    function getNewValue() {
      var newOrNot = document.getElementsByName("newOrNot");
      
      for(var i in newOrNot) {
        if(newOrNot[i].checked) {
            return parseInt(i);
        }
      }
      return 0; // Default
    }

    function getStormValue() {
      var storm = document.getElementsByName("storm");
      
      for(var i in storm) {
        if(storm[i].checked) {
            return parseInt(i);
        }
      }
      return 0; // Default
    }

    function getStorageValue() {
      var storage = document.getElementsByName("storage");
      
      for(var i in storage) {
        if(storage[i].checked) {
            return parseInt(i);
        }
      }
      return 0; //Default
    }

    console.log("Estimate price button clicked");
    
    var area = document.getElementById('area');
    var rooms = document.getElementById("rooms");
    var yard = getYardValue();
    var pool = getPoolValue();
    var floors = document.getElementById("floors");
    var expensive = document.getElementById("expensive");
    var prev_owners = document.getElementById("prev_owners");
    var built = document.getElementById("built");
    var newOrNot = getNewValue();
    var storm = getStormValue();
    var basement = document.getElementById("basement");
    var garage = document.getElementById("garage");
    var storage = getStorageValue();
    var estPrice = document.getElementById("estPrice");
    var url = "http://127.0.0.1:5000/predict_home_price";
    
    // var url = "/api/predict_home_price";
    
    $.post(url, {
        area: parseFloat(area.value),
        rooms: parseInt(rooms.value),
        yard: yard,
        pool: pool,
        floors: parseInt(floors.value),
        expensive: parseInt(expensive.value),
        prev_owners: parseInt(prev_owners.value),
        built: parseInt(built.value),
        newOrNot: newOrNot,
        storm: storm,
        basement: parseInt(basement.value),
        garage: parseInt(garage.value),
        storage: storage
    },
    
    function(data, status) {
        console.log(data.estPrice);
        estPrice.innerHTML = "<h2>" + data.estPrice.toString() + " EUR</h2>";
        console.log(status);
    });
  }