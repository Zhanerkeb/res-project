import React, { useEffect, useState } from 'react'
import { Table, Rate, Space, Modal, Input } from 'antd';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restaurantActions from '../../actions/restaurantActions';

function Restaurant(props) {
    const [query, setQuery] = useState('')
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: image => <img style={{width: '40px', height: '40px'}} src={`http://37.18.30.124:9000/${image}`}/>
            },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            },
        {
            title: 'Amount of place',
            dataIndex: 'amountOfPlace',
            key: 'amountOfPlace',
        },
        {
            title: 'Average bill',
            dataIndex: 'averageBill',
            key: 'phone',
            },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            render: rate => <Rate disabled value={rate}/>
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            <Space size="middle">
                {/* <Button onClick={() => openEditModal({id: record.id, name: record.name})}>Edit</Button>
                <Button onClick={() => handleDelete(record.id)} type="link">Delete</Button> */}
            </Space>
            ),
        },
        ];

        useEffect(() => {
            props.restaurantActions.getRestaurants({query: ''})
        }, [])

        const handleSearch = e => {
            setQuery(e.target.value)
            props.restaurantActions.getRestaurants({query: e.target.value})
        }
    
        const data = props.restaurants.map((item) => {
            return {
                id: item.id,
                name: item.name,
                image: item.image,
                location: item.location,
                averageBill: item.averageBill,
                rate: item.rate,
                phone: item.phone,
                amountOfPlace: item.amountOfPlace
            }
        })

    return(
        <div> 
            <Input type="search" onKeyUp={handleSearch}/>
            <Table columns={columns} dataSource={data} /></div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.restaurant.isLoading,
    restaurants: state.restaurant.restaurants
  })
  
  const mapDispatchToProps = dispatch => ({
    restaurantActions: bindActionCreators(restaurantActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);