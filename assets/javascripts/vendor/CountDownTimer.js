CountDownTimer('08/25/2017 7:00 AM', 'countdown2');


function CountDownTimer(dt, id)
{
    var end = new Date(dt);
    
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            
            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';
            
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        
        if (String(hours).length < 2){
            hours = 0 + String(hours);
        }
        if (String(minutes).length < 2){
            minutes = 0 + String(minutes);
        }
        if (String(seconds).length < 2){
            seconds = 0 + String(seconds);
        }
        
        
        var datestr = '<h2>' + 
                     '<p>' + days + ' <span>days</span></p>' + 
                      '<p>' +  hours + ' <span>hours</span></p>' + 
                     '<p>' +  minutes + ' <span>minutes</span></p>' + 
                     '<p>' +  seconds + ' <span>seconds</span></p>' 
                      + '</h2>';
        
        document.getElementById(id).innerHTML = datestr;
    }
    
    timer = setInterval(showRemaining, 1000);
}
