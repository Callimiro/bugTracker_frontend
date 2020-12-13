/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getBugs } from '../../Controllers/Redux/bugSlice'
import bug from '../../Models/bugModel'
import BugCard from '../BugCard/bugCard'

// eslint-disable-next-line import/no-anonymous-default-export
export default()=>{
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);
    const bugCards = bugs.map((bug, key) => {
        <BugCard key={key} bug={bug} />
    });
    useEffect(()=>{
        dispatch(getBugs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[bugs.length < 0]);
    return(
        <div className="page-container">
            {
                bugs.map((bug)=>{
                    return <BugCard bug={bug}/>
                })
            }
        </div>
    )
}