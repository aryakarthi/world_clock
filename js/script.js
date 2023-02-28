let showBtn = document.getElementById("show-btn");
showBtn.addEventListener('click', showTime); 


function showTime(){
  let getTime = document.getElementById("select-time").value+":00";
  console.log("Selected Time :"+getTime);
  

  let currentDate = new Date().toJSON().slice(0, 10);
  
  let dateTime = currentDate+" "+getTime;
  console.log("Date and Time :"+dateTime);
  
  const dtStr = new Date(dateTime);

  let TimeZones = [
    "Asia/Dubai",
    "Australia/Sydney",
    "Europe/London",
    "America/Los_Angeles",
  ];

  TimeZones.forEach((timeZone) => {
    let strTime = dtStr.toLocaleString("en-US", { timeZone: `${timeZone}` });
    console.log(timeZone, strTime);
    
  
  });

}