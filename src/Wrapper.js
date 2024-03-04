import React from 'react'
import Router from './Router'
import AuthProvider from './Store/context/AuthProvider'


export default function Wrapper() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
}