function main(){var t=parseInt(readline(),10);for(var e=0;e<t;e++){var r=parseInt(readline(),10),i=readline().split(" ").map(function(t){return parseInt(t,10)}).sort(),a=i[0]+i[r-1],n=Math.floor(r/2),f=!0;for(var l=1;l<n;l++){var s=i[l]+i[r-1-(l-1)],c=i[l]+i[r-1-l];if(s!==a||c!==a){f=!1;break}}if(r%2!==0){var s=i[n]+i[n+1],c=i[n]+i[n-1];(s!==a&&c!==a)&&(f=!1)}print(f?"YES":"NO")}}main();
