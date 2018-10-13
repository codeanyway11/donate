import css from 'styled-jsx/css';

export default css`
.Banner {
  width: 100%;
  background-color: #2D233E;
}

.Banner_wrapper {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
}

.Banner_title {
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  margin-top: -60px;
  margin-bottom: 25px;
}

.Banner_cta {
  background: none;
  border: 3px solid #F89300;
  padding: 8px 30px;
  color: #F89300;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s all ease;
}

.Banner_cta:hover {
  background: #F89300;
  color: #fff;
}
`;
