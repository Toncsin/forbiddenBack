/*禁用浏览器的后退事件 , 包括 键盘、鼠标手势等产生的后退动作 , 防止误操作 */
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});