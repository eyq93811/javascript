"use strict";
const { error } = require("console");

   //严格模式

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
/**
 * 创建元素
 */
function createEl(node){
    return document.createElement(node)
}

/**
 * 设置节点属性
 */
function setAttr(node, styles){
    for(let key in styles){
        node.setAttribute(key, styles[key])
    }
}

/**
 * 获取节点属性
 */
function getAttr(node, attr){
    return node.getAttr(attr)
}

// 获取 div
const divDom = $("container-wrap");  // 获取元素


// 固定语法
const tableDom = createEl('table'); // 创建DOM元素
const styles = {
    'width': '100%',
    'border': '0',
    'cellpadding': '0',
    'cellspacing': '0',
    'id': 'table-data-wrap'
}
setAttr(tableDom, styles)


tableDom.innerHTML = `<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width="200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                    </thead>`
divDom.appendChild(tableDom)
