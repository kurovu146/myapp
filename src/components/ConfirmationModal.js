import React from 'react';

export default function ConfirmationModal({ isOpen, onClose, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .cm-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .cm-modal {
          width: 582px;
          height: 257px;
          background: #fff;
          border-radius: 2px;
        }
        .cm-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px 14px;
          border-bottom: 1px solid #C7E7F1;
        }
        .cm-title {
          font-size: 14px;
          line-height: 1.5;
          font-weight: 700;
          color: #0A5994;
        }
        .cm-text {
          font-size: 14px;
          font-weight: 500;
          color: #0A5994;
          line-height: 20px;
        }
        .cm-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 30px;
          padding: 0 40px;
        }
        .cm-button {
          flex: 1;
          padding: 16px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 241px;
          height: 50px;
        }
        .cm-button.cancel {
          background: #BED5E5;
          color: #4E5E74;
        }
        .cm-button.confirm {
          background: #005994;
          color: #fff;
        }
      `}</style>

      <div className="cm-overlay" onClick={onClose}>
        <div className="cm-modal" onClick={e => e.stopPropagation()}>
          <div className='cm-content'>
            <div className="cm-title">Đừng bỏ lỡ cơ hội bảo vệ nhân viên của bạn!</div>
            <div className="cm-text">
              Quý khách chưa chọn mua Bảo hiểm Tai nạn Người lao động, sản phẩm giúp bảo vệ
              <br />đội ngũ nhân sự với chi phí hợp lý. Đặc biệt, tháng đầu tiên hoàn toàn MIỄN PHÍ
            </div>
            <div className="cm-text">
              Quý khách muốn tiếp tục giao dịch chi lương mà <strong>không mua bảo hiểm</strong> hay tiếp tục
              <br />Chi lương và <strong>mua bảo hiểm ngay</strong>?
            </div>
          </div>
          <div className="cm-actions">
            <button className="cm-button cancel" onClick={onCancel}>
              Không mua bảo hiểm
            </button>
            <button className="cm-button confirm" onClick={onConfirm}>
              Mua bảo hiểm ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
