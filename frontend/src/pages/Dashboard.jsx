import { Link, useNavigate } from "react-router-dom";
import PageAnimation from "./pageAnimation";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [balance, setBalance] = useState(0);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/user/bulk?filter=" + filter)
            .then((response) => {
                setUsers(response.data.user);
            });
    }, [filter])

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            setBalance(response.data.balance)
        })
    }, [])

    return (
        <PageAnimation>
            <section className="flex items-center justify-center h-50 w-full">
                <div className="flex flex-col items-center justify-center w-full m-5 ">
                    <div className="flex items-center justify-between border-solid border-4 rounded-lg border-black w-full h-16">
                        <h1 className="text-2xl font-bold font-sans ml-5">Paytm App</h1>
                        <div className="flex items-center justify-center gap-5 mr-5">
                            <h1 className="text-xl font-medium font-sans">Hello</h1>
                            <div className="h-10 w-10 rounded-full bg-gray-400 text-white text-2xl font-bold flex items-center justify-center">U</div>
                        </div>
                    </div>
                    <Balance amount={balance} />
                    <div className="w-full flex flex-col gap-4 p-6 md:p-8">
                        <h1 className="text-2xl font-bold ont-sans">Users</h1>
                        <input 
                            name="search"
                            type="text"
                            id="search"
                            onChange={(e) => {
                                setFilter(e.target.value);
                            }}
                            placeholder="Search users..."
                            className="h-12 w-full border-solid border-2 border-gray-400 rounded-lg pl-3"
                        />
                        {
                            users.map((user, index) => <User key={index} user={user} />)
                        }
                    </div>
                </div>
            </section>
        </PageAnimation>    
    )
}

// function ProfileLogo({user}) {
//     return (
//         {
//                 users.map((user, index) => <ProfileLogo key={index} user={user} />)
//         }
//     )
// }

function User({user}) {
    const navigate = useNavigate();
    return (
        <section className="flex items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center gap-4">
                    <h1 className="flex items-center justify-center h-12 font-bold text-2xl w-12 rounded-full bg-gray-200">{user.firstName[0]}</h1>
                    <h1 className="text-lg font-semibold font-sans">{user.firstName} {user.lastName}</h1>
                </div>
                <div className="flex items-center justify-center"> 
                    <button onClick={() => {

                        navigate("/send?id=" + user.id + "&name=" + user.firstName);
                    }} className="h-12 w-36 bg-black text-white font-bold rounded-lg">Send Money</button>
                </div>
            </div>
        </section>
    )
}

function Balance({amount}) {
    return (
        <div className="flex gap-2 w-full p-6 m-10 md:p-8 text-xl font-semibold font-serif">
            Your Balance: Rs <h1 className="font-sans">{amount}</h1>
        </div>
    )
}

export default Dashboard;