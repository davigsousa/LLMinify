function main(){for(var t=parseInt(readline(),10),n=0;n<t;n++){var r=parseInt(readline(),10),i=readline().split(" ").map((function(n){return parseInt(n,10)})).sort(),a=i[0]+i[r-1],o=Math.floor(r/2),f=!0;for(var l=1;l<o;l++){var u=i[l]+i[r-1-(l-1)],c=i[l]+i[r-1-l];if(u!==a||c!==a){f=!1;break}}if(r%2!=0){var u=i[o]+i[o+1],c=i[o]+i[o-1];u!==a&&c!==a&&(f=!1)}print(f?"YES":"NO")}}main();
