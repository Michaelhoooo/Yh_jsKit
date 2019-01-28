function getList(year, month){
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth[1] = 29;
  }
  // 获得指定年月的1号是星期几
  let targetDay = new Date(year, month, 1).getDay();
  // 将要在calendar__main中渲染的列表
  let total_calendar_list = [];
  let preNum = targetDay;
  // 首先先说一下，我们的日期是(日--六)这个顺序也就是(0--6)
  // 有了上述的前提我们可以认为targetDay为多少，我们就只需要在total_calendar_list的数组中push几个content为''的obj作为占位
  if (targetDay > 0) {
      for (let i = 0; i < preNum; i++) {
          let obj = {
              type: "pre",
              content: ""
          };
          total_calendar_list.push(obj);
      }
  }
for (let i = 0; i < daysInMonth[month]; i++) {
      let obj = {
          type: "normal",
          content: i + 1
      };
          total_calendar_list.push(obj);
  }
  nextNum = 6 - new Date(year, month+1, 0).getDay()
  // 与上面的type=pre同理
  for (let i = 0; i < nextNum; i++) {
      let obj = {
          type: "next",
          content: ""
      };
      total_calendar_list.push(obj);
  }
  return total_calendar_list;

}