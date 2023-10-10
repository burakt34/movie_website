import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ params }) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7944ab21cebd7c5d44301c1389af3636&query=${keyword}&language=en-US&page=1`)
    const data = await res.json();
    console.log(data?.results, "data");
    return (
        <div>
            {
                !data?.results ? 
                    <div>Arama Bulunamadı.</div> :
            <div className='flex items-center justify-center flex-wrap gap-2'>
                {
                    data?.results?.map((dt, i) => (
                        <Movies key={i} dt={dt} />
                    ))
                }
            </div>
            
               
            
        }
        </div>
    )
}

export default Page