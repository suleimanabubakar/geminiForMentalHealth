const Modal = ({children,lg_size='lg:w-1/3', overflow=''}) => {

    return (    

<div  
className={`  fixed z-10 inset-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

 
    <div className={` inline-block align-middle  bg-white rounded-3xl text-left relative  shadow-xl py-6 px-3 lg:px-6 transform transition-all sm:my-8 w-full md:w-1/3 ${lg_size} ${overflow}`} id="">


{children}


    </div>
  </div>
</div>


 );
}

export default Modal;