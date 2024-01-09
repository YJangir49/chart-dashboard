import { Link } from "react-router-dom";
import CustomButton from "../reusable/CustomButton";
import { useState, useEffect, useRef } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { addDays, format } from "date-fns";



export default function LogoSection({
  pageName,
  isLive,
  onLiveChange,
  children,
  runningStatus = 0,
  dateRange
}) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(isLive? { from: null, to: null}:  dateRange)
  const datePickerRef = useRef(null);

  let footer = 
      <div style={{display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start'}}>
        <p>Please pick a date range. </p>
        <button className="text-blue-600 text-sm" onClick={() => setShow(false)}>Close</button>
    </div>;
  
  if (date?.from) {
    if (!date.to) {
      footer = <div style={{display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start'}}>
                <p>{format(date.from, 'PPP')}</p>
                <button className="text-blue-600 text-sm" onClick={
                  () => {
                    setShow(false);
                    setDate({ from: null, to: null})
                  }}>Close</button>
              </div>;
    } else if (date.to) {
      footer = (
        <div style={{display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start'}}>
          <p>{format(date.from, 'PPP')}–{format(date.to, 'PPP')}</p>
          <button className="text-blue-600 text-sm" onClick={(e) => {
            setShow(false)
            onLiveChange({ live: false, date})
          }}>Ok</button>
        </div>
      );
    }
  }

  const handleClickOutside = (event) => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-full flex-col ">
      <div className="flex justify-between p-2">
        <div className="w-16 h-16">
          <img
            height={"100%"}
            width={"100%"}
            src="/images/unilever-logo.png"
            alt="logo"
          />
        </div>

        <div className="flex">
          <CustomButton name={pageName} status={runningStatus} />
          <Link to="/">
            <div className="w-8 h-8 mt-2 ml-2 cursor-pointer">
              <img
                height={"100%"}
                width={"100%"}
                src="/images/home-icon.png"
                alt="home-icon"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col flex-1  justify-end">
        <div className="flex justify-between items-center px-2 font-bold">
          <p className="text-xs">Log-Time</p>
          <div className="flex items-center text-xs gap-4 relative">
            <label
              className="flex align-middle gap-1"
              onClick={() => onLiveChange({ live: true, date: {from: addDays(new Date(), -10), to: new Date()} })}
            >
              <input type="radio" value="live" checked={isLive} />
              Live
            </label>

            <label
              className="flex align-middle gap-1"
              onClick={() => setShow(true)}
            >     
              <input type="radio" checked={!isLive} />

              Specific Time
            </label>
            {show &&
            <div ref={datePickerRef}>
              <DayPicker
                
                id="test"
                mode="range"
                style={{
                  background: 'white',
                  zIndex: 9999,
                  padding: 16,
                  position: 'absolute',
                  top: '100%',
                  left: '30%'
                }}
                selected={date}
                onSelect={setDate}
                footer={footer} 
              /></div>}
          </div>
          
        </div>
        {children}
      </div>
    </div>
  );
}
