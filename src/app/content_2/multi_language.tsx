import Image from "next/image"
import langImg from "./multilangimg.webp"

export default function Mlcard() {
    return (
        <div>
            <div>
                <Image alt="" src={langImg}></Image>
            </div>
            <div>
                <h3>A Multilingual Experience</h3>
                <p>Language barriers are a thing of the past. Navigate our app in Arabic, English, Hindi, Malayalam, Tamil and Bangla.</p>
            </div>
        </div>
    )
}


