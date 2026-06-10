import React, { useState } from 'react';
import Card from '../components/Card';
import { Mail, Search, Users, Shield } from 'lucide-react';

export default function Inbox() {
  const [activeTab, setActiveTab] = useState('students'); // 'students' | 'staff'

  const studentMessages = [
    { id: 1, sender: 'Alex K.', subject: 'Question about Assignment 3', time: '10:30 AM', unread: true },
    { id: 2, sender: 'Sarah M.', subject: 'Absence excuse for tomorrow', time: 'Yesterday', unread: false },
    { id: 3, sender: 'John D.', subject: 'Can I get extra credit?', time: 'Yesterday', unread: false },
    { id: 4, sender: 'Emma W.', subject: 'Thank you for the physics help!', time: 'Monday', unread: false },
  ];

  const staffMessages = [
    { id: 101, sender: 'Principal Davis', subject: 'Urgent: Staff Meeting Tomorrow at 8 AM', time: '11:45 AM', unread: true },
    { id: 102, sender: 'IT Department', subject: 'Scheduled Maintenance for Teacher Portal', time: '9:00 AM', unread: false },
    { id: 103, sender: 'Prof. Miller (Math)', subject: 'Coordinating the joint midterms', time: 'Yesterday', unread: false },
  ];

  const currentMessages = activeTab === 'students' ? studentMessages : staffMessages;

  return (
    <div className="view-container animate-fade-in" style={{ paddingBottom: '50px' }}>
      <div className="view-header flex-between" style={{ flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1>Inbox</h1>
          <p>Manage your communications with students and staff.</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Tab Switcher */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '5px' }}>
            <button 
              onClick={() => setActiveTab('students')}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '8px 20px', borderRadius: '25px', border: 'none',
                background: activeTab === 'students' ? 'var(--accent-cyan)' : 'transparent',
                color: activeTab === 'students' ? '#000' : 'var(--text-secondary)',
                cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s'
              }}
            >
              <Users size={16} /> Students
            </button>
            <button 
              onClick={() => setActiveTab('staff')}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '8px 20px', borderRadius: '25px', border: 'none',
                background: activeTab === 'staff' ? 'var(--accent-purple)' : 'transparent',
                color: activeTab === 'staff' ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s'
              }}
            >
              <Shield size={16} /> Staff
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input type="text" placeholder={`Search ${activeTab}...`} style={{ padding: '10px 15px 10px 38px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--panel-border)', color: 'white', width: '250px' }} />
          </div>
        </div>
      </div>

      <Card style={{ padding: 0 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {currentMessages.length > 0 ? currentMessages.map(msg => (
            <li key={msg.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', borderBottom: '1px solid var(--panel-border)', background: msg.unread ? (activeTab === 'students' ? 'rgba(0, 229, 255, 0.05)' : 'rgba(138, 43, 226, 0.05)') : 'transparent', cursor: 'pointer', transition: 'background 0.2s' }}>
              <div style={{ padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: `1px solid ${msg.unread ? (activeTab === 'students' ? 'var(--accent-cyan)' : 'var(--accent-purple)') : 'transparent'}` }}>
                <Mail size={20} color={msg.unread ? (activeTab === 'students' ? 'var(--accent-cyan)' : 'var(--accent-purple)') : 'var(--text-secondary)'} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <h4 style={{ margin: 0, fontWeight: msg.unread ? 'bold' : 'normal', color: 'var(--text-primary)' }}>{msg.sender}</h4>
                  <span style={{ fontSize: '12px', color: msg.unread ? (activeTab === 'students' ? 'var(--accent-cyan)' : 'var(--accent-purple)') : 'var(--text-secondary)', fontWeight: msg.unread ? 'bold' : 'normal' }}>{msg.time}</span>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: msg.unread ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{msg.subject}</p>
              </div>
            </li>
          )) : (
            <li style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              No messages found in this category.
            </li>
          )}
        </ul>
      </Card>
    </div>
  );
}
