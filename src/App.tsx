import { getUserList } from './API/fakeAPI'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { useRef } from 'react'
import { UserResponse } from './Model'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'
import { StyleProvider } from '@ant-design/cssinjs'
import UserDrawer from './components/UserDrawer'

function App () {
  const actionRef = useRef<ActionType>()

  const columns: ProColumns<UserResponse>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48
    },
    {
      title: 'Name',
      dataIndex: 'name',
      copyable: true,
      ellipsis: true,
      sorter: (a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      copyable: true,
      ellipsis: true,
      sorter: (a, b) => {
        if (a.email < b.email) {
          return -1
        }
        if (a.email > b.email) {
          return 1
        }
        return 0
      }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      copyable: true,
      ellipsis: true,
      sorter: (a, b) => {
        if (a.phone < b.phone) {
          return -1
        }
        if (a.phone > b.phone) {
          return 1
        }
        return 0
      }
    },
    {
      title: 'Action',
      valueType: 'option',
      key: 'option',
      width: 100,
      render: (_text, record, _, _action) => [
        <UserDrawer key={1} id={record.id} />
      ]
    }
  ]

  return (
    <div className='md:container md:mx-auto py-10'>
      <ConfigProvider locale={enUS}>
        <StyleProvider hashPriority='high'>
          <div className=''>
            <ProTable<UserResponse>
              columns={columns}
              actionRef={actionRef}
              cardBordered
              request={async (_params, _sort, _filter) => {
                return getUserList({
                  name: _params.name == '' ? undefined : _params.name,
                  email: _params.email == '' ? undefined : _params.email,
                  phone: _params.phone == '' ? undefined : _params.phone
                })
              }}
              rowKey='id'
              pagination={{
                pageSize: 5
              }}
              dateFormatter='string'
              headerTitle={
                <div className='text-xl font-bold'>Fake User List</div>
              }
              toolBarRender={() => []}
              scroll={{
                x: 'max-content'
              }}
            />
          </div>
        </StyleProvider>
      </ConfigProvider>
    </div>
  )
}

export default App
