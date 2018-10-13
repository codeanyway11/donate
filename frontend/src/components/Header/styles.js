import css from 'styled-jsx/css';

export default css`
.Header {
  background: #1E152E;
  height: 60px;
  border-bottom: 1px solid #0f0a17;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.5);
  z-index: 1;
  box-sizing: border-box;
}

.Header_wrapper {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Brand {
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.Brand_logo {
  margin-right: 10px;
}

.Brand_name {
  font-weight: 700;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.3);
}

.Header_info {
  color: #fff;
}
`;
