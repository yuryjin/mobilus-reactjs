import React, {Component} from 'react';
import "./newsarticles.css";

export default class newsMain extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                    <h4>Articles</h4>
                                    <div className="article-wrapper-outer-news">
                                        <a href="/news/article1">
                                            <div className="card">
                                                <img
                                                    src={"https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                                                    alt=""
                                                    style={{
                                                    width: "100%"
                                                }}/>
                                                <div className="text-table-wrapper">
                                                    <h4 className="article-title-styling">New releases of 2020</h4>
                                                    <span className="article-title-span-slyling">2 October, 2020</span>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Stories</h4>
                                    <div className="article-wrapper-outer-news">
                                        <a href="/news/article2">
                                            <div className="card">

                                                <img
                                                    src={"https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                                                    alt=""
                                                    style={{
                                                    width: "100%"
                                                }}/>
                                                <div className="text-table-wrapper">
                                                    <h4 className="article-title-styling">Apply These 9 Secret Techniques To Improve your driving expirience</h4>
                                                    <span className="article-title-span-slyling">2 October, 2020</span>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr/>
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article3">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">Believing these myths can cause problems</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article4">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">Why Does My Car's Transmission Run On Gas During Snow?</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                                {/* articles */}
                                <div className="col-12">
                                    <div className="row row-title">
                                        <h2>Financial</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article11">
                                                    <div className="card">
                                                        <img
                                                            src={"https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                                                            alt=""
                                                            style={{
                                                            height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">What Cars are for you?</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article12">
                                                    <div className="card">
                                                        <img
                                                            src={"https://cdn.pixabay.com/photo/2020/05/13/15/24/ford-5167838_960_720.jpg"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">Will You Buy My Car?</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article13">
                                                    <div className="card">
                                                        <img
                                                            src={"https://cdn.pixabay.com/photo/2015/05/31/12/00/key-791390_960_720.jpg"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">How to sell car?</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h2>New releases</h2>
                                    </div>
                                    <div className="row row-title">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article14">
                                                    <div className="card">
                                                        <img
                                                            src={"https://cdn.pixabay.com/photo/2020/01/24/04/47/traffic-4789271_960_720.jpg"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">New releases overview</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article15">
                                                    <div className="card">
                                                        <img
                                                            src={"https://cdn.pixabay.com/photo/2016/05/03/23/46/mercedes-benz-1370536_960_720.jpg"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">2021 Mercedes C Class Speedrun</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article16">
                                                    <div className="card">
                                                        <img
                                                            src={"https://images.unsplash.com/photo-1593343992641-12eb7f9e1076?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">Citroen C10 Revealed</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-title">
                                        <h2>Sports</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article17">
                                                    <div className="card">
                                                        <img
                                                            src={"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">How To Build A Supercar</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article18">
                                                    <div className="card">
                                                        <img
                                                            src={"https://images.unsplash.com/photo-1590214074323-fd5649874bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">F1 Needs A New Range Rover</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article19">
                                                    <div className="card">
                                                        <img
                                                            src={"https://images.unsplash.com/photo-1536150794560-43f988aec18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">The Audi A3 Concept Teased</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-title">
                                        <h2>Repair</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article20">
                                                    <div className="card">
                                                        <img
                                                            src={"https://images.squarespace-cdn.com/content/v1/5912373d46c3c48ff6f237f7/1498584923734-YLMRDX1T1L9AKAGXJ6G6/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/general-car-repair-CA-Motor-Works.jpg?format=2500w"}
                                                            alt=""
                                                            style={{
                                                            height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">How to repair car</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article21">
                                                    <div className="card">
                                                        <img
                                                            src={"https://www.zr.ru/_ah/img/6uapcnxVV6Qp-sCVv2D-IQ=s800"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">How to master jackscrew</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="article-wrapper-outer-news-1">
                                                <a href="/news/article22">
                                                    <div className="card">
                                                        <img
                                                            src={"https://d1ix0byejyn2u7.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_how-to-check-oil.jpg"}
                                                            alt=""
                                                            style={{
                                                                height: "15rem",
                                                            width: "100%"
                                                        }}/>
                                                        <div className="text-table-wrapper">
                                                            <h5 className="article-title-styling">How to change oil in your car</h5>
                                                            <span className="article-title-span-slyling">2 October, 2020</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Stories</h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article5">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">A Rare Lotus Elise Is On The Market</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article6">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">Rolls Royce Phantom Will Be The First Production Mclaren 570</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article7">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">Bmw 3 Series Convertible To Be Built By Württemberg Museum</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article8">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">Best Tools For Fuel Management And Car Care</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article9">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">Tech Talk - Letters From August 2020</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="col-12">
                                            <div className="article-wrapper-outer-news">
                                                <a href="/news/article10">
                                                    <div className="text-table-wrapper">
                                                        <h4 className="article-title-styling">2021 Volvo S60 Touareg Debuts At Monza Revealed In Full</h4>
                                                        <span className="article-title-span-slyling">2 October, 2020</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
