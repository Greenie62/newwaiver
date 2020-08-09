var clientDOM=document.querySelector("#clientDOM");




//allow a reclick edit

clientDOM.onclick=()=>{
    toggleAlert()
    // var client=prompt("Client name?")
    // var bday=prompt("Client birthday?")

    // clientDOM.innerHTML=`Insurance plan for:${client}, Birthday:${bday}`
}






//input field that influences the others outputs
var overnightinput=document.querySelector(".overnight")


//other  (non-writing) fields
var erField=document.querySelector(".ervisit")
var annualField=document.querySelector(".annual")
var intensiveField=document.querySelector(".intensive")
var disabilityField=document.querySelector(".disability")
var anyaccidentField=document.querySelector(".anyaccident")
var autoaccidentField=document.querySelector(".autoaccident")
var commoncarrierField=document.querySelector(".commoncarrier")


overnightinput.onmouseenter=(e)=>{
    e.target.style.backgroundColor="white"
}

overnightinput.onmouseleave=(e)=>{
    e.target.style.backgroundColor="lightgray"
}


overnightinput.onclick=askAmount;
// overnightinput.onkeydown=(e)=>{
//     console.log('getting the amount!')
// }


function askAmount(){
    var amount=prompt("Amount?")
    
    console.log("calcInfo:",calcInfo )


    calcAmtMonthly(amount,calcInfo)
 
    var half=(amount/2)
    var double=(amount*2)
    var annual=(amount*365)
    var anyAccident=(amount*100)
    var autoAccident=(amount*200)
    var commonCarrier=(amount*300)

    


    
    
    overnightinput.innerHTML=`$${amount}`;
    erField.innerHTML=`$${half}`
    intensiveField.innerHTML=`$${double}`
    annualField.innerHTML=`$${annual}`
    anyaccidentField.innerHTML=`$${anyAccident}`
    autoaccidentField.innerHTML=`$${autoAccident}`
    commoncarrierField.innerHTML=`$${commonCarrier}`
}





//third row logic

var additionalCoverageField=document.querySelector(".additionalcoverage")
var spouseDOM=document.querySelector(".spouseDOM")
var childDOM=document.querySelector(".childDOM")
var spousecoverageField=document.querySelector(".spousecoverage")
var childcoverageField=document.querySelector(".childcoverage")
var childcoveragetwoField=document.querySelector(".childcoveragetwo")
var childcoveragetwoField=document.querySelector(".childcoveragetwo")
var planoneField=document.querySelector(".planone")
var plantwoField=document.querySelector(".plantwo")


additionalCoverageField.innerHTML=`$100,000`
spousecoverageField.innerHTML=`$10,000`
childcoverageField.innerHTML=`$10,000`
childcoveragetwoField.innerHTML=`$12,000`
planoneField.innerHTML="$10,000"
plantwoField.innerHTML="$12,000"



//greenbox logic


var optiononemonth=document.querySelector("#optiononemonth")
var optiononedayField=document.querySelector("#optiononeday")
var optiontwomonth=document.querySelector("#optiontwomonth")
var optiontwodayField=document.querySelector("#optiontwoday")



optiononedayField.oninput=(e)=>{
    e.target.innerHTML=`$${e.target.value}`;
    var monthOneCalc=Math.floor(+e.target.value * 30);
    console.log(monthOneCalc)

    optiononemonth.value=`$${monthOneCalc}`
}


optiontwodayField.oninput=(e)=>{
    e.target.innerHTML=`$${e.target.value}`;
    var monthTwoCalc=Math.floor(+e.target.value * 30);

    optiontwomonth.value=`$${monthTwoCalc}`
}



//addmember modal (spouse/child Btns)
var addMemberModal=document.querySelector(".addmembermodal")
var memberHeader=document.querySelector("#memberheader");
var monthSelect=document.querySelector("#month")
var daySelect=document.querySelector("#day")
var yearSelect=document.querySelector("#year")
var addSpouseBtn=document.querySelector(".addSpouseBtn")
var addChildBtn=document.querySelector(".addChildBtn")
var addMemberBtn=document.querySelector(".addMemberBtn")


//(Family)members area ontop of(html) page
var membersDOM=document.querySelector("#membersDOM")


var months=['January','February','March','April','May','June',"July",'August','September','October','November',"December"]

var monthHTML=""
months.forEach(m=>{
        monthHTML += `<option value=${m}>${m}</option>`
})

var dayHTML=""
for(let i=1;i<32;i++){
    dayHTML += `<option value=${i}>${i}</option>`
}

var yearHTML=""
for(let i=1925;i<2021;i++){
    yearHTML += `<option value=${i}>${i}</option>`
}

monthSelect.innerHTML=monthHTML
daySelect.innerHTML=dayHTML
yearSelect.innerHTML=yearHTML


