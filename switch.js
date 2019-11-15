(function(context){
    context.switcher  = {
        init(target) {
            let c1 = document.querySelector(target);
            let ctx = c1.getContext("2d");
            const width = c1.width;
            const height = c1.height;
            const ON_COLOR  = c1.getAttribute("on");
            const OFF_COLOR = c1.getAttribute("off");
            const CIRCLE_COLOR = c1.getAttribute("circle");
            let x = height / 2;
            let y = x;
            let r = x;
           let timer;
           let timer2;
           ctx.arc(x,y,r,0,Math.PI*2);
           ctx.fillStyle = "blue";
           ctx.fill();
           let status = c1.getAttribute("status");

             c1.onclick = function(){
                if(status == "on"){
                    status = "off";
                    drawOff();
                }else{
                    status = "on"
                    drawOn();
                }
                c1.setAttribute("status",status);
            }
            function drawOn(){
                      clearInterval(timer2)
                        timer =  setInterval(function(){
                        if(x < width-height/2){
                            ctx.clearRect(0,0,c1.width,c1.height);
                            ctx.beginPath();
                            ctx.fillStyle = ON_COLOR;
                            ctx.fillRect(0,0,c1.width,c1.height)
                            ctx.arc(x,y,r,0,Math.PI*2);
                            ctx.fillStyle = CIRCLE_COLOR;
                            ctx.closePath();
                            ctx.fill();
                            x++;
                            console.log(x)
                            }
                        },0)
            }
            function drawOff(){
                  
                 clearInterval(timer);
                timer2 =   setInterval(function(){
                        if(x >= y){
                            ctx.clearRect(0,0,c1.width,c1.height);
                            ctx.beginPath();
                            ctx.fillStyle = CIRCLE_COLOR;
                            ctx.fillRect(0,0,c1.width,c1.height)
                            ctx.arc(x,y,r,0,Math.PI*2);
                            ctx.fillStyle = ON_COLOR;
                            ctx.closePath();
                            ctx.fill();
                            x--;
                            console.log(x)
                            }
                    },0) 
            
            }
        }
    }
})(this)