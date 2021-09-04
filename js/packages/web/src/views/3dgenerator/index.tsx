import { Col, Layout } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { useMeta } from '../../contexts';
import { Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';

const { Content } = Layout;

export const ThreeDGeneratorView = () => {
  const generate = useCallback(
    
  );

  const mint = useCallback(
    
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10, margin: '30px 0px 0px', 'align-items': 'center' }}>
        <div className="generator-wrapper" style={{ width: '100%', marginTop: 10, 'background-color': 'rgb(0, 0, 0)', padding: '10px', 'border-radius': '20px', 'box-shadow': 'rgb(255, 255, 255) 2px 2px 1px 1px', border: '1px solid rgb(255, 255, 255)' }}>
          <div className="generator-header" style={{'text-align': 'center'}}>
            <p>
              Use our 3D image generator to create a super awesome unique NFT for yo' sexy self.
            </p>
            <p>
              If its fire and you dig it, mint that bad boy and secure your dominance on the Solana blockchain!
            </p>
          </div>
          <div className="generator-image" style={{'text-align': 'center'}}>
            image goes here
          </div>
          <p></p>
          <div className="generator-footer" style={{'text-align': 'center'}}>
            <Button type="primary" className="app-btn" onClick={generate}>
              Generate it!
            </Button>
            <p></p>
            <Button type="primary" className="app-btn" onClick={mint}>
              Mint it!
            </Button>
          </div>
        </div>
        </Col>
      </Content>
    </Layout>
  );
};
