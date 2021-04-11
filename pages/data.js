import React from 'react';
import styles from '../styles/HomePage.module.css'
import Link from 'next/link'


const HomePage = () => {

    return (
        <div>
            <div className={styles.topnav}>
                <h3 >BWK School</h3>
            </div>
            <div className={styles.column} >
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </button>
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/dashbord'>
                        <a>Dashboard</a>
                    </Link>
                </button>

                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/events'>
                        <a>Events</a>
                    </Link>
                </button>
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/data'>
                        <a>ข้อมูลส่วนตัว</a>
                    </Link>
                </button>
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/form'>
                        <a>แบบฟอร์มการลางาน</a>
                    </Link>
                </button>
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/setting'>
                        <a>Setting</a>
                    </Link>
                </button>
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>
                    <Link href='/main'>
                        <a>Log out</a>
                    </Link>
                </button>
                <br />
            </div>
            <div className={styles.column.middle}>
                <h4></h4>
                <button className={styles.btngroup} onClick={() => { console.log('Clicked') }}>ข้อมูลส่วนตัว</button>
            </div>

        </div>

    )
}
export default HomePage;