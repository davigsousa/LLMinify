for(var t=parseInt(readline()),a0=0;a0<t;a0++){var nq=readline().split(" ").map((x=>parseInt(x))),n=nq[0],q=nq[1],a=readline().split(" ").map((x=>parseInt(x))),b=readline().split(" ").map((x=>parseInt(x))),bSet=new Set(b);for(var power of bSet){var num=Math.pow(2,power);for(var i=0;i<n;i++)a[i]%num===0&&(a[i]+=num/2)}print(a.join(" "))}
