import {FC} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Post: FC = () => {

    const router = useRouter();


    return (
        <div>
            <Head>
                <title>Post details</title>
            </Head>
            <div>
                single post
            </div>
        </div>
    )
}

export default Post;