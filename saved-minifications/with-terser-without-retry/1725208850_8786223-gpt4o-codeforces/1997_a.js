const getNewPassword=s=>{for(var j=1;j<s.length;j++)if(s[j-1]===s[j])return s.slice(0,j)+(s[j]!=="a"?"a":"b")+s.slice(j);return(s[0]!=="a"?"a":"b")+s};var t=+readline();for(var i=0;i<t;i++)print(getNewPassword(readline()));
