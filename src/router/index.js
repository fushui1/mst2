import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import appBehaviorIndex from '@/pages/app_Behavior/index'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/web/',
	routes: [{
		path: '/login',
		name: 'login',
		component: login
	}, {
		path: '/',
		name: 'index',
		component: index,
		redirect: '/appBehaviorTrend',
		meta: {
			requireAuth: true,
		},
		children: [
			// 行为分析 --- 行为趋势
			{
				path: '/appBehaviorTrend',
				name: 'appBehavior',
				component: appBehaviorIndex,
				meta: {
					type: 'appBehavior',
					bread: {
						name: '行为趋势',
						path: '/appBehaviorTrend'
					}
				}
			}
		],
	}]
})