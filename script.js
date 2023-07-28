let date=new Date(); // creates a new date object with the current date and time
let year=date.getFullYear(); // gets the current year
let month=date.getMonth(); // gets the current month (index based, 0-11)

const days=document.querySelector(".calDates"); // selects the element with class "calendar-dates"
const currdate=document.querySelector(".currMonth"); // selects the element with class "calendar-current-date"
const preIcon=document.getElementById("left")
const nexIcon=document.getElementById("right")


//highlight today
//console.log(date.getDate())
//console.log(date.getDay()) //gives day 0-6


const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function deletekids(){
    var child = days.lastElementChild; 
        while (child) {
            days.removeChild(child);
            child = days.lastElementChild;
        }
}
function refresh(){
    deletekids()
currdate.innerText=`${months[month]} ${year}`
let dates = []

//calculate the day1 and daylast (of the week) of the month
let firstDay = new Date(year, month, 1).getDay()

//console.log(month)
let lastDay = new Date(year-1, month+1, 0)
if(month<12){
    lastDay = new Date(year, month+1, 0)
} 
else{
    lastDay = new Date(year+1, 1, 0)
}
let lastFirst = new Date(year, month, 0)
//console.log(`last Day: ${lastFirst}`)

//list of days: the last few
//if>0, get final date of last month and fill in...
if(firstDay>0){
    for(i=lastFirst.getDate()-lastFirst.getDay(); i<=lastFirst.getDate(); i++){
        //console.log(i)
        let child = document.createElement("li")
        child.innerHTML=`<li class="date eob">${i}</li>`
        days.appendChild(child)
        dates.push(i)
    }
}
for(i=1; i<=lastDay.getDate(); i++){
    let child = document.createElement("li")
    child.innerHTML=`<li class="date">${i}</li>`
    if(i==date.getDate() && month==date.getMonth() && year==date.getFullYear()){
        child.classList.add("today")
        console.log(i)
    }
    days.appendChild(child)

    dates.push(i)
}
j=1
for(i=lastDay.getDay()+1;i<7;i++){
    let child = document.createElement("li")
    child.innerHTML=`<li class="date eob">${j}</li>`
    days.appendChild(child)
    dates.push(j)
    j+=1
}
}


refresh()

preIcon.addEventListener("click", ()=>{
    if(month>0){month--}
    else{year--;month=12}
    refresh()
})
nexIcon.addEventListener("click", ()=>{
    if(month<11){month++}
    else{year++;month=0}
    refresh()
})


//create method, refresh, remake


    