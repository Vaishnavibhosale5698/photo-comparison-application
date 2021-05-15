import React, { Component } from 'react'
import getPhotos from '../services/PhotoServices';
import '../styles/PhotoComparison.css'
import ComparisonTable from './ComparisonTable';

class PhotoComparison extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            tableData: [],
            toggleCompareAndRemove: false
        };
    }

    handleCompareButton = (item) => {
        this.setState({
            toggleCompareAndRemove: true
        })

        this.state.tableData.push(item)
        this.setState({
            tableData: this.state.tableData
        })
    }

    handleRemoveButton = (itemToRemove) => {
        const { tableData } = this.state
        tableData.splice(tableData.findIndex(item => item.id === itemToRemove.id), 1)

        this.setState({
            tableData: tableData
        })
    }

    componentDidMount = async () => {
        await getPhotos()
            .then(photos => this.setState({ photos: photos }))
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <text style={{ fontSize: 20 }}>PHOTO COMPARISON </text>
                <div className="photo-list-container">
                    {
                        this.state.photos.map(item => {
                            return <div key={item.id}
                                        style={{ 
                                                 height: '50%',
                                                 width: '20%', 
                                                 border: '1px solid #E2E2E2', 
                                                 borderRadius: '3px', 
                                                 backgroundColor: 'white', 
                                                 padding: '2px', 
                                                 display: 'flex', 
                                                 flexDirection: 'column',
                                                 margin: '10px' }}>
                                <div style={{ height: '50%', backgroundColor: '#F5F5F5' }}>
                                    <img src={item.thumbnailUrl} style={{ height: '90%', width: '90%', padding: '2px' }} alt="Logo" />
                                </div>
                                <text>{item.title}</text>
                                <text>{item.id}</text>
                                <text>{item.url}</text>
                                {
                                    this.state.tableData.some(animal => animal.id === item.id) ?
                                        <button
                                            style={{
                                                width: '70%',
                                                height: '10%',
                                                left: '5%',
                                                top: '10%',
                                                alignSelf: 'center'
                                            }}
                                            onClick={() => this.handleRemoveButton(item)} >
                                                Remove
                                            </button>
                                        : <button
                                            style={{
                                                width: '70%',
                                                height: '10%',
                                                left: '5%',
                                                top: '10%',
                                                alignSelf: 'center'
                                            }}
                                            onClick={() => this.handleCompareButton(item)} >
                                                 Compare
                                            </button>}
                            </div>
                        })
                    }

                </div>
                <ComparisonTable tableData={this.state.tableData} />
            </div>
        )
    }
}

export default PhotoComparison