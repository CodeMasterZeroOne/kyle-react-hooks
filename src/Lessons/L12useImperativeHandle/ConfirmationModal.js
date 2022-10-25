
import React, { useImperativeHandle, useRef } from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modalCenter: {
        textAlign: 'center',
        color: 'grey',
        backgroundColor: 'white',
        borderRadius: 10,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    exitBtn: {
        color: 'red',
        fontSize: '1em',
        float: 'right',
        margin: '0px -15px 0px 0px'
    },
    confirmBtn: {
        backgroundColor: 'lightgreen',
        margin: 10
    },
    denyBtn: {
        backgroundColor: 'pink',
        margin: 10
    }
}));

function ConfirmationModal({ isOpen, onClose }, ref) {
    const classes = useStyles()

    const closeRef = useRef()
    const confirmRef = useRef()
    const denyRef = useRef()


    useImperativeHandle(ref, () => {
        return {
            focusCloseBtn: () => closeRef.current.focus(),
            focusConfirmBtn: () => confirmRef.current.focus(),
            focusDenyBtn: () => denyRef.current.focus(),
        }
    })

    if (!isOpen) return null

    return (
        <div ref={ref} open={isOpen} className={classes.modalCenter}>
            <Button ref={closeRef} onClick={onClose} className={classes.exitBtn}>&times;</Button>
            <div style={{ marginTop: 80, textAlign: 'center' }}>
                <h2>Title</h2>
                <h6>Do you confirm?</h6>
                <Button ref={confirmRef} onClick={onClose} className={classes.confirmBtn}>Yes</Button>
                <Button ref={denyRef} onClick={onClose} className={classes.denyBtn}>No</Button>
            </div>
        </div>
    )
}
export default React.forwardRef(ConfirmationModal)