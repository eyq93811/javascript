"use strict";  //严格模式
// 获取 div
const divDom = window.Eyq.$("container-wrap");  // 获取元素
// 固定语法
const tableDom = window.Eyq.createEl('table'); // 创建DOM元素
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
