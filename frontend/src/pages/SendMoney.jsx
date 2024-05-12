import InputBox from "../components/InputBox";
import Button from "../components/Button"
import PageAnimation from "./pageAnimation";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const firstName = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return (
        <PageAnimation>
            <section className="flex items-center bg-gray-100 flex-col justify-center h-screen">
                <div className="flex items-center shadow-2xl p-8 rounded-lg flex-col gap-8 justify-center">    
                    <div className="font-bold font-sans text-4xl">
                        Send Money
                    </div>
                    <Toaster />
                    <div className="m-10 w-full">
                        <div className="flex items-center justify-around">
                            <div className="h-12 w-12 bg-green-600 rounded-full grid place-items-center text-3xl text-white">{firstName[0]}</div>
                            <h1 className="text-xl font-bold font-mono">{firstName}</h1>
                        </div>
                        <div className="flex items-center justify-center flex-col p-10 space-y-4 w-full">
                            <label className="font-bold text-md w-full">Amount (in Rs)</label>
                            <input 
                                name="amount"
                                type="number"
                                id="amount"
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                                placeholder="Enter Amount"
                                className="w-full h-10 rounded-lg p-2"
                            />
                        </div>
                        <button onClick={async () => {
                            try{
                                const response = await axios.post("https://paytm-server-g0uk.onrender.com/api/v1/account/transfer", {
                                    to: id,
                                    amount
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token")
                                    }
                                })
                                toast.success(response.data.msg);
                            }catch(error) {
                                toast.error(error.response.data.msg)
                            }
                        }} className="w-full bg-black text-white font-bold font-sans rounded-lg h-10">Initiate Transfer</button>
                    </div>
                </div>
            </section>
        </PageAnimation>    
    )
}

export default SendMoney;