var t=parseInt(readline());while(t--){var n=parseInt(readline()),a=readline().split(" ").map(Number),s=0;if(n%2==0)for(var i=0;i<n;i+=2)s+=a[i]-a[i+1];else{for(var i=0;i<n-1;i+=2)s+=a[i]-a[i+1];s+=a[n-1]}print(s)}
