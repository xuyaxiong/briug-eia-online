import Config from '../config'

console.log('Config =', Config)

export const addUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        msg: '添加成功'
      })
    }, 1000)
  })
}
