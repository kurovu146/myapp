import React from 'react';

export default function GenericModal({ isOpen, onClose, title, children, primaryAction, secondaryAction }) {
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
          max-width: 582px;
          background: #fff;
          border-radius: 2px;
          box-sizing: border-box;
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
          margin: 20px 40px 30px;
        }
        .cm-button {
          flex: 1;
          padding: 16px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          max-width: 241px;
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
          <div className="cm-content">
            {title && (
              <div className="cm-title">
                {title}
              </div>
            )}
            {children}
          </div>
          <div className="cm-actions">
            <button
              className="cm-button cancel"
              onClick={primaryAction.onClick}
            >
              {primaryAction.text}
            </button>
            <button 
              className="cm-button confirm" 
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.text}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
