import { SettingsButton } from '@/components/Button/SettingsButton'
import { ComponentProps } from 'react'

interface ActionButtonsSettingsProps extends ComponentProps<'div'> {
  eventSettings: () => void;
}

export const ActionButtonsSettings = ({eventSettings, ...props }: ActionButtonsSettingsProps) => {
  return (
    <div {...props}>
      <SettingsButton onClick={eventSettings} />
    </div>
  )
}
