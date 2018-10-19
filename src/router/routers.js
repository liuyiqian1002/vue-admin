import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/gameManagementment',
    name: 'gameManagement',
    meta: {
      icon: 'logo-buffer',
      title: '游戏管理'
    },
    component: Main,
    children: [
      {
        path: 'lotteryGame',
        name: 'lotteryGame',
        meta: {
          icon: 'md-trending-up',
          title: '彩票游戏'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      },
      {
        path: 'oneTreasure',
        name: 'oneTreasure',
        meta: {
          icon: 'ios-infinite',
          title: '一元夺宝'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      },
      {
        path: 'chessGame',
        name: 'chessGame',
        meta: {
          icon: 'md-grid',
          title: '棋牌游戏'
        },
        component: () => import('@/view/gameManagement/tables/tables.vue')
      }
    ]
  },
  {
    path: '/hallManagement',
    name: 'hallManagement',
    meta: {
      icon: 'md-cloud-upload',
      title: '厅主管理'
    },
    component: Main,
    children: [
      {
        path: 'hallsManagement',
        name: 'hallsManagement',
        meta: {
          icon: 'ios-document',
          title: '厅主管理'
        },
        component: () => import('@/view/hallManagement/hallManagement/hallManagement.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '粘贴表格数据'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'reportManagement',
    meta: {
      icon: 'ios-stats',
      title: '报表管理'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'systemManagement',
    meta: {
      icon: 'md-settings',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'payManagement',
    meta: {
      icon: 'ios-stats',
      title: '支付渠道管理'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'riskControlManagement',
    meta: {
      icon: 'ios-stats',
      title: '风险管理'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/gameManagement/lotteryGame/lotteryGame.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
