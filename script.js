// Повна база даних розкладу ІР-21 (2026 рік)
const scheduleData = [
    // ПОНЕДІЛОК
    { day: 1, time: "09:00-10:20", name: "Менеджмент та маркетинг (Л)", info: "9т (Кухта П.В.) ", dates: ["2026-01-26", "2026-02-02", "2026-02-09", "2026-02-16", "2026-02-23", "2026-03-02", "2026-03-09", "2026-03-16", "2026-03-23"], sub: 0 },
    { day: 1, time: "09:00-10:20", name: "КЛ та дискретна математика (Л)", info: "2т (Дружинін В.А.)", dates: ["2026-03-30", "2026-04-06"], sub: 0 },
    { day: 1, time: "10:30-11:50", name: "Організація баз даних (Л)", info: "12т (Кравченко О.В.)", range: ["2026-01-26", "2026-04-13"], sub: 0 },
    { day: 1, time: "12:10-13:30", name: "Розподілені системи (Л)", info: "8 занять (Кравченко О.В.)", dates: ["2026-01-26", "2026-02-02", "2026-02-16", "2026-03-02", "2026-03-16", "2026-03-30", "2026-04-13", "2026-04-27"], sub: 0 },
    { day: 1, time: "12:10-13:30", name: "Основи схемотехніки (Л)", info: "9 занять (Дружинін В.А.)", dates: ["2026-02-09", "2026-02-23", "2026-03-09", "2026-03-23", "2026-04-06", "2026-04-20", "2026-05-04", "2026-05-11", "2026-05-18"], sub: 0 },

    // ВІВТОРОК
    { day: 2, time: "09:00-10:20", name: "Іноземна мова (Пр)", info: "14т (Вакуленко Т.О.)", range: ["2026-02-10", "2026-05-12"], sub: 1 },
    { day: 2, time: "09:00-10:20", name: "Іноземна мова (Пр)", info: "14т (Голубовська І.О.)", range: ["2026-02-10", "2026-05-12"], sub: 2 },
    { day: 2, time: "10:30-11:50", name: "Менеджмент та маркетинг (С)", info: "17т (Кухта П.В.)", range: ["2026-02-10", "2026-06-02"], sub: 0 },
    { day: 2, time: "12:10-13:30", name: "Організація баз даних (лаб)", info: "9т (Кравченко О.В.)", dates: ["2026-01-27", "2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-21", "2026-05-05", "2026-05-19", "2026-06-02"], sub: 1 },
    { day: 2, time: "12:10-13:30", name: "Основи схемотехніки (лаб)", info: "12т (Дружинін В.А.)", dates: ["2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-14", "2026-04-21", "2026-04-28", "2026-05-05", "2026-05-12", "2026-05-19", "2026-05-26", "2026-06-02"], sub: 2 },
    { day: 2, time: "13:40-15:00", name: "Основи схемотехніки (лаб)", info: "12т", sub: 1, dates: ["2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-14", "2026-04-21", "2026-04-28", "2026-05-05", "2026-05-12", "2026-05-19", "2026-05-26", "2026-06-02"] },
    { day: 2, time: "13:40-15:00", name: "Організація баз даних (лаб)", info: "9т", sub: 2, dates: ["2026-01-27", "2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-21", "2026-05-05", "2026-05-19", "2026-06-02"] },
    { day: 2, time: "15:10-16:30", name: "Організація баз даних (Пр)", info: "Тільки 27.01", dates: ["2026-01-27"], sub: 0 },

    // СЕРЕДА
    { day: 3, time: "09:00-10:20", name: "КЛ та дискретна математика (Л)", info: "13т (Дружинін В.А.)", range: ["2026-02-11", "2026-05-06"], sub: 0 },
    { day: 3, time: "10:30-11:50", name: "Науковий образ світу (Л)", info: "17т (Вишивана І.Г.)", range: ["2026-01-28", "2026-05-20"], sub: 0 },
    { day: 3, time: "12:10-13:30", name: "Побудова та безпека мереж (Л)", info: "14т (Палій С.В.)", range: ["2026-01-28", "2026-04-29"], sub: 0 },

    // ЧЕТВЕР
    { day: 4, time: "10:30-11:50", name: "Організація баз даних (Пр)", info: "7т (Кравченко О.В.)", range: ["2026-02-12", "2026-03-26"], sub: 0 },
    { day: 4, time: "12:10-13:30", name: "КЛ та дискретна математика", info: "14т (Терещук Г.М.)", dates: ["2026-02-12", "2026-02-19","2026-03-12","2026-03-19","2026-03-26","2026-04-02","2026-04-09","2026-04-16","2026-04-23","2026-04-30","2026-05-07", "2026-05-14"], sub: 0 },
    { day: 4, time: "13:40-15:00", name: "КЛ та дискретна математика (Пр)", info: "6т (Терещук Г.М.)", range: ["2026-03-26", "2026-05-14"], sub: 0 },

    // П'ЯТНИЦЯ
    { day: 5, time: "10:30-11:50", name: "Побудова корп. мереж (лаб)", info: "17т (Палій С.В.)", range: ["2026-02-13", "2026-06-05"], sub: 1 },
    { day: 5, time: "10:30-11:50", name: "Розподілені системи (лаб)", info: "17т (Безлугий В.І.)", range: ["2026-02-13", "2026-06-05"], sub: 2 },
    { day: 5, time: "12:10-13:30", name: "Розподілені системи (лаб)", info: "17т (Безлугий В.І.)", range: ["2026-02-13", "2026-06-05"], sub: 1 },
    { day: 5, time: "12:10-13:30", name: "Побудова корп. мереж (лаб)", info: "17т (Михальчук В.В.)", range: ["2026-02-13", "2026-06-05"], sub: 2 },
    { day: 5, time: "13:40-15:00", name: "Побудова корп. мереж (лаб)", info: "3т (Палій С.В.)", dates: ["2026-02-20", "2026-04-03", "2026-04-10"], sub: 1 }
    { day: 5, time: "13:40-15:00", name: "Побудова корп. мереж (лаб)", info: "3т (Михальчук В.В.)", dates: ["2026-02-20", "2026-04-03", "2026-04-10"], sub: 2 },

];

