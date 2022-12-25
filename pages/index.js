import Head from 'next/head'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {getSession} from "next-auth/react";
import Login from "../components/Login";
import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";


export default function Home({session}) {
  if(!session) return  <Login/>;
  return (
    <div >
      <Head>
        <title>Facebook clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <main className="flex bg-gray-100">
           {/*Left sidebar*/}
          <Sidebar/>

           {/* Feed (Create Posts and Posts)*/}
          <Feed/>

           {/* Right Sidebar*/}
          <RightSideBar/>

        </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props:{ session},
  }
}
