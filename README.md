
# 안중근의사기념관 리뉴얼페이지

![Group 2099](https://user-images.githubusercontent.com/100025580/231380909-15c92af2-17f0-4b73-a9f0-933eb6c18938.png)

## 🖥 사이트 바로 가기
http://ajgrenewal.dothome.co.kr/

<br>

## 🌱 프로젝트 소개및 제작 계기
안중근의사를 기리는 사이트인 안중근의사기념관 사이트를 보니 이목을 집중시키기에는 비주얼적인 요소가 다소 부족하다고 느껴 역사에 관심이 많은 분들과 안중근 의사에 관련한 정보를 필요로 하는 학생들을 타겟으로 잡고 리뉴얼 사이트를 제작하였습니다.

<br>

## ☘️ 주요기능

#### scroll 이벤트 

- scroll 이벤트를 사용하여 svg 이미지가 스크롤 될 때마다 그려지도록 구현
- 스크롤시에 text가 계속해서 바뀌도록 구현

#### 파일 다운로드 

- 안중근의사에 대한 교육자료들을 파일로 다운로드 

#### 편지쓰기
- 이름, 내용을 적고 전송하기 버튼을 클릭하면 편지함 Swiper 안에 출력되고 출력 된 내용은 삭제 가능

<br>

## 🔨 기술스택

### **Tech**

<p>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>
<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
<img src="https://img.shields.io/badge/SweetAlert2-362D59?style=for-the-badge&logo=SweetAlert2&logoColor=black">
<br>
</p>

### **Design**
<p>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/adobeillustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white"/>
<img src="https://img.shields.io/badge/adobepremierepro-9999FF?style=for-the-badge&logo=adobepremierepro&logoColor=white"/>
</p>

### **Tools**

<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<br>
</p>

<br>

<br/>

## 🔥 Trouble shooting
<details>
<summary><strong> issue1: 메인 페이지(자동 스크롤) </strong></summary>

페이지 실행 시 자동으로 스크롤되게하려고 setinterval 함수를 사용했었지만 해결되지않아 setinterval안에서 if문추가로 해결
</details>

<details>
<summary><strong> issue2: 배포후 링크연결 </strong></summary>

깃허브로 배포 했더니 iframe속의 url이 연결되지않아 외부도메인을 이용해 배포
</details>

<details>
<summary><strong> issue3: 반응형 스크립 </strong></summary>

반응형에 맞춰 스크립트를 수정하는 과정에서 새로고침 없이 마우스휠 이벤트가 제거되지 않는 이슈가 발생
-> resize()  메서드를 사용하다가 matchMedia 메소드를 사용하여 불린값으로 조건을 주어 pc와 스크린 사이즈 820 이하의 화면에서 이벤트를 다르게 줌

</details>

<details>
<summary><strong> issue4: class 적용 </strong></summary>

swiper 슬라이더 안에 편지 내용을 추가하는 과정에서 class mySwiper가 적용되지 않는 이슈가 발생하여 swiper를 함수로 묶
어 편지를 추가시킬때마다 실행되도록 하여 문제 해결.
</details>





<br></br>
## 🌸 와이어프레임

[💾 와이어프레임](https://www.figma.com/file/Gi6e6OoQosyf3b5izSf87U/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84(%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B801)?node-id=0-1&t=5j95ophG7vyTLEPo-0)

<br></br>
