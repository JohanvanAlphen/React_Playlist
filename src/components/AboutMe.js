import { Link } from "react-router-dom";

function AboutMe() {
    return (
        <p className="about-me">
            Hi everybody, my name is Johan and this is my solution for the PlayList assignment by <a href="https://www.wincacademy.nl/#" target="_blank" rel="noreferrer"> Winc Academy </a>
            <br />
            <br />
            I have tried to use React in the best possible way without the use of Redux.
            According to the latest info that I have read, the possibilities within React are almost as good as using Redux as a plugin.
            <br />
            <br />
            By not using Redux it costed me more time to finish the assignment but I have learned a lot along the way by reading <a href="https://www.google.nl/search?q=why+not+use+redux&sxsrf=ALeKk02DHoP7iTw7dYArVhpOSHz9kfiCvg%3A1624361427445&source=hp&ei=08nRYKCPGM_isAfPs4LQDA&iflsig=AINFCbYAAAAAYNHX49xHw9Iptts6_zdTNhPD0Ru55F7G&oq=why+not+use+redux&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMgYIABAWEB4yCAgAEBYQChAeMgYIABAWEB46BwgjEOoCECc6BAgjECc6CgguEMcBEK8BECc6BAguEEM6CAgAELEDEIMBOgQIABBDOgUIABCxAzoICC4QsQMQgwE6AggAOgIILjoFCC4QsQM6CAguEMcBEK8BOgsILhDHARCvARCTAlDEzQVY6-0FYJj3BWgBcAB4AIABjQGIAeMKkgEEMTUuMpgBAKABAaoBB2d3cy13aXqwAQo&sclient=gws-wiz&ved=0ahUKEwjgxPfukavxAhVPMewKHc-ZAMoQ4dUDCAc&uact=5" target="_blank" rel="noreferrer">blogs</a> and checking some of the video's on <a href="https://www.youtube.com/results?search_query=why+no+longer+use+redux" target="_blank" rel="noreferrer">Youtube</a>.
            <br />
            And also with a little help of the teachers Ben, Sebastiaan and Flip who gave me a slight push in the right direction after I got stuck on how to sort ascending/descending.
            <br />
            <br />
            The possibility of creating your own hooks, e.g. useForm, ensures that there are lots of plugins to download from the internet, so the need for Redux decreases.
            <br />
            <br />
            I hope (and expect 🤞) this assigment will be possitively reviewed by one of the teachers of the Winc Academy.
            <br />
            <br />
            <Link to="/"
                className="home"
            >Home</Link>
        </p>
    )
}

export default AboutMe
