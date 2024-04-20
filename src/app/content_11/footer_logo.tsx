import Image from "next/image"
import logo from "./logo.png"

export default function Quote() {
    return (
        <>
            <div>
                <div>
                    <Image src={logo} alt=""></Image>
                </div>
                <div>
                    <p>Your <div>money</div> , your way.</p>
                </div>
            </div>
        </>
    )
}