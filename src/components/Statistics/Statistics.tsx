import React from 'react'
import CardStatistics from '../Card/CardStatistics'

type Props = {}

const Statistics = (props: Props) => {
  return (
    <div className='bg-slate-100'>
    <div className='size__component py-12 '>
    <h1 className='text__title'>Statistics </h1>
    <div className="grid grid-cols-4 gap-8 pt-8">
        <CardStatistics />
        <CardStatistics />
        <CardStatistics />
        <CardStatistics />

    </div>
</div>
    </div>
  )
}

export default Statistics