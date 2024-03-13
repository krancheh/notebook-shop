import styles from "./HomePage.module.scss";
import HeroShape1 from "../../assets/images/hero-shape1.svg";
import QuestionsShape from "../../assets/images/questions-shape.svg";
import questionImage from "../../assets/images/question-dude.png";
import heroImg1 from "../../assets/images/hero1.png";
import Button from "../../components/Common/Button/Button";
import DeliveryIcon from "../../assets/icons/delivery.png";
import TrustIcon from "../../assets/icons/promise.png";
import TwentyFourSevenIcon from "../../assets/icons/247.png";
import Input from "../../components/Common/Input/Input";
import { useState } from "react";


const HomePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="wrapper">
            <div className={styles.content}>

                {/* HERO SECTION */}
                <section>
                    <div className={styles.hero}>
                        <div className={styles.heroLeft}>
                            <h1>Любите скорость? <span>Игровые ноутбуки</span> по самым низким ценам!</h1>
                            <p>В <b>LabBook</b> большой выбор ноутбуков на любой вкус</p>
                            <Button type="main" path="catalog">Перейти в каталог</Button>
                        </div>
                        <div className={styles.heroRight}>
                            <HeroShape1 />
                            <img src={heroImg1} alt="Игровой ноутбук" />
                        </div>
                    </div>
                </section>

                {/* ADVANTAGES SECTION */}
                <section className={styles.advantages}>
                    <div className={styles.advContent}>
                        <h2>Почему City<span>Link</span>?</h2>
                        <div className={styles.items}>
                            <div>
                                <img src={DeliveryIcon} alt="fast-icon" />
                                <h3>Быстро и безопасно</h3>
                                <p>Водители проходят тщательную подготовку
                                    и профессионально выполняют свою работу!</p>
                            </div>

                            <div>
                                <img src={TrustIcon} alt="promise-icon" />
                                <h3>Нам доверяют</h3>
                                <p>Услугами нашей компании воспользовались
                                    более 150 000 человек за последний год</p>
                            </div>

                            <div>
                                <img src={TwentyFourSevenIcon} alt="24/7-icon" />
                                <h3>Всегда с вами</h3>
                                <p>Перевозки осуществляются круглосуточно,
                                    как и работа службы поддержки </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUESTIONS SECTION */}
                <section className={styles.questions}>
                    <div className={styles.questionsContent}>
                        <form>
                            <h2>Остались вопросы?
                                Напишите нам!</h2>
                            <Input id="name" value={name} setValue={setName} label="Имя" />
                            <Input id="email" value={email} setValue={setEmail} type="email" label="Email" />
                            <Input id="message" value={message} setValue={setMessage} type="textarea" label="Сообщение" />
                            <Button type="main">Отправить</Button>
                        </form>

                        <div className={styles.questionsPicture}>
                            <QuestionsShape />
                            <img src={questionImage} alt="Вопросы???" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage