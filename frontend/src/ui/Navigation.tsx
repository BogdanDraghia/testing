import { Link } from "react-router-dom"




const Navigation = ()=>{


let navigationItems:any =[
    {name:'Electricity price chart',link:'/electricity'},
    {name:'Assets overview',link:'/assets'}
]

    return (
        <div>
            {
                navigationItems.map((data:any,index:any)=>{
                    return(
                        <Link to={data.link}>
                                <div>{data.name}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Navigation