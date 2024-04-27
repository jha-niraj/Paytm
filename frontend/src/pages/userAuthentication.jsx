import { useState, lazy, Suspense } from "react";
const InputBox = lazy(() => import("../components/InputBox"));
const Button = lazy(() => import("../components/Button"));
const Heading = lazy(() => import("../components/Heading"));
import { Link, useNavigate } from "react-router-dom"
import PageAnimation from "./pageAnimation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const userAuthentication = ({type}) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/user/signup", {
                firstName,
                lastName,
                username,
                password
            })
            toast.success("Sign Up Successful");
            localStorage.setItem("token", response.data.token);
            navigate("/signin");
        } catch(err) {
            toast.error("Error Occured!!!")
        } 
    }
    const handleSignin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/user/signin", {
                username,
                password
            })
            toast.success("Login Successful")
            navigate("/dashboard");
        } catch(err) {
            toast.error("Error Occured!!!")
        }
    }

    return (
        <PageAnimation keyValue={type}>
            <section className="flex items-center justify-center mt-10" style={{ height: "90vh" }}>
                <Toaster />
                <form className="shadow-2xl rounded-2xl p-8 m-12">
                    <div className="">
                    {
                        type == "signup" ? 
                            <div className="flex flex-col items-center justify-center">
                                <div className="p-8">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <Heading label={type} />
                                    </Suspense>
                                    <p className="text-xl font-serif text-center font-medium">Enter your information to create an account</p>
                                </div>
                                <div className="w-full relative m-">
                                    <h1 className="text-md font-semibold">First Name</h1>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <InputBox 
                                            name="firstName"
                                            type="text"
                                            id="firstName"
                                            onChange={e => {
                                                setFirstname(e.target.value);
                                            }}
                                            placeholder="Niraj"
                                            label="First Name"
                                        />
                                    </Suspense>
                                    <h1 className="text-md font-semibold">Last Name</h1>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <InputBox 
                                            name="lastName"
                                            type="text"
                                            id="lastName"
                                            onChange={e => {
                                                setLastname(e.target.value);
                                            }}
                                            placeholder="Jha"
                                            label="Last Name"
                                        />
                                    </Suspense>
                                </div>
                            </div>
                        :   
                            <div className="p-8">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Heading label={type} />
                                </Suspense>
                                <p className="text-xl font-serif text-center font-medium">Enter your credentials to access your account</p>
                            </div>
                }
                <h1 className="text-md font-semibold">Username</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <InputBox
                        name="username"
                        type="username"
                        id="username"
                        onChange={e => {
                            setUsername(e.target.value);
                        }}
                        value={username}
                        placeholder="nirajjha"
                        label="Username"
                    />
                </Suspense>
                <h1 className="text-md font-semibold">Password</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <InputBox
                        name="password"
                        type="password"
                        id="password"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        placeholder="12345678"
                        label="Password"
                    />
                </Suspense>
                </div>
                <div className="flex flex-col items-center justify-center">
                {
                    
                    type == "signup" ? 
                        <Suspense fallback={<div>Loading...</div>}>
                            <Button onClick={handleSignup} label="signup" />
                        </Suspense>
                    :
                        <Suspense fallback={<div>Loading...</div>}>
                            <Button onClick={handleSignin} label="signin" />
                        </Suspense>
                }   
                {
                    type == "signup" ?
                        <p>Already have an account, 
                            <Link to="/signin" className="underline font-semibold"> Login here</Link>
                        </p>
                    :
                        <p>Don't have an account? 
                            <Link to="/signup" className="underline font-semibold"> Create here</Link>
                        </p>
                }
                </div>
                </form>
            </section>
        </PageAnimation>
    )
}

export default userAuthentication;