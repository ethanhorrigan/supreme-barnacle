import UserSearch from './UserSearch';

import react from '@/Assets/images/react.svg';
import tailwindcss from '@/Assets/images/tailwindcss.svg';
import typescript from '@/Assets/images/typescript.svg';
import vercel from '@/Assets/images/vercel.svg';
import vite from '@/Assets/images/vite.svg';

// const user: Array<any> = userList.map((item) => {
//   return {
//     id: item.user_info.uid,
//     nickname: item.user_info.nickname,
//     verified: getAccountVerificationStatus(item.user_info.custom_verify),
//     avatar: item.user_info.avatar_thumb.url_list[0],
//     followers: formatFollowerCount(item.user_info.follower_count),
//   };
// });

function App() {
  return (
    <main className="grid min-h-screen place-content-center bg-gradient-to-b from-blue-600 to-blue-900">
      <section className="flex flex-col items-center justify-center gap-7 text-center text-blue-100">
        <h1 className="text-7xl font-bold tracking-widest">
          Analytics
          <span className="block text-3xl italic">Tik Tok Managment</span>
        </h1>
        <a
          className="rounded bg-blue-100 py-3 px-4 font-bold uppercase tracking-wide text-blue-700 shadow-md shadow-blue-800 transition-colors hover:bg-blue-900 hover:text-blue-100"
          href="https://github.com/Drumpy/vrttv-boilerplate"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get the boilerplate →
        </a>
        <div className="flex gap-8 pt-4">
          <img
            alt="Vite Icon"
            className="text-blue-200 hover:text-blue-100"
            height="32px"
            src={vite}
            width="32px"
          />
          <img
            alt="React Icon"
            className="fill-blue-500 hover:text-blue-100"
            height="32px"
            src={react}
            width="32px"
          />
          <img
            alt="Typescript Icon"
            className="fill-blue-500 hover:text-blue-100"
            height="32px"
            src={typescript}
            width="32px"
          />
          <img
            alt="Tailwindcss Icon"
            className="fill-blue-500 hover:text-blue-100"
            height="32px"
            src={tailwindcss}
            width="32px"
          />
          <img
            alt="Vercel Icon"
            className="fill-blue-500 hover:text-blue-100"
            height="32px"
            src={vercel}
            width="32px"
          />
        </div>
        <div className="gap-4">
          <UserSearch />
        </div>
      </section>
    </main>
  );
}

export default App;
