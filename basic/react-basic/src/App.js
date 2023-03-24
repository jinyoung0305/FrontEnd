import React, {
  createContext, 
  useContext,
  useEffect,
  useState,
  useRef
} 
from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

export default App;

// function App() {
//   return <h1>Hello React</h1>
// }

/*
    1. 리액트란?
      - UI(User Interface)를 개발하기 위해 사용되는 자바스크립트 라이브러리
        UI : 유저가 앱과 소통하기 위한 도구 예)뷰
        라이브러리 : 자주 사용되는 코드의 묶음
      - 페이스북이 개발
      - 가장 인기있는 프론트엔드 프레임워크

    2. 리액트의 특징
      - 컴포넌트 기반
        컴포넌트 : 뷰를 구성하는 부품
        합성, 재사용등이 가능하다
      - 선언적인 문법

    3. 리액트의 구조
      - 싱글페이지 구조
      - 가상의 DOM(virtual DOM)을 HTML에 주입한다
*/
/*
    JSX
    JSX : JavaScript Extension
          자바스크립트의 확장문법이다.
          가상의 DOM을 만들 때 사용된다
          선언적인 문법으로 사용하기 편리하다

    1. JSX 개념
    2. JSX 문법
    3. JSX에서 연산결과 출력하기
    4. JSX에서 조건문
    5. JSX에서 반복문 사용하기
*/

// 1. JSX 개념
// function App() {
//   // JSX를 사용하지 않음
//   let h1 = React.createElement('p', {}, 'Hello React');
//   return h1;
// }

// function App() {
//   // JSX를 사용함
//   let h1 = <h1>Hello React</h1>;
//   return h1;
// }

/*
    2. JSX 문법
    - React Fragment
    - 엘리먼트 attribute
    - inline style
*/
// React Fragment
// function App() {
//   return (
//     <>
//       <h3>React Fragment</h3>
//       <ul>
//         <li>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }

// 엘리먼트 attribute
// function App() {
//   return (
//     <>
//       <h3>JSX 엘리먼트 attribute</h3>
//       <u1>
//         <li>
//           <a href="https://google.com" target="_black"></a>
//         </li>
//         <li>
//           <img src="/" alt="Bar" />
//         </li>
//         <li>
//           <input type="text" placeholder="Baz" autoComplete="off" />
//         </li>
//       </u1>
//     </>
//   )
// }

// inline style
// function App() {
//   return (
//     <>
//       <h3>JSX inline style</h3>
//       <ul style={{border: "1px solid"}}>
//         <li style={{textDecoration: "underline"}}>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }

// function App() {
//   const st = {
//     textDecoration: "line-through",
//     color: "#f00"
//   };
//   return (
//     <>
//       <h3>Q. 스타일 객체를 사용하여 맥주리스트를 출력해보세요</h3>
//       <ul>
//         <li style={st}>Guinness Ireland</li>
//         <li>Heineken Netherlands</li>
//         <li>Budweiser USA</li>
//       </ul>
//     </>
//   );
// }

// JSX에서 연산결과 출력하기
// function App() {
//   let cat = {
//     name: "kitty",
//     age: 2,
//     home: null,
//     sound: function () {
//       return 'meow';
//     }
//   }
//   console.log(cat.name);
//   return (
//     <>
//       <h3>{cat.name}</h3>
//       <ul>
//         <li>이름 : {cat.name}</li>
//         <li>나이 : {cat.age}</li>
//         <li>집 : {cat.home}</li>
//         <li>울음 : {cat.sound()}</li>
//       </ul>
//     </>
//   )
// }

/*
    4. JSX에서 조건문 사용
    - 논리연산자와 삼항연산자를 사용한다
    - %%(그리고), ||(또는), !(부정), ?(삼항연산자)
*/
// function App() {
//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>조건1 &amp;&amp;(그리고) 조건2</p>
//       {/* 둘다 참일 경우 뒤에 것이 실행 */}
//       <ul>
//         <li>{'lol' && 'Foo'}</li>
//         <li>{false && 'Bar'}</li>
//         <li>{'lol' && false}</li>
//       </ul>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>조건1 ||(또는) 조건2</p>
//       {/* 둘중 하나라도 참일 경우 참인쪽 실행 */}
//       {/* 둘다 참일 경우 앞에 것이 실행 */}
//       <ul>
//         <li>{'lol' || 'Foo'}</li>
//         <li>{false || 'Bar'}</li>
//         <li>{'lol' || false}</li>
//       </ul>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>!(부정), ?(삼항연산자)</p>
//       {/* ! 말 그대로 부정 */}
//       {/* ? 조건이 참이면 앞에것 실행 */}
//       {/* ? 조건이 거짓이면 뒤에것 실행 */}
//       <ul>
//         <li>{!'Foo'}</li>
//         <li>{true ? 'Bar' : ''}</li>
//         <li>{false ? '' : 'Baz'}</li>
//       </ul>
//     </>
//   )
// }

