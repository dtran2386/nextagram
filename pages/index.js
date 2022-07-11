import Head from "next/head";
import Card from "../components/home/card/card";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Nextagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {props.data.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
