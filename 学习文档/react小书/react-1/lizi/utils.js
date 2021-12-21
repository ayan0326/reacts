const utils = {
  /**
   * 
   * @param {*} obj <DOMOject>  要获取属性的元素对象
   * @param {*} attr  <string>  样式名称
   * @return          <string>   获取到的样式的值 
   */
  getStyle :function (obj,attr){
      //判断obj有currentstyle属性，说明是ie
      if(obj.currentStyle){
         //判断obj有currentstyle属性，说明是ie
         return obj.currentStyle[attr]
       }else{
         //不是ie浏览器
         return getComputedStyle(obj,false)[attr]
 
       }
     },
  
  /**
   * 添加事件监听
   * @param ele         <DOMObject> 添加事件的DOM元素
   * @param type        <string>    事件类型（不带on）
   * @param fn          <function>  事件处理函数
   * @param [isCapture] <boolean>   可选参数，是否捕获，true代表捕获，false代表冒泡，默认为false
   */
   on :function (ele, type, fn, isCapture) {
      // 如果参数没有传，默认值为false
      if (isCapture === undefined) isCapture = false
      if (ele.attachEvent) {
      // IE
      ele.attachEvent('on' + type, fn)
      } else {
      ele.addEventListener(type, fn, isCapture)
      }
  },
  
  /**
   * 移出事件监听
   * @param ele         <DOMObject> 添加事件的DOM元素
   * @param type        <string>    事件类型（不带on）
   * @param fn          <function>  事件处理函数
   * @param [isCapture] <boolean>   可选参数，是否捕获，true代表捕获，false代表冒泡，默认为false
   */
  off:function (ele, type, fn, isCapture) {
      // 如果参数没有传，默认值为false
      if (isCapture === undefined) isCapture = false
      if (ele.detachEvent) {
      ele.detachEvent('on' + type, fn)
      } else {
      ele.removeEventListener(type, fn, isCapture)
      }
  },

   /**
   * 封装匀速运动
   * @param ele   <DOMObject>   要运动的元素对象 :oBox
   * @param attr   <string>   运动的属性名:left top
   * @param end   <number>    运动的终点,单位px   :500
   * @param duration  <number>  运动总时长，单位ms    :1000
   * @param fn      <function>  回调函数，在运动结束后执行的函数
   */
 move:function(ele,attr,end,duration,fn){
      //获取起点值
      //utils.getStyle()
      var start = parseInt( this.getStyle(ele,attr)) //调用上面的函数得到宽高
      //算总距离
      var distance = end - start
      //算速度
      //var speed = distance / duration     //速度单位是 px/ms

      //先计算从起点到终点的总步数
      var steps = Math.floor(duration / 30)
      //计算速度：每一步要走的像素值 px/步 px/30ms
      var speed =    distance / steps

      var n = 0 //记录当前是第几步

      //开始定时之前，先清除上一次的定时器防止bug
      clearInterval(ele.timer)
      ele.timer=setInterval(function(){
          n++
          ele.style[attr] = start + n * speed +'px'  //起始点 start加上多少步*速度就是运动的距离 attr是变量所以要加[]
          if( n === steps){
              clearInterval(ele.timer)
              //固定再终点位置
              ele.style[attr] = end + 'px'
              //console.log('move end')   //运动结束
              //运动结束后调用

              //回调函数写法
              fn && fn()      //逻辑短路 如果第一个fn无效，就会隐式转换为false 逻辑短路 不会执行fn() 如果不调用函数就结束 
          }
      },30)
 },
 /**
  * 封装缓冲运动 
  * @param {} ele  <DOMObject>   要运动的元素对象 :oBox
  * @param {*} attr  <string>   运动的属性名:left top
  * @param {*} end <number>    运动的终点,单位px   :500
  * @param {*} fn <function>  回调函数，在运动结束后执行的函数
  */
  move1:function(ele,attr,end,fn){
    //在开启定时器之前先清除上一次的
    clearInterval(ele.timer)
    var start = parseInt(this.getStyle(ele,attr))

    ele.timer = setInterval(function(){
      //计算剩下距离
      //如果运动是负方向，distance小于0 speed也是小于0，剩下最后几步负零点几不可以向上取整 向上取整为0了，所以要向下取整
      var distance = parseInt(end) - start

      //计算这一步的速度，就是剩下距离的十分之一
      //speed 就是当前这一步要走的距离
      var speed = distance > 0 ? Math.ceil(distance / 10):Math.floor(distance / 10)
      //走完一步start往前加
      start += speed
      //把更新之后的start值赋给属性 
      ele.style[attr] = start + 'px'
      //判断终点
      //由于缓冲运动是1像素1像素运动的，所以它一定能刚好到终点不多不少
      //用速度为零也可以
      if(start === end){
        clearInterval(ele.timer)
        fn && fn()
      }
    },30)
  },


/**
 * 取cookie
 * 
 */
  getCookie(){
    var str = document.cookie
    //先按照;来切割每一天cookie
    var arr = str.split(';')
    console.log(arr)
    //arr的每一个item就是一个cookie
    arr.forEach(item => {
      var subArr = item.split('=')
    })
  }


}