/*
    5. JSX에서 반복문 출력하기
*/

// function App() {
//   const arr = ['foo', 'bar', 'baz'];
  
//   // const r = arr.map((item, index, arr) => {
//   //   return item.toUpperCase();
//   // });
//   // console.log(r);

//   return (
//     <>
//       <h1>JSX 반복문</h1>
//       <ul>
//         {arr.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function App() {
//   const beers = [
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Guinness', origin: 'Ireland'},
//     {name: 'Asahi', origin: 'Japan'}
//   ]
//   return (
//     <>
//       <h1>세계맥주</h1>
//       <ul>
//         {beers.map((item, index) => (
//           <li key={index}>{item.name}, {item.origin}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

/*
  컴포넌트
  1. 컴포넌트란? 
    - UI를 설계하는데 쓰이는 독립적이고 재사용가능한 부품
  2. 컴포넌트의 종류
    - 함수 컴포넌트
    - 클래스 컴포넌트
  3. 컴포넌트 합성
    - 컴포넌트 내에서 다른 컴포넌트를 호출한다.
*/

// function App() {
//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content />

//       <h2>Comments</h2>
//       <Comments />

//       <hr />

//       <h2>Suggeted</h2>
//       <Suggested />    
//     </>
//   )
// }

// function Content() {
//   return (
//       <div>
//         <h2>고양이는 액체일까?</h2>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="" width="100%" />
//       </div>
//   )
// }

// function Comments() {
//   return (
//     <ul>
//       <li>유치하게 등수는... 3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>
//   )
// }

// function Suggested() {
//   return (
//     <ul>
//       <li>고양이는 정말 폭력적일까?</li>
//       <li>고양이는 정말 자기가 신이라고 생각할까</li>
//       <li>냥냥펀치는 얼마나 아플까?</li>
//     </ul>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Instagram</h1>
//       <Profil />

//       <h2>Suggested</h2>
//       <Suggested />

//       <h2>Timeline</h2>
//       <Timeline />
//     </>
//   )
// }

// function Profil() {
//   return (
//     <>
//       <img src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg" alt="" style={{width:"100px", height:"100px", objectfit: "cover", borderRadius:"50%"}} />
//       <h3>다나카상</h3>
//       <p>안녕하세요 여러봉구, 다나카입니다.</p>
//     </>
//   )
// }

// function Suggested() {
//   return (
//     <ul>
//       <li>나몰라패밀리 공식계정</li>
//       <li>나몰라패밀리 김태환</li>
//       <li>아싸 최우선</li>
//     </ul>
//   )
// }

// function Timeline() {
//   return (
//     <ul>
//       <li>시그니처 아르마니 티셔츠 입고 왔어요~</li>
//       <li>웃찾사 때보다 인기도 수입도 10배</li>
//     </ul>
//   )
// }

/*
  Props
  1. props 개념
  2. 사용방법
  3. children props
  4. Context Hook
*/

/*
  1. props 개념
    - 컴포넌트에 전달되는 인자
*/
// function App() {
//   const irishBeer = {name: "Guinness", origin: "Iraland", available: false};

//   return (
//     <>
//       <h1>맥주</h1>
//       <Beer beer={irishBeer} />
//     </>
//   )
// }

// function Beer(props) {
//   console.log(props); // properties(속성의 집합) = 객체
//   console.log(props.beer);

//   const beer = props.beer;
//   return (
//     <ul>
//       <li>이름 : {beer.name}</li>
//       <li>원산지 : {beer.origin}</li>
//       <li>판매중 : {beer.available ? '예' : '아니오'}</li>
//     </ul>
//   )
// }

