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

// array
const tableTheadData = [
    { label: "头像" },
    { label: "姓名" },
    { label: "性别" },
    { label: "年龄" },
    { label: "手机号" },
    { label: "国籍" },
    { label: "爱好", width: 200, id: "aaa" },
    { label: "头衔" },
    { label: "操作" }
]

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
// 生成表头
tableDom.innerHTML = theadHtml
divDom.appendChild(tableDom)
