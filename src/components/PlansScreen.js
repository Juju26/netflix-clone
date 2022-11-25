import React, { useEffect, useState } from "react";
import './styles/PlansScreen.css'
import { db } from "./firebaseConfig";


function PlansScreen(props){

    const [products,setProducts]=useState([]);
     const [currentPlan,setCurrentPlan]=useState('Basic');
    
    console.log("curr",currentPlan) 
    props.Plan(currentPlan)
    // const addProd = (e) => {
    //     e.preventDefault();
         
    //     // Add data to the store
    //     db.collection("products").add({
    //         active: "true",
    //         description: "5 device 4k",
    //         name: "Premium",
    //         role: "null"
            
    //     })
    //     .then((docRef) => {
    //         console.log("Data Successfully Submitted");
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
    // }
    console.log("DBB",db);
    
    useEffect(()=>{
        db.collection("products")
        
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setProducts(arr => [...arr , data]);   
               
            });
    //     .then(
    //         (querySnapshot)=>{
    //         const prod={};
    //         querySnapshot.forEach(async (productDoc)=>{
    //             prod[productDoc.id]=productDoc.data();
    //             const priceSnap=await productDoc.ref.collection("prices").get();
    //             priceSnap.docs.forEach((price)=>{
    //                 prod[productDoc.id].prices={
    //                     priceId: price.id,
    //                     priceData:price.data(),
    //                 };
                
    //         });
    //     });
    })
    },[products.length>3]);

    
    return(
        <div className="plansScreen">
          
             {
            products.map((data) => (
                <div className={`${data.name===currentPlan && "plansScreen_plan_disabled"} plansScreen_plan`}>
                    <div className="plansScreen_info">
                         <h2 key={data.name}>{data.name}</h2>
                        <p>{data.description} ({data.price})
                         </p> 
                         </div>
                         <button onClick={(e)=>setCurrentPlan(data.name)}>
                           {data.name===currentPlan ? "Subscribed" :  "Subscribe" }
                            </button>
                
                </div>
                  
            ))
        }
        </div>
    );
}
export default PlansScreen