let currentView = 'day';

function setView(view) {
    currentView = view;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + view).classList.add('active');
    refreshView();
}

function refreshView() {
    const sub = parseInt(document.getElementById('subgroup-select').value);
    const pickerValue = document.getElementById('date-picker').value;
    const date = pickerValue ? new Date(pickerValue) : new Date();
    
    if (currentView === 'day') renderDay(date, sub);
    else if (currentView === 'week') renderWeek(date, sub);
    else renderFull(sub);
}

// Покращена логіка фільтрації: підгрупа + спільні пари
function filterLessons(iso, dayNum, subGroup) {
    return scheduleData.filter(l => {
        const isSubMatch = (l.sub === 0 || l.sub === subGroup); // Показуємо спільні АБО обрану підгрупу
        const dateMatch = l.dates && l.dates.includes(iso);
        const rangeMatch = l.range && dayNum === l.day && 
            (new Date(iso) >= new Date(l.range[0]) && new Date(iso) <= new Date(l.range[1]));
        
        return isSubMatch && (dateMatch || rangeMatch);
    });
}

function createCard(l) {
    const typeColor = l.sub === 0 ? '#4285F4' : '#34A853'; // Різні кольори для спільних і груп
    return `<div class="lesson-card" style="border-left-color: ${typeColor}">
        <span class="subgroup-label" style="background: ${typeColor}22; color: ${typeColor}">
            ${l.sub === 0 ? 'Спільна' : l.sub + ' підгрупа'}
        </span>
        <div class="lesson-time">${l.time}</div>
        <div class="name">${l.name}</div>
        <div class="lesson-details">${l.info}</div>
    </div>`;
}

function renderDay(date, sub) {
    const iso = date.toISOString().split('T')[0];
    const lessons = filterLessons(iso, date.getDay(), sub);
    let html = `<h3>${date.toLocaleDateString('uk-UA', {weekday: 'long', day: 'numeric', month: 'long'})}</h3>`;
    html += lessons.length ? lessons.map(createCard).join('') : '<p class="empty">Пар немає</p>';
    document.getElementById('content-area').innerHTML = html;
}

function renderWeek(date, sub) {
    let html = '';
    let tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate() - (tempDate.getDay() === 0 ? 6 : tempDate.getDay() - 1));
    for (let i = 0; i < 6; i++) {
        const iso = tempDate.toISOString().split('T')[0];
        const lessons = filterLessons(iso, tempDate.getDay(), sub);
        html += `<h4 style="border-bottom: 1px solid #ddd; padding-top:10px;">${tempDate.toLocaleDateString('uk-UA', {weekday: 'long', day: 'numeric'})}</h4>`;
        html += lessons.length ? lessons.map(createCard).join('') : '<p style="color:#999; font-size:0.8rem;">Вільно</p>';
        tempDate.setDate(tempDate.getDate() + 1);
    }
    document.getElementById('content-area').innerHTML = html;
}

function renderFull(sub) {
    let html = '<div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">';
    html += '<h3 style="text-align:center;">Повний розклад ІР-21 за датами</h3>';
    
    let current = new Date("2026-01-26");
    let endDate = new Date("2026-06-07");
    let currentMonth = -1;

    while (current <= endDate) {
        if (current.getMonth() !== currentMonth) {
            currentMonth = current.getMonth();
            html += `<h2 style="background:#4285F4; color:white; padding:10px; border-radius:5px; margin-top:30px;">${current.toLocaleDateString('uk-UA', {month: 'long', year: 'numeric'})}</h2>`;
        }

        const iso = current.toISOString().split('T')[0];
        const lessons = filterLessons(iso, current.getDay(), sub);

        if (lessons.length > 0) {
            html += `<div style="margin-bottom:12px; padding:10px; border-bottom:1px solid #eee;">`;
            html += `<strong style="color:#333;">${current.toLocaleDateString('uk-UA', {weekday: 'short', day: 'numeric'})}:</strong>`;
            lessons.forEach(l => {
                const label = l.sub === 0 ? '[Спільна]' : `[${l.sub} підгр.]`;
                html += `<div style="font-size:0.85rem; margin-left:20px; color:#555;">• ${label} ${l.time} - ${l.name}</div>`;
            });
            html += `</div>`;
        }
        current.setDate(current.getDate() + 1);
    }
    html += '</div>';
    document.getElementById('content-area').innerHTML = html;
}

window.onload = () => {
    document.getElementById('date-picker').value = new Date().toISOString().split('T')[0];
    setView('day');
};
