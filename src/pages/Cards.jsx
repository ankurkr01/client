import React from 'react'
import Card from './Card'
// import File from './File';

const Cards = ({ templates }) => {
    return (
        <div className='container-fluid'>

            <div className='row'>
                <div className='col-sm-12 mt-5'>
                    <Card templates={templates } />
                    {/* <File/> */}
                </div>

            </div>
            </div>


            )
}

            export default Cards
