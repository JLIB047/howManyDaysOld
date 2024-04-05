function printResults(){
        var name = document.getElementById('firstName').value;
        let data = document.getElementById('birthday').value;
        
        let DOB = new Date(data); 
        let millisecDob = Date.parse(DOB); 
        let millisecBetweenDobAndNow = Date.now()
        let ageInMilliseconds = millisecBetweenDobAndNow - millisecDob; 

        //.parse() and .now() to calculate age in milliseconds. 
        let milliseconds = ageInMilliseconds; 
        let second = 1000; 
        let minute = second*60; 
        let hour = minute*60; 
        let day = hour*24; 
        let month = day*30; 
        //30 being the average amount of days in a month. 
        let year = day*365; 

        //convert above variables to represent the age given 
        let years = Math.floor(milliseconds/year); 
        let months = years*12; 
        let days = years*365; 
        let hours = Math.round(milliseconds/hour); 
        let minutes = Math.round(milliseconds/minute); 
        let seconds = Math.round(milliseconds/second); 

        const daysOldMessage = name+" is "+days+" days old!"; 

        document.getElementById('message').innerHTML = daysOldMessage; 

        const message = "Age in Years : " +years+
            "</br>Age in Months: " +months+
            "</br>Age in Hours: " +hours+
            "</br>Age in Minutes: " +minutes+
            "</br>Age in Seconds: " +seconds+
            "</br>Age in Milliseconds: " +milliseconds; 
        document.getElementById('stat-message').innerHTML = message; 
}

window.onclick(printResults);
