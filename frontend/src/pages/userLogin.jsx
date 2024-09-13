import { useState } from "react";
import SignUpForm from "../component/signup";
import "../login.css";
import SignInForm from "../component/signin";


export default function Userlogin() {
    const [check, setCheck] = useState(true);

    return (
        <>

            <div className="login-container">
                <div id="container">
                    <div className={`flip-card ${check ? "" : "flipped"}`}>
                        <div className="flip-card-front">
                            <SignInForm />
                        </div>
                        <div className="flip-card-back">
                            <SignUpForm />
                        </div>
                    </div>
                </div>
                {check ? (
                    <span>
                        Dont have an account?
                        <button onClick={() => setCheck(!check)}>Create account</button>
                    </span>
                ) : (
                    <span>
                        Already have an account?
                        <button onClick={() => setCheck(!check)}>Sign-in</button>
                    </span>
                )}
            </div>
        </>
    );
}
