function Video_post(){
    return(
        <div className="video-post">
            <div className="video-s">
                <div className="video-top">
                    <h2><b style={{color: 'white'}}>Videos</b></h2>
                    <a href="#">ALL VIDEOS</a>
                </div>
                <div className="video-main">
                    <div className="video-main-left col-md-8">
                        <div className="hover-1">
                            <a href="#" className="text-a">
                                <div className="video-main-left-img">
                                    <img className="video-anh" src="img/thuml1.jpg" style={{width: '100%'}} />
                                </div>
                            </a>
                            <a href="#">
                                <div className="play-video-1">
                                    <i className="fas fa-play" style={{color: 'black'}} />
                                </div>
                            </a>
                            <div className="video-main-left-text">
                                <h3 style={{color: 'white'}} className="hover-line"><a href="#" style={{textDecoration: 'none'}}><b>Đặc sản ngon khó tìm ăn tuyệt đỉnh</b></a></h3>
                                <div className="video-day">
                                    <ul>
                                        <li>By <a href="#" style={{textDecoration: 'none'}}> Thùy Ngân</a></li>
                                        <i>.</i>
                                        <li>26/08/20</li>
                                        <li><a href="#" style={{textDecoration: 'none'}}> 21 Lượt xem Views</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-main-right col-md-4">
                        <div className="video-right">
                            <div className="video-main-right-1">
                                <div className="video-1">
                                    <a href="#">
                                        <img src="img/thuml2.jpg" style={{width: '100%', height: '100%'}} />
                                        <div className="play-video">
                                            <i className="fas fa-play" style={{color: 'black'}} />
                                        </div>
                                    </a>
                                </div>
                                <div className="text-right-1">
                                    <div className="media"><a href="#" style={{textDecoration: 'none'}}><b>Video</b></a></div>
                                    <h4 className="hover-line"><a href="#" style={{textDecoration: 'none'}}>Cách làm món khoai tây que ăn tuyệt đỉnh</a></h4>
                                    <div className="text-right-2">
                                        <ul>
                                            <li>By</li>
                                            <a href="#" style={{textDecoration: 'none'}}>Thùy Ngân</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="video-main-right-2">
                                <div className="video-1">
                                    <a href="#">
                                        <img src="img/thuml3.jpg" style={{width: '100%', height: '100%'}} />
                                        <div className="play-video">
                                            <i className="fas fa-play" style={{color: 'black'}} />
                                        </div>
                                    </a>
                                </div>
                                <div className="text-right-1">
                                    <div className="media"><a href="#" style={{textDecoration: 'none'}}><b>Video</b></a></div>
                                    <h4 className="hover-line"><a href="#" style={{textDecoration: 'none'}}>Ăn cua biển trên ghe hàng Miền Tây</a></h4>
                                    <div className="text-right-2">
                                        <ul>
                                            <li>By</li>
                                            <a href="#" style={{textDecoration: 'none'}}>Thùy Ngân</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Video_post;