// 서버로부터 응답받은 데이터
// const video = {
//   title: "고양이는 액체일까?",
//   src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
// }
// const suggestedVideos = [
//   {id: 'a0', title: '고양이는 정말 폭력적일까?'},
//   {id: 'a1', title: '고양이는 정말 자기가 신이라고 생각할까?'},
//   {id: 'a2', title: '냥냥펀치는 얼마나 아플까?'}
// ]
// const comments = [
//   {id: 'c0', contents: '1빠'},
//   {id: 'c1', contents: '2빠'},
//   {id: 'c2', contents: '유치하게 등수는... 3빠'}
// ]

// function App() {
//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content video={video} />
//       <Comments comments={comments} />
//       <hr />
//       <SuggestedVideos suggestedVideos={suggestedVideos} />
//     </>
//   )
// }

// function Content(props) {
//   const video = props.video;
//   return (
//     <div>
//       <h2>{video.title}</h2>
//       <img src={video.src} alt="" width="100%" />
//     </div>
//   )
// }

// function Comments(props) {
//   const comments = props.comments;
//   console.log(comments);
//   return (
//     <>
//       <h1>Comments</h1>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>{comment.contents}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function SuggestedVideos(props) {
//   const suggestedVideos = props.suggestedVideos
//   console.log(suggestedVideos);
//   return (
//     <>
//       <h1>Suggested</h1>
//       <ul>
//         {suggestedVideos.map(suggesteVideos => (
//           <li key={suggesteVideos.id}>{suggesteVideos.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// const profile = {
//   username: '다나카',
//   image: 'https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg',
//   bio: '안녕하세요 여러봉구, 다나카입니다'
// }

// const accounts = [
//   {id: 's0', username: '나몰라패밀리 공식계정'},
//   {id: 's1', username: '나몰라패밀리 김태환'},
//   {id: 's2', username: '아싸 최우선'}
// ]

// const articles = [
//   {id: 'a0', title: '시그니처 아르마니 티셔츠 입고왔어요~'},
//   {id: 'a1', title: '웃찾사 때보다 인기도 수입도 10배'}
// ]

// function App() {
//   return (
//     <>
//       <h1>Instargram</h1>
//       <Profile profile={profile} />
//       <Suggested accounts={accounts} />
//       <Timeline articles={articles} />
//     </>
//   )
// }

// function Profile(props) {
//   console.log(props.profile);

//   return (
//     <>
//       <img src={profile.image} style={{width:"100px",height:"100px",objectFit:"cover", borderRadius:"50%"}} />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>
//   )
// }

// function Suggested(props) {
//   console.log(props.accounts);

//   return (
//     <>
//       <h2>Suggested</h2>
//       {accounts.map(accounts => (
//         <li key={accounts.id}>{accounts.username}</li>
//       ))}
//     </>
//   )
// }

// function Timeline(props) {
//   console.log(props.articles);

//   return (
//     <>
//       <h2>Timeline</h2>
//       {articles.map(articles  => (
//         <li key={articles.id}>{articles.title}</li>
//       ))}
//     </>
//   )
// }

/*
  3. children props
    - 컴포넌트에 자식 컴포넌트를 추가한다.
*/
// function App() {
//   return (
//     <>
//       <Layout>
//         <Article />
//       </Layout>
//     </>
//   )
// }

// function Layout(props) {
//   return (
//     <>
//       <h1>Instargram</h1>
//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>
//       {props.children}
//     </>
//   )
// }

// function Article() {
//   return (
//     <>
//       <img src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg" alt="다나카상" width="100%" />
//       <p>
//         <b>danaka </b>다나카상 라디오 스타 출연했어요 ^00^
//       </p>
//       <small>1일 전</small>
//     </>
//   )
// }

/*
  4. useContext Hook
    children 컴포넌트에 데이터를 전달하는 Hook(리액트에서 제공하는 함수)이다.
*/

// const AuthContext = createContext();

// function App() {
//   return (
//       <AuthProvider>
//         <Layout>
//           <Article />
//         </Layout>
//       </AuthProvider>
//   )
// }

// function AuthProvider(props) {
//   const value = {username: 'bunny'}
//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

// function Layout(props) {
//   const auth = useContext(AuthContext);
//   console.log(auth);
//   return (
//     <>
//       <h1>Instargram</h1>
//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>
//       <p>안녕하세요 {auth.username}님</p>
//       {props.children}
//     </>
//   )
// }

