"use strict";  //严格模式
// 获取 div
const divDom = window.Eyq.$("container-wrap");  // 获取元素
// 固定语法
const tableDom = window.Eyq.createEl('table'); // 创建DOM元素
// 获取添加信息按钮对象
const addInfoButton = window.Eyq.getClassName('add-info-button')[0];
// 获取form 弹窗对象
const infoDialog = window.Eyq.$('info-dialog');
// 获取form 弹窗关闭按钮对象
const closeDialog = document.querySelector('.close-dialog');
// 获取头像区域
const faceView = window.Eyq.getClassName('face-view')[0];
// 获取头像列表区域
const faceViewList = window.Eyq.getClassName('face-view-list')[0];


window.Eyq.setAttr(tableDom, {
    'width': '100%',
    'border': '0',
    'cellpadding': '0',
    'cellspacing': '0',
    'id': 'table-data-wrap'
}) 
let theadHtml = `<thead><tr>`;
// es6 forEach
tableTheadData.forEach((item) => {
    // 检测是否有width
    let width = item.width ? ` width="${item.width}"` : "";
    // 检测是否有id
    let id = item.id ? ` id="${item.id}"` : "";
    // 字符串拼接
    theadHtml += `<th${width}${id}>${item.label}</th$>`;
})
theadHtml += `</tr></thead>`;
let tbodyHtml = `<tbody>`


tbodyHtml += `${createTbodyData()}</tbody>`;
// 生成table的内容
tableDom.innerHTML = theadHtml + tbodyHtml;
// 添加到页面
divDom.appendChild(tableDom)

/**
 * ******** 添加信息层显示/隐藏 *************************************************
 */
// 打开
window.Eyq.addEvent(addInfoButton, 'click', function(){
    infoDialog.classList.add('dialog-show');
})

// 关闭
window.Eyq.addEvent(closeDialog, 'click', function(){
    infoDialog.classList.remove('dialog-show');
})

/**
 * ****** 头像事件处理 ***********************************************************
 */
window.Eyq.addEvent(faceView, 'click', function(){
    handlerFaceList()
})

window.Eyq.addEvent(faceViewList, 'click', function(e){
    // 获取标签
    let nodeName = e.target.nodeName.toLowerCase();
    // 获取img对象
    const getImg = window.Eyq.getTagName(faceView, 'img')[0];
    // 创建img对象
    const createImg = window.Eyq.createEl('img');
    // 点击获取src
    let getSrc = ``;
    // 更新src
    if(nodeName === 'li'){
        // 获得img
        const img = window.Eyq.getChildren(e.target)[0];
        // 获得img的src
        getSrc = img.src;
    }
    // 如果点击的是img
    if(nodeName === 'img'){ 
        getSrc = e.target.src;
    }
    // 头像存在，则修改头像的sec
    if(getImg){
        getImg.src = getSrc;
    }else{
        // img 写入src img标签不存在，直接创建一个img标签
        createImg.src = getSrc;
        window.Eyq.addChild(faceView, createImg);
    }
})

function handlerFaceListCallback(data){
    // 获得数据
    const requestData = data.data;
    let liHtml = ``;
    for(let key of requestData){
        liHtml += `<li><img src="${key}" alt=""></li>`
    }
    faceViewList.innerHTML = liHtml;
}





