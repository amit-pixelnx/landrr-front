import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Topbar.module.css'

class Topbar extends Component {
    render() {
        return (
            <div className={`${styles.topbar}`}>
                <h1>Dashboard</h1>
                <div className={`${styles.topRightSec}`}>
                    <div className={`${styles.userSec}`}>
                        <div className={`${styles.userImg}`}>
                            <Image src="/images/user.jpg" width={56} height={56} alt=""></Image>
                        </div>
                        <div className={`${styles.userDtl}`}>
                            <div className={`${styles.username}`}>
                                Hey, <span>Roman Parker</span>
                            </div>
                            <Link href="/">
                                <a className={`${styles.userEmail}`}>r.romanparker@gmail.com</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;