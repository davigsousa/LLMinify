function divideTable(n,t){var f=0,o=0,l=0,i=0;for(var e=0;e<n;e++)t[e]==="L"?f++:o++;for(var e=0;e<n;e++){if(t[e]==="L"?l++&&f--:i++&&o--,f+o>0&&f!=l&&o!=i&&l+i>0)return l+i}return-1}var x=parseInt(readline()),t=readline();print(divideTable(x,t));
