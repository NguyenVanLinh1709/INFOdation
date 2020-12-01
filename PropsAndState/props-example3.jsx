//Props duoc truyen tu componet cha vao componet con
//Props ko thay doi trong qua trinh chay chuong trinh
class Demo extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello: {this.props.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Demo name='yellow' />
        <Demo name='green' />
    </div>,
    document.getElementById('title')
)