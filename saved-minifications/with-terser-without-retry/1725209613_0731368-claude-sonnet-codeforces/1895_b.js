var t=parseInt(readline(),10);for(var _=0;_<t;_++){var n=parseInt(readline(),10),c=readline().split(" ").map((x=>parseInt(x,10)));c.sort(((a,b)=>a-b));var d=0;for(var i=1;i<n;i++)d+=c[i]-c[i-1]+c[i+n]-c[i+n-1];print(d+"\n");for(i=0;i<n;i++)print(c[i]+" "+c[i+n]+"\n")}
