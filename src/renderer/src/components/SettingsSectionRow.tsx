import {VersionsSection, InfoApplication} from '@/components'
import {CustomizeTitleBar} from '@/components/Settings'
import logo from '../../../../resources/icon.png'
import { TbInfoTriangleFilled } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

export const SettingsSectionRow = () => {
  return (
    <main className="w-screen h-auto">
      <div className="flex justify-start mx-10">
        <div className="w-auto h-64 flex flex-col justify-center items-start gap-3 mr-[2vh]">
          <img src={logo} alt="logo" className="w-20 h-20"/>
          <h1 className="text-4xl">Settings</h1>
          <VersionsSection/>

        </div>
        <InfoApplication/>
      </div>
      <div className="flex justify-start flex-col mx-10  h-auto">
        <h1 className='text-2xl'>Application cutomization</h1>
          <CustomizeTitleBar/>
      </div>

    </main>
  )
}