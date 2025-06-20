// src/App.js
import React, { useState } from 'react';
import ConfirmationModal from './components/ConfirmationModal';
import InsuranceOffer    from './components/InsuranceOffer';
import TransferStepInformation from './components/TransferStepInformation';
// import PayrollForm      from './components/PayrollForm'; // nếu bạn đã có

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
    console.log('User chọn không mua bảo hiểm, tiếp tục chi lương');
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    // TODO: điều hướng hoặc mở phần mua bảo hiểm
    console.log('User chọn mua bảo hiểm, chuyển sang trang mua');
  };

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

      {/* Popup xác nhận */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />

    </div>
  );
}

export default App;
