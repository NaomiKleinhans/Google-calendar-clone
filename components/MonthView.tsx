'use client'
import { getMonth } from '@/lib/getTime';
import React, { Fragment } from 'react'
import MonthViewDay from './MonthViewDay';

export default function MonthView() {
	// console.table(getMonth())
	const currentMonth = getMonth()
	return (
    <section className='grid grid-cols-7 grid-rows-5 lg:h-[100vh]'>
      {currentMonth.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, index) => (
            <MonthViewDay key={index} day={day} rowIndex={i} />
          ))}
        </Fragment>
      ))}
    </section>
  );
}
