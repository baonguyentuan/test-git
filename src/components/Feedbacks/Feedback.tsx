import React from 'react'
import CardFeedback from '../Card/CardFeedback'

type Props = {}

const Feedback = (props: Props) => {
  return (
    <div className='bg-slate-100'>
      <div className='size__component py-12'>
        <h1 className='text__title'>What do our customers say? </h1>
        <div className="grid grid-cols-3 gap-8 pt-8">
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
        </div>
      </div>
    </div>
  )
}

export default Feedback