// function Article() {
//   const auth = useContext(AuthContext);
//   console.log(auth);
//   return (
//     <>
//       <img src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg" alt="다나카상" width="100%" />
//       <p>
//         <b>danaka </b>다나카상 라디오 스타 출연했어요 ^00^
//       </p>
//       <small>1일 전</small>
//     </>
//   )
// }

/*
  리액트에서 이벤트 처리하기
*/

// function App() {
//   function handleClick(e) {
//     alert('lol');
//   }
//   return (
//     <>
//       <h1>Basic</h1>
//       {/* onEventName=eventHandler */}
//       <button onClick={handleClick}>Button</button>
//     </>
//   )
// }

/*
  리액트에서 HTML 업데이트하기
*/
// function App() {
//   /*
//     count [state, setState] = useState(initialValue)
//     state : 컴포넌트내에서 관리되는 변수
//     setState : state를 업데이트하는 메서드
//     initialValue : state의 초깃값
//   */
//   const [count, setCount] = useState(0);
//   return(
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count+1)}>Add</button>
//     </>
//   )
// }

// 위에것과 비슷하지만 작동하지 않는 예시
// function App() {
//   let count = 0;
//   console.log(count);
//   /*
//     HTML을 업데이트하기 위해서는 DOM을 다시 리턴해야한다
//     DOM을 다시 리턴하기 위해서는 컴포넌트를 다시 실행해야한다
//     setState는 컴포넌트를 다시 실행한다
//     HTML이 업데이트된다
//   */
//   function handleClick(e) {
//     count++;
//   }

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add</button>
//     </>
//   )
// }

// function App() {
//   var [subscribed, setSubscribed] = useState(false)
//   console.log(subscribed)

//   return (
//     <>
//       <h1>구독버튼</h1>
//       <button onClick={() => setSubscribed(!subscribed)}>{subscribed ? '구독취소' : '구독하기'}</button>
//     </>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>count: {count}</h1>
//       <Article
//         count={count}
//         setCount={setCount}
//       />
//     </>
//   )
// }

// function Article(props) {
//   return (
//     <>
//       <button onClick={() => props.setCount(props.count + 1)}>Add</button>
//     </>
//   )
// }

/*
  리액트 라우터
  1. 리액트 라우터란?
    - 라우터 : 요청(특히 url)에 적합한 작업을 수행하는 것
  2. 라우터 기본
  3. 인증이 적용된 라우터
*/

// function Home() {
//   return <h1>Home</h1>
// }

// function About() {
//   return <h1>About</h1>
// }

