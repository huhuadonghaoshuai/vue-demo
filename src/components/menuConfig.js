const menus = [
  {
    title: "我的任务",
    path: "/my-task",
    children:[
      {
        title: "已办任务",
        path: "/my-task/done-task",
      },
      {
        title: "待办任务",
        path: "/my-task/toDo-task",
      },
    ]
  },
  {
    title: "业务参数管理",
    path: "/manager",
    children: [
      {
        title: "参数管理",
        path: "/manager/manager",
      },
      {
        title: "产品配置",
        path: "/manager/product",
      },
    ]
  },
];
export default menus;