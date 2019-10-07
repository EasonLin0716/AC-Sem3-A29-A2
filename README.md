# AC-Sem3-A29-2
Solution:
1. 在 app.js 加入
```
app.get('/favicon.ico', (req, res) => res.status(204))
```
防止 favicon.ico 被 GET

2. 新增一個 .js 作為 middleware，透過 Date.now() 取得送出請求當下的毫秒
3. 在收到回應的當下，取得該時間顯示於終端機，並將花費時間透過 Date.now() 相減取得花費毫秒數