import React, { Component } from 'react'
import Image  from 'next/image';

class Message extends Component {
    render() {
        return (
            <div className="message success show">
                <div className="messageImage"><Image src="/images/success.png" width={44} height={46} alt="Success"></Image></div>
                <p><b>Well done!</b> You successfully logged in</p>
            </div>
        );
    }
}

export default Message;