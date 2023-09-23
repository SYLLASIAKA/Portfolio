import React from 'react'
import { stats } from '../data'
import parse from 'html-react-parser';

const Stats = () => {
    return (
        <>
            {stats.map(({ no, title }, index) => {
                return (
                    <div className="stats__box" key={index}>
                        <span className="stats__no">{no}</span>
                        <br />
                        <div className="stats__title">{parse(title)}</div>
                    </div>
                )
            })}
        </>
    )
}

export default Stats