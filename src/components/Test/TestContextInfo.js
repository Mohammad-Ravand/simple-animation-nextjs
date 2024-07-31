"use client"

// components/UserInfo.js
import { useGlobalContext } from '@/context/GlobalContext';
import React from 'react'

export default function TestContextInfo() {
    const { state } = useGlobalContext();

    return (
      <div>
        <p>User Name: {state.user ? state.user.name : 'Guest'}</p>
        <p>User Email: {state.user ? state.user.email : 'No email available'}</p>
      </div>
    );
}
