import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./Footer";

function Congthuc(){
    return(
        <div>
            <div className="page">
                <Header/>
                <div className="main">
                    <div className="nav-category">
                        <div className="container">
                            <a href="#">Trang chủ</a>
                            &nbsp;/&nbsp;
                            <a href="#">Công thức</a>
                        </div>
                    </div>
                    <div className="topstr">
                        <div className="container">
                            <div className="topstr_header">
                                <p className="topstr_header_content" style={{fontWeight: 'bold'}}>Công thức</p>
                            </div>
                            <div className="body_content_topstr">
                                <div className="topstr_content_fist">
                                    <div className="zoomin noidung">
                                        <a href="#"><img className="zoomin1" src="img/cong-thuc-1.jpg" alt="" width={730} height={547} /></a>
                                    </div>
                                    <div className="backgr-text">
                                    </div>
                                    <div className="move">
                                        <ul className="list_content">
                                            <li className="list_one">
                                                <p><a className="fist_list_content" href="#">Đồ uống</a></p>
                                            </li>
                                            <li className="list_two">
                                                <p><a id="block_1-1" className="big_link" href="#">Cách làm cocktail trái cây giải nhiệt cực đã cho mùa hè này</a></p>
                                            </li>
                                        </ul>
                                        <ul className="list_content2">
                                            <li>
                                                <span>By <a className="small_link" href="#">Food Wiki </a>.</span>
                                            </li>
                                            <li> 20/10/20</li>
                                            <li>
                                                <a className="small_link" href="#"> 18 lượt xem</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topstr_content_second">
                                    <div className="topstr_content_second1">
                                        <div className="zoomin noidung">
                                            <a href="#"><img className="zoomin1" src="img/cong-thuc-2.jpg" alt="" width={350} height={257} /></a>
                                        </div>
                                        <div className="backgr-text2">
                                        </div>
                                        <div className="move2">
                                            <ul className="list_content3">
                                                <li>
                                                    <p><a className="fist_list_content" href="#">Đồ Uống</a></p>
                                                </li>
                                                <li>
                                                    <p><a id="block_1-2" className="biglink2" href="#">03 cách làm sinh tố giảm cân thơm ngon uống hoài không chán</a></p>
                                                </li>
                                                <li>
                                                    <p className="author">By Amachea Jajah</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="topstr_content_second2">
                                        <div className="topstr_content_third">
                                            <div className="zoomin noidung">
                                                <a href="#"><img className="zoomin1" src="img/cong-thuc-3.jpg" alt="" width={350} height={257} /></a>
                                            </div>
                                            <div className="backgr-text2">
                                            </div><div className="move3">
                                            <ul className="list_content3">
                                                <li>
                                                    <p><a className="fist_list_content" href="#">Đồ Uống</a></p>
                                                </li>
                                                <li>
                                                    <p><a id="block_1-3" className="biglink2" href="#">Cách làm sinh tố bơ xoài thơm ngon, giải nhiệt mùa hè cực đã</a></p>
                                                </li>
                                                <li>
                                                    <p className="author">By Amachea Jajah</p>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-post">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/sinh-to-chuoi.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Đồ uống</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm sinh tố bơ chuối béo ngậy, mát lành cho ngày hè nóng bức</a></h3><br />
                                                <p>Một trong những hương vị sinh tố đang rất được lòng các tín đồ ẩm thực đó chính là sinh tố bơ chuối. Vị béo bùi của bơ, ngọt thanh...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/sua-chua.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Mẹo Vặt</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm sinh tố sữa chua cực thơm ngon, giải nhiệt cho mùa hè oi bức</a></h3><br />
                                                <p>Sữa chua là một trong những “siêu thực phẩm” có hương vị thơm ngon và rất tốt cho sức khỏe. Có đến hàng chục những biến tấu với thành phần...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/bo-cau.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Bật mí cách làm món bồ câu hầm thuốc bắc bồi bổ sức khỏe</a></h3><br />
                                                <p>Bồ câu hầm thuốc bắc là món ăn giàu dinh dưỡng và thường được nấu dành cho những người suy nhược cơ thể. Đây được coi là món ăn cực tuyệt...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/pho-ga.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm món phở gà thơm ngon, chuẩn hương vị truyền thống</a></h3><br />
                                                <p>Một trong những món ăn mang linh hồn Việt chắc chắn không thể bỏ qua đó chính là món phở truyền thống. Những người đi xa luôn nhớ về hương...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/ga-sao-xa-ot.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm món gà xào xả ớt hao cơm cho mùa thu se lạnh</a></h3><br />
                                                <p>Bạn yêu thích thịt gà nhưng đã quá quen với gà luộc hay các món gà rang, gà hấp,…Vậy thì trong tiết trời se lạnh của mùa thu này, hãy thử...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/kho-qua-nhoi-thit.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Cách làm món khổ qua nhồi thịt không bị đắng, ngon ngọt, thanh mát</a></h3><br />
                                                <p>Mặc dù có hương vị đắng nhẹ rất đặc trưng nhưng món canh khổ qua nhồi thịt vẫn được rất nhiều người yêu thích. Hương vị thanh mát, giải nhiệt...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-1">
                                        <div className="main-left-img">
                                            <a href="#">
                                                <img className="anh-s" src="img/xoai-lac.jpg" height={300} width={300} />
                                            </a>
                                        </div>
                                        <div className="main-left-text">
                                            <div className="text-top">
                                                <a href="#" style={{textDecoration: 'none'}}>Món ăn</a>
                                            </div>
                                            <div className="text-main">
                                                <h3 className="hover-line"><a href="#" className="text-main-a" style={{textDecoration: 'none'}}>Bật mí cách làm món xoài lắc kết hợp muối tôm chua, cay ngon đúng điệu</a></h3><br />
                                                <p>Nhắc đến những món ăn vặt đang cực kì được yêu thích hiện nay chắc chắn không thể bỏ qua hương vị của xoài lắc. Với vị chua chua, mặn...</p>
                                                <p className="ppp">By <a href="#" style={{textDecoration: 'none'}} className="text-main-a1">Food Wiki</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-left-2">
                                        <ul style={{listStyleType: 'none'}}>
                                            <li className="hover-slide"><a href="#"><i className="fas fa-angle-left" style={{color: '#797272'}} /></a></li>
                                            <li style={{backgroundColor: '#FF2C54'}}><a href="#" style={{color: 'white'}}>1</a></li>
                                            <li className="hover-slide"><a href="#">2</a></li>
                                            <li className="hover-slide"><a href="#"><i className="fas fa-angle-right" style={{color: '#797272'}} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <Sidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Congthuc;