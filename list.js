export class List extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        var arr=[];
        for(var i=1 ; i<=this.props.var.number; i++){
            arr.push(this.getRandom(this.props.var.min,this.props.var.max));
        }
        return(
            <div>
                {arr.map((value,index)=>{return (<h3 key = {index}>{value} </h3>)})}
            </div>
        )
    }
    getRandom(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}