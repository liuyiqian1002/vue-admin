import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@Number',
      saleTime: '@date',
      result: '@Color',
      saleStaus: '@date',
      drawStyle: '@date',
      drawProcess: '@date',
      cancelStatus: '@date',
      drawTime: '@date'
    }))
  })
  return tableData
}

export const getTableDataHall = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      createAt: '@date',
      status: '@date',
      chargeMode: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}
