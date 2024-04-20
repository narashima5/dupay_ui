import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";
import Mlcard from "./content_2/multi_language";
import Imtcard from "./content_3/instant_money_transfer";
import Advantage from "./content_6/safety-advantages";
import Details from "@/app/content_9/complete_details";
import Applink from "./content_10/app_link";
import Quote from "./content_11/footer_logo";


export default function Home() {
  return (
   <>
   <Header></Header>
   <Mlcard></Mlcard>
   <Imtcard></Imtcard>
   <Advantage></Advantage>
   <Details></Details>
   <Applink></Applink>
   <Quote></Quote>
   </>
  );
}
