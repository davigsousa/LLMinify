const solve=()=>{var n,a=[],pref=[],suf=[];n=readInt();var temp=readIntArr();a.push(0);for(var i=0;i<n;i++)a.push(temp[i]);for(var i=0;i<n+2;i++){pref.push(0);suf.push(0)}for(var i=1;i<=n;i++)pref[i]=Math.max(pref[i-1],a[i]+(n-i));for(var i=n;i>=1;i--)suf[i]=Math.max(suf[i+1],a[i]+(i-1));var ans=2e9;for(var i=1;i<=n;i++)ans=Math.min(ans,Math.max(a[i],pref[i-1],suf[i+1]));return ans};const main=()=>{print(solve());return};const readInt=()=>parseInt(readline());const readString=()=>readline();const readIntArr=()=>readline().split(" ").map((zzzz=>parseInt(zzzz)));const parseLong=string=>{var n=string.length;var res=0;for(var i=0;i<n;i++){res*=10;res+=parseInt(string[i])}return res};const readLong=()=>parseLong(readLong());const readLongArr=()=>readline().split(" ").map((zzzz=>parseLong(zzzz)));const oneLineArrayPrint=arr=>print(arr.map((zzzz=>zzzz.toString())).join(" "));const multiLineArrayPrint=arr=>print(arr.map((zzzz=>zzzz.toString())).join("\n"));const multiLineArrayOfArraysPrint=arr=>print(arr.map((yyyy=>yyyy.map((zzzz=>zzzz.toString())).join(" "))).join("\n"));const makeArr=(defaultVal,dimensionsArr)=>{var n=dimensionsArr.length;if(n===1)return Array(dimensionsArr[0]).fill(defaultVal);else{var temp=[];for(var i=0;i<dimensionsArr[0];i++)temp.push(makeArr(defaultVal,dimensionsArr.slice(1)));return temp}};for(_=0;_<1;_++)main();
