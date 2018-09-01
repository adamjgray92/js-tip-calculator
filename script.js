/* Javascript */

// calculate function
function calculateTip(){
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var numOfPeople = document.getElementById('totalPeople').value;

  if(billAmount === "" || serviceQuality == 0){
    window.alert('Please enter some values');
    return; // stops function from continuing
  }

  if(numOfPeople === "" || numOfPeople <= 1){
    numOfPeople = 1;
    document.getElementById('each').style.display = "none";
  }else{
    document.getElementById('each').style.display = "block";
  }

  var total = (billAmount * serviceQuality) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementsByClassName('totalTip')[0].style.display = "block";
  document.getElementById('tip').innerHTML = total;
}

// Hide tip on load
document.getElementsByClassName('totalTip')[0].style.display = "none";
document.getElementById('each').style.display = "none";

// clicking button calls function
document.getElementById('calculate').onclick = function(){ calculateTip(); };
