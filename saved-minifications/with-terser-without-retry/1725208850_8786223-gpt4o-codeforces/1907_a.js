function solve(){var t=parseInt(readline());while(t--){var p=readline(),f=p[0],r=parseInt(p[1]);for(var c="a";c<="h";c=String.fromCharCode(c.charCodeAt(0)+1))c!==f&&print(c+p[1]);for(var n=1;n<=8;n++)n!==r&&print(p[0]+n)}}solve();
