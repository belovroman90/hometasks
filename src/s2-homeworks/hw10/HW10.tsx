import React from 'react'
import s from './HW10.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент

    const isLoading = useSelector<AppStoreType, { isLoading: boolean }>(state => state.loading)

    const dispatch = useDispatch()

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
    }

    return (
        <div id={'hw10'} className={s.main}>
            <div className={s2.hwTitle}>Hometask № 10</div>
            <hr className={s2.hr}/>
            <div className={s.content}>

                {isLoading.isLoading ? (
                    <div id={'hw10-loading'} className={s.loader}>
                        <Loader/>
                    </div>
                ) : (
                    <div className={s.button}>
                        <SuperButton
                            id={'hw10-button-start-loading'}
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    </div>
                )}
            </div>
            <hr className={s2.hr}/>
        </div>
    )
}

export default HW10
