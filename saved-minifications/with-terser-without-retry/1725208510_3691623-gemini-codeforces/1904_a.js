const isExists=(a,v)=>{for(let i=0;i<a.length;i++)if(a[i][0]==v[0]&&a[i][1]==v[1])return!0;return!1};let t=readline(),x=[-1,-1,1,1],y=[-1,1,-1,1];while(t--){let a=readline().split(" ").map((x=>parseInt(x))),b=a[0],c=a[1],d=readline().split(" ").map((x=>parseInt(x))),e=readline().split(" ").map((x=>parseInt(x))),f=[],g=[],h=0;for(let i=0;i<4;i++)!isExists(f,[d[0]+x[i]*b,d[1]+y[i]*c])&&f.push([d[0]+x[i]*b,d[1]+y[i]*c]),!isExists(f,[d[0]+y[i]*c,d[1]+x[i]*b])&&f.push([d[0]+y[i]*c,d[1]+x[i]*b]),!isExists(g,[e[0]+x[i]*b,e[1]+y[i]*c])&&g.push([e[0]+x[i]*b,e[1]+y[i]*c]),!isExists(g,[e[0]+y[i]*c,e[1]+x[i]*b])&&g.push([e[0]+y[i]*c,e[1]+x[i]*b]);for(let i=0;i<f.length;i++)for(let j=0;j<g.length;j++)f[i][0]==g[j][0]&&f[i][1]==g[j][1]&&h++;print(h)}