// function Posts() {
//   return(
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   /*
//     useParams
//       - url로 전달된 파라미터에 접근하게 한다
//   */
//   const params = useParams();
//   const postId = params.postId;
//   // postId를 서버에 전송한다.

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function App() {
//   return (
//     <>
//       <Router>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/posts" element={<Posts />} />
//           <Route path="/post/:postId" element={<Post />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// 3. 인증이 적용된 라우터

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="posts" element={<Posts />} />
//             <Route path="post/:postId" element={
//               <AuthRequired>
//                 <Post />
//               </AuthRequired>
//             } />
//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

// const AuthContext = createContext();

// function AuthProvider(props) {
//   const [user, setUser] = useState(null);

//   // 로그인
//   function signIn(username) {
//     setUser(username);
//   }
  
//   // 로그아웃
//   function signOut() {
//     setUser(null);
//   }

//   const value = {user, signIn, signOut};

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

// function Layout() {
//   const auth = useContext(AuthContext);

//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>
//       {auth.user ? (
//         <p>
//           Hi, {auth.user} {" "}
//           <button onClick={auth.signOut}>
//             LogOut
//           </button>
//         </p>
//       ) : (
//         <p>
//           Not logged in
//         </p>
//       )}
//       <Outlet />
//     </>
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function AuthRequired(props) {
//   const auth = useContext(AuthContext);

//   console.log(auth)

//   function handleSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     // console.log(formData.get('username'));

//     auth.signIn(formData.get('username'));
//   }

//   if(!auth.user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input type="text" name="username" required />
//         <button tupe="submit">Login</button>
//       </form>
//     )
//   }

//   return props.children;
// }

// function Post() {
//   const params = useParams();
//   const postId = params.postId;

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

/*
  데이터 가져오기
  1. 데이터 가져오기란? 
    - 서버에 데이터를 요청해서 응답받는 것
  2. useEffect Hook
  3. 데이터 가져오기 예시
*/

// 2. useEffect Hook

// function App() {
//   const [count, setCount] = useState(0);

//   /*
//     useEffect - 비동기적으로 작동한다.
//     1. useEffect(effect) : effect는 컴포넌트가 실행될때마다 실행된다
//     2. useEffect(effect, []) : effect는 컴포넌트의 최초 실행시에만 실행된다
//     3. useEffect(effect, [dep]) : effect는 컴포넌트의 최초 실행시, dependency가 업데이트 될 때마다 실행된다.
//   */

//   useEffect(() => {
//     console.log('lol');
//   }, [])

//   return (
//     <>
//       <h1>count : {count}</h1>
//       <button onClick={() => setCount(count+1)}>+</button>
//     </>
//   )
// }

// 3. 데이터 가져오기 예시

// 서버에 데이터를 요청하는 함수
// 서버에서 응답을 주는데 2초가 걸린다고 가정
// function fetchData() {
//   const DATA = {
//     username: 'danaka',
//     image: 'https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg',
//     bio: '안녕하세요 여러봉구, 다나카입니다 ^00^'
//   }

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(DATA)
//     }, 2000)
//   })

//   return promise
// }

// function App() {
//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [profile, setProfile] = useState(null)

//   // 호출순서와 관계없이 비동기는 가장 마지막에 실행
//   useEffect(() => {
//     fetchData()
//     .then(data => {
//       // profile 업데이트
//       setProfile(data)
//     })
//     .catch(error => {
//       setError(error)
//     })
//     .finally(() => setIsLoaded(true))
//   }, [])

//   if(error) {
//     return <p>failed to fetch profile</p>
//   }

//   if(!isLoaded) {
//     return <p>fetching profile</p>
//   }

//   return (
//     <>
//       <h1>Profile</h1>
//       <img src={profile.image} alt={profile.username} style={{width:'100px', height:'100px', objectFit:'cover', borderRadius:'50%'}} />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>
//   )
// }

// todo-List 만들기

// 초기할일 목록
const initialTasks = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false}
]

const FILTER_MAP = {
  All: () => true,
  Done: task => task.completed,
  Active: task => !task.completed
}

// Object.key() : 객체 속성을 문자열 array로 return하는 함수
const FILTER_NAMES = Object.keys(FILTER_MAP)
// console.log(FILTER_NAMES)

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('All')

  // tasks 추적하기
  console.log(tasks);

  // 새로운 todo를 추가하는 함수
  function addTask(name) {
    const newTask = {
      id: `todo-${Math.random()}`,
      name, // name: name(이름이 같을시 줄여쓰기 가능)
      completed: false
    }
    // console.log(newTask)

    const updatedTasks = [...tasks, newTask]
    // console.log(updatedTasks)
    setTasks(updatedTasks)
  }

  // todo를 삭제하는 함수
  function deleteTask(id) {
    // console.log(id)

    const remainingTasks = tasks.filter(task => task.id !== id)
    // console.log(remainingTasks)

    setTasks(remainingTasks)
  }

  // todo 아이템에 completed의 형태를 바꾸는 함수
  function toggleTaskCompleted(id) {
    // console.log(id)
    const updatedTasks = tasks.map (task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function editTask(id, newName) {
    // console.log(id, newName)
    const editedTasks = tasks.map(task => {
      if(task.id === id) {
        return {...task, name: newName}
      }
      return task;
    })
    setTasks(editedTasks)
  }

  const filterButtons = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name} 
      isPressed={filter === name} 
      setFilter={setFilter} 
    />
  ))

  // 할일 목록 리스트를 담은 함수
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      deleteTask={deleteTask}
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
    />
  ))
  // console.log(FILTER_MAP[filter])

  return (
    <div className="max-w-sm mx-auto mt-8 border p-4">
      <h1 className="text-2xl text-center mb-4">할일 목록 &#128526; &#127928;</h1>

      <Form addTask={addTask}/>
      
      <div className="flex flex-nowrap gap-1 mb-4">
        {filterButtons}
      </div>

      <h2 className="text-xl mb-4">{taskList.length}개 남았습니다.</h2>
      <ul>  
        {taskList}
      </ul>
    </div>
  )
}

