import { Box } from '@mui/material'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import ContactsList from '../components/ContactsList'
import SettingsPanel from '../components/SettingsPanel'

const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState({
    name: 'John Doe',
    status: 'Direct',
    avatar: 'JD'
  })
  const [activeTab, setActiveTab] = useState('chats')

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  // Render appropriate panel based on active tab
  const renderPanel = () => {
    switch (activeTab) {
      case 'chats':
        return <ChatWindow selectedChat={selectedChat} />
      case 'contacts':
        return <ContactsList />
      case 'settings':
        return <SettingsPanel />
      case 'archive':
        return <ChatWindow selectedChat={selectedChat} />
      default:
        return <ChatWindow selectedChat={selectedChat} />
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar selectedChat={selectedChat} />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar onSelectChat={setSelectedChat} onTabChange={handleTabChange} />
        {renderPanel()}
      </Box>
    </Box>
  )
}

export default Dashboard
