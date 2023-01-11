import React from 'react'
import CardCustom from './CardCustom/CardCustom';

const CountryMain = () => {
    return (
      <div className='m-5'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <CardCustom/>
          <CardCustom/>
          <CardCustom/>
          <CardCustom/>
        </div>
      </div>
    )
}

export default CountryMain;