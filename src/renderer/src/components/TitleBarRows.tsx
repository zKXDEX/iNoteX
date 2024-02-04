import { twMerge } from 'tailwind-merge'
import titlebarConfig from '../../../../resources/settings.json'

// WINDOWS STYLE
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

// LINUX STYLE
import { IoMdCloseCircle } from "react-icons/io";
import { FiMaximize } from "react-icons/fi";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";

interface TitleBarRowsProps {
  closeAction: () => void;
  minimizeAction: () => void;
  maximizeAction: () => void;
}

export const TitleBarRows: React.FC<TitleBarRowsProps> = ({ closeAction, minimizeAction, maximizeAction }) => {

  console.log(titlebarConfig.titlebar.style)
  const titlebarStyle = titlebarConfig.titlebar.style

  if (titlebarStyle === 'mac') return (
    <div className="relative  inset-0 h-8 w-[250px] h-[100vh + 10px]" >
      <div className={twMerge('absolute inset-0 flex justify-between items-center px-2')}>

        <div className="flex space-x-2 ms-2 titlebar">
          <button className="w-3 h-3 rounded-full bg-red-500/100" datatype='close' id='closebtn' onClick={closeAction}/>
          <button className="btnMinimize w-3 h-3 rounded-full bg-yellow-500/100" datatype='minimize' id='minimizebtn' onClick={minimizeAction} />
          <button className="btnMaximize w-3 h-3 rounded-full bg-green-500/100" datatype='maximize' id='maximizebtn' onClick={maximizeAction} />
        </div>

      </div>
    </div>
  )

  if (titlebarStyle === 'win') return (
    <div className="relative  inset-0 h-8 w-[250px] h-[100vh + 10px]" >
      <div className={twMerge('absolute inset-0 flex justify-between items-center px-2')}>

        <div className="flex space-x-2 ms-2 titlebar">
          <button className="w-4 h-4" datatype='close' id='closebtn' onClick={closeAction}>
            <IoCloseOutline className="w-4 h-4"/>
          </button>
          <button className="btnMaximize w-4 h-4 " datatype='maximize' id='maximizebtn' onClick={maximizeAction}>
            <VscChromeMaximize className="w-4 h-4"/>
          </button>
          <button className="btnMinimize w-4 h-4" datatype='minimize' id='minimizebtn' onClick={minimizeAction}>
            <VscChromeMinimize className="w-4 h-4"/>
          </button>
        </div>

      </div>
    </div>
  )

  if (titlebarStyle === 'lin') return (
    <div className="relative  inset-0 h-8 w-[250px] h-[100vh + 10px]" >
      <div className={twMerge('absolute inset-0 flex justify-between items-center px-2')}>

        <div className="flex space-x-2 ms-2 titlebar">
          <button className="w-4 h-4" datatype='close' id='closebtn' onClick={closeAction}>
            <IoMdCloseCircle className="w-4 h-4"/>
          </button>
          <button className="btnMaximize w-4 h-4 " datatype='maximize' id='maximizebtn' onClick={maximizeAction}>
            <FiMaximize className="w-4 h-4"/>
          </button>
          <button className="btnMinimize w-4 h-4" datatype='minimize' id='minimizebtn' onClick={minimizeAction}>
            <VscChromeMinimize className="w-4 h-4"/>
          </button>
        </div>

      </div>
    </div>
  )

  if (!(titlebarStyle === 'mac' || titlebarStyle === 'lin' || titlebarStyle === 'win')) return (
    <div className="relative  inset-0 h-8 w-[250px] h-[100vh + 10px]" >
      <div className={twMerge('absolute inset-0 flex justify-between items-center px-2')}>

        <div className="flex space-x-2 ms-2 titlebar">
          <button className="w-3 h-3 rounded-full bg-red-500/100" datatype='close' id='closebtn' onClick={closeAction}/>
          <button className="btnMinimize w-3 h-3 rounded-full bg-yellow-500/100" datatype='minimize' id='minimizebtn' onClick={minimizeAction} />
          <button className="btnMaximize w-3 h-3 rounded-full bg-green-500/100" datatype='maximize' id='maximizebtn' onClick={maximizeAction} />
        </div>

      </div>
    </div>
  )

  return null;
}
