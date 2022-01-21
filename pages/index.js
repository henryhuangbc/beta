import styles from "styles/Home.module.css";
import Meta from "components/Meta";
import Nav from "components/Nav";
import Footer from "components/Footer";
import PersonalLink from "components/PersonalLink";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Nav />
      <Meta />

      <main className={styles.main}>
        <div className={styles.hello}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("Hi, I am a React Developer.")

                .callFunction(() => {
                  console.log("String typed out");
                })
                .start();
            }}
          />
        </div>

        <div className={styles.links}>
          <PersonalLink
            name="GitHub"
            img="/github.png"
            href="https://github.com/CubingSoda"
          />
          <PersonalLink
            name="Reddit"
            img="/reddit.png"
            href="https://www.reddit.com/user/CubingSoda/"
          />
          <PersonalLink
            name="Discord (CubingSoda#1766)"
            img="/Discord.png"
            href="https://discord.com/users/822191907286417450"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
