import React from 'react'
import { View, Text } from 'react-native'
import MainNavigation from './Navigation/MainNavigation'
import { AuthenticatedUserProvider } from "./Navigation/AuthenticatedUserProvider"

export default function App() {
  return (
  

    <AuthenticatedUserProvider>
    <MainNavigation />
    </AuthenticatedUserProvider>
  )
}

