import React from 'react'
import '../styles/ComparisonTable.css'

export default class ComparisonTable extends React.Component {

    render() {
        return (
            <div>
                <text style={{ fontSize: 20 }}>COMPARISON TABLE</text>               
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>URL</th>
                        <th>TITLE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.tableData.map(item =>{
                       return <tr key = {item.id}>
                        <td><img src={item.thumbnailUrl} style ={{display : 'flex', justifyContent: 'center', alignItems : 'center', height : '60px', width: '60px'}} alt="Logo" /></td>
                        <td>{item.id}</td>
                        <td>{item.url}</td>
                        <td>{item.title}</td>
                    </tr>
                   
                        }
                       
                     )
                    }
                     </tbody>
                   
                </table>
            </div>
        );

    }
}
