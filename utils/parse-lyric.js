// [00:15.37]追究什么对错 你的谎言
const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lrcSring) {
  const lyricInfos = []

  const lyricLines = lrcSring.split("\n")
  console.log(lyricLines);
  for (const lineString of lyricLines) {
    const results = timeReg.exec(lineString)
    if(!results) continue
    const minute = results[1] * 60 * 1000
    const second = results[2] * 1000
    const mSecond = results[3].length === 2 ? results[3] * 10 : results[3] * 1
    const time  = minute + second + mSecond
    // 搜索正则匹配到的字符串，用""替代
    const text = lineString.replace(timeReg, '')

    if (text) {
      lyricInfos.push({time, text})
    }
  }
  return lyricInfos
}