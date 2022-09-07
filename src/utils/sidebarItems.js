import {
    FaRegNewspaper,
    FaRegComments,
    FaRegCalendarAlt,
    FaUserClock,
    FaRegClock,
    FaRegCalendarTimes,
    FaRegFolderOpen,
    FaColumns,
    FaPhone,
    FaChartLine,
    FaRegStickyNote,
    FaMoneyBill,
    FaFileInvoice,
    FaHeartbeat,
    FaUserAlt,
    FaRegMap,
    FaUsers,
    FaRegAddressCard,
    FaRegBuilding,
    FaKey,
    FaMapMarkedAlt,
    FaUserCog,
    FaGraduationCap,
    FaShuttleVan,
    FaFileSignature,
    FaEnvelope,
    FaListAlt, 
    FaThList,
} from 'react-icons/fa'
import {paths} from './path'

export const sidebarItems =[
    {
        title : 'INTEX247',
        item:[
            {
                icon:<FaRegNewspaper className='sidebar-icon' />,
                name: 'News Feed',
                to:paths.newsFeed,
            },
            {
                icon:<FaRegComments className='sidebar-icon' />,
                name: 'Live Chat',
                to:paths.liveChat,
            },
    
        ]
    },
    {
        title : 'Scheduling',
        item:[
            {
                icon:<FaRegCalendarAlt className='sidebar-icon' />,
                name: 'Schedule',
                to:paths.schedule,
            },
            {
                icon:<FaUserClock className='sidebar-icon' />,
                name: 'Shifts',
                to:paths.shifts,
            },
            {
                icon:<FaRegClock className='sidebar-icon' />,
                name: 'Time Clock',
                to:paths.timeClock,
            },
            {
                icon:<FaRegCalendarTimes className='sidebar-icon' />,
                name: 'Absences',
                to:paths.absences,
            },
        ]
    },
    {
        title : 'Cases',
        item:[
            {
                icon:<FaRegFolderOpen className='sidebar-icon' />,
                name: 'Cases',
                to:paths.cases,
            },
            {
                icon:<FaColumns className='sidebar-icon' />,
                name: 'Pipeline',
                to:paths.pipeline,
            },
            {
                icon:<FaPhone className='sidebar-icon' />,
                name: 'Calls',
                to:paths.calls,
            },
        ]
    },
    {
        title : 'Reports',
        item:[
            {
                icon:<FaChartLine className='sidebar-icon' />,
                name: 'Reports',
                to:paths.reports,
            },
            {
                icon:<FaRegStickyNote className='sidebar-icon' />,
                name: 'Shift Notes',
                to:paths.shiftNotes,
            },
            {
                icon:<FaMoneyBill className='sidebar-icon' />,
                name: 'Charges Breakdown',
                to:paths.chargesBreakdown,
            },
            {
                icon:<FaFileInvoice className='sidebar-icon' />,
                name: 'Pay Run Report',
                to:paths.payRunReport,
            },
            {
                icon:<FaHeartbeat className='sidebar-icon' />,
                name: 'Health Leaderboard',
                to:paths.healthLeaderboard,
            },
        ]
    },
    {
        title : 'Users',
        item:[
            {
                icon:<FaUserAlt className='sidebar-icon' />,
                name: 'Users',
                to:paths.users,
            },
            {
                icon:<FaRegMap className='sidebar-icon' />,
                name: 'Employee Map',
                to:paths.employeeMap,
            },
            {
                icon:<FaUsers className='sidebar-icon' />,
                name: 'Clients',
                to:paths.clients,
            },
            {
                icon:<FaRegAddressCard className='sidebar-icon' />,
                name: 'contacts',
                to:paths.contacts,
            },
            {
                icon:<FaRegBuilding className='sidebar-icon' />,
                name: 'sites',
                to:paths.sites,
            },
            {
                icon:<FaKey className='sidebar-icon' />,
                name: 'assets',
                to:paths.assets,
            },
            {
                icon:<FaMapMarkedAlt className='sidebar-icon' />,
                name: 'postcode reports',
                to:paths.postCodeReport,
            },
        ]
    },
    {
        title : 'Settings',
        item:[
            {
                icon:<FaUserCog className='sidebar-icon' />,
                name: 'positions',
                to:paths.positions,
            },
            {
                icon:<FaGraduationCap className='sidebar-icon' />,
                name: 'qualifications',
                to:paths.qualifications,
            },
            {
                icon:<FaShuttleVan className='sidebar-icon' />,
                name: 'vehicles',
                to:paths.vehicles,
            },
            {
                icon:<FaChartLine className='sidebar-icon' />,
                name: 'report types',
                to:paths.reportTypes,
            },
            {
                icon:<FaFileSignature className='sidebar-icon' />,
                name: 'form builder',
                to:paths.formBuilder,
            },
            {
                icon:<FaEnvelope className='sidebar-icon' />,
                name: 'email Account',
                to:paths.emailAccount,
            },
            {
                icon:<FaListAlt className='sidebar-icon' />,
                name: 'audit Log',
                to:paths.auditLog,
            },
            {
                icon:<FaThList className='sidebar-icon' />,
                name: 'asset audit',
                to:paths.assetAudit,
            },
        ]
    },
    
    
]