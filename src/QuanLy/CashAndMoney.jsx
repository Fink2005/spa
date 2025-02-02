import { Form, Input } from "antd";
import React from "react";

export default function CashAndMoney({
  cash,
  banking,
  formattedValue,
  formattedValue2,
  handleChange2,
  handleChange,
}) {
  return (
    <div className="sm:block hidden">
      <div className="sm:flex justify-between">
        <Form.Item label="Thẻ DV" name="the_dv_t">
          <Input className="lg:w-[300px]" placeholder="thẻ DV" />
        </Form.Item>
        {cash && (
          <Form.Item
            className="sm:w-[300px] w-full"
            label="Thanh toán bằng tiền mặt"
            name="tien_mat"
            rules={[
              {
                required: true,
                message: "Xin vui lòng điền tiền mặt",
              },
            ]}
          >
            <Form.Item>
              <Input
                value={formattedValue}
                onChange={handleChange}
                placeholder="Nhập số"
              />
            </Form.Item>
          </Form.Item>
        )}
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
        {banking && (
          <Form.Item
            className="w-full sm:w-[300px]"
            label="Thanh toán bằng ngân hàng"
            name="chuyen_khoan"
            rules={[
              {
                required: true,
                message: "Xin vui lòng điền tiền mặt",
              },
            ]}
          >
            <Form.Item>
              <Input
                value={formattedValue2}
                onChange={handleChange2}
                placeholder="Nhập số tiền"
              />
            </Form.Item>
          </Form.Item>
        )}
      </div>
    </div>
  );
}
