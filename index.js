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
   console.log('hi')
   memberName = document.getElementById('memberNameID').value
   memberGender = document.memberForm.gender.value
   memberAge = document.getElementById('ageID').value
   memberEmail = document.getElementById('emailID').value
   memberPhone = document.getElementById('phoneID').value
   typeMembership = document.memberForm.memberType.value
   gymClassName = document.memberForm.gymClassName.values
console.log(gymClassName)
   totalCost = parseInt(typeMembership)

   for (i=0;i<gymClassName.length;i++){
totalCost += parseInt(gymClassName[i])
   }
   console.log(totalCost)
}

function memberTypeCost(){

}
