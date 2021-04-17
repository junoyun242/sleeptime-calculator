import moment from "moment";
import { useEffect, useState } from "react";

function Main() {
  const date = moment();
  const [currentDate, setCurrentDate] = useState<string>(
    date.format("YYYY-MM-DD")
  );
  const [currentTime, setCurrentTime] = useState<string>(date.format("hh:mm"));
  const [currentHour, setCurrentHour] = useState<number>(0);
  const [currentMinutes, setCurrentMinutes] = useState<number>(0);
  const [result, setResult] = useState<string>(
    date.format("YYYY-MM-DD hh:mm A")
  );
  const [weekday, setWeekday] = useState<string>(date.format("e"));

  const formatDateTime = (date: string) => {
    setCurrentDate(date.slice(0, 10));
    setCurrentTime(date.slice(11));
  };

  useEffect(() => {
    date.set({
      year: Number(currentDate?.slice(0, 4)),
      month: Number(currentDate?.slice(5, 7)) - 1,
      date: Number(currentDate?.slice(8, 10)),
      hour: Number(currentTime?.slice(0, 2)),
      minute: Number(currentTime?.slice(3)),
    });

    date.add({
      hours: currentHour,
      minute: currentMinutes,
    });

    console.log(currentTime?.slice(3));
    setResult(date.format("YYYY-MM-DD hh:mm A"));

    switch (Number(date.format("e"))) {
      case 0:
        setWeekday("일");
        break;
      case 1:
        setWeekday("월");
        break;
      case 2:
        setWeekday("화");
        break;
      case 3:
        setWeekday("수");
        break;
      case 4:
        setWeekday("목");
        break;
      case 5:
        setWeekday("금");
        break;
      case 6:
        setWeekday("토");
        break;
    }
    console.log(result);
  }, [currentDate, currentTime, currentHour, currentMinutes]);
  return (
    <main className="py-6 flex flex-col items-center bg-gray-600 h-screen md:flex-row md:justify-evenly md:items-start">
      <div className="flex flex-col justify-center items-center bg-blue-500 text-gray-300 w-4/5 py-3 px-3 mb-8 md:w-2/5 md:mb-0">
        <h3 className="text-lg my-2">When will you sleep?</h3>
        <input
          type="datetime-local"
          className="p-0.5 my-2 text-black"
          onChange={(e) => formatDateTime(e.target.value)}
        />
        <h3 className="text-lg my-2">How long will you sleep?</h3>
        <div className="flex justify-center items-center my-2">
          <input
            type="number"
            className="p-1 w-1/3 text-black"
            onChange={(e) => setCurrentHour(Number(e.target.value))}
          />
          <p className="pl-1 pr-3">시간</p>
          <input
            type="number"
            className="p-1 w-1/3 text-black"
            max="59"
            onChange={(e) => setCurrentMinutes(Number(e.target.value))}
          />
          <p className="pl-1 pr-3">분</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-purple-300 w-4/5 py-3 md:w-2/5">
        <h3 className="text-lg my-2">You will wake up at</h3>
        <div className="flex justify-center items-center my-2">
          <p className="pr-2">{result}</p>
          <p>{weekday}</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
