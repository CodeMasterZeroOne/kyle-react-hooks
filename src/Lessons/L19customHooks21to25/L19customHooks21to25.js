import React from 'react'
import ClickOutsideComponent from './ClickOutsideComponent'
import DarkModeComponent from './DarkModeComponent'
import '../../darkModeBody.css'
import CopyToClipboardComponent from './CopyToClipboardComponent'
import CookieComponent from './CookieComponent'
import TranslationComponent from './TranslationComponent'

export default function L19customHooks21to25() {
    return (
        <>
            <h4>customHooks21to25</h4>
            <h4>#21 useClickOutside</h4>
            <ClickOutsideComponent />

            <h4>#22 useDarkMode</h4>
            <DarkModeComponent />

            <h4>#23 useCopyToClipboard</h4>
            <CopyToClipboardComponent />

            <h4>#24 useCookies</h4>
            <CookieComponent />

            <h4>#25 useTranslation</h4>
            <TranslationComponent />
        </>
    )
}
