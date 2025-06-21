// src/App.js
import React, { useState } from 'react';
import ConfirmationModal from './components/ConfirmationModal';
import InsuranceOffer    from './components/InsuranceOffer';
import InsuranceDetail   from './components/InsuranceDetail';

function App() {
  // state để bật/tắt modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // khi người dùng bấm 'Tiếp tục' ở form lương
  const handleFormContinue = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // TODO: tiếp tục quy trình chi lương mà không mua bảo hiểm
    alert('User chọn không mua bảo hiểm, tiếp tục chi lương');
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    // TODO: điều hướng hoặc mở phần mua bảo hiểm
    alert('User chọn mua bảo hiểm, chuyển sang trang mua');
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const onBackStep = () => {
    // TODO: quay lại bước trước
    alert('Quay lại bước trước');
  };
  const onNextStep = () => {
    // TODO: chuyển sang bước tiếp theo
    alert('Chuyển sang bước tiếp theo');
  };
  const isEmpty = (data) => !data; // giả sử có dữ liệu
  const amountFormat = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  const amountToWord = (amount) => {};
  const language = 'vi'; // giả sử ngôn ngữ là tiếng Việt
  const uploadInfo = {}; // giả sử có thông tin tải lên

  return (
    <div className="App" style={{ padding: 16, fontFamily: 'sans-serif' }}>
      {/* ===== nếu bạn đã có component PayrollForm ===== */}
      {/*
      <PayrollForm onContinue={handleFormContinue} />
      */}
      
      {/* ===== hoặc tạm thời một nút giả lập ===== */}
      <button
        onClick={handleFormContinue}
        style={{
          padding: '8px 16px',
          background: '#00629b',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          marginBottom: 16
        }}
      >
        Tiếp tục
      </button>
      
      {/* Widget Bảo hiểm */}
      <InsuranceOffer />

        <br></br>
      {/* Detail Bảo hiểm */}
      <InsuranceDetail 
        isEmpty={isEmpty}
        amountFormat={amountFormat}
        amountToWord={amountToWord}
        language={language}
        uploadInfo={uploadInfo}
        onBackStep={onBackStep}
        onNextStep={onNextStep}
      />

      {/* Popup xác nhận */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />

    </div>
  );
}

export default App;
