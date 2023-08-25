import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const tropical = menu.filter(item => item.category === 'tropical');
    const rooms = menu.filter(item => item.category === 'Rooms');
    const cabins = menu.filter(item => item.category === 'Cabins');
    const omg = menu.filter(item => item.category === 'OMG!');
    const islands = menu.filter(item => item.category === 'Islands');
    const amazingViews = menu.filter(item => item.category === 'Amazing views');
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Tropical</Tab>
                    <Tab>Rooms</Tab>
                    <Tab>Cabins</Tab>
                    <Tab>OMG!</Tab>
                    <Tab>Islands</Tab>
                    <Tab>Amazing views</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;