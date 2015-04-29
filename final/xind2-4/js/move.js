var number=5; //定义条目数

function Move(i) {
	var lbmc;
    lbmc = eval('L' + i);
    lbmc.style.paddingRight = '30px';
    lbmc.style.paddingLeft = '30px';
    for (i=1;i<=number;i++) {
    	temp = eval('L' + i);
    	if(temp!=lbmc){
            temp.style.paddingRight = '0px';
            temp.style.paddingLeft = '0px';
            }
    }
}
function Back(i) {
	var lbmc;
	for(i=1;i<=number;i++){
		lbmc = eval('L' + i);
        lbmc.style.paddingRight = '10px';
        lbmc.style.paddingLeft = '0px';
	}

    }