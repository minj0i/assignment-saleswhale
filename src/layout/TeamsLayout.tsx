import type { ProSettings } from '@ant-design/pro-layout'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import { Button, Col, Row } from 'antd'
import styles from './index.module.css'
import React, { useEffect, useState } from 'react'
import _defaultProps from './_defaultProps'
import { Header } from './header'
import { TeamsCard } from '../pages/teams/teamsCard'
import { ActivityCard } from '../pages/teams/activityCard'
import { SwLogoWhite } from '../components/icons/swLogoWhite'
import iconHelp from '../components/icons/icon-help.svg'
import { PlusOutlined } from '@ant-design/icons'

interface BaseProps {
  children?: React.ReactNode
}

interface BaseProps {
  children?: React.ReactNode
}
export const TeamsLayout: React.FC<BaseProps> = ({ children }) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: false })
  const [pathname, setPathname] = useState('/teams')
  const [section, setSection] = useState('All Teams')
  const [data, setData] = useState<any>([])
  const [cardData, setCardData] = useState<any>([])

  useEffect(() => {
    window
      .fetch(
        `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220610T110828Z&X-Amz-Expires=86400&X-Amz-Signature=953ab60ba35fb9b0a1545e83d8277a7ec937df1034c0fafe926492ec5835e87d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject`
      )
      .then(res => res.text())
      .then(parseErrorSolve => {
        const newJson = JSON.parse(parseErrorSolve.replaceAll(',\n    ,\n', ',\n'))
        setData(newJson)
      })
      .catch(error => {
        console.error('err', error)
      })
  }, [])

  useEffect(() => {
    if (section === 'All Teams') setCardData(data?.teams)
    if (section === 'Favorites') setCardData(data?.teams.filter((v: any) => v.is_favorited))
    if (section === 'Archived') setCardData(data?.teams.filter((v: any) => v.is_archived))
  }, [section, data])

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
      className={styles.fixSidebar}
    >
      <ProLayout
        {..._defaultProps}
        collapsed={true}
        logo={<SwLogoWhite />}
        location={{
          pathname,
        }}
        menuFooterRender={(props: any) => {
          return (
            <div
              style={{
                position: 'absolute',
                bottom: 80,
              }}
            >
              <a
                style={{
                  lineHeight: '48rpx',
                  display: 'flex',
                  height: 48,
                  color: 'rgba(255, 255, 255, 0.65)',
                  alignItems: 'center',
                }}
                href="https://www.saleswhale.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="help"
                  src={iconHelp}
                  style={{
                    width: 16,
                    height: 16,
                    margin: '0 16px',
                    marginRight: 10,
                  }}
                />
              </a>
            </div>
          )
        }}
        rightContentRender={(props: any) => <Header title={props} />}
        {...settings}
      >
        <PageContainer
          style={{
            minHeight: '95vh',
            marginTop: '18px',
          }}
          tabList={[
            {
              tab: 'All',
              key: 'All Teams',
            },
            {
              tab: 'Favorites',
              key: 'Favorites',
            },
            {
              tab: 'Archived',
              key: 'Archived',
            },
          ]}
          onTabChange={key => setSection(key)}
          extra={
            <Button icon={<PlusOutlined />} className={styles.extraButton}>
              CREATE NEW TEAM
            </Button>
          }
        >
          <div className={styles.cardContainer}>
            <Row gutter={24}>
              <Col span={18}>
                <TeamsCard section={section} totalData={data?.teams?.length} data={cardData} />
              </Col>
              <Col span={6}>
                <ActivityCard />
              </Col>
            </Row>
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  )
}
