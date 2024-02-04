import { TitleBarRows } from "@/components"

export const DraggableTopBar = ({closeAction, minimizeAction,maximizeAction}) => {
  return <header className="absolute inset-0 h-8" >
    <TitleBarRows
    closeAction={closeAction}
    minimizeAction={minimizeAction}
    maximizeAction={maximizeAction}/>
  </header>
}
