        let hrs = document.getElementById("hour");
        let min = document.getElementById("minute");
        let sec = document.getElementById("second");
        setInterval(()=>{
            let currentTime = new Date();
        
            let hh =currentTime.getHours();
            let mm=currentTime.getMinutes();
            let ss=currentTime.getSeconds();

            let hr = 30*hh + mm * .5 + ss/120;
            let mr = 6*mm + ss/10;
            let sr = 6 * ss;
                    
            hrs.style.transform = `rotate(${hr}deg)`;
            min.style.transform = `rotate(${mr}deg)`; 
            sec.style.transform = `rotate(${sr}deg)`; 


        },1000)