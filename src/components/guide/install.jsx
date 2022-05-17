import styled from "@emotion/styled";

const Install = () => {
  return (
    <div>
      <H1>Dokerby 설치</H1>
      <P1>dockerby에서는 8482 Port를 지정해서 사용하고 있습니다.</P1>
      <P1>최신 버전 정보 `0.0.6`</P1>
      <P1>해당 Docker Hub를 참고하시길 바랍니다.</P1>
      <P1>
        <a
          href="https://hub.docker.com/r/edh1021/dockerby"
          target="_blank"
          rel="noreferrer"
        >
          https://hub.docker.com/r/edh1021/dockerby
        </a>
      </P1>
      <Span1>Install</Span1>
      <Textbox>
        sudo docker run -d -p 8482:80 -v
        /var/run/docker.sock:/var/run/docker.sock -v
        /usr/bin/docker:/usr/bin/docker -v /var/dockerby:/var/dockerby --name
        dockerby edh1021/dockerby:0.0.4
      </Textbox>
    <br />
    <br />
      <Span1>Dockerby 접속</Span1>
      <Textbox>
      서버 도메인 주소에 8482 port로 접속하면 Dockerby에 접속 할 수 있습니다 
      ex)  http://k6s205.p.ssafy.io:8482
      </Textbox>
      <br />
      <br />
    <Img1 src="img/guide/install/01.png" alt="01" />
    <br />
    <br />
    <br />
    <Colorbox>
      📢 접속이 안될경우?
    </Colorbox>

      <P1>
        *AWS 방화벽이나 PORT를 허용하지 않아 8482 PORT가 막혀 있을 수 있습니다.   
      </P1>
      <br />
      <h3>
         1. 우분투 방화벽 설정이 되있는 경우
      </h3>
      <Textbox>
             sudo ufw allow 8482
      </Textbox>
      <Content>
                - 우분투 방화벽에서 8482 PORT 허용
      </Content>

      <br />
      <h3>
          2. AWS EC2 보안탭 설정이 안되있는경우
      </h3>

      <Img1 src="img/guide/install/02.png" alt="02" />
  
      <Content>
      -  EC2 -인스턴스- 보안탭에서 보안그룹 선택      
      </Content>
      <br />
      <br />
      <Img1 src="img/guide/install/03.png" alt="03" />
      <Content>
      -  인바운드 규칙 편집 선택     
      </Content>

      <br />
      <br />
      <Img1 src="img/guide/install/04.png" alt="04" />
      <Content>
      -   8482 PORT에 대한 규칙 추가      
      </Content>

    <br />
    <br />
    </div>
    
  );
};
export default Install;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const Textbox = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  color: 000099;
  font-size: 18px;
`;

const Span1 = styled.span`
  font-size: 32px;
  color: 1976D2;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
const Content = styled.p`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 2%;
`;
const Img1 = styled.img`
  max-width: 800px;
`;

const Colorbox = styled.div`
border: 1px solid black;
border-color: D9D9D9;
padding: 10px;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 16px;
background-color: CCFFFF;
color: black;
font-size: 18px;
width: 800px;
`;