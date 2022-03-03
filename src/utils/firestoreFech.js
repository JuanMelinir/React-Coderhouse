import {query,orderBy,where,collection,getDocs} from '@firebase/firestore';
import {doc,getDoc} from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFech=async(categoryId)=>{
    let q;
    if(categoryId){
    q=query(collection(db,"remeras"), where('idCategory', '==' ,categoryId));
    }else{
    q=query(collection(db,"remeras"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore=querySnapshot.docs.map(document=>({
                id:document.id,
                ...document.data()
            }));
    return dataFromFirestore;
}

export const firestoreFechOne=async(idItem)=>{
    const docRef=doc(db,"remeras",idItem);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
       return {
          id:idItem,
          ...docSnap.data()
       }
    }else{
       console.log("No such document!"); 
    }
}