'use strict';let MX=1e6+1;let ispriMap=new Array(MX).fill(!0);let pris=[];for(let i=2;i<MX;i++){if(ispriMap[i]){pris.push(i);for(let j=i*i;j<MX;j+=i){ispriMap[j]=!1}}}function solution(){let t=Number(readline());while(t--){let n=Number(readline());let arr=readline().split(" ").map(Number);let map=new Map();for(let c of arr){for(let p of pris){if(p*p>c)break;let cnt=0;while(c%p===0){cnt++;c/=p}if(cnt>0){map.set(p,(map.get(p)||0)+cnt)}}if(c>1){map.set(c,(map.get(c)||0)+1)}}let flag=!0;for(let v of map.values()){if(v%n!==0){flag=!1;break}}print(flag?"YES":"NO")}}solution();
