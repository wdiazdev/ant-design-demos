import React, { useState } from "react";
import { Form, Col, Row, Input, Skeleton } from 'antd'
import { Colorpicker, ColorPickerValue } from 'antd-colorpicker'

const App: React.FC = () => {

  const [form] = Form.useForm();

  const defaultColor: string = '#121212'

  const [selectedColor, setSelectedColor] = useState<string>('')

  const handleColorChange = (color: any) => {
    const newColor = color.hex
    setSelectedColor(newColor)
    console.log(selectedColor)
    form.setFieldsValue({ PickerTest: selectedColor });
  }


  return (
    <div className='App'>

      <Skeleton loading={false}>

        <Form>

          <Row style={{ alignItems: 'center', }} gutter={10}>

            <Col flex={1}>
              <Form.Item name='PickerTest' label='Your Hex'>
                <Input placeholder='Hex color' value={selectedColor} />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name='color' initialValue={defaultColor} >
                <Colorpicker
                  popup
                  blockStyles={{
                    width: '60px',
                    height: '30px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  onChange={handleColorChange}
                />
              </Form.Item>
            </Col>

          </Row>

        </Form>

      </Skeleton>

    </div >
  )
};

export default App
