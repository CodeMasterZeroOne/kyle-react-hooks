import { Button } from '@mui/material'
import React from 'react'
import useTranslation from './useTranslation'

export default function TranslationComponent() {
    const { language, setLanguage, setFallbackLanguage, t } = useTranslation()
    return (
        <>
            <div>{language}</div>
            <div>{t('Hi')}</div>
            <div>{t('Bye')}</div>
            <div>{t('nested.value')}</div>
            <Button variant='outlined' sx={{ margin: 1 }} onClick={() => setLanguage('sp')}>Change To Spanish</Button>
            <Button variant='outlined' sx={{ margin: 1 }} onClick={() => setLanguage('en')}>Change To English</Button>
            <Button variant='outlined' sx={{ margin: 1 }} onClick={() => setLanguage('pl')}>Change To Polish</Button>
            <Button variant='outlined' sx={{ margin: 1 }} onClick={() => setFallbackLanguage('en')}>Set Fallback To English</Button>
        </>
    )
}
