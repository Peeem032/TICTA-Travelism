import './App.css'

function App() {
    
    return (  
        <div classname= 'background'>
            <div className='frame flex flex-col'>
                <div className='profile'>
                    <div className='profile_pic'></div>
                    <div className='flex flex-col mt-4'>
                        <span className='profile_txt1'>สวัสดี</span>
                        <span className='profile_txt2 text-base'>คุณ <span className='font-bold'>หมูเด้ง</span>  </span>
                    </div>
                </div>
                <div className='setting_icon'></div>
                <div className='box flex flex-row '>
                    
                    <div className="icon">
                        <img src="/assets/picture/icon_ticket.png" alt="ticket"/>
                        <span>ส่วนลด</span>
                    </div>
                    <div className="icon">
                        <img src="/assets/picture/icon_gif.png" alt="gif"/>
                        <span>รางวัล</span>
                    </div>
                     <div className="icon">
                        <img src="/assets/picture/icon_add.png" alt="add"/>
                        <span>เพิ่มเติม</span>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default App
