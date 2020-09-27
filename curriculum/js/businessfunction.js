"use strict";  //严格模式
/**
 * API 获取头像的回调函数
 * @param {*} data 
 */
function handlerFaceListCallback(data){
    // 获得数据
    const requestData = data.data;
    let liHtml = ``;
    for(let key of requestData){
        liHtml += `<li><img src="${key}" alt=""></li>`
    }
    faceViewList.innerHTML = liHtml;
}

/**
 * 更新头像的函数
 */
function faceUpdate(params){
    if(params.type === 'add'){
        // 头像存在，则修改头像的sec
        if(params.getImg){
            params.getImg.src = params.getSrc;
        }else{
            // img 写入src img标签不存在，直接创建一个img标签 
            params.createImg.src = params.getSrc;
            window.Eyq.addChild(faceView, params.createImg);
        }
    }
    if(params.type === 'del' && params.getImg){
        faceView.removeChild(params.getImg);
    }
}