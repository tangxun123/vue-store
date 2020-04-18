import Mock from 'mockjs'
import Home from './home'

Mock.mock('/root/login/checkMemberLogin', 'post', () => {  // 此处会劫持/root/login/checkMemberLogin接口，并返回数据
  return Home.homeInfo  // 返回模拟数据
})