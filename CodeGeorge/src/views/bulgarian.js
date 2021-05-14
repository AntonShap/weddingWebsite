import { html } from '../../node_modules/lit-html/lit-html.js';

const bulgarianTemplate = () => html`
        <title>Сватбата</title>
        <header class="header" id="bg">
            <h1 class="h1-title GV-Cyrillic">Сватбата на</h1>
            <h2 class="h2-title OS-light">Кристина и Антон</h1>
                <nav class="nav">
                    <ul>
                        <li>
                            <a class="OS-light" href="#bg">HOME</a>
                        </li>
                        <li>
                            <a class="OS-light" href="#story">OUR STORY</a>
                        </li>
                        <li>
                            <a class="OS-light" href="#event">EVENT DETAILS</a>
                        </li>
                        <li>
                            <a class="OS-light" href="#map">MAP</a>
                        </li>
                        <li  class="OS-light dropdown">
                        <div class="btn-Menu-div">
                            <a @mouseover=${onClickk} class="dropBTN" href="#">LANGUAGE</a>
                            <div class="dropdown-content">
                                <a href="/englishPage">English</a>
                                <a href="/bulgarianPage">Български</a>
                                <a href="romanianPage">Română</a>
                            </div>
                            </div>
                        </li>
                        </li>
                    </ul>
                </nav>
        
                <section class="heroIMG-container">
                    <div class="div-container-heriIMG">
                        <div class="container">
                            <button class="btnRSVP OS-light">RSVP</button>
                        </div>
                        <div class="date-heroIMG-container">
                            <h5 class="OS-light h5-1">
                                30th October 2021
                            </h5>
                            <h5 class="OS-light h5-2">
                                Sofia Bulgaria
                            </h5>
                        </div>
                    </div>
                </section>
        </header>
        
        <section class="story-container section-box">
            <div class="h3-box">
                <h3 class="GV-regular h3" id="story">Our Story</h3>
            </div>
        
            <p class="OS-light p">
                Our love story began in London 2017. Anton was trying to make it as a project manager while Cristina
                was
                a junior doctor in a nearby hospital. Some flirtatious banter was exchanged back and forth followed
                by a
                date in Hyde Parksâ€™ Winter Wonderland, mulled wine and late chat in a tent next to an open fireâ€¦
                well the rest is history! Four years worth of memories and weâ€™ve been frozen on top of the Eifel
                Tower, rained on in Venice and survived the Canary Islands cuisine. Weâ€™ve also called 3 places our
                home and seriously upped our home coffee game. Last summer Anton organised a picnic in Hyde Park and
                asked us to dress up as we were to feed the parakeets and you never know when youâ€™ll end up
                snapping
                that perfect picture. We â€œincidentallyâ€ wondered of to the same place where our first date took
                place and there he popped the questionâ€¦ Cristina said YES! We canâ€™t wait for this exciting new
                chapter to begin!
            </p>
        
            <div class="carousel">
        
            </div>
        </section>
        
        <section class="event-container section-box">
            <div class="h3-box event-h3-box">
                <img src="decorations/event-details.png" alt="">
                <h3 class="GV-regular h3" id="event">Event Details</h3>
            </div>
            <div class="church-details">
                <div>
                    <div class="divImgChurch">
                        <img src="images/church-icon.png" alt="">
                    </div>
                    <div>
                        <h4 class="OS-light">The Church</h4>
                    </div>
                </div>
                <h5 class="OS-light h5">30th October, 4.00pm</h5>
            </div>
            <img class="curchIMG" src="images/soflc-attraction-nedelya-church-0080-hor-clsc.jpg" alt="">
            <p class="OS-light p">
                For the special day we invite you to join us in Sveta Nedelq Church at 4 pm, please arrive a few minutes
                early if you want to be on all the pictures. The origin of the name Sveta Nedelya is rather obscure. It
                can be translated as either "Holy Sunday", "Saint Nedelya", or even as "Saint Sunday". Itâ€™s is a
                medieval church that has suffered destruction through the ages and has been reconstructed many times.
                The present building of the temple is among the landmarks of Sofia and itâ€™s also celebrating its 700th
                anniversary on our wedding day! How about thatâ€¦
            </p>
        </section>
        
        <section class="Pre-drinks-container section-box">
            <div class="h3-box pre-h3-box">
                <h3 class="OS-light h3-pre">Reception Pre Drinks</h3>
                <img src="decorations/reseption-pre-drinks.png" alt="">
            </div>
            <h5 class="OS-light h5">Hotel Balkan Loby 5.00pm</h5>
            <div class="div-img-p-predrinks">
                <div class="lobyIMG-box">
                    <img class="pre-img" src="images/soflc-banquet-lobby-0050-hor-clsc.jpg" alt="">
                </div>
                <div class="Pre-drinks-p">
                    <p class="OS-light">
                        Following the church, you will have a few minutes to stretch your legs, join us for the group
                        photos,
                        catch a flower bouquet ;) ... When you are ready you may join us in hotel Balkan (behind the
                        church) for
                        a complimentary drink. This will be your first opportunity to mingle with other guests and get
                        to know
                        them before the reception starts. Go to hotels reception and confirm you are a guest of Cristina
                        and
                        Antonâ€™s wedding. Hotel staff will help you find your way to the other guests and a glass of
                        bubbly.
                    </p>
                </div>
            </div>
        </section>
        
        <section class="reception-container section-box">
            <div class="h3-box">
                <h3 class="OS-light h3-reception">Reception</h3>
            </div>
            <h5 class="OS-light h5">30th October 2021, at 5.00pm</h5>
            <img src="images/soflc-serdica-3571-hor-clsc.jpg" alt="">
            <p class="OS-light p">
                Duo ea autem tation adipiscing. In graeci vulputate vix. Ad vix dolore labores omnesque. Rebum graeco eu
                vim. Agam graeco eu eum. Eam ad porro efficiendi conclusionemque, eam stet mentitum expetendis eu. Vis
                in nullam deleniti. Pri eu praesent elaboraret, ad affert explicari ius, sit vidit perpetua an. No sit
                eirmod nostrud repudiandae, tota scripta blandit ea eam. In qui suas inciderint, vis tollit latine
                definiebas in. Eros nostrum albucius eu pri.
            </p>
        </section>
        
        <section class="map-container section-box">
            <div class="h3-box">
                <h3 class="GV-regular h3" id="map">Map</h3>
            </div>
            <h5 class="OS-light h5">Hotel Balkan Serdica 6.00pm</h4>
                <div class="div-img-p-map">
                    <div>
                        <a href="https://www.google.com/maps/place/Sofia+Hotel+Balkan,+a+Luxury+Collection+Hotel,+Sofia/@42.6970377,23.322337,15z/data=!4m8!3m7!1s0x0:0xd9b39e6fedb37125!5m2!4m1!1i2!8m2!3d42.6970377!4d23.322337"
                            target="_blank">
                            <img src="images/map.PNG" alt="">
                        </a>
                    </div>
                    <div class="map-p">
                        <p class="OS-light">
                            Duo ea autem tation adipiscing. In graeci vulputate vix. Ad vix dolore labores omnesque.
                            Rebum
                            graeco eu
                            vim. Agam graeco eu eum. Eam ad porro efficiendi conclusionemque, eam stet mentitum
                            expetendis
                            eu. Vis
                            in nullam deleniti. Pri eu praesent elaboraret, ad affert explicari ius, sit vidit perpetua
                            an.
                            No sit
                            eirmod nostrud repudiandae, tota scripta blandit ea eam. In qui suas inciderint, vis tollit
                            latine
                            definiebas in. Eros nostrum albucius eu pri.
                        </p>
                    </div>
                </div>
        </section>
        
        <section class="accomodation-container section-box">
            <div class="h3-box">
                <h3 class="GV-regular h3">Accomodation</h3>
            </div>
            <p class="OS-light p">
                As this is a destination event for some of you do bear in mind we are here to help. If you decide to
                stay in the same hotel as the reception we’d be happy to cover the expense for the night of the wedding
                and make sure you are getting preferential prices for the rest of the stay.
            </p>
        </section>
        
        <section class="presents-container section-box">
            <div class="h3-box">
                <h3 class="GV-regular h3">Presents</h3>
            </div>
            <p class="OS-light p">
                Your presence on our special day is the greatest present of all!
        
                However, if you do wish to celebrate with a gift, please be aware this is a destination wedding for us
                and we will have to ship everything on the other side of Europe.
            </p>
        </section>

        <footer class="footer-container section-box">
            <div class="footer">
                <p class="OS-light p1">
                    Website designed and implemented thanks to
                </p>
                <p class="OS-light p2">
                    Kalina Mateeva & George Despotov
                </p>
            </div>
        </footer>

`

export function bgPage(ctx) {
    ctx.render(bulgarianTemplate());
}
function onClickk() {

    const div = document.querySelector('.dropdown-content');
    let isVisible = div.style.display == 'block';
    div.style.display = isVisible ? 'none' : 'block';
}