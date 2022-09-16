import axios from 'axios'
import { useState, useEffect } from 'react'
import style from './Search.module.css'


export default function Search() {
    const [ posts, setPosts ] = useState<any>([])


    function quickSort(arr: string): any {
        if (arr.length < 2 ) return arr; 
        let pivot = arr[0];
        const left = [{}]; 
        const right = [{}]; 

        for ( let i = 1; i < arr.length; i++ ) {
            if (pivot > arr[i]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        console.log(left) 
    //  return quickSort(left).concat(pivot, quickSort(right)); 
    }

    useEffect(() => {
        axios.get('http://localhost:5000/Search')
          .then(res => {


              const arr= res.data
              console.log(res) 

              setPosts(arr)

            // for (let i = 0; i <= res.data.length; i++ ) {
            //     console.log(res.data[i].beer.beer)     
            // }
    
            //   console.log(res.data.length)
          })
          .catch(err => {
            console.log(err)
          })
    },[] )

    return (
        <> 
        <div>
            <ul>
                {posts.map((post: any) => (
                    <ul className={style.posts}>{post.beer}</ul>
                ))}
            </ul>
        </div>   
        </>
    )
}



