import Image from "next/image"
import QR from "./QR_Code.svg"

export default function Applink() {
    return (
        <>
            <div>
                <div>
                    <h3>Join the future of finance, today.</h3>
                    <p>Scan to download the du Pay app. Compatible with iOS and Android.</p>
                </div>
                <div>
                    <Image src={QR} alt=""></Image>
                </div>
            </div>
        </>
    )
}