import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '@/views/DataBinding.vue'
import DataBindingHtml from '@/views/DataBindingHtml.vue'
import DataBindingInputText from '@/views/DataBindingInputText.vue'
import DataBindingInputNumber from '@/views/DataBindingInputNumber.vue'
import DataBindingTextarea from '@/views/DataBindingTextarea.vue'
import DataBindingSelect from '@/views/DataBindingSelect.vue'
import DataBindingCheckbox from '@/views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '@/views/DataBindingCheckbox2.vue'
import DataBindingRadio from '@/views/DataBindingRadio.vue'
import DataBindingAttribute from '@/views/DataBindingAttribute.vue'
import DataBindingButton from '@/views/DataBindingButton.vue'
import DataBindingClass from '@/views/DataBindingClass.vue'
import DataBindingClass2 from '@/views/DataBindingClass2.vue'
import DataBindingStyle from '@/views/DataBindingStyle.vue'
import DataBindingStyle2 from '@/views/DataBindingStyle2.vue'
import DataBindingList from '@/views/DataBindingList.vue'
import RenderingVIf from '@/views/RenderingVIf.vue'
import EventClick from '@/views/EventClick.vue'
import EventChange from '@/views/EventChange.vue'
import Computed from '@/views/Computed.vue'
import Watch from '@/views/Watch.vue'
import Watch2 from '@/views/Watch2.vue'
import DataBindingList2 from '@/views/DataBindingList2.vue'
import NestedComponent from '@/views/NestedComponent.vue'
import ParentComponent from '@/views/ParentComponent.vue'
import ParentComponent2 from '@/views/ParentComponent2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindingstyle2',
    name: 'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/watch2',
    name: 'Watch2',
    component: Watch2
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nested',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
