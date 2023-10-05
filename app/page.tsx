import styles from './page.module.css'
import Header from '@/components/Header/Header';
import Sidebar from "@/components/Sidebar/Sidebar";
import '@/desingSystem/page.css'

// main page render 
export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles['main-page-container']}> 
          <Sidebar/>
      </div>
    </>
  )
}
