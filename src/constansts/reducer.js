export const ACTIONS = {
    ACTION_CHANGE:"change",
    ACTION_ADD:"add",
    ACTION_FILTER:"filter"
}



export function reducer(state,action) {
    let {statuses,temporary} = state;
    const {name,id,title,value} = action.payload;

    switch (action.type){
        case ACTIONS.ACTION_CHANGE:{
            return {
                ...state,
                statuses:{...statuses,[name]:statuses[name].map((val)=>{
                    if((id === val._id) && (val.status !== value || val.title !== title)){
                        return {...val,title:title || val.title,status:value || val.status};
                    }
                    return {...val}
                })},
                temporary:null
        }}
        case ACTIONS.ACTION_FILTER:{
            return {...state,statuses:{...statuses,[name]:statuses[name].filter((v)=>{
                    if(v.status !== name){
                        temporary = v;
                        return false;
                    }
                    return true;
                })},temporary:temporary}
        }
        case ACTIONS.ACTION_ADD:{
            return temporary
                ?
                {...state,statuses:{...statuses,[temporary.status]:[...statuses[temporary.status],{...temporary}]}}
                :
                state;
        }
    }

}

