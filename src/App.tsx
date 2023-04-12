import React from "react";
import { Button, Form, Col, Row, Input } from 'antd'
import { Colorpicker, ColorPickerValue } from 'antd-colorpicker'


function App() {

  const initialValue = { color: '#121212' }

  const handleOnFinish = (values: { color: ColorPickerValue }) => {
    console.log(values)
  }

  return (
    <div className="App">
      <Form>
        <Row style={{ alignItems: 'center' }} gutter={20}>
          <Col flex={1}>
            <Form.Item name="PickerTest" label="PickerTest">
              <Input placeholder="Color Test" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='Colorpicker' name='color' initialValue={initialValue}>
              <Colorpicker
                popup
                blockStyles={{
                  width: '60px',
                  height: '30px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                default
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Show values in console
          </Button>
        </Form.Item>

      </Form>

    </div >
  )
};

export default App
