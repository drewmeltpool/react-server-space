import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import logo from '../image/logo.jpg'
import CreateBtn from './CreateBtn'
import Balance from './Balance'

const Nav = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: #fff;
	padding: 15px 20px;
	border-bottom: 1px solid #ccd7e8;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const NavIcon = styled(Link)`
	color: #333;
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const SidebarNav = styled.nav`
	position: fixed;
	top: 80px;
	left: 0;
	bottom: 0;
	background: #fff;
	border-right: 1px solid #ccd7e8;
	background: #fff;
	overflow-x: hidden;
	width: 300px;
	justify-content: center;
	left: 0;
	// left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 400ms;
	z-index: 10;
`

const SidebarWrap = styled.div`
	width: 100%;
`

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)

	return (
		<>
			<IconContext.Provider value={{}}>
				<Nav>
					<a href='/' className='logo-wrapper'>
						<img className='logo' src={logo} alt='logo' />
					</a>
					<NavIcon to='#'>
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>
					<CreateBtn />
					<Balance />
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	)
}

export default Sidebar
