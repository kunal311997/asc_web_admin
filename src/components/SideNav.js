import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import { Link, useHistory } from "react-router-dom";
import Dialog from '../components/Dialog';
export default function SideNav({ sidebar, showSidebar, onSignout, onDialogButtonClicked, isDialogOpened }) {
    const history = useHistory();

    const sideBarInitialData = [
        {
            title: 'Latest Questions',
            icon: <RiIcons.RiQuestionAnswerLine className='drawer_icons' />,
            path: '/home',
            isSelected: true
        },
        // {
        //     title: 'Past Questions',
        //     icon: <AiIcons.AiFillQuestionCircle className='drawer_icons' />,
        //     path: '/pastquestions',
        //     isSelected: false
        // },
        {
            title: 'My Questions',
            icon: <FaIcons.FaRegListAlt className='drawer_icons' />,
            path: '/myquestions',
            isSelected: false
        },
        {
            title: 'My Profile',
            icon: <CgIcons.CgProfile className='drawer_icons' />,
            path: '/myprofile',
            isSelected: false
        },
        {
            title: 'Sign Out',
            icon: <FaIcons.FaSignOutAlt className='drawer_icons' />,
            path: '/home',
            isSelected: false
        }
    ]


    const [sideBarData, setSideBarData] = useState(sideBarInitialData);

    const onItemClicked = (selectedIndex) => {
        setSideBarData(sideBarData.map((sideBarItem, index) => (
            index === selectedIndex ? {
                ...sideBarItem,
                isSelected: true
            } : {
                ...sideBarItem,
                isSelected: false
            })))

        console.log(sideBarData)

        if (sideBarData[selectedIndex].title == 'Sign Out') {
            onSignout()
        }
    }

    return (
        <div className='sidenav' style={{
            width: sidebar ? '2.4rem' : '13rem'
        }}>
            <Dialog title="Are you sure you want to Sign Out? "
                onDialogButtonClicked={onDialogButtonClicked}
                isDialogOpened={isDialogOpened} />

            <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />
            {sideBarData.map((item, index) => {
                return (
                    <div key={index} style={{ backgroundColor: item.isSelected ? '#3d434b' : '#212529' }}
                        onClick={() => onItemClicked(index)}>
                        <Link to={item.path}>
                            <div style={{ color: 'white', display: 'flex' }}>
                                {item.icon}   {item.title}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div >
    )
}