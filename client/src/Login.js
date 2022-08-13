import { useRef, useState, useEffect, useContext} from 'react'
import AuthContext from './context/AuthProvider';
import React from 'react'
<<<<<<< Updated upstream
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = '/auth';
=======
import { useNavigate } from 'react-router-dom'
>>>>>>> Stashed changes

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

<<<<<<< Updated upstream
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const history = useNavigate();
=======
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const history = useNavigate();
>>>>>>> Stashed changes


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

<<<<<<< Updated upstream
    const handleSubmit  = async (e) => {
        e.preventDefault();
        setSuccess(true);
    }

    return (
        <>
            {success ? ( 
                history("/admin")
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input 
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required 
                        />
                        
                        <label htmlFor='password'>Password:</label>
                        <input 
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required 
                        />

                        <button disabled={!user || !pwd  ? true : false} >Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br/>
                        <a href="/register">Sign Up</a>
                    </p>
                    <br/>
                    <p>
                        Looking for a job?<br/>
                        <a href="/">Apply Now</a>
                    </p>
                </section>
            )}
        </>
    )
=======
  return (
    <>
        {success ? ( 
            history("/admin")
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required 
                    />
                    
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required 
                    />

                    <button disabled={!user || !pwd  ? true : false} >Sign In</button>
                </form>
                <p>
                    Need an Account?<br/>
                    <a href="/register">Sign Up</a>
                </p>
                <br/>
                <p>
                    Looking for a job?<br/>
                    <a href="/">Apply Now</a>
                </p>
            </section>
        )}
    </>
)
>>>>>>> Stashed changes
}

export default Login
