function addArrow(arr){
	var step_box = document.createElement("div");
	step_box.className = "step_box";
	if(arr.length==1){
		var ele = document.createElement("div");
		ele.className = "step_result";
		ele.innerHTML = "已中止";
		step_box.appendChild(ele);
	}else if(arr.length==4){
		var step_item = new Array();
		for(var i=0;i<arr.length;i++){
			step_item[i] = document.createElement("div");
			step_item[i].className = "step_item";
			if(arr[i].isCurrentStatus && arr[i].isShadowed){
				step_item[i].style.backgroundColor = "#108EE9";
				step_item[i].style.color = "white";
			}
			
			var right = document.createElement("div");
			right.className = "step_item_right";
			var content = document.createElement("div");
			content.className = "step_item_content";
			content.innerHTML = arr[i].name;
			var left = document.createElement("div");
			left.className = "step_item_left";
			step_item[i].appendChild(left);
			step_item[i].appendChild(content);
			step_item[i].appendChild(right);
			step_box.appendChild(step_item[i]);
		}
	}else{
		alert("输入的数组有误");
	}
	return step_box;
}
