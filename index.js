//step 1 fetch get the value

let memberName = " ";
let memberGender = " ";
let memberAge = " ";
let memberEmail = " ";
let memberPhone = " ";
let typeMembership = " ";
let gymClassName = " ";
let totalCost = 0;

function memberInfoFunc() {
  memberName = document.getElementById("memberNameID").value;
  memberGender = document.memberForm.gender.value;
  memberAge = document.getElementById("ageID").value;
  memberEmail = document.getElementById("emailID").value;
  memberPhone = document.getElementById("phoneID").value;

  //line 20 read the value = "" type of memeber ship type and price
  typeMembership = document.memberForm.memberType.value;
  var position = typeMembership.indexOf(":");
  var membershipName = typeMembership.substring(0, position);
  var membershipCost = typeMembership.substring(position + 1);
  gymClassName = document.memberForm.gymClassName;

  // we continue to do make check box class read show on console
  //extract name and cost
  var captureClass = "";
  for (i = 0; i < gymClassName.length; i++) {
    if (gymClassName[i].checked == true) {
      position = gymClassName[i].value.indexOf(":");//use : to divide
      classNameType = gymClassName[i].value.substring(0, position);//read before :
      membershipCost = gymClassName[i].value.substring(position + 1);//read after:
      totalCost = totalCost + parseInt(membershipCost);
      captureClass = captureClass + classNameType + ", ";

    }
  }
captureClass = captureClass.substring(0,captureClass.length-2)
  totalCost += parseInt(membershipCost);
  validateInputboxFill();
  console.log(totalCost);

  document.getElementById("finalCost").innerText = "Final Cost: " + totalCost;
  document.getElementById("memberTypeID").innerHTML =
    " Membership Type: " + membershipName + "<br>" + "Class Type: " + captureClass;


  // after click submit the input box blank
  document.getElementById("ageID").value = " ";
  document.getElementById("emailID").value = " ";
  document.getElementById("phoneID").value = " ";
  document.getElementById("memberNameID").value = " ";
  // after click submit radio button blank
  document.getElementById("maleID").checked = false;
  document.getElementById("femaleID").checked = false;

  document.getElementById("yogaClassID").checked = false;
  document.getElementById("boxingClassID").checked = false;
  document.getElementById("pilatesClassID").checked = false;
  document.getElementById("intenseClassID").checked = false;
  document.getElementById("cyclingClassID").checked = false;

  document.getElementById("goldMemberID").checked = false;
  document.getElementById("silverMemberID").checked = false;
  document.getElementById("greenMembeID").checked = false;
}

function memberTypeCost() {}

function validateInputboxFill() {
  memberName = document.getElementById("memberNameID").value;
  memberEmail = document.getElementById("emailID").value;
  memberPhone = document.getElementById("phoneID").value;

  // remove error red message warning * when user type on that box
  document.getElementById("memberNamePtagID").innerHTML = " ";
  document.getElementById("memberEmailPtagID").innerHTML = " ";
  document.getElementById("memberPhonePtagID").innerHTML = " ";

  if (memberName == "") {
    document.getElementById("memberNamePtagID").innerHTML =
      "Member Name" +
      "<font color = red> &nbsp * Member Name is missing.</font> ";
  }
  if (memberEmail == "") {
    document.getElementById("memberEmailPtagID").innerHTML =
      "Member Email" +
      "<font color = red> &nbsp * Member email is missing.</font> ";
  }

  if (memberPhone == "") {
    document.getElementById("memberPhonePtagID").innerHTML =
      "Member Phone No." +
      "<font color = red> &nbsp *  Member phone number is missing.</font> ";
  }
}
