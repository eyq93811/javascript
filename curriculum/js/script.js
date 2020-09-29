"use strict";  //严格模式
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
    // 请求接口
    handlerFaceList();
})

window.Eyq.addEvent(faceViewList, 'click', function(e){
    const ev = e || window.event;
    // 获取标签
    let nodeName = ev.target.nodeName.toLowerCase();
    // 获取img对象
    const getImg = window.Eyq.getTagName(faceView, 'img')[0];
    // 创建img对象
    const createImg = window.Eyq.createEl('img');
    // 点击获取src
    let getSrc = ``;
    // 清除头像高光
    if(faceSave){ faceSave.classList.remove("active"); }   // 清除上一次的头像样式
    // 更新src
    if(nodeName === 'li'){
        // 获得img
        const img = window.Eyq.getChildren(e.target)[0];
        // 获得img的src
        getSrc = img.src;
        // 存储头像 li 标签
        faceSave = ev.target;
    }
    // 如果点击的是img
    if(nodeName === 'img'){ 
        getSrc = ev.target.src;
        faceSave = ev.target.parentNode;  // parentNode 父节点
    }
    // 头像添加高光效果
    faceSave.classList.add("active");
    // es6
    faceUpdate({  // 对象的 key 和 value 是相同的情况下， 用一个参数就可以
        type: "add",
        getImg, 
        createImg, 
        getSrc
    })
})

window.Eyq.addEvent(faceDelButton, 'click', function(e){ 
    const ev = e || window.event;
    // 获取img对象
    const getImg = window.Eyq.getTagName(faceView, 'img')[0];
    // 更新头像
    faceUpdate({
        type: "del",
        getImg
    });
    // 阻止事件冒泡
    if(ev.stopPropagation){
        ev.stopPropagation();
    }else{
        ev.cancelBubble = true; 
    }
})

/*************input DOM 对象 **************/
inputUsername.onblur = function(){    // 谁绑定方法， this就指向谁
    let value = this.value;
    if(!value){
        window.UI.$message({
            message: "姓名不能为空",
            type: "primary",
            html: true
        });
    }
}







