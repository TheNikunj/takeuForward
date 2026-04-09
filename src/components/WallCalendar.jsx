import React, { useState, useEffect } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
  startOfDay,
  getDay,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "../assets/hero-image.png";
import "./WallCalendar.css";

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const WallCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selection, setSelection] = useState({ start: null, end: null });
  const [notes, setNotes] = useState("");

  const currentMonthKey = format(currentDate, "yyyy-MM");

  useEffect(() => {
    const savedNotes = localStorage.getItem(
      `calendar_notes_${currentMonthKey}`,
    );
    setNotes(savedNotes || "");
  }, [currentMonthKey]);

  const handleNotesChange = (e) => {
    const val = e.target.value;
    setNotes(val);
    localStorage.setItem(`calendar_notes_${currentMonthKey}`, val);
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const onDateClick = (day) => {
    if (!selection.start || (selection.start && selection.end)) {
      setSelection({ start: day, end: null });
    } else if (selection.start && !selection.end) {
      if (isBefore(day, selection.start)) {
        setSelection({ start: day, end: selection.start });
      } else {
        setSelection({ start: selection.start, end: day });
      }
    }
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const today = startOfDay(new Date());

  const getDayClasses = (day) => {
    let classes = ["day-cell"];

    const dayOfWeek = getDay(day);
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      classes.push("weekend");
    }

    if (!isSameMonth(day, monthStart)) {
      classes.push("empty");
      return classes.join(" ");
    }

    if (isSameDay(day, today)) classes.push("today");

    if (selection.start && isSameDay(day, selection.start)) {
      classes.push("start", "in-range");
    }

    if (selection.end && isSameDay(day, selection.end)) {
      classes.push("end", "in-range");
    }

    if (selection.start && selection.end) {
      if (isAfter(day, selection.start) && isBefore(day, selection.end)) {
        classes.push("in-range");
      }
    }

    return classes.join(" ");
  };

  return (
    <div className="wall-calendar-container fade-in">
      <div className="calendar-paper">
        {/* Wire & Coils Section with authentic wire-hanger element */}
        <div className="binding-area">
          {/* Authentic metallic nail/hook that the calendar hangs on */}
          <div className="nail-container">
            <svg className="nail-svg" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="4" fill="#52525b" />
              <circle cx="9" cy="9" r="2" fill="#71717a" />
            </svg>
          </div>

          <svg
            className="wire-hanger"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            {/* Structural horizontal wire with refined 'hump' geometry for high parity */}
            <path 
              className="wire-base" 
              d="M 0,15 L 43,15 Q 45,15 46,12 L 47,10 Q 50,6 53,10 L 54,12 Q 55,15 57,15 L 100,15" 
            />
            {/* Highlight layer for cylindrical 3D effect */}
            <path 
              className="wire-highlight" 
              d="M 0,14.5 L 43,14.5 Q 45,14.5 46,11.5 L 47,9.5 Q 50,5.5 53,9.5 L 54,11.5 Q 55,14.5 57,14.5 L 100,14.5" 
            />
          </svg>
          
          <div className="spiral-binder">
            {/* Grouping coils into pairs to mimic a Twin-loop binding system */}
            {Array.from({ length: 38 }).map((_, pairIdx) => {
              const centerIdx = 19;
              const isHidden = Math.abs(pairIdx - centerIdx) < 2;
              
              if (isHidden) return <div key={pairIdx} className="coil-pair hidden" />;
              
              return (
                <div key={pairIdx} className="coil-pair">
                  <div className="coil"></div>
                  <div className="coil"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HERO WRAPPER - Refined Wave Architecture */}
        <div className="hero-wrapper">
          <div 
            className="hero-image-container"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          {/* PRO-TIP: Precise SVG Geometry perfectly replicating the physical calendar structure */}
          <svg className="hero-curves" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* 1. Solid Blue Base Layer: photo boundaries forming a perfectly symmetric V-channel */}
            <path
              d="M 0,100 L 0,55 L 30,73 Q 33.75,75.25 37.5,75.25 Q 41.25,75.25 45,73 L 100,40 L 100,100 Z"
              fill="#1e8cd6" 
            />

            {/* 2. White Mask: Replaces the sweeping belly with a sharp parallel ribbon featuring a precise tiny border radius at the vertex */}
            <path
              d="M 0,100 L 0,85 L 20,67 L 30,73 Q 33.75,75.25 37.5,75.25 L 66,92.4 Q 68.5,93.9 71,92.4 L 100,75 L 100,100 Z"
              fill="white"
            />
          </svg>

          <div className="header-text">
            <div className="year">2022</div>
            <div className="month">JANUARY</div>
          </div>

          <div className="nav-buttons" style={{ opacity: 0.4 }}>
            <button
              className="nav-btn"
              onClick={prevMonth}
              aria-label="Previous Month"
            >
              <ChevronLeft size={16} strokeWidth={1} style={{ opacity: 0.7 }} />
            </button>
            <button
              className="nav-btn"
              onClick={nextMonth}
              aria-label="Next Month"
            >
              <ChevronRight
                size={16}
                strokeWidth={1}
                style={{ opacity: 0.7 }}
              />
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">
          <div className="notes-area">
            <div className="notes-title">Notes</div>
            <textarea
              className="notes-lines"
              value={notes}
              onChange={handleNotesChange}
              placeholder=""
              spellCheck="false"
            />
          </div>

          <div className="calendar-grid">
            <div className="weekdays">
              {weekDays.map((d, i) => (
                <div key={d} className={i >= 5 ? "weekend-text" : ""}>
                  {d}
                </div>
              ))}
            </div>
            <div className="days-grid">
              {days.map((day, idx) => {
                const formattedDate = format(day, "d");
                const isCurrentMonth = isSameMonth(day, monthStart);

                return (
                  <div
                    key={day.toString()}
                    className={getDayClasses(day)}
                    onClick={() => isCurrentMonth && onDateClick(day)}
                  >
                    <div className="selection-bg"></div>
                    <span className="day-number">
                      {formattedDate}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subtle grey footer matching realistic calendar block */}
        <div className="footer-strip"></div>
      </div>
    </div>
  );
};

export default WallCalendar;
