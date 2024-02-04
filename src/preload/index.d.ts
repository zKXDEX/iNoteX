import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from "@shared/types";
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
    electron: ElectronAPI
    api: any


  }
}