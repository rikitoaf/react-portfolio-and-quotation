import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Contact from '../Components/contact';
import { useMediaQuery } from '../hooks/use-media-query';


import entertainment from "../assets/entertainment.jpg";
import concert from "../assets/concert.jpg";
import videography from "../assets/videograpy.jpg";
import corporate from "../assets/corporate.jpg";
import postevent from "../assets/postevent.jpg";
import trade from "../assets/trade.jpg";
import marketing from "../assets/Marketing.jpg";

import ScrollTop from '../Components/ScrolltoTop';
import { px } from 'framer-motion';


const Service = () => {



    const handleEmailClick = () => {
        window.location.href = 'mailto:festivida74@gmail.com?subject=Hello&body=This is the email body.';
    };

    const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

    return isDesktop ? (

        <>
            <div className='' >
                <Navbar />

                <div className='scroll-py-[250px] relative flex flex-col max-w-screen-xl justify-center items-center mt-20 mx-auto mb-20 pt-20'>
                    <h1 className='mb-10 mt-10 text-blue-500'>
                        <span className='text-blue-800'>SER</span>
                        VICES
                    </h1>
                    <div className='flex flex-row gap-6'>
                        <p className=' text-xl text-center flex-wrap text-wrap px-2 mx-2 ' data-aos="fade-right">
                            Festivida is a premier event management company located in Dhaka, Bangladesh,
                            dedicated to creating unforgettable experiences through meticulously planned
                            and flawlessly executed events all through bangladesh. With a passion for
                            innovation and a commitment to excellence, Festivida has established itself
                            as a trusted name in the event management industry.
                        </p>

                    </div>

                </div>





                <div className='flex flex-col justify-between items-center gap-10'>
                    <div
                        className="scroll-py-[250px] max-w-screen-xl relative mx-auto my-10"
                        id="corporate" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5'>
                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Corporate
                                    <span className='text-blue-500'> Events</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    At Festivida, we specialize in a wide range of Corporate Events, ensuring each one is a resounding success. We expertly organize Conferences, Seminars, AGMs, and Anniversary Celebrations, catering to your company's specific needs. Our team is adept at orchestrating memorable Product and Branch Launches, as well as Corporate Retreats that foster team building and relaxation. We also manage Reunions, Exhibitions, and Trade Shows, creating impactful and engaging experiences for all attendees. Trust us to handle every detail, making your corporate event exceptional and seamless.
                                </p>
                            </div>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-left" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={corporate} alt="" />
                            </div>
                        </div>
                    </div>


                    <div
                        className=" scroll-py-[250px] max-w-screen-xl relative mx-auto my-10"
                        id="entertainment" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5'>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-right" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={entertainment} alt="" />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Entertainment
                                    <span className='text-blue-500'> Events</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    Festivida excels in creating spectacular Entertainment Events that captivate and delight. We bring your vision to life with imaginative Theme Parties and vibrant School, College, and University Events. Our expertise extends to organizing unforgettable Concerts, lively Carnivals, and thrilling Music and Dance Festivals. We also produce stunning Fashion Shows that showcase the latest trends in style. With meticulous planning and flawless execution, we ensure every entertainment event is a memorable experience for all attendees. Trust us to deliver an extraordinary event that leaves a lasting impression.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div
                        className=" max-w-screen-xl relative mx-auto my-10"
                        id="social" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5'>
                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Social  <span className='text-blue-500'> Events</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    Festivida takes pride in crafting unforgettable Social Events tailored to your unique celebrations. From joyous Birthday Celebrations and meticulously planned Weddings for all religions to heartwarming Anniversary Parties and Family Gatherings, we ensure every detail is perfect. We also specialize in festive Eid Celebrations and traditional Puja Celebrations, honoring your cultural and religious traditions. With our expertise and attention to detail, we create memorable and seamless events that bring your vision to life and leave lasting memories for you and your loved ones.
                                </p>
                            </div>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-left" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={entertainment} alt="" />
                            </div>
                        </div>
                    </div>




                    <div
                        className="max-w-screen-xl relative mx-auto my-10"
                        id="marketing" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5'>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-right" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={marketing} alt="" />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Marketing  <span className='text-blue-500'>  & Promotion</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    Festivida excels in Marketing and Promotion, ensuring your event garners maximum visibility and engagement. We develop tailored Event Marketing Strategies that effectively target your audience and amplify your event's reach. Our expertise in Social Media Engagement leverages various platforms to create buzz and interactive experiences, driving attendance and participation. Additionally, we execute impactful Promotional Activities that enhance your event’s presence and appeal. Trust us to elevate your event through innovative and comprehensive marketing and promotion efforts.
                                </p>
                            </div>
                        </div>
                    </div>





                    <div
                        className="max-w-screen-xl relative mx-auto my-10"
                        id="trade" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5'>

                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Trade  <span className='text-blue-500'> Fair</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    Festivida places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>
                            </div>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-right" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={trade} alt="" />
                            </div>
                        </div>
                    </div>


                    <div
                        className=" max-w-screen-xl relative mx-auto my-10"
                        id="photovideo" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5'>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-left" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={videography} alt="" />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Photo &
                                    <span className='text-blue-500'> Videography</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    Festivida places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div
                        className="max-w-screen-xl relative mx-auto my-10"
                        id="concert" >
                        <div className='flex flex-row gap-10 justify-center items-center px-5' >

                            <div className='lg:w-1/2 w-full'>
                                <h2 className='pb-5'>
                                    Con<span className='text-blue-500'>cert</span>
                                </h2>
                                <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                    Festivida places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>
                            </div>
                            <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-right" data-aos-duration="900">
                                <img className='object-cover h-[350px] w-[650px]' src={concert} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className=" max-w-screen-xl relative mx-auto my-10"
                    id="postevent" >
                    <div className='flex flex-row gap-10 justify-center items-center px-5'>
                        <div className='lg:w-2/4 xl:w-2/4 w-full' data-aos="fade-left" data-aos-duration="900">
                            <img className='object-cover h-[350px] w-[650px]' src={postevent} alt="" />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <h2 className='pb-5'>
                                Post-Event  <span className='text-blue-500'> Analysis</span>
                            </h2>
                            <p className='text-xl text-justify flex-wrap text-wrap' data-aos="zoom-in" data-aos-duration="900">
                                Festivida places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                            </p>
                        </div>

                    </div>
                </div>



                <div className="md:mt-[10rem] mt-10 pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6  mb-10 md:mx-auto mx-4 
      lg:px-20 xl:px-20 bg-gradient-to-b from-slate-300 to-blue-200 max-w-screen-xl  ">
                    <h2 >
                        <span className="text-blue-800 pr-2">
                            GET IN
                        </span>
                        <span className="text-blue-500">
                            TOUCH
                        </span>

                    </h2>
                    <p className="text-xl text-wrap flex-wrap px-2 mx-2 max-w-screen-xl text-center mb-10">
                        At Festivida, we try to turn your visions into reality. Tell us a bit about yourself,
                        <br />
                        and you can directly contact us at +880 1304177789.
                    </p>

                </div>

                <div className="flex flex-wrap justify-center items-center" data-aos="flip-left" data-aos-duration="1000" id='homecontact'>
                    <Contact />
                </div>

                <div className="max-w-screen-xl mx-auto my-10">
                    <ScrollTop />
                </div>

            </div>



            {/* footer */}
            <div className='bottom-0'>
                <Footer />
            </div>

        </>



    ) : (

        <>
            <Navbar />
            <div className='mobile'>
                <div className='relative flex flex-col justify-center items-center px-2 
            lg:px-12 xl:px-36 mt-10 mb-10 pt-20'>

                    <h1 className='mb-10 mt-10 text-blue-500'>
                        <span className='text-blue-800'>SER</span>
                        VICES
                    </h1>

                    <p className='text-lg text-justify flex-wrap text-wrap px-2 mx-2' data-aos="fade-right" >
                        Festivida is a premier event management company located in Dhaka, Bangladesh,
                        dedicated to creating unforgettable experiences through meticulously planned
                        and flawlessly executed events all through bangladesh. With a passion for
                        innovation and a commitment to excellence, Festivida has established itself
                        as a trusted name in the event management industry.
                    </p>
                </div>


                <div className='flex flex-col'>

                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36 mb-10 lg:pt-10 xl:pt-10" id="mob_corporate" data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Corporate<span className='text-blue-500'> Events</span>

                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap'>
                                    At Festivida, we specialize in a wide range of Corporate Events, ensuring each one is a resounding success. We expertly organize Conferences, Seminars, AGMs, and Anniversary Celebrations, catering to your company's specific needs. Our team is adept at orchestrating memorable Product and Branch Launches, as well as Corporate Retreats that foster team building and relaxation. We also manage Reunions, Exhibitions, and Trade Shows, creating impactful and engaging experiences for all attendees. Trust us to handle every detail, making your corporate event exceptional and seamless.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full' >
                                <img src={corporate} alt="" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36 mb-10 lg:pt-10 xl:pt-10" id="mob_entertainment" data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>

                                    Entertainment<span className='text-blue-500'> Events</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap'>
                                    Our event management company excels in creating spectacular Entertainment Events that captivate and delight. We bring your vision to life with imaginative Theme Parties and vibrant School, College, and University Events. Our expertise extends to organizing unforgettable Concerts, lively Carnivals, and thrilling Music and Dance Festivals. We also produce stunning Fashion Shows that showcase the latest trends in style. With meticulous planning and flawless execution, we ensure every entertainment event is a memorable experience for all attendees. Trust us to deliver an extraordinary event that leaves a lasting impression.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <img src={entertainment} alt="" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36  mb-10 lg:pt-10 xl:pt-10" id='mob_social' data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Social<span className='text-blue-500'> Events</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap' >
                                    Our event management company takes pride in crafting unforgettable Social Events tailored to your unique celebrations. From joyous Birthday Celebrations and meticulously planned Weddings for all religions to heartwarming Anniversary Parties and Family Gatherings, we ensure every detail is perfect. We also specialize in festive Eid Celebrations and traditional Puja Celebrations, honoring your cultural and religious traditions. With our expertise and attention to detail, we create memorable and seamless events that bring your vision to life and leave lasting memories for you and your loved ones.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <img src={entertainment} alt="" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36  mb-10 lg:pt-10 xl:pt-10" id='mob_marketing' data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Marketing  <span className='text-blue-500'>  & Promotion</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap'>
                                    Our event management company excels in Marketing and Promotion, ensuring your event garners maximum visibility and engagement. We develop tailored Event Marketing Strategies that effectively target your audience and amplify your event's reach. Our expertise in Social Media Engagement leverages various platforms to create buzz and interactive experiences, driving attendance and participation. Additionally, we execute impactful Promotional Activities that enhance your event’s presence and appeal. Trust us to elevate your event through innovative and comprehensive marketing and promotion efforts.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <img src={marketing} alt="" />
                            </div>
                        </div>
                    </div>


                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36  mb-10 lg:pt-10 xl:pt-10" id='mob_trade' data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Trade  <span className='text-blue-500'> Fair</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap' >
                                    Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>

                            </div>

                            <div className='w-auto'>
                                <img src={trade} alt="" />
                            </div>
                        </div>


                    </div>


                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36  mb-10 lg:pt-10 xl:pt-10" id="mob_photovideo" data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Photo &
                                    <span className='text-blue-500'> Videography</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap'>
                                    Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <img src={videography} alt="" />
                            </div>
                        </div>


                    </div>

                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36  mb-10 lg:pt-10 xl:pt-10" id="mob_concert" data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Con<span className='text-blue-500'>cert</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap'>
                                    Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <img src={concert} alt="" />
                            </div>
                        </div>


                    </div>
                    <div
                        className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8  lg:px-12 xl:px-36  mb-10 lg:pt-10 xl:pt-10" id='mob_postevent' data-aos="zoom-in" >

                        <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                            <div className='w-auto'>
                                <h2 className='pb-5'>
                                    Post-Event  <span className='text-blue-500'> Analysis</span>
                                </h2>
                                <p className='text-lg text-justify flex-wrap text-wrap'>
                                    Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                                </p>

                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <img src={postevent} alt="" />
                            </div>
                        </div>


                    </div>


                </div>



                <div className=" mt-5 pt-10 mb-5 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20 bg-gradient-to-b from-slate-300 to-blue-200 md:mx-auto mx-4 ">
                    <h2 >
                        GET IN <span className='text-blue-500'>TOUCH </span>
                    </h2>
                    <p className="text-lg text-wrap flex-wrap px-2 mx-2 max-w-screen-lg text-center mb-10">
                        At Festivida, we try to turn your visions into reality. Tell us a bit about yourself,
                        <br />
                        and you can directly contact us at +880 1304177789.
                    </p>

                </div>

                <div className=" flex flex-wrap justify-center items-center" id='contact'>
                    <Contact />
                </div>

                <ScrollTop />
            </div>


            <div className='bottom-0'>
                <Footer />
            </div>
        </>
    )

};


export default Service;
