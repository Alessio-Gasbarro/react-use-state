import React from 'react'
import { useState } from 'react'
import languages from '../data/languages'

const Buttons = () => {

    const [openId, setOpenId] = useState(null)
    const selectedLanguage = languages.find(language => language.id === openId)

    return (
        <>
            {/* Bottoni */}
            <div className='cont-buttons'>
                {languages.map((language) => (
                    <button key={language.id} onClick={() => setOpenId(language.id)}>
                        <h3>{language.title}</h3>
                    </button>
                ))}
            </div>

            {/*card accordion*/}
            {selectedLanguage && (
                <div className='card'>
                    <h2>{selectedLanguage.title}</h2>
                    <p>{selectedLanguage.description}</p>
                </div>
            )}
        </>
    )
}

export default Buttons
