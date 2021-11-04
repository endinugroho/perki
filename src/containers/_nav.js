import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Perki']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lobby',
    to: '/dashboard',
    icon: 'cil-house',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Session',
    to: '/theme/session',
    icon: 'cil-clock',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Exhibition',
    to: '/theme/exhibition',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Symposium',
    to: '/theme/symposium',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Workshop',
    to: '/theme/workshop',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Agenda',
    to: '/theme/jadwal',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account',
    to: '/theme/sponsor',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Exit',
    to: '/login',
    icon: 'cil-user',
  },

]

export default _nav
