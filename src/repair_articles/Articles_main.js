import React, { Component } from 'react';
import "./Articles_main.css";

export class Articles_main extends Component {
    render() {
        return (
            <div>
                <div className="articles-main-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div className="picture-wrapper m-2">
                                    <a href="/repair/article1">
                                        <img src={"https://images.squarespace-cdn.com/content/v1/5912373d46c3c48ff6f237f7/1498584923734-YLMRDX1T1L9AKAGXJ6G6/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/general-car-repair-CA-Motor-Works.jpg?format=2500w"} alt="" style={{ height: "15rem", width: "100%"}} />
                                    </a>
                                    <h4>How to repair car</h4>
                                    <span>2 October, 2020</span>
                                    <div className="button-div-wrapper text-center">
                                        <a class="btn btn-primary" href="/repair/article1" role="button">Find out more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div className="picture-wrapper m-2">
                                    <a href="/repair/article2">
                                        <img src={"https://www.zr.ru/_ah/img/6uapcnxVV6Qp-sCVv2D-IQ=s800"} alt="" style={{ height: "15rem", width: "100%"}} />
                                    </a>
                                    <h4>How to master jackscrew</h4>
                                    <span>2 October, 2020</span>
                                    <div className="button-div-wrapper text-center">
                                        <a class="btn btn-primary" href="/repair/article2" role="button">Find out more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div className="picture-wrapper m-2">
                                    <a href="/repair/article3">
                                        <img src={"https://d1ix0byejyn2u7.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_how-to-check-oil.jpg"} alt="" style={{ height: "15rem", width: "100%"}} />
                                    </a>
                                    <h4>How to change oil in your car</h4>
                                    <span>2 October, 2020</span>
                                    <div className="button-div-wrapper text-center">
                                        <a class="btn btn-primary" href="/repair/article3" role="button">Find out more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div className="picture-wrapper m-2">
                                    <a href="/repair/article4">
                                        <img src={"https://cdn.website.thryv.com/9fd6caacd42443fca478ca59e4622117/dms3rep/multi/901785402.jpg"} alt="" style={{ height: "15rem", width: "100%"}} />
                                    </a>
                                    <h4>How to repair engine</h4>
                                    <span>2 October, 2020</span>
                                    <div className="button-div-wrapper text-center">
                                        <a class="btn btn-primary" href="/repair/article4" role="button">Find out more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div className="picture-wrapper m-2">
                                    <a href="/repair/article5">
                                        <img src={"https://missakautogarage.com/wp-content/uploads/2018/01/thumbnail_Depositphotos_145795919_l-20151.jpg"} alt="" style={{ height: "15rem", width: "100%"}} />
                                    </a>
                                    <h4>How to fix electronic system</h4>
                                    <span>2 October, 2020</span>
                                    <div className="button-div-wrapper text-center">
                                        <a class="btn btn-primary" href="/repair/article5" role="button">Find out more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div className="picture-wrapper m-2">
                                    <a href="/repair/article6">
                                        <img src={"https://bm.img.com.ua/berlin/storage/orig/7/75/f36e2f4f41d80be395f791614272c757.jpg"} alt="" style={{ height: "15rem", width: "100%"}} />
                                    </a>
                                    <h4>How to change tires</h4>
                                    <span>2 October, 2020</span>
                                    <div className="button-div-wrapper text-center">
                                        <a class="btn btn-primary" href="/repair/article3" role="button">Find out more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


/*

<img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ height: "30rem", width: "45rem"}} />

*/