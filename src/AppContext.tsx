import { createContext, useContext, useState } from 'react'

const init: {
  settingOpen: boolean;
  toggleSettingOpen: (s: boolean) => void;
} = {
  settingOpen: false,
  toggleSettingOpen: () => {}
}
const AppContext = createContext(init)

export function AppProvider(props: { children: React.ReactNode }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleSettingOpen = (s: boolean) => {
    setIsOpen(s)
  }

  const value = {
    settingOpen: modalIsOpen,
    toggleSettingOpen
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)

  return ctx
}
