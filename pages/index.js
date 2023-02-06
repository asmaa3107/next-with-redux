import Head from 'next/head';
import HomeLayout from '../components/layouts/HomeLayout';
import Comment from '../components/ui/molecules/Comment';
import Hero from '../components/ui/organisms/Hero';
import NewComment from '../components/ui/organisms/NewComment';
import Login from '../components/ui/organisms/Login';
import { selectComments } from '../store/slices/commentSlice';
import { useSelector } from 'react-redux'; // updated
import { selectAuthState } from '../store/slices/authSlice'; //updated

export default function Home() {
  const authState = useSelector(selectAuthState); // updated
  const comments = useSelector(selectComments)

  return (
    <div>
      <Head>
        <title>Picomment</title>
        <meta name= "description" content= "Drop comments on cute cat pictures"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        {/* Hero Section */}
        <Hero
          imageSrc={`/images/cute-cat.jpg`}
          imageAlt={`Gojo Cat`}
          imageTitle={`Catoru Gojo`}
        />

        {/* Comment Section */}
        <section className="py-5">
          {comments.map((obj, idx) => (
            <Comment key={idx} comment={obj.comment} username={obj.username} />
          ))}
        </section>

        {/* Input Section - updated */}
        {authState ? <NewComment /> : <Login />}
      </HomeLayout>
    </div>
  );
}