import React from 'react'
import CardSkills from '../Card/CardSkills'
type Props = {}
const SkillCategory = (props: Props) => {
    return (
        <div className='size__component py-12'>
            <h1 className='text__title'>Improving your skills to look for more opportunities </h1>
            <div className="grid grid-cols-4 gap-8 pt-8">
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />

            </div>
        </div>
    )
}
export default SkillCategory