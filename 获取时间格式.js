
function format(i) {
  return i < 10 ? `0${i}` : i
}

// 得到当天X天前的时间，=> 格式为yyyy/mm/dd HH:mm:ss ，如获取昨天的0点,getTime(0)
function getTime(before = 0) {
  let result = new Date(new Date().getTime() - (before * 24 * 60 * 60 * 1000))
  let date = {
    year: result.getFullYear(),
    month: format(result.getMonth() + 1) < 10 ? format(result.getMonth() + 1) : result.getMonth() + 1,
    day: format(result.getDate())
  }

  return `${date.year}/${date.month}/${date.day} 00:00:00`
}

// 传入格式为yyyy-mm-dd HH:mm:ss 类型的时间，获取毫秒时间
function getMillisecond(time) {
  let formatTime = time.replace(new RegExp('-', 'gm'), '/')

  return (new Date(formatTime)).getTime()
}