// Повна база даних розкладу ІР-21 (2026 рік)
const scheduleData = [
    // ПОНЕДІЛОК
    { day: 1, time: "09:00-10:20", name: "Менеджмент та маркетинг (Л)", info: "9т (Кухта П.В.) ", link: "https://www.google.com/url?q=https://us05web.zoom.us/j/8336541798?pwd%3DUgaV2fwPRbrMDV4Njf2S3VaAzi5sSt.1&sa=D&source=editors&ust=1774220036237237&usg=AOvVaw1vOi-4vOj2jmIZy0rijPYY", dates: ["2026-01-26", "2026-02-02", "2026-02-09", "2026-02-16", "2026-02-23", "2026-03-02", "2026-03-09", "2026-03-16", "2026-03-23"], sub: 0 },
    { day: 1, time: "09:00-10:20", name: "КЛ та дискретна математика (Л)", info: "2т (Дружинін В.А.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AHkj3ll4ll09M0ZlhUKWV7v3Y8eB26oV8yDhcvTLO8e01%2540thread.tacv2/conversations?groupId%3D8c372305-903b-4da6-b35d-053dcc935568%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036241318&usg=AOvVaw3qhqVs8M4ENHwBbtKScWvU", dates: ["2026-03-30", "2026-04-06"], sub: 0 },
    { day: 1, time: "10:30-11:50", name: "Організація баз даних (Л)", info: "12т (Кравченко О.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/32752717408621?p%3DGlm4WUOMIb0GK66rE7&sa=D&source=editors&ust=1774220036249960&usg=AOvVaw11yxpHc01C5kpuXMUn2LZp", range: ["2026-01-26", "2026-04-13"], sub: 0 },
    { day: 1, time: "12:10-13:30", name: "Розподілені системи (Л)", info: "8т (Кравченко О.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/39511022754590?p%3DWmdeNFrT7A9zLhcUQJ&sa=D&source=editors&ust=1774220036256446&usg=AOvVaw3aqVU6ClJIcZEltAjViG0h", dates: ["2026-01-26", "2026-02-02", "2026-02-16", "2026-03-02", "2026-03-16", "2026-03-30", "2026-04-13", "2026-04-27"], sub: 0 },
    { day: 1, time: "12:10-13:30", name: "Основи схемотехніки (Л)", info: "9т занять (Дружинін В.А.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253Ab77G_3m5ETgdOYx8w2hx3_oTuNUXvUm8toVX5pPvV6s1%2540thread.tacv2/conversations?groupId%3Df31b3473-db54-461d-ba1e-09282ef939d2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036261859&usg=AOvVaw3pcrx7ZTQcqMzg5EBVYVCV", dates: ["2026-02-09", "2026-02-23", "2026-03-09", "2026-03-23", "2026-04-06", "2026-04-20", "2026-05-04", "2026-05-11", "2026-05-18"], sub: 0 },

    // ВІВТОРОК
    { day: 2, time: "09:00-10:20", name: "Іноземна мова (Пр)", info: "14т (Вакуленко Т.О.)", link: "https://www.google.com/url?q=https://us04web.zoom.us/j/77779060349?pwd%3DPk4eVHiBD5KWjFqhQ9yzqDh0QIpgqO.1&sa=D&source=editors&ust=1774220036316958&usg=AOvVaw28_Ipb4MHJDB-YJ9sk7nc8", range: ["2026-02-10", "2026-05-12"], sub: 1 },
    { day: 2, time: "09:00-10:20", name: "Іноземна мова (Пр)", info: "14т (Голубовська І.О.)", link: "https://www.google.com/url?q=https://us04web.zoom.us/j/76096774044?pwd%3DMkE4M1Fidk1PTnk0NnQ3VVJGRE13QT09&sa=D&source=editors&ust=1774220036317070&usg=AOvVaw1j84F3hPbUJZRXqoq7mZ9K", range: ["2026-02-10", "2026-05-12"], sub: 2 },
    { day: 2, time: "10:30-11:50", name: "Менеджмент та маркетинг (С)", info: "17т (Кухта П.В.)", link: "https://www.google.com/url?q=https://us05web.zoom.us/j/8336541798?pwd%3DUgaV2fwPRbrMDV4Njf2S3VaAzi5sSt.1&sa=D&source=editors&ust=1774220036325284&usg=AOvVaw0dwGkSv_kF2RfMdQtTRVqP", range: ["2026-02-10", "2026-06-02"], sub: 0 },
    { day: 2, time: "12:10-13:30", name: "Організація баз даних (лаб)", info: "9т (Кравченко О.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/3201097711308?p%3D1VbyYOALmR30TeWZRq&sa=D&source=editors&ust=1774220036336603&usg=AOvVaw1hg-_F1lz8aXzusXuld3Jh", dates: ["2026-01-27", "2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-21", "2026-05-05", "2026-05-19", "2026-06-02"], sub: 1 },
    { day: 2, time: "12:10-13:30", name: "Основи схемотехніки (лаб)", info: "12т (Дружинін В.А.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253Ab77G_3m5ETgdOYx8w2hx3_oTuNUXvUm8toVX5pPvV6s1%2540thread.tacv2/conversations?groupId%3Df31b3473-db54-461d-ba1e-09282ef939d2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036336708&usg=AOvVaw0RKqwqsGvkC5qMayCtwLUW", dates: ["2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-14", "2026-04-21", "2026-04-28", "2026-05-05", "2026-05-12", "2026-05-19", "2026-05-26", "2026-06-02"], sub: 2 },
    { day: 2, time: "13:40-15:00", name: "Основи схемотехніки (лаб)", info: "12т (Дружинін В.А.)", sub: 1, link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253Ab77G_3m5ETgdOYx8w2hx3_oTuNUXvUm8toVX5pPvV6s1%2540thread.tacv2/conversations?groupId%3Df31b3473-db54-461d-ba1e-09282ef939d2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036347850&usg=AOvVaw2lv3i8AakJVQrjIgh-O0-i", dates: ["2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-14", "2026-04-21", "2026-04-28", "2026-05-05", "2026-05-12", "2026-05-19", "2026-05-26", "2026-06-02"] },
    { day: 2, time: "13:40-15:00", name: "Організація баз даних (лаб)", info: "9т (Кравченко О.В.)", sub: 2, link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/35622238380684?p%3DOklklKTSTLXVVvKIhQ&sa=D&source=editors&ust=1774220036347970&usg=AOvVaw2rRkX0yEHR71W3L7JZWwlG", dates: ["2026-01-27", "2026-02-24", "2026-03-10", "2026-03-24", "2026-04-07", "2026-04-21", "2026-05-05", "2026-05-19", "2026-06-02"] },
    { day: 2, time: "15:10-16:30", name: "Організація баз даних (Пр)", info: "Тільки 27.01", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/32752717408621?p%3DGlm4WUOMIb0GK66rE7&sa=D&source=editors&ust=1774220036359006&usg=AOvVaw1Kko0Xy3tFD2yANJqEyejR", dates: ["2026-01-27"], sub: 0 },

    // СЕРЕДА
    { day: 3, time: "09:00-10:20", name: "КЛ та дискретна математика (Л)", info: "13т (Дружинін В.А.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AHkj3ll4ll09M0ZlhUKWV7v3Y8eB26oV8yDhcvTLO8e01%2540thread.tacv2/conversations?groupId%3D8c372305-903b-4da6-b35d-053dcc935568%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036390130&usg=AOvVaw36T0sXzM6BPjm2MrgSEEuf", range: ["2026-02-11", "2026-05-06"], sub: 0 },
    { day: 3, time: "10:30-11:50", name: "Науковий образ світу (Л)", info: "17т (Вишивана І.Г.)", link: "https://www.google.com/url?q=https://meet.google.com/pwh-mpcq-ced&sa=D&source=editors&ust=1774220036398580&usg=AOvVaw29Ou6OkAjVk-gwvX1XCXAN", range: ["2026-01-28", "2026-05-20"], sub: 0 },
    { day: 3, time: "12:10-13:30", name: "Побудова та безпека мереж (Л)", info: "14т (Палій С.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AZGM-JbZQH1jth3xw1akbbxmwD6df6qQxiMh_VlZZTUE1%2540thread.tacv2/conversations?groupId%3D8a890812-182c-4988-a40c-62d4f335f4b2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036405993&usg=AOvVaw0lvHts8I98MeCwkDKp6Iax", range: ["2026-01-28", "2026-04-29"], sub: 0 },

    // ЧЕТВЕР
    { day: 4, time: "10:30-11:50", name: "Організація баз даних (Пр)", info: "7т (Кравченко О.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/39415958595572?p%3D0smc1vyY9SqAuv8dzf&sa=D&source=editors&ust=1774220036456676&usg=AOvVaw0hJY-i3mt9Sf2vO5EW-emq", range: ["2026-02-12", "2026-03-26"], sub: 0 },
    { day: 4, time: "12:10-13:30", name: "КЛ та дискретна математика", info: "12т (Терещук Г.М.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AHkj3ll4ll09M0ZlhUKWV7v3Y8eB26oV8yDhcvTLO8e01%2540thread.tacv2/conversations?groupId%3D8c372305-903b-4da6-b35d-053dcc935568%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036463744&usg=AOvVaw3LaQWdJFV9YvhcUhasTrm_", dates: ["2026-02-12", "2026-02-19","2026-03-12","2026-03-19","2026-03-26","2026-04-02","2026-04-09","2026-04-16","2026-04-23","2026-04-30","2026-05-07", "2026-05-14"], sub: 0 },
    { day: 4, time: "13:40-15:00", name: "КЛ та дискретна математика (Пр)", info: "8т (Терещук Г.М.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AHkj3ll4ll09M0ZlhUKWV7v3Y8eB26oV8yDhcvTLO8e01%2540thread.tacv2/conversations?groupId%3D8c372305-903b-4da6-b35d-053dcc935568%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036471228&usg=AOvVaw1qSMS9ZiVvFjS4ux5vYib6", range: ["2026-03-26", "2026-05-14"], sub: 0 },

    // П'ЯТНИЦЯ
    { day: 5, time: "10:30-11:50", name: "Побудова корп. мереж (лаб)", info: "17т (Палій С.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AZGM-JbZQH1jth3xw1akbbxmwD6df6qQxiMh_VlZZTUE1%2540thread.tacv2/conversations?groupId%3D8a890812-182c-4988-a40c-62d4f335f4b2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036520064&usg=AOvVaw14Ua1TQHxX1-UOHqe8jtrx", range: ["2026-02-13", "2026-06-05"], sub: 1 },
    { day: 5, time: "10:30-11:50", name: "Розподілені системи (лаб)", info: "17т (Безлугий В.І.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/37998531661439?p%3DeXzE6Hcha8jJ3gsyuQ&sa=D&source=editors&ust=1774220036520158&usg=AOvVaw0UYrK-WV5KffolWjhXccf9", range: ["2026-02-13", "2026-06-05"], sub: 2 },
    { day: 5, time: "12:10-13:30", name: "Розподілені системи (лаб)", info: "17т (Безлугий В.І.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/meet/34726535254170?p%3D6huYoV51kP4b1vakIR&sa=D&source=editors&ust=1774220036526707&usg=AOvVaw1-oNbh7Q4X9Hk8tmrNlqYT", range: ["2026-02-13", "2026-06-05"], sub: 1 },
    { day: 5, time: "12:10-13:30", name: "Побудова корп. мереж (лаб)", info: "17т (Михальчук В.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AZGM-JbZQH1jth3xw1akbbxmwD6df6qQxiMh_VlZZTUE1%2540thread.tacv2/conversations?groupId%3D8a890812-182c-4988-a40c-62d4f335f4b2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036526802&usg=AOvVaw0_0Vmt6hCA56rR9URJEyEP", range: ["2026-02-13", "2026-06-05"], sub: 2 },
    { day: 5, time: "13:40-15:00", name: "Побудова корп. мереж (лаб)", info: "3т (Палій С.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AZGM-JbZQH1jth3xw1akbbxmwD6df6qQxiMh_VlZZTUE1%2540thread.tacv2/conversations?groupId%3D8a890812-182c-4988-a40c-62d4f335f4b2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036533512&usg=AOvVaw1XS1s6Rd4KWJbcoHlUX7Gs", dates: ["2026-02-20", "2026-04-03", "2026-04-10"], sub: 1 },
    { day: 5, time: "13:40-15:00", name: "Побудова корп. мереж (лаб)", info: "3т (Михальчук В.В.)", link: "https://www.google.com/url?q=https://teams.microsoft.com/l/team/19%253AZGM-JbZQH1jth3xw1akbbxmwD6df6qQxiMh_VlZZTUE1%2540thread.tacv2/conversations?groupId%3D8a890812-182c-4988-a40c-62d4f335f4b2%26tenantId%3D11bdc4c0-f87d-4025-84ee-777d1d7ffc4d&sa=D&source=editors&ust=1774220036533644&usg=AOvVaw38tYs1aXGn9hvAGtW_SVNY", dates: ["2026-02-20", "2026-04-03", "2026-04-10"], sub: 2 },

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
        
        ${l.link ? `<a href="${l.link}" class="lesson-link" target="_blank">Посилання</a>` : ''}
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
