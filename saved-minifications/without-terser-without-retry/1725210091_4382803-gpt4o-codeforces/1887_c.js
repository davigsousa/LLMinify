'use strict';const main=()=>{let t=readInt(),allans=[];while(t--){let z=readIntArr(),n=z[0],m=z[1],k=z[2],k2=m>=n?n-1+parseInt(m/n):m,ans;k===1?ans=1:k===2?ans=k2:k===3?ans=m-k2:ans=0;allans.push(ans)}multiLineArrayPrint(allans);return};const readInt=()=>parseInt(readline()),readString=()=>readline(),readIntArr=()=>readline().split(" ").map(zzzz=>parseInt(zzzz)),parseLong=string=>{var n=string.length,res=0;for(var i=0;i<n;i++)res*=10,res+=parseInt(string[i]);return res},readLong=()=>parseLong(readLong()),readLongArr=()=>readline().split(" ").map(zzzz=>parseLong(zzzz)),oneLineArrayPrint=arr=>print(arr.map(zzzz=>zzzz.toString()).join(' ')),multiLineArrayPrint=arr=>print(arr.map(zzzz=>zzzz.toString()).join('\n')),multiLineArrayOfArraysPrint=arr=>print(arr.map(yyyy=>yyyy.map(zzzz=>zzzz.toString()).join(' ')).join('\n')),makeArr=(defaultVal,dimensionsArr)=>{var n=dimensionsArr.length;if(n===1)return Array(dimensionsArr[0]).fill(defaultVal);else{var temp=[];for(var i=0;i<dimensionsArr[0];i++)temp.push(makeArr(defaultVal,dimensionsArr.slice(1)));return temp}};for(let _=0;_<1;_++)main();
