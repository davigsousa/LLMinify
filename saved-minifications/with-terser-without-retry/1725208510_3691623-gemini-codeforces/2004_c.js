var t=parseInt(readline(),10);while(t--){var nk=readline().split(" ").map((function(x){return parseInt(x,10)})),n=nk[0],k=nk[1],lst=readline().split(" ").map((function(x){return parseInt(x,10)}));lst.sort((function(a,b){return b-a}));var a=0,b=0;for(var i=0;i<n;i++)i%2===1?(diff=Math.min(lst[i-1]-lst[i],k),b+=lst[i]+diff,k-=diff):a+=lst[i];print(a-b)}
