

function validate() {
    var firstName = document.getElementById("firstN").value;
    var lastName = document.getElementById("lastN").value;
    var badgeNumber = document.getElementById("badgeNum").value;
    var fullName = firstName + " " + lastName;
    if (fullName.length >20 || fullName.length <2) {
          document.getElementById("loginStatus").innerHTML = "That name is invalid.  Please re-enter";
    } 
    else if (badgeNumber > 999 || badgeNumber < 0) {
        document.getElementById("loginStatus").innerHTML = "That Badge ID is invalid.  Please re-enter";
    }
    else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("UAT Space Countdown Week 3 - Alt.html");
    }
}