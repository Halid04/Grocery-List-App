let today = document.getElementById("date");
let time = document.getElementById("time"); 
let listContainer = document.getElementById("listContainer");
let addButton = document.getElementById("addButton");
let input = document.getElementById("input");
    
function dateAndtime(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    if(day<10){
        day = "0"+day;
    }
    if(month<10){
        month = "0"+month;
    }
    if(hour<10){
        hour = "0"+hour;
    }
    if(minute<10){
        minute = "0"+minute;
    }
    if(sec<10){
        sec = "0"+sec;
    }

    today.innerHTML = day+"/"+month+"/"+year;
    time.innerHTML = hour+":"+minute+":"+sec;
    setTimeout(dateAndtime , 10)
}
dateAndtime();

let i=0;

const colors = ["#59C7A3",
                "#38ADA0",
                "#269397",
                "#00B7B1",
                "#11906F",
                "#619C87",
]

addButton.addEventListener("click",()=>{
    if(input.value == ""){
        alert("you have not entered anything")
    }
    else{
        i++
        let newList = document.createElement("div");
        newList.classList.add("table");
        listContainer.appendChild(newList);

        let listCounter = document.createElement("div");
        listCounter.classList.add("num");
        listCounter.style.backgroundColor = colors[Math.floor(Math.random()*5)]
        newList.append(listCounter);

        let list = document.createElement("input");
        list.value = input.value;
        list.classList.add("text");
        list.setAttribute("readonly", true);
        newList.append(list);
        
        let j=0;
        let modifyButton = document.createElement("div");
        modifyButton.classList.add("modify");
        newList.append(modifyButton);
        modifyButton.addEventListener("click", ()=>{
            j++;
            if(j%2==0){
                list.setAttribute("readonly", true)
            }
            else{
                list.removeAttribute("readonly");
            }
            modifyButton.classList.toggle("check");
            list.classList.toggle("modifyText")
        })

        let deleteButton = document.createElement("div");
        deleteButton.classList.add("delete");
        newList.append(deleteButton);
        deleteButton.addEventListener("click", ()=>{
            if(deleteButton.parentNode == newList){
                newList.parentNode.removeChild(newList)
            }
        })

        input.value = "";

    }
    
})