var num=parseInt(readline(),10);while(num--){var n=parseInt(readline(),10),str=readline(),obj={A:0,B:0,C:0,D:0};for(var i=0;i<str.length;i++)obj[str[i]]=Math.min(++obj[str[i]],n);print(obj.A+obj.B+obj.C+obj.D)}
