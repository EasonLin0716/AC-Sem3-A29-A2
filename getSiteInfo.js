// Date.now() 方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。
module.exports = function (req, res, next) {
  let url = req.url
  let reqTime = Date.now()

  res.on('finish', () => {
    const currentTime = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    console.log(`${currentTime} | GET from ${url} | total time: ${Date.now() - reqTime}ms`)
  })

  return next()
}