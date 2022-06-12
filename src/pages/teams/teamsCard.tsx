/* eslint-disable jsx-a11y/alt-text */
import { Card, Col, Row } from 'antd'
import React from 'react'
import styles from './index.module.css'
import starActive from '../../components/icons/star active.svg'
import starDefault from '../../components/icons/star default.png'
import iconCanversationSmall from '../../components/icons/icon-conversations-small.png'
import iconLeadsSmall from '../../components/icons/icon-leads-small.png'

interface IProps {
  section: string
  totalData: number
  data: Array<any>
}

export const TeamsCard: React.FC<IProps> = ({ section, totalData, data }) => {
  return (
    <Card
      title={section}
      extra={
        <span className={styles.countTeam}>
          Showing {data?.length} out of {totalData} teams
        </span>
      }
    >
      <Row gutter={[16, 16]}>
        {data &&
          data.map((value, index) => (
            <Col span={8} key={index}>
              <Card.Grid className={styles.gridStyle}>
                <div className={`${styles.topContianer} ${value.is_archived ? styles.archivedContainer : ''}`}>
                  <div className={styles.row}>
                    <img className={styles.business_logo} src={value.image} />
                    <div>
                      <div className={styles.title}>{value.name}</div>
                      <div className={styles.created_at}>Created {value.created_at}</div>
                    </div>
                  </div>
                  <div className={styles.description}>{value.description}</div>
                </div>
                <div className={`${styles.campaign_info} ${value.is_archived ? styles.archivedContainer : ''}`}>
                  <div>
                    <img alt="campaignicon" src={iconCanversationSmall} style={{ marginRight: '3px' }} />
                    {value.campaigns_count} Campaigns
                  </div>
                  <div>
                    <img alt="leadsicon" src={iconLeadsSmall} style={{ marginRight: '3px' }} />
                    {value.leads_count} Leads
                  </div>
                </div>
                {value.is_favorited ? (
                  <img alt="favorite" src={starActive} className={styles.star} />
                ) : (
                  <img alt="unfavorite" src={starDefault} className={styles.star} />
                )}
              </Card.Grid>
            </Col>
          ))}
      </Row>
    </Card>
  )
}
