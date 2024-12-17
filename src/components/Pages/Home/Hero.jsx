import { IoIosArrowRoundForward } from "react-icons/io";
import ShineBorder from "../../ui/shine-border";
import HeroVideoDialog from "../../ui/hero-video-dialog";

const Hero = () => {

    return (
        <>

            <section className="flex justify-center bg-cover bg-hero">
                <div className="inline-flex w-primary gap-5 px-5 pt-32 lg:pt-40 text-start flex-col justify-center lg:!items-center lg:text-center">

                    <button className="scale-75 lg:scale-100 -ml-5 px-8 self-start lg:self-center py-2 rounded-full relative bg-[#ffffff2a] text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-border-1">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-color-1 to-transparent" />
                        <span className="relative z-20 flex items-center gap-2">
                            ✨ Let's Go
                            <IoIosArrowRoundForward size={20} />
                        </span>
                    </button>
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                        Supercharge Your<br className="hidden lg:block"/> Productivity
                    </h1>
                    <p className="text-sm lg:text-lg font-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis earum voluptatum <br/>corporis delectus excepturi nam corrupti quod maxime nihil sed?
                    </p>

                    <div className="pt-10 flex justify-center w-full">
                        <ShineBorder
                            borderRadius={30}
                            borderWidth={3}
                            className="relative flex w-full lg:w-9/12 p-8 lg:p-10 bg-gradient-to-b from-color-1/20 to-transparent flex-col items-center justify-center overflow-hidden rounded-[30px]  bg-background md:shadow-xl"
                            color={["#7B5FEB"]}
                        >
                            <HeroVideoDialog
                                className="dark:hidden block"
                                animationStyle="from-center"
                                videoSrc="https://www.youtube.com/embed/lj6QAIDvcFU?si=C51UGtUq19y_feKC"
                                thumbnailSrc="https://img.youtube.com/vi/lj6QAIDvcFU/maxresdefault.jpg"
                                thumbnailAlt="Hero Video"
                            />
                        </ShineBorder>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero