import google from '../assets/google.svg'
export const sideList = [
    {
        title: 'Dashboard',
        icon: {google},
        link: '/'
    },
    {
        title: 'Transactions',
        icon: {google},
        link: '/'
    },
    {
        title: 'Schedules',
        icon: {google},
        link: '/'
    },
    {
        title: 'Users',
        icon: {google},
        link: '/'
    },
    {
        title: 'Settings',
        icon: {google},
        link: '/'
    }
]
// {sideList.map((item, i)=> {
//     return (
//       <Link key={i} to={item.link} className="menu-item">
//         <img src={google} />
//         <span>{item.title}</span>
//       </Link>
//     )
//   })}