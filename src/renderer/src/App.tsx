import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar,
  ActionButtonsSettings,
  SettingsEditor
} from '@/components'

import { FloatingSettingsTitle } from '@/components/Settings/FloatingSettingsTitle'

import { useRef, useState } from 'react'


const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const [selectedSettings, setSelectedSettings] = useState(true)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  const handleClose = (): void  => window.electron.ipcRenderer.send('closeApp');

  const handleMinimize = (): void => window.electron.ipcRenderer.send('minimizeApp');

  const handleMaximize = (): void => window.electron.ipcRenderer.send('maximizeApp');

  const handleSettings = (): void =>  {
    setSelectedSettings((prevSelectedSettings) => {
      const newSelectedSettings = !prevSelectedSettings;
      return newSelectedSettings;
    });
  }

  return (
    <>
      <DraggableTopBar
      closeAction={handleClose}
      minimizeAction={handleMinimize}
      maximizeAction={handleMaximize}
      />
      {selectedSettings ?

      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
          <ActionButtonsSettings eventSettings={handleSettings} className="mt-3 absolute bottom-3 left-1" />
        </Sidebar>

        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/10">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
      :
      <RootLayout>
        <ActionButtonsSettings eventSettings={handleSettings} className="mt-3 absolute bottom-3 left-1" />
        <Content ref={contentContainerRef} className="">
          <FloatingSettingsTitle className="pt-2" />
          <SettingsEditor />
        </Content>
      </RootLayout>
      }
    </>
  )
}

export default App
