import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";
import SCardContainer from "./content_2/multi_language";


export default function Home() {
  return (
   <>
   <Header></Header>
   <SCardContainer></SCardContainer>
   </>
  );
}
