import React, {useEffect, useState} from 'react';
import { Table, Button, Space, Modal, Input } from 'antd';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as kitchenActions from '../../actions/kitchenActions';

function Kitchen(props) {
    const [isAddVisible, setIsAddVisible] = useState(false)
    const [name, setName] = useState('')
    const [editId, setEditId] = useState(null)
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
        render: text => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <Button onClick={() => openEditModal({id: record.id, name: record.name})}>Edit</Button>
            <Button onClick={() => handleDelete(record.id)} type="link">Delete</Button>
        </Space>
        ),
    },
    ];

    const handleDelete = id => {
       props.kitchenActions.deleteKitchen(id);
    }

    const openEditModal = data => {
        setName(data.name)
        setEditId(data.id)
        setIsAddVisible(true)
    }

    useEffect(() => {
        props.kitchenActions.getKitchens()
    }, [])

    const handleOk = () => {
        if(editId) {
            props.kitchenActions.updateKitchen({id: editId, name: name})
        } else {
            props.kitchenActions.addKitchen({name: name})
        }
        
        handleCancel()
    }

    const handleCancel = () => {
        setIsAddVisible(false)
        setEditId(null)
        setName('')
    }

    const openAddModal = () => {
        setIsAddVisible(true)
    }

    const handleChange = e => {
        setName(e.target.value)
    }

    const data = props.kitchens.map((item, i) => {
        return{
            id: item.id,
            name: item.name,
            key: i
        }
    })
    return(
        <div>   
            <Button type="primary" style={{margin: '10px'}} onClick={openAddModal}>Add kitchen</Button>   
            <Table columns={columns} dataSource={data} />
            <Modal title="Basic Modal" visible={isAddVisible} onOk={handleOk} onCancel={handleCancel}>
               <Input name="name" onChange={handleChange} value={name}/>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.kitchen.isLoading,
    kitchens: state.kitchen.kitchens
  })
  
  const mapDispatchToProps = dispatch => ({
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
