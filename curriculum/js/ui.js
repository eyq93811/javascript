(function(){
    "use strict";  //严格模式 
    if(!window.UI) { window.UI = {}; }

    const messageConfig = {
        duration: 3000
    }
    /**
     * message
     */
    function $message(params){
        const body = document.getElementsByTagName('body')[0];
        const messageDom = window.Eyq.createEl('div', {
            id: "alert-ui"
        })
        if(params.html){
            messageDom.innerHTML = params.message;
        }else{
            messageDom.innerText = params.message;
        }
        // 时间配置
        if(params.duration){ messageConfig.duration = params.duration; }
        // 主题
        UI.theme(messageDom, params.type);
        // 添加至页面
        body.appendChild(messageDom);
        // 执行 show
        UI.show(messageDom);
    }
    window.UI.$message = $message;

    /**
     * 处理主题 
     */
    function theme(node, type){
        if(!type){ return false; }
        node.classList.add(`message-theme-${type}`);
    }
    window.UI.theme = theme;
    
    /**
     * setTimeout、clearTimeout     -> 指定间隔时间只执行一次
     * setInterval、cleatInterval   -> 指定间隔时间不断的执行,清除即停止
     */

    /**
     * show 对象
     */
    function show(node){
        // 显示
        node.timerShow = setTimeout(function(){
            node.classList.add("show"); 
            clearTimeout(node.timerShow);
        }, 1000)
        // 隐藏对象
        UI.hide(node);
    }
    window.UI.show = show;

    /**
     * hide 对象
     */
    function hide(node){
        node.timerHide = setTimeout(function(){
            node.classList.remove("show"); 
            clearTimeout(node.timerHide);
            // remove 对象
            UI.remove(node);
        }, messageConfig.duration); 
    }
    window.UI.hide = hide;

    /**
     * remove 对象
     */
    function remove(node){
        const body = document.getElementsByTagName('body')[0];
        node.timerRemove = setTimeout(function(){
            node.classList.remove("show"); 
            // 清除定时器
            clearTimeout(node.timerRemove);
            // remove 对象
            body.removeChild(node);
        }, 1000) 
    }
    window.UI.remove = remove;

})();

