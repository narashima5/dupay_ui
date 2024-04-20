import Image from "next/image"
import mylogo from "./dupayimg.png";

export default function Header() {
    return (
        <div>
            <div>
                <Image alt="" src={mylogo}></Image>
                <p>Pay</p>
            </div>
            <div>
                <p>About Us</p>
                <p>Contact Us</p>
                <button>Download App</button>
            </div>
        </div>
    )
}