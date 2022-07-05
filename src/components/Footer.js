import React from "react";
import "./css/Footer.css";

import Store from "../assets/Store.svg";

export const Footer = () => {
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-center">
            {/* <h3>SẢN PHẨM</h3>
          <a href="#">Giày Nam</a>
          <a href="#">Giày Nữ</a>
          <a href="#">Thời trang & Phụ kiện</a>
          <a href="#">Sale-off</a> */}
            <img src={Store} alt="img" />
          </div>

          <div className="footer-center">
            <h3>VỀ CÔNG TY</h3>
            <a href="#">Dứa tuyển dụng</a>
            <a href="#">Liên hệ nhượng quyền</a>
            <a href="#">Về Ananas</a>
          </div>

          <div className="footer-center">
            <h3>HỖ TRỢ</h3>
            <a href="#">FAQs</a>
            <a href="#">Bảo mật thông tin</a>
            <a href="#">Chính sách chung</a>
            <a href="#">Tra cứu đơn hàng</a>
          </div>

          <div className="footer-center">
            <h3>LIÊN HỆ</h3>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              Email góp ý
            </div>
            <div>
              <span>
                <i className="far fa-envelope"></i>
              </span>
              Email góp ý
            </div>
            <div>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              0963 429 749
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
