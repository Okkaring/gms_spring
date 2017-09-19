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