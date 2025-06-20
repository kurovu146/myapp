// src/components/TransferStepInformation.js
import React from 'react';

export default function TransferStepInformation() {
  return (
    <div className="boxwrap-shadow transfers-step__information">
      {/* --- Phương thức --- */}
      <div className="item item-methor">
        <div className="form-wrap">
          <div className="row align-items-center">
            <div className="col-lg-4 col-xl-3">
              <label className="form-wrap__label">Phương thức</label>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="form-wrap__content">
                <div className="checkbox-typeTransfer">
                  <div className="row">
                    <div className="col-6 col-xl-6">
                      <label className="checkbox-type">
                        <input
                          type="radio"
                          name="transferMethod"
                          className="checkbox-type__input"
                          defaultChecked
                        />
                        <div className="checkbox-type__inner">
                          <p className="checkbox-type__text">
                            <span />
                            Chi lương tự động
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="col-6 col-xl-6">
                      <label className="checkbox-type">
                        <input
                          type="radio"
                          name="transferMethod"
                          className="checkbox-type__input"
                        />
                        <div className="checkbox-type__inner">
                          <p className="checkbox-type__text">
                            <span />
                            Danh bạ chuyển khoản
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Tài khoản chuyển --- */}
      <div className="item item-transferAccount">
        <div className="form-wrap">
          <div className="row align-items-center">
            <div className="col-md-4 col-xl-3">
              <h4 className="f-title-16 w-600">Số tài khoản (*)</h4>
            </div>
            <div className="col-md-8 col-xl-9">
              <div className="form-wrap__content">
                <div className="form-group">
                  <select className="form-control">
                    <option value="">-- Chọn tài khoản --</option>
                    <option value="001">001 - 123456789</option>
                    <option value="002">002 - 987654321</option>
                  </select>
                  <span className="f-hightline"></span>
                  {/* <p className="error-text">Vui lòng chọn tài khoản</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Chi tiết giao dịch --- */}
      <div className="item item-beneficiary">
        <h4 className="f-title-16 w-600">Chi tiết giao dịch</h4>

        {/* Số tiền */}
        <div className="form-wrap">
          <div className="row align-items-center">
            <div className="col-lg-4 col-xl-3">
              <label className="form-wrap__label">Số tiền</label>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="form-wrap__content">
                <div className="form-group">
                  <div className="input-money style-2">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="1,000,000"
                    />
                    <span className="f-icon">VND</span>
                  </div>
                  <span className="f-hightline" />
                  <p style={{ margin: '10px 0 0 0' }}>
                    Một triệu đồng
                  </p>
                  {/* <p className="error-text">Số tiền không hợp lệ</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* File đính kèm */}
        <div className="form-wrap">
          <div className="row align-items-center">
            <div className="col-md-4 col-xl-3">
              <label className="form-wrap__label">Đính kèm tệp</label>
              <br />
              <div className="uploadFile__footer">
                <a href="#" style={{ fontSize: 12, color: '#005896' }}>
                  Tải mẫu Excel
                </a>
              </div>
            </div>
            <div className="col-md-8 col-xl-9">
              <div className="form-wrap__content">
                <div className="form-group">
                  <div className="input-file">
                    <div className="input-file__inner">
                      <input
                        type="file"
                        className="fileInput"
                      />
                      <p className="form-control">
                        <span className="btn">Chọn tệp</span>
                        {/* nếu có tệp: */}
                        {/* myfile.xlsx <span className="btn-delete-file">×</span> */}
                      </p>
                    </div>
                  </div>
                  <span className="f-hightline" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nội dung */}
        <div className="form-wrap">
          <div className="row align-items-center">
            <div className="col-md-4 col-xl-3">
              <label className="form-wrap__label">
                Nội dung giao dịch <span>(còn 146 ký tự)</span>
              </label>
            </div>
            <div className="col-md-8 col-xl-9">
              <div className="form-wrap__content">
                <div className="form-group">
                  <textarea
                    className="form-control textareaCharacter"
                    maxLength={146}
                    defaultValue="Chuyển tiền lương tháng 6"
                    style={{ resize: 'none' }}
                  />
                  <span className="f-hightline" />
                  {/* <p className="error-text">Nội dung không được để trống</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thời gian chuyển */}
        <div className="form-wrap">
          <div className="row align-items-center">
            <div className="col-md-4 col-xl-3" />
            <div className="col-md-8 col-xl-9">
              <div className="form-wrap__content">
                <div className="input-tab-footer">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tab-now"
                        role="tab"
                      >
                        <span><i className="icon-set1-31" /></span> Chuyển ngay
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tab-schedule"
                        role="tab"
                      >
                        <span><i className="icon-set1-31" /></span> Đặt lịch
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="tab-now"
                      role="tabpanel"
                    >
                      <p className="f-text">
                        Chuyển ngay: <b>19/06/2025</b>
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-schedule"
                      role="tabpanel"
                    >
                      <p className="f-text">
                        Đặt lịch: <b>22/06/2025</b>
                      </p>
                      <input type="date" className="form-control" />
                      <select className="form-control" style={{ marginTop: 8 }}>
                        <option>08:00</option>
                        <option>12:00</option>
                        <option>17:00</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Nút hành động --- */}
      <div className="step-content__submit">
        <div className="btn-wrap">
          <button type="button" className="btn btn-delete" style={{ marginRight: 10 }}>
            Xóa
          </button>
          <button type="button" className="btn btn-next">
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
