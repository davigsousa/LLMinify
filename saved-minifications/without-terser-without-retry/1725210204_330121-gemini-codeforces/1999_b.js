function solve(){var[a1,a2,b1,b2]=readline().split(' ').map(Number),r=0;if((a1>b1&&a2>=b2)||(a1>=b1&&a2>b2))r++;if((a1>b2&&a2>=b1)||(a1>=b2&&a2>b1))r++;if((a2>b1&&a1>=b2)||(a2>=b1&&a1>b2))r++;if((a2>b2&&a1>=b1)||(a2>=b2&&a1>b1))r++;print(r)}var t=parseInt(readline());while(t--)solve()
