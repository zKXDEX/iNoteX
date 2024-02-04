import { IoIosBug } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";

export const InfoApplication = () => {

  const OpenUrl = (url) => {
    window.open(url, '_blank');
  };

  return (

    <div className="w-auto h-64 flex flex-col justify-center items-start gap-2">
      <button className='px-2 py-1 rounded-md border-zinc-400/10 hover:bg-zinc-600/20 transition-colors duration-100 w-full flex flex-row' onClick={() => OpenUrl('https://github.com/zKXDEX/NotexVerse/issues')}>
        <div className="containerIcon"><IoIosBug /></div>
        <div className="contentSection">
          <h2 className="text-1xl">Report a bug</h2>
          <p className=" description text-zinc-700">Something is not working? Let us know!</p>
        </div>
      </button>
      <button className='px-2 py-1 rounded-md border-zinc-400/10 hover:bg-zinc-600/20 transition-colors duration-100 w-full flex flex-row' onClick={() => OpenUrl('https://github.com/zKXDEX/NotexVerse/discussions')}>
        <div className="containerIcon"><MdQuestionAnswer /></div>
        <div className="contentSection">
          <h2 className="text-1xl">Ask a question</h2>
          <p className=" description text-zinc-700">On Github Discussions</p>
        </div>
      </button>
      <button className='px-2 py-1 rounded-md border-zinc-400/10 hover:bg-zinc-600/20 transition-colors duration-100 w-full flex flex-row' onClick={() => OpenUrl('https://github.com/zKXDEX/NotexVerse')}>
        <div className="containerIcon"><FaGithub /></div>
        <div className="contentSection">
          <h2 className="text-1xl">Github</h2>
          <p className=" description text-zinc-700">Source code</p>
        </div>
      </button>
    </div>

  )

}