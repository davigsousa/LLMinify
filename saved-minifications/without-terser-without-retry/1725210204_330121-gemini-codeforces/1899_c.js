for(var a0=parseInt(readline()),t=0;t<a0;t++){for(var n=parseInt(readline()),a=readline().split(' ').map(x=>parseInt(x)),sum=a[0],maxSum=a[0],parity=a[0]%2==0,i=1;i<n;i++){var cur=a[i]%2==0;cur==parity||sum<0?(sum=a[i]):(sum+=a[i]),maxSum=Math.max(maxSum,sum),parity=cur}print(maxSum)}
