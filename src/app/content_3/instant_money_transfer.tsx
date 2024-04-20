import Image from "next/image"
import imt from "./imtimg.png"

export default function Imtcard() {
    return (
        <>
            <div>
                <div>
                    <h3>Instant Money Transfer</h3>
                    <p>Send money right away, anytime, from your phone. It's fast, easy, and always there when you need it the most.</p>
                </div>
                <div>
                    <Image src={imt} alt=""></Image>
                </div>
            </div>
        </>
    )
}