import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ searchParams }) => {
    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=7944ab21cebd7c5d44301c1389af3636&query=string&include_adult=false&language=en-US&page=1`,
        { next: { revalidate: 10000 } })

    const data = await res.json();

    console.log(data, "data");
    return (
        <div className="flex items-center justify-center flex-wrap gap-3 ">
            {
                data?.results?.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                ))
            }
        </div>
    )
}

export default Page