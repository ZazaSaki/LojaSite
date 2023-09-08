import React from 'react';
import { Card, Row, Col } from 'antd';

const cardStyle = {
    border: 'none',
    padding: 0, // Remove padding
    boxShadow: 'none', // Remove box shadow
  };

const MyCard = ({img_src, title, text, fontSize = '20px', flipped = false}) => {
  
    const img = ()=>(
        <Col span={8}>
            <div
                style={{
                width: '100%',
                height: '300px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <img
                src={img_src}
                alt="Image"
                style={{ width: 'fill', height: 'auto' }}
                />
            </div>
          </Col>
    )

    const description = ()=>(
        <Col span={16}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: flipped ? 'flex-end' : 'start',
                    alignItems: flipped ? 'flex-end' : 'flex-start', // Align text to the left
                    height: '100%',
                    padding : '5%',
                }}
            >
                <h3>{title}</h3>
                <p style={{ fontSize: fontSize }} >{text}</p>
            </div>
        </Col>
    ) 

    return (
    <div style={cardStyle}>
      <Row gutter={16}>
        
          {flipped ? description() : img()}
        
        
          {flipped ? img() : description()}
        
      </Row>
    </div>
  );
};

export default MyCard;
