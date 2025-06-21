import React, { useState } from 'react';
import changeCoin from '../assets/icons/change-coin.png';
import shieldImg from '../assets/icons/credit-card-shield.png';
import moneyImg from '../assets/icons/money-tree.png';
import phoneImg from '../assets/icons/Call.png';

const data = {
    benefits: [
        {
            id: 1,
            icon: moneyImg,
            title: 'Phí bảo hiểm chỉ',
            description: '10,000 VNĐ/nhân viên/tháng',
        },
        {
            id: 2,
            icon: shieldImg,
            title: 'Quyền lợi bảo vệ lên đến',
            description: '84 triệu đồng',
        },
        {
            id: 3,
            icon: changeCoin,
            title: 'Thanh toán',
            description: 'tự động định kỳ hàng tháng',
        },
        {
            id: 4,
            icon: phoneImg,
            title: 'Hotline hỗ trợ 24/7',
            description: '1900 1566',
        },
    ],
    agreementText:
        'Xác nhận mua bảo hiểm và đồng ý với Điều khoản & Điều kiện tham gia bảo hiểm',
    disclaimer:
        'Sản phẩm bảo hiểm này được cung cấp bởi Bảo hiểm VietinBank (VBI), việc tham gia sản phẩm bảo hiểm này không gắn với việc cung ứng sản phẩm, dịch vụ VietinBank eFAST. Bằng việc xác nhận đồng ý, Quý khách ủy quyền cho VietinBank sử dụng thông tin doanh nghiệp và nhân viên để cấp hợp đồng bảo hiểm qua TKTT tại VietinBank.',
};

export default function InsuranceOffer() {
    const [agreed, setAgreed] = useState(false);

    return (
        <>
            <style>{`
        .io-container {
          max-width: 951px;
          min-height: 300px;
          border: 1px solid #8cbce6;
          border-radius: 4px;
          font-family: sans-serif;
          background: linear-gradient(180deg, #E8FAFF, #FFFFFF);
        }
        .io-title {
          max-width: 286px;
          max-height: 36px;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          line-height: 150%;
          align-content: center;
          color: #ffffff;
          background: #00629b;
          border-radius: 4px 0 4px 0;
        }
        .io-content {
          padding: 28px 20px 24px 20px;
        }
        .io-free-note {
          height: 20px;
          color: #09496D;
          font-size: 16px;
          font-weight: 700;
          align-content: center;
        }
        .io-see-more {
          padding-left: 20px;
          font-size: 12px;
          font-weight: 500;
          color: #0A5994;
          text-decoration: underline;
          font-weight: bold;
          cursor: pointer;
        }
        .io-benefits {
          display: flex;
          gap: 20px;
          margin-bottom: 12px;
          justify-content: center;
        }
        .io-card {
          width: 156px;
          background: #F0F8FA;
          padding: 8px 12px;
          border-radius: 8px;
          align-items: center;
        }
        .io-icon {
          margin-right: 8px;
          width: 32px;
          height: 32px;
          color: #00629b;
          padding-bottom: 4px;
        }
        .io-text h4 {
          margin: 0;
          font-size: 12px;
          color: #09496D;
          font-weight: 700;
          white-space: nowrap;
        }
        .io-text p {
          margin: 4px 0 0;
          font-size: 12px;
          color: #073F69;
          font-weight: 400;
        }
        .io-content-one {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .io-content-two {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .io-agreement {
          display: flex;
          margin-bottom: 8px;
          font-weight: 700;
          font-size: 14px;
          color: #09496D;
          align-items: center;
        }
        .io-confirm-text {
          display: flex;
          margin-left: 8px;
          font-size: 14px;
          color: #09496D;
          gap: 4px;
        }
        .io-disclaimer {
          font-size: 10px;
          font-weight: 500;
          color: #073F69;
          line-height: 1.5;
          padding-left: 16px;
        }
        @media (max-width: 768px) {
          .io-text p,
          .io-text h4 {
            white-space: normal;   /* cho phép xuống dòng */
            text-overflow: inherit;
          }
        }
      `}</style>

            <div className="io-container">
                <div className="io-title">Bảo hiểm tai nạn lao động</div>
                <div className='io-content'>
                    <div className='io-content-one'>
                        <div className="io-free-note">
                            Tham gia ngay để được{' '}
                            <span style={{ color: '#ff0000', fontWeight: 'bold' }}>
                                MIỄN PHÍ 1 THÁNG
                            </span>{' '}
                            đầu tiên!{' '}
                            <span className="io-see-more" onClick={() => {alert('Xem thêm')}}>Xem thêm</span>
                        </div>

                        <div className="io-benefits">
                            {data.benefits.map(b => (
                                <div key={b.id} className="io-card">
                                    <div className="io-icon">
                                        <img
                                            src={b.icon}
                                            alt={b.title}
                                            width={33}
                                            height={33}
                                        />
                                    </div>
                                    <div className="io-text">
                                        <p>{b.title}</p>
                                        <h4>{b.description}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='io-content-two'>
                        <div className="io-agreement">
                            <input
                                type="checkbox"
                                style={{width: '18px', height: '18px', cursor: 'pointer'}}
                                checked={agreed}
                                onChange={() => setAgreed(v => !v)}
                            />{' '}
                            <div className='io-confirm-text'>
                                <div>Xác nhận mua bảo hiểm và đồng ý với</div>
                                <div
                                    onClick={() => {alert('Chuyển đến trang điều khoản & điều kiện')}}
                                    style={{ textDecoration: 'underline', color: '#09496D', cursor: 'pointer' }}
                                >
                                    Điều khoản &amp; Điều kiện
                                </div> 
                                <div>tham gia bảo hiểm</div>
                            </div>
                        </div>

                        <div className="io-disclaimer">{data.disclaimer}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
