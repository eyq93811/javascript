(function(){
    "use strict";  //严格模式 
    if(!window.UI) { window.UI = {}; }
    /**
     * message
     */
    function $message(params){
        const body = document.getElementsByTagName('body')[0];
        const messageDom = window.Eyq.createEl('div', {
            id: "alert-ui"
        })
        messageDom.innerHTML = params.message;
        // 添加至页面
        body.appendChild(messageDom)
    }
    window.UI.$message = $message;
})();

