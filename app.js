let days = document.getElementById('days');
let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
///////
let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

///////
let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');
//////
let endDate = '01/01/2023 00:00:00';

/** Date format mm/dd/yyyy */
let x = setInterval(
    function(){
        let now = new Date(endDate).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown;
        /**time calculation for days, hrs, mins,sec */
    
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 *60 *60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 *60)) ;
        let s = Math.floor((distance % (1000 * 60 )) / (1000));
       days.innerHTML = d +"<br><span>Days</span>";
       hours.innerHTML = h +"<br><span>Hours</span>";
       min.innerHTML = m +"<br><span>Minutes</span>";
       sec.innerHTML = s +"<br><span>Seconds</span>";

        /** animate style */
        dd.style.strokeDashoffset = 440 - (440 * d) / 365;
        hh.style.strokeDashoffset = 440 - (440 * h) /24;
        mm.style.strokeDashoffset = 440 - (440 * m) /60;
        ss.style.strokeDashoffset = 440 - (440 * s) /60;
        day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
        hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
        min_dot.style.transform = `rotateZ(${m * 6}deg)`;
        sec_dot.style.transform = `rotateZ(${s * 6}deg)`;


        
    });
        


