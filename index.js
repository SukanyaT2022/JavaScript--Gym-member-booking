//step 1 fetch get the value

let memberName = " ";
let memberGender = " ";
let memberAge = " ";
let memberEmail = " ";
let memberPhone = " ";
let typeMembership = " ";
let gymClassName = " ";
let totalCost = 0;
let finalSubmit = true;

// submit button claculate entire calculation
function memberInfoFunc() {
  totalCost = 0;
  memberName = document.getElementById("memberNameID").value;
  memberGender = document.memberForm.gender.value;
  memberAge = document.getElementById("ageID").value;
  memberEmail = document.getElementById("emailID").value;
  memberPhone = document.getElementById("phoneID").value;
  monthlyYearly = document.memberForm.subcribeMY.value;

  //line 20 read the value = "" type of memeber ship type and price
  typeMembership = document.memberForm.memberType.value;
  var position = typeMembership.indexOf(":");
  var membershipName = typeMembership.substring(0, position);
  var membershipCost = typeMembership.substring(position + 1);
  gymClassName = document.memberForm.gymClassName;

  //personal trainer section - get value of selecte personal trainer option
  var personalTrainer = document.memberForm.personalSessionName.value;
  var personalTrainerCost = 0;
  // check the charter at o position is 4 on selected radio button value
  //checked  if select box is selected
  if (
    personalTrainer.charAt(0) == "4" &&
    document.getElementById("trainerOptionID").checked == true
  ) {
    personalTrainerCost = 200;
  } else if (
    personalTrainer.charAt(0) == "8" &&
    document.getElementById("trainerOptionID").checked == true
  ) {
    personalTrainerCost = 350;
  } else if (
    personalTrainer.charAt(0) == "12" &&
    document.getElementById("trainerOptionID").checked == true
  ) {
    personalTrainerCost = 650;
  }

  totalCost += personalTrainerCost ;


  // we continue to do make check box class read show on console
  //extract name and cost
  //captureclass is variable display the final cost at the bottom
  var captureClass = "<table width=40%>";
  for (i = 0; i < gymClassName.length; i++) {
    if (gymClassName[i].checked == true) {
      position = gymClassName[i].value.indexOf(":"); //use : to divide
      classNameType = gymClassName[i].value.substring(0, position); //read before :
      membershipCost = gymClassName[i].value.substring(position + 1); //read after:
      totalCost = totalCost + parseInt(membershipCost);
      captureClass =
        captureClass +
        "<tr><td>" +
        classNameType +
        " </td><td> $" +
        membershipCost +
        "</td></tr>";
    }
  }

  // captureClass = captureClass.substring(0,captureClass.length-2)
  if (monthlyYearly == "monthly") {
    totalCost += parseInt(membershipCost);
  }

  validateInputboxFill();
  console.log(totalCost);

  if (monthlyYearly == "yearly") {
    let cal20off = parseInt(membershipCost) * 12;
    totalCost += cal20off * 0.8;

    // totalCost = totalCost - totalCost * 0.2
  }
  
  if(monthlyYearly !== ""){
    document.getElementById('submitBtnID').style.visibility = "visible"
  var taxCost = totalCost + totalCost * 0.12;
  captureClass += "<tr><td>" + personalTrainer + "</td><td>" +"$" +personalTrainerCost+"</td></tr>"
  captureClass += "<tr><td> Final Cost</td><td> $" + totalCost + "</td></tr>";
  captureClass +=
    "<tr><td> Final Cost after 12% tax</td><td> $" + taxCost + "</td></tr>";
  captureClass += "</table>";
  // document.getElementById("finalCost").innerHTML = "Final Cost: $" + totalCost + "<br> Final cost after 12% tax: $" + taxCost;

  document.getElementById("memberTypeID").innerHTML =
    " Membership Type: " +
    membershipName +
    " $" +
    membershipCost +
    "  monthly | $" +
    parseInt(membershipCost) * 12 +
    " yearly <br>" +
    "<b>Class Type: </b><br>" +
    captureClass;
    document.getElementById('chooseMonthlyOrYearlyPtagID').innerHTML = ""
  
}
else{
  finalSubmit = false;
  document.getElementById('chooseMonthlyOrYearlyPtagID').innerHTML = "<font color = red> Please select monthly or yearly membership"
}
}
function memberTypeCost() {}

function validateInputboxFill() {
  memberName = document.getElementById("memberNameID").value;
  memberEmail = document.getElementById("emailID").value;
  memberPhone = document.getElementById("phoneID").value;
  typeMembership = document.memberForm.memberType.value;
  monthlyYearly = document.memberForm.subcribeMY.value;

  // create paragraph to show error--remove error red message warning * when user type on that box
  document.getElementById("memberNamePtagID").innerHTML = " ";
  document.getElementById("memberEmailPtagID").innerHTML = " ";
  document.getElementById("memberPhonePtagID").innerHTML = " ";

  if (memberName == "") {
    finalSubmit = false
    document.getElementById("memberNamePtagID").innerHTML =
      "Member Name" +
      "<font color = red> &nbsp * Member Name is missing.</font> ";
  }
  if (memberEmail == "") {
    finalSubmit = false
    document.getElementById("memberEmailPtagID").innerHTML =
      "Member Email" +
      "<font color = red> &nbsp * Member email is missing.</font> ";
  }

  if (memberPhone == "") {
    finalSubmit = false
    document.getElementById("memberPhonePtagID").innerHTML =
      "Member Phone No." +
      "<font color = red> &nbsp *  Member phone number is missing.</font> ";
  }
  if( typeMembership == ""){
    finalSubmit = false
    document.getElementById("chooseOneMembreshipTypeID").innerHTML =
    "<font color = red> &nbsp * Please choose one of the membership types</font> ";
}
if( typeMembership == ""){
  finalSubmit = false
  document.getElementById("validateYearlyMonthlyID").innerHTML =
  "<font color = red> &nbsp * Please choose yearly or monthly memebership</font> ";
}
  }


//func hide the option of personal trainer until click check box then it show 3 options of personal trainer
function showPersonalSessionFunc() {
  if (document.getElementById("trainerOptionID").checked == true) {
    document.getElementById("4SessionID").style.visibility = "visible";
    document.getElementById("hideTextPersonaltrainID4").style.visibility =
      "visible";
    document.getElementById("8SessionID").style.visibility = "visible";
    document.getElementById("hideTextPersonaltrainID8").style.visibility =
      "visible";
    document.getElementById("12SessionID").style.visibility = "visible";
    document.getElementById("hideTextPersonaltrainID12").style.visibility =
      "visible";
  } else {
    document.getElementById("4SessionID").style.visibility = "hidden";
    document.getElementById("hideTextPersonaltrainID4").style.visibility =
      "hidden";
    document.getElementById("8SessionID").style.visibility = "hidden";
    document.getElementById("hideTextPersonaltrainID8").style.visibility =
      "hidden";
    document.getElementById("12SessionID").style.visibility = "hidden";
    document.getElementById("hideTextPersonaltrainID12").style.visibility =
      "hidden";
  }
}