addSpouseBtn.onclick=()=>{
    memberHeader.innerHTML= "Add Spouse"
        addMemberModal.classList.toggle("showmembermodal")
}


addChildBtn.onclick=()=>{
    memberHeader.innerHTML= "Add Child"
    addMemberModal.classList.toggle("showmembermodal")
}


addMemberBtn.onclick=(e)=>{
//determine if spouse or child via h2 header text
console.log(e.target.parentElement.previousElementSibling.textContent)
var text=e.target.parentElement.previousElementSibling.textContent
text=text.split(" ")
text=text[1]
console.log(text)

    var day=document.querySelector("#day").value;
    var month=document.querySelector("#month").value;
    var year=document.querySelector("#year").value;

    var member={
        name:document.querySelector("#name").value,
        bday:month + " " + day + " " + year
     }

     //uptop added name
     var h4=document.createElement("h4");
     var h5=document.createElement("h5");
     h4.className='h3Member'
     h4.appendChild(document.createTextNode(`Name:${member.name}, Born:${member.bday}`))
     h5.appendChild(document.createTextNode(`Coverage for ${member.name}`))
     h4.onclick=changeData;
     h5.onclick=changeNameData;
     h5.style.color='green'
     membersDOM.appendChild(h4)
     

    



     switch(text){

        case "Child":
        childDOM.appendChild(h5)
        h4.style.color='blue'
        membersDOM.appendChild(h4)
        break;



        case "Spouse":
        spouseDOM.appendChild(h5)
        membersDOM.appendChild(h4)
        break;
        


        default:
        console.log("Error")
        break;
     }





//cleanup (modal remove)
     addMemberModal.classList.toggle("showmembermodal")

}



function changeData(e){
    var name=prompt("Name?")
    var bday=prompt("Bday?")

    e.target.innerHTML=`Name:${name}, Born:${bday}`


}


function changeNameData(e){
    var name=prompt("Name?")
    e.target.innerHTML=`Coverage for ${name}`
    e.target.style.color='green'
}





function calcAmtMonthly(amount,info){
    console.log(amount)
    amount=parseInt(amount)/1000;
    console.log('calcAmtMonthly fired!');

    console.log("Amount: " + amount)
    console.log(info)
    let monthly=0;

    if(amount < 30 && info.smoker === "true" && info.gender === "male"){
        console.log("Male less then 30KTU: " + upTo30maleAgeTU[info.age]);
         monthly = upTo30maleAgeTU[info.age] * amount/12
        console.log("Monthly: " + monthly)
    }
    else if(amount > 30 && info.smoker === "true" && info.gender === "male"){
        console.log("Male more then 30KTU: " + thirtyPlusMaleTU[info.age]);
         monthly = thirtyPlusMaleTU[info.age] * amount/12
        console.log("Monthly: " + monthly)
    }


    if(amount < 30 && info.smoker === "false" && info.gender === "male"){
        console.log("Male less then 30K NTU: " + upTo30maleAgeNTU[info.age]);
         monthly = upTo30maleAgeNTU[info.age] * amount/12
     
        console.log("Monthly: " + monthly)
    }
    else if(amount > 30 && info.smoker === "false" && info.gender === "male"){
        console.log("Male, more then 30K NTU: " + thirtyPlusMaleNTU[info.age]);
         monthly = (thirtyPlusMaleNTU[info.age] * amount)/12
     
        console.log("Monthly: " + monthly)
    }



    if(amount < 30 && info.smoker === "true" && info.gender === "female"){
        console.log("Female less then 30KTU: " + upTo30maleAgeNTU[info.age]);
         monthly = upTo30femaleAgeTU[info.age] * amount/12
        console.log("Monthly: " + monthly)
    }
    else if(amount > 30 && info.smoker === "true" && info.gender === "female"){
        console.log("Female more then 30KTU: " + upTo30maleAgeNTU[info.age]);
         monthly = thirtyPlusMaleTU[info.age] * amount/12
        console.log("Monthly: " + monthly)
    }


    if(amount < 30 && info.smoker === "false" && info.gender === "female"){
        console.log("Female less then 30KNTU: " + upTo30femaleAgeNTU[info.age]);
         monthly = upTo30femaleAgeNTU[info.age] * amount/12
        console.log("Monthly: " + monthly)
    }
    else if(amount > 30 && info.smoker === "false" && info.gender === "female"){
        console.log("Female more then 30KNTU: " + upTo30femaleAgeNTU[info.age]);
         monthly = thirtyPlusMaleNTU[info.age] * amount/12
        console.log("Monthly: " + monthly)
    }

    monthlyCalcBoxDOM.innerHTML=`$${parseFloat(monthly).toFixed(2)} / Month`
}





