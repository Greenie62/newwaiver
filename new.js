//POPULATE MODAL

let monthsArray=['January','February','March','April','May','June','July','August','September','October','November','December']
let days=[];

// iterator
let count=1

let daysHTML=""
let monthsHTML=""
while(count<=31){
    if(count < 12){
        monthsHTML += `<option value=${monthsArray[count]}>${monthsArray[count]}</option>`
    }
    daysHTML += `<option value=${count}>${count}</option>`

    count++
}

let monthsSelect=document.querySelector("select[name='alert_month']");
let yearsSelect=document.querySelector("select[name='alert_year']");
let daysAlertSelect=document.querySelector("select[name='alert_day']");
let smokerSelect=document.querySelector("select[name='alert_smoker']");
let genderSelect=document.querySelector("select[name='alert_gender']");
let daysSelect=document.querySelector("select[name='alert_day']");
let alertModalBtn=document.querySelector(".alert_modal_btn")

//the new calculations will populate this element!
let monthlyCalcBoxDOM=document.querySelector("#monthlycalc")

monthsSelect.innerHTML=monthsHTML
daysAlertSelect.innerHTML=daysHTML


var yearsHTML="";


let yearscount=1975;

console.log(yearsSelect)

while(yearscount < 2005){
    yearsHTML += `<option value=${yearscount}>${yearscount}</option>`
    yearscount++
    console.log(yearscount)
}

yearsSelect.innerHTML=yearsHTML;


let alertModal=document.querySelector(".initialAlertModal");


//clientage to calculate with.
let calcInfo={
    age:"",
    smoker:"",
    gender:"",
}


alertModalBtn.onclick=()=>{

    let values={
        firstname:document.querySelector(".alertfirstnameinput").value,
        lastname:document.querySelector(".alertlastnameinput").value,
        gender:genderSelect.value,
        smoker:smokerSelect.value,
        month:monthsSelect.value,
        day:daysAlertSelect.value,
        year:yearsSelect.value
    }

    console.log(values);
    clientDOM.innerHTML=`Insurance plan for:${values.firstname} ${values.lastname}, Birthday:${values.month}-${values.day}-${values.year}`
    alertModal.style.display='none'

    calcInfo.age=2020-parseInt(values.year)
    calcInfo.gender=values.gender;
    calcInfo.smoker=values.smoker;
}


function toggleAlert(){
    console.log("toggle alert fired!!")
    if(alertModal.style.display === "none"){
        console.log("show up!")
        alertModal.style.display="block"
        return;
    }
    else if(alertModal.style.display === "block"){
        console.log('go away!!')
        alertModal.style.display="none"
        return;
    }
}


let upTo30maleAgeNTU={
    18:10.01,
    19:10.36,
    20:10.74,
    21:11.12,
    22:11.56,
    23:12.01,
    24:12.48,
    25:13.04,
    26:13.68,
    27:14.36,
    28:15.08,
    29:15.84,
    30:16.68,
    31:17.59,
    32:18.54,
    33:19.56,
    34:20.64,
    35:21.75,
    36:22.83,
    37:23.99,
    38:25.23,
    39:26.51,
    40:27.87,
    41:29.30,
    42:30.82,
    43:32.39,
    44:34.06,
    45:35.89,
}


let upTo30maleAgeTU={
    18:12.56,
    19:13.01,
    20:13.48,
    21:14.01,
    22:14.53,
    23:15.13,
    24:15.75,
    25:16.44,
    26:17.22,
    27:18.07,
    28:18.95,
    29:19.90,
    30:20.94,
    31:22.04,
    32:23.21,
    33:24.47,
    34:25.78,
    35:27.21,
    36:28.77,
    37:30.42,
    38:32.18,
    39:34.02,
    40:35.97,
    41:38.06,
    42:40.28,
    43:42.62,
    44:45.11,
    45:47.65,
}






let upTo30femaleAgeNTU={
    18:9.02,
    19:9.39,
    20:9.72,
    21:10.09,
    22:10.46,
    23:10.88,
    24:11.34,
    25:11.84,
    26:12.40,
    27:13.02,
    28:13.68,
    29:14.37,
    30:15.09,
    31:15.82,
    32:16.58,
    33:17.36,
    34:18.17,
    35:18.95,
    36:19.75,
    37:20.58,
    38:21.43,
    39:22.29,
    40:23.14,
    41:23.99,
    42:24.85,
    43:25.77,
    44:26.85,
    45:28.15,
}



let upTo30femaleAgeTU={
    18:11.31,
    19:11.73,
    20:12.17,
    21:12.61,
    22:13.09,
    23:13.61,
    24:14.19,
    25:14.81,
    26:15.52,
    27:16.26,
    28:17.08,
    29:17.93,
    30:18.85,
    31:19.86,
    32:20.92,
    33:22.02,
    34:23.22,
    35:24.43,
    36:25.66,
    37:26.96,
    38:28.31,
    39:29.75,
    40:31.26,
    41:32.83,
    42:34.50,
    43:36.28,
    44:38.14,
    45:40.02,
}



let thirtyPlusMaleNTU={
    18:8.48,
    19:8.77,
    20:9.08,
    21:9.43,
    22:9.78,
    23:10.17,
    24:10.58,
    25:11.06,
    26:11.58,
    27:12.15,
    28:12.76,
    29:13.41,
    30:14.13,
    31:14.90,
    32:15.68,
    33:16.55,
    34:17.48,
    35:18.40,
    36:19.31,
    37:20.31,
    38:21.37,
    39:22.44,
    40:23.58,
    41:24.81,
    42:26.07,
    43:27.43,
    44:28.84,
    45:30.17,
}



let thirtyPlusMaleTU={
    18:10.63,
    19:11.01,
    20:11.39,
    21:11.84,
    22:12.31,
    23:12.81,
    24:13.32,
    25:13.92,
    26:14.56,
    27:15.29,
    28:16.04,
    29:16.84,
    30:17.71,
    31:18.66,
    32:19.65,
    33:20.71,
    34:21.83,
    35:23.02,
    36:24.36,
    37:25.74,
    38:27.22,
    39:28.78,
    40:30.45,
    41:32.22,
    42:34.08,
    43:36.07,
    44:38.18,
    45:40.32,
}



let thirtyPlusFemaleNTU={
    18:8.48,
    19:8.77,
    20:9.08,
    21:9.43,
    22:9.78,
    23:10.17,
    24:10.58,
    25:11.06,
    26:11.58,
    27:12.15,
    28:12.76,
    29:13.41,
    30:14.13,
    31:14.90,
    32:15.68,
    33:16.55,
    34:17.48,
    35:18.40,
    36:19.31,
    37:20.31,
    38:21.37,
    39:22.44,
    40:23.58,
    41:24.81,
    42:26.07,
    43:27.43,
    44:28.84,
    45:30.17,
}


