/**
 * 主体数据
 */
const bodyDom = document.getElementsByTagName('body')[0];

let timeStart = (new Date()).getTime();
// 操作DOM元素
for(let i = 0; i < 10000; i++){
    const div = document.createElement('div');
    div.innerHTML = i;
    bodyDom.appendChild(div)
    // 不要创建一个对象，就塞一个对象
}
let timeEnd = (new Date()).getTime();
console.log(timeEnd - timeStart);

// 连接字符串 
// let htmlDom = ``;
// for(let i = 0; i < 10000; i++){
//     htmlDom += `<div>${i}</div>`;
// }
// bodyDom.innerHTML = bodyDom.innerHTML + htmlDom;










function createTbodyData(){
    let trHtml = ``;
    for(let i = 0; i < tableTbodyData.length; i++){
        const data = tableTbodyData[i];
        // 开始tr
        trHtml += `<tr>`
        // 头像
        trHtml += createFace(data)
        // 姓名
        trHtml += createName(data)
        // 性别
        trHtml += createGender(data)
        // 年龄
        trHtml += createAge(data)
        // 手机号
        trHtml += createPhone(data) 
        // 国籍
        trHtml += createCountry(data)
        // 爱好
        trHtml += createLike(data)
        // 头衔
        trHtml += createRank(data)
        // 操作
        trHtml += createOperationBtn()
        // 结束tr
        trHtml += `</tr>`
    }
    return trHtml;
}
/**
 * 生成头像
 */
function createFace(data){
    // 业务处理
    let html = `<td>
                    <div class="face">
                        <span class="gender icon-${data.face.gender}"></span>
                        <img src="${data.face.img}" alt="">
                    </div>
                </td>`;
    return html;
}
/**
 * 生成姓名
 */
function createName(data){
    let html = `<td>
                    <div class="people-name">
                        <h4 class="name">${data.name.trueName}</h4>
                        <span class="nickname option-05 fs-12">昵称：${data.name.trueName}</span>
                    </div>
                </td>`;
    return html;
}
/**
 * 生成性别
 */
function createGender(data){
    let html = `<td>
                    <div class="gender-wrap">
                        <span class="gender icon-girl ${data.face.gender === 'girl' ? '' : 'option-05'}"></span>
                        <span class="gender icon-boy ${data.face.gender === 'boy' ? '' : 'option-05'}"></span>
                    </div>
                </td>`;
    return html;
}
/**
 * 生成年龄
 */
function createAge(data){
    let html = `<td>
                    <div class="age text-center">
                        <p>${data.age.number}</p>
                        <span class="option-05 fs-12">（单身狗）</span>
                    </div>
                </td>`;
    return html;
}
/**
 * 手机号
 */
function createPhone(data){
    let html = `<td>
                    <div class="phone">
                        ${data.phone.code}<span class="option-05">（中国）</span><br />
                        ${data.phone.number}
                    </div>
                </td>`;
    return html;
}
/**
 * 生成国籍
 */
function createCountry(data){
    let html = `<td>
                    <div>
                        <img src="${data.country.National_flag}" alt="${data.country.name}">
                        <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
                    </div>
                </td>`;
    return html;
}
/**
 * 生成爱好
 */
function createLike(data){
    let html = ``;
    let likeHtml = ``;
    // 循环生成span
    data.like.forEach(item => {
        likeHtml += `<span style="background-color: ${item.color};">${item.tag}</span>`
    })
    // 生成td
    html = `<td><div class="likes">${likeHtml}</div></td>` 
    return html;
}
/**
 * 生成头衔
 */
function createRank(data, number = ''){
    let num = number == '' ? 16.66666 : number;
    let html = `<td>
                    <div class="grade">
                        <span class="role-name">${data.rank.name}</span>
                        <div class="grade-wrap icon-grade">
                            <div class="grade-high icon-grade" style="width: ${data.rank.level * num}%"></div>
                        </div>
                    </div>
                </td>`;
    return html;
}
/**
 * 生成操作
 */
function createOperationBtn(){
    return `<td>
                <div class="operation">
                    <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                        <a href="javascript: void(0);">编辑</a>
                        <a href="javascript: void(0);">删除</a>
                        <a href="javascript: void(0);">锁定</a>
                        <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
            </td>`
}