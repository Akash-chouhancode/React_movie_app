import { createContext, useEffect, useState } from "react";

const Appcontext= createContext()

const Appprovider=({children})=>{

const [movies,setMovies]=useState([])
const [search,setSearch]=useState("iron")
const[loding,setLoding]=useState(true)
    const moviedata= async()=>{
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`)
            let data =await  response.json();
            console.log(data)
            
           
            if (data.Response==="True") {
                setMovies(data.Search)
                
                setLoding(false)

                
            } 
        } catch (error) {
            console.log(error);
            
        }

    }

    useEffect(() => {
        moviedata()
    }, [search])





return(




<Appcontext.Provider value={{movies, search, setSearch,loding}}>

{children}


</Appcontext.Provider>
    

   
    
)

}
export {Appcontext,Appprovider}