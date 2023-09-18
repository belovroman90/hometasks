import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <div style={{boxSizing: 'border-box'}} id={'hw9'}>
            <div className={s2.hwTitle}>Homework № 9</div>
            <hr style={{marginBottom: '26px'}} className={s2.hr}/>
            <div className={s2.hw}>
                <Clock/>
            </div>
        </div>
    )
}

export default HW9
