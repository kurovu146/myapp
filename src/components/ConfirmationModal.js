import React from 'react';

export default function ConfirmationModal({ isOpen, onCancel, onConfirm }) {
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
          width: 90%;
          max-width: 400px;
          background: #fff;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .cm-title {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 12px;
          color: #333;
        }
        .cm-text {
          font-size: 0.9rem;
          color: #444;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .cm-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        .cm-button {
          flex: 1;
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .cm-button.cancel {
          background: #f0f0f0;
          color: #333;
        }
        .cm-button.confirm {
          background: #00629b;
          color: #fff;
        }
      `}</style>

      <div className="cm-overlay" onClick={onCancel}>
        <div className="cm-modal" onClick={e => e.stopPropagation()}>
          <div className="cm-title">Đừng bỏ lỡ cơ hội bảo vệ nhân viên của bạn!</div>
          <div className="cm-text">
            Quý khách chưa chọn mua Bảo hiểm Tai nạn Lao động, sản phẩm giúp bảo vệ đội ngũ nhân sự với chi phí hợp lý. Đặc biệt, tháng đầu tiên hoàn toàn MIỄN PHÍ!<br/><br/>
            Quý khách muốn tiếp tục giao dịch chi lương mà <strong>không mua bảo hiểm</strong> hay tiếp tục Chi lương và <strong>mua bảo hiểm ngay</strong>?
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
