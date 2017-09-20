var series={
		arithmetic : (s,e)=>{
			var i=0, start=s*1, end=e*1, sum=0;
			for(i=start;i<=end;i++){
				sum+=i;
				};
			return sum;
			},
		switchSeries : ()=>{
	        var i=0, sum=0, start=1, end=100, opcode=1;
	        for(i=start;i<=end;i++){
	           sum = sum + (opcode * i);
	           opcode = opcode * -1;
	        }
	        return sum;
			},
		diffrenceSeries :(e)=>{
			var sum = 0;
			var x = e*1;
			var y = 1;
			for(var i=0;i<x;i++){
				sum = sum+y;
				y = y+(i+1);
			}			
			return sum;
			},
		factorial :()=>{
			var i=0, j=1, sum=0;
			for(i=0;i<10;i++){
				j=j*(i+1);
				sum=sum+j;
			}			
			return sum;
			},
		fibonacci :x=>{
			var i=0, a=1, b=1, c=0, sum=2;
			for(i=2;i<20;i++){
				c=a+b;
				sum=sum+c;
				a=b;
				b=c;
			}			
			return sum;
		}
}
var sort={
		// 1. selection
		selection :(x)=>{
			console.log('start : '+x);
	        var temp=0, min=0;
	        for(var i=0; i<x.length-1; i++){
	             min = i;
	             for(var j=i+1; j<=x.length-1; j++){
	                if(x[min]*1>x[j]*1){
	                  min = j;
	                };
	             };
	             temp = x[min];
	             x[min]=x[i];
	             x[i]=temp;
	          };
	        return x;
	    },
		// 2. bubble
		bubble : (x)=>{
			console.log('start : '+x);
			var i=0,j=0,k=0;
			for(i=0;i<x.length;i++){
				for(j=0;j<x.length;j++){
					if(x[j]*1 > x[j+1]*1){
						k = x[j];
						x[j] = x[j+1];
						x[j+1] = k;
					}
				}
			}
			console.log('end : ' + x);
			return x;
		},
		// 3. insertion
		insertion : (x)=>{
			var arr=x, a=0, b=0;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length-1;i++){
					if(a>b){
						c=arr[i];
						arr[i]=arr[i+1];
						arr[i+1]=c;
					}
				}
			}
		},
		// 4. ranking
		ranking : (x)=>{
			var arr=x, a=0, b=0;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length-1;i++){
					if(a>b){
						c=arr[i];
						arr[i]=arr[i+1];
						arr[i+1]=c;
					}
				}
			}
		}
}