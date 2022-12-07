import styled from "styled-components";

// styled 라는 이름으로 불러온다.
// 아래는 스타일이 적용된 div 태그를 만들려는 것이다. styled.태그이름``;
// 과 같이 사용하면 된다. `` 안에는 스타일이 들어간다. CSS 문법과 완전히 같다.
export const TestDiv = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 900;
  font-size: 2rem;
  background-color: #333333;
`;
// 이렇게 만든 스타일드 컴포넌트는 어디서든 사용할 수 있다.

// 이렇게도 사용이 가능한데, 이것은 이미 존재하는 컴포넌트의 스타일을 덮어쓰려고 할 때 사용한다.
// 위에서 만든 컴포넌트의 배경을 바꿔서 적용한 컴포넌트이다.
export const TestDivExtend = styled(TestDiv)`
  background-color: blue;
`;
