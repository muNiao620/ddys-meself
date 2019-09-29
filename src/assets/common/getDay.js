export const invertWeeek = (weekStr)=>{
  if(!weekStr) return ''
  const regWeek = {
    '周一': '周一',
    '周二': '周二',
    '周三': '周三',
    '周四': '周四',
    '周五': '周五',
    '周六': '周六',
    '周日': '周日'
  }
  weekStr && weekStr.split(',').map( day => {
    delete regWeek[day]
  })
  return regWeek
}