# Movie memory

- 영화 커뮤니티 사이트입니다. 영화 포스터를 올리고, 영화에 대한 의견을 자유롭게 공유할 수 있도록 제작하였습니다.
- TMDB의 API를 사용하여 영화 검색을 통해 간단한 영화 정보를 알 수 있고, 현재 상영작과 인기 영화 리스트를 볼 수 있습니다.

</br>

## 메인 페이지
![main2-min](https://user-images.githubusercontent.com/114736992/225246284-317f6c2a-d254-4092-955b-96092c0d1c67.gif)

- TMDB Rest API를 사용해서 현재 상영작, 인기 영화 데이터 게시
- 영화 리스트 호버 시 영화 제목, 평점 등 영화 상세 정보 제공

</br>

## 영화 검색 페이지
![search](https://user-images.githubusercontent.com/114736992/226272105-db09c7a4-6d46-429d-afa8-a8cb291b5ff4.gif)

- TMDB Rest API를 사용해서 검색어에 일치하는 영화 검색 기능 구현
- 영화 호버 시 영화 제목, 평점 등 영화 상세 정보 제공

</br>

## 회원가입 페이지
![signup-min](https://user-images.githubusercontent.com/114736992/225246765-8cb4057f-79ff-4198-a09c-2ca40cafbff2.gif)

- react-hook-form 라이브러리를 사용해 회원가입, 로그인 폼을 구현해 form 제어 코드의 복잡도를 줄임
- 로그인 이후 리프레시 토큰을 활용한 로그인 유지 기능 구현

</br>

## 게시판 페이지
![boardlist2-min](https://user-images.githubusercontent.com/114736992/225246866-f99e6258-92a9-4683-adcc-b822f0271f81.gif)

- GraphQl 데이터를 사용해서 상단에 인기 게시물 구현
- 인피니트 스크롤 라이브러리를 사용하여 게시판 리스트 구현
- 화면 오른쪽 하단 POST 버큰 클릭시 게시물 등록 기능 구현

</br>

## 게시글 작성 페이지
![boardwrite-min](https://user-images.githubusercontent.com/114736992/225246954-f8471bc6-52e4-4501-9cb3-3fc69c05b7bf.gif)

- 폼 라이브러리 useForm 활용
- Reactquill을 활용한 에디터폼 구현

</br>

## 게시글 상세 페이지
![boarddetail](https://user-images.githubusercontent.com/114736992/225247078-f532f351-7e9f-4be8-a3dd-ed4ba472c4aa.gif)

- 동적 라우팅 활용한 페이지 이동
- GraphQl 데이터를 사용해서 댓글 기능, 좋아요 / 싫어요 기능 구현
- Reactquill을 활용한 에디터폼 구현

</br>

## 마이 페이지
![mypage](https://user-images.githubusercontent.com/114736992/225247191-26b68cc2-7cc1-4bc5-a555-124b8e6ae875.gif)

- 권한분기(useAuth)를 활용한 accessToken 검증 및 접근 제한 기능
- 작성한 글 목록 확인 / 회원 닉네임, 사진 변경 기능 구현
