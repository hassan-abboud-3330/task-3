import { useState } from 'react';
import SectionInfo from '../../../components/SectionInfo';
import TestimonialItem from './TestimonialItem';
import { testimonials } from './testimonials';
import { arrowLeft, arrowRight } from '../../../assets/icons/icons';
import styles from './Testimonials.module.css'


const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const testimonialsLength = testimonials.length;
    const goToPrevious = () => {
        setCurrent(prev => {
            return prev === 0 ? testimonialsLength - 1 : (prev - 1);
        })
    }
    const goToNext = () => {
        setCurrent(prev => {
            return prev === testimonialsLength - 1 ? 0 : (prev + 1);
        })
    }
    //selecte three cards started by current card, on desktop view.
    const desktopCards = [];
    for (let i = current; i < current + 3; i++) {
        desktopCards.push(testimonials[i % testimonialsLength]);
    }

    return (
        <section className="container">
            <SectionInfo
                intro="Their Happy Words🤗"
                title="Our Testimonials"
                content="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both  academically and emotionally."
            />
            <div className={styles.testimonials}>
                <button aria-label='Previous testimonial' className={`${styles["left-btn"]} ${styles['desktop-btns']}`} onClick={goToPrevious}>
                    <img src={arrowLeft} alt="" />
                </button>
                <div className={styles['desktop-view']}>
                    <div className={styles.grid}>
                        {desktopCards.map((item, index) => <TestimonialItem
                            img={item.img}
                            name={item.name}
                            stars={item.stars}
                            content={item.content}
                            key={index}
                        />)}
                    </div>
                </div>
                <button aria-label='Next testimonial' className={`${styles["right-btn"]} ${styles['desktop-btns']}`}
                    onClick={goToNext}><img src={arrowRight} alt="" /></button>
                <div className={styles['mobile-view']}>
                    <TestimonialItem
                        img={testimonials[current].img}
                        name={testimonials[current].name}
                        stars={testimonials[current].stars}
                        content={testimonials[current].content}
                    />
                    <div className={styles['mobile-btns']}>
                        <button aria-label='Previous testimonial' className={`${styles["left-btn"]} ${styles['mobile-btns']}`}
                            onClick={goToPrevious}><img src={arrowLeft} alt="" /></button>
                        <button aria-label='Next testimonial' className={`${styles["right-btn"]} ${styles['mobile-btns']}`}
                            onClick={goToNext}><img src={arrowRight} alt="" /></button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Testimonials;