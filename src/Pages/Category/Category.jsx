import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCategory from "../../hooks/useCategory/useCategory";
import TabCategory from "../TabCategory/TabCategory";
import { useParams } from "react-router-dom";
import { FaTree } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';
import { GiEvilTree } from 'react-icons/gi';
import FilterButton from "../FilterButton/FilterButton";


const Category = () => {
    const categories = ['tropical', 'rooms', 'omg', 'islands', 'amazingViews'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [nature] = useCategory();
    
    const tropical = nature.filter(item => item.category === 'tropical');
    const rooms = nature.filter(item => item.category === 'Rooms');
    const cabins = nature.filter(item => item.category === 'Cabins');
    const omg = nature.filter(item => item.category === 'OMG!');
    const islands = nature.filter(item => item.category === 'Islands');
    const amazingViews = nature.filter(item => item.category === 'Amazing views');
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                <TabList className="font-bold flex items-center">
                    <Tab><FaTree className="mx-auto text-3xl"></FaTree> Tropical</Tab>
                    <Tab><FaBed className="mx-auto text-3xl"></FaBed> Rooms</Tab>
                    <Tab><FaHome className="mx-auto text-3xl"></FaHome>Cabins</Tab>
                    <Tab><FaDog className="mx-auto text-3xl"></FaDog>OMG!</Tab>
                    <Tab><GiPalmTree className="mx-auto text-3xl"></GiPalmTree>Islands</Tab>
                    <Tab><GiEvilTree className="mx-auto text-3xl"></GiEvilTree> Amazing views</Tab>
                   <div style={{marginLeft:'500px'}}>
                <FilterButton></FilterButton>
                   </div>
                </TabList>
             <div className="pt-10">
              <TabPanel>
                    <TabCategory items={tropical}></TabCategory>
                </TabPanel>
                <TabPanel>
                <TabCategory items={rooms}></TabCategory>
                </TabPanel>
                <TabPanel>
                <TabCategory items={cabins}></TabCategory>
                </TabPanel>
                <TabPanel>
                <TabCategory items={omg}></TabCategory>
                </TabPanel>
                <TabPanel>
                <TabCategory items={islands}></TabCategory>
                </TabPanel>
                <TabPanel>
                <TabCategory items={amazingViews}></TabCategory>
                </TabPanel>
              </div>
            </Tabs>
        </div>
    );
};

export default Category;