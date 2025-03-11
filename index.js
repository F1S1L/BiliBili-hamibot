console.setSize(device.width / 2, device.height / 2);
console.show();
setScreenMetrics(1200,2670)
device.wakeUp();//点亮屏幕
sleep(2000);//点亮屏幕后两秒进行滑动
swipe(600,1800,600,300,500);
sleep(2000)
// click(925,1500);
// click(925,1500);
// click(925,1500);
// click(925,1500);
const{密码}=hamibot.env;
var passwd=密码;
// 九宫格起始坐标（数字1的坐标）  
let startX = 300; // 数字1的X坐标  
let startY = 1500; // 数字1的Y坐标  
let horizontalGap = 300; // 横向坐标差值  
let verticalGap = 200; // 纵向坐标差值  
// 根据数字计算其坐标  
function getPosition(key) {  
    let num = parseInt(key); // 将字符转换为数字  
    if (num < 1 || num > 9) return null; // 仅处理1-9的数字  

    // 计算行和列  
    let row = Math.floor((num - 1) / 3); // 行索引 (0, 1, 2)  
    let col = (num - 1) % 3; // 列索引 (0, 1, 2)  

    // 计算坐标  
    let x = startX + col * horizontalGap;  
    let y = startY + row * verticalGap;  
    return [x, y];  
}  

// 输入密码  
function inputPassword(password) {  
    for (let p = 0; p < password.length; p++) {  
        let key = password[p]; // 获取当前数字  
        let position = getPosition(key); // 获取数字对应的坐标  
        if (position) {  
            click(position[0], position[1]); // 点击屏幕上的坐标  
            sleep(300); // 等待300毫秒，模拟人的输入速度  
        }  
    }
}  

inputPassword(passwd);  
sleep(2000)
function task(){
	console.log('正在点击我的');
	var mine = desc('我的,5之5,标签').findOne();
	mine.click();
	sleep(2000)
	console.log('正在点击会员中心')
	id("container").className("android.view.ViewGroup").findOne().click()
	sleep(5000)
		// if(id("dialog-canvas").find()){
		//   console.log('正在关闭广告')
		//   click(600,2150);
		// }
	console.log('正在点击领取经验')
	var exp = text('领取').findOne(10000);
	if (exp != null) {
	    exp.click();
 	 } else {
 	   console.log('已经领取经验或者没有找到');
 	 }
	sleep(2000);
	console.log('正在点击赚大积分');
	var cred = text("赚大积分签到+10大积分").findOne(5000);
	if(cred==null){
		text('赚大积分').findOne(5000).click();
	}else{
 	 cred.click();
	}
	sleep(3000);
	console.log('正在点击做任务');
	if(className("android.widget.TextView").text('残忍拒绝').exists()){
 	 className("android.widget.TextView").text('残忍拒绝').findOne(2000).click();
	}
	text('做任务得大积分').findOne(5000).click();
	sleep(3000);
}


console.log('正在打开bilibili');
app.launch('tv.danmaku.bili');
sleep(8000)
task();
dotask();
						// for(let i=0;i<4;i++){
						// console.log(`正在做第${i+1}个任务`);  
					 // text('去完成').findOnce(i).click()
						//   sleep(11000)
						//   back()
						// }
sleep(5000);
// let i = 0;  
// let n = 0;
// var b = 0;
		// // function searchStrSplit(str, target) {
		// //    return str.split(target).length - 1
		// // }
function countStringOccurrences(elements, target) {  
    let count = 0; // 初始化计数器  
    for (let a = 0; a < elements.length; a++) {  
        const element = elements[a]; // 获取当前元素  
        const text = element.text(); // 获取元素的文本内容  
        if (text && text.includes(target)) { // 检查文本是否包含目标字符串  
            count++; // 如果包含，计数器加1  
        }  
    }  
    return count; // 返回统计结果  
}

function dotask(){
 let i = 0;  
 let n = 0;
 var b = 0;
while (true) {	
  	// var n = 0;
  	// var i = 0;
  	// var b = 0;
    sleep(2000);
var elements = text('去完成').find();  
 	var f = countStringOccurrences(elements,'去完成');
    if (f != 0) { 
// 如果没有找到匹配的元素，结束循环   
//         console.log('所有任务已完成');  
//         n=i+1;
//         break;  
//     }  
  	n=i+1;
    
    console.log(f);
    if(f == 1){
      b++;
    }
    if(b == 2){
      console.log('bug');
      break;
    }
//     if(n>6){
//       break;
//     }
		 console.log(b);
    console.log('正在做第'+ n +'个任务');  
    elements[0].click(); // 点击当前找到的元素  
    sleep(11000);  
  	var vip = id('mall_browse_floating_task_container').findOne(2000);
    if(vip==null){
      let vip2=id('vipPendant').findOne(2000);
      if(vip2 != null){
      console.log('vip2');
      vip2.click();
      }else{
      back();
      }
    }else{
      vip.click();
    }
    i++;  
	}else{
    console.log('debug')
    break;
  }
} 
}


if(desc('我的,5之5,标签').exists()){
	task();
  dotask();
}

let m=n+1;
console.log('正在做第'+ m +'个任务');
sleep(2000);
let t=0;
while(true){
sleep(2000);
if(className("android.widget.TextView").text("领取任务").exists()){
  t=t+1;
  console.log('领取第'+ t +'个任务');
	className("android.widget.TextView").text("领取任务").findOne(5000).click();
  sleep(1000);
  if (className("android.widget.TextView").text('立即领取').exists()){
   	className("android.widget.TextView").text('立即领取').findOne(5000).click();
  }
}	else{
  break;
}
};
sleep(2000);
if(text('去观看').exists()){
  text('去观看').findOne(2000).click();
  console.log('正在执行观看任务')
	sleep(2000);
	var volume = device.getMusicVolume();
	device.setMusicVolume(0);
	console.log('已自动静音(观看结束后会回到原有音量)')
	click(960,2140)
	sleep(630000);
  back();
  device.setMusicVolume(volume);
}
back();
home();
console.log('所有任务已完成!');
sleep(3000);
importClass(android.accessibilityservice.AccessibilityService)
var success = runtime.accessibilityBridge.getService().performGlobalAction(AccessibilityService.GLOBAL_ACTION_LOCK_SCREEN)
console.hide();
hamibot.exit();

