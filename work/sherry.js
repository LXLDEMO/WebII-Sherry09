
var container = document.getElementById('container');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById("left");
var right = document.getElementById("right");
var slide = document.getElementsByClassName('slide');
var index = 1;
var slidertip = document.getElementById('slidertip');
var words = document.getElementsByClassName('words');
var flag = 0;
function speek(){
	flag--;
	slidertip.style.left=flag + "px";
	if(flag == -800){
		flag = 700;
	}
}
setInterval(speek,10);

	//轮播下一张函数
	function next(){
		index++;
		navChange();
		animate(slider,{left:-1200 * index},function(){
			if(index === 6){
				slider.style.left = "-1200px";
				index = 1;
			}
		});
	}

	function prev(){
		index--;
		navChange();
		animate(slider,{left:-1200 * index},function(){
			if(index === 0){
				slider.style.left = "-6000px";
				index = 5;
			}
		});
	}

	var timer = setInterval(next,3000);
//鼠标滑入清定时器
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer);
}
//鼠标划出开定时器
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
for(var i = 0;i < oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-1200*index});
	}
}

	//小按钮背景色切换
	function navChange(){
		for(var i = 0;i<oNavlist.length;i++){
			oNavlist[i].id = '';
		}
		if(index === 6){
			oNavlist[0].id = 'active';
		}else if(index===0){
			oNavlist[4].id = 'active';
		}else{
			oNavlist[index-1].id = 'active';
		}
		
	}


