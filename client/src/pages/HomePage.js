import React from 'react';
import {Modal} from 'antd'
import Layout from '../components/Layout/Layout';

const HomePage =()=>{
    const [showModal,setShowModal]=useState(false)
    return(
        <Layout>
            <div className='filters'>
                <div>range filters</div>
            <div>
            <button className="btn btn-primary" 
            onClick={()=> setShowModal(true)}>ADD New</button>
            </div>
            </div>
            <div className="content"></div>
            <Modal title="Add Transection" visisble={showModal} 
            onCancel={()=> setShowModal(false)}
            footer={false}>
                <h1>hello</h1>
            </Modal>
        </Layout>
    );
};

export default HomePage ;