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
// 获取删除头像按钮
const faceDelButton = window.Eyq.getTagName(faceView, 'a')[0];
// 头像存储
let faceSave = null;

/*************input DOM 对象 **************/
const inputUsername = window.Eyq.$('usernameInput');
