let res= document.getElementById('display');
let calc=(num)=>{
	if(num!=='DEL' && num!=='C')
		{
			res.value+=num;
		}
	else if (num==='C') {
		res.value='';
		
	}
	else{
		res.value=res.value.slice(0,-1);
	}
	
}

let result=()=>{
	try {
		res.value=eval(res.value);
	} catch(e) {
		// statements
		alert("Enter correct expression!");
		console.log(e);
	}
}
console.log(res);