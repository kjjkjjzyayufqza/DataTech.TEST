import { FC, ReactNode, useState } from 'react'
import { Button, Col, Drawer, Row, Spin, Tag } from 'antd'
import { getUserById } from '../API/fakeAPI'
import { UserResponse } from '../Model'

const UserDrawer: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState(false)
  const [loadingData, setLoadingData] = useState<boolean>(false)
  const [userData, setUserData] = useState<UserResponse>()

  const showDrawer = () => {
    setOpen(true)
    setLoadingData(true)
    getUserById(id)
      .then(res => {
        setUserData(res.data)
        setLoadingData(false)
      })
      .catch(err => {
        console.log(err)
        setLoadingData(false)
      })
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={showDrawer}>View</Button>
      <Drawer
        title='User Detail'
        placement='right'
        onClose={onClose}
        open={open}
      >
        <Spin tip='Loading...' spinning={loadingData}>
          <Row gutter={[0, 16]}>
            <CustomCol title={'Name'} data={userData?.name} />
            <CustomCol title={'User Name'} data={userData?.username} />
            <CustomCol
              title={'Email'}
              data={<a href={`mailto:${userData?.email}`}>{userData?.email}</a>}
            />
            <CustomCol
              title={'Address'}
              data={[
                <CustomCol
                  key={0}
                  title={'street'}
                  data={userData?.address.street}
                />,
                <CustomCol
                  key={1}
                  title={'suite'}
                  data={userData?.address.suite}
                />,
                <CustomCol
                  key={2}
                  title={'city'}
                  data={userData?.address.city}
                />,
                <CustomCol
                  key={3}
                  title={'zipcode'}
                  data={userData?.address.zipcode}
                />
              ]}
            />
            <CustomCol title={'Phone'} data={userData?.phone} />
            <CustomCol
              title={'Website'}
              data={
                <a href={`https://${userData?.website}`} target='_blank'>
                  {userData?.website}
                </a>
              }
            />
            <CustomCol
              title={'company'}
              data={<Tag color='orange'>{userData?.company.name}</Tag>}
            />
          </Row>
        </Spin>
      </Drawer>
    </>
  )
}

export default UserDrawer

const CustomCol: FC<{ title: ReactNode; data?: ReactNode }> = ({
  title,
  data
}) => {
  if (!data) {
    data = <></>
  }
  return (
    <>
      <Col span={12} className='font-bold'>
        {title}:
      </Col>
      <Col span={12}>{data}</Col>
    </>
  )
}
