import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {useEffect, useState} from "react";

const MainPage = (props) => {
    const [destination, setDestination] = useState('');

    function copyToClipboard() {
        navigator.clipboard.writeText(destination);
    }

    function submitForm(e) {
        e.preventDefault();
        const sub = document.getElementById('sub').value;
        const domain = window.location.origin;
        setDestination(domain + '/api/get-sub?sub=' + sub);
    }

    useEffect(() => {
        if (destination) {
            const urlDisplay = document.getElementById('urlDisplay');
            urlDisplay.innerHTML = '';
            const button = document.createElement('button');
            button.innerHTML = 'Copy';
            button.onclick = copyToClipboard;
            const link = document.createElement('a');
            link.href = destination;
            link.innerHTML = 'your link';
            urlDisplay.innerHTML = '';
            urlDisplay.appendChild(link);
            urlDisplay.appendChild(button);
        }
    }, [destination]);

    return (
        <>
            <section>
                <h2>Input Form</h2>
                <form onSubmit={submitForm}>
                    <label for="urlInput">URL:</label>
                    <input type="url" id="sub" name="sub" required/>
                    <button type="submit">Submit</button>
                </form>
                <hr/>
                <div id="urlDisplay"></div>
            </section>
        </>
    );
};

export default MainPage;