function Form(props) {
  const [name, setName] = useState("")

  // console.log(name)

  function handleSubmit(e) {
    e.preventDefault()
    props.addTask(name)
    // console.log(name)
    // form을 제출하고 input을 비운다
    setName("")
  }

  return (
    <form
      className="mb-4"
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        className="border px-2 py-1 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)} // input의 값이 바뀔때마다 일어나는 이벤트
        autoComplete="off"          
      />
      <button 
        type="submit"
        className="p-1 w-full border disabled:opacity-50 text-blue-500"
        // input에 입력값이 없을 경우 disabled
        // trim() 문자열의 앞과 뒤에 있는 것을 제거하는 메서드
        disabled={!name.trim()}
      >Add</button>
    </form>
  )
}

function FilterButton(props) {
  return (
    <button 
      className={"p-1 w-1/3 border " + (props.isPressed && "outline")}
      onClick={() => props.setFilter(props.name)}  
    >{props.name}</button>
  )
}

function Todo(props) {
  // console.log(props)
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState("")
  const inputEl = useRef(null)
  
  function handleSubmit(e) {
    e.preventDefault()
    props.editTask(props.id, newName)
    setIsEditing(false)
    setNewName("")
  }

  console.log(inputEl)

  // DOM이 HTML에 주입되고 난 뒤 엘리먼트에 접근이 가능하다
  useEffect(() => {
    if(isEditing) {
      inputEl.current.focus()
    }
  })

  const viewTemplate = (
    <>
      <div className="flex mb-4">
        <label>
          <input
            type="checkbox"
            className="hidden peer"
            checked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <span className="text-xl peer-checked:line-through">
            {props.name}
          </span>
        </label>
      </div>
      <div className="flex flex-nowrap gap-1">
        <button 
          type="button"
          className="w-1/2 p-1 border"
          onClick={() => setIsEditing(true)}
        >Edit</button>
        <button 
          className="w-1/2 p-1 border text-red-500"
          onClick={() => props.deleteTask(props.id)}
        >Delete</button>
      </div>
    </>
  )
  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border px-2 py-1 w-full mb-2"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        ref={inputEl}
      />
      <div className="flex flex=nowrap gap-1">
        <button
          type="button"
          className="w-1/2 p-1 border"
          onClick={() => setIsEditing(false)}
        >Cancel</button>
        <button 
          type="submit"
          className="w-1/2 p-1 border disabled:opacity-50 text-blue-500"
          disabled={!newName.trim()}
        >Save</button>
      </div>
    </form>
  )

  return (
    <li className="mb-4">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  )
}

const initialBeers = [
  { id: 'b0', name: '기네스'},
  { id: 'b1', name: '하이네켄'},
  { id: 'b2', name: '버드와이저'},
  { id: 'b3', name: '클라우드'},
  { id: 'b4', name: '아사히'},
]

function App() {

  const [ beers, setBeers ] = useState(initialBeers)

  function addBeer(name) {
    const newBeer = { id: Math.random(), name}
    setBeers([newBeer, ...beers])
  }

  function deleteBeer(id) {
    const remainingBeers = beers.filter(beer => beer.id !== id)
    setBeers(remainingBeers)
  }

  const beerList = beers.map(beer => (
    <Beer key={beer.id} beer={beer} deleteBeer={deleteBeer} beers={beers} />
  ))

  return (
    <>
      <h1>세계맥주</h1>
      <Form addBeer={addBeer}/>
      <ul style={{display: "flex", flexDirection: "column", transition: '0.5s'}}>
        {beerList}
      </ul>
    </>  
  )
}


function Form({ addBeer }) {

  const [ name, setName ] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    addBeer(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button>추가</button>
    </form>
  )
}

function Beer({ beer, deleteBeer }) {

  const [collapsed, setCollapsed] = useState(false)
  

  const itemStyle = {
    height: collapsed ? '0' : '50px',
    borderBottom: collapsed ? 'none' : '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    overflow: 'hidden',
    transition: '0.2s'
  }

  const buttonStyle = {
    border: 'none',
    color: '#f00',
    backgroundColor: 'teansparent',
    cursor: 'pointer',
    fintWeight: '600'
  }

  function handleClick() {
    setCollapsed(true)

    setTimeout(() => {
      deleteBeer(beer.id)
    }, 500)
  }

  return (
    <li style={itemStyle}>
      {beer.name}
      <button style={buttonStyle} onClick={handleClick}>
        삭제
      </button>
    </li>
  )
}
