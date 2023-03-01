let showBtn = document.getElementById("show-btn");
showBtn.addEventListener('click', showTime); 

let maxRows = 4, currentRows = 0;

function showTime(){

  if(currentRows<maxRows){

  
  let getTime = document.getElementById("select-time").value+":00";
  console.log("Selected Time :"+getTime);
  

  let currentDate = new Date().toJSON().slice(0, 10);
  
  let dateTime = currentDate+" "+getTime;
  // console.log("Date and Time :"+dateTime);
  
  const dtStr = new Date(dateTime);

  let TimeZones = [
    "Asia/Dubai",
    "Australia/Sydney",
    "Europe/London",
    "America/Los_Angeles",
  ];


 
  let tableStr = '';
  
  TimeZones.forEach((timeZone) => {
    let strTime = dtStr.toLocaleString("en-US", { timeZone: `${timeZone}` });
    // console.log(timeZone, strTime);

    currentRows++;
    tableStr += `
        <tr>
            <td> ${timeZone} </td>
            <td> ${strTime} </td>
        </tr>            
        ` 
  });

  let tableBox = document.getElementById("time-table");
  let tabBody = document.createElement("tbody");
  tabBody.setAttribute("id","tbody-in");
  tabBody.innerHTML=tableStr;
  tableBox.append(tabBody);
}

}
