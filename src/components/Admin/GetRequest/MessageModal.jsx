import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MessageModal = ({ messages }) => {
    const [mssg, setMssg] = useState()
    
    useEffect(() => {
        messages.map(msg => setMssg(msg?.message))
    },[])

    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">Check Message</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Customer message</h3>
                    <div className='w-40'>
                    <p>{
                        mssg
                    }</p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Ok</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;