var t=parseInt(readline());for(var i=0;i<t;i++){var input=readline().split(" ");var n=parseInt(input[0]);var s=parseInt(input[1]);var m=parseInt(input[2]);var intervals=[];for(var j=0;j<n;j++){var interval=readline().split(" ");var li=parseInt(interval[0]);var ri=parseInt(interval[1]);intervals.push([li,ri])}var canShower=false;if(intervals[0][0]>=s){canShower=true}for(var j=1;j<intervals.length;j++){if(intervals[j][0]-intervals[j-1][1]>=s){canShower=true;break}}if(m-intervals[intervals.length-1][1]>=s){canShower=true}print(canShower?"YES":"NO")}
