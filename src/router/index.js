import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Description from '@/components/Team/Description'
import Organization from '@/components/Team/Organization'
import Member from '@/components/Team/Member'
import Study from '@/components/Team/Study'
import Institute from '@/components/Team/Institute'
import Notification from '@/components/Notifications/Notification'
import NotificationDetail from '@/components/Notifications/Detail'
import PreviousMeetings from '@/components/Meetings/Previous'
import OnlineMeeting from '@/components/Meetings/Online'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/Group',
      component: Description,
      name: 'Group',
      children: [
        {path: 'Organization', name: 'Group-Organization', component: Organization},
        {path: 'Member', name: 'Group-Member', component: Member},
        {path: 'Study', name: 'Group-Study', component: Study},
        {path: 'Institute', name: 'Group-Institute', component: Institute}
      ]
    },
    {
      path: '/Notification',
      component: Notification,
      name: 'Notification',
      children: [
        {path: 'detail', name:'Notification-Detail', component: NotificationDetail}
      ]
    },
    {
      path: '/News',
      component: Notification,
      name: 'News',
      children: [
        {path: 'detail', name:'News-Detail', component: NotificationDetail}
      ]
    },
    {
      path: '/Meetings',
      component: PreviousMeetings,
      name: 'Meetings',
      children: [
        {path: 'Previous', name:'previous-meetings', component: PreviousMeetings},
        {path: 'Online', name:'online-meeting', component: OnlineMeeting}
      ]
    }
  ]
})
