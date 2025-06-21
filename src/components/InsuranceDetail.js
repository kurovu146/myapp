// src/components/InsuranceDetail.js
import React from 'react';

export default function InsuranceDetail() {

  return (
    <>
      <Success message={<FormattedMessage id="app.containers.billPaymentNpp.confirmTrans" />} />
      <div className="step-content__content">
        <div className="info-box">
          <div className="item-infobox">
            <h2 className="f-title-16"><FormattedMessage id="app.containers.TransferIn.transInfor" /></h2>
            <div className="f-list">
              <div className="f-list__item">
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.CreditCardDetail.accountNo" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text">{`${contentUpload.sendAcct} - ${contentUpload.currency}`}</p>
                      </div>
                    </div>
                  </li>
                  {!isEmpty(uploadInfo.fromAccountName) &&
                    <li>
                      <div className="row">
                        <div className="col-lg-4 col-xl-3">
                          <span className="f-list__label"><FormattedMessage id="app.containers.TransfersApprove.senderAccountName" /></span>
                        </div>
                        <div className="col-lg-7 col-xl-7">
                          <p className="f-list__text">{uploadInfo.fromAccountName}</p>
                        </div>
                      </div>
                    </li>
                  }
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.creditCard.availableBalanceAccSend" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text">{amountFormat(contentUpload.availableBalance)} {contentUpload.currency}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="f-list__item">
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.TransferIn.totalTrans" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text text-danger">{amountFormat(contentUpload.totalAmount)} {contentUpload.currency}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.InterbankTransfer.amountInWord" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text">{amountToWord(contentUpload.totalAmount, language, contentUpload.currency)}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.TransfersApprove.fileAttack" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text"><a style={{ textDecoration: "underline" }}>{contentUpload.fileContent.name}</a></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="f-list__item">
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.InterbankTransfer.reference" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text">{contentUpload.content}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-lg-4 col-xl-3">
                        <span className="f-list__label"><FormattedMessage id="app.containers.Bonds.fee" /></span>
                      </div>
                      <div className="col-lg-7 col-xl-7">
                        <p className="f-list__text  text-danger">{amountFormat(uploadInfo.totalFee)} {contentUpload.currency}</p>
                      </div>
                    </div>
                  </li>
                  {contentUpload.processTime &&
                    <li>
                      <div className="row">
                        <div className="col-lg-4 col-xl-3">
                          <span className="f-list__label"><FormattedMessage id="app.containers.InterbankTransfer.scheduleDate" /></span>
                        </div>
                        <div className="col-lg-7 col-xl-7">
                          <p className="f-list__text">{contentUpload.processTime}</p>
                        </div>
                      </div>
                    </li>
                  }
                </ul>
              </div>
              {isSelectedInsurance && (
                <div className="f-list__item">
                  <ul>
                    <li>
                      <div className="row">
                        <div className="col-lg-4 col-xl-3">
                          <span className="f-list__label"><FormattedMessage id="app.containers.Insurance.type" /></span>
                        </div>
                        <div className="col-lg-7 col-xl-7">
                          <p className="f-list__text">Bảo hiểm tai nạn lao động - kỳ 1 năm {/*contentUpload.insuranceAccident*/}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-lg-4 col-xl-3">
                          <span className="f-list__label"><FormattedMessage id="app.containers.Insurance.fee" /></span>
                        </div>
                        <div className="col-lg-7 col-xl-7">
                          <p className="f-list__text  text-danger">{contentUpload.textFree}</p>
                          <div>Hệ thống tự động thu phí bảo hiểm từ tháng thứ 2 qua tài khoản chi lương của doanh nghiệp</div>
                          <div>Số tiền bảo hiểm tạm tính = xxx{/*amountFormat(uploadInfo.insuranceFee)*/} VNĐ (Số lượng nhân viên đăng ký x 10.000 VNĐ)</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="button-wrap">
              <div className="button-group-flex">
                <div className="btn-left">
                  <a className="btn btn-back" onClick={onBackStep}><i className="fa fa-angle-left" /><FormattedMessage id="app.containers.InterbankTransfer.goBack" /></a>
                </div>
                <div className="btn-right">
                  <a className="btn" onClick={onNextStep}><FormattedMessage id="app.containers.InterbankTransfer.toVerify" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
}
