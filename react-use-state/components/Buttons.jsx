import React from 'react'
import { useState } from 'react'
import languages from '../data/languages'

const Buttons = () => {
    return (
        <div className='cont-buttons'>
            {languages.map((language) => (
                <button>
                    <h2>{language.title}</h2>
                </button>

            ))}
        </div>
    )
}

export default Buttons
