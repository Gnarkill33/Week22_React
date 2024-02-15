import React from 'react'
import Records from '../records.json'
import './Card.css';

function Card () {
    return (
        <div className='container'>
            {
                Records && Records.map(record => {
                    return (
                        <div className='card' key={record.id}>
                            <h2 className='card__name'>{record.name}</h2>
                        <div className='card__content'>
                            Вселенная: {record.universe}<br/>
                            Альтер эго: {record.alterego}<br/>
                            Род деятельности:{record.occupation}<br/>
                            Друзья: {record.friends}<br/>
                            Суперсилы: {record.superpowers}
                        </div>
                        <div className='card__image'>
                            <img src={record.url} alt="" />
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )}










export default Card;