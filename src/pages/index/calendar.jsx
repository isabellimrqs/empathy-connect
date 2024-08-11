import React, { useState, useEffect } from "react";
import styleCalendar from "./calendar.module.css";

const calendar = () => {
    const [today, setToday] = useState(new Date());
    const [activeDay, setActiveDay] = useState(today.getDate());
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [eventsArr, setEventsArr] = useState([]);

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    useEffect(() => {
        getEvents();
        initCalendar();
    }, [month, year]);

    const getEvents = () => {
        try {
            const events = localStorage.getItem("events");
            if (events) {
                setEventsArr(JSON.parse(events));
            }
            console.log('socorro')
        } catch (error) {
            console.log(error)
        }
    };
    
    const saveEvents = () => {
        localStorage.setItem("events", JSON.stringify(eventsArr));
    };

    const obterNomeDiaEmPortugues = (diaSemana) => {
    const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sexta", "Sáb"];
    return diasDaSemana[diaSemana];
    };

    const getActiveDay = (date) => {
      const day = new Date(year, month, date);
      const nomeDia = obterNomeDiaEmPortugues(day.getDay());
      document.querySelector(`.${styleCalendar.eventDay}`).innerHTML = nomeDia;
      document.querySelector(`.${styleCalendar.eventDate}`).innerHTML = `${date} ${months[month]} ${year}`;
    };

    
    const updateEvents = (date) => {
    let events = "";
    eventsArr.forEach((event) => {
        if (
        date === event.day &&
        month + 1 === event.month &&
        year === event.year
        ) {
        event.events.forEach((event) => {
            events += `<div class="${styleCalendar.event}">
                        <div>${event.title}</div>
                        <div>${event.time}</div>
                    </div>`;
        });
        }
    });
    // if (events === "") {
    //     events = `<div class="${styleCalendar.noEvent}">
    //                 <h3>Nenhum evento</h3>
    //             </div>`;
    // }
    document.querySelector(`.${styleCalendar.events}`).innerHTML = events;
    saveEvents();
    };

    const addEvent = (title, timeFrom, timeTo) => {
    if (!title || !timeFrom || !timeTo) {
        alert("Please fill all the fields");
        return;
    }

    const timeFromArr = timeFrom.split(":");
    const timeToArr = timeTo.split(":");
    if (
        timeFromArr.length !== 2 ||
        timeToArr.length !== 2 ||
        timeFromArr[0] > 23 ||
        timeFromArr[1] > 59 ||
        timeToArr[0] > 23 ||
        timeToArr[1] > 59
    ) {
        alert("Invalid Time Format");
        return;
    }

    const timeFromFormatted = convertTime(timeFrom);
    const timeToFormatted = convertTime(timeTo);

    let eventExist = false;
    eventsArr.forEach((event) => {
        if (
        event.day === activeDay &&
        event.month === month + 1 &&
        event.year === year
        ) {
        event.events.forEach((event) => {
            if (event.title === title) {
            eventExist = true;
            }
        });
        }
    });
    if (eventExist) {
        alert("Event already added");
        return;
    }

    const newEvent = {
        title: title,
        time: `${timeFromFormatted} - ${timeToFormatted}`,
    };

    let updatedEvents = [...eventsArr];
    let eventAdded = false;

    if (updatedEvents.length > 0) {
        updatedEvents.forEach((item) => {
        if (
            item.day === activeDay &&
            item.month === month + 1 &&
            item.year === year
        ) {
            item.events.push(newEvent);
            eventAdded = true;
        }
        });
    }

    if (!eventAdded) {
        updatedEvents.push({
        day: activeDay,
        month: month + 1,
        year: year,
        events: [newEvent],
        });
    }

    setEventsArr(updatedEvents);
    updateEvents(activeDay);
    const activeDayEl = document.querySelector(`.${styleCalendar.day}.${styleCalendar.active}`);
    if (!activeDayEl.classList.contains(styleCalendar.event)) {
        activeDayEl.classList.add(styleCalendar.event);
    }
    };

    const convertTime = (time) => {
    let [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
    };

    const initCalendar = () => {
        try {
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const prevLastDay = new Date(year, month, 0);
            const prevDays = prevLastDay.getDate();
            const lastDate = lastDay.getDate();
            const day = firstDay.getDay();
            const nextDays = 7 - lastDay.getDay() - 1;
            
            console.log(lastDay);
            console.log(firstDay);
            console.log(day);
            console.log(7 - (lastDay.getDay() - 1));
            console.log(nextDays);
            
            let days = [];
            
            for (let x = day; x > 0; x--) {
                days.push(<div className={`${styleCalendar.day} ${styleCalendar.prevDate}`}>{prevDays - x + 1}</div>);
            }
            
            for (let j = 1; j <= nextDays; j++) {
                console.log('next days')
                days.push(<div className={`${styleCalendar.day} ${styleCalendar.nextDate}`}>{j}</div>);
            }

            console.log(eventsArr);

            for (let i = 1; i <= lastDate; i++) {
                let event = false;
                if(eventsArr.length >= 1){
                    eventsArr.forEach((eventObj) => {
                        if (
                            eventObj.day === i &&
                            eventObj.month === month + 1 &&
                            eventObj.year === year
                        ) {
                            event = true;
                        }
                    });
                }
                if (
                    i === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    console.log(today.getDate());
                    // setActiveDay(i);
                    getActiveDay(i);
                    updateEvents(i);    
                    if (event) {
                        days.push(<div className={`${styleCalendar.day} ${styleCalendar.today} ${styleCalendar.event}`}>{i}</div>);
                    } else {
                        days.push(<div className={`${styleCalendar.day} ${styleCalendar.today} `}>{i}</div>);
                    }
                } else {
                    console.log('socorro3')
                    if (event) {
                        days.push(<div className={`${styleCalendar.day} ${styleCalendar.event}`}>{i}</div>);
                    } else {
                        days.push(<div className={styleCalendar.day}>{i}</div>);
                    }
                }
            }
            console.log('fim')
            console.log(days); 
            return days;
        } catch (error) {
            console.log(error)
        }
    };

    const prevMonth = () => {
        setMonth((prev) => (prev === 0 ? 11 : prev - 1));
        setYear((prev) => (month === 0 ? prev - 1 : prev));
    };

    const nextMonth = () => {
        setMonth((prev) => (prev === 11 ? 0 : prev + 1));
        setYear((prev) => (month === 11 ? prev + 1 : prev));
    };

    return (
        <div className={styleCalendar.container}>
            <div className={styleCalendar.left}>
                <div className={styleCalendar.calendar}>
                    <div className={styleCalendar.month}>
                        <i className={`fas fa-angle-left ${styleCalendar.prev}`} onClick={prevMonth}></i>
                        <div className={styleCalendar.date}>{`${months[month]} ${year}`}</div>
                        <i className={`fas fa-angle-right ${styleCalendar.next}`} onClick={nextMonth}></i>
                    </div>
                    <div className={styleCalendar.weekdays}>
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                    <div className={styleCalendar.days}>
                        {initCalendar()}
                    </div>
                    <div className={styleCalendar.gotoToday}>
                        <div className={styleCalendar.goto}>
                            <input type="text" placeholder="mm/yyyy" className={styleCalendar.dateInput} />
                            <button className={styleCalendar.gotoBtn} onClick={() => gotoDate(document.querySelector(`.${styleCalendar.dateInput}`).value)}>Ir</button>
                        </div>
                        <button className={styleCalendar.todayBtn} onClick={() => { setToday(new Date()); setMonth(today.getMonth()); setYear(today.getFullYear()); }}>Hoje</button>
                    </div>
                </div>
            </div>
            <div className={styleCalendar.right}>
                <div className={styleCalendar.todayDate}>
                    <div className={styleCalendar.eventDay}></div>
                    <div className={styleCalendar.eventDate}></div>
                </div>
                <div className={styleCalendar.events}></div>
                {/* <div className={styleCalendar.addEvent}>
                    <h3>Adicionar Evento</h3>
                    <div>
                        <input type="text" placeholder="Título do Evento" className={styleCalendar.eventTitleInput} />
                        <div>
                            <input type="time" className={styleCalendar.eventTimeFrom} /> - <input type="time" className={styleCalendar.eventTimeTo} />
                        </div>
                    </div>
                    <button className={styleCalendar.addEventBtn} onClick={() => addEvent(
                        document.querySelector(`.${styleCalendar.eventTitleInput}`).value,
                        document.querySelector(`.${styleCalendar.eventTimeFrom}`).value,
                        document.querySelector(`.${styleCalendar.eventTimeTo}`).value
                    )}>Adicionar Evento</button>
                </div> */}
            </div>
        </div>
        
        
    );
};

export default calendar;
