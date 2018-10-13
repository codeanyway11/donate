import css from 'styled-jsx/css';

export default css`
.content_layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  padding: 0 15px;
  box-sizing: border-box;
}

@media (min-width:320px)  {
  .content_layout {
    width: 100%;
  }
}

@media (min-width:1280px) {
  .content_layout {
    max-width: 1280px;
    margin: 0 auto;
  }
}
`;
