import { Divider } from 'antd'
import styles from './header.module.css'

interface IProps {
  title: any
}
export const Header: React.FC<IProps> = ({ title }) => {
  return (
    <header
      style={{
        background: '#FFF',
        height: '65px',
      }}
    >
      <div className={styles.headerContainer}>
        <div className={styles.appName}>NARWHAL</div>
        <Divider type={'vertical'} style={{ height: '100%' }} />
        <div className={styles.pageTitle}>
          {title.matchMenuKeys[0].replace('/', '').replace(/\b[a-z]/, (letter: string) => letter.toUpperCase())}
        </div>
      </div>
    </header>
  )
}
