let time=document.querySelector('.timer');
let [hr,min,sec,ms]=[0,0,0,0];
let t=null;
document.getElementById('start').addEventListener('click',()=>{
	if(t!==null){
		clearInterval(t);
	}
	t=setInterval(displayTime, 10);
})
document.getElementById('pause').addEventListener('click',()=>{
	clearInterval(t);
})
document.getElementById('reset').addEventListener('click',()=>{
	clearInterval(t);
	[hr,min,sec,ms]=[0,0,0,0];
	time.innerHTML=`00 : 00 : 00 : 000`;
})
function displayTime() {
    ms += 10;
    if(ms == 1000) {
        ms = 0;
        sec++;
        if(sec == 60) {
            sec = 0;
            min++;
            if(min == 60) {
                min = 0;
                hr++;
            }
        }
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let mss= 
        ms < 10
        ? "00" + ms
        : ms < 100
        ? "0" + ms
        : ms;

    time.innerHTML = `${h} : ${m} : ${s} : ${mss}`;

}