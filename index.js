

    var info = document.getElementById("print");
    var toggle = document.getElementById("toggle");
    var i = 0;
   
    var btn = 1;
    
    interval = null;
    
      function add () {
      
            if (btn) {
    
                btn = 0;
   
                interval = setInterval(function() { 
                    info.innerHTML = i++;
                }, 1);
            }
  
            else {
  
                btn = 1;
                i=0;
    
                clearInterval(interval);
                info.innerHTML=i;
            }
        };
    