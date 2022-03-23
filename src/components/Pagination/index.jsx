import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './pagination.css'

const Pagination = ({currentPage, totalPages}) => {

    const [valueOfBtns, setValueOfBtns] = useState({
        secondBtn: '2',
        thirdBtn: '3',
        fourthBtn: '4',
        fivethBtn: '...'
    })

    const calculateValuesOfBtn = () => {
        if(currentPage < Math.ceil(totalPages / 2)){ // если currentPage находится меньше половины всех страниц

            if(currentPage > 3) { // если currentPage больше 3, то оставляем первую страницу и до многоточия меняем страницы
                setValueOfBtns({
                    secondBtn: currentPage - 1,
                    thirdBtn: currentPage,
                    fourthBtn: currentPage + 1,
                    fivethBtn: '...'
                })
            }else {
                setValueOfBtns({
                    secondBtn: '2',
                    thirdBtn: '3',
                    fourthBtn: '4',
                    fivethBtn: '...'
                })
            }

        }else {
            if(currentPage <= (totalPages - 2)) { // если currentPage меньше (всех страниц минус 2), то оставляем первую и последнею страницу и передвигаем многоточие на 2 кнопку
                setValueOfBtns({
                    secondBtn: '...',
                    thirdBtn: currentPage - 1,
                    fourthBtn: currentPage,
                    fivethBtn: currentPage + 1
                })
            }else {
                setValueOfBtns({
                    secondBtn: '...',
                    thirdBtn: totalPages - 3,
                    fourthBtn: totalPages - 2,
                    fivethBtn: totalPages - 1
                })
            }
        }
    }

    useEffect(() => {
        calculateValuesOfBtn()
    }, [currentPage, totalPages])

    return (
        <div className='pagination'>
        
            <NavLink to={`/p/${currentPage - 1}`} className={`pagination-btn ${currentPage === 1 ? 'disabled' : '' }`}>
                <FontAwesomeIcon icon={faArrowLeft} /> 
            </NavLink>
            <NavLink to={'/p/1'} className={`pagination-btn ${currentPage === 1 ? 'opened' : '' }`}>
                1
            </NavLink>
            <NavLink to={`/p/${valueOfBtns.secondBtn}`} className={`pagination-btn ${valueOfBtns.secondBtn === '...' ? 'disabled' : currentPage === +valueOfBtns.secondBtn ? 'opened' : '' }`}>
                {valueOfBtns.secondBtn}
            </NavLink>
            <NavLink to={`/p/${valueOfBtns.thirdBtn}`} className={`pagination-btn ${currentPage === +valueOfBtns.thirdBtn ? 'opened' : '' }`}>
                {valueOfBtns.thirdBtn}
            </NavLink>
            <NavLink to={`/p/${valueOfBtns.fourthBtn}`} className={`pagination-btn ${currentPage === +valueOfBtns.fourthBtn ? 'opened' : '' }`}>
                {valueOfBtns.fourthBtn}
            </NavLink>
            <NavLink to={`/p/${valueOfBtns.fivethBtn}`} className={`pagination-btn ${valueOfBtns.fivethBtn === '...' ? 'disabled' : currentPage === +valueOfBtns.fivethBtn ? 'opened' : '' }`}>
                {valueOfBtns.fivethBtn}
            </NavLink>
            <NavLink to={`/p/${totalPages}`} className={`pagination-btn next ${currentPage === +totalPages ? 'opened' : '' }`}>
                {totalPages}
            </NavLink>
            <NavLink to={`/p/${currentPage + 1}`} className={`pagination-btn next ${currentPage === totalPages ? 'disabled' : '' }`}>
                <FontAwesomeIcon icon={faArrowRight} /> 
            </NavLink>

        </div>
    )
}

export default Pagination