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
     * 获取className 对象
     * @param {string} node 
     */
    function getClassName(className){
        return document.getElementsByClassName(className);
    }
    window.Eyq.getClassName = getClassName;

    /**
     * 获取 标签 对象
     * @param {string} node 
     */
    function getTagName(parentNode, target){
        return parentNode.getElementsByTagName(target)
    }
    window.Eyq.getTagName = getTagName;

    /**
     * 获取 标签 对象(第一层)
     * @param {string} node 
     */
    function getChildren(parentNode){
        return parentNode.children;
    }
    window.Eyq.getChildren = getChildren;

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
    
    /**
     * addEventListener 方法
     */
    function addEvent(domNode, eventType, handlerFunction){
        domNode.addEventListener(eventType, handlerFunction)
    }
    window.Eyq.addEvent = addEvent;

    /**
     * removeEventListener 方法 
     */
    function removeEvent(domNode, eventType, handlerFunction){
        if(window.removeEventListener){
            domNode.removeEventListener(eventType, handlerFunction);
        }else{
            domNode.detachEvent(`on${eventType}`, handlerFunction);
        }
    }
    window.Eyq.removeEvent = removeEvent;

    /**
     * 添加子节点到父级末尾
     */
    function addChild(parentNode, node){
        parentNode.appendChild(node);   // 对象的末尾添加
    }
    window.Eyq.addChild = addChild;

})();

