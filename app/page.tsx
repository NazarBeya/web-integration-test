import styles from './page.module.css'
import Header from '@/components/Header/Header';
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles['main-page-container']}>
        <div>
          <Sidebar />
        </div>

        <div>

        </div>
      </div>
    </>
  )
}
