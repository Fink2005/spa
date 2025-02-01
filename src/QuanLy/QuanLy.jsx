import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import React, { useState } from "react";

export default function QuanLy() {
  const [cash, setCash] = useState(false);
  const [banking, setBanking] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://192.168.1.11:9999/write", values) // Example API
      .then((response) => {
        message.info("Thêm thành công");
      })
      .catch((error) => {
        message.error("Thêm thất bại");
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    message.error("Thêm thất bại");
  };
  const handleCash = (cash) => {
    setCash(cash.target.checked);
  };
  const handleBanking = (banking) => {
    setBanking(banking.target.checked);
  };

  return (
    <div className="p-5 sm:p-0 flex justify-center">
      <Form
        className="w-[1000px]"
        name="basic"
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="sm:flex justify-between">
          <Form.Item label="Số hóa đơn" name="so_hd">
            <Input className="lg:w-[300px]" placeholder="Số hóa đơn" />
          </Form.Item>
          <Form.Item
            label="Khách hàng"
            name="khach_hang"
            rules={[
              {
                required: true,
                message: "xin vui lòng điền tên khách hàng",
              },
            ]}
          >
            <Input className="lg:w-[300px]" placeholder="Tên khách hàng" />
          </Form.Item>
        </div>
        <div className="sm:flex justify-between">
          <Form.Item label="Dịch vụ dưỡng sinh" name="dv_duong_sinh">
            <Input className="lg:w-[300px]" placeholder="Dịch vụ dưỡng sinh" />
          </Form.Item>
          <Form.Item label="Thẻ dịch vụ" name="the_dv">
            <Input className="lg:w-[300px]" placeholder="Thẻ dịch vụ" />
          </Form.Item>
        </div>
        <div className="sm:flex justify-between">
          <Form.Item label="Dịch vụ spa" name="dv_spa">
            <Input className="lg:w-[300px]" placeholder="Dịch vụ spa" />
          </Form.Item>
          <Form.Item label="Dịch vụ nail" name="dv_nail">
            <Input className="lg:w-[300px]" placeholder="Dịch vụ nail" />
          </Form.Item>
        </div>
        <div className="flex w-80 ">
          <Form.Item
            valuePropName="cash"
            label={null}
            rules={[
              {
                required: true,
                message: "xin vui lòng điền tiền mặt",
              },
            ]}
          >
            <Checkbox onChange={handleCash}>Tiền mặt</Checkbox>
          </Form.Item>
          <Form.Item
            valuePropName="banking"
            label={null}
            rules={[
              {
                required: true,
                message: "xin vui lòng điền tiền chuyển",
              },
            ]}
          >
            <Checkbox onChange={handleBanking}>Chuyển khoản</Checkbox>
          </Form.Item>
        </div>
        <div className="sm:flex justify-between">
          <Form.Item label="Thẻ DV" name="the_dv_t">
            <Input className="lg:w-[300px]" placeholder="thẻ DV" />
          </Form.Item>
          {cash && (
            <Form.Item
              label="Thanh toán bằng tiền mặt"
              name="tien_mat"
              rules={[
                {
                  required: true,
                  message: "xin vui lòng điền tiền mặt",
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
        </div>
        <div className="sm:flex justify-between">
          <Form.Item
            label="Nhân viên"
            name="nhan_vien"
            rules={[
              {
                required: true,
                message: "xin vui lòng điền tên Nhân viên",
              },
            ]}
          >
            <Input className="lg:w-[300px]" placeholder="Tên nhân viên" />
          </Form.Item>
          {banking && (
            <Form.Item
              label="Thanh toán bằng ngân hàng"
              name="chuyen_khoan"
              rules={[
                {
                  required: true,
                  message: "xin vui lòng điền số tiền chuyển khoản",
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
        </div>

        <div className=" ">
          <Form.Item
            label="Ghi chú"
            name="ghi_chu"
            className="w-full flex justify-start"
          >
            <textarea
              placeholder="Ghi chú"
              className="w-[400px] border-2 rounded-md"
            ></textarea>
          </Form.Item>
        </div>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
