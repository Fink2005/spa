import { Form, Input } from "antd";
import React from "react";

export default function CashAndMoneyMobile({ banking, cash }) {
  return (
    <div className="sm:hidden block">
      <div className="">
        {cash && (
          <Form.Item
            label="Thanh toán bằng tiền mặt"
            name="tien_mat"
            rules={[
              {
                required: true,
                message: "Xin vui lòng điền tiền mặt",
              },
            ]}
          >
            <Input
              className="lg:w-[300px]"
              type="number"
              placeholder="Tiền mặt"
            />
          </Form.Item>
        )}
        {banking && (
          <Form.Item
            label="Thanh toán bằng ngân hàng"
            name="chuyen_khoan"
            rules={[
              {
                required: true,
                message: "Xin vui lòng điền số tiền chuyển khoản",
              },
            ]}
          >
            <Input
              className="lg:w-[300px]"
              type="number"
              placeholder="Tiền ngân hàng"
            />
          </Form.Item>
        )}

        <Form.Item label="Thẻ DV" name="the_dv_t">
          <Input className="lg:w-[300px]" placeholder="thẻ DV" />
        </Form.Item>
      </div>
      <div className="sm:flex justify-between">
        <Form.Item
          label="Nhân viên"
          name="nhan_vien"
          rules={[
            {
              required: true,
              message: "Xin vui lòng điền tên Nhân viên",
            },
          ]}
        >
          <Input className="lg:w-[300px]" placeholder="Tên nhân viên" />
        </Form.Item>
      </div>
    </div>
  );
}
