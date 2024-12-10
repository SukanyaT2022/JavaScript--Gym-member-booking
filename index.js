//step 1 fetch get the value 

let memberName = " "
let memberGender = " "
let memberAge = " "
let memberEmail = " "
let memberPhone = " "
let typeMembership = " "
let gymClassName = " "
let totalCost = 0





function memberInfoFunc(){
memberName = document.getElementById('memberNameID').value
memberGender = document.memberForm.gender.value
memberAge = document.getElementById('ageID').value
memberEmail = document.getElementById('emailID').value
memberPhone = document.getElementById('phoneID').value
typeMembership = document.memberForm.memberType.value
gymClassName = document.memberForm.gymClassName.values
totalCost = parseInt(typeMembership)
   validateInputboxFill()
   for (i=0;i<gymClassName.length;i++){
totalCost += parseInt(gymClassName[i])
   }
   console.log(totalCost)
   
}

function memberTypeCost(){

}
function validateInputboxFill(){
memberName = document.getElementById('memberNameID').value
memberEmail = document.getElementById('emailID').value
memberPhone = document.getElementById('phoneID').value

   if(memberName == ""){
document.getElementById('memberNamePtagID').innerHTML = "Member Name" + "<font color = red> &nbsp * Member Name is missing.</font> "
   }
   if(memberEmail == ""){
      document.getElementById('memberEmailPtagID').innerHTML = "Member Email" + "<font color = red> &nbsp * Member email is missing.</font> "
   }
   
         if(memberPhone == ""){
           document.getElementById('memberPhonePtagID').innerHTML = "Member Phone No." + "<font color = red> &nbsp *  Member phone number is missing.</font> "
               }
            }      

