import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';


const START_DATE_TYPE = 'startDate';
const END_DATE_TYPE = 'endDate';
const DATE_FORMAT = 'yyyy년 MM월 dd일';
const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';

const DatePickerComponent = () => {
  const [dateRange, setDateRange] = useState([Date.now(), Date.now()]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      dateFormat="yyyy년 MM월 dd일"
      placeholderText="Select Day!"
      locale={ko}
      closeOnScroll={true}    // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
    />
  );
};


// 그리고 나서 dayClassName으로 설정하는데, 무조건 함수를 넘겨줘야 한다.
// 인자값으로 넘어오는 값(d)는 데이트 피커에 표시되는 날짜의 Date형식 값이다.

// 현재 선택된 값이면, selected-day 클래스 네임을 추가한다.
// 기본 값이면 custom-day 클래스 네임만 가진다(이게 날짜들의 기본 style이다)
// 현재 월의 날짜가 아니면 gray-day 클래스 네임을 추가한다.
{/* <DetePicker
locale={ko}
dateFormat="yyyy-MM-dd"
selected={date}
onChange={(selectDate) => setDate(selectDate)}
customInput={<Input />}
onMonthChange={handleMonthChange}
dayClassName={(d) =>
  d.getDate() === date.getDate()
    ? 'custom-day selected-day'
    : d.getMonth() === month
    ? 'custom-day'
    : 'custom-day gray-day'
}
/> */}

export default DatePickerComponent