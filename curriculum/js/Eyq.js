(function(){
    "use strict";  //严格模式 
    // 命名空间
    if(!window.Eyq) { window.Eyq = {}; }
    /**
     * 获取ID的DOM元素
     * @param {string} id 
     */
    function $(id){
        if(typeof id != "string"){
            throw new Error('参数ID必须是一个字符串')
        }
        const dom = document.getElementById(id)
        if(!dom){
            throw new Error('DOM元素没找到')
        }
        return dom
    }
    window.Eyq.$ = $;

    /**
     * 创建元素
     */
    function createEl(node){
        return document.createElement(node)
    }
    window.Eyq.createEl = createEl;

    /**
     * 设置节点属性
     */
    function setAttr(node, styles){
        for(let key in styles){
            node.setAttribute(key, styles[key])
        }
    }
    window.Eyq.setAttr = setAttr;

    /**
     * 获取节点属性
     */
    function getAttr(node, attr){
        return node.getAttr(attr)
    }
    window.Eyq.getAttr = getAttr;
     
})();

