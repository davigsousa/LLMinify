var t=parseInt(readline());for(var a0=0;a0<t;a0++){var n=parseInt(readline()),a=readline().split(" ").map((x=>parseInt(x))),sum=a[0],maxSum=a[0],parity=a[0]%2==0;for(var i=1;i<n;i++){var cur=a[i]%2==0;cur==parity||sum<0?sum=a[i]:sum+=a[i];maxSum=Math.max(maxSum,sum);parity=cur}print(maxSum)}
