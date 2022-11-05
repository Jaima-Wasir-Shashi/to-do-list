/* eslint-disable react-hooks/exhaustive-deps */
import { child, get, getDatabase, query, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { app } from "../firebase.init";

// fetch a collection of data
const useFirebaseFetch = (collectionName='',initialValue=[],queries=[],callback=()=>0)=> {
    const [data,setData] = useState(initialValue);
    const [loading,setLoading] = useState(true);
    const [refetch,setRefetch] = useState(false);
    

    const db = getDatabase(app);
    const fetchQuery = query(ref(db,collectionName),...queries);
    
    useEffect(()=> {
        get(fetchQuery)
            .then((data) => {
                data.exists() && setData(data.val());
                callback();
                setLoading(false);
            });
    },[refetch]);


    return [Object.values(data),loading,()=> setRefetch(prev => !prev)];
}




// fetch single data by id
const useFirebaseFetchSingle = (collectionWithId='',initialValue=[],callback=()=>0)=> {
    const [data,setData] = useState(initialValue);
    const [loading,setLoading] = useState(true);
    const [refetch,setRefetch] = useState(false);
    

    const db = getDatabase(app);
    const fetchQuery = child(ref(db), collectionWithId);
    
    useEffect(()=> {
        get(fetchQuery)
            .then((data) => {
                data.exists() && setData(data.val());
                callback();
                setLoading(false);
            });
    },[refetch]);


    return [data,loading,()=> setRefetch(prev => !prev)];
}



export { useFirebaseFetch , useFirebaseFetchSingle };