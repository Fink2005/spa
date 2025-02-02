import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
export default function QuanLy() {
  const [cash, setCash] = useState(false);
  const [banking, setBanking] = useState(false);
  const [display, setDisplay] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    document.body.style.overflow = "hidden";
    setDisplay(true);
    // Re-enable scrolling after 5 seconds (5000 milliseconds)
    axios
      .post("https://managevitiencat.vercel.app/write", values) // Example API
      .then((response) => {
        message.info("Thêm thành công");
        document.body.style.overflow = "";
        setDisplay(false);
      })
      .catch((error) => {
        message.error("Thêm thất bại");
        setDisplay(false);
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
    <div className="relative w-full">
      <h1 className="text-center text-3xl py-5 text-green-500">
        Quản lí khách hàng <br /> Vi Tiên Cát
      </h1>
      <div className="p-5 sm:p-0 sm:flex justify-center w-full ">
        <Form
          name="basic"
          scrollToFirstError
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="true"
          className="sm:w-[900px] "
        >
          <div className="sm:flex justify-between">
            <Form.Item label="Số hóa đơn" name="so_hd">
              <Input className="lg:w-[300px] w-full" placeholder="Số hóa đơn" />
            </Form.Item>
            <Form.Item
              label="Khách hàng"
              name="khach_hang"
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng điền tên khách hàng",
                },
              ]}
            >
              <Input className="lg:w-[300px]" placeholder="Tên khách hàng" />
            </Form.Item>
          </div>
          <div className="sm:flex justify-between">
            <Form.Item label="Dịch vụ dưỡng sinh" name="dv_duong_sinh">
              <Input
                className="lg:w-[300px]"
                placeholder="Dịch vụ dưỡng sinh"
              />
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
                  message: "Xin vui lòng điền tiền mặt",
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
                  message: "Xin vui lòng điền tiền chuyển",
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
          </div>

          <div className=" ">
            <p className="font-semibold pb-2">Ghi chú</p>
            <Form.Item name="ghi_chu" className="w-full flex justify-start">
              <textarea
                className="sm:w-[400px] w-[320px] border-2 rounded-md ps-2"
                placeholder="Điền ghi chú"
              ></textarea>
            </Form.Item>
          </div>
          <Form.Item label={null}>
            <Button htmlType="submit" className="bg-green-700">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </div>
      {display && (
        <div className="fixed top-0 left-0 w-full h-full bg-green-800 z-50">
          <motion.div
            className="absolute top-1/3 right-1/3"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <img
              src="/assets/logo.jpg"
              className="size-36 rounded-full"
              alt=""
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
