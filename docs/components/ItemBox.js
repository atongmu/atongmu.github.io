/*
 * @Author: codingfly
 * @Description: 
 * @Date: 2022-11-21 09:21:35
 * @LastEditTime: 2022-11-21 09:28:11
 * @FilePath: \my-website\docs\components\ItemBox.js
 */


import Space from '@site/src/components/Space';

export const ItemBox = ({children}) => (
  <Space
    style={{
    width:"200px",
    minWidth:"150px",
    height:"65px",
    margin:"10px",
    padding:"10px",
    borderRadius:"5px",
    boxShadow:"0 1px 4px #ccc",
    }}>
    {children}
  </Space>
);