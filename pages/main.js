import Link from 'next/link';
//import styles from '../styles/HomePage.css'

export default () => (
    <div>
        <h1>WELCOME</h1>
        <h2>โรงเรียนวังกะพ้อเพียรอนุสรณ์</h2>
        <input type="email"
            name="email"
            placeholder="User name (Email)"
            onChange={(e) => setEmail(e.target.value)} />

        <p> </p>
        <input type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <br/>
        <button>
            <Link href='/'>
                <a>Login</a>
            </Link>
        </button>
        <br />
        <h5>Don't have any account yet?</h5>
        <Link href='/create_account'>
            <a>Create account</a>
        </Link>
    </div>
);
