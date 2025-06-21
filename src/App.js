// src/App.js
import React, { useState } from 'react';
import GenericModal from './components/GenericModal';
import InsuranceOffer    from './components/InsuranceOffer';

function App() {
  // state để bật/tắt modal
  const [showBuyModal1, setShowBuyModal1] = useState(false);
  const [showBuyModal2, setShowBuyModal2] = useState(false);

  return (
    <div className="App" style={{ padding: 16, fontFamily: 'sans-serif' }}>
      {/* Widget Bảo hiểm */}
      <InsuranceOffer />

      <button onClick={() => setShowBuyModal1(true)}>Hiện popup 1</button>
      <button onClick={() => setShowBuyModal2(true)}>Hiện popup 2</button>

      <GenericModal
        isOpen={showBuyModal1}
        onClose={() => setShowBuyModal1(false)}
        title="Đừng bỏ lỡ cơ hội bảo vệ nhân viên của bạn!"
        primaryAction={{
          text: 'Không mua bảo hiểm',
          onClick: () => {
            setShowBuyModal1(false);
            alert('Tiếp tục giao dịch chi lương mà không mua bảo hiểm');
          },
        }}
        secondaryAction={{
          text: 'Mua bảo hiểm ngay',
          onClick: () => {
            setShowBuyModal1(false);
            alert('Chuyển đến trang mua bảo hiểm');
          },
        }}

      >
        <div className="cm-text">
          Quý khách chưa chọn mua Bảo hiểm Tai nạn Người lao động, sản phẩm giúp bảo vệ
          đội ngũ nhân sự với chi phí hợp lý. Đặc biệt, tháng đầu tiên hoàn toàn MIỄN PHÍ.
        </div>
        <div className="cm-text">
          Quý khách muốn tiếp tục giao dịch chi lương mà <strong>không mua bảo hiểm</strong> hay tiếp tục
          Chi lương và <strong>mua bảo hiểm ngay</strong>?
        </div>
      </GenericModal>

      <GenericModal
        isOpen={showBuyModal2}
        onClose={() => setShowBuyModal2(false)}
        primaryAction={{
          text: 'Quay lại',
          onClick: () => {
            setShowBuyModal2(false);
            alert('Quay lại');
          },
        }}
        secondaryAction={{
          text: 'Tiếp tục',
          onClick: () => {
            setShowBuyModal2(false);
            alert('Tiếp tục');
          },
        }}
      >
        <div className="cm-text">
          Giao dịch số <strong>F32425626</strong> là giao dịch chi lương kèm mua bảo hiểm.
        </div>
        <div className="cm-text">
          Quý khách vui lòng tiếp tục phê duyệt các giao dịch có cả chi lương kèm mua bảo hiểm hay quay lại danh sách chờ duyệt?
        </div>
      </GenericModal> 

    </div>
  );
}

export default App;
