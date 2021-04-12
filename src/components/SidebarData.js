import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
	{
		title: 'Серверы',
		path: '/server',
		icon: <AiIcons.AiOutlineCloudServer />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: 'Сети',
		path: '/nets',
		icon: <FaIcons.FaNetworkWired />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: 'Администрирование',
		path: '/administration',
		icon: <RiIcons.RiAdminLine />,
	},
	{
		title: '1С',
		icon: <IoIcons.IoMdPeople />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Базы',
				path: '/1с/db',
			},
			{
				title: 'Сотрудники',
				path: '/1с/staff',
			},
			{
				title: 'Удалённый рабочий стол',
				path: '/1с/remoute',
			},
		],
	},
	{
		title: 'DNS',
		path: '/dns',
		icon: <AiIcons.AiOutlineInbox />,
	},
	{
		title: 'Хранилище',
		path: '/storage',
		icon: <AiIcons.AiOutlineDatabase />,
	},
	{
		title: 'SSL',
		path: '/ssl',
		icon: <FaIcons.FaExpeditedssl />,
	},
	{
		title: 'Партнерам',
		path: '/partners',
		icon: <FaIcons.FaUserFriends />,
	},
	{
		title: 'Финансы',
		path: '/finance',
		icon: <AiIcons.AiOutlineCreditCard />,
	},